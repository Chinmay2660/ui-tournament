import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import ScoreSheet from "./components/ScoreSheet";
import ViewPage from "./components/ViewPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ScoreSheet />} />
          <Route path="/view" element={<ViewPage />} />
        </Routes>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/view">View</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default App;
