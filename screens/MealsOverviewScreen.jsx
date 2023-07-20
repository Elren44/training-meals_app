import React, {useLayoutEffect} from "react";
import {StyleSheet} from "react-native";
import {CATEGORIES, MEALS} from "../assets/data/dummy-data";
import {MealsList} from "../components/MealsList/MealsList";

const MealsOverviewScreen = ({route, navigation}) => {
	const catId = route.params.categoryId;
	const displayedMeals = MEALS.filter((meal) => {
		return meal.categoryIds.indexOf(catId) >= 0;
	});

	const categoryTitle = CATEGORIES.find(
		(category) => category.id === catId
	).title;

	useLayoutEffect(() => {
		navigation.setOptions({
			title: categoryTitle,
		});
	}, [catId, navigation]);

	return <MealsList items={displayedMeals}/>
};

export default MealsOverviewScreen;
