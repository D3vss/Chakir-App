import React from "react";

import { TouchableOpacity, StyleSheet, Text } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { LinearGradient } from "expo-linear-gradient";

function Appwidget({ title, icon, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons
        name={icon}
        color={"white"}
        size={24}
        style={styles.icon}
      />
      <Text style={styles.text}> {title} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    margin: 15,
    width: "100%",
    height: 100,
    elevation: 10,
    backgroundColor: colors.blue,
  },

  text: {
    color: colors.white,
  },

  icon: {
    marginRight: 10,
  },
});

export default Appwidget;
