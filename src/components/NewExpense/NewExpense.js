import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

function NewExpense(props) {
    
    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData);
        
    }
    const [toggle,setToggle]= useState(false)
    function toggling(trueOrFalse){
      if(trueOrFalse===true){setToggle(true)}
      else if(trueOrFalse===false){setToggle(false)}
      
    }
    let content = <button onClick={()=>{toggling(true)}}>Add new Expense</button>
    if(toggle===true){
    content = <ExpenseForm saveExpenseData={saveExpenseDataHandler} toggling={toggling} ></ExpenseForm>
    }  

  return (
    <div className='new-expense'>
        {
          content
        }
    </div>
  )
}

export default NewExpense