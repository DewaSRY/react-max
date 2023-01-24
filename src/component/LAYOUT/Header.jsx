import react from "react";
import classes from "./Header.module.css";
import HeaderCardButton from "./Header-Cart";

const foodEmage =
  "https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true";

const Header = (props) => {
  return (
    <react.Fragment>
      <header className={classes.header}>
        <h1>Reaact Meals</h1>
        <HeaderCardButton onClick={props.onShowCart}>Cart</HeaderCardButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={foodEmage} alt=" A table full of food" />
      </div>
    </react.Fragment>
  );
};
export default Header;
