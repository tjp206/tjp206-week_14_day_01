import React, {useState} from 'react';

const PiggyBank = ({title, name, amount}) => {

    const [total, setTotal] = useState(0);      // returns initial state and function = takes one argument which is initial state

    const deposit = () => {
        setTotal(total + amount)
    }

    const withdraw = () => {
        if(total > 0) {
            setTotal(total - amount)
         }
    }

    return(
        <>
            <h1>{title}</h1>
            <p>Total: £{total}</p>
            <button onClick={() => {deposit()}}>Deposit</button>
            <button onClick={() => {withdraw()}}>Withdraw</button>
        </>
    )
}

export default PiggyBank;