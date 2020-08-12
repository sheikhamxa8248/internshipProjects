import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./Style.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Teacher from "./components/Teacher";
import Student from "./components/Student";
import Admin from "./components/Admin";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/teacher" component={Teacher} />
        <Route path="/student" exact component={Student} />
        <Route path="/admin" exact component={Admin} />
      </div>
    </Router>
  );
}
export default App;
