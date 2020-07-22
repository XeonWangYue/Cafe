package top.xeonwang.tmxk.service;

import java.util.ArrayList;

public interface OAService
{
	// 新建 订单-管理员-用户
	public void AddOA(String OrderId, int UserId);

	// 删除 订单-管理员-用户
	public void DropOa(String OrderId, String AdminId, int UserId);

	// 根据用户id查找历史订单
	public ArrayList<String> GetHistory(int UserId);

	// 获取所有订单号
	public ArrayList<String> GetAllHistory();
}
