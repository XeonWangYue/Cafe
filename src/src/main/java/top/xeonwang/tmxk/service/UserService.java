package top.xeonwang.tmxk.service;

import java.text.ParseException;
import java.util.ArrayList;

import top.xeonwang.tmxk.domain.User;


public interface UserService
{
//	增加用户
	public void AddUser(String UserName,String UserPwd,String UserPhone,String UserGender,String UserEmail,String UserBirthday) 
			throws ParseException;
//	修改用户
	public void UpdateName(String UserId,String UserName);
	public void UpdatePwd(String UserId,String UserPwd);
	public void UpdatePhone(String UserId,String UserPhone);
	public void UpdateSex(String UserId,String UserSex);
	public void UpdateEmail(String UserId,String UserEmail);	
//	根据姓名、电话查找用户id
	public String FindByName_Phone(String UserName,String UserPhone);
//	删除用户
	public void DropUser(String UserId);
	
// 	验证用户
	public Integer ValidateUser(String UserName, String UserPwd);
//	验证用户名
	public String CheckUserName(String UserName);
// 	返回所有信息
	public User getAllData(Integer UserId);
//	获取所有用户信息	
	public ArrayList<User> GetAll();
}
