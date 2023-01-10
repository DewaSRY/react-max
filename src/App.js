import Expense from "./components/Expenses/Expense";
import NewExpenses from "./components/NewExpens/NewExpenses";
import "./App.css";
const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const addExpenseHeandler = (expenses) => {
  console.log("In app.js");
  console.log(expenses);
};
function App() {
  return (
    <div>
      <NewExpenses onAddExpennse={addExpenseHeandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
