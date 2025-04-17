import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Project from "./routes/projects/project.component";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Project />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
