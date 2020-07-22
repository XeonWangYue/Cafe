package top.xeonwang.tmxk.dao;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
@Repository
public interface OAMapper
{
	//新建 订单-管理员-用户
	public void AddOA(@Param("OrderId") String OrderId,@Param("UserId") int UserId);
	//删除 订单-管理员-用户
	public void DropOa(@Param("OrderId") String OrderId,@Param("AdminId") String AdminId,@Param("UserId") int UserId);
	//根据用户id查找历史订单
	public ArrayList<String> GetHistory(@Param("UserId") int UserId);
	//获取所有订单号
	public ArrayList<String> GetAllHistory();
}
