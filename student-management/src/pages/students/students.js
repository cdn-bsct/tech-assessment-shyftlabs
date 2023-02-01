import React from "react";
import { useState, useEffect } from "react";
import * as studentsApi from "../../utils/studentsApi";

export default function Students(props) {
  const [students, setStudents] = useState([]);
  const [dateError, setDateError] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(Date(Date.now().toString));

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
      let currentYear = new Date(Date.now()).getFullYear();
      let date = new Date(e.target.value).getFullYear();
      let result = currentYear - date;
      if (result >= 10) {
        setDateError(false);
        setDateOfBirth(e.target.value);
      } else {
        setDateError(true);
        alert("child must be 10 years old");
      }
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
      .then((err) => {
        if (!err) {
          alert(`${err.name}: ${err.message}`);
        } else {
          alert("Student Added");
        }
      });

    setFirstName("");
    setFamilyName("");
    setDateOfBirth("");
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
          value={firstName}
          autoComplete="off"
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="familyName"
          placeholder="Family Name"
          value={familyName}
          onChange={handleOnChange}
        />
        <input
          type="date"
          name="dateOfBirth"
          autoComplete="off"
          value={dateOfBirth}
          onChange={handleOnChange}
        />
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
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => {
              return (
                <tr key={s._id}>
                  <td>{s.firstName}</td>
                  <td>{s.familyName}</td>
                  <td>{s.dateOfBirth}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
