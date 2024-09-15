const Room = require('../models/roomModel');

// Controller to book a room
exports.bookRoom = (req, res) => {
  const { customerName, date, startTime, endTime, roomId } = req.body;
  const room = Room.getRoomById(roomId);

  if (!room) {
    return res.status(404).send('Room not found');
  }

  const isBooked = room.isBooked(date, startTime, endTime);

  if (isBooked) {
    return res.status(400).send('Room is already booked for the given time');
  }

  const booking = room.bookRoom(customerName, date, startTime, endTime);
  res.status(201).send(booking);
};

// Controller to list all customers with booking details
exports.listCustomers = (req, res) => {
  const customers = Room.getAllBookings().map(booking => ({
    customerName: booking.customerName,
    roomName: `Room ${booking.roomId}`,
    date: booking.date,
    startTime: booking.startTime,
    endTime: booking.endTime
  }));
  res.send(customers);
};

// Controller to list all bookings of a specific customer
exports.listCustomerBookings = (req, res) => {
  const { customerName } = req.params;
  const customerBookings = Room.getBookingsByCustomer(customerName);
  res.send(customerBookings);
};
