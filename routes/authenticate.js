const express = require('express');

const router = express.Router();

/**
 * Login route
 */
router.get('/login', (req, res) => {
  res.render('login.html');
});

/**
 * Registration route
 */
router.get('/register', (req, res) => {
  res.send('login.html');
});

/**
 * Logout route
 */

router.get('/logout', (req, res) => {
  res.send('router under development');
});

module.exports = router;