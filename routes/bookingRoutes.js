const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Route to book a room
router.post('/', bookingController.bookRoom);

// Route to list all customers with booking details
router.get('/customers', bookingController.listCustomers);

// Route to list all bookings of a specific customer
router.get('/customer-bookings/:customerName', bookingController.listCustomerBookings);

module.exports = router;
