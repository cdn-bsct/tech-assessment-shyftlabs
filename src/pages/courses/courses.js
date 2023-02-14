import React, { useEffect } from "react";
import { useState } from "react";

import * as coursesApi from "../../utils/coursesApi";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState("");

  useEffect(() => {
    getCourses();
  }, []);

  async function getCourses() {
    let data = await coursesApi.getAllCourses();
    setCourses(data);
  }

  function handleOnChange(e) {
    setCourseName(e.target.value);
  }

  async function handleOnSubmit(e) {
    e.preventDefault();
    let course = courseName.trim();
    await coursesApi.createNewCourse({ name: course }).then((err) => {
      if (!err.name) {
        alert("Course Added");
      } else {
        alert(`${err.name}: ${err.message}`);
      }
    });
    setCourseName("");
    getCourses();
  }

  return (
    <>
      <h1>All Courses</h1>
      <hr />
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Course Name"
          value={courseName}
          autoComplete="off"
          onChange={handleOnChange}
        />
        <input type="submit" value="Submit" />
      </form>
      <hr />
      <div>
        <table>
          <thead>
            <tr>
              <th>Courses</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c) => {
              return (
                <tr key={c._id}>
                  <td>{c.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
