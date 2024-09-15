const Room = require('../models/roomModel');

// Controller to create a new room
exports.createRoom = (req, res) => {
  const { numberOfSeats, pricePerHour } = req.body;
  const room = new Room(numberOfSeats, pricePerHour);
  Room.addRoom(room);
  res.status(201).send(room);
};

// Controller to list all rooms with booking details
exports.listRooms = (req, res) => {
  res.send(Room.getAllRooms());
};
