import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/letter">Letter</Link></li>
        <li><Link to="/moments">Moments</Link></li>
        <li><Link to="/why-you">Why You</Link></li>
        <li><Link to="/celebration">Celebration</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;