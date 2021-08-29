import React from "react";

import { TouchableOpacity, StyleSheet, Text } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { LinearGradient } from "expo-linear-gradient";

function Appwidget({ title, icon, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <LinearGradient
        style={styles.button}
        colors={[colors.Bluegradient2nd, colors.Bluegradient2nd]}
      >
        <MaterialCommunityIcons
          name={icon}
          color={"white"}
          size={24}
          style={styles.icon}
        />
        <Text style={styles.text}> {title} </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    width: 200,
    height: 100,
  },

  text: {
    color: colors.white,
  },

  icon: {
    marginRight: 10,
  },
});

export default Appwidget;
