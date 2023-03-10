const BASE_URL = "/api/students";

//Get all students
export async function getAllStudents() {
  return await fetch(`${BASE_URL}`, getStudents()).then((res) => res.json());
}

//Add new students
export async function createNewStudents(props) {
  return await fetch(`${BASE_URL}/create`, getStudentsPost(props)).then((res) =>
    res.json()
  );
}

// helper functions --- to make code more readable for fetch requests
function getStudents() {
  return {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
}

function getStudentsPost({ firstName, familyName, dateOfBirth }) {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ firstName, familyName, dateOfBirth }),
  };
}
