import ReactDOM from "react-dom/client";
import CartProvider from "./store-contex/Cart-context";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
