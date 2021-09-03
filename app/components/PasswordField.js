import React, { useState } from "react";
import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function AppTextInput({ icon, ...otherProps }) {
  const [isVisibile, setIsVisible] = useState(true);
  const [eyeOpen, setEyeOpen] = useState("eye");

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        color={colors.medium}
        name={"lock"}
        size={20}
        style={styles.icon}
      />

      <TextInput
        style={styles.textInput}
        secureTextEntry={isVisibile}
        {...otherProps}
      ></TextInput>
      <TouchableOpacity
        style={styles.showhidepassword}
        onPress={() => {
          if (isVisibile) {
            setIsVisible(false);
            setEyeOpen("eye-off");
          } else {
            setIsVisible(true);
            setEyeOpen("eye");
          }
        }}
      >
        <MaterialCommunityIcons
          color={colors.medium}
          name={eyeOpen}
          size={20}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightgrey,
    borderRadius: 15,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    alignItems: "center",
    marginTop: 20,
  },
  textInput: {
    fontSize: 18,
    fontFamily: "Roboto",
    width: "80%",
  },
  icon: {
    marginRight: 10,
  },
  showhidepassword: {
    position: "absolute",
    right: 15,
  },
});

export default AppTextInput;
