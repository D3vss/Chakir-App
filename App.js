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
  ScrollView,
  Text,
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
  //TODO: uncomment when the testing bellow is finished (check next TODO:)

  // return isLoading ? (
  //   <>
  //     <AppLoading
  //       startAsync={checkLoginCredentials}
  //       onFinish={() => {}}
  //       onError={console.warn}
  //     />
  //     <LoadingScreen />
  //   </>
  // ) : (
  //   <CredentialsContext.Provider
  //     value={{ storedCredentials, setStoredCredentials }}
  //   >
  //     <NavigationContainer>
  //       <NavigationHandler />
  //     </NavigationContainer>
  //   </CredentialsContext.Provider>
  // );

  //TODO: delete the code below when testing is finished -- Testing the ScrollView feature

  return (
    <ScrollView horizontal={true}>
      <View></View>
      <Screen>
        <View style={styles.page1}>
          <View style={styles.card1}>
            <Text>Page 1</Text>
          </View>
        </View>
      </Screen>
      <Screen>
        <View style={styles.page1}>
          <View style={styles.card1}>
            <Text>Page 2</Text>
          </View>
        </View>
      </Screen>
      <Screen>
        <View style={styles.page1}>
          <View style={styles.card1}>
            <Text>Page 3</Text>
          </View>
        </View>
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  page1: {
    flex: 1,
    width: Dimensions.get("window").width,
    padding: 20,
  },
  card1: {
    backgroundColor: "grey",
    flex: 1,
    borderRadius: 15,
    padding: 15,
  },
  page2: {
    backgroundColor: "blue",
    flex: 1,
  },
  page3: {
    backgroundColor: "green",
    flex: 1,
  },
});
