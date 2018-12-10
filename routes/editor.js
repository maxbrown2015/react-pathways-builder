import express from 'express';
import bodyParser from 'body-parser';

var router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));


router.get('/editor', function (req, res, next) {
  res.render('index');
});
