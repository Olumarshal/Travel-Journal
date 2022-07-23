import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/main";
import Data from "./Appdata";
import './App.css';

function App() {
  const places = Data.map(place => {
    return (
      <Main 
        key={place.id}
        {...place}
        />

    )
  })

  return (
    <div className="App">
      <Navbar />
      <main>
        {places}
      </main>
    </div>
  );
}

export default App;
