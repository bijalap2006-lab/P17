import React, { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.log("Error:", error));
  }, []);

  return (
    <div>
      <h1>Student List</h1>

      {students.map((student) => (
        <div key={student.id}>
          <h3>Name: {student.name}</h3>
          <p>Email: {student.email}</p>
          <p>City: {student.address.city}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
