//* Imports
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationHandler from "./app/navigation/NavigationHandler";

//* Import to keep the User Logged In
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CredentialsContext } from "./app/components/CredentialsContext";

//* Main App
export default function App() {
  //* useState def
  const [isLoading, setIsLoading] = useState(true);
  const [storedCredentials, setStoredCredentials] = useState("");

  //* Get the stored info
  const checkLoginCredentials = async () => {
    try {
      const response = await AsyncStorage.getItem("ChakirUser");

      if (response !== null) {
        //* Get the info
        setStoredCredentials(JSON.parse(response));
      } else {
        setStoredCredentials(null);
      }
    } catch (err) {}
  };

  return isLoading ? (
    <>
      <AppLoading
        startAsync={checkLoginCredentials}
        onFinish={() => {
          setIsLoading(false);
        }}
        onError={console.warn}
      />
    </>
  ) : (
    <CredentialsContext.Provider
      value={{ storedCredentials, setStoredCredentials }}
    >
      <NavigationContainer>
        <NavigationHandler />
      </NavigationContainer>
    </CredentialsContext.Provider>
  );
}
