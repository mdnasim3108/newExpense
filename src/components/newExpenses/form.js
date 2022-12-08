import "./newExpensesForm.css";
import {useState} from "react"
function Form(props) {
    const [title,setTitle] = useState('')
    const TitlechangeHandler=(event)=>{
        setTitle(event.target.value);
    }
    const [amount,setAmount] = useState('')
    const AmountchangeHandler=(event)=>{
        setAmount(event.target.value);
    }
    const [date,setDate] = useState('')
    const DatechangeHandler=(event)=>{
        setDate(event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const data={
            id:Math.random(),
            name:title,
            date:new Date(date),
            amount:+amount
        }
        setTitle('')
        setDate('')
        setAmount('')
        props.onSaveData(data)
        props.onCancel()
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={TitlechangeHandler} value={title}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number"  min="0.01" step="0.01" onChange={AmountchangeHandler} value={amount}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"  min="2019-01-01" step="2022-12-31" onChange={DatechangeHandler} value={date}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button id="cancel" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add</button>
            </div>

        </form>
    )
}
export default Form;
