import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function AppPickerField({ value, onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.value}>{value}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 30,
    backgroundColor: colors.lightgrey,
    marginTop: 5,
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
