import { ExpenseItem } from "../ExpenseItem/ExpenseItem";
import "./ExpenseList.css";

export const ExpenseList = (props) => {
  return (
    <ul>
      {props.list.map((expense) => (
        <ExpenseItem key={expense.id} date={expense.date} amount={expense.amount} type={expense.type}>
          {expense.name}
        </ExpenseItem>
      ))}
    </ul>
  );
};
