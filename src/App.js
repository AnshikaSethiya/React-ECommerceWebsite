import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';

import { CartProvider } from './lib/cart.context';

import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import Category from './Components/Pages/Category'
import Checkout from './Components/Pages/Checkout';


function App() {
  return (
    <CartProvider>
      <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/category/:id" exact>
            <Category />
          </Route>
          <Route path="/checkout" exact>
            <Checkout />
          </Route>
        </Switch>
    </CartProvider>
  );
}

export default App;
