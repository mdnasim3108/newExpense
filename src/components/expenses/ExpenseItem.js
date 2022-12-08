import "./expenseItem.css"
import Card from "../UI/Card"
import ExpenseDate from "./ExpenseDate";
import React from "react";
function ExpenseItem(props) {
    return (
        <Card className="expense-item">
            <ExpenseDate date= {props.date} />
            <div className="expense-item__description">
                <h2>{props.name}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    )
}
export default ExpenseItem;