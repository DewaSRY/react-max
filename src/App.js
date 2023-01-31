import { Fragment, useState } from "react";
import Header from "./Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const CartToggleHeandler = () => {
    setCartIsShow(!cartIsShow);
  };
  return (
    <Fragment>
      {cartIsShow && <Cart onCartHeandler={CartToggleHeandler} />}
      <Header onCartHeandler={CartToggleHeandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
