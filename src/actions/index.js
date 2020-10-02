export function getLaunches(launches) {
  return {
    type: 'ALL_LAUNCHES',
    launches,
  };
}

export function loadLaunches() {
  return (dispatch) =>
    fetch('https://api.spacexdata.com/v4/launches')
      .then((response) => response.json())
      .then((data) => {
        dispatch(getLaunches(data));
      });
}

export function getRockets(rockets) {
  return {
    type: 'ALL_ROCKETS',
    rockets,
  };
}

export function loadRockets() {
  return (dispatch) =>
    fetch('https://api.spacexdata.com/v4/rockets')
      .then((response) => response.json())
      .then((data) => {
        dispatch(getRockets(data));
      });
}

export function changeFilter(filter) {
  return { type: 'CHANGE_FILTER', filter };
}
