import express from 'express'

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
router.get('/register', () => {
    res.send('login.html');
});

/**
 * Logout route
 */

router.get('/logout', () => {
    res.send('router under development');
})

module.exports = router;