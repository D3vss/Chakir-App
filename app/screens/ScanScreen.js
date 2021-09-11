import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BarCodeScanner } from "expo-barcode-scanner";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

import { ScanHandler } from "../api/carowners";

function ScanScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);

    ScanHandler({ pv: data }, navigation);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
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
        <Image source={require("../assets/logonew.png")} style={styles.logo} />
      </LinearGradient>

      <View style={styles.body}>
        <Text style={styles.instructions}>
          Placer le code bar dans le centre du camera:
        </Text>
        <View style={styles.container}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={styles.camera}
          />
        </View>
        {scanned && (
          <AppButton title={"Rescanner"} onPress={() => setScanned(false)} />
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  camera: {
    height: 1999,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    margin: 10,
    height: 200,
    width: "100%",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    overflow: "hidden",
  },
  codeArea: {
    height: 240,
    width: 480,
  },
  body: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 10,
  },
  instructions: {
    fontWeight: "bold",
    fontSize: 14,
  },
  header: {
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 10,
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 20,
  },
  settingsButton: {
    position: "absolute",
    left: 20,
    top: 10,
  },
});

export default ScanScreen;
