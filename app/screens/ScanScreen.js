import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet, Image } from "react-native";
import { Camera } from "expo-camera";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function HomeScreen(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

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
      {/* <View style={styles.header}>
        <Image
          style={styles.wave}
          source={require("../assets/wave-main.png")}
        />
        <Image
          style={styles.logo}
          source={require("../assets/logo-white.png")}
        />
        <Text style={styles.welcome}>Scan</Text>
      </View> */}

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

export default HomeScreen;
