import React, { useContext, createContext } from 'react';


const cartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { }
});

export const CartContextProvider = (props) => {
    const addItemHandler = () => {

    };
    const removeItemHandler = () => {

    };

    const cartState = {
        items: [],
        totalAmount: 0,
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
