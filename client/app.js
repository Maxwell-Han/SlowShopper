import React from 'react';

import {Navbar, Footer} from './components';
import Routes from './routes';

const App = () => {
  return (
    // STYLE the container to a grid!
    <div className="app-container">
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
