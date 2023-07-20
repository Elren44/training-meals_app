import React, {useContext, useLayoutEffect} from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../assets/data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import {FavoritesContext} from "../store/context/favorites-context";
import {useDispatch, useSelector} from "react-redux";
import {addFavorite, removeFavorite} from "../store/redux/favorites";

const MealDetailScreen = ({ route, navigation }) => {
	const mealId = route.params.mealId;
	// const favoritesCtx = useContext(FavoritesContext)
	const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)
	const dispatch = useDispatch()

	const selectedMeal = MEALS.find(meal => meal.id === mealId)
	const mealIsFavorite = favoriteMealIds.includes(mealId)



	const changeFavoritePressHandler = () => {
		if (mealIsFavorite) {
			dispatch(removeFavorite({id: mealId}))
		} else {
			dispatch(addFavorite({id: mealId}))
		}
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<IconButton
						icon={mealIsFavorite ? "star" : "star-outline"}
						color={"white"}
						onPress={changeFavoritePressHandler}
					/>
				);
			},
		});
	}, [navigation, changeFavoritePressHandler]);

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
		// color: "black",
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
