const initialState = {
  launches: [],
};

const rootReducer = (state = initialState, action) => {
  if (action.type === 'ALL_LAUNCHES') {
    return {
      ...state,
      launches: action.launches,
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
