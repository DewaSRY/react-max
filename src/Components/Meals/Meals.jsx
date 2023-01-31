import { Fragment } from "react";
import AvailableMeals from "./AvalibleMeals";
import MealsSummary from "./MealsSummary";
const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />

      <AvailableMeals />
    </Fragment>
  );
};
export default Meals;
