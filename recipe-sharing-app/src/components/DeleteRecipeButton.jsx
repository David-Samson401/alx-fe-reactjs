import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../components/recipeStore';

function DeleteRecipeButton({ id }) {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(id);
    alert("Recipe deleted.");
    navigate('/');
  };

  return (
    <button onClick={handleDelete} style={{ marginTop: '10px' }}>
      Delete Recipe
    </button>
  );
}

export default DeleteRecipeButton;
