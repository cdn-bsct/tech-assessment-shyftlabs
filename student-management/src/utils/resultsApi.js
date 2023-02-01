const BASE_URL = "/api/results";

// get results

export async function getAllResults() {
  return await fetch(`${BASE_URL}`, getResults()).then((res) => res.json());
}

// add new results

export async function createResult(props) {
  return await fetch(`${BASE_URL}/create`, addResults(props)).then((res) =>
    res.json()
  );
}

// helper functions--- to make code more readable for fetch requests

function getResults() {
  return {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
}

function addResults({ student, course, grade }) {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ student, course, grade }),
  };
}
