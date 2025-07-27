// import { Link } from 'react-router-dom';
// import { useRecipeStore } from '../components/recipeStore';

// function RecipeList() {
//   const recipes = useRecipeStore(state => state.recipes);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Recipe List</h2>
//       {recipes.map(recipe => (
//         <div key={recipe.id}>
//           <h3>
//             <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
//           </h3>
//           <p>{recipe.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default RecipeList;



import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../components/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 && <p>No recipes match your search.</p>}
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;



