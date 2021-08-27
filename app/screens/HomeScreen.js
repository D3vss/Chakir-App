import React, { useState, useRef } from "react";

import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";

//Custom Comps
import AppPickerField from "../components/AppPickerField";
import Appwidget from "../components/Appwidget";
import Screen from "../components/Screen";
//Configs
import colors from "../config/colors";

const data = [
  {
    id: 1,
    label: "Settings",
  },
  {
    id: 2,
    label: "About Us",
  },
  {
    id: 3,
    label: "Log Out",
  },
];

//Render Function
function HomeScreen({ navigation, route }) {
  // Functions to handle the settings menu animations

  //Define the changing value
  const transAnim = useRef(new Animated.Value(0)).current;

  //hide
  const translateLeft = () => {
    Animated.timing(transAnim, {
      toValue: -Dimensions.get("window").width / 2,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  //Show
  const translateRight = () => {
    Animated.timing(transAnim, {
      toValue: Dimensions.get("window").width / 2,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  //End

  return (
    <Screen>
      {/* Header */}
      <LinearGradient
        colors={[colors.Bluegradient1st, colors.Bluegradient2nd]}
        style={styles.header}
      >
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={translateRight}
        >
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
        <Text style={styles.welcome}>
          Bienvenue, Simo{/*route.params.username*/}
        </Text>
      </LinearGradient>

      {/* Animated menu settings */}
      <Animated.View
        style={[
          styles.slider,
          {
            transform: [{ translateX: transAnim }],
          },
        ]}
      >
        <Pressable onPress={translateLeft} style={styles.closeMenuButton}>
          <View style={styles.closeMenuView}>
            <MaterialCommunityIcons
              name={"arrow-left-circle"}
              size={32}
              color={colors.medium}
            />
            <Text style={styles.closeMenuText}>Home</Text>
          </View>
        </Pressable>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <AppPickerField value={item.label} onPress={() => {}} />
          )}
        />
      </Animated.View>
      {/*End of Animated menu settings */}
      {/*End Header*/}

      {/* Body */}
      <View style={styles.body}>
        <Appwidget
          title={"Recherche Manuelle"}
          icon={"folder-search"}
          onPress={() => navigation.navigate("RM")}
        />
        <Appwidget
          title={"Faire un scan"}
          icon={"barcode-scan"}
          onPress={() => navigation.navigate("Scan")}
          style={styles.AppPickerField}
        />
      </View>
      {/*End Body*/}
    </Screen>
  );
}

const styles = StyleSheet.create({
  body: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 40,
    paddingRight: 40,
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

  welcome: {
    position: "absolute",
    fontSize: 14,
    color: colors.white,
    bottom: 20,
  },
  settingsButton: {
    position: "absolute",
    left: 20,
    top: 10,
  },

  slider: {
    opacity: 0.9,
    backgroundColor: colors.lightgrey,
    flex: 1,
    position: "absolute",
    top: Constants.statusBarHeight,
    bottom: 0,
    left: -Dimensions.get("window").width / 2,
    right: 0,
    width: Dimensions.get("window").width / 2,
    alignSelf: "flex-end",
    elevation: 20,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  closeMenuButton: {
    margin: 10,
    alignSelf: "flex-start",
  },
  closeMenuView: {
    flexDirection: "row",
    alignItems: "center",
  },
  closeMenuText: {
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default HomeScreen;
