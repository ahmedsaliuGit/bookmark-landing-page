import Hamburger from "../assets/icon-hamburger.svg";
import Logo from "../assets/logo-bookmark.svg";

export default function Header() {
  return (
    <header className="w-full py-10 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <img src={Logo} alt="Site logo" />
        <div aria-label="Hamburger" className="md:hidden">
          <img src={Hamburger} alt="Hamburger icon" />
        </div>
        <nav className="hidden">
          <ul>
            <li>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Contact</a>
              <a href="#">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
