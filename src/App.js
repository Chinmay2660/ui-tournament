import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
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
      </div>
    </Router>
  );
}

export default App;
