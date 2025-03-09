import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  favorites: [],
  setSearchTerm: term => set({ searchTerm: term }),
  addRecipe: newRecipe => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: id => set(state => ({ recipes: state.recipes.filter(recipe => recipe.id !== id) })),
  updateRecipe: (id, updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe => (recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe)),
  })),
  addFavorite: recipeId => set(state => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: recipeId => set(state => ({ favorites: state.favorites.filter(id => id !== recipeId) })),
}));

export default useRecipeStore;