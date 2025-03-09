import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', gap: '10px', padding: '10px' }}>
      <Link to="/">Home</Link>
      <Link to="/add-recipe">Add Recipe</Link>
      <Link to="/recipes">Recipe List</Link>
    </nav>
  );
};

export default Navbar;