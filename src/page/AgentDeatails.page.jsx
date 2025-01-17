import { useParams } from "react-router-dom";
import AgentDetails from "../components/ui/AgentDetails";

const AgentPage = () => {
  const { id } = useParams();
  return <AgentDetails agentId={id} />;
};

export default AgentPage;
