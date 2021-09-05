import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ActivityIndicator,
  View,
} from "react-native";

import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppButton(
  { title, icon, onPress, isSubmitting = false },
  ...otherProps
) {
  return (
    <TouchableOpacity
      style={styles.button}
      disabled={isSubmitting}
      onPress={onPress}
    >
      {!isSubmitting && (
        <View style={styles.buttonContainer}>
          <Text style={styles.text}> {title} </Text>
          {icon && (
            <MaterialCommunityIcons name={icon} color={"white"} size={14} />
          )}
        </View>
      )}

      {isSubmitting && <ActivityIndicator size="small" color="white" />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.Bluegradient2nd,
    borderRadius: 15,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
  },
});

export default AppButton;
