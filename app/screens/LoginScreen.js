import React from "react";

import { Image, StyleSheet, Text, View } from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";

import SubmitButton from "../components/SubmitButton";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import ErrorMessage from "../components/ErrorMessage";
import Constants from "expo-constants";

import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().min(6).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.screen}>
      <Image
        style={styles.wave}
        source={require("../assets/wave-colorP.png")}
      />

      <View style={styles.logo}>
        <Image
          source={require("../assets/logo-white.png")}
          style={styles.image}
        />
      </View>

      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, errors }) => (
          <>
            <View style={styles.form}>
              <AppTextInput
                icon={"account"}
                placeholder={"Username"}
                onChangeText={handleChange("username")}
                autoCorrect={false}
              />
              <ErrorMessage error={errors.username} />
              <AppTextInput
                icon={"onepassword"}
                placeholder={"password"}
                onChangeText={handleChange("password")}
                secureTextEntry
                autoCorrect={false}
              />
              <ErrorMessage error={errors.password} />
              <SubmitButton title={"Login"} />

              <Text style={styles.text}>Forgot Password?</Text>
            </View>
          </>
        )}
      </Formik>
    </Screen>
  );
}

//Styling
const styles = StyleSheet.create({
  form: {
    //margin: 20,
    marginTop: 100,
    //padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 150,
    height: 50,
  },

  wave: {
    height: 250,
    width: 700,
    position: "absolute",
    top: Constants.statusBarHeight,
  },

  logo: {
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    position: "absolute",
    top: 85,
  },

  text: {
    fontSize: 10,
    color: colors.medium,
  },

  screen: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
