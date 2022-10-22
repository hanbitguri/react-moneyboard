import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {

    const [enterTitle,setEnterTitle] = useState('');
    const [enterNumber,setEnterNumber] = useState('');
    const [enterDate,setEnterDate] = useState('');

    // const [userInput,setUserInput] = useState({
    //     enterTitle:'',
    //     enterNumber:'',
    //     enterDate:''
    // })

 function titleChangeHandler(e){
    setEnterTitle(e.target.value)
    // setUserInput({
    //     ...userInput,
    //     enterTitle:e.target.value,
    // })
    // setUserInput((prevState)=>{
    //     return {...prevState , enterTitle: e.target.value }
    // })
 }
 function amountChangeHandler(e){
    setEnterNumber(e.target.value)
    // setUserInput({
    //     ...userInput,
    //     enterNumber:e.target.value,
    // })
 }
 function dateChangeHandler(e){
    setEnterDate(e.target.value)
    // setUserInput({
    //     ...userInput,
    //     enterDate:e.target.value,
    // });
 }

 function submitHandler(e){
    e.preventDefault();
    const expenseData = {
        title : enterTitle,
        amount : enterNumber,
        date : new Date(enterDate)
    }
    props.saveExpenseData(expenseData);
    setEnterTitle('');
    setEnterNumber('');
    setEnterDate('');
 }
  return (
    <form action="" onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enterTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enterNumber} min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date"value={enterDate} min="2022-10-22" max="2022-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm