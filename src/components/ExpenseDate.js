import './ExpenseDate.css'
function ExpenseDate(props){
    const mont= props.date.toLocaleString('en-us',{month:'long'});
    const day= props.date.toLocaleString('en-us',{day:'2-digit'});
    const year= props.date.getFullYear();
    return(
        <div className='expense-date'>
            <div className='expense-date_mont'>{mont}</div>
            <div className='expense-date_day'>{day}</div>
            <div className='expense-date_yeaar'>{year}</div>
        </div>
    )
}
export default ExpenseDate;