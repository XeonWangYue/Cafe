package top.xeonwang.tmxk.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import top.xeonwang.tmxk.dao.OrderMapper;
import top.xeonwang.tmxk.service.OrderService;
@Service("OrderService")
@Transactional
public class OrderServiceImpl implements OrderService
{
	@Resource
	public OrderMapper ordermapper;

	@Override
	public void AddOrder(String OrderId)
	{
		// TODO Auto-generated method stub
		ordermapper.AddOrder(OrderId);
	}

	@Override
	public void UpdateStatus(String OrderId,String OrderStatus)
	{
		// TODO Auto-generated method stub
		ordermapper.UpdateStatus(OrderId,OrderStatus);
	}

	@Override
	public void DropOrder(String OrderId)
	{
		// TODO Auto-generated method stub
		ordermapper.DropOrder(OrderId);
	}

	@Override
	public String GetStatus(String OrderId)
	{
		// TODO Auto-generated method stub
		return ordermapper.GetStatus(OrderId);
	}

	@Override
	public String GetTime(String OrderId)
	{
		// TODO Auto-generated method stub
		return ordermapper.GetTime(OrderId);
	}
}
