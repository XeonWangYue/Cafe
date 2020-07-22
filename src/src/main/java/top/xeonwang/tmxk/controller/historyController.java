package top.xeonwang.tmxk.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import top.xeonwang.tmxk.domain.Food_PerCent;
import top.xeonwang.tmxk.domain.OrderRes;
import top.xeonwang.tmxk.domain.User;
import top.xeonwang.tmxk.domain.UserInfo;
import top.xeonwang.tmxk.domain.UserToken;
import top.xeonwang.tmxk.service.OAService;
import top.xeonwang.tmxk.service.OFUService;
import top.xeonwang.tmxk.service.OrderService;
import top.xeonwang.tmxk.service.UserService;
import top.xeonwang.tmxk.util.Token;
import top.xeonwang.tmxk.util.myUtil;

@Controller
public class historyController
{
	@Resource
	private OFUService ofuservice;
	@Resource
	private OAService oaservice;
	@Resource
	private OrderService orderservice;
	@Resource
	private UserService userservice;

	@RequestMapping("/GetHistory")
	@ResponseBody
	public String GetHistory(HttpServletRequest request) throws JsonProcessingException
	{
		String text=myUtil.readData(request);
		ObjectMapper om = new ObjectMapper();
		Cookie[] cookie=request.getCookies();
		Map<String, Object> re = new HashMap<String, Object>();
		int cookie_index = -1;
		if(cookie==null) {
			re.put("ok","false");
			return om.writeValueAsString(re);
		}
		
		for(int i = 0;i < cookie.length;i++)
		{
			if(cookie[i].getName().equals("token"))
				cookie_index = i;
		}
		
		if(cookie_index == -1)
		{
			re.put("ok","false");
			return om.writeValueAsString(re);
		}
		
		UserToken ut=Token.verify(cookie[cookie_index].getValue());
		if(ut.getUserType() == "user")
			return JSONObject.toJSONString(oaservice.GetHistory(ut.getUserId()));
		else
			return JSONObject.toJSONString(oaservice.GetAllHistory());
	}

	@RequestMapping("/GetOrderInf")
	@ResponseBody
	public String GetOrderInf(HttpServletRequest request) throws JsonMappingException, JsonProcessingException
	{
		String text=myUtil.readData(request);
		//jackson工具
		ObjectMapper om = new ObjectMapper();
		//返回值
		Map<String, Object> re = new HashMap<String, Object>();
		System.out.println(text);
		
		String OrderId =om.readValue(text, String.class);
		
		return JSONObject.toJSONString(new OrderRes(ofuservice.GetOrder(OrderId),
				orderservice.GetStatus(OrderId),
				orderservice.GetTime(OrderId)));		
	}

	@RequestMapping("/GetPopulor")
	@ResponseBody
	public String GetPerc()
	{
		ArrayList<Food_PerCent> f_p = ofuservice.GetPercent();
//		f_p.sort(null);
		return JSONObject.toJSONString(f_p);
	}
	
}
