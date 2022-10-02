package com.example.demo.Service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Domain.Customer;
import com.example.demo.Domain.Foods;
import com.example.demo.Domain.Users;
import com.example.demo.Repositories.CustomerRepo;
import com.example.demo.Repositories.FoodsRepo;
import com.example.demo.Repositories.UsersRepo;
import com.example.demo.Service.UsersServ;

@Service
public class UsersImpl implements UsersServ{
	
	@Autowired
	private UsersRepo usersRepo;
	
	@Autowired
	private FoodsRepo foodsRepo;

	@Autowired
	private CustomerRepo customerRepo;
	

	@Override
	public List<Users> getAllUsers() {
		return usersRepo.findAll();
	}

	@Override
	public List<Foods> getAllFoods() {
		return foodsRepo.findAll();
	}

	@Override
	public String AddNewCus(Customer cus) {
		customerRepo.save(cus);
		return ("Inserted");
	}

	@Override
	public List<Customer> getAllCus() {
		return customerRepo.findAll();
	}

	@Override
	public String AddNewFood(Foods food) {
		foodsRepo.save(food);
		return "New food added";
	}
	

}
