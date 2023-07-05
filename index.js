const express = require('express');
const app = express();
const port = process.env.PORT || 8080; // You can change the port number if needed

// Define a route to handle the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});