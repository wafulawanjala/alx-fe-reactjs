import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column', color: 'red', width: '50%', margin: 'auto' }}>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/edit-recipe/:id" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;