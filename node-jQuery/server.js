// server.js
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors"); // Import CORS middleware

app.use(cors());

// Serve static files (e.g., HTML, CSS, client-side scripts)
app.use(express.static(path.join(__dirname, "public")));

// Endpoint to serve data
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
const users = [
  { id: 1, name: "Alice", email: "alice@example.com", city: "New York" },
  { id: 2, name: "Bob", email: "bob@example.com", city: "Los Angeles" },
  { id: 3, name: "Charlie", email: "charlie@example.com", city: "Chicago" },
  { id: 4, name: "David", email: "david@example.com", city: "San Francisco" },
  { id: 5, name: "Eva", email: "eva@example.com", city: "Miami" },
  { id: 6, name: "Frank", email: "frank@example.com", city: "Dallas" },
  { id: 7, name: "Grace", email: "grace@example.com", city: "Seattle" },
  { id: 8, name: "Henry", email: "henry@example.com", city: "Boston" },
  { id: 9, name: "Ivy", email: "ivy@example.com", city: "Portland" },
  { id: 10, name: "Jack", email: "jack@example.com", city: "Austin" },
  { id: 11, name: "Kate", email: "kate@example.com", city: "Houston" },
  { id: 12, name: "Leo", email: "leo@example.com", city: "Denver" },
  { id: 13, name: "Mia", email: "mia@example.com", city: "Atlanta" },
  { id: 14, name: "Noah", email: "noah@example.com", city: "San Diego" },
  { id: 15, name: "Olivia", email: "olivia@example.com", city: "Phoenix" },
  { id: 16, name: "Peter", email: "peter@example.com", city: "Las Vegas" },
  { id: 17, name: "Quinn", email: "quinn@example.com", city: "San Antonio" },
  { id: 18, name: "Rachel", email: "rachel@example.com", city: "Philadelphia" },
  { id: 19, name: "Sam", email: "sam@example.com", city: "Washington D.C." },
  { id: 20, name: "Tina", email: "tina@example.com", city: "Miami" },
  { id: 21, name: "Ursula", email: "ursula@example.com", city: "Orlando" },
  { id: 22, name: "Victor", email: "victor@example.com", city: "New Orleans" },
  { id: 23, name: "Wendy", email: "wendy@example.com", city: "Nashville" },
  { id: 24, name: "Xavier", email: "xavier@example.com", city: "Memphis" },
  { id: 25, name: "Yvonne", email: "yvonne@example.com", city: "Chicago" },
  { id: 26, name: "Zack", email: "zack@example.com", city: "Detroit" },
  { id: 27, name: "Amy", email: "amy@example.com", city: "Seattle" },
  { id: 28, name: "Ben", email: "ben@example.com", city: "Portland" },
  { id: 29, name: "Cathy", email: "cathy@example.com", city: "Austin" },
  { id: 30, name: "David", email: "david2@example.com", city: "Dallas" },
  { id: 31, name: "Emma", email: "emma@example.com", city: "Houston" },
  { id: 32, name: "Frank", email: "frank2@example.com", city: "Denver" },
  { id: 33, name: "Gina", email: "gina@example.com", city: "Atlanta" },
  { id: 34, name: "Henry", email: "henry2@example.com", city: "San Diego" },
  { id: 35, name: "Ivy", email: "ivy2@example.com", city: "Phoenix" },
  { id: 36, name: "Jake", email: "jake@example.com", city: "Las Vegas" },
  { id: 37, name: "Kate", email: "kate2@example.com", city: "San Antonio" },
  { id: 38, name: "Leo", email: "leo2@example.com", city: "Philadelphia" },
  { id: 39, name: "Mia", email: "mia2@example.com", city: "Washington D.C." },
  { id: 40, name: "Nathan", email: "nathan@example.com", city: "Miami" },
  { id: 41, name: "Olivia", email: "olivia2@example.com", city: "Orlando" },
  { id: 42, name: "Peter", email: "peter2@example.com", city: "New Orleans" },
  { id: 43, name: "Quinn", email: "quinn2@example.com", city: "Nashville" },
  { id: 44, name: "Rachel", email: "rachel2@example.com", city: "Memphis" },
  { id: 45, name: "Sam", email: "sam2@example.com", city: "Chicago" },
  { id: 46, name: "Tina", email: "tina2@example.com", city: "Detroit" },
  { id: 47, name: "Ursula", email: "ursula2@example.com", city: "Seattle" },
  { id: 48, name: "Victor", email: "victor2@example.com", city: "Portland" },
  { id: 49, name: "Wendy", email: "wendy2@example.com", city: "Austin" },
  { id: 50, name: "Xavier", email: "xavier2@example.com", city: "Dallas" },
];
