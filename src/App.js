import "./App.css";
import { useState } from "react";
import ExpenseFilter from "./Components/ExpenseFilter/ExpenseFilter";
import ExpenseInput from "./Components/ExpenseInput/ExpenseInput";
import { ExpenseList } from "./Components/ExpenseList/ExpenseList";
import ExpenseFilterDate from "./Components/ExpenseFilter/ExpenseFilterDate";
import Chart from "./Components/Chart/Chart";
import DummyData from "./DummyData";

function App() {
  const [expenses, setExpenses] = useState(DummyData);
  const [selectedType, setType] = useState("All");
  const [selectedDate, setDate] = useState("2022");

  const inputDataHandler = (data) => {
    setExpenses((prevExpenses) => {
      return [ ...prevExpenses, data];
    });
  };

  const noExpense = () => {
    return <p>No Expense ! </p>;
  };

  const filterChartData = (selectedDate) => {
    const filterYear = expenses.filter(
      (expense) => expense.date.getUTCFullYear().toString() === selectedDate
    );
    return filterYear.length ? (
      <Chart data={filterYear} year={selectedDate}></Chart>
    ) : (
      <section className="chart-container">
        {noExpense()}
      </section>
    );
  };

  const filterExpenses = (selectedType, selectedDate) => {
    const filterYear = expenses.filter(
      (expense) => expense.date.getUTCFullYear().toString() === selectedDate
    );
    if (selectedType === "All") {
      return filterYear.length ? (
        <ExpenseList list={filterYear}></ExpenseList>
      ) : (
        noExpense()
      );
    } else {
      const filterType = filterYear.filter(
        (expense) => expense.type === selectedType
      );
      return filterType.length ? (
        <ExpenseList list={filterType}></ExpenseList>
      ) : (
        noExpense()
      );
    }
  };

  return (
    <main className="main-container">
      <div className="row data-container">
        <section className="input-container">
          <ExpenseInput onSubmit={inputDataHandler}></ExpenseInput>
        </section>
        {filterChartData(selectedDate)}
      </div>
      <div className="row">
        <section className="expenses-container">
          <div className="filter">
            <ExpenseFilterDate onSelect={setDate}></ExpenseFilterDate>
            <ExpenseFilter onSelect={setType}></ExpenseFilter>
          </div>
          <div className="expense">
            {filterExpenses(selectedType, selectedDate)}
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
