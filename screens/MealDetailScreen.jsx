import React, { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../assets/data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

const MealDetailScreen = ({ route, navigation }) => {
	const mealId = route.params.mealId;

	const headerButtonPressHandler = () => {
		console.log("asdasd");
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<IconButton
						icon="star"
						color={"white"}
						onPress={headerButtonPressHandler}
					/>
				);
			},
		});
	}, [navigation, headerButtonPressHandler]);

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	return (
		<ScrollView style={styles.rootContainer}>
			<Image style={styles.image} source={selectedMeal.imageUrl} />
			<Text style={styles.title}>{selectedMeal.title}</Text>
			<MealDetails
				complexity={selectedMeal.complexity}
				duration={selectedMeal.duration}
				affordability={selectedMeal.affordability}
				textStyle={styles.detailText}
			/>
			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Subtitle>Ингредиенты</Subtitle>
					<List data={selectedMeal.ingredients} />
					<Subtitle>Шаги</Subtitle>
					<List data={selectedMeal.steps} />
				</View>
			</View>
		</ScrollView>
	);
};

export default MealDetailScreen;

const styles = StyleSheet.create({
	rootContainer: {
		marginBottom: 32,
		flex: 1,
	},
	image: {
		width: "100%",
		height: 350,
	},
	title: {
		fontWeight: "bold",
		fontSize: 24,
		margin: 8,
		textAlign: "center",
		color: "#333",
	},
	detailText: {
		color: "black",
		color: "#333",
	},
	listOuterContainer: {
		alignItems: "center",
	},
	listContainer: {
		width: "80%",
		// height: 350,
	},
});
