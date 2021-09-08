import React, { useContext, useState } from "react";

import { Image, StyleSheet, Text, View } from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";

import { LinearGradient } from "expo-linear-gradient";

import ErrorMessage from "../components/ErrorMessage";
import PasswordField from "../components/PasswordField";
import UsernameField from "../components/UsernameField";
import Screen from "../components/Screen";

import colors from "../config/colors";
import AppButton from "../components/AppButton";

import { loginHandler } from "../api/auth";
import { CredentialsContext } from "../components/CredentialsContext";

import { KeyboardAvoidingWrapper } from "../components/keyboardAvoidingWrapper";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().min(6).label("Password"),
});

function LoginScreen({ navigation }) {
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);
  const [isLogin, setIsLogin] = useState(true);
  return (
    <KeyboardAvoidingWrapper enabled={true}>
      <>
        <Screen>
          <LinearGradient
            colors={[
              colors.Bluegradient1st,
              colors.Bluegradient2nd,
              colors.Bluegradient2nd,
              colors.Bluegradient2nd,
            ]}
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
              onSubmit={(values, { setSubmitting }) => {
                loginHandler(
                  { email: values.username, password: values.password },
                  navigation,
                  setSubmitting,
                  setStoredCredentials,
                  setIsLogin
                );
              }}
              validationSchema={validationSchema}
            >
              {({ handleSubmit, handleChange, errors, isSubmitting }) => (
                <>
                  <LinearGradient
                    colors={[colors.sky2, colors.lightgrey]}
                    style={styles.body}
                  >
                    <Text style={styles.loginTitle}>Login</Text>
                    <View style={styles.form}>
                      <UsernameField
                        icon={"account"}
                        placeholder={"Username"}
                        onChangeText={handleChange("username")}
                        autoCorrect={false}
                        autoCapitalize={"none"}
                      />
                      <ErrorMessage error={errors.username} />
                      <PasswordField
                        placeholder={"Password"}
                        onChangeText={handleChange("password")}
                        autoCorrect={false}
                        autoCapitalize={"none"}
                      />
                      <ErrorMessage error={errors.password} />
                      {!isSubmitting && (
                        <AppButton title={"Login"} onPress={handleSubmit} />
                      )}
                      {isSubmitting && (
                        <AppButton
                          style={styles.loginButton}
                          title={"Loading"}
                          isSubmitting
                          onPress={handleSubmit}
                        />
                      )}
                      {!isLogin && (
                        <ErrorMessage error={"Incorrect email or password "} />
                      )}
                      <Text style={styles.text}>Forgot Password?</Text>
                    </View>
                  </LinearGradient>
                </>
              )}
            </Formik>
          </LinearGradient>
        </Screen>
      </>
    </KeyboardAvoidingWrapper>
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
  field: {
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
