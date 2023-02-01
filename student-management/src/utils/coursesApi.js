const BASE_URL = "/api/courses";

export async function getAllCourses() {
  return await fetch(`${BASE_URL}`, getCourses()).then((res) => res.json());
}

export async function createNewCourse(props) {
  return await fetch(`${BASE_URL}/create`, addCourse(props)).then((res) =>
    res.json()
  );
}

// helper functions --- to make code more readable for fetch requests

function getCourses() {
  return {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
}

function addCourse({ name }) {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  };
}
