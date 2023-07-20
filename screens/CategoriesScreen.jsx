import React from "react";
import { View, Text, FlatList } from "react-native";
import { CATEGORIES } from "../assets/data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
	const renderCategoryItem = (itemData) => {
		const pressHandler = () => {
			navigation.navigate("Overview", {
				categoryId: itemData.item.id,
			});
		};
		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onPress={pressHandler}
			/>
		);
	};

	return (
		<View>
			<FlatList
				data={CATEGORIES}
				keyExtractor={(item) => item.id}
				renderItem={renderCategoryItem}
				numColumns={2}
			/>
		</View>
	);
};

export default CategoriesScreen;
