import React, { useState } from "react";

import { View, Text, StyleSheet, Modal } from "react-native";

import * as Yup from "yup";
import { Formik } from "formik";

import AppTextInput from "../components/AppTextInput";
import AppFormPicker from "../components/AppFormPicker";
import ErrorMessage from "../components/ErrorMessage";
import Screen from "../components/Screen";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

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

function RechercheManuelleScreen(props) {
  return (
    <Screen>
      <View style={styles.body}>
        <Formik
          initialValues={{ nev: "", ac: "", regionId: "", pv: "", vin: "" }}
          onSubmit={(values) => console.log(values.ac)}
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
                  placeholder={""}
                  onChangeText={handleChange("pv")}
                  autoCorrect={false}
                />
                <ErrorMessage error={errors.pv} />

                <Text style={styles.label}>VIN:</Text>
                <AppTextInput
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
        <Modal></Modal>
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
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
  },

  label: {
    alignSelf: "flex-start",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },

  matricule: {
    alignItems: "center",
    width: "100%",
  },

  formField: {
    width: "100%",
  },

  logo: {
    width: 150,
    height: 50,
    position: "absolute",
    top: 40,
  },

  wave: {
    height: 200,
    width: 700,
    //  position: "absolute",
  },
  welcome: {
    position: "absolute",
    fontSize: 14,
    color: colors.white,
  },
});

export default RechercheManuelleScreen;
