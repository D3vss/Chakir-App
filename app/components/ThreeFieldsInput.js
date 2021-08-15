import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import AppPicker from "./AppPicker";

import colors from "../config/colors";

function ThreeFieldInput({ fieldOne, fieldTwo, ...otherProps }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={"NEV"}
        onChangeText={fieldOne}
        {...otherProps}
      ></TextInput>
      <AppPicker {...otherProps} />
      <TextInput
        style={styles.textInput}
        placeholder={"RE"}
        onChangeText={fieldTwo}
        {...otherProps}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    margin: 5,
    backgroundColor: colors.lightgrey,
    borderRadius: 15,
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    height: 60,
    width: 100,
  },
});

export default ThreeFieldInput;
