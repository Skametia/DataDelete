import React, { useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./App.css";
function App() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch(`https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001`)
      .then((res) => res.json())
      .then((data) => {
        setPeople(data);
      })
      .catch((error) => console.log(error));
  }, [people]);

  const Del = (email) => {
    const updatedPeople = people.filter((person) => person.email !== email);

    setPeople(updatedPeople);
  };

  return (
    <div className="App">
      <h1>This is my code</h1>
      {people.map((person, index) => (
        <ExpenseItem
          key={index}
          name={person.firstName}
          lname={person.lastName}
          email={person.email}
        >
          <button className="btn" onClick={() => Del(person.email)}>
            ✘
          </button>
        </ExpenseItem>
      ))}
    </div>
  );
}

export default App;
