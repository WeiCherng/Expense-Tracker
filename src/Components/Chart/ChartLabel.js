import "./ChartLable.css";

export default function ChartLable(props) {

  const checkView = (type, style, text) => {
    let valid;
    props.data.forEach((item) => {
      if (item.title === type && item.value !== 0) {
        valid = true;
      }
    });
    if (valid) {
      return (
        <div className="labelCont">
          <div id={style}></div>
          <p className="labelName">{text}</p>
        </div>
      );
    }
  };

  return (
    <div className="labelAlign">
      {checkView("Food/Beverage", "food", "-Food/Beverage")}
      {checkView("Rent", "rent", "-Rent")}
      {checkView("Debt", "debt", "-Debt")}
      {checkView("Utilities", "utilities", "-Utilities")}
      {checkView("Other", "other", "-Other")}
    </div>
  );
}
