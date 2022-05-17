import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

import Header from "./components/Header";

function App() {
  const [mode, setMode] = useState("dark");
  return (
    <div className={`App ${mode}`}>
      <Header mode={mode} setMode={setMode} />
    </div>
  );
}

export default App;
