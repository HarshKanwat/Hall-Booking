class Room {
  static rooms = [];

  constructor(numberOfSeats, pricePerHour) {
    this.id = Room.rooms.length + 1;
    this.numberOfSeats = numberOfSeats;
    this.pricePerHour = pricePerHour;
    this.bookings = [];
  }

  // Add a new room to the list
  static addRoom(room) {
    Room.rooms.push(room);
  }

  // Get all rooms with their booking details
  static getAllRooms() {
    return Room.rooms;
  }

  // Get a room by its ID
  static getRoomById(id) {
    return Room.rooms.find(room => room.id === id);
  }

  // Get all bookings across all rooms
  static getAllBookings() {
    return Room.rooms.flatMap(room => room.bookings.map(booking => ({
      ...booking,
      roomId: room.id
    })));
  }

  // Get all bookings of a specific customer
  static getBookingsByCustomer(customerName) {
    return Room.getAllBookings().filter(booking => booking.customerName === customerName);
  }

  // Check if the room is booked for the given date and time
  isBooked(date, startTime, endTime) {
    return this.bookings.some(booking => booking.date === date && booking.startTime === startTime && booking.endTime === endTime);
  }

  // Book the room for a customer
  bookRoom(customerName, date, startTime, endTime) {
    const booking = { customerName, date, startTime, endTime };
    this.bookings.push(booking);
    return booking;
  }
}

module.exports = Room;
