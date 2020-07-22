package top.xeonwang.tmxk.dao;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
@Repository
public interface OrderMapper
{
	//新建订单
	public void AddOrder(@Param("OrderId") String OrderId);
	
	//更新订单状态
	public void UpdateStatus(@Param("OrderId") String OrderId,@Param("OrderStatus") String OrderStatus);
	
	//删除订单
	public void DropOrder(@Param("OrderId") String OrderId);
	
	//获取订单状态
	public String GetStatus(@Param("OrderId") String OrderId);
	
	//获取订单时间
	public String GetTime(@Param("OrderId") String OrderId);
}
