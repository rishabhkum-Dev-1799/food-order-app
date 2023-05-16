import React from 'react';
import CartIcon from '../Cart/CartIcon';
import styles from './HeaderButton.module.css';

const HeaderButton = (props) => {
    return (
        <>
            <button className={styles.button} onClick={props.onClick}>
                <span className={styles.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={styles.badge}>3</span>
            </button>
        </>
    )
};

export default HeaderButton;
