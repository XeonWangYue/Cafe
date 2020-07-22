package top.xeonwang.tmxk.dao;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import top.xeonwang.tmxk.domain.Food;
@Repository
public interface FoodMapper
{
	//增加菜单
	public void AddFood(@Param("FoodName") String FoodName,@Param("FoodType") String FoodType,
			@Param("FoodStock") long FoodStock,@Param("FoodUnit") String FoodUnit,
			@Param("FoodImg") String FoodImg,@Param("FoodPrice") double FoodPrice);
	//修改菜单
	public void UpdateName(@Param("FoodId") String FoodId,@Param("FoodName") String FoodName);
	public void UpdateType(@Param("FoodId") String FoodId,@Param("FoodType") String FoodType);
	public void UpdateStore(@Param("FoodId") String FoodId,@Param("FoodStock") long FoodStock);
	public void UpdateUnit(@Param("FoodId") String FoodId,@Param("FoodUnit") String FoodUnit);
	public void UpdateImg(@Param("FoodId") String FoodId,@Param("FoodImg") String FoodImg);
	public void UpdatePrice(@Param("FoodId") String FoodId,@Param("FoodPrice") double foodPrice);
	//根据名字查找id
	public String FindByName(@Param("FoodName") String FoodName);
	//删除菜单
	public void DropFood(@Param("FoodId") String FoodId);
	//获取全部菜品
	public List<Food> GetAll();
}
