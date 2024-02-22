// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Switch>
            <Route path="/work" component={Work} />
            <Route path="/about" component={About} />
            {/* Add more routes here */}
          </Switch>
        </main>
        <Resume />
      </div>
    </Router>
  );
}

export default App;

