import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "fed00334aemsh1fd2063c6d365f2p163cbdjsn5206a5da7dc2",
    },
  });

  return data;
};
