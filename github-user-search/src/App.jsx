


// import React from 'react';
// import Search from './components/Search';

// const App = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <h1 className="text-3xl font-bold text-center mb-6">GitHub User Search</h1>
//       <Search />
//     </div>
//   );
// };

// export default App;

import Search from './components/Search';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white p-4 text-center text-xl font-bold">
        GitHub User Search
      </header>
      <Search />
    </div>
  );
}

export default App;
