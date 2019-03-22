const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.get('/editor', function (req, res, next) {
  res.render('index');
});
