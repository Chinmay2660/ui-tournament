import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"; // Import Routes
import { Provider } from "react-redux";
import store from "./ReduxStore/ReduxStore";
import LandingPage from "./components/LandingPage";
import ViewPage from "./components/ViewPage";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
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
    </Provider>
  );
}

export default App;
