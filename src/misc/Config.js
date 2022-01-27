import axios from "axios";
const API_BASE_URL = "https://api.tvmaze.com";

export const getApi = async (query) => {
  let response = await axios.get(`${API_BASE_URL}/${query}`);

  return response.data;
};
