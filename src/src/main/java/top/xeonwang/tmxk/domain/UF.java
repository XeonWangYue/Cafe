package top.xeonwang.tmxk.domain;

public class UF {
	private Integer FoodId;
	private Integer FoodNumber;
	public Integer getFoodId() {
		return FoodId;
	}
	public void setFoodId(Integer foodId) {
		FoodId = foodId;
	}
	public Integer getFoodNumber() {
		return FoodNumber;
	}
	public void setFoodNumber(Integer foodNumber) {
		FoodNumber = foodNumber;
	}
	public UF(Integer foodId, Integer foodNumber) {
		super();
		FoodId = foodId;
		FoodNumber = foodNumber;
	}
	
}
