import './ExpenseList.css'
import React from 'react'
import ExpenseItem from './ExpenseItem';



function ExpenseList(props) {
    if(props.expenses.length===0){
        return <h2 className='expenses-list__fallback'>
            아이템이 없습니다.
        </h2>
    }
  return (
    <ul className='expense-list'>
        {
            props.expenses.map(expense=>
                <ExpenseItem
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                />)
        }
    </ul>
  )
}

export default ExpenseList