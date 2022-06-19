package com.skilldistillery.allowance.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.allowance.entities.Allowance;
import com.skilldistillery.allowance.services.AllowanceService;

@RequestMapping("api")
@RestController
@CrossOrigin({ "*", "http://localhost" })
public class AllowanceController {

	@Autowired
	private AllowanceService as; 
	
	@GetMapping("allowances")
	public List<Allowance> index() {
		return as.index(); 
	}
	
	@GetMapping("allowances/{id}")
	public Allowance findAllowanceById(@PathVariable int id, HttpServletResponse res) {
		return as.findAllowance(id); 
	}
	
	@PostMapping("allowances")
	public Allowance createAllowance(@RequestBody Allowance allowance, HttpServletResponse res) {
		return as.createAllowance(allowance); 
	}
	
	@PutMapping("allowances/{id}")
	public Allowance updateAllowance(@RequestBody Allowance allowance, @PathVariable int id, HttpServletResponse res) {
		
		Allowance updated = null;  
				
		try {
			updated = as.updateAllowance(allowance, id);
		} catch (Exception e) {
//			e.printStackTrace();
			res.setStatus(400);
		}
		return updated;
	}
	
	@DeleteMapping("allowances/{id}")
	public Boolean deleteAllowance(@PathVariable int id) {
		boolean destroyed = false;
		as.deleteAllowance(id);
		if (as.findAllowance(id) != null) {
			destroyed = false; 
		}
		destroyed = true; 
		return destroyed; 
	}
	
}




