import React from "react";
import "./App.css";
import TablazatTema from "./components/TablazatTema";
import { ApiProvider } from "./contexts/ApiContext";

function App() {
  return (
    <ApiProvider>
      <div className="App">
        <header className="header">
          <div className="container">
            <h1>Szótár</h1>
            <TablazatTema />
          </div>
        </header>
      </div>
    </ApiProvider>
  );
}

export default App;
