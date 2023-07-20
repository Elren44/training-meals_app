import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	Pressable,
	Image,
	Platform,
} from "react-native";
import MealDetails from "../MealDetails";

const MealItem = ({
	id,
	title,
	imageUrl,
	duration,
	complexity,
	affordability,
}) => {
	const { navigate } = useNavigation();

	const selectMealItemHandler = () => {
		navigate("MealDetail", {
			mealId: id,
		});
	};

	return (
		<View style={styles.mealItem}>
			<Pressable
				onPress={selectMealItemHandler}
				android_ripple={{ color: "#ccc" }}
				style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
			>
				<View style={styles.innerContainer}>
					<View>
						<Image style={styles.image} source={imageUrl} />
						<Text style={styles.title}>{title}</Text>
					</View>
					<MealDetails
						complexity={complexity}
						duration={duration}
						affordability={affordability}
					/>
				</View>
			</Pressable>
		</View>
	);
};

export default MealItem;

const styles = StyleSheet.create({
	mealItem: {
		margin: 16,
		borderRadius: 8,
		overflow: Platform.select({ android: "hidden", ios: "visible" }),
		backgroundColor: "white",
		elevation: 4,
		shadowColor: "black",
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
	},
	innerContainer: {
		borderRadius: 8,
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: 200,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
		margin: 8,
		color: "#333",
	},

	buttonPressed: {
		opacity: 0.5,
	},
});
