import React from 'react';
import Course from './Course';
import * as actions from '../actions/index.js';
import Flexbox from 'flexbox-react';
import { pathways } from '../initialState';

class CourseTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: props.isActive,
      number: '',
      title: '',
      descripton: '',
      link: '',
      pathways: []
    }
  }

  toggleActive() {
    this.props.notifyParent();
  }

  createNewCourse() {
    const newCourse = {
      number: this.state.number,
      title: this.state.title,
      descripton: this.state.descripton,
      link: this.state.link,
      pathways: this.state.pathways
    }

    
  }

  validateInputs() {

  }

  renderButtons() {

  }

  render() {
    return (
      <Flexbox>

      </Flexbox>
    )
  }
}

export default CourseTemplate;