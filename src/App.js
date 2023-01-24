import { useState } from "react";
import Header from "./component/LAYOUT/Header";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";
import CartProvider from "./Store-contex/Cart-provider";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHeandler = () => {
    setCartIsShow(true);
  };
  const hidenCartHeandler = () => {
    setCartIsShow(false);
  };

  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hidenCartHeandler} />}
      <Header onShowCart={showCartHeandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
