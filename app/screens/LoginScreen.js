import React from "react";

import { Image, StyleSheet, Text, View } from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";

import { LinearGradient } from "expo-linear-gradient";

import AppTextInput from "../components/AppTextInput";
import ErrorMessage from "../components/ErrorMessage";
import PasswordField from "../components/PasswordField";
import Screen from "../components/Screen";

import colors from "../config/colors";
import AppButton from "../components/AppButton";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().min(6).label("Password"),
});

function LoginScreen({ navigation }) {
  return (
    <Screen>
      <LinearGradient
        colors={[colors.Bluegradient2nd, colors.Bluegradient1st]}
        style={styles.screen}
      >
        <View style={styles.header}>
          <Image
            source={require("../assets/logo-white.png")}
            style={styles.logo}
          />
        </View>

        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
            navigation.navigate("Home", { username: values.username });
          }}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, handleChange, errors }) => (
            <>
              <LinearGradient
                colors={[colors.sky2, colors.lightgrey]}
                style={styles.body}
              >
                <Text style={styles.loginTitle}>Login</Text>
                <View style={styles.form}>
                  <AppTextInput
                    icon={"account"}
                    placeholder={"Username"}
                    onChangeText={handleChange("username")}
                    autoCorrect={false}
                  />
                  <ErrorMessage error={errors.username} />
                  <PasswordField
                    placeholder={"Password"}
                    onChangeText={handleChange("password")}
                    autoCorrect={false}
                  />
                  <ErrorMessage error={errors.password} />
                  <AppButton title={"Login"} onPress={handleSubmit} />

                  <Text style={styles.text}>Forgot Password?</Text>
                </View>
              </LinearGradient>
            </>
          )}
        </Formik>
      </LinearGradient>
    </Screen>
  );
}

//Styling
const styles = StyleSheet.create({
  body: {
    backgroundColor: "red",
    flex: 1,
    padding: 10,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
    elevation: 5,
  },

  form: {
    alignItems: "center",
    width: "100%",
  },
  header: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 50,
    position: "absolute",
  },
  screen: {
    flex: 1,
  },

  loginTitle: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 30,
    marginTop: 20,

    color: colors.medium,
  },
});

export default LoginScreen;
