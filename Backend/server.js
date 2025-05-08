const express = require('express');
const connectDB = require('./config');
require('dotenv').config();

const app = express();
const Port = process.env.PORT || 3000;

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Welcome to the SafeSteps API!')
});

connectDB()
    .then(() => {
        app.listen(Port, () => {
            console.log(`Server is running on port ${Port}`);
        });
    })
    .catch((error) => {
        console.error('Failed to connect to the database:', error.message);
        process.exit(1); // Exit the process with failure
    });