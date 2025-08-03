// import React, { useState } from 'react';
// import SearchBar from './components/SearchBar';
// import UserCard from './components/UserCard';
// import { fetchGitHubUser } from './services/githubAPI';
// import Search from './components/Search';

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState('');

//   const handleSearch = async (username) => {
//     try {
//       const userData = await fetchGitHubUser(username);
//       setUser(userData);
//       setError('');
//     } catch (err) {
//       setUser(null);
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="app">
//       <h1>GitHub User Search</h1>
//       <SearchBar onSearch={handleSearch} />
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <UserCard user={user} />
//     </div>
//   );
// };

// export default App;



import React from 'react';
import Search from './components/Search';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">GitHub User Search</h1>
      <Search />
    </div>
  );
};

export default App;
