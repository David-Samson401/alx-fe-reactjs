import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  addRecipe: (recipe) => set(state => ({
    recipes: [...state.recipes, recipe],
    filteredRecipes: [...state.recipes, recipe]
  })),

  deleteRecipe: (id) => set(state => {
    const updated = state.recipes.filter(recipe => recipe.id !== id);
    return {
      recipes: updated,
      filteredRecipes: updated.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),

  updateRecipe: (updatedRecipe) => set(state => {
    const updatedRecipes = state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),

  setSearchTerm: (term) => set(state => {
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    return {
      searchTerm: term,
      filteredRecipes: filtered
    };
  }),
}));





// import { create } from 'zustand';

// export const useRecipeStore = create(set => ({
//   recipes: [],
//   addRecipe: (newRecipe) =>
//     set(state => ({ recipes: [...state.recipes, newRecipe] })),

//   deleteRecipe: (id) =>
//     set(state => ({
//       recipes: state.recipes.filter(recipe => recipe.id !== id)
//     })),

//   updateRecipe: (updatedRecipe) =>
//     set(state => ({
//       recipes: state.recipes.map(recipe =>
//         recipe.id === updatedRecipe.id ? updatedRecipe : recipe
//       )
//     })),

//   setRecipes: (recipes) => set({ recipes }),
// }));





