package com.example.demo.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Domain.Cart;
import com.example.demo.Domain.Cart_Items;
import com.example.demo.Domain.Customer;
import com.example.demo.Domain.Employee;
import com.example.demo.Domain.Foods;
import com.example.demo.Domain.Invoice;
import com.example.demo.Domain.Users;
import com.example.demo.Repositories.CustomerRepo;
import com.example.demo.Repositories.UsersRepo;
import com.example.demo.Service.UsersServ;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MyController {
	@Autowired
	private UsersServ usersServ;

	@Autowired
	UsersRepo repo;

	@RequestMapping("/")
	public String index() {
		return "Hello MNH";
	}

	@GetMapping("/getByUser/{user}")
	public List<Users> getByUser(@PathVariable("user") String user){
		return (List<Users>)usersServ.getDetailByUser(user);
	}

	@GetMapping("/getFoods")
	public List<Foods> allFoods() {
		return usersServ.getAllFoods();
	}
	
	@GetMapping("/getCus")
	public List<Customer> registerCus(){
		return usersServ.getAllCustomerView();
	}

	@GetMapping("/getInvoices")
	public List<Invoice> allInvoices() {
		return usersServ.getAllInvoice();
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

	@GetMapping("/getCart")
	public List<Cart> getAllCart(){
		return usersServ.getAllCartItems();
	}

	@GetMapping("/getCustomers")
	public List<Object[]> getAllCustomers(){
		return usersServ.getAllCus();
	}

	@GetMapping("/getEmployees")
    public List<Employee> getAllEmp(){
        return usersServ.getAllEmp();
    }

	@GetMapping("/testView")
	public List<Object[]> getTest(){
		return usersServ.getTestView();
	}

	@GetMapping("/testProcedure/{id}")
	public List<Object[]> getProc(@PathVariable("id") Integer id){
		return usersServ.getTestProc(id);
	}

	@GetMapping("/getRooms")
	public List<Object[]> getBookedRooms(){
		return usersServ.bookedRooms;

	}
	
}
