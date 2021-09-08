import { apiClientV1 } from "./client";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginHandler = async (
  values,
  navigation,
  setSubmitting,
  setStoredCredentials,
  setIsLogin
) => {
  try {
    const response = await apiClientV1.post("/login", values);
    const { data } = response;
    if (data.success) {
      navigation.navigate("HomeScreen", data.data);
      persistLogin(data.data, setStoredCredentials);
      setSubmitting(false);
      setIsLogin(true);
    } else {
      setIsLogin(false);
      setSubmitting(false);
    }
  } catch (err) {
    console.log(err);
  }
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
