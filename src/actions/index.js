export function getLaunches(launches) {
  return {
    type: 'ALL_LAUNCHES',
    launches,
  };
}

export function loadLaunches() {
  return (dispatch) => {
    return fetch('https://api.spacexdata.com/v4/launches')
      .then((response) => response.json())
      .then((data) => {
        dispatch(getLaunches(data));
      });
  };
}
