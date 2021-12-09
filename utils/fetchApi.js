import axios from "axios";

export const baseUrl = `https://${process.env.REACT_APP_BAYUT_HOST}`;

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": `${process.env.REACT_APP_BAYUT_HOST}`,
      "x-rapidapi-key": `${process.env.REACT_APP_BAYUT_KEY}`,
    },
  });

  return data;
};
