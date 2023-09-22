import React from "react";

import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Brands from "./components/brands/Brands";
import Card from "./components/cart/Card";



function App() {

  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Card />
    </div>
  );
}

export default App;
