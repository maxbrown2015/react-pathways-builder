const express = require('express');
const app = express();
const router = express.Router();
const Course = require('../public/models/Course');
const Pathway = require('../public/models/Pathway');

router.route('/export').post((req, res) => {
  const courses = req.body.courses;

  courses.sort(function (a, b) {
    const aNum = Number(a.number);
    const bNum = Number(b.number);
    return aNum - bNum;
  });

  Course.remove({} , (err, res) => {
    if (err) {
      console.log('Error removing courses' + err);
    } else {
      console.log('Successfully removed courses' + res);
      courses.forEach((course) => {
        const courseModelItem = new Course({
          number: course.number,
          title: course.title,
          description: course.description,
          link: course.link,
          type: 'Lecture',
          instructor: 'Professor',
          selectedPathways: course.selectedPathways
        });
        courseModelItem.save((err, res) => {
          if (err) {
            console.log('Error ' + err + ' at course ' + course);
          } else {
            console.log('Course saved sucessfully');
          }
        });
      });

      // add pathway
      const pathways = req.body.pathways;
      Pathway.remove({}, (err, res) => {
        if (err) {
console.log(err)
;}
        pathways.forEach((pathway) => {
          const pathwayModelItem = new Pathway({
            name: pathway.name,
            id: pathway.id,
            color: pathway.color,
            highlight: pathway.highlight,
            description: pathway.description,
          });
          pathwayModelItem.save((err, res) => {
            if (err) {
console.log(err)
;}
            console.log('Pathway saved successfully');
          });
        });
      });
    }
  });
});

router.route('/import').get(function (req, res) {
  Course.find((err, courses) => {
    if (err) {
      console.log(err);
    } else {
      Pathway.find((err, pathways) => {
        if (err) {
console.log(err)
;}
        res.json({
          courses: courses,
          pathways: pathways,
        });
      });
    }
  });
});



module.exports = router;