import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './containers/Navbar';
import Home from './containers/Home';
import Loading from './components/Loading';
const Launches = lazy(() => import('./containers/Launches'));
const Launch = lazy(() => import('./containers/LaunchDetails'));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Suspense fallback={Loading()}>
          <Switch>
            <Route path="/launches" component={Launches} />
            <Route path="/:launch_id" component={Launch} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
