import { useEffect } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem.js";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  useEffect(() => {
    fetch();
  }, []);

  const MEALS = fetch(
    "https://react-http-4b88b-default-rtdb.europe-west1.firebasedatabase.app/meals"
  );
  console.log(MEALS);
  const mealsList = MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
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

export default AvailableMeals;
