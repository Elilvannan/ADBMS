package com.example.demo.Service;

import java.util.List;

import com.example.demo.Domain.Cart;
import com.example.demo.Domain.Customer;
import com.example.demo.Domain.Employee;
import com.example.demo.Domain.Foods;
import com.example.demo.Domain.Invoice;
import com.example.demo.Domain.Users;

public interface UsersServ{

	public List<Users> getDetailByUser(String name);
	
	public List<Foods> getAllFoods();	

    public String AddNewCus(Customer cus);

	public  List<Customer> getAllCus();

	public List<Cart> getAllCartItems();

    public String AddNewFood(Foods food);

	public String AddToCart(Cart cart);

	public List<Invoice> getAllInvoice();

	public List<Employee> getAllEmp();

}
