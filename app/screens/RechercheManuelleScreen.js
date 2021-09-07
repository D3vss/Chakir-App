import React, { useState } from "react";

import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

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

import { KeyboardAvoidingWrapper } from "../components/keyboardAvoidingWrapper";
import { SearchHandler } from "../api/carowners";

Yup.setLocale({
  mixed: {
    default: "Champs invalid",
    required: "Ce champs est obligatoire",
  },
  string: {
    length: "PV doit contenir 10 caractères",
  },
  number: {
    default: "a",
    positive: "NEV doit etre positif",
    max: `NEV doit etre entre 1 et 99999`,
    min: `NEV doit etre entre 1 et 99999`,
  },
});

const validationSchema = Yup.object().shape({
  nev: Yup.number("number")
    .positive()
    .max(99999)
    .min(1)
    .label("NEV")
    .typeError("NEV est un nombre"),
  regionId: Yup.number()
    .positive()
    .max(89)
    .min(1)
    .label("Region Id")
    .typeError("NEV est un nombre"),
  pv: Yup.string().length(11).label("PV"),
  vin: Yup.string().label("VIN"),
});

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
  const [choiceButtonsVisible, setchoiceButtonsVisible] = useState(true);
  const [matriculeVisible, setMatriculeVisible] = useState(false);
  const [pvVisible, setPvVisible] = useState(false);
  const [vinVisible, setVinVisible] = useState(false);

  return (
    <KeyboardAvoidingWrapper enabled={false}>
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
          {/* Choosing buttons Group */}
          {choiceButtonsVisible && (
            <>
              <AppButton
                title={"Recherche par matricule"}
                onPress={() => {
                  setMatriculeVisible(!matriculeVisible);
                  setchoiceButtonsVisible(!choiceButtonsVisible);
                }}
              />
              <AppButton
                title={"Recherche par PV"}
                onPress={() => {
                  setPvVisible(!pvVisible);
                  setchoiceButtonsVisible(!choiceButtonsVisible);
                }}
              />
              <AppButton
                title={"Recherche par VIN"}
                onPress={() => {
                  setVinVisible(!vinVisible);
                  setchoiceButtonsVisible(!choiceButtonsVisible);
                }}
              />
            </>
          )}
          {/* End of choosing buttons group */}

          {/*Formik tag  */}
          <Formik
            initialValues={{ pv: "", vin: "", nev: "", ac: "", regionId: "" }}
            onSubmit={(values, { setSubmitting }) => {
              SearchHandler(values, setSubmitting, navigation);
            }}
            validationSchema={validationSchema}
          >
            {({ handleChange, handleSubmit, errors, isSubmitting }) => (
              <>
                {/* Form Container */}
                <View style={styles.form}>
                  {/* Search with Matricule */}
                  {matriculeVisible && (
                    <>
                      <Text style={styles.label}>
                        Veuillez saisir le matricule:
                      </Text>
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
                    </>
                  )}

                  {/* Search with PV */}
                  {pvVisible && (
                    <>
                      <Text style={styles.label}>Veuillez saisir le PV:</Text>
                      <AppTextInput
                        style={styles.formField2}
                        placeholder={"PV..."}
                        onChangeText={handleChange("pv")}
                        autoCorrect={false}
                      />
                      <ErrorMessage error={errors.pv} />
                    </>
                  )}

                  {/* Search with VIN */}
                  {vinVisible && (
                    <>
                      <Text style={styles.label}>Veuillez saisir le VIN:</Text>
                      <AppTextInput
                        style={styles.formField2}
                        placeholder={"VIN..."}
                        onChangeText={handleChange("vin")}
                        autoCorrect={false}
                      />
                      <ErrorMessage error={errors.vin} />
                    </>
                  )}
                </View>
                {/*End of Form Container */}
                <View style={{ width: "100%" }}>
                  <>
                    {/* Submit Button */}
                    {!choiceButtonsVisible && (
                      <>
                        {!isSubmitting && (
                          <AppButton
                            title={"Recherche"}
                            onPress={handleSubmit}
                          />
                        )}
                        {isSubmitting && (
                          <AppButton
                            title={"Loading"}
                            isSubmitting
                            onPress={handleSubmit}
                          />
                        )}

                        {/* Button to choose the search mode */}
                        {!choiceButtonsVisible && (
                          <AppButton
                            title="Rechoisir le mode"
                            onPress={() => {
                              setMatriculeVisible(false);
                              setPvVisible(false);
                              setVinVisible(false);
                              setchoiceButtonsVisible(!choiceButtonsVisible);
                            }}
                          />
                        )}
                      </>
                    )}
                  </>
                </View>
              </>
            )}
          </Formik>
        </View>
      </Screen>
    </KeyboardAvoidingWrapper>
  );
}

const styles = StyleSheet.create({
  body: {
    top: 50,
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  header: {
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 10,
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
    marginBottom: 8,
  },

  matricule: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignContent: "space-between",
    //width: "100%",
    //flex: 1,
  },

  formField: {
    width: 85,
  },
  formField2: {
    width: "100%",
  },
  welcome: {
    position: "absolute",
    fontSize: 14,
    color: colors.white,
  },
});

export default RechercheManuelleScreen;
