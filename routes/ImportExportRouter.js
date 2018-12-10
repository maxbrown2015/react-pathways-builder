const express = require('express');
const app = express();
const router = express.Router();
const Course = require('../public/models/Course');

router.route('/export').post((req, res) => {
  const courses = req.body;
  Course.remove({} , (err, res) => {
    if (err) {
      console.log('Error removing courses' + err);
    } else {
      console.log('Successfully removed courses' + res);
      courses.forEach((course) => {
        const toAdd = new Course({
          number: course.number,
          title: course.title,
          description: course.description,
          link: course.link,
          selectedPathways: course.selectedPathways
        });
        toAdd.save((err, res) => {
          if (err) {
            console.log('Error ' + err + ' at course ' + course);
          } else {
            console.log('Course saved sucessfully');
          }
        });
      });
    }
  });


});

router.route('/import').get(function (req, res) {
    Course.find(function (err, results){
    if(err){
      console.log(err);
    }
    else {
      res.json(results);
    }
  });
});



module.exports = router;