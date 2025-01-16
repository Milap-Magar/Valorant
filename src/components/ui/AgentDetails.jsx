import React from "react";
import useAgentData from "../../hooks/useAgentData";

const AgentDetails = ({ agentId }) => {
  const { data, isLoading, error, isError } = useAgentData(agentId);

  if (isLoading) {
    return <div>Loading agent details...</div>;
  }

  if (isError) {
    return <div>Error loading agent data: {error.message}</div>;
  }

  return (
    <div>
      <h1>Agent Details</h1>
      <p>
        <strong>ID:</strong> {data.id}
      </p>
      <p>
        <strong>Name:</strong> {data.name}
      </p>
      <p>
        <strong>Description:</strong> {data.description}
      </p>
    </div>
  );
};

export default AgentDetails;
