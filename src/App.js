import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Layout } from "./components/";
import { Agents, Home, Weapons } from "./page/";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="weapons" element={<Weapons />} />
          <Route path="agents" element={<Agents />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
