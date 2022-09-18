package hotel.ms.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
