import React from 'react';
import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Whoops404 from './component/whoops404';
import Products from './component/products';
import Events from './component/events';
import About from './component/about';
import Home from './component/home';
import Contact from './component/contact';
import './stylesheets/pages.scss';

function App() {
  return (
    <HashRouter>
      <div className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect from="/history" to="/about/history" />
          <Redirect from="/services" to="/about/services" />
          <Redirect from="/location" to="/about/location" />
          <Route path="/about" component={About} />
          <Route path="/events" component={Events} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
          <Route component={Whoops404} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
