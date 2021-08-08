import React from "react";

import { View, StyleSheet, Text } from "react-native";

function ErrorMessage({ error }) {
  if (!error) return null;
  return <Text style={styles.error}>{error}</Text>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default ErrorMessage;
