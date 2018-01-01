use listings; 

-- users table will store username and password

INSERT INTO Users(name, userbio)
VALUES 
("John", "Loves to travel!"),
("Molly", "Vacation Time!");

INSERT INTO HomeListings (name , price, description, UserId)
VALUES 
("Lake Front Villas", 400, "this is a description of the place", 1), 
("City View Penthouse", 500, "this is a description of the place", 1),
("Lake House Cottage", 300, "this is a description of the place", 2),
("Courtyard View", 200, "this is a description of the place", 2);

INSERT INTO Bookings(name, date, HomeListingId, UserId)
VALUES
("Lake Front Villas", "Jan 15 to Jan 20", 1, 1),
("Courtyard View", "Feb 2 to Feb 7", 2, 2);



