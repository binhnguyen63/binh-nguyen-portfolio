import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Project from "./routes/projects/project.component";
import Contact from "./routes/contact/contact.component";
import ScrollToTop from "./components/scroll-to-top.jsx/scroll-to-top.component";
import AboutMe from "./routes/about-me/about-me.component";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Project />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about-me" element={<AboutMe />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
