import React from "react";
import { useState } from "react";

import { View, Text, StyleSheet, Image } from "react-native";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppHeader from "../components/AppHeader";
import colors from "../config/colors";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  const [username, setUsername] = useState("Username");

  return (
    <Screen>
      <View style={styles.body}>
        <AppButton
          title={"Recherche Manuelle"}
          onPress={() => navigation.navigate("Recherche Manuelle")}
        />
        <AppButton
          title={"Faire un scan"}
          onPress={() => navigation.navigate("Scan")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  body: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 40,
    paddingRight: 40,
  },

  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 50,
    position: "absolute",
    top: 40,
  },

  wave: {
    height: 250,
    width: 700,
    //  position: "absolute",
  },
  welcome: {
    position: "absolute",
    fontSize: 14,
    color: colors.white,
  },
});

export default HomeScreen;
