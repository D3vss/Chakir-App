import React from "react";

import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import colors from "../config/colors";

function screen({ children }, ...otherProps) {
  return (
    <SafeAreaView style={styles.screen} {...otherProps}>
      <StatusBar backgroundColor="#002133" barStyle="light-content" />

      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default screen;
