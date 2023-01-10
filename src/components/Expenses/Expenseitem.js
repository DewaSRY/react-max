import "./Expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button>change title</button>
    </Card>
  );
}
export default ExpenseItem;
