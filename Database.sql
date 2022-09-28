create database HOTELMS

USE HOTELMS


drop TABLE users(
user_name varchar(255),
password varchar(255),
post varchar(60),
primary key(user_name));

insert into users(user_name,password,post)
values('admin',md5('123'),'admin');

select * from users;



