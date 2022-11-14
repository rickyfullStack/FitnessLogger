package com.example.Capstonebackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "workouts")
public class Excercise {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private long id;
	@Column(name = "excercise_name")
private String excerciseName;
	@Column(name = "sets")
private String sets;
	@Column(name = "reps")
private String reps;
	@Column(name = "weight")
private String weight;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getExcerciseName() {
		return excerciseName;
	}
	public void setExcerciseName(String excerciseName) {
		this.excerciseName = excerciseName;
	}
	public String getSets() {
		return sets;
	}
	public void setSets(String sets) {
		this.sets = sets;
	}
	public String getReps() {
		return reps;
	}
	public void setReps(String reps) {
		this.reps = reps;
	}
	public String getWeight() {
		return weight;
	}
	public void setWeight(String weight) {
		this.weight = weight;
	}
	public Excercise(long id, String excerciseName, String sets, String reps, String weight) {
		super();
		this.id = id;
		this.excerciseName = excerciseName;
		this.sets = sets;
		this.reps = reps;
		this.weight = weight;
	}
	public Excercise() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Excercise [id=" + id + ", excerciseName=" + excerciseName + ", sets=" + sets + ", reps=" + reps
				+ ", weight=" + weight + "]";
	}
	
}