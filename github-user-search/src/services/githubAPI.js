import axios from 'axios';

const BASE_URL = import.meta.env.VITE_GITHUB_API_URL;

export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};
