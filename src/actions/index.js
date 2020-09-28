export function getLatestLaunches(data) {
  return {
    type: 'LATEST_LAUNCHES',
    data,
  };
}

export function loadLaunches() {
  return (dispatch) => {
    return fetch('https://api.spacexdata.com/v4/launches/latest')
      .then((response) => response.json())
      .then((data) => {
        dispatch(getLatestLaunches(data));
      });
  };
}
