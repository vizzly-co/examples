CREATE DATABASE my_database;

\c my_database;

CREATE TABLE us_sales (
    order_id bigint,
    order_date date,
    status text,
    item_id float,
    sku text,
    qty_ordered float,
    price float,
    value float,
    discount_amount float,
    total float,
    category text,
    payment_method text,
    bi_st text,
    cust_id float,
    year int,
    month text,
    ref_num bigint,
    customer_since date,
    place_name text,
    county text,
    city text,
    state text,
    zip text,
    region text,
    discount_percent float
);

COPY us_sales (order_id,order_date,status,item_id,sku,qty_ordered,price,value,discount_amount,total,category,payment_method,bi_st,cust_id,year,month,ref_num,customer_since,place_name,county,city,state,zip,region,discount_percent) FROM '/var/lib/postgresql/csvs/sales.csv' DELIMITER ',' CSV HEADER;
