import React, { useEffect, useState } from "react";

import * as studentsApi from "../../utils/studentsApi";
import * as coursesApi from "../../utils/coursesApi";
import * as resultsApi from "../../utils/resultsApi";

export default function Results() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [results, setResults] = useState([]);
  const [studentChoice, setStudentChoice] = useState("");
  const [courseChoice, setCourseChoice] = useState("");
  const [gradeChoice, setGradeChoice] = useState("");

  // -------------- Populate Dropdown Menus ---------------
  async function getstudents() {
    let data = await studentsApi.getAllStudents();
    setStudents(data);
  }

  async function getCourses() {
    let data = await coursesApi.getAllCourses();
    setCourses(data);
  }
  // --------------- Populate Main Results Table -----------
  async function getResults() {
    let data = await resultsApi.getAllResults();
    setResults(data);
  }

  // -------------- Form Change and Submit Handlers -------
  function handleStudentChange(e) {
    setStudentChoice(e.target.value);
  }
  function handleCourseChange(e) {
    setCourseChoice(e.target.value);
  }
  function handleGradeChange(e) {
    setGradeChoice(e.target.value);
  }

  async function handleOnSubmit(e) {
    e.preventDefault();
    let name = studentChoice.split(" ");
    let data = await resultsApi
      .createResult({
        firstName: name[0],
        familyName: name[1],
        course: courseChoice,
        grade: gradeChoice,
      })
      .then(() => {
        alert("Student Added");
      });

    setStudentChoice("");
    setCourseChoice("");
    setGradeChoice("");
    getResults();
  }

  useEffect(() => {
    getstudents();
    getCourses();
    getResults();
  }, []);
  // -------------- finding Students by ID --------

  return (
    <>
      <h1>Results Page</h1>
      <hr />
      <form onSubmit={handleOnSubmit}>
        <select
          type="select"
          name="student"
          placeholder="Student"
          required={true}
          value={studentChoice}
          onChange={handleStudentChange}
        >
          <option>--Please Select--</option>
          {students.map((s) => {
            return <option>{`${s.firstName} ${s.familyName}`}</option>;
          })}
        </select>
        <select
          type="select"
          name="course"
          placeholder="Course"
          required={true}
          value={courseChoice}
          onChange={handleCourseChange}
        >
          <option>--Please Select--</option>
          {courses.map((c) => {
            return <option>{c.name}</option>;
          })}
        </select>
        <select
          type="select"
          name="grade"
          placeholder="Result"
          value={gradeChoice}
          required={true}
          onChange={handleGradeChange}
        >
          <option>--Please Select--</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
          <option>E</option>
          <option>F</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
      <hr />
      <table>
        <thead>
          <tr>
            <td>Course</td>
            <td>Student</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          {results.map((r) => {
            return (
              <tr>
                <td>{r.course}</td>
                <td>{r.student}</td>
                <td>{r.grade}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
