import { useParams, Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const { recipes, addFavorite, removeFavorite, favorites } = useRecipeStore(state => ({
    recipes: state.recipes,
    addFavorite: state.addFavorite,
    removeFavorite: state.removeFavorite,
    favorites: state.favorites,
  }));
  
  const recipe = recipes.find(recipe => recipe.id === parseInt(id));
  if (!recipe) {
    return <p>Recipe not found.</p>;
  }
  
  const isFavorite = favorites.includes(recipe.id);
  
  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <button onClick={() => isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      <Link to={`/edit-recipe/${recipe.id}`}>Edit Recipe</Link>
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;