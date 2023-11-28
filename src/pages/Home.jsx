import UserResults from "../components/Users/UserResults";
import UserSearch from "../components/Users/UserSearch";

const Home = () => {
  return (
    <section className="main-page-container">
      <UserSearch />
      <UserResults />
    </section>
  );
};

export default Home;
