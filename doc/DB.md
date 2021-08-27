
create table gym_admin.USER (
user_id serial primary key,
user_name varchar ( 50 ) unique not null,
slug_user_name varchar ( 50 ),
full_name varchar ( 75 ) ,
slug_full_name varchar ( 75 ) ,
password_hash varchar ( 255 ) not null,
email varchar ( 127 ) unique not null,
date_created timestamp not null,
last_login timestamp
);

create table gym_admin.ROLE (
role_id serial primary key,
role_name varchar(75) not null ,
role_name_slug varchar(75) ,
date_created timestamp not null
);


create table gym_admin.EMPLOYEE (
employee_id serial primary key,
role_id int not null ,
foreign key (role_id) references ROLE(role_id),
user_id int unique not null,
foreign key (user_id) references USER(user_id)
);

create table gym_admin.PLAN (
plan_id serial primary key,
plan_name varchar(75) not null ,
plan_name_slug varchar(75) ,
date_created timestamp not null,
cost_per_month decimal(9,2) not null
);

create table gym_admin.PLAN_SCHEDULE (
plan_schedule_id serial primary key,
plan_id int not null ,
foreign key (plan_id) references PLAN(plan_id),
activity_id int not null ,
foreign key (activity_id) references ACTIVITY(activity_id),
facility_id int not null ,
foreign key (facility_id) references FACILITY(facility_id),
strict_time bool not null ,
hour_from smallint not null ,
hour_to smallint not null  
);

create table gym_admin.MEMBERSHIP (
membership_id serial primary key,
membership_name varchar(75) not null,
membership_name_slug varchar(75) ,
plan_id int not null ,
foreign key (plan_id) references PLAN(plan_id),
duration_months smallint not null ,
discount decimal(9,2) ,
date_expires timestamp not null,
date_created timestamp not null
);

create table gym_admin.CLIENT (
client_id serial primary key,
user_id int unique not null,
foreign key (user_id) references USER(user_id),
membership_id int not null,
foreign key (membership_id) references MEMBERSHIP(membership_id)
);

create table gym_admin.FACILITY_SCHEDULE (
facility_schedule_id serial primary key,
activity_id int not null ,
foreign key (activity_id) references ACTIVITY(activity_id),
facility_id int not null ,
foreign key (facility_id) references FACILITY(facility_id),
hour_from smallint not null ,
hour_to smallint not null  
);



create table gym_admin.EMPLOYEE_FACILITY (
employee_facility_id serial primary key ,
employee_id int not null,
foreign key (employee_id) references EMPLOYEE(employee_id),
facility_id int not null,
foreign key (facility_id) references FACILITY(facility_id)
);



create table gym_admin.FACILITY (
facility_id serial primary key,
email varchar ( 255 ) unique not null,
facility_name varchar ( 255 ) not null,
slug_facility_name varchar ( 255 ),
phone varchar ( 75 ) unique not null,
date_created timestamp not null
);

create table gym_admin.ACTIVITY (
activity_id serial  primary  key,
activity_name varchar(50) not null ,
activity_name_slug varchar(50) not null ,
strict_time_default bool
);

create table gym_admin.PRODUCT_CATEGORY (
product_category_id serial primary key,
product_category varchar (75) not null ,
product_category_slug varchar (75)
);

create table gym_admin.INVENTORY (
product_id serial primary key,
product_name varchar (128) not null,
product_slug varchar (128),
product_category_id int not null,
units int not null ,
price_per_unit decimal(9,2) not null ,
foreign key (product_category_id) references PRODUCT_CATEGORY(product_category_id)
);