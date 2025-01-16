import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Layout } from "./components/";
import { Agents, Home, Weapons } from "./page/";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AgentPage from "./page/AgentDeatails";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="weapons" element={<Weapons />} />
            <Route path="agents" element={<Agents />} />
            <Route path="agents/:id" element={<AgentPage />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
