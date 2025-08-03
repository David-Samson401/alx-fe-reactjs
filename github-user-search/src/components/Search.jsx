// import React, { useState } from 'react';
// import axios from 'axios';

// const Search = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   // ✅ Required function
//   const fetchUserData = async (username) => {
//     setLoading(true);
//     setError('');
//     setUser(null);

//     try {
//       const response = await axios.get(`https://api.github.com/users/${username}`);
//       setUser(response.data);
//     } catch (err) {
//       setError("Looks like we cant find the user");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (!searchTerm) return;
//     fetchUserData(searchTerm); // ✅ Use the fetchUserData function
//   };

//   return (
//     <div className="p-4">
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           placeholder="Search GitHub user"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="border px-2 py-1"
//         />
//         <button type="submit" className="ml-2 bg-blue-500 text-white px-3 py-1">Search</button>
//       </form>

//       <div className="mt-4">
//         {loading && <p>Loading</p>}
//         {error && <p>{error}</p>}

//         {user && (
//           <div className="mt-2 border p-2">
//             <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
//             <p><strong>{user.name || user.login}</strong></p>
//             <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
//               View Profile
//             </a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Search;


import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const results = await fetchUserData(username, location, minRepos);
      if (results.length === 0) {
        setError("Looks like we can't find the user");
      }
      setUsers(results);
    } catch (err) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <ul className="mt-6 space-y-4">
        {users.map((user) => (
          <li key={user.id} className="border p-4 rounded">
            <div className="flex items-center space-x-4">
              <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-semibold">{user.login}</p>
                <a href={user.html_url} className="text-blue-500 underline" target="_blank" rel="noreferrer">
                  View Profile
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
