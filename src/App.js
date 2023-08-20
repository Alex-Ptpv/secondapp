import "./App.css";
import React from 'react';
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes
} from 'react-router-dom';
import FeedbackPage from "./components/FeedbackPage";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";

function App() {

  return (
    <Router>
      <>
        <Header />
        <nav className="app-nav">
          <ul>
            <li>
              <NavLink to="/" className={({ isActive}) =>
                isActive ? "active" : ""}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/feedback" className={({ isActive}) =>
                isActive ? "active" : ""}>
                Feedback
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive}) =>
                isActive ? "active" : ""}>
                About
              </NavLink>
            </li>
          </ul>
        </nav>
        <main className="app-content">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/feedback" element={<FeedbackPage/>} />
            <Route path="/about" element={<AboutPage/>} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>&copy; {new Date().getFullYear()} Oleksii Potapov</p>
        </footer>
      </>
    </Router>
  );
}

export default App;
