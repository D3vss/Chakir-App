import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RechercheManuelleScreen from "../screens/RechercheManuelleScreen";
import ScanScreen from "../screens/ScanScreen";
import SearchEndScreen from "../screens/SearchEndScreen";

const Stack = createStackNavigator();

const RechercheNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RM" component={RechercheManuelleScreen} />
      <Stack.Screen name="SearchEnd" component={SearchEndScreen} />
    </Stack.Navigator>
  );
};

export default RechercheNavigator;
