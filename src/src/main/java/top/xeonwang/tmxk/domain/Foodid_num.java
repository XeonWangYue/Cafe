package top.xeonwang.tmxk.domain;

public class Foodid_num
{
	private String FoodId;
	private int FoodNumber;
	
	public String getFoodId() {
		return this.FoodId;
	}
	public void setFoodId(String Id) {
		this.FoodId = Id;
	}
	public int getFoodNumber() {
		return this.FoodNumber;
	}
	public void setFoodNumber(int n) {
		this.FoodNumber = n;
	}
	
	public Foodid_num(String id,int n)
	{
		// TODO Auto-generated constructor stub
		this.FoodId = id;
		this.FoodNumber = n;
	}
	
}
