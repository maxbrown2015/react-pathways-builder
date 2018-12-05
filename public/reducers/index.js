// CIS 197 - React HW

import _ from 'lodash';
import * as timer from '../timer.js';



// Every time an action is dispatched, this function is called.
// Using the current state and the action just performed (along with
// any payload data associated with it), this function computes the
// next state.
// HOWEVER, note that you CANNOT mutate the state variable directly.
// Instead, you want return a new, updated copy of the state in the
// reducer each time it is called (an easy way to do this is to use
// lodash's _.assign function).
//


const mainReducer = (state, action) => {
  switch (action.type) {
    case 'RUN': {
      timer.run();
      return state;
    }
  }
  return state;
};




export { mainReducer, updateCells, randomSeed };
