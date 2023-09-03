import React from "react";

function ExpenseItem(props) {
  return (
    <div>
      <div className="expence-content">
        <p>Name: {props.name}</p>
        <p>Last Name: {props.lname}</p>
        <p>Email: {props.email}</p>
        {props.children}
      </div>
    </div>
  );
}

export default ExpenseItem;
