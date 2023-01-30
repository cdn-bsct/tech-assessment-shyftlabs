import React, { useEffect } from "react";

export default function Results() {
  return (
    <>
      <h1>Results Page</h1>
      <hr />
      <form>
        <select type="select" name="student" placeholder="Student"></select>
        <select type="select" name="course" placeholder="Course"></select>
        <select type="select" name="result" placeholder="Result">
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
          <option>E</option>
          <option>F</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
