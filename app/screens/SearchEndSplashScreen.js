import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

function SearchEndSplashScreen({ navigation, route }) {
  //Value depends on whether the data is found or not
  const [isFound, setIsFound] = useState(true);
  return (
    <View style={styles.container}>
      {route.params.isFound && (
        <>
          <View style={styles.found}>
            <MaterialCommunityIcons
              name={"check-circle"}
              color={"white"}
              size={28}
            />
            <Text style={styles.verifytext}>Resultat trouvé</Text>
          </View>
          <AppButton
            title={"S'avoir plus"}
            icon={"arrow-right"}
            onPress={() => {
              //navigation.navigate("SearchEnd", route.params.data);
              console.log(route.params);
            }}
          />
        </>
      )}

      {!route.params.isFound && (
        <>
          <View style={styles.notFound}>
            <MaterialCommunityIcons
              name={"alert-circle"}
              color={"white"}
              size={28}
            />
            <Text style={styles.verifytext}>Aucun résultat!</Text>
          </View>
          <AppButton title={"Retour"} onPress={() => navigation.goBack()} />
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },
  found: {
    backgroundColor: colors.lightgreen,
    height: "50%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  notFound: {
    backgroundColor: colors.lightred,
    height: "50%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },

  verifytext: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default SearchEndSplashScreen;
