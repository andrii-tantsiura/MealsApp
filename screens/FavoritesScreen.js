import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

function FavoritesScreen() {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  return favoriteMeals.length > 0 ? (
    <MealsList items={favoriteMeals} />
  ) : (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>You have no favorite meals yet</Text>
    </View>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
