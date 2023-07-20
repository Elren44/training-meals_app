import React, {useContext} from "react";
import {View, Text, StyleSheet} from "react-native";
import {MealsList} from "../components/MealsList/MealsList";
import {FavoritesContext} from "../store/context/favorites-context";
import {MEALS} from "../assets/data/dummy-data";
import {useSelector} from "react-redux";

const FavoritesScreen = () => {
	// const favoriteMealsCtx = useContext(FavoritesContext)
	const favoriteMealIds = useSelector(state => state.favoriteMeals.ids)

	const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id))

	if (favoriteMeals.length === 0 ) {
		return (
			<View style={styles.rootContainer}>
				<Text style={styles.text}>Нет любимых рецептов</Text>
			</View>
		)
	}

	return (
		<MealsList items={favoriteMeals}/>
	);
};

export default FavoritesScreen;

const styles = StyleSheet.create({
rootContainer: {
	flex: 1,
	justifyContent: "center",
	alignItems: "center"
},
	text: {
	fontSize: 18,
		fontWeight: "bold",
		color: "#333"
	}
})
