const initialState = {
  data: {},
};

const rootReducer = (state = initialState, action) => {
  if (action.type === 'LATEST_LAUNCHES') {
    return {
      ...state,
      data: action.data,
    };
  }
  return {
    ...state,
  };
};

// import { combineReducers } from 'redux';
// import launch from './launch';

// const rootReducer = combineReducers({ launch });

export default rootReducer;
