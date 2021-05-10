import React from "react";
import './index.scss';

import {BrowserRouter, Route} from "react-router-dom";
import ProductScreen from "./pages/ProductScreen/productscreen.component.jsx";
import HomeScreen from "./pages/HomeScreen/homescreen.component";

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/" alt="home">ELLA CREATES</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
      <Route path="/product/:id" component={ProductScreen}></Route>
      <Route path="/" component={HomeScreen} exact></Route>
      </main>
      <footer className="row center">
         All right reserved
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
