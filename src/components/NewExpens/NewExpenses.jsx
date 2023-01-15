import React ,{useState}from "react";

import ExpenseForm from "./Expansesform";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const[isEditing,setIsEditing]=useState(false)
  const svaeExpenseDataHendler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpennse(expenseData);
  };

  const StartEdditiong=()=>{
    setIsEditing(true)
  }
const stopEditing=()=>{
  setIsEditing(false)
}


  return (
    <div>
    <div className="new-expense  ">
    {isEditing && <ExpenseForm onSvaeExpenseData={svaeExpenseDataHendler} onChancel={stopEditing} /> }
    </div>
    <div className="new-expense ">
      {!isEditing && <button onClick={StartEdditiong}>Make New Expense</button> }

    </div>
    </div>
   
  );
};

    

export default NewExpenses;
