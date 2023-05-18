import React from 'react';
import MealForm from './MealForm';
import styles from './Styles/MealItem.module.css';
import { useCartState } from '../../../context/cart-context';

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    const cartCtx = useCartState();
    const addtoCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    };
    return (
        <>
            <li className={styles.meal}>
                <div>
                    <h3>{props.name}</h3>
                    <div className={styles.description}>{props.description}</div>
                    <div className={styles.price}>{price}</div>
                </div>
                <div>
                    <MealForm addtoCart={addtoCartHandler} id={props.id} />
                </div>

            </li>
        </>
    )
}

export default MealItem;