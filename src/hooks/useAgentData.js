import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchAgentData = async (agentId) => {
  const response = await axios.get(`https://api.example.com/agents/${agentId}`);
  return response.data;
};
const useAgentData = (agentId) => {
  return useQuery({
    queryKey: ["agentData", agentId], 
    queryFn: () => fetchAgentData(agentId), 
    enabled: !!agentId, 
    staleTime: 1000 * 60 * 5, 
  });
};

export default useAgentData;
