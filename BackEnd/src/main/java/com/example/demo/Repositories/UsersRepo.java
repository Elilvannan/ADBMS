package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Domain.Users;

public interface UsersRepo extends JpaRepository<Users,Integer>{
	
}
