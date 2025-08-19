import React,{useState} from "react"
import Header from './Header.jsx'
import Balance from './Balance.jsx'
import Transaction from './Transaction.jsx'
import TransactionList from "./assets/TransactionList.jsx"
function App() {
  const[transactions,setTransactions]=useState([]);

  const addTransaction=(transaction)=> {
    setTransactions([...transactions,transaction]);
  };

  const income= transactions
         .filter( (t)=> t.type === "income")
         .reduce((acc,t)=> acc + t.amount,0);

  const expense= transactions
         .filter((t)=> t.type === "expense")
         .reduce((acc,t)=> acc + t.amount,0);     
         
         
  const balance = income - expense ;       
  

  return (
    <>
     <Header/>
     <Balance  balance={balance} income={income} expense={expense}/>
     <Transaction addTransaction={addTransaction}/>
     <TransactionList transactions={transactions}/>
    </>
  );
}

export default App
