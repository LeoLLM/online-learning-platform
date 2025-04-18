// Authentication service for user login
const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
router.post('/login', (req, res) => {
  // Login logic
  res.json({ token: jwt.sign({ user: req.body.username }, 'secret') });
});

module.exports = router;