import React from 'react';
import { useCartState } from '../../context/cart-context';
import CartIcon from '../Cart/CartIcon';
import styles from './HeaderButton.module.css';

const HeaderButton = (props) => {
    const cartCtx = useCartState();
    const numberofCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0)
    return (
        <>
            <button className={styles.button} onClick={props.onClick}>
                <span className={styles.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={styles.badge}>{numberofCartItems}</span>
            </button>
        </>
    )
};

export default HeaderButton;
