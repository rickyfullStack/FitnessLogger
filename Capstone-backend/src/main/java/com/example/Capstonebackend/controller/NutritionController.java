package com.example.Capstonebackend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Capstonebackend.exception.ResourceNotFoundException;
import com.example.Capstonebackend.model.Nutrition;
import com.example.Capstonebackend.repository.NutritionRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class NutritionController {

	@Autowired
	private NutritionRepository nutritionRepository;
	
	//GetAllnutrition
	@GetMapping("/nutrition")
	public List<Nutrition> getAllNutrition(){
		return nutritionRepository.findAll();
	}
	// create nutrition rest api
		@PostMapping("/nutrition")
		public Nutrition createNutrition(@RequestBody Nutrition nutrition) {
			return nutritionRepository.save(nutrition);
		}

		// get nutrition by id rest api
		@GetMapping("/nutrition/{id}")
		public ResponseEntity<Nutrition> getNutritionById(@PathVariable Long id) {
			Nutrition nutrition = nutritionRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Nutrition not exist with id :" + id));
			return ResponseEntity.ok(nutrition);
}
		// update nutrition rest api

		@PutMapping("/nutrition/{id}")
		public ResponseEntity<Nutrition> updateNutrition(@PathVariable Long id, @RequestBody Nutrition nutritionDetails){
			Nutrition nutrition = nutritionRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Nutrition not exist with id :" + id));

			nutrition.setNutritionItem(nutritionDetails.getNutritionItem());
			nutrition.setCalories(nutritionDetails.getCalories());
			nutrition.setProtein(nutritionDetails.getProtein());
			nutrition.setCarbs(nutritionDetails.getCarbs());
			nutrition.setFats(nutritionDetails.getFats());

			Nutrition updatedNutrition = nutritionRepository.save(nutrition);
			return ResponseEntity.ok(updatedNutrition);
		}
		// delete nutrition rest api
		@DeleteMapping("/nutrition/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteNutrition(@PathVariable Long id){
			Nutrition nutrition = nutritionRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("nutrition not exist with id :" + id));

			nutritionRepository.delete(nutrition);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}

}

