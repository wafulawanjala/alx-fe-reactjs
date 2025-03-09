import { useState } from 'react';
import './App.css';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import SearchBar from './components/searchBar';

function App() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', color: 'red', width: '50%', margin: 'auto' }}>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <AddRecipeForm />
        <RecipeList />
      </div>
    </>
  );
}

export default App;