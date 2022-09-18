CREATE DATABASE HOTELMS

USE HOTELMS

CREATE TABLE users(
user_id int Identity(1,1),
user_name varchar(255),
password varchar(255),
post varchar(60),
primary key(user_id));

insert into users(user_name,password,post)
values('admin','123','admin')

select *from users

