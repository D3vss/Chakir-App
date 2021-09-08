import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { View, Text, StyleSheet, BackHandler } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

function SearchEndSplashScreen({ navigation, route }) {
  //* Destruction of params
  const { data } = route.params.data;
  const backAction = () => {
    navigation.navigate("HomeScreen");
    return true;
  };
  useFocusEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  });
  //Value depends on whether the data is found or not
  return (
    <View style={styles.container}>
      {route.params.isFound && (
        <>
          <View style={styles.found}>
            <MaterialCommunityIcons
              name={"check-circle"}
              color={"white"}
              size={28}
            />
            <Text style={styles.verifytext}>Resultat trouvé</Text>
          </View>
          <AppButton
            title={"Savoir plus"}
            icon={"arrow-right"}
            onPress={() => {
              navigation.navigate("SearchEnd", data);
            }}
          />
        </>
      )}

      {!route.params.isFound && (
        <>
          <View style={styles.notFound}>
            <MaterialCommunityIcons
              name={"alert-circle"}
              color={"white"}
              size={28}
            />
            <Text style={styles.verifytext}>Aucun résultat!</Text>
          </View>
          <AppButton title={"Retour"} onPress={() => navigation.goBack()} />
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },
  found: {
    backgroundColor: colors.lightgreen,
    height: "50%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  notFound: {
    backgroundColor: colors.lightred,
    height: "50%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },

  verifytext: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default SearchEndSplashScreen;
