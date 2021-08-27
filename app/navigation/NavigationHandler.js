import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import RechercheManuelleScreen from "../screens/RechercheManuelleScreen";
import ScanScreen from "../screens/ScanScreen";
import SearchEndScreen from "../screens/SearchEndScreen";

const Stack = createStackNavigator();

function NavigationHandler(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="RechercheManuelle"
        component={RechercheManuelleScreen}
      />
      <Stack.Screen name="ScanScreen" component={ScanScreen} />
      <Stack.Screen name="SearchEnd" component={SearchEndScreen} />
    </Stack.Navigator>
  );
}

export default NavigationHandler;
