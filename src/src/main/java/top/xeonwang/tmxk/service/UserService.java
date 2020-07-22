package top.xeonwang.tmxk.service;

import java.text.ParseException;
import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;

import top.xeonwang.tmxk.domain.User;


public interface UserService
{
//	增加用户
	public void AddUser(String UserName,String UserPwd,String UserPhone,String UserGender,String UserEmail,String UserBirthday) 
			throws ParseException;
//	修改用户
	public void UpdateName(int UserId,String UserName);
	public void UpdatePwd(int UserId,String UserPwd);
	public void UpdatePhone(int UserId,String UserPhone);
	public void UpdateSex(int UserId,String UserSex);
	public void UpdateEmail(int UserId,String UserEmail);	
	public void UpdateBirthday(int UserId,String UserBirthday);
//	根据姓名、电话查找用户id
	public String FindByName_Phone(String UserName,String UserPhone);
//	删除用户
	public void DropUser(int UserId);
	
// 	验证用户
	public Integer ValidateUser(String UserName, String UserPwd);
//	验证用户名
	public String CheckUserName(String UserName);
// 	返回所有信息
	public User getAllData(int UserId);
//	获取所有用户信息	
	public ArrayList<User> GetAll();
}
