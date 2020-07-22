package top.xeonwang.tmxk.controller;

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

import top.xeonwang.tmxk.domain.UserOrder;
import top.xeonwang.tmxk.domain.UserToken;
import top.xeonwang.tmxk.service.FoodService;
import top.xeonwang.tmxk.service.OAService;
import top.xeonwang.tmxk.service.OFUService;
import top.xeonwang.tmxk.service.OrderService;
import top.xeonwang.tmxk.util.GetRandomId;
import top.xeonwang.tmxk.util.Token;
import top.xeonwang.tmxk.util.myUtil;

@Controller
public class OrderController
{
	@Resource
	private OrderService orderservice;
	@Resource
	private OFUService ofuservice;
	@Resource
	private OAService oaservice;
	@Resource
	private FoodService foodservice;

	@RequestMapping("/order")
	@ResponseBody
	public String AddOrder(HttpServletRequest request) throws JsonMappingException, JsonProcessingException
	{
		ObjectMapper om = new ObjectMapper();
		String token = null;
		String text = myUtil.readData(request);
		UserOrder order = om.readValue(text, UserOrder.class);	
		Cookie[] cookie=request.getCookies();
		int cookie_index = -1;

		Map<String, Object> re = new HashMap<String, Object>();
		re.put("ok","false");

		if(order == null || cookie == null)
			return om.writeValueAsString(re);
		
		for(int i = 0;i < cookie.length;i++)
		{
			if(cookie[i].getName().equals("token"))
				cookie_index = i;
		}
		
		if(cookie_index == -1)return om.writeValueAsString(re);
		
		UserToken ut=Token.verify(cookie[cookie_index].getValue());
		
		// 生成orderid
		String OrderId = GetRandomId.GetRandomString(6);

		// 增加orderinf数据
		orderservice.AddOrder(OrderId);

		// 增加OA表数据
		oaservice.AddOA(OrderId, ut.getUserId());

		// 增加ofu表数据
		for (int i = 0; i < order.getFoodInf().size(); i++)
			ofuservice.AddOFU(OrderId, order.getFoodInf().get(i).getFoodId(),
					order.getFoodInf().get(i).getFoodNumber());
		
		//修改food表信息
		for(int i = 0;i < order.getFoodInf().size(); i++)
		{
			if(foodservice.GetStock(order.getFoodInf().get(i).getFoodId()) - order.getFoodInf().get(i).getFoodNumber() > 0)
				foodservice.UpdateStore(order.getFoodInf().get(i).getFoodId(), order.getFoodInf().get(i).getFoodNumber());
			else
			{
				re.put("error", "false");
				return om.writeValueAsString(re);
			}
		}
		
		re.put("ok", "true");
		return om.writeValueAsString(re);

	}
}
