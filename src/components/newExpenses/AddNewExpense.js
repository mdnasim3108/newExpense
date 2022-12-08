import "./AddNewExpense.css";
function AddNew(props){
    return (
        <div className="addExpense">
            <button className="btn btn-success btn-lg" onClick={props.onClickAdd}>Add new Expense</button>
        </div>
    )
}
export default AddNew;