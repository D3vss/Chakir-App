import React from "react";

import Constants from "expo-constants";
import { SafeAreaView, StyleSheet } from "react-native";

function screen({ children }, ...otherProps) {
  return (
    <SafeAreaView style={styles.screen} {...otherProps}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default screen;
