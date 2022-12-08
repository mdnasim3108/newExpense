import Card from "../UI/Card"
import "./Expenses.css"
import ExpenseFilter from "../expenseFilter/ExpenseFilter"
import { useState } from "react"
import ExpenseList from "./expensesList"
import ExpensesChart from "./expensesChart"
function Expenses(props) {
  var allItems=props.items;
  const [year,setYear]=useState('2020')
  const GetYear=(year)=>{
        setYear(year)
  }
  var newitems=allItems.filter((array)=>{
    return array.date.getFullYear().toString() === year;
  })
  return (
    
    <div>
      <Card className="expenses">
        <ExpenseFilter initial={year} getYear={GetYear}/>
        <ExpensesChart expenses={newitems}/>
        <ExpenseList items={newitems}/>
      </Card>
    </div>

  );
}
export default Expenses;
