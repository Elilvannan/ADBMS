package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.Domain.Customer;

@Repository
public interface CustomerRepo extends JpaRepository<Customer,Integer>{

    @Query(value= "select * from GET_ALL_CUSTOM", nativeQuery = true)
    List<Object[]> getTestViewData();

    @Query(value="SELECT c.cus_name,c.cus_phone,c.cus_address,c.cus_email, c.cus_nic, c.cus_gender, getAge(c.cus_id) as AGE from customer c", nativeQuery = true)
    List<Object[]> findCustomer();

}
