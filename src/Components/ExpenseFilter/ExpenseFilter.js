import React from "react";
import "./ExpenseFilter.css"

export default function ExpenseFilter(props) {
  const optionHandler = (event) =>{
    props.onSelect(event.target.value)
  } 

  return (
      <select className="filterCont" onChange={optionHandler}>
        <option className="filterOpt">All</option>
        <option className="filterOpt">Food/Beverage</option>
        <option className="filterOpt">Rent</option>
        <option className="filterOpt">Debt</option>
        <option className="filterOpt">Utilities</option>
        <option className="filterOpt">Other</option>
      </select>
  );
}
