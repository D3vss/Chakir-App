import React, { useState } from "react";

//Importing core components
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";

//Importing costum components
import AppPickerField from "./AppPickerField";

//Importing icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Importing config files
import colors from "../config/colors";

function AppPicker({ placeholder, onSelectedItem, data }) {
  const [value, setValue] = useState(placeholder);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.viewContainer}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={styles.valueField}>{value}</Text>
        <MaterialCommunityIcons
          name={"arrow-down-drop-circle"}
          size={24}
          style={styles.icon}
          color={colors.medium}
        />
      </TouchableOpacity>
      <Modal
        animationType={"slide"}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modal}>
          <Pressable
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.closeButton}
          >
            <MaterialCommunityIcons
              name={"close-circle"}
              size={32}
              color={colors.medium}
            />
          </Pressable>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <AppPickerField
                value={item.label}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setValue(item.label);
                  onSelectedItem(item);
                }}
              />
            )}
          />
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightgrey,
    width: "100%",
    padding: 15,
    flexDirection: "row",
    borderRadius: 15,
    alignItems: "center",
  },
  closeButton: {
    alignSelf: "flex-end",
  },
  icon: {
    alignSelf: "flex-end",
  },
  valueField: {
    color: colors.medium,
    alignSelf: "center",
    flex: 1,
  },
  viewContainer: {
    width: 90,
  },
  modal: {
    padding: 15,
  },
});
export default AppPicker;
