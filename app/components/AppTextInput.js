import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function AppTextInput({ icon, onFocus, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          color={colors.medium}
          name={icon}
          size={20}
          style={styles.icon}
        />
      )}
      <TextInput
        style={styles.textInput}
        onFocus={onFocus}
        {...otherProps}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.lightgrey,
    borderRadius: 15,
    flexDirection: "row",
    //width: "100%",
    padding: 15,
    alignItems: "center",

    marginRight: 2,
    marginLeft: 2,
    borderColor: colors.ButtonBlueGradient2,
    borderWidth: 1,
  },
  textInput: {
    fontSize: 18,
    width: "80%",
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
