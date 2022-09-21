CREATE DATABASE HOTELMS

USE HOTELMS

CREATE TABLE users(
user_name varchar(255),
password varchar(255),
post varchar(60),
primary key(user_name));

insert into users(user_name,password,post)
values('admin',CONVERT(varchar, DecryptByKey('123')),'admin')

drop table users

select * from users;

CREATE TABLE  customer(
cus_id int identity(1,1) primary key,
cus_name  varchar(255),
address varchar(30),
tel_no bigint
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

create table payment_bill


