import React, { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../assets/data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route, navigation }) => {
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

	const renderMealItem = (itemData) => {
		const item = itemData.item;
		const mealItemProps = {
			id: item.id,
			title: item.title,
			imageUrl: item.imageUrl,
			duration: item.duration,
			complexity: item.complexity,
			affordability: item.affordability,
		};
		return (
			<MealItem {...mealItemProps} />
			// <MealItem title={itemdata.item.title} imageUrl={im} />
		);
	};
	return (
		<View style={styles.container}>
			<FlatList
				data={displayedMeals}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});
