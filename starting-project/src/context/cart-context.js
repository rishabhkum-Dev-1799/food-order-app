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
        debugger;
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        const existingItemsIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingItem = state.items[existingItemsIndex];
        let updatedItems;
        if (existingItem) {
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingItemsIndex] = updatedItem;
        }
        else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    else if (action.type === 'REMOVE') {
        const [removedItem] = state.items.filter(item => item.id === action.id);
        const updatedTotalAmount = state.totalAmount - removedItem.price;
        let updatedItems;
        if (removedItem.amount === 1) {
            updatedItems = state.items.filter(item => !(item.id === removedItem.id));
        }
        else {
            const updateItem = { ...removedItem, amount: removedItem.amount - 1 };
            updatedItems = state.items.map(item => {
                if (item.id === updateItem.id) {
                    return updateItem;
                }
                return item
            });
        }
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
