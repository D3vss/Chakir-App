import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function ScanScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <Screen>
      <LinearGradient
        colors={[colors.Bluegradient1st, colors.Bluegradient2nd]}
        style={styles.header}
      >
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons
            name={"arrow-left-circle"}
            size={32}
            color={"white"}
          />
        </TouchableOpacity>
        <Image
          source={require("../assets/logo-white.png")}
          style={styles.logo}
        />
      </LinearGradient>

      <View style={styles.body}>
        <Text>Centrer la camera sur le code</Text>
        <View style={styles.container}>
          <Camera style={styles.camera} type={"back"}></Camera>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  camera: {
    height: 300,
    width: 300,
  },

  container: {
    borderRadius: 15,
    height: 100,
    width: 300,
    overflow: "hidden",
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 40,
    paddingRight: 40,
    flex: 1,
  },

  header: {
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  logo: {
    width: 150,
    height: 50,
    position: "absolute",
    top: 40,
  },
  settingsButton: {
    position: "absolute",
    left: 20,
    top: 10,
  },
});

export default ScanScreen;
