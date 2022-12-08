import "./expensesList.css"
import ExpenseItem from "./ExpenseItem"
function ExpensesList(props){
    var TotalItems=props.items;
    if(TotalItems.length === 0){
        return (
            <h2 className="expenses-list__fallback">No Items found</h2>
        )
    }
    return(
           <ul className="expenses-list">
            {TotalItems.map(array=>{
                return(
                    <ExpenseItem key={array.id} date={array.date} name={array.name} amount={array.amount}/>
                )
            }
            )}
           </ul>
    )

}
export default ExpensesList;