create database HOTELMS

USE HOTELMS

create TABLE users(
user_id int auto_increment primary key,
user_name varchar(255),
password varchar(255),
post varchar(60),
foreign key(user_name) references customer(cus_name));

create table customer(
    cus_name varchar(255) primary key,
    cus_phone int(11),
    cus_address varchar(20),
    cus_email varchar(255),
    cus_nic varchar(20),
    cus_gender varchar(20),
    cus_dob date
)

/* Trigger to add new user account when customer register for the system */
DELIMITER //
CREATE trigger createUserAccount
AFTER INSERT ON customer
FOR EACH ROW
BEGIN
	DECLARE user_name varchar(255);
	DECLARE nic_as_pw varchar(255);
    DECLARE post varchar(255);
    
    SET post = "customer";
    SET user_name = NEW.cus_name;
    SET nic_as_pw = NEW.cus_nic;
    insert into users(user_name,password,post) values(user_name,md5(nic_as_pw),post);
    
END //
DELIMITER ;



    

