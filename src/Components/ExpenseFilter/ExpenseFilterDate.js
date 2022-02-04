import "./ExpenseFilterDate.css"

export default function ExpenseFilterDate(props){
    const optionHandler = (event) => {
        props.onSelect(event.target.value)
    }

    return (
        <select className="filterCont" onChange={optionHandler}>
            <option className="filterOpt">2022</option>
            <option className="filterOpt">2023</option>
            <option className="filterOpt">2024</option>
            <option className="filterOpt">2025</option>
        </select>
    )
}