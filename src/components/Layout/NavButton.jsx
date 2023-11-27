import { Link } from "react-router-dom";

const NavButton = ({ label, route }) => {
  return (
    <Link to={route}>
      <button className="nav-btn" type="button">
        {label}
      </button>
    </Link>
  );
};

export default NavButton;
