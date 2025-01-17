import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchAgents = async (agentId) => {
  const endpoint = agentId
    ? `https://valorant-api.com/v1/agents/${agentId}`
    : "https://valorant-api.com/v1/agents";
  const response = await axios.get(endpoint);
  // console.log(response);
  return response.data.data;
};

const useAgentDetails = (agentId = null) => {
  return useQuery({
    queryKey: agentId ? ["agent", agentId] : ["agents"],
    queryFn: () => fetchAgents(agentId),
    staleTime: 1000 * 60 * 5,
    enabled: agentId !== null || agentId === null,
  });
};

export default useAgentDetails;
