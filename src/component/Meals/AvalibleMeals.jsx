//
import classes from "./AvailableMeals.module.css";
import DUMMY_MEALS from "./dummy-meals";
import MealItem from "./Meals-item/MealItem";
import Card from "../UI/Card";
const AvalibleMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvalibleMeals;
