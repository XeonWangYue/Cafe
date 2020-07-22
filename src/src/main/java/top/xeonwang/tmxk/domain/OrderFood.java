package top.xeonwang.tmxk.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OrderFood
{
	@JsonProperty("foodname")
	private String FoodName; 
	@JsonProperty("foodnumber")
	private int FoodNumber;
	public String getFoodName() {
		return this.FoodName;
	}
	public void setFoodName(String name) {
		this.FoodName = name;
	}
	public int getFoodNumber() {
		return this.FoodNumber;
	}
	public void setFoodNumber(int id) {
		this.FoodNumber = id;
	}
	
}
