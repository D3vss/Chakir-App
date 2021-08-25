import React, { useState, useEffect, useRef } from "react";

import Screen from "./app/components/Screen";
import Constants from "expo-constants";

import { View, StyleSheet, Animated, Dimensions } from "react-native";
import colors from "./app/config/colors";
import AppButton from "./app/components/AppButton";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function AppSlidingMenu({ data }) {
  const transAnim = useRef(new Animated.Value(0)).current;

  const translateLeft = () => {
    Animated.timing(transAnim, {
      toValue: -Dimensions.get("window").width / 2,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const translateRight = () => {
    Animated.timing(transAnim, {
      toValue: Dimensions.get("window").width / 2,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Screen>
      <Animated.View
        style={[
          styles.slider,
          {
            transform: [{ translateX: transAnim }],
          },
        ]}
      >
        <MaterialCommunityIcons
          name={"close-circle"}
          size={32}
          color={colors.medium}
        />
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <AppPickerField value={item.label} onPress={() => {}} />
          )}
        />
      </Animated.View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  Button: {
    alignSelf: "flex-start",
    backgroundColor: "red",
  },
  container: {
    flex: 1,
    backgroundColor: colors.lightgrey,
    justifyContent: "center",
    alignItems: "flex-end",
  },

  slider: {
    backgroundColor: "red",
    flex: 1,
    position: "absolute",
    top: Constants.statusBarHeight,
    bottom: 0,
    left: -Dimensions.get("window").width / 2,
    right: 0,
    width: Dimensions.get("window").width / 2,
    alignSelf: "flex-end",
    elevation: 10,
  },
});

export default AppSlidingMenu;
