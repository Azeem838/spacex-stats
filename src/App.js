import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavComponent from './containers/Navbar';
import Launches from './containers/Launches';
import Launch from './containers/LaunchDetails';
import Home from './containers/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavComponent />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/launches" component={Launches} />
          <Route path="/:launch_id" component={Launch} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
