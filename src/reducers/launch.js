const launch = (state = [], action) => {
  switch (action.type) {
    case 'PAST':
      store.request = 'past';
      break;

    case 'UPCOMING':
      store.request = 'upcoming';
      break;

    case 'LATEST':
      store.request = 'latest';
      break;

    case 'NEXT':
      store.request = 'next';
      break;

    default:
      break;
  }
};

export default launch;
