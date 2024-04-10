const express = require('express');
const bodyParser = require('body-parser');
const xss = require('xss-clean');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware
app.use(bodyParser.json());
app.use(xss());
app.use(express.static(path.resolve(__dirname, '../client/build')));
// Routes
app.post('/', (req, res) => {
  fs.appendFile(path.join(__dirname, 'database.txt'), JSON.stringify(req.body) + "\n", (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      res.status(500).send('Error writing to file');
    } else {
      console.log('Form data saved to file:', req.body);
      res.sendStatus(200);
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});