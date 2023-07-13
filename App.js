import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				drawerContentStyle: {
					backgroundColor: "#d6cc9d",
				},
				drawerInactiveTintColor: "#333333",
				drawerActiveTintColor: "#d6cc9d",
				drawerActiveBackgroundColor: "#333333",
				headerStyle: {
					backgroundColor: "#333333",
					// backgroundColor: "#351401",
				},
				headerTintColor: "white",
				sceneContainerStyle: {
					backgroundColor: "#d6cc9d",
					// backgroundColor: "#6d523f",
				},
			}}
		>
			<Drawer.Screen
				name="Categories"
				component={CategoriesScreen}
				options={{
					title: "Все категории",
					drawerIcon: ({ color, size }) => (
						<Ionicons name="list" size={size} color={color} />
					),
				}}
			/>
			<Drawer.Screen
				name="Favorites"
				component={FavoritesScreen}
				options={{
					title: "Подробности",
					drawerIcon: ({ color, size }) => (
						<Ionicons name="star" size={size} color={color} />
					),
				}}
			/>
		</Drawer.Navigator>
	);
};

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: {
							backgroundColor: "#333333",
							// backgroundColor: "#351401",
						},
						headerTintColor: "white",
						contentStyle: {
							backgroundColor: "#d6cc9d",
							// backgroundColor: "#6d523f",
						},
					}}
				>
					<Stack.Screen
						name="DrawerStack"
						component={DrawerStack}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen name="Overview" component={MealsOverviewScreen} />
					<Stack.Screen name="MealDetail" component={MealDetailScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
