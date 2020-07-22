package top.xeonwang.tmxk.domain;

import java.util.ArrayList;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OrderRes
{
	@JsonProperty("foodinf")
	private ArrayList<OrderFood> FoodInf;
	@JsonProperty("status")
	private String Status;
	@JsonProperty("ordertime")
	private String Time;
	
	public OrderRes(ArrayList<OrderFood> f,String s,String t)
	{
		// TODO Auto-generated constructor stub
		this.FoodInf = f;
		this.Status = s;
		this.Time = t;
	}
	
	public ArrayList<OrderFood> getFoodInf() {
		return this.FoodInf;
	}
	public void setFoodInf(ArrayList<OrderFood> f) {
		this.FoodInf = f;
	}
	public String getStatus() {
		return this.Status;
	}
	public void setStatus(String s) {
		this.Status = s;
	}
	public String getTime() {
		return this.Time;
	}
	public void settime(String t) {
		this.Time = t;
	}
	
}
