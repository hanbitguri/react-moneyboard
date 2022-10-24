import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem"
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
  let expenseContent = <p className='no-item'>아이템이 없습니다.</p>;
  if(filteredExpense.length>0){
    expenseContent =  
    filteredExpense.map(expense=>
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />)
  }
 
  return (
    <Card className="expenses">
      
    <ExpenseFilter onSaveFilterValue={saveFilterValue} selected={userSelect}></ExpenseFilter>
       {
        expenseContent
       } 
    </Card>
    
  )
}

export default Expenses;