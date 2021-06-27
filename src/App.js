import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';

import { CartProvider } from './lib/cart.context';

import Home from './Components/HomePage/Home';


function App() {
  return (
    <CartProvider>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
    </CartProvider>
  );
}

export default App;
