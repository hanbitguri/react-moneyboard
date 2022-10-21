import './ExpenseDate.css'
function ExpenseDate(props) {

    const date = props.date.toLocaleString();
    

  return (
    <div className='expense-date'>
    <div className='expense-date__date'>{date}</div>
   
   </div>
  )
}

export default ExpenseDate