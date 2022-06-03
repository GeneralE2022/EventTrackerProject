package com.skilldistillery.allowance.services;

import java.util.List;

import com.skilldistillery.allowance.entities.Allowance;

public interface AllowanceService {

	List<Allowance> index();

	Allowance findAllowance(int id);

	Allowance createAllowance(Allowance allowance);

	Allowance updateAllowance(Allowance allowance, int id);
	
	Boolean deleteAllowance(int id);

}