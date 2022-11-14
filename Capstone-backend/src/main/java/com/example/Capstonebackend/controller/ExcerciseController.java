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
import com.example.Capstonebackend.model.Excercise;
import com.example.Capstonebackend.repository.ExcerciseRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ExcerciseController {

	@Autowired
	private ExcerciseRepository excerciseRepository;
	
	//GetAllExcercises
	@GetMapping("/excercises")
	public List<Excercise> getAllExcercises(){
		return excerciseRepository.findAll();
	}
	// create employee rest api
		@PostMapping("/excercises")
		public Excercise createExcercise(@RequestBody Excercise excercise) {
			return excerciseRepository.save(excercise);
		}

		// get excercise by id rest api
		@GetMapping("/excercises/{id}")
		public ResponseEntity<Excercise> getExcerciseById(@PathVariable Long id) {
			Excercise excercise = excerciseRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Excercise not exist with id :" + id));
			return ResponseEntity.ok(excercise);
}
		// update excercise rest api

		@PutMapping("/excercises/{id}")
		public ResponseEntity<Excercise> updateExcercise(@PathVariable Long id, @RequestBody Excercise excerciseDetails){
			Excercise excercise = excerciseRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Excercise not exist with id :" + id));

			excercise.setExcerciseName(excerciseDetails.getExcerciseName());
			excercise.setSets(excerciseDetails.getSets());
			excercise.setReps(excerciseDetails.getReps());
			excercise.setWeight(excerciseDetails.getWeight());

			Excercise updatedExcercise = excerciseRepository.save(excercise);
			return ResponseEntity.ok(updatedExcercise);
		}
		// delete excercise rest api
		@DeleteMapping("/excercises/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteExcercise(@PathVariable Long id){
			Excercise excercise = excerciseRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Excercise not exist with id :" + id));

			excerciseRepository.delete(excercise);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}

}
