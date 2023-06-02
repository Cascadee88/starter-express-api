const express = require('express');
const app = express();
const port = 3000;

// Set up middleware and configuration
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  // Render the home page with the menu
  res.render('index', { menu: getMenuItems() });
});

app.post('/order', (req, res) => {
  // Handle the order submission
  const { name, email, items } = req.body;
  
  // Save the order details in the database
  
  // Send the order information to the Discord bot
  
  // Redirect the user to a confirmation page
  res.render('confirmation');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Utility function to fetch menu items (replace with your own logic)
function getMenuItems() {
  return [
    { id: 1, name: 'Pizza', price: 10 },
    { id: 2, name: 'Burger', price: 8 },
    // Add more menu items as needed
  ];
}
