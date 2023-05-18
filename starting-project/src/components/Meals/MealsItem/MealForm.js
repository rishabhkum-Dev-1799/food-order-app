import React, { useRef, useState } from 'react';
import Form from '../../UI/Card/Form';
import styles from './Styles/MealForm.module.css';
const MealForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
    const itemAddHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        //converting the enteredAmount to Number using + notations
        const numberEnteredAmount = Number(enteredAmount);
        if (numberEnteredAmount < 1 || numberEnteredAmount > 5) {
            setAmountIsValid(false);
            return;
        }
        props.addtoCart(numberEnteredAmount);
    };

    return (
        <>
            <form className={styles.form}>
                <Form label='Amount'
                    ref={amountInputRef}
                    input={
                        {
                            id: props.id,
                            type: 'number',
                            min: '1',
                            max: '5',
                            step: '1',
                            defaultValue: '1'
                        }
                    } />
                <button onClick={itemAddHandler}>+Add</button>
                {!amountIsValid && <p>Please Enter a Valid Amount from (1-5)</p>}
            </form>
        </>

    )
};

export default MealForm;