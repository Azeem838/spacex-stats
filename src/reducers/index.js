const initialState = {
  launches: [],
  rockets: [],
};

const rootReducer = (state = initialState, action) => {
  if (action.type === 'ALL_LAUNCHES') {
    return {
      ...state,
      launches: action.launches,
    };
  }
  if (action.type === 'ALL_ROCKETS') {
    return {
      ...state,
      rockets: action.rockets,
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
