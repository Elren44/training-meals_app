import React from "react";
import { View, Text, StyleSheet } from "react-native";

const List = ({ data }) => {
	return data.map((dataPoint) => (
		<View key={dataPoint} style={styles.listItem}>
			<Text style={styles.text}>{dataPoint}</Text>
		</View>
	));
};

export default List;

const styles = StyleSheet.create({
	text: {
		color: "white",
		textAlign: "center",
	},
	listItem: {
		borderRadius: 6,
		paddingHorizontal: 8,
		paddingVertical: 4,
		marginVertical: 4,
		marginHorizontal: 12,
		backgroundColor: "#5a5959",
	},
});
