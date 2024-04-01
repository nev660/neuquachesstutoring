const express = require('express');
const bodyParser = require('body-parser');
const xss = require('xss-clean');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(xss());

// Routes
app.post('/submit', (req, res) => {
  const formData = req.body;
  const dataToWrite = `${formData.name}, ${formData.email}, ${formData.childName}, ${formData.info}\n`;
  fs.appendFile(path.join(__dirname, 'database.txt'), dataToWrite, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      res.status(500).send('Error writing to file');
    } else {
      console.log('Form data saved to file:', formData);
      res.sendStatus(200);
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});