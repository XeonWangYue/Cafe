package top.xeonwang.tmxk.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Food
{
	private String FoodId;
	@JsonProperty("foodname")
	private String FoodName;
	@JsonProperty("foodtype")
	private String FoodType;
	@JsonProperty("foodstock")
	private long FoodStock;
	@JsonProperty("foodunit")
	private String FoodUnit;
	@JsonProperty("foodimg")
	private String FoodImg;
	@JsonProperty("foodprice")
	private double FoodPrice;

	public String getFoodId()
	{
		return this.FoodId;
	}

	public void setFoodId(String id)
	{
		this.FoodId = id;
	}
	public String getFoodName()
	{
		return this.FoodName;
	}

	public void setFoodName(String name)
	{
		this.FoodName = name;
	}
	public String getFoodType()
	{
		return this.FoodType;
	}

	public void setFoodType(String type)
	{
		this.FoodType = type;
	}
	public long getFoodStock()
	{
		return this.FoodStock;
	}

	public void setFoodStock(long stock)
	{
		this.FoodStock = stock;
	}
	public String getFoodUnit()
	{
		return this.FoodUnit;
	}

	public void setFoodUnit(String unit)
	{
		this.FoodUnit = unit;
	}
	public String getFoodImg()
	{
		return this.FoodImg;
	}

	public void setFoodImg(String img)
	{
		this.FoodImg = img;
	}

	public double getFoodPrice()
	{
		return this.FoodPrice;
	}

	public void setFoodPrice(double price)
	{
		this.FoodPrice = price;
	}
	
}
