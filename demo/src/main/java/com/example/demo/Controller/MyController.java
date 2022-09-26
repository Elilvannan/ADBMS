package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Domain.Users;
import com.example.demo.Service.UsersServ;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MyController {
	@Autowired
	private UsersServ usersServ;

	@RequestMapping("/")
	public String index() {
		return "Hello MNH";
	}
	
	@GetMapping("/checkLogin")
	public List<Users> allUsers() {
		return usersServ.getAllUsers();
	}
}
