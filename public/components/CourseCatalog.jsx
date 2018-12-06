import React from 'react';
import Course from './Course';
import * as actions from '../actions/index.js';
import Flexbox from 'flexbox-react';
import FontAwesome from 'react-fontawesome';

class CourseCatalog extends React.Component {
  constructor(props) {
    super(props);
    this.renderCourses.bind(this);
    this.renderButtons.bind(this);

    this.addCourse = this.addCourse.bind(this);
    this.undoChanges = this.undoChanges.bind(this);

  }

  componentDidMount() {
    this.props.store.subscribe(function () {
      this.setState(this.props.store.getState());
    }.bind(this));
  }

  undoChanges() {
    this.props.store.dispatch(actions.undoChanges());
  }

  addCourse() {
    const course = {
      
    };
    // this.props.store.dispatch(actions.addCourse(course));
  }

  renderCourses() {
    const courses = this.props.store.getState().courses;
    const settings = {
      active: false,
      newlyCreated: false,
    }

    const markup = courses.map((course, index) => {
      return(<Course store={this.props.store} key={index} index={index} settings={settings}
        number={course.number} title={course.title} description={course.description} 
        link={course.link} selectedPathways={course.selectedPathways}/>);
    });
    return markup;
  }

  renderButtons() {
    const addButtonStyle = {
      fontSize: '50px',
      color: 'green'
    }

    const undoButtonStyle = {
      fontSize: '46px',
      color: 'red'
    }

    return (
      <Flexbox flexDirection='row' justifyContent="center" alignItems="center" margin='20px'>
      <Flexbox  margin='50px'  marginTop='1px'>
        <FontAwesome name='fa-plus' className='fa-plus' style={addButtonStyle} 
        /> 
      </Flexbox>
      <Flexbox margin='50px' marginTop='1px'>
      <FontAwesome name='fa-undo' className='fa-undo' style={undoButtonStyle} onClick={this.undoChanges}
        /> 
      </Flexbox>
      </Flexbox>
    );

  }


  render() {
    return (
      <Flexbox flexDirection="column" justifyContent="center" alignItems="center">
        {this.renderCourses()}
        {this.renderButtons()}
      </Flexbox>
    )
  }
}

export default CourseCatalog;