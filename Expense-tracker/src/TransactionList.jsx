import React from "react";
function TransactionList({transactions}){
 return(
    <div>
        <h2>Transaction List</h2>
        <ul>
            {transactions.map((t)=>(
                <li key={t.id}>
                    {t.type.toUpperCase()} - ₹{t.amount}
                    ({t.category}) on {new Date(t.date).toLocaleString()}
                </li>
            ))}
        </ul>
    </div>
 );
}
export default TransactionList