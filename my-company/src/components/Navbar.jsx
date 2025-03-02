import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "white", justifyContent:"center", display:"block"}}>
      <Link to="/" style={{ margin: "10px", color: "white" }}>Home</Link>
      <Link to="/about" style={{ margin: "10px", color: "white" }}>About</Link>
      <Link to="/services" style={{ margin: "10px", color: "white" }}>Services</Link>
      <Link to="/contact" style={{ margin: "10px", color: "white" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
