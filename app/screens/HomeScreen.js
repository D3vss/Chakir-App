import React, { useState } from "react";

import { View, Text, StyleSheet, Image, Button } from "react-native";

import AppButton from "../components/AppButton";
import Screen from "../components/Screen";

import colors from "../config/colors";

function HomeScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.body}>
        <AppButton title={"Recherche Manuelle"} />
        <AppButton title={"Faire un scan"} />
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
