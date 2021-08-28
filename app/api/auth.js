import React, { useContext } from "react";
import apiClient from "./client";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginHandler = async (
  values,
  navigation,
  setSubmitting,
  setStoredCredentials
) => {
  try {
    const response = await apiClient.post("/login", values);
    const { data } = response;
    if (data.success) {
      navigation.navigate("HomeScreen", data.data);
      persistLogin(data.data, setStoredCredentials);
      setSubmitting(false);
    } else {
      //TODO Fix The UI to show errors
      console.log("error");
      setSubmitting(false);
    }
  } catch (err) {}
};

const persistLogin = async (credentials, setStoredCredentials) => {
  try {
    const response = await AsyncStorage.setItem(
      "ChakirUser",
      JSON.stringify(credentials)
    );
    setStoredCredentials(credentials);
    console.log("We saved All Your Informations");
  } catch (err) {
    console.log(err);
  }
};

export const ClearLogin = async (setStoredCredentials, navigation) => {
  try {
    console.log("clearing");
    await AsyncStorage.removeItem("ChakirUser");
    setStoredCredentials("");
    navigation.navigate("Login");
  } catch (err) {
    console.log(err);
  }
};
