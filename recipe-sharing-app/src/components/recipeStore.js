// import { create } from 'zustand';

// export const useRecipeStore = create((set) => ({
//   recipes: [],
//   searchTerm: '',
//   filteredRecipes: [],
  
//   addRecipe: (recipe) => set(state => ({
//     recipes: [...state.recipes, recipe],
//     filteredRecipes: [...state.recipes, recipe]
//   })),

//   deleteRecipe: (id) => set(state => {
//     const updated = state.recipes.filter(recipe => recipe.id !== id);
//     return {
//       recipes: updated,
//       filteredRecipes: updated.filter(recipe =>
//         recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
//       )
//     };
//   }),

//   updateRecipe: (updatedRecipe) => set(state => {
//     const updatedRecipes = state.recipes.map(recipe =>
//       recipe.id === updatedRecipe.id ? updatedRecipe : recipe
//     );
//     return {
//       recipes: updatedRecipes,
//       filteredRecipes: updatedRecipes.filter(recipe =>
//         recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
//       )
//     };
//   }),

//   setSearchTerm: (term) => set(state => {
//     const filtered = state.recipes.filter(recipe =>
//       recipe.title.toLowerCase().includes(term.toLowerCase())
//     );
//     return {
//       searchTerm: term,
//       filteredRecipes: filtered
//     };
//   }),
// }));





// // import { create } from 'zustand';

// // export const useRecipeStore = create(set => ({
// //   recipes: [],
// //   addRecipe: (newRecipe) =>
// //     set(state => ({ recipes: [...state.recipes, newRecipe] })),

// //   deleteRecipe: (id) =>
// //     set(state => ({
// //       recipes: state.recipes.filter(recipe => recipe.id !== id)
// //     })),

// //   updateRecipe: (updatedRecipe) =>
// //     set(state => ({
// //       recipes: state.recipes.map(recipe =>
// //         recipe.id === updatedRecipe.id ? updatedRecipe : recipe
// //       )
// //     })),

// //   setRecipes: (recipes) => set({ recipes }),
// // }));





import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  addRecipe: (recipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, recipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updated,
        filteredRecipes: updated.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
        favorites: state.favorites.filter((fid) => fid !== id),
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return {
        recipes: updated,
        filteredRecipes: updated.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    })),

  addFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.includes(id)
        ? state.favorites
        : [...state.favorites, id],
    })),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((fid) => fid !== id),
    })),

  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (r) =>
          state.favorites.includes(r.id) &&
          Math.random() > 0.5 // mock logic
      );
      return { recommendations: recommended };
    }),
}));
