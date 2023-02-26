import axios from "axios";
import env from 'react-dotenv';

const baseURL = env.API_BASE_URL;

export const createLink = async ({ url, title }) => {
  return await axios.post(`${baseURL}/slug`, {
    url,
    title,
  });
};

export const getLinkBySlug = async ({slug}) => {
  return await axios.get(`${baseURL}/slug/${slug}`)
}