import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  //  Validation function
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim())
      newErrors.ingredients = "Ingredients are required.";
    else if (ingredients.split(",").length < 2) {
      newErrors.ingredients =
        "Please provide at least two ingredients (comma separated).";
    }
    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log({
      title,
      ingredients: ingredients.split(","),
      steps,
    });

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
    alert("Recipe submitted successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div className="md:flex md:items-center md:space-x-4">
          <label className="block text-gray-700 font-medium md:w-1/3">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full md:w-2/3 border rounded-lg px-4 py-2 mt-1 focus:ring focus:ring-green-300"
          />
        </div>
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

        {/* Ingredients */}
        <div className="md:flex md:items-start md:space-x-4">
          <label className="block text-gray-700 font-medium md:w-1/3">
            Ingredients
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full md:w-2/3 border rounded-lg px-4 py-2 mt-1 focus:ring focus:ring-green-300"
            rows="3"
          ></textarea>
        </div>
        {errors.ingredients && (
          <p className="text-red-500 text-sm">{errors.ingredients}</p>
        )}

        {/* Steps */}
        <div className="md:flex md:items-start md:space-x-4">
          <label className="block text-gray-700 font-medium md:w-1/3">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full md:w-2/3 border rounded-lg px-4 py-2 mt-1 focus:ring focus:ring-green-300"
            rows="4"
          ></textarea>
        </div>
        {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition md:w-1/3 md:ml-auto"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
