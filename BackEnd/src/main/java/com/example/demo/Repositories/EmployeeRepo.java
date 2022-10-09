package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Domain.Foods;

public interface EmployeeRepo extends JpaRepository<Foods, Integer>{

}

