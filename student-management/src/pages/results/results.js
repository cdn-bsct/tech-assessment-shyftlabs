import React, { useEffect, useState } from "react";

import * as resultsApi from "../../utils/resultsApi";

export default function Results({ students, courses }) {
  const [results, setResults] = useState([]);
  const [studentChoice, setStudentChoice] = useState("");
  const [courseChoice, setCourseChoice] = useState("");
  const [gradeChoice, setGradeChoice] = useState("");

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
    let data = await resultsApi
      .createResult({
        student: studentChoice,
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
    getResults();
  }, []);
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
            return (
              <option
                value={s._id}
                key={s._id}
              >{`${s.firstName} ${s.familyName}`}</option>
            );
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
            return (
              <option value={c._id} key={c._id}>
                {c.name}
              </option>
            );
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
              <tr key={r._id}>
                <td>{r.course.name}</td>
                <td>{`${r.student.firstName} ${r.student.familyName}`}</td>
                <td>{r.grade}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
