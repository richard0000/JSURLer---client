import axios from "axios";

const baseURL = "http://localhost:5000";

export const createLink = async ({ url, title }) => {
  return await axios.post(`${baseURL}/slug`, {
    url,
    title,
  });
};

export const getLinkBySlug = async ({slug}) => {
  return await axios.get(`${baseURL}/slug/${slug}`)
}