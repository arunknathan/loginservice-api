const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// In-memory "database"
const users = [
  { username: "admin", password: "admin" },
  { username: "user", password: "user" }
];

// Login endpoint
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  //console.log('request received for ' + username + ' ' + password)

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    return res.json({
      success: true,
      message: "Login successful"
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid username or password"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
