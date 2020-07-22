package top.xeonwang.tmxk.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import top.xeonwang.tmxk.domain.Food;

public interface FoodService
{
	//增加菜单
	public boolean AddFood(String FoodName,String FoodType,long FoodStock,String FoodUnit,String FoodImg,double FoodPrice);
	//修改菜单
	public void UpdateName(Integer FoodId,String FoodName);
	public void UpdateType(Integer FoodId,String FoodType);
	public void UpdateStore(Integer FoodId,long FoodStore);
	public void UpdateUnit(Integer FoodId,String FoodUnit);
	public void UpdateImg(Integer FoodId,String FoodImg);
	public void UpdatePrice(Integer FoodId,double FoodPrice);
	//根据名字查找id
	public String FindByName(String FoodName);
	//根据id查找库存
	public int GetStock(Integer FoodId);
	//删除菜单
	public void DropFood(Integer FoodId);
	//获取全部菜单
	public List<Food> GetAll();
}
