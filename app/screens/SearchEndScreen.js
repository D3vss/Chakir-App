import React, { useEffect } from "react";

import { BackHandler } from "react-native";
import { AppScrollView } from "../components/AppScrollView";

function SearchEndScreen({ navigation, route }) {
  useEffect(() => {
    const backAction = () => {
      navigation.navigate("HomeScreen");
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const data = route.params;
  return (
    <AppScrollView
      data={data}
      onPress={() => navigation.navigate("HomeScreen")}
    />
  );
}

export default SearchEndScreen;
