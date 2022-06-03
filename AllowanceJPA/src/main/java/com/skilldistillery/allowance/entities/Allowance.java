package com.skilldistillery.allowance.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Allowance {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private int entry;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getEntry() {
		return entry;
	}

	public void setEntry(int entry) {
		this.entry = entry;
	}

	public Allowance() {
		super();
	}

	@Override
	public String toString() {
		return "Bank [id=" + id + ", entry=" + entry + "]";
	}

}
