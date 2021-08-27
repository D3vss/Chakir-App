import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import RechercheManuelleScreen from "../screens/RechercheManuelleScreen";
import SearchEndScreen from "../screens/SearchEndScreen";

const Stack = createStackNavigator();

const RechercheNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="RechercheManScreen"
        component={RechercheManuelleScreen}
      />
      <Stack.Screen name="SearchEnd" component={SearchEndScreen} />
    </Stack.Navigator>
  );
};

export default RechercheNavigator;
