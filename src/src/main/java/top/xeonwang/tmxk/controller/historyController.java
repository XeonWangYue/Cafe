package top.xeonwang.tmxk.controller;

import java.util.ArrayList;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import top.xeonwang.tmxk.domain.Food_PerCent;
import top.xeonwang.tmxk.domain.OrderRes;
import top.xeonwang.tmxk.service.OAService;
import top.xeonwang.tmxk.service.OFUService;
import top.xeonwang.tmxk.service.OrderService;

@Controller
public class historyController
{
	@Resource
	private OFUService ofuservice;
	@Resource
	private OAService oaservice;
	@Resource
	private OrderService orderservice;

	@RequestMapping("/GetHistory")
	@ResponseBody
	public ArrayList<String> GetHistory(HttpServletRequest request)
	{
		return oaservice.GetHistory(request.getParameter("UserId"));
	}

	@RequestMapping("/GetOrderInf")
	@ResponseBody
	public OrderRes GetOrderInf(HttpServletRequest request)
	{
		return new OrderRes(ofuservice.GetOrder(request.getParameter("OrderId")),
				orderservice.GetStatus(request.getParameter("OrderId")),
				orderservice.GetTime(request.getParameter("OrderId")));		
	}

	@RequestMapping("/GetPopulor")
	@ResponseBody
	public ArrayList<Food_PerCent> GetPerc()
	{
		ArrayList<Food_PerCent> f_p = ofuservice.GetPercent();
		f_p.sort(null);
		return f_p;
	}
	
}
