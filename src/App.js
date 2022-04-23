import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
//Pages
import Users from "./components/Users";
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "orange" : "",
                };
              }}
              to="/"
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "orange" : "",
                };
              }}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              NavLink
              className={({ isActive }) => (isActive ? "red" : "blue")}
              to="/users"
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
