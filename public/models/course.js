import mongoose from 'mongoose';

const Course = new mongoose.Schema({
  number: { type: String },
  title: { type: String },
  description: { type: String },
  link: { type: String },
  selectedPathways: { type: Array }
});

module.exports = mongoose.model('Course', Course);