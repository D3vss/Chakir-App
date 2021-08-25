import React, { useState, useEffect, useRef } from "react";

//Screens
import HomeScreen from "./app/screens/HomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RechercheManuelleScreen from "./app/screens/RechercheManuelleScreen";
import AppPicker from "./app/components/AppPicker";
import Screen from "./app/components/Screen";
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

const data = [
  {
    id: 1,
    label: "أ",
  },
  {
    id: 2,
    label: "ب",
  },
  {
    id: 3,
    label: "ه",
  },
  {
    id: 4,
    label: "د",
  },
  {
    id: 5,
    label: "و",
  },
];

export default function App() {
  const transAnim = useRef(new Animated.Value(0)).current;

  const translateLeft = () => {
    Animated.timing(transAnim, {
      toValue: -Dimensions.get("window").width / 2,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const translateRight = () => {
    Animated.timing(transAnim, {
      toValue: Dimensions.get("window").width / 2,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return <HomeScreen />;
}

const styles = StyleSheet.create({
  Button: {
    alignSelf: "flex-start",
    backgroundColor: "red",
  },
  container: {
    flex: 1,
    backgroundColor: colors.lightgrey,
    justifyContent: "center",
    alignItems: "flex-end",
  },

  slider: {
    backgroundColor: "red",
    flex: 1,
    position: "absolute",
    top: Constants.statusBarHeight,
    bottom: 0,
    left: -Dimensions.get("window").width / 2,
    right: 0,
    width: Dimensions.get("window").width / 2,
    alignSelf: "flex-end",
    elevation: 10,
  },
});
