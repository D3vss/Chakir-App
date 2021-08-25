import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Modal,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppButton from "../components/AppButton";
import Screen from "../components/Screen";

import colors from "../config/colors";
import Appwidget from "../components/Appwidget";

function HomeScreen({ navigation }) {
  const [userName, setUserName] = useState("Username");
  return (
    <Screen>
      {/* Header */}
      <LinearGradient
        colors={[colors.Bluegradient1st, colors.Bluegradient2nd]}
        style={styles.header}
      >
        <TouchableOpacity style={styles.settingsButton}>
          <MaterialCommunityIcons
            name={"dots-horizontal"}
            size={24}
            color={"white"}
          />
        </TouchableOpacity>
        <Image
          source={require("../assets/logo-white.png")}
          style={styles.logo}
        />
        <Text style={styles.welcome}>Bienvenue, {userName}</Text>
      </LinearGradient>

      {/* Body */}
      <View style={styles.body}>
        <Appwidget
          title={"Recherche Manuelle"}
          icon={"folder-search"}
          onPress={() => console.log("Recherche")}
        />
        <Appwidget
          title={"Faire un scan"}
          icon={"barcode-scan"}
          onPress={() => console.log("Scan")}
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
    backgroundColor: colors.lightgreen,
    flex: 1,
  },

  header: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
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
    bottom: 20,
  },
  settingsButton: {
    position: "absolute",
    right: 20,
    top: 10,
  },
});

export default HomeScreen;
