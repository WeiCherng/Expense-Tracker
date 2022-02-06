import ExpenseDate from "./ExpenseDate";
import { motion } from "framer-motion";
import "./ExpenseItem.css";

export const ExpenseItem = (props) => {
  let style;
  if (props.type === "Food/Beverage") {
    style = "type Food";
  } else {
    style = `type ${props.type}`;
  }

  return (
    <motion.li initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{duration: 0.5}}>
      <div className="expenseItem">
        <p className={style}>{props.type}</p>
        <div className="expenseDesc">
          <ExpenseDate date={props.date}></ExpenseDate>
          <h1 className="name">{props.children}</h1>
          <p className="price">${props.amount}</p>
        </div>
      </div>
    </motion.li>
  );
};
