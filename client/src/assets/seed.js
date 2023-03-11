import { DUMMY_MEALS } from "./DUMY_MEALS";
const submitOrderHandler = async () => {
  const response = await fetch(
    "https://max-teach-reac-default-rtdb.firebaseio.com/meals.json",
    {
      method: "POST",
      body: JSON.stringify(DUMMY_MEALS),
    }
  );
  if (response.ok) {
    console.log("done");
  }
};

submitOrderHandler();
