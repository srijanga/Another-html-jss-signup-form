const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// Serve static files (e.g., index.html, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Serve CSS files from the 'css' directory
app.use('/css', express.static(path.join(__dirname, 'css')));

// Define the route handler for the root URL ("/")
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Define the route handler for the signup.html file
app.get('/signup.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'signup.html'));
});

// Handle login form submission
app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Perform authentication and validation logic here
  // Replace the code below with your actual login implementation
  if (email === 'user@example.com' && password === 'password') {
    res.send('Login successful!');
  } else {
    res.send('Invalid email or password.');
  }
});

// Handle signup form submission
app.post('/signup', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Perform user registration logic here
  // Replace the code below with your actual signup implementation
  res.send('Signup successful!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

