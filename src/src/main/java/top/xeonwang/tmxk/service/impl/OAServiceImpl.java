package top.xeonwang.tmxk.service.impl;

import java.util.ArrayList;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import top.xeonwang.tmxk.dao.OAMapper;
import top.xeonwang.tmxk.service.OAService;
@Service("OAService")
@Transactional
public class OAServiceImpl implements OAService
{
	@Resource
	private OAMapper oamapper;

	@Override
	public void AddOA(String OrderId, int UserId)
	{
		// TODO Auto-generated method stub
		oamapper.AddOA(OrderId, UserId);
	}

	@Override
	public void DropOa(String OrderId, String AdminId, int UserId)
	{
		// TODO Auto-generated method stub
		oamapper.DropOa(OrderId, AdminId, UserId);
	}

	@Override
	public ArrayList<String> GetHistory(int UserId)
	{
		// TODO Auto-generated method stub
		return oamapper.GetHistory(UserId);
	}

	@Override
	public ArrayList<String> GetAllHistory()
	{
		// TODO Auto-generated method stub
		return oamapper.GetAllHistory();
	}
	
	
}
