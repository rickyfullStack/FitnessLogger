package com.example.Capstonebackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.Capstonebackend.model.Nutrition;

@Repository
public interface NutritionRepository extends JpaRepository<Nutrition, Long> {

}
