import React, { useReducer, useContext, createContext } from 'react';


const cartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { }
});

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
}

export const CartContextProvider = (props) => {
    const [cartData, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item })
    };
    const removeItemHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };

    const cartState = {
        items: cartData.items,
        totalAmount: cartData.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return (
        <>
            <cartContext.Provider value={cartState}>
                {props.children}
            </cartContext.Provider>
        </>
    )
};

export const useCartState = () => useContext(cartContext);
