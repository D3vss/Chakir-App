import React from "react";
import { useState } from "react";

import { View, Text, StyleSheet, Image } from "react-native";

import * as Yup from "yup";
import { Formik } from "formik";

import AppTextInput from "../components/AppTextInput";
import ErrorMessage from "../components/ErrorMessage";
import SubmitButton from "../components/SubmitButton";
import ThreeFieldInput from "../components/ThreeFieldsInput";
import Screen from "../components/Screen";
import colors from "../config/colors";

const validationSchema = Yup.object()
  .shape({
    nev: Yup.number().positive().max(99999).min(1).label("NEV"),
    regionId: Yup.number().max(89).min(1).label("Region Id"),
    pv: Yup.number().max(4).label("PV"),
    vin: Yup.number().max(4).label("VIN"),
  })
  .test(
    "at-least-one-number",
    "you must provide at least one number",
    (value) => !!(value.nev || value.regionId || value.pv || value.vin)
  );

function RechercheManuelleScreen(props) {
  return (
    <Screen>
      {/* <View style={styles.header}>
        <Image
          style={styles.wave}
          source={require("../assets/wave-main.png")}
        />
        <Image
          style={styles.logo}
          source={require("../assets/logo-white.png")}
        />
        <Text style={styles.welcome}>Recherche Manuelle</Text>
      </View> */}

      <View style={styles.body}>
        <Formik
          initialValues={{ nev: "", regionId: "", pv: "", vin: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({ handleChange, errors }) => (
            <>
              <View style={styles.form}>
                <Text style={styles.label}>Matricule:</Text>
                <ThreeFieldInput
                  fieldOne={handleChange("nev")}
                  fieldTwo={handleChange("regionId")}
                />

                <ErrorMessage error={errors.nev} />
                <ErrorMessage error={errors.ac} />
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

                <SubmitButton title={"Rechercher"} />
              </View>
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
