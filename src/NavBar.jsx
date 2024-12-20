// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import UserData from "./UserData";
import { Provider } from "./components/ui/provider";


const NavBar = () => {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
          <Link to="/" style={{ marginRight: "10px" }}>
            Home
          </Link>
          <Link to="/about">UserData</Link>
        </nav>

        {/* Routes */}
        <Provider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<UserData />} />
        </Routes>
        </Provider>
      </div>
    </Router>
  );
};

export default NavBar;

