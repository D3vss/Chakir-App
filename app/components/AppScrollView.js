//* IMPORTS
import React from "react";
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  View,
  FlatList,
} from "react-native";
import Animated, { useSharedValue } from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

//*  VAR to modifie
const CARD_HEIGHT = (2 / 3) * height;
const CARD_WIDTH = (5 / 6) * width;
const PAGINATION_COLOR = colors.Bluegradient2nd;

export const AppScrollView = ({ data, children, onPress }) => {
  //* VARIABLES
  const enabledLeft = useSharedValue(0);
  const enabledRight = useSharedValue(0);
  settingUpValues(data, 0, enabledLeft, enabledRight);

  const renderItem = ({ item, index }) => {
    settingUpValues(data, index, enabledLeft, enabledRight);
    //* TODO hnaya
    return (
      <View style={styles.container}>
        <Animated.View style={styles.card}>
          <TouchableOpacity style={styles.settingsButton} onPress={onPress}>
            <MaterialCommunityIcons
              name={"arrow-left-circle"}
              size={32}
              color={colors.ButtonBlueGradient2}
            />
          </TouchableOpacity>
          <Text style={styles.infos}>
            <Text style={styles.bold}>PV: </Text> {item.NumPV}
          </Text>

          <Text style={styles.infos}>
            <Text style={styles.bold}>Matricule: </Text> {item.Matricule}
          </Text>

          <Text style={styles.infos}>
            <Text style={styles.bold}>Date de Validité: </Text>{" "}
            {item.DatePV.slice(0, 10)}
          </Text>

          <Text style={styles.infos}>
            <Text style={styles.bold}>Date de controle: </Text>{" "}
            {item.DateControle.slice(0, 10)}
          </Text>

          <Text style={styles.infos}>
            <Text style={styles.bold}>Marque: </Text> {item.Marque}
          </Text>
        </Animated.View>
        <View style={styles.containerPag}>
          <IconPag name="arrow-left" enalbed={enabledLeft} />
          <TextPag page={index + 1} />
          <IconPag name="arrow-right" enalbed={enabledRight} />
        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.VIN.toString()}
      horizontal
      extraData={children}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}
    ></FlatList>
  );
};

//* StyleSheet
const styles = StyleSheet.create({
  settingsButton: {
    position: "absolute",
    left: 15,
    top: 15,
  },
  bold: {
    fontWeight: "bold",
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: "#fff",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  carInfo: {
    flex: 1,
    padding: 15,
    backgroundColor: colors.lightgrey,
    borderRadius: 15,
    marginBottom: 5,
  },
  container: {
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  containerPag: {
    width: (width * 1) / 3,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  infos: {
    marginBottom: 10,
    backgroundColor: colors.lightblue,
    width: "100%",
    height: 50,
    borderRadius: 15,
    padding: 15,
    justifyContent: "center",
  },
  textPag: {
    backgroundColor: PAGINATION_COLOR,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    borderRadius: 50,
    opacity: 0.7,
  },
  verifytext: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
});

//* SUB COMPONENTS

const IconPag = ({ enalbed, name }) => {
  return (
    <TouchableOpacity
      disabled={!enalbed.value}
      style={{
        opacity: enalbed.value,
      }}
    >
      <Icon name={name} size={25} color={PAGINATION_COLOR} />
    </TouchableOpacity>
  );
};

const TextPag = ({ page }) => {
  return (
    <View style={styles.textPag}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          color: "white",
        }}
      >
        {page}
      </Text>
    </View>
  );
};

//* LOGIQUE  PAGINATION
const settingUpValues = (data, index, enabledLeft, enabledRight) => {
  if (data.length === 1) {
    enabledLeft.value = 0;
    enabledRight.value = 0;
  } else {
    if (index === 0) {
      enabledLeft.value = 0;
      enabledRight.value = 1;
    } else if (index === data.length - 1) {
      enabledLeft.value = 1;
      enabledRight.value = 0;
    } else {
      enabledLeft.value = 1;
      enabledRight.value = 1;
    }
  }
};
