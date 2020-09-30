const initialState = {
  launches: [],
  rockets: [{ id: null, name: '', images: [] }],
};

const rootReducer = (state = initialState, action) => {
  if (action.type === 'ALL_LAUNCHES') {
    return {
      ...state,
      launches: action.launches,
    };
  }
  if (action.type === 'ALL_ROCKETS') {
    const rockets = [];
    action.rockets.map((rocket) => {
      return rockets.push({
        id: rocket.id,
        name: rocket.name,
        images: rocket.flickr_images,
      });
    });
    return {
      ...state,
      rockets,
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
