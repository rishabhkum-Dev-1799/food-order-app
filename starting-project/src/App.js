import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layouts/Header';
import Meals from './components/Meals/Meals';
function App() {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => {
    setShowModal(true);
  }
  const hideModalHandler = () => {
    setShowModal(false);
  }
  return (
    <>
      {showModal && <Cart onHide={hideModalHandler} />}
      <Header onShow={showModalHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
