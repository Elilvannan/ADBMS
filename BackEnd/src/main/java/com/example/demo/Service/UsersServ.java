package com.example.demo.Service;

import java.util.List;

import com.example.demo.Domain.Customer;
import com.example.demo.Domain.Foods;
import com.example.demo.Domain.Users;

public interface UsersServ{
	public List<Users> getAllUsers();

	public List<Foods> getAllFoods();

    public String AddNewCus(Users user);

	public  List<Customer> getAllCus();
}
