import React from 'react';
import Modal from '../UI/Card/Modal';
import styles from './Styles/Cart.module.css';

const PLACEHOLDER_CARTITEM = [
    { id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }
];
const Cart = () => {
    const cartItems = PLACEHOLDER_CARTITEM.map((item, i) => <li key={i}>{item.name}</li>)
    return (
        <>
            <Modal>
                <ul className={styles['cart-items']}>
                    {cartItems}
                </ul>
                <div className={styles.total}>
                    <span>Total Amount</span>
                    <span>$35.6</span>
                </div>
                <div className={styles.actions}>
                    <button className={styles['button-alt']}>Close</button>
                    <button className={styles.button}>Order</button>
                </div>
            </Modal>
        </>
    )
}

export default Cart;