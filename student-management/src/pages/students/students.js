import React from "react";
import { useState, useEffect } from "react";
import * as studentsApi from "../../utils/studentsApi";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState(false);
  const [error, setError] = useState();
  const [dateError, setDateError] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  useEffect(() => {
    getAll();
  }, []);

  async function getAll() {
    const allStudents = await studentsApi.getAllStudents();
    setStudents(allStudents);
  }

  function handleOnChange(e) {
    if (e.target.name === "firstName") setFirstName(e.target.value);
    if (e.target.name === "familyName") setFamilyName(e.target.value);
    if (e.target.name === "dateOfBirth") {
      setDateError(false);
      setDateOfBirth(e.target.value);
    } else {
      setDateError(true);
    }
  }

  async function handleOnSubmit(e) {
    e.preventDefault();
    await studentsApi
      .createNewStudents({
        firstName: firstName,
        familyName: familyName,
        dateOfBirth: dateOfBirth,
      })
      .then(() => {
        setNewStudent(true);
        alert("Student Added");
      });

    getAll();
  }

  return (
    <>
      <div className="students-header"> All Students</div>
      <hr />
      {/* student addition form */}
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="familyName"
          placeholder="Family Name"
          onChange={handleOnChange}
        />
        <input type="date" name="dateOfBirth" onChange={handleOnChange} />
        <input
          type="submit"
          value="Submit"
          disabled={dateError ? true : false}
        />
      </form>
      <hr />
      {/* student table display */}
      <div>
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
          </tr>
          {students.map((s) => {
            return (
              <tr>
                <td>{s.firstName}</td>
                <td>{s.familyName}</td>
                <td>{s.dateOfBirth}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}
