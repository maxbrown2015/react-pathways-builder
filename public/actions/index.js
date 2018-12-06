
// CIS 197 - React HW


const changeCourse = (index, newCourse) => {
  return {
    type: "CHANGE_COURSE",
    index: index,
    newCourse: newCourse
  }
} 

const deleteCourse = (index) => {
  return {
    type: 'DELETE_COURSE',
    index: index
  };
};

const addCourse = (newCourse) => {
  return {
    type: 'ADD_COURSE',
    newCourse: newCourse
  };
}

const changePathway = (index, pathway) => {
  return {
    type: 'CHANGE_PATHWAY',
    index: index,
    pathway: pathway
  };
}

const undoChanges = () => {
  return {
    type: 'UNDO_CHANGES'
  };
}



export {changeCourse, deleteCourse, addCourse, changePathway, undoChanges};
