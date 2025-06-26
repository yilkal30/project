require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.use('/api', require('./routes/deviceRoutes'));

app.get('/', (req, res) => {
  res.send('Welcome to Yilkal’s IT Inventory API');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
