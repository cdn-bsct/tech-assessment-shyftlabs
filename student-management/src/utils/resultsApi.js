const BASE_URL = "/api/results";

// get results

export async function getAllResults() {
  return await fetch(`${BASE_URL}`, getResults()).then((res) => res.json());
}

export async function createResult(props) {
  return await fetch(`${BASE_URL}/create`, addResults(props)).then((res) =>
    res.json()
  );
}

// helper functions

function getResults() {
  return {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    // mode: "no-cors",
  };
}

function addResults({ firstName, familyName, course, grade }) {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ firstName, familyName, course, grade }),
  };
}
