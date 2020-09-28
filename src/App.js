import React from 'react';
import NavComponent from './containers/Navbar';
import CardComponent from './components/Card';
import api from './API/api';

function App() {
  // api();
  return (
    <div className="App">
      <NavComponent />
      <CardComponent />
    </div>
  );
}

export default App;
