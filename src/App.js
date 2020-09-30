import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavComponent from './containers/Navbar';
import Dragons from './pages/Dragons';
import Landpads from './pages/Landpads';
import Rockets from './pages/Rockets';
import Ships from './pages/Ships';
import Launches from './pages/Launches';
import Launch from './pages/Launch';
import Home from './pages/Home';

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
