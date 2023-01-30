import "./App.css";
import { Routes, Route } from "react-router-dom";

import NavigationPanel from "./components/navigation-panel/navigation-panel";
import Home from "./pages/home/home";
import Students from "./pages/students/students";
import Courses from "./pages/courses/courses";
import Results from "./pages/results/results";

function App() {
  return (
    <>
      <div className="App">ShyftLabs.io</div>
      <div className="main">
        <NavigationPanel />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
