import React from "react";
import UserProfile from "./components/UserProfile";
import "./index.css"; // Global styles (Tailwind's entry point)
import "./app.css";   // Your custom styles (optional)

function App() {
  return (
    <div className="App">
      <UserProfile />
    </div>
  );
}

export default App;
