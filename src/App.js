import QuoteBlock from "./stories/QuoteBlock";
import BrandContext from "./BrandContext";
import React, { useState } from "react";
import { brands } from './dummyData'
import "./App.css";

// define possible brands
function App() {
  const quote = "The best way to predict the future is to create it.";
  const [brand, setBrand] = useState(brands.A);

  const toggleBrand = () => {
    setBrand(brand === brands.A ? brands.B : brands.A);
  };

  return (
    <BrandContext.Provider value={{ brand, toggleBrand }}>
      <QuoteBlock quote={quote} brand={brand} />
      <button onClick={toggleBrand} className="toggle-btn">
        Toggle Brand
      </button>
    </BrandContext.Provider>
  );
}

export default App;
