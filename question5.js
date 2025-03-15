const express = require('express');
const User = require('./models/user');
const app = express();

app.use(express.json());

app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users', error: err });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
