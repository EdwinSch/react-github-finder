// Hooks
import { BrowserRouter as Router, Route } from "react-router-dom";
// Components
import Navbar from "./components/Layout/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
