// Course management endpoints
const express = require('express');
const router = express.Router();

router.get('/courses', (req, res) => {
  res.json([{ id: 101, title: 'Intro to Node.js' }]);
});

module.exports = router;