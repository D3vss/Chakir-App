import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";

function LoadingScreen(props) {
  return (
    <Screen>
      <LinearGradient
        colors={[colors.ButtonBlueGradient2, colors.ButtonBlueGradient1]}
        style={styles.loading}
      >
        <Image
          source={require("../assets/logo-white.png")}
          style={styles.logo}
        />
        <Image source={require("../assets/loader4.gif")} style={styles.logo} />
      </LinearGradient>
    </Screen>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginBottom: 20,
  },
});
export default LoadingScreen;
