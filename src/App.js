import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavComponent from './containers/Navbar';
import CardList from './containers/CardList';
import Dragons from './containers/Dragons';
import Landpads from './containers/Landpads';
import Rockets from './containers/Rockets';
import Ships from './containers/Ships';
import Launches from './containers/Launches';
import Launch from './containers/Launch';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavComponent />
        <Route exact path="/" component={CardList} />
        <Route exact path="/" component={Launches} />
        <Route path="/dragons" component={Dragons} />
        <Route path="/landpads" component={Landpads} />
        <Route path="/rockets" component={Rockets} />
        <Route path="/ships" component={Ships} />
        <Route path="/:launch_id" component={Launch} />
      </div>
    </BrowserRouter>
  );
}

export default App;
