import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Subtitle = ({ children }) => {
	return (
		<View style={styles.subtitleContainer}>
			<Text style={styles.subtitle}>{children}</Text>
		</View>
	);
};

export default Subtitle;

const styles = StyleSheet.create({
	subtitleContainer: {
		marginVertical: 4,
		marginHorizontal: 12,
		padding: 6,
		borderBottomColor: "#5a5959",
		borderBottomWidth: 2,
	},
	subtitle: {
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
		color: "#5a5959",
	},
});
