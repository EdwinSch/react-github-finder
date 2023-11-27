// Hooks
import { BrowserRouter as Router, Route } from "react-router-dom";
// Components
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <Footer />
      </main>
    </Router>
  );
}

export default App;
