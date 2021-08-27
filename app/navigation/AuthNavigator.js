import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import HomeNavigator from "./HomeNavigator";
import LoadingScreen from "../screens/LoadingScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeNavigator} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
