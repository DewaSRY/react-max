import React, { useState } from "react";

import NewExpense from "../components/NewExpense/New-expenses/New.Expense";
import Expenses from "../components/Expenses/Expenses/Expenses";
import { DUMMY_EXPENSES } from "../assets/DUMMY_EXPENSE";

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
