package com.skilldistillery.allowance.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.allowance.entities.Allowance;

public interface AllowanceRepository extends JpaRepository<Allowance, Integer> {

	Allowance findById(int id); 
	
}