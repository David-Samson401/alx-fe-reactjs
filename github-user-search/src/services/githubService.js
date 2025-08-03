// import axios from 'axios';

// const GITHUB_BASE = 'https://api.github.com';

// export const fetchUserData = async (username) => {
//   const res = await axios.get(`${GITHUB_BASE}/users/${username}`);
//   return res.data;
// };

// export const fetchAdvancedUserData = async ({ username, location, minRepos }) => {
//   let query = '';

//   if (username) query += `${username} in:login `;
//   if (location) query += `location:${location} `;
//   if (minRepos) query += `repos:>=${minRepos}`;

//   const res = await axios.get(`${GITHUB_BASE}/search/users?q=${encodeURIComponent(query)}`);
//   const userDetails = await Promise.all(
//     res.data.items.map(async (user) => {
//       const detail = await axios.get(user.url);
//       return detail.data;
//     })
//   );

//   return userDetails;
// };


import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchUserData = async (username, location, minRepos) => {
  try {
    const query = [`user:${username}`];

    if (location) query.push(`location:${location}`);
    if (minRepos) query.push(`repos:>=${minRepos}`);

    const searchQuery = query.join('+');
    const response = await axios.get(`${BASE_URL}/search/users?q=${searchQuery}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    return response.data.items;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
};
