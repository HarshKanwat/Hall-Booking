const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

// Route to create a new room
router.post('/', roomController.createRoom);

// Route to list all rooms with booking details
router.get('/', roomController.listRooms);

module.exports = router;
