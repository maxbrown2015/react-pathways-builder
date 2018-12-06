import _ from 'lodash';
import * as initialState from '../initialState';


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
      let courses = state.courses.slice(0);
      delete courses[action.index];
      console.log(courses);
      return _.assign({}, state, {courses: courses});;
    }

    case 'ADD_COURSE': {
      let courses = state.courses.slice(0);
      courses.push(action.index);
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
  }
  return state;
};

export {mainReducer};
