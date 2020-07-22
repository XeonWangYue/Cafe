package top.xeonwang.tmxk.controller;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import top.xeonwang.tmxk.domain.Food;
import top.xeonwang.tmxk.service.FoodService;
import top.xeonwang.tmxk.service.UserService;
import top.xeonwang.tmxk.util.myUtil;


@Controller
public class menuController {
	@Resource
	private FoodService foodservice;
	@Resource
	private UserService userService;
	//获取菜单
	@RequestMapping("/getMenuList")
	@ResponseBody
	public String getMenu() throws JsonProcessingException {
		System.out.println("getMenu");
		if(foodservice.GetAll()==null) {
			System.out.println("false");
			return null;
		}
//		ObjectMapper om=new ObjectMapper();
//		JSONArray ja=new JSONArray();
		
		return JSONObject.toJSONString(foodservice.GetAll());
	}
	
	//新增菜单
	@RequestMapping("/addMenuList")
	@ResponseBody
	public String addMenu(HttpServletRequest request) throws IOException
	{
		//jackson工具
		ObjectMapper om = new ObjectMapper();
		//返回值
		request.setCharacterEncoding("UTF-8");
		Map<String, Object> re = new HashMap<String, Object>();
		String text=new String();
		System.out.println(text);
		
		Food food=om.readValue(myUtil.readData(request), Food.class);
		
		if(foodservice.AddFood(food.getFoodName(), food.getFoodType(), 
				Long.valueOf(food.getFoodStock()), food.getFoodUnit(), 
				food.getFoodImg(),Double.valueOf(food.getFoodPrice()))) {
			re.put("ok","true");
		}
		else {
			re.put("ok", "false");
		}
		
		return om.writeValueAsString(re);
	}
	
	@RequestMapping("/uploadPic")
	@ResponseBody
	public String uploadPic(HttpServletRequest request) throws JsonProcessingException
	{
		Map<String, Object> re=new HashMap<String, Object>();
		ObjectMapper om = new ObjectMapper();
        MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
        List<MultipartFile> fileList = multipartRequest.getFiles("uploadImage");
        for (MultipartFile item : fileList) {
            String fileName = "";        //当前上传文件全名称
            String fileType = "";        //当前上传文件类型
            String saveFileName = "";    //保存到服务器目录的文件名称
            String reportAddr = request.getSession().getServletContext().getRealPath("/")+"/img";      //保存到服务器目录的文件全路径
            try {
                fileName = item.getOriginalFilename();
                fileType = item.getContentType();
            }catch (Exception e) {

			}
            
            File savedFile = new File(reportAddr, fileName);
            re.put("name",fileName);
            try {
				item.transferTo(savedFile);
			} catch (IllegalStateException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

        }
       
		System.out.println("success");
		
		return om.writeValueAsString(re);
	}
	
	
	
}
