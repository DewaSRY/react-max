import ExpenseDate from "../Expenses-date/Expense.Date";
import Card from "../../UI/Card";
import classes from "./Expense.Item.module.css";

const ExpenseItem = ({ date, title, amount }) => {
  return (
    <li>
      <Card className={classes.expenseItem}>
        <ExpenseDate date={date} />
        <div className={classes.expenseItemDescription}>
          <h2>{title}</h2>
          <div className={classes.expenseItemPrice}>${amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
