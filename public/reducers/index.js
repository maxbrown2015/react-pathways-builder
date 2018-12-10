import _ from 'lodash';
import * as initialState from '../initialState';
import axios from 'axios';

const mainReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COURSE': {
      let courses = state.courses.slice(0);
      courses[action.index] = action.newCourse;
      console.log(courses[action.index]);
      console.log(courses);
      return _.assign({}, state, {courses: courses});;
    }

    case 'DELETE_COURSE': {
      let courses = [];
      state.courses.forEach((course, index) => {
        if (index != action.index) {
          courses.push(course);
        }
      });
      return _.assign({}, state, {courses: courses});;
    }

    case 'ADD_COURSE': {
      let courses = state.courses.slice(0);
      courses.push(action.newCourse);
      console.log(courses);
      return _.assign({}, state, {courses: courses});;   
    }

    case 'CHANGE_PATHWAY': {
      let pathways = state.pathways.slice(0);
      pathways[action.index] = action.pathway;
      return _.assign({}, state, {pathways: pathways});;
    }

    case 'UNDO_CHANGES': {
      return  _.assign({}, initialState);;
    }

    case 'INITIALIZE': {
      let courses = [];

      axios.get('http://localhost:3000/importexport/import').then(response => {
        console.log(response);
        response.data.forEach(course => {
          const newCourse = {
            number: course.number,
            title: course.title,
            description: course.description,
            link: course.link,
            selectedPathways: course.selectedPathways
          }
          courses.push(newCourse);
        });
        console.log(courses);
        return _.assign({}, state, {courses: courses});
      })
      .catch(function (error) {
        console.log(error);
        return state;
      });
    }

    case 'EXPORT': {
      axios.post('http://localhost:3000/importexport/export', state.courses.slice(0)).then((res) => {
        console.log(res);
      }).catch((error) => {
        console.log(error);
      })
    }
  }
  return state;
};

export {mainReducer};
