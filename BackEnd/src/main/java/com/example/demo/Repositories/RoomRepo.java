
package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.Domain.Foods;

public interface RoomRepo extends JpaRepository<Foods, Integer>{

    @Query(value="call View_Empty_Room()", nativeQuery = true)
    List<Object[]> getEmptyRooms();

    @Query(value="select * from room_details", nativeQuery = true)
    List<Object[]> getRoomDetails();

}
