create database HOTELMS

USE HOTELMS


CREATE TABLE users(
user_name varchar(255),
password varchar(255),
post varchar(60),
primary key(user_name));

insert into users(user_name,password,post)
values('admin',md5('123'),'admin');

select * from users;

CREATE TABLE  customer(
cus_id int auto_increment primary key,
cus_name  varchar(255),
dob date,
nic_number varchar(50),
gender varchar(20),
address varchar(30),
tel_no int(10),

foreign key (cus_name) references users(user_name),
foreign key (cus_id) references invoice(invoice_id)
);

drop table customer;

create table invoice(
invoice_id int identity(1,1) primary  key,
status varchar(5),
);

create table employee(
emp_id  int identity(1,1) primary key,
emp_name varchar(255),
tel_no bigint,
);

create table room(
room_id  int identity(1,1) primary key,
cus_id int,
booking_status int,
room_occupancy  varchar(20)
foreign key (cus_id) references customer(cus_id)
);

drop table payment_transaction;

create table food(
food_id  int identity(1,1) primary key,
cus_id int,
order_status int,
foreign key (cus_id) references customer(cus_id)
);

create table payment_transaction(
trans_id int identity(1,1) primary key,
cus_id int,
total_payment bigint,
type varchar(50),
date date
foreign key (cus_id) references customer(cus_id)
);

create table payment_bill(
bill_id int identity(1,1) primary key,
trans_id int,
amount bigint,
type varchar(20),
date date,
foreign key (trans_id) references payment_transaction(trans_id)
);

create table permission(
cus_id int,
status int
foreign key (cus_id) references customer(cus_id)
);

create table category(
cus_id int,
room_id int,
food_id int,
type varchar(20),
name varchar(50),
foreign key (cus_id) references customer(cus_id),
foreign key (room_id) references room(room_id),
foreign key (food_id) references food(food_id)

);


