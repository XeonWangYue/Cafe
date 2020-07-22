package top.xeonwang.tmxk.service.impl;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import top.xeonwang.tmxk.dao.UserMapper;
import top.xeonwang.tmxk.domain.User;
import top.xeonwang.tmxk.service.UserService;
@Service("UserService")
@Transactional
public class UserServiceImpl implements UserService
{
	@Resource
	private UserMapper usermapper;
	
	public void AddUser(String UserName,String UserPwd,String UserPhone,String UserGender,String UserEmail,String UserBirthday) throws ParseException
	{
		Date date;
		if(UserBirthday.equals("")) {
			date=null;
		}else {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			date = sdf.parse(UserBirthday);
			System.out.println(date);
		}
		if(UserEmail.equals("")) {
			UserEmail=null;
		}
		if(UserGender.equals("")) {
			UserGender=null;
		}
		usermapper.AddUser(UserName, UserPwd, UserPhone, UserGender, UserEmail,date);
	}

	public String FindByName_Phone(String UserName, String UserPhone)
	{
		return usermapper.FindByName_Phone(UserName, UserPhone);		
	}

	public void DropUser(String UserId)
	{
		usermapper.DropUser(UserId);
	}

	public void UpdateName(String UserId, String UserName)
	{
		usermapper.UpdateName(UserId,UserName);
	}

	public void UpdatePwd(String UserId, String UserPwd)
	{
		usermapper.UpdatePwd(UserId, UserPwd);
	}

	public void UpdatePhone(String UserId, String UserPhone)
	{
		usermapper.UpdatePhone(UserId, UserPhone);
	}

	public void UpdateSex(String UserId, String UserSex)
	{
		usermapper.UpdateSex(UserId, UserSex);
	}

	public void UpdateEmail(String UserId, String UserEmail)
	{
		usermapper.UpdateEmail(UserId, UserEmail);
	}

	public Integer ValidateUser(String UserName, String UserPwd) 
	{
		return usermapper.ValidateUser(UserName, UserPwd);
	}
	public String CheckUserName(String UserName) 
	{
		return usermapper.CheckUserName(UserName);
	}
	public User getAllData(Integer UserId) 
	{
		return usermapper.getAllData(UserId);
	}

	@Override
	public ArrayList<User> GetAll()
	{
		// TODO Auto-generated method stub
		return usermapper.GetAll();
	}
}
