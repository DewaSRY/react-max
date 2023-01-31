import DUMMY_MEALS from "./dummy-meals";
import classes from "./AvailableMeals.module.css";
import Card from "../../Ui/Card";
import MealItem from "./Meaals-item/Meals-item";
const AvailableMeals = () => {
  const MealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      name={meal.name}
      description={meal.description}
      price={meal.price}
      id={meal.id}
      key={meal.id}
    />
  ));
  //   console.log(MealsList);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{MealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
