package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Domain.Cart;

@Repository
public interface CartRepo extends JpaRepository<Cart,Integer>{
    
}
