import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem"
import ExpenseFilter from "./ExpenseFilter"
import './Expenses.css'
import Card from '../UI/Card'

function Expenses(props) {
  
  const [userSelect,setUserSelect] = useState('2020');

  function saveFilterValue(enteredValue){
    setUserSelect(enteredValue)
    console.log(enteredValue);
  }

 
  return (
    <Card className="expenses">
      
    <ExpenseFilter onSaveFilterValue={saveFilterValue} selected={userSelect}></ExpenseFilter>
        {
          props.expenses.map(expense=><ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}/>)
        }
    </Card>
    
  )
}

export default Expenses;