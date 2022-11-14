package com.example.Capstonebackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "nutrition")
public class Nutrition {

	@Id
	@Column(name = "nutrition_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long nutrition_id;
	@Column(name = "nutrition_item")
	private String nutritionItem;
	@Column(name = "calories")
	private Double calories;
	@Column(name = "protein")
	private Double protein;
	@Column(name = "carbs")
	private Double carbs;
	@Column(name = "fats")
	private Double fats;

	public Long getNutrition_id() {
		return nutrition_id;
	}

	public void setNutrition_id(Long nutrition_id) {
		this.nutrition_id = nutrition_id;
	}

	public String getNutritionItem() {
		return nutritionItem;
	}

	public void setNutritionItem(String nutritionItem) {
		this.nutritionItem = nutritionItem;
	}

	public Double getCalories() {
		return calories;
	}

	public void setCalories(Double calories) {
		this.calories = calories;
	}

	public Double getProtein() {
		return protein;
	}

	public void setProtein(Double protein) {
		this.protein = protein;
	}

	public Double getCarbs() {
		return carbs;
	}

	public void setCarbs(Double carbs) {
		this.carbs = carbs;
	}

	public Double getFats() {
		return fats;
	}

	public void setFats(Double fats) {
		this.fats = fats;
	}

	public Nutrition(Long nutrition_id, String nutritionItem, Double calories, Double protein, Double carbs,
			Double fats) {
		super();
		this.nutrition_id = nutrition_id;
		this.nutritionItem = nutritionItem;
		this.calories = calories;
		this.protein = protein;
		this.carbs = carbs;
		this.fats = fats;
	}

	public Nutrition() {
		super();
	}

}
