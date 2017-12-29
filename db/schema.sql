DROP DATABASE IF EXISTS listings_db;

CREATE DATABASE listings_db;

use listings_db;

-- CREATE TABLE properties(
-- id INT AUTO_INCREMENT NOT NULL,
-- name VARCHAR(50) NOT NULL,
-- price INT NOT NULL,
-- PRIMARY KEY(id)
-- );

-- -- Create the table "users"
-- -- They come from the "register" modal
-- CREATE TABLE user (
--   user_id INTEGER NOT NULL AUTO_INCREMENT,
--   user_name VARCHAR(30) NOT NULL,
--   user_email VARCHAR(30) NOT NULL,
--   PRIMARY KEY(user_id)
-- );

-- -- Create the table "HomeListings"
-- -- They come from the host.html page
-- CREATE TABLE listing (
--   HomeListing_id INTEGER NOT NULL AUTO_INCREMENT,
--   HomeListing_street VARCHAR(30) NOT NULL,
--   HomeListing_city VARCHAR(30) NOT NULL,
--   HomeListing_state VARCHAR(30) NOT NULL,
--   HomeListing_zip VARCHAR(30) NOT NULL,
--   HomeListing_photo1_path VARCHAR(30) NOT NULL,
--   HomeListing_photo2_path VARCHAR(30) NOT NULL,
--   HomeListing_photo3_path VARCHAR(30) NOT NULL,
--   PRIMARY KEY(host_id)
-- );

-- -- Create the table "bookings"
-- -- They come from the guest.html page
-- CREATE TABLE booking (
--   booking_id INTEGER NOT NULL AUTO_INCREMENT,
--   booking_arrive DATE NOT NULL,
--   booking_leave DATE NOT NULL,
--   PRIMARY KEY(booking_id)
-- );