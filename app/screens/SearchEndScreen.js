import React from "react";
import { useState } from "react";

import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import AppButton from "../components/AppButton";
import { LinearGradient } from "expo-linear-gradient";
import Screen from "../components/Screen";
import colors from "../config/colors";

import { AppScrollView } from "../components/AppScrollView";

function SearchEndScreen({ navigation, route }) {
  const data = route.params;
  return (
    // <Screen>
    //   <View style={styles.body}>
    //     <AppScrollView data={DATA} />

    //     <AppButton title={"Retour"} onPress={() => navigation.goBack()} />
    //   </View>
    // </Screen>
    <AppScrollView data={data} />
  );
}

const styles = StyleSheet.create({
  body: {
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  infoCard: {
    backgroundColor: colors.lightgrey,
    height: "85%",
    width: "100%",
    borderRadius: 15,
    padding: 20,
  },
  field: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default SearchEndScreen;
