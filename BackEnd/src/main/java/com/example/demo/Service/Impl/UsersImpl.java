package com.example.demo.Service.Impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Domain.Cart;
import com.example.demo.Domain.Cart_Items;
import com.example.demo.Domain.Customer;
import com.example.demo.Domain.Employee;
import com.example.demo.Domain.Foods;
import com.example.demo.Domain.Invoice;
import com.example.demo.Domain.Users;
import com.example.demo.Repositories.CartRepo;
import com.example.demo.Repositories.CustomerRepo;
import com.example.demo.Repositories.EmployeeRepo;
import com.example.demo.Repositories.FoodsRepo;
import com.example.demo.Repositories.InvoiceRepo;
import com.example.demo.Repositories.RoomRepo;
import com.example.demo.Repositories.UsersRepo;
import com.example.demo.Service.UsersServ;

@Service
@Transactional
public class UsersImpl implements UsersServ{
	
	@Autowired
	private UsersRepo usersRepo;
	
	@Autowired
	private FoodsRepo foodsRepo;

	@Autowired
	private CustomerRepo customerRepo;

	@Autowired
	private CartRepo cartRepo;

	@Autowired
	private InvoiceRepo invoiceRepo;

	@Autowired
    private EmployeeRepo employeeRepo;

	@Autowired
	private RoomRepo roomRepo;
	
	@Override
	public List<Users> getDetailByUser(String name) {
		return usersRepo.getAllU(name);
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
	public List<Object[]> getAllCus() {
		return customerRepo.findCustomer();
	}

	@Override
	public List<Cart> getAllCartItems() {
		return cartRepo.findAll();
	}

	@Override
	public String AddNewFood(Foods food) {
		foodsRepo.save(food);
		return "New food added";
	}

	@Override
	public String AddToCart(Cart cart) {
		cartRepo.save(cart);
		return "Added to cart";
	}

	@Override
	public List<Invoice> getAllInvoice() {
		return invoiceRepo.findAll();
	}

	@Override
    public List<Employee> getAllEmp() {
        return employeeRepo.findAll();
    }

	@Override
	public List<Customer> getAllCustomerView() {
		return customerRepo.findAll();
	}

	@Override
	public List<Object[]> getTestView() {
		return customerRepo.getTestViewData();
	}

	@Override
	public List<Object[]> getTestProc(Integer id) {
		return cartRepo.getCartItems(id);
	}

	@Override
	public List<Object[]> bookedRooms() {
		// TODO Auto-generated method stub
		return roomRepo.getRoomDetails();
	}

}
