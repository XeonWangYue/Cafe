package top.xeonwang.tmxk.domain;

import java.util.ArrayList;

public class UserOrder
{
	private ArrayList<Foodid_num> FoodInf;
	
	public ArrayList<Foodid_num> getFoodInf() {
		return this.FoodInf;
	}
	public void setFoodInf(ArrayList<Foodid_num> f) {
		this.FoodInf = f;
	}
	
	public UserOrder(int uid,String oid,ArrayList<Foodid_num> f)
	{
		this.FoodInf = f;
	}
	
	
}
