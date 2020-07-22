package top.xeonwang.tmxk.service;

import java.util.ArrayList;

import top.xeonwang.tmxk.domain.Food_PerCent;
import top.xeonwang.tmxk.domain.OrderFood;

public interface OFUService
{
	//新建 订单-食物-用户
	public void AddOFU(String OrderId,Integer FoodId,Integer FoodNumber);
	//删除 订单-食物-用户
	public void DropOFU(String OrderId,Integer FoodId,Integer FoodNumber);
	//根据订单号获取订单详细信息
	public ArrayList<OrderFood> GetOrder(String OrderId);
	//获取最受欢迎菜品
	public ArrayList<Food_PerCent> GetPercent();
}
