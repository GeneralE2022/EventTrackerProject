package com.skilldistillery.allowance.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;

@Entity
public class Allowance {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private int entry;
	
	private String type;
	
	private String note; 
	
	@CreationTimestamp
	@Column(name = "created_date")
	private LocalDateTime createdDate; 

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

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public LocalDateTime getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(LocalDateTime createdDate) {
		this.createdDate = createdDate;
	}

	public Allowance() {
		super();
	}

	@Override
	public String toString() {
		return "Allowance [id=" + id + ", entry=" + entry + ", type=" + type + ", note=" + note + ", createdDate="
				+ createdDate + "]";
	}

}
