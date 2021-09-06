import React from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function AppPickerField({ value, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.value}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: colors.lightblue,
    marginTop: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  value: {
    color: colors.medium,
  },
});
export default AppPickerField;
