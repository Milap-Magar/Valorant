import axios from "axios";
import { useEffect, useState } from "react";

const useAgentDeatils = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://valorant-api.com/v1/agents";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, isLoading, error };
};

export default useAgentDeatils;
