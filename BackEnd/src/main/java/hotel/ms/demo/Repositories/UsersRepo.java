package hotel.ms.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import hotel.ms.demo.Domain.users;

public interface UsersRepo extends JpaRepository<users, Integer> {
    
}
