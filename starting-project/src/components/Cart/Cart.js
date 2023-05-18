import React from 'react';
import Modal from '../UI/Card/Modal';
import CartItem from './CartItem';
import styles from './Styles/Cart.module.css';
import { useCartState } from '../../context/cart-context';


const Cart = (props) => {
    const cartCtx = useCartState();
    const itemRemoveHandler = (id) => {

    }
    const itemAddHandler = (item) => {

    };
    const cartItems = cartCtx.items.map((item, i) => <CartItem name={item.name} price={item.price} amount={item.amount} onRemove={itemRemoveHandler.bind(null, item.id)} onAdd={itemAddHandler.bind(null, item)} />)
    const hasItems = cartItems.length > 0;
    const cartTotalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    return (
        <>
            <Modal onClose={props.onHide} >
                <ul className={styles['cart-items']}>
                    {cartItems}
                </ul>
                <div className={styles.total}>
                    <span>Total Amount</span>
                    <span>{cartTotalAmount}</span>
                </div>
                <div className={styles.actions}>
                    <button className={styles['button-alt']} onClick={props.onHide}>Close</button>
                    {hasItems && <button className={styles.button}>Order</button>}
                </div>
            </Modal>
        </>
    )
}

export default Cart;