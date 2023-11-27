import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="main-page-container">
      <div className="not-found-page">
        <h2>404 - Page not found</h2>
        <Link to="/">
          <button className="home-btn" type="button">
            <FaHome />
            back to home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
