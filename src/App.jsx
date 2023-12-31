// Hooks
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GithubProvider } from "./context/github/GithubContext";
// Components
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <GithubProvider>
      <Router>
        <main>
          <Navbar />
          <section className="content-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/user/:login" element={<User />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </section>
          <Footer />
        </main>
      </Router>
    </GithubProvider>
  );
}

export default App;
