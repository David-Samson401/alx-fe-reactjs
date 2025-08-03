// src/services/githubService.js

import axios from "axios";

const BASE_URL = "https://api.github.com";

// 🔹 Basic user fetch by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};

// 🔹 Advanced search using GitHub Search API
export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(
      `${BASE_URL}/search/users?q=${encodeURIComponent(query)}`,
      {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );

    // Optional: fetch user details if you want detailed data
    const userDetails = await Promise.all(
      response.data.items.map(async (user) => {
        const detail = await axios.get(user.url);
        return detail.data;
      })
    );

    return userDetails;
  } catch (error) {
    throw new Error("Failed to fetch search results");
  }
};
