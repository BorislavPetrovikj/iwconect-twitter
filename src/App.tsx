import React from 'react';
import './App.css';
import {Home} from './containers/Home/Home';

function App() {
  return (
    <div className="container-fluid" style={{background: 'black'}}>
      <div className="row">
        <div className="container" style={{background: 'black'}}>
          {/* whole application goes here */}
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
