import React from "react";
import { Text, View, StyleSheet, Pressable, Modal } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import { useState } from "react";

function AppPicker({ ...otherProps }) {
  const [value, setValue] = useState("AC");
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.modalContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modal}>
          <Pressable onPress={() => setModalVisible(false)}>
            <MaterialCommunityIcons
              name={"close-box"}
              size={30}
              style={styles.closeModalButton}
              color={colors.medium}
            />
          </Pressable>
          <Pressable
            style={styles.pickerfield}
            onPress={() => {
              setModalVisible(false);
              setValue("أ");
            }}
          >
            <Text>أ</Text>
          </Pressable>

          <Pressable
            style={styles.pickerfield}
            onPress={() => {
              setModalVisible(false);
              setValue("ه");
            }}
          >
            <Text>ه</Text>
          </Pressable>

          <Pressable
            style={styles.pickerfield}
            onPress={() => {
              setModalVisible(false);
              setValue("د");
            }}
          >
            <Text>د</Text>
          </Pressable>
        </View>
      </Modal>

      <Pressable
        style={styles.container}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <MaterialCommunityIcons
          color={colors.medium}
          name={"arrow-down-drop-circle"}
          size={20}
          style={styles.icon}
        />
        <Text style={styles.text} {...otherProps}>
          {value}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightgrey,
    borderRadius: 15,
    flexDirection: "row",
    // width: "100%",
    padding: 20,
    alignItems: "center",
    height: 60,
  },

  pickerfield: {
    margin: 5,
    height: 40,
    backgroundColor: colors.lightgrey,
    borderRadius: 20,
    width: "90%",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  icon: {
    marginLeft: 5,
  },

  modal: {
    backgroundColor: colors.white,
    flex: 1,
  },

  modalContainer: {
    //  width: "100%",
  },

  closeModalButton: {
    position: "relative",
    left: 10,
    margin: 10,
    marginTop: 20,
  },
});

export default AppPicker;
