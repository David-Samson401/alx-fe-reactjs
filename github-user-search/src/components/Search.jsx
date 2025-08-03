import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // ✅ Required function
  const fetchUserData = async (username) => {
    setLoading(true);
    setError('');
    setUser(null);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    fetchUserData(searchTerm); // ✅ Use the fetchUserData function
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search GitHub user"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-2 py-1"
        />
        <button type="submit" className="ml-2 bg-blue-500 text-white px-3 py-1">Search</button>
      </form>

      <div className="mt-4">
        {loading && <p>Loading</p>}
        {error && <p>{error}</p>}

        {user && (
          <div className="mt-2 border p-2">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <p><strong>{user.name || user.login}</strong></p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              View Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
