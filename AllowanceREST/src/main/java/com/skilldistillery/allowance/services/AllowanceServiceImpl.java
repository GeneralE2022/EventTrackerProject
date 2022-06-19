package com.skilldistillery.allowance.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.allowance.entities.Allowance;
import com.skilldistillery.allowance.repositories.AllowanceRepository;

@Service
public class AllowanceServiceImpl implements AllowanceService {

	@Autowired
	private AllowanceRepository ar;

	@Override
	public List<Allowance> index() {
		return ar.findAll();
	}

	@Override
	public Allowance findAllowance(int id) {
		return ar.findById(id);
	}

	@Override
	public Allowance createAllowance(Allowance allowance) {
		return ar.saveAndFlush(allowance);
	}

	@Override
	public Allowance updateAllowance(Allowance allowance, int id) {
		Allowance existing = findAllowance(id);
		existing.setEntry(allowance.getEntry());
		existing.setNote(allowance.getNote());
		existing.setType(allowance.getType());
		existing.setCreatedDate(allowance.getCreatedDate());
		return ar.save(existing);
	}

	@Override
	public Boolean deleteAllowance(int id) {
		ar.deleteById(id);
		return !ar.existsById(id);
	}
}
