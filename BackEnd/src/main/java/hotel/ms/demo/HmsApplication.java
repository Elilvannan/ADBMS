package hotel.ms.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import hotel.ms.demo.Domain.users;
import hotel.ms.demo.Repositories.UsersRepo;

@SpringBootApplication
public class HmsApplication implements CommandLineRunner{

	@Autowired
	private UsersRepo usersRepo;

	public static void main(String[] args) {
		SpringApplication.run(HmsApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		List<users> user = usersRepo.findAll();
		user.forEach(System.out :: println);
	}

}
