import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Layout } from "./components/";
import { Agents, Home, Weapons } from "./page/";

import AgentPage from "./page/AgentDeatails.page";
import WeaponsDetailsPage from "./page/WeaponsDetails.page";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Landing Page */}
            <Route index element={<Home />} />
            {/* Secondary Page */}
            <Route path="weapons" element={<Weapons />} />
            <Route path="agents" element={<Agents />} />
            {/* Details Page */}
            <Route path="agents/:id" element={<AgentPage />} />
            <Route path="weapons/:id" element={<WeaponsDetailsPage />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
