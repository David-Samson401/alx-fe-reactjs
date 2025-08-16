import { Link } from "react-router-dom";
import recipes from "../data.json";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Recipe Sharing Platform
      </h1>

      {/* Button to Add New Recipe */}
      <div className="flex justify-center mb-8">
        <Link
          to="/add"
          className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition"
        >
          + Add New Recipe
        </Link>
      </div>

      {/* Recipe List */}
      <ul className="space-y-4">
        {recipes.map((recipe) => (
          <li
            key={recipe.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-600 mb-3">
              Ingredients: {recipe.ingredients.slice(0, 3).join(", ")}
              {recipe.ingredients.length > 3 ? "..." : ""}
            </p>
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-blue-600 font-medium hover:underline"
            >
              View Details →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
