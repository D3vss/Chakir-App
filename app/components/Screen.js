import React from "react";

import { SafeAreaView, StyleSheet, StatusBar, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

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
    height: height,
    width: width,
  },
});

export default screen;
