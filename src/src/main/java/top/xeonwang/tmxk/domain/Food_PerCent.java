package top.xeonwang.tmxk.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Food_PerCent implements Comparable<Food_PerCent>
{
	@JsonProperty("foodname")
	private String FoodName;
	@JsonProperty("percent")
	private double Percent;
	
	public String getFoodName()
	{
		return this.FoodName;
	}

	public void setFoodName(String name)
	{
		this.FoodName = name;
	}
	
	public double getPercent()
	{
		return this.Percent;
	}

	public void setPercent(double p)
	{
		this.Percent = p;
	}
	
	@Override
	public int compareTo(Food_PerCent f)
	{
		if(this.Percent - f.Percent >= 0)
			return 1;
		else return 0;
	}

}
