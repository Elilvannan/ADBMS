package com.example.demo.Repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.Domain.Cart;
import com.example.demo.Domain.Cart_Items;

@Repository
public interface CartRepo extends JpaRepository<Cart,Integer>{

    @Query(value="CALL View_Add_To_Cart_Items(19)", nativeQuery = true)
    List<Object[]> getCartItems(Integer id);

}
