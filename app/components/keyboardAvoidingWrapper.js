import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export const KeyboardAvoidingWrapper = ({ children, enabled }) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={{ flex: 1 }}
    enabled={enabled}
  >
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss;
        console.log("touched");
      }}
    >
      {children}
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);
