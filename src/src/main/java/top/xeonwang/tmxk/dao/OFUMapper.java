package top.xeonwang.tmxk.dao;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import top.xeonwang.tmxk.domain.Food_PerCent;
import top.xeonwang.tmxk.domain.OrderFood;
@Repository
public interface OFUMapper
{
	//新建 订单-食物-用户
	public void AddOFU(@Param("OrderId") String OrderId,@Param("FoodId") String FoodId,@Param("FoodNumber") Integer FoodNumber);
	//删除 订单-食物-用户
	public void DropOFU(@Param("OrderId") String OrderId,@Param("FoodId") String FoodId,@Param("FoodNumber") Integer FoodNumber);
	//根据订单号获取订单详细信息
	public ArrayList<OrderFood> GetOrder(@Param("OrderId") String OrderId);
	//获取最受欢迎菜品
	public ArrayList<Food_PerCent> GetPercent();
}
