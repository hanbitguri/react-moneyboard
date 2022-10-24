import React, { useState } from 'react';
import ExpenseList from "./ExpenseList"
import ExpenseFilter from "./ExpenseFilter"
import './Expenses.css'
import Card from '../UI/Card'

function Expenses(props) {
  
  const [userSelect,setUserSelect] = useState('2020');
  const filteredExpense = props.expenses.filter((expense)=>{
    return expense.date.getFullYear().toString() === userSelect
  })
  
  function saveFilterValue(enteredValue){
    setUserSelect(enteredValue)
  }
  
  return (
    <Card className="expenses">   
    <ExpenseFilter onSaveFilterValue={saveFilterValue} selected={userSelect}></ExpenseFilter>
    <ExpenseList expenses={filteredExpense}></ExpenseList>
    </Card>
    
  )
}

export default Expenses;