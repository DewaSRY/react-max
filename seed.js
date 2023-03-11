const fetchMeals = async () => {
  const response = await fetch(
    "https://max-teach-reac-default-rtdb.firebaseio.com/meals.json"
  );
  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  const reciveResponse = await response.json();
  const responseData = await reciveResponse["-NQA2rAM4X59JkRrg7SC"];
  const loadedMeals = [];
  for (const key in responseData) {
    loadedMeals.push({
      id: responseData[key].id,
      name: responseData[key].name,
      description: responseData[key].description,
      price: responseData[key].price,
    });
  }

  console.log(loadedMeals);
};
fetchMeals();
