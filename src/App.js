import React from "react";
import Listings from "./Components/Listings";
import Filter from "./Components/Filter";
import Footer from "./Components/Footer";
import "./App.css";

import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Header />

      <section id='content-area'>
        <Filter />
        <Listings />
      </section>
      <Footer />
    </div>
  );
}
export default App;
