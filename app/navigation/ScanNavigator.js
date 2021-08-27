import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import ScanScreen from "../screens/ScanScreen";
import SearchEndScreen from "../screens/SearchEndScreen";

const Stack = createStackNavigator();

const ScanNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RM" component={ScanScreen} />
      <Stack.Screen name="SearchEnd" component={SearchEndScreen} />
    </Stack.Navigator>
  );
};

export default ScanNavigator;
