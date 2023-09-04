import "./App.css";
import WebFont from "webfontloader";
import React from "react";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.jsx"
import Products from "./component/Product/Product.js"

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" key={Home} Component={Home} />
        <Route exact path="/product/:id" key={ProductDetails} Component={ProductDetails} />
        <Route exact path="/products" Component={Products}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
