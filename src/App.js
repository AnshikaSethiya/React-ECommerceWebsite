import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/HomePage/Home';
import Products from './Components/Products/Products';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <div>
      <Navbar />
      {/* <Products /> */}
      <Home />
    </div>
  );
}

export default App;
