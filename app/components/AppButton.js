import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress, isSubmitting = false }) {
  return (
    <TouchableOpacity
      style={styles.button}
      disabled={isSubmitting}
      onPress={onPress}
    >
      {!isSubmitting && <Text style={styles.text}> {title} </Text>}
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

  text: {
    color: colors.white,
  },
});

export default AppButton;
