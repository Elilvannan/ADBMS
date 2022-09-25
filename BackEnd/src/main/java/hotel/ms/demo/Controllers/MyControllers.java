package hotel.ms.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hotel.ms.demo.Domain.users;
import hotel.ms.demo.Service.usersService;

@CrossOrigin()
@RestController
public class MyControllers {
    @Autowired
    private usersService usersService;

    @RequestMapping("/")
    public String index(){
        return "Welcome to hotel";

    }

    @RequestMapping("/users")
    public List<users> getAllUsers(){
        return usersService.getAllUsers();
    }
}
