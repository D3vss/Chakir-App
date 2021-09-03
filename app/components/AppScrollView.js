//* IMPORTS
import React from "react";
import { Children } from "react";
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  View,
  FlatList,
} from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../config/colors";

const { width, height } = Dimensions.get("window");

//*  VAR to modifie
const CARD_HEIGHT = (2 / 3) * height;
const CARD_WIDTH = (5 / 6) * width;
const PAGINATION_COLOR = colors.Bluegradient2nd;

export const AppScrollView = ({ data, children }) => {
  //* VARIABLES
  const enabledLeft = useSharedValue(0);
  const enabledRight = useSharedValue(0);
  settingUpValues(data, 0, enabledLeft, enabledRight);
  const renderItem = ({ item, index }) => {
    settingUpValues(data, index, enabledLeft, enabledRight);
    return (
      <View style={styles.container}>
        <Animated.View style={styles.card}>
          {
            //*TODO add component and styles here }
          }
          <Text>{item.id}</Text>
          <Text>{item.pv}</Text>
          <Text>{item.vin}</Text>
          {
            //*TODO add component and styles here }
          }
        </Animated.View>
        <View style={styles.containerPag}>
          <IconPag name="arrow-left" enalbed={enabledLeft} />
          <TextPag page={index} />
          <IconPag name="arrow-right" enalbed={enabledRight} />
        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
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
  container: {
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: "#fff",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  containerPag: {
    width: (width * 1) / 3,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
