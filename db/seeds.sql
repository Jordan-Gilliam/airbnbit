-- use umaralyrfrvw8363; 

use listings;

-- users table will store username and password

INSERT INTO Users(firstName, lastName, email, password, cpassword)
VALUES 
("John", "Smith", "johnsmith@gmail.com", "travel", "travel"),
("Molly", "Jones", "mollyjones@gmail.com", "vacation", "vacation");

INSERT INTO HomeListings (listName, listEmail, listAddress, listCity, listState, listZip, listPhone, listTax, listPhotoLink, listDescription, listRate, UserId)
VALUES 
("Lake Front Villas", "abc@gmail.com", "123 Vacation Road", "Charlotte", "NC", "28209", "555-144-5242", "TaxID", "PhotoLink", "Description of the Place", "Rate", 1), 
("City View Penthouse", "abc@gmail.com", "974 Paradise Street", "Charlotte", "NC", "28210", "202-425-0093", "TaxID", "PhotoLink", "Description of the Place", "Rate", 1),
("Lake House Cottage", "abc@gmail.com", "23 Ocean Ave", "Charlotte", "NC", "28209", "555-144-5242", "TaxID", "PhotoLink", "Description of the Place", "Rate", 2),
("Courtyard View", "abc@gmail.com", "88 Jellyfish Road", "Charlotte", "NC", "28209", "555-144-5242", "TaxID", "PhotoLink", "Description of the Place", "Rate", 2);

INSERT INTO Bookings(listId, guestId, arriveDate, leaveDate, HomeListingId, UserId)
VALUES
("Lake Front Villas", "guest 1", "2018-01-10", "2018-01-17", 1, 1),
("Courtyard View", "guest 1", "2018-02-11", "2018-02-20", 2, 2);



