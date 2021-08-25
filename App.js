import React, { useState, useEffect, useRef } from "react";

//Screens
import HomeScreen from "./app/screens/HomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RechercheManuelleScreen from "./app/screens/RechercheManuelleScreen";
import AppPicker from "./app/components/AppPicker";
import Screen from "./app/components/Screen";
import { Button, View, Text, StyleSheet, Animated } from "react-native";
import colors from "./app/config/colors";

export default function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [sliderStyle, setSliderStyle] = useState(styles.slider);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, isClicked]);

  return (
    <Screen>
      <Animated.View style={styles.container}>
        <Button
          title={"Show Slide View"}
          onPress={() => {
            console.log("Pressed!");
            setIsClicked(true);
          }}
          style={{
            opacity: fadeAnim, // Bind opacity to animated value
          }}
        />
      </Animated.View>

      <View style={styles.slider}></View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightgrey,
    justifyContent: "center",
    alignItems: "center",
  },

  slider: {
    backgroundColor: "red",
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 200,
  },
});
