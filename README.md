This is the readme.md file of how to use this code 

# Hall Booking Application

This is a simple hall booking application built with Node.js and Express. It allows users to create rooms, book rooms, and view booking details.

## Features

- Create a room with the number of seats available and price per hour.
- Book a room with customer details and time.
- List all rooms with booking details.
- List all customers with booking details.
- List all bookings of a specific customer.

## Directory Structure

## Directory Structure


hall-booking-app/ ├── server.js ├── package.json ├── routes/ │ ├── roomRoutes.js │ └── bookingRoutes.js ├── controllers/ │ ├── roomController.js │ └── bookingController.js ├── models/ │ ├── roomModel.js │ └── bookingModel.js └── utils/ └── db.js


## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/HarshKanwat/Hall-Booking.git
   cd hall-booking-app

Install dependencies:

npm install

Start the server:
npm start

The server will start on http://localhost:3000.

API Endpoints

Create a Room

   URL: POST    http://localhost:3000/rooms
   
 Body:
      
      JSON

      {
        "numberOfSeats": 10,
        "pricePerHour": 100
      }

Response:
JSON

      {
        "id": 1,
        "numberOfSeats": 10,
        "pricePerHour": 100,
        "bookings": []
      }

Book a Room
URL: POST    http://localhost:3000/bookings
      
   Body:
      
      JSON

      {
        "customerName": "John Doe",
        "date": "2024-09-15",
        "startTime": "10:00",
        "endTime": "12:00",
        "roomId": 1
      }

Response:

JSON
      
      {
        "customerName": "John Doe",
        "date": "2024-09-15",
        "startTime": "10:00",
        "endTime": "12:00"
      }

List All Rooms

URL: GET    http://localhost:3000/rooms


Response:
JSON

      [
        {
          "id": 1,
          "numberOfSeats": 10,
          "pricePerHour": 100,
          "bookings": [
            {
              "customerName": "John Doe",
              "date": "2024-09-15",
              "startTime": "10:00",
              "endTime": "12:00"
            }
          ]
        }
      ]

List All Customers with Booking Details
URL: GET    http://localhost:3000/bookings/customers


Response:
JSON

      [
        {
          "customerName": "John Doe",
          "roomName": "Room 1",
          "date": "2024-09-15",
          "startTime": "10:00",
          "endTime": "12:00"
        }
      ]

List All Bookings of a Specific Customer
URL: GET    http://localhost:3000/bookings/customer-bookings/:customerName


   Response:
   JSON
      
      [
        {
          "roomName": "Room 1",
          "date": "2024-09-15",
          "startTime": "10:00",
          "endTime": "12:00"
        }
      ]

