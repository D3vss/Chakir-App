import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RechercheManuelleScreen from "../screens/RechercheManuelleScreen";
import ScanScreen from "../screens/ScanScreen";

const Stack = createStackNavigator();

const RechercheNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={HomeScreen} />
      <Stack.Screen name="RM" component={RechercheManuelleScreen} />
      <Stack.Screen name="Scan" component={ScanScreen} />
    </Stack.Navigator>
  );
};

export default RechercheNavigator;
