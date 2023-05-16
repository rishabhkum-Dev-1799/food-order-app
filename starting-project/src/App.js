import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layouts/Header';
import Meals from './components/Meals/Meals';
import { CartContextProvider } from './context/cart-context';
function App() {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => {
    setShowModal(true);
  }
  const hideModalHandler = () => {
    setShowModal(false);
  }
  return (
    <CartContextProvider>
      {showModal && <Cart onHide={hideModalHandler} />}
      <Header onShow={showModalHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
