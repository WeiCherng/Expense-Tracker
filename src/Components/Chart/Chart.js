import { PieChart } from "react-minimal-pie-chart";
import "./Chart.css";
import ChartLable from "./ChartLabel";

export default function Chart(props) {
  const data = [
    { title: "Food/Beverage", value: 0, color: "#f2636a" },
    { title: "Rent", value: 0, color: "#f8961e" },
    { title: "Debt", value: 0, color: "#f9c74f" },
    { title: "Utilities", value: 0, color: "#90be6d" },
    { title: "Other", value: 0, color: "#43aa8b" },
  ];
  const addToData = (amount, type) => {
    data.forEach((item) => {
      if (item.title === type) {
        item.value += amount;
      }
    });
  };

  props.data.forEach((expense) => {
    addToData(parseInt(expense.amount), expense.type);
  });

  return (
    <div className="chart-container">
      <div>
        <PieChart className="chart" data={data} animate={true} />
        <h3 className="chartYear">{props.year}</h3>
      </div>
      <ChartLable data={data}></ChartLable>
    </div>
  );
}
