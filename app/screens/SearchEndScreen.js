import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import { BackHandler } from "react-native";
import { AppScrollView } from "../components/AppScrollView";

function SearchEndScreen({ navigation, route }) {
  useFocusEffect(() => {
    const backAction = () => {
      //navigation.navigate("HomeScreen");
      console.log("backPressed");
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  });

  const data = route.params;
  return (
    <AppScrollView
      data={data}
      onPress={() => navigation.navigate("HomeScreen")}
    />
  );
}

export default SearchEndScreen;
