import { FaLink } from "react-icons/fa";

const RepoItem = ({
  html_url,
  name,
  description,
  watchers_count,
  open_issues,
  forks,
}) => {
  return (
    <article className="repo-item-wrapper">
      <a href={html_url} className="repo-link" target="_blank" rel="norefferer">
        <span>
          <FaLink />
        </span>
        {name}
      </a>
    </article>
  );
};

export default RepoItem;
