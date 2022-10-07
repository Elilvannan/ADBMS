package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Domain.Customer;

public interface CustomerRepo extends JpaRepository<Customer,Integer>{
    
}
