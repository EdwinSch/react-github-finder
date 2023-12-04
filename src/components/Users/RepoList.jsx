import RepoItem from "./RepoItem";

const RepoList = ({ repos }) => {
  return (
    <section className="repolist-container">
      <h5>latest repositories</h5>
      {repos.map((repo) => {
        return <RepoItem key={repo.id} {...repo} />;
      })}
    </section>
  );
};

export default RepoList;
