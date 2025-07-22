const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// Instead of import
const createEmployee = require('./routes/employee_route.js');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Default route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Import routes
//import userRoutes from './routes/userRoutes.js';

app.use('/api', createEmployee);

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

