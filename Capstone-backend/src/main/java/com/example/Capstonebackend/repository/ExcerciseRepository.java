package com.example.Capstonebackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Capstonebackend.model.Excercise;

@Repository
public interface ExcerciseRepository extends JpaRepository<Excercise, Long> {

}