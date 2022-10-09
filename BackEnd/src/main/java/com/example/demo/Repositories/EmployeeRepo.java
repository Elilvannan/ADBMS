package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Domain.Employee;

public interface EmployeeRepo extends JpaRepository<Employee, Integer>{

}

