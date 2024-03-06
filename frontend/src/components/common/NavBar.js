import Logo from '../../images/logo.png';

function NavBar() {
  return (
    <nav>
      <img src={Logo} alt='logo' />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default NavBar;
