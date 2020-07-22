package top.xeonwang.tmxk.service;

public interface OrderService
{
	// 增加订单
	public void AddOrder(String DataTime, String OrderStatus);

	// 更新订单状态
	public void UpdateStatus(String OrderId, String OrderStatus);

	// 删除订单
	public void DropOrder(String OrderId);

	// 获取订单状态
	public String GetStatus(String OrderId);

	// 获取订单时间
	public String GetTime(String OrderId);
}
