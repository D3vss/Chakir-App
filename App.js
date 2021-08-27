import React, { useState, useEffect, useRef } from "react";

//Screens
import HomeScreen from "./app/screens/HomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RechercheManuelleScreen from "./app/screens/RechercheManuelleScreen";
import AppPicker from "./app/components/AppPicker";
import Screen from "./app/components/Screen";

import AuthNavigator from "./app/navigation/AuthNavigator";

import Constants from "expo-constants";

import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  FlatList,
  Pressable,
} from "react-native";
import colors from "./app/config/colors";
import AppButton from "./app/components/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppPickerField from "./app/components/AppPickerField";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
