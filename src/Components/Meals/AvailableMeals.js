import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [isError, setError] = useState(null);

  useEffect(() => {
    const Firebase =
      "https://max-teach-reac-default-rtdb.firebaseio.com/meals.json";
    const fetchMeals = async () => {
      try {
        const response = await fetch(Firebase);
        const responseData = await response.json();
        const loadedMeals = [];
        for (const key in responseData) {
          loadedMeals.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
          });
        }
        setMeals(loadedMeals);
        setIsloading(false);
        console.log(loadedMeals);
        // setError("hallo");
      } catch (error) {
        setIsloading(false);
        console.log("somethings was wrong", error);
        setError(error);
      }
    };

    fetchMeals();
    // setIsloading(false);
  }, []);
  console.log(isLoading);
  console.log(isError);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  const anError = isError !== null;
  console.log(anError);
  console.log(isError);
  if (isLoading || anError) {
    return (
      <section className={classes.MealsLoading}>
        {isLoading ? (
          <p className={classes.MealsLoading}>hallo, it's loading</p>
        ) : (
          <p className={classes.MealsLoading}>somethings was wrong,isError</p>
        )}
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        {!isLoading ? (
          <ul>{mealsList}</ul>
        ) : (
          <p className={classes.MealsLoading}>hallo</p>
        )}
      </Card>
    </section>
  );
};

export default AvailableMeals;
