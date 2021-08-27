import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import RechercheNavigator from "./RechercheNavigator";
import ScanNavigator from "./ScanNavigator";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="RechercheNav" component={RechercheNavigator} />
      <Stack.Screen name="ScanNav" component={ScanNavigator} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
