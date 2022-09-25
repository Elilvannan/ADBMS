package hotel.ms.demo.Service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import hotel.ms.demo.Domain.users;
import hotel.ms.demo.Repositories.UsersRepo;
import hotel.ms.demo.Service.usersService;

public class userServiceImpl implements usersService{
    @Autowired
    private UsersRepo usersrepo;

    @Override
    public List<users> getAllUsers() {
        return usersrepo.findAll();
    }
    
}
