const express = require('express');
const app = express();
const port = 3000;

const roomRoutes = require('./routes/roomRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/rooms', roomRoutes);
app.use('/bookings', bookingRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
