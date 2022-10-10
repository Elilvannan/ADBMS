create database HOTELMS;

USE HOTELMS;

create table customer(
	cus_id int auto_increment primary key,
    cus_name varchar(255),
    cus_phone int(11),
    cus_address varchar(20),
    cus_email varchar(255),
    cus_nic varchar(20),
    cus_gender varchar(20),
    cus_dob date
);

create TABLE users(
user_id int auto_increment primary key,
user_name varchar(255),
password varchar(255),
post varchar(60),
cus_id int
);


/* Trigger to add new user account when customer register for the system */
DELIMITER //
create trigger createUserAccount
AFTER INSERT ON customer
FOR EACH ROW
BEGIN
	DECLARE user_name varchar(255);
	DECLARE nic_as_pw varchar(255);
    DECLARE post varchar(255);
    DECLARE cus_id int;
    
    SET post = "customer";
    SET user_name = NEW.cus_name;
    SET nic_as_pw = NEW.cus_nic;
    SET cus_id = NEW.cus_id;
    insert into users(user_name,password,post,cus_id) values(user_name,md5(nic_as_pw),post,cus_id);
    
END //
DELIMITER ;

create table food(
food_id int auto_increment primary key,
food_name varchar(255),
food_price float(10,2),
food_image varchar(255),
food_category varchar(255),
food_desc varchar(255)
);

insert into food(food_name,food_price,food_image,food_category,food_desc)
values
('Nasigurang',650.00,'../../public/Foods/2.jpg','Lunch','The best Nasigurang. In baasmathi rice'),
('Chicken Fry',750.00,'../../public/Foods/3.jpg','Starter','Best chicken fry'),
('Chicken BBQ',1650.00,'../../public/Foods/4.jpg','Lunch','Full chicken BBQ');

/*rooms*/
create table room(
    room_id varchar(255) primary key,
    Booking_status varchar(25),
    room_occupancy int,
    room_description varchar(255),
    cus_id int,
    foreign key(cus_id) references customer(cus_id)
);


show tables;

create table cart(
item_id int primary key,
food_id int,
cus_id int,
foreign key(cus_id) references customer(cus_id),
foreign key(food_id) references food(food_id)
);


create table employee(emp_id varchar(255),
emp_name varchar(255),
emp_age int,
emp_gender varchar(255),
emp_doj varchar(255),
emp_position varchar(255),
emp_address varchar(255)
);

create table invoice(invoice_id int primary key, 
cus_id int,
item_id int,
invoice_date date,
amount float(8,2),
foreign key(cus_id) references customer(cus_id),
foreign key(item_id) references cart(item_id ),
quantity int,
price float(8,2)
);

create table food_orders(
	order_id int auto_increment primary key,
    food_id int,
    food_name varchar(255),
    cus_id int,
    foreign key(food_id) references food(food_id),
    foreign key(cus_id) references customer(cus_id)
);

--  procedure
DELIMITER $
 CREATE PROCEDURE View_Add_To_Cart_Items(IN ID INT)
BEGIN
	SELECT DISTINCT(f.food_name), f.food_id  FROM cart as c,food as f where c.cus_id = ID ;
END$
DELIMITER 

CREATE VIEW FOOD_ORDERS_VIEW
AS
SELECT c.cus_name, f.food_name
FROM ((food f
INNER JOIN food_orders fo ON f.food_id = fo.food_id)
INNER JOIN customer c ON c.cus_id = fo.cus_id);


<<<<<<< Updated upstream
-- procedure
=======
>>>>>>> Stashed changes
DELIMITER $
 CREATE PROCEDURE View_Add_To_Cart_Items(IN ID INT)
BEGIN
	SELECT DISTINCT(f.food_name), f.food_id  FROM cart as c,food as f where c.cus_id = ID ;
END$
DELIMITER 









    

