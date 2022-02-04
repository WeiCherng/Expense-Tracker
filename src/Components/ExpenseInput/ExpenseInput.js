import React, { useState } from "react";
import useForm from "../CustomHook/useForm";
import "./ExpenseInput.css";

export default function ExpenseInput(props) {
  const [date, setDate] = useState("");
  const [values, handleChange] = useForm({
    name: "",
    amount: "0.00",
    type: "Food/Beverage",
  });

  const dateInputHandler = (event) => {
    const newDate = new Date(event.target.value);
    setDate(newDate);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.onSubmit({ ...values, date: date, id: Math.random() });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-container">
        <label>Expense Name</label>
        <input
          className="input-field"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
        ></input>
        <label>Amount</label>
        <input
          className="input-field"
          type="number"
          name="amount"
          min="0.01"
          step="0.01"
          value={values.amount}
          onChange={handleChange}
        />
        <label>Date</label>
        <input
          className="input-field"
          type="date"
          name="date"
          min="2022-01-01"
          max="2025-12-31"
          onChange={dateInputHandler}
          required
        ></input>
        <label>Type of Expense</label>
        <select
          className="input-field"
          name="type"
          value={values.type}
          onChange={handleChange}
        >
          <option>Food/Beverage</option>
          <option>Rent</option>
          <option>Debt</option>
          <option>Utilities</option>
          <option>Other</option>
        </select>
      </div>
      <button className="add-button">Add Expense</button>
    </form>
  );
}
