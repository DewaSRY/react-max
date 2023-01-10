import ExpenseItem from "./Expenseitem";
import Card from "../UI/card";
import ExpensesFilter from "./ExpepensesFilter";
import "./Expense.css";

const expenseAllItem = (props) => {
  return props.map((expen) => (
    <div>
      <ExpenseItem
        title={expen.title}
        amount={expen.amount}
        date={expen.date}
      />
    </div>
  ));
};
const onFilterDate = (filterDate) => {
  console.log(filterDate);
};

function Expense(props) {
  return (
    <Card className="expenses">
      <ExpensesFilter filetDate={onFilterDate} />
      {expenseAllItem(props.items)}
    </Card>
  );
}
export default Expense;
