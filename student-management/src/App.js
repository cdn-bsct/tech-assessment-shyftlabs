import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import NavigationPanel from "./components/navigation-panel/navigation-panel";
import Home from "./pages/home/home";
import Students from "./pages/students/students";
import Courses from "./pages/courses/courses";
import Results from "./pages/results/results";

import * as studentsApi from "./utils/studentsApi";
import * as coursesApi from "./utils/coursesApi";

function App() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  // ------- functions to pass down props to pages ----
  async function getstudents() {
    let data = await studentsApi.getAllStudents();
    setStudents(data);
  }

  async function getCourses() {
    let data = await coursesApi.getAllCourses();
    setCourses(data);
  }

  useEffect(() => {
    getstudents();
    getCourses();
  }, []);
  return (
    <>
      <div className="main">
        <NavigationPanel />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/students"
              element={<Students students={students} />}
            />
            <Route path="/courses" element={<Courses courses={courses} />} />
            <Route
              path="/results"
              element={
                <Results
                  students={students}
                  courses={courses}
                  getStudents={getstudents}
                  getCourses={getCourses}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
