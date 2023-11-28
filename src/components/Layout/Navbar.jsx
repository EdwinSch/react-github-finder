import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <nav>
      <div className="inner-nav">
        <div className="header-wrapper">
          <FaGithub className="icon" />
          <Link to="/">
            <h1>github finder</h1>
          </Link>
        </div>

        <ul className="nav-btns-wrapper">
          <NavButton route="/" label="home" />
          <NavButton route="/about" label="about" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
