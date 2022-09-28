package com.example.demo.Service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Domain.Users;
import com.example.demo.Repositories.UsersRepo;
import com.example.demo.Service.UsersServ;

@Service
public class UsersImpl implements UsersServ{
	
	@Autowired
	private UsersRepo usersRepo;

	@Override
	public List<Users> getAllUsers() {
		return usersRepo.findAll();
	}
	

}
