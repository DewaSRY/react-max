import { Fragment } from "react";
import HeaderCartButton from "./Header-Cart-button";
import classes from "./Header.module.css";
const imageUrl =
  "https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true";

const Header = ({ onCartHeandler }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={onCartHeandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={imageUrl} alt="imag" />
      </div>
    </Fragment>
  );
};

export default Header;
