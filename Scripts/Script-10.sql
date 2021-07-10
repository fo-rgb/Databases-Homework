CREATE TABLE bookings (
  id               SERIAL PRIMARY KEY,
  checkin_date     DATE NOT NULL,
  nights           INT NOT NULL
);

INSERT INTO bookings (checkin_date, nights) VALUES ('2019-10-01', 2);

select * from bookings;