import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RandomJokes from "./Components/RandomJokes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RandomJokes />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
