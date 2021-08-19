import React from "react";
import { useState } from "react";

import { View, Text, StyleSheet, Image } from "react-native";
import AppButton from "../components/AppButton";

import Screen from "../components/Screen";
import colors from "../config/colors";

function MoreInfoScreen(props) {
  return (
    <Screen>
      <View style={styles.body}>
        <View>
          <Text>Test</Text>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  body: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 40,
    paddingRight: 40,
  },

  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 50,
    position: "absolute",
    top: 40,
  },

  wave: {
    height: 250,
    width: 700,
    //  position: "absolute",
  },
  welcome: {
    position: "absolute",
    fontSize: 14,
    color: colors.white,
  },
});

export default MoreInfoScreen;
