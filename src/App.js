import React from "react";

import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Brands from "./components/brands/Brands";
import Card from "./components/card/Card";
import Sale from "./components/sale/Sale";
import Favorite from "./components/favorite/Favorite";
import Download from "./components/download/Download";




function App() {

  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Card />
      <Sale />
      <Favorite />
      <Download />
    </div>
  );
}

export default App;
