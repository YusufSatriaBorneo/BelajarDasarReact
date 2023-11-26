import { Link } from "react-router-dom";

const Navbar = ({ navValue }) => {
  return (
    <nav>
      <div>
        <h1>Halo Saya : {}</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="">{!navValue ? "Contact" : navValue}</a>
            <a href="/contact">Contact {!navValue ? "Contact" : navValue}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
// Ini namanya Komponen
export default Navbar;
