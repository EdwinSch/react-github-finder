import { FaLink, FaStar } from "react-icons/fa";
import { BiFork } from "react-icons/bi";

const RepoItem = ({ html_url, name, stargazers_count, forks }) => {
  return (
    <article className="repo-item-wrapper">
      <a href={html_url} className="repo-link" target="_blank" rel="norefferer">
        <span>
          <FaLink size={16} />
        </span>
        {name}
      </a>
      <div className="badge-wrapper">
        <p className="badge-stat">
          <FaStar style={{ marginBottom: 4 }} />
          {stargazers_count}
        </p>
        <p className="badge-stat">
          <BiFork style={{ marginBottom: 4 }} />
          {forks}
        </p>
      </div>
    </article>
  );
};

export default RepoItem;
