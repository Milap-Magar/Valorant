import axios from "axios";
import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

const AgentList = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAgentData = async () => {
      try {
        const response = await axios.get("https://valorant-api.com/v1/agents/");
        setAgents(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchAgentData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="text-center text-3xl font-bold pt-24 mb-8">Agent List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 py-4">
        {agents.map((agent) => (
          <div
            key={agent.uuid}
            className="agent-card rounded-lg shadow-gray-600 shadow-lg p-4 text-center cursor-pointer"
            onClick={() => navigate(`/agents/${agent.uuid}`)}
          >
            <img
              src={agent.displayIcon}
              alt={agent.displayName}
              className="agent-icon w-32 h-32 mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{agent.displayName}</h2>
            <p className="text-sm text-slate-200 mb-4">{agent.description}</p>
            <img
              src={agent.bustPortrait}
              alt={`${agent.displayName} Portrait`}
              className="agent-portrait w-24 h-24 mx-auto rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentList;
