import React from "react";
import { useState, useEffect } from "react";
import * as studentsApi from "../../utils/studentsApi";

export default function Students() {
  const [students, setStudents] = useState();
  const [error, setError] = useState();

  async function getAll() {
    try {
      let allStudents = await studentsApi.getAllStudents();
      setStudents(allStudents);
      console.log(allStudents);
    } catch (err) {
      setError(err);
    }
  }

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <div className="students-header"> All Students</div>
      {/* student addition form */}
      {/* student table display */}
      {students ? (
        <div> there are no students to display</div>
      ) : (
        <div>{students}</div>
      )}
    </>
  );
}
