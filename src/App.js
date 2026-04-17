import React from "react";
import { ApiProvider } from "./contexts/ApiContext";
import TablazatTema from "./components/TablazatTema";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <ApiProvider>
      <div className="container">
        <header className="text=center my-4">
          <h1>Szótar</h1>
          <h2>Szavak</h2>
        </header>
        <main>
          <section>
            <TablazatTema/>
          </section>
        </main>
      </div>
    </ApiProvider>
  );
}

export default App;
