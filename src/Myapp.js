import Expenses from "./components/expenses/Expenses";
import NewExpenses from "./components/newExpenses/newExpenses";
import { useState,useEffect } from "react";
import AddNewExpense from "./components/newExpenses/AddNewExpense";
import axios from "axios";
import { useCookies } from "react-cookie";
// const dumExpense = [
//   { id: 1, date: new Date(2021, 0, 1), name: "car insurance", amount: "100" },
//   { id: 2, date: new Date(2022, 3, 13), name: "school fees", amount: "10000" },
//   { id: 3, date: new Date(2022, 2, 27), name: "laptop", amount: "47000" },
//   { id: 4, date: new Date(2020, 4, 13), name: "PS3", amount: "17000" },
// ];
const MyApp = (props) => {
  const [cookies]=useCookies(['name'])
  const [expense, setExpense] = useState([]);
  useEffect(async()=>{
        await axios.post("https://expense-oykv.onrender.com/getExpense",{Name:cookies.name})
        .then((res)=>{
          setExpense(res.data.expenses.map((item)=>{
            return {...item,date:new Date(item.date)}
          }))
        })
  },[])
  const newDataHandler = (data) => {
    setExpense((prevExpense) => {
      return [data, ...prevExpense];
    });
    console.log(data)
    
    axios.post("https://expense-oykv.onrender.com/addExpense",{
         item:data,
         Name:cookies.name
    })
    .then((res)=>{
      console.log(res)
    })
  };
  const CancelHandler = () => {
    SetContent(<AddNewExpense onClickAdd={clickHandler} />);
  };
  const clickHandler = () => {
    SetContent(
      <NewExpenses newData={newDataHandler} onCancel={CancelHandler} />
    );
  };
  const [TopContent, SetContent] = useState(
    <AddNewExpense onClickAdd={clickHandler} />
  );
  return (
    <div>
      {TopContent}
      <Expenses items={expense} />
    </div>
  );
};
export default MyApp;
