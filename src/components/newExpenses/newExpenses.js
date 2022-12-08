import Form from "./form";
import "./newExpenses.css";
function NewExpenses(props){
        const NewExpenseData=(expense)=>{
                    const newExpenses={
                        ...expense
                    }
                    props.newData(newExpenses);
        }
    return (
        <div  className="new-expense">
            <Form onSaveData={NewExpenseData} onCancel={props.onCancel}/>
        </div>    
    );
}
export default NewExpenses;