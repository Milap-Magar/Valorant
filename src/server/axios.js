import axios from "axios";

export default fetchHomeData = async() => { 
    const response = await axios.get("https://valorant-api.com/v1/agents");
    return response.data;
}

