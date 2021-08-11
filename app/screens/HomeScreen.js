import React from "react";
import { useState } from "react";

import { View, Text, StyleSheet, Image } from "react-native";

import * as Yup from "yup";
import Constants from "expo-constants";
import { Formik } from "formik";

import AppTextInput from "../components/AppTextInput";
import ErrorMessage from "../components/ErrorMessage";
import Screen from "../components/Screen";
import SubmitButton from "../components/SubmitButton";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function HomeScreen(props) {
  const [username, setUsername] = useState("Username");

  return (
    <Screen>
      <View style={styles.header}>
        <Image
          style={styles.wave}
          source={require("../assets/wave-colorP.png")}
        />
        <Text style={styles.welcome}>Bienvenue, {username}</Text>
      </View>

      <View style={styles.body}>
        <AppTextInput />
        <AppButton title={"Nouvelle Recherche"} />
        <AppButton title={"Scanner le code"} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  body: {
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    justifyContent: "center",
    alignItems: "center",
  },

  wave: {
    height: 200,
    width: 700,
    //  position: "absolute",
  },
  welcome: {
    position: "absolute",
  },
});

export default HomeScreen;
