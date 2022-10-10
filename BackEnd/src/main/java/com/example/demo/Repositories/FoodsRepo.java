package com.example.demo.Repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

import com.example.demo.Domain.Foods;

@Repository
public interface FoodsRepo extends JpaRepository<Foods, String>{

    @Query(value="call View_Food_Details_ByCategory", nativeQuery = true)
    List<Object[]> getFoodDetailsBycategory(String category);
    

    @Transactional
    @Procedure(procedureName ="Delete_Food_Details")
    void deleteFoodItem(@Param("id") Integer id);

}
