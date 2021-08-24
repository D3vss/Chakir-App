import React from "react";

import { Image, StyleSheet, Text, View } from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";

import AppTextInput from "../components/AppTextInput";
import ErrorMessage from "../components/ErrorMessage";
import PasswordField from "../components/PasswordField";
import Screen from "../components/Screen";
//import SubmitButton from "../components/SubmitButton";

import colors from "../config/colors";
import AppButton from "../components/AppButton";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().min(6).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen>
      <View style={styles.screen}>
        <View></View>

        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, handleChange, errors }) => (
            <>
              <View style={styles.form}>
                <AppTextInput
                  icon={"account"}
                  placeholder={"Username"}
                  onChangeText={handleChange("username")}
                  autoCorrect={false}
                />
                <ErrorMessage error={errors.username} />
                <PasswordField
                  placeholder={"password"}
                  onChangeText={handleChange("password")}
                  autoCorrect={false}
                />
                <ErrorMessage error={errors.password} />
                <AppButton title={"Login"} onPress={handleSubmit} />
                <Text style={styles.text}>Forgot Password?</Text>
              </View>
            </>
          )}
        </Formik>
      </View>
    </Screen>
  );
}

//Styling
const styles = StyleSheet.create({
  form: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  image: {
    width: 150,
    height: 50,
    position: "absolute",
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
  },
  screen: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    fontSize: 10,
    color: colors.medium,
  },
  wave: {
    height: 200,
    width: 650,
  },
});

export default LoginScreen;
