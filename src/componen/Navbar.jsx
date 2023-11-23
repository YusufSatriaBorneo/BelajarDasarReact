const Navbar = (props) => {
  return (
    <nav>
      <h1>Halo Saya : {props.navText}</h1>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
// Ini namanya Komponen
export default Navbar;
