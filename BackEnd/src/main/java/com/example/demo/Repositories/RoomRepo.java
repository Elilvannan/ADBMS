
package com.example.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.example.demo.Domain.Room;

public interface RoomRepo extends JpaRepository<Room, Integer>{

    @Query(value="call View_Empty_Room", nativeQuery = true)
    List<Object[]> getEmptyRoomProc();

    @Query(value="select * from room_details", nativeQuery = true)
    List<Object[]> getRoomDetails();

}
