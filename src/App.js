import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavComponent from './containers/Navbar';
import Dragons from './containers/Dragons';
import Landpads from './containers/Landpads';
import Rockets from './containers/Rockets';
import Ships from './containers/Ships';
import Launches from './containers/Launches';
import Launch from './containers/Launch';
import Home from './containers/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavComponent />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/launches" component={Launches} />
          <Route path="/dragons" component={Dragons} />
          <Route path="/landpads" component={Landpads} />
          <Route path="/rockets" component={Rockets} />
          <Route path="/ships" component={Ships} />
          <Route path="/:launch_id" component={Launch} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
