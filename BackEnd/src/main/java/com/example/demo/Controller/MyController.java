package com.example.demo.Controller;

import java.util.List;

import javax.smartcardio.Card;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Domain.Cart;
import com.example.demo.Domain.Customer;
import com.example.demo.Domain.Foods;
import com.example.demo.Domain.Users;
import com.example.demo.Repositories.CustomerRepo;
import com.example.demo.Service.UsersServ;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MyController {
	@Autowired
	private UsersServ usersServ;

	@Autowired
	private CustomerRepo customerRepo;

	@RequestMapping("/")
	public String index() {
		return "Hello MNH";
	}
	
	@GetMapping("/checkLogin")
	public List<Users> allUsers() {
		return usersServ.getAllUsers();
	}
	
	@GetMapping("/getFoods")
	public List<Foods> allFoods() {
		return usersServ.getAllFoods();
	}
	
	@GetMapping("/getCus")
	public List<Customer> registerCus(){
		return usersServ.getAllCus();
	}

	@PostMapping("/addCus")
	public String addCustomer(@RequestBody Customer cus){
		return usersServ.AddNewCus(cus);
		
	}

	@PostMapping("/addFood")
	public String addFood(@RequestBody Foods food){
		return usersServ.AddNewFood(food);
	}

	@PostMapping("/addToCart")
	public String addToCart(@RequestBody Cart cart){
		return usersServ.AddToCart(cart);
	}
	
	
}
