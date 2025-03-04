import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style = {{display:'flex', flexDirection:'column', color:'red'}}>
        <AddRecipeForm/>
        <RecipeList/>
      </div>
    </>
  )
}

export default App
