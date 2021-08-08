import React from "react";

import Constants from "expo-constants";
import { SafeAreaView, StyleSheet } from "react-native";

function screen({ children }, ...otherProps) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
});

export default screen;
