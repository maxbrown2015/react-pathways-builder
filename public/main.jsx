// CIS 197 - React HW
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { mainReducer as reducers } from './reducers';
import * as actions from './actions/index';
import * as initialState from './initialState'
import CourseCatalog from './components/CourseCatalog';
import axios from 'axios';


function loadFromMongoAndInitialize() {
  let courses = [];
  axios.get('http://localhost:3000/importexport/import').then(response => {
    //console.log(response);
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
   // console.log(courses);
    const state = {
      courses: courses,
      pathways: initialState.pathways
    }
    const store = createStore(reducers, state);
    
    ReactDOM.render(

      <CourseCatalog store={store}/>,
      document.getElementById('container')
    );
      
    document.addEventListener('DOMContentLoaded', () => {
      ReactDOM.render(
         <CourseCatalog store={store}/>,
         document.getElementById('container')
       );
     });
     
     

  }).catch(function (error) {
    console.log(error);
  });
}

loadFromMongoAndInitialize();

