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
import HomeNavigator from "./app/navigation/HomeNavigator";
import SearchEndScreen from "./app/screens/SearchEndScreen";
import RechercheNavigator from "./app/navigation/RechercheNavigator";
import LoadingScreen from "./app/screens/LoadingScreen";
import ScanScreen from "./app/screens/ScanScreen";
import NavigationHandler from "./app/navigation/NavigationHandler";

//* Import to keep the User Logged In
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CredentialsContext } from "./app/components/CredentialsContext";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [storedCredentials, setStoredCredentials] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  const checkLoginCredentials = async () => {
    try {
      const response = await AsyncStorage.getItem("ChakirUser");
      if (response !== null) {
        console.log(response);
        setStoredCredentials(JSON.parse(response));
      } else {
        setStoredCredentials(null);
      }
    } catch (err) {}
  };
  return isLoading ? (
    <>
      <AppLoading
        startAsync={checkLoginCredentials}
        onFinish={() => {}}
        onError={console.warn}
      />
      <LoadingScreen />
    </>
  ) : (
    <CredentialsContext.Provider
      value={{ storedCredentials, setStoredCredentials }}
    >
      <NavigationContainer>
        <NavigationHandler />
      </NavigationContainer>
    </CredentialsContext.Provider>
  );
}
