var mongoose = require('mongoose')

const course = new mongoose.Schema({
  number: { type: String },
  title: { type: String },
  description: { type: String },
  link: { type: String },
  pathways: { type: Array }
})

module.exports = mongoose.model('Course', course);