import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import colors from "../config/colors";

function AppHeader({ headerText }) {
  return (
    <View style={styles.header}>
      <Image style={styles.wave} source={require("../assets/wave-main.png")} />
      <Image style={styles.logo} source={require("../assets/logo-white.png")} />
      <Text style={styles.welcome}>{headerText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
export default AppHeader;
