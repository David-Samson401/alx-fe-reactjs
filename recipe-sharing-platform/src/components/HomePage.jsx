// import { Link } from "react-router-dom";
// import recipes from "../data.json";

// export default function HomePage() {
//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6 text-center">
//         Recipe Sharing Platform
//       </h1>

//       {/* Button to Add New Recipe */}
//       <div className="flex justify-center mb-8">
//         <Link
//           to="/add"
//           className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition"
//         >
//           + Add New Recipe
//         </Link>
//       </div>

//       {/* Recipe List */}
//       <ul className="space-y-4">
//         {recipes.map((recipe) => (
//           <li
//             key={recipe.id}
//             className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
//           >
//             <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
//             <p className="text-gray-600 mb-3">
//               Ingredients: {recipe.ingredients.slice(0, 3).join(", ")}
//               {recipe.ingredients.length > 3 ? "..." : ""}
//             </p>
//             <Link
//               to={`/recipe/${recipe.id}`}
//               className="text-blue-600 font-medium hover:underline"
//             >
//               View Details →
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  //  Load mock data when component mounts
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Failed to load recipes:", err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Recipe Sharing Platform
      </h1>

      {/* Responsive Recipe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition transform"
          >
            {/* Recipe Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            {/* Recipe Content */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 mb-4">{recipe.summary}</p>

              {/* Link to Recipe Details */}
              <Link
                to={`/recipes/${recipe.id}`}
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
