import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import * as Yup from "yup";
import { Formik } from "formik";

import AppTextInput from "../components/AppTextInput";
import AppFormPicker from "../components/AppFormPicker";
import ErrorMessage from "../components/ErrorMessage";
import Screen from "../components/Screen";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import { LinearGradient } from "expo-linear-gradient";

const validationSchema = Yup.object()
  .shape({
    nev: Yup.number().positive().max(99999).min(1).label("NEV"),
    regionId: Yup.number().max(89).min(1).label("Region Id"),
    pv: Yup.number().max(99999).label("PV"),
    vin: Yup.number().max(99999).label("VIN"),
  })
  .test(
    "at-least-one-number",
    "you must provide at least one number",
    (value) => !!(value.nev || value.regionId || value.pv || value.vin)
  );

const AC = [
  {
    id: 1,
    label: "أ",
  },
  {
    id: 2,
    label: "ب",
  },
  {
    id: 3,
    label: "ه",
  },
  {
    id: 4,
    label: "د",
  },
  {
    id: 5,
    label: "و",
  },
];

function RechercheManuelleScreen({ navigation }) {
  const [searchValues, setSearchValues] = useState();
  const [carOwners, setCarOwners] = useState();

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
        <Image
          source={require("../assets/logo-white.png")}
          style={styles.logo}
        />
      </LinearGradient>

      <View style={styles.body}>
        <Formik
          initialValues={{ nev: "", ac: "", regionId: "", pv: "", vin: "" }}
          onSubmit={(values) => {
            setSearchValues(values);
            navigation.navigate("SearchEnd");
          }}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleSubmit, errors }) => (
            <>
              <View style={styles.form}>
                <Text style={styles.label}>Matricule:</Text>
                <View style={styles.matricule}>
                  <AppTextInput
                    style={styles.formField}
                    placeholder={"NEV"}
                    onChangeText={handleChange("nev")}
                  />
                  <AppFormPicker
                    name={"ac"}
                    data={AC}
                    style={styles.formField}
                    placeholder={"AC"}
                  />
                  <AppTextInput
                    style={styles.formField}
                    placeholder={"Region ID"}
                    onChangeText={handleChange("regionId")}
                  />
                </View>
                <ErrorMessage error={errors.nev} />
                <ErrorMessage error={errors.regionId} />
                <Text style={styles.label}>PV:</Text>
                <AppTextInput
                style={styles.formField}
                  placeholder={""}
                  onChangeText={handleChange("pv")}
                  autoCorrect={false}
                />
                <ErrorMessage error={errors.pv} />
                <Text style={styles.label}>VIN:</Text>
                <AppTextInput
                style={styles.formField}
                  placeholder={""}
                  onChangeText={handleChange("vin")}
                  autoCorrect={false}
                />
                <ErrorMessage error={errors.vin} />
              </View>
              <AppButton title={"Rechercher"} onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  body: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
  },
  header: {
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  logo: {
    width: 150,
    height: 50,
    position: "absolute",
    top: 40,
  },
  settingsButton: {
    position: "absolute",
    left: 20,
    top: 10,
  },

  form: {
    justifyContent: "center",
    alignItems: "center",
  },

  label: {
    alignSelf: "flex-start",
  },

  matricule: {
    alignItems: "center",
    width: "100%",
  },

  formField: {
    width: "100%",
  },

  welcome: {
    position: "absolute",
    fontSize: 14,
    color: colors.white,
  },
});

export default RechercheManuelleScreen;
