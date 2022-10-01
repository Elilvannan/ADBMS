package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Domain.Foods;

public interface FoodsRepo extends JpaRepository<Foods, Integer>{

}
