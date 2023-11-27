// Hooks
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Components
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <section className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </section>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
