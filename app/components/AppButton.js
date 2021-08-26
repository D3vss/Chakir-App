import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}> {title} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.Bluegradient2nd,
    borderRadius: 25,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    width: "100%",
  },

  text: {
    color: colors.white,
  },
});

export default AppButton;
