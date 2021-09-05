import apiClient from "./client";

export const SearchHandler = async (values, setSubmitting, navigation) => {
  try {
    const { pv, vin, ac, nev, regionId } = values;
    if (pv === "" && vin === "") {
      var response = await apiClient.get(
        `/carOwners/matircule/nev/${nev}/ac/${ac}/regionid/${regionId}`
      );
    } else {
      var response = await apiClient.get(
        `/carOwners/${pv === "" ? `vin/${vin}` : `pv/${pv}`}`
      );
    }

    let isFound;
    const { data } = response;
    if (data.success === true) {
      //navigation.navigate("SearchEnd", data);
      isFound = true;
      navigation.navigate("SearchEndSplashScreen", { data, isFound });
    } else {
      isFound = false;
      navigation.navigate("SearchEndSplashScreen", { data, isFound });
    }
    setSubmitting(false);
  } catch (err) {
    console.log(err);
  }
};

export const ScanHandler = async (values, navigation) => {
  try {
    const { pv } = values;
    const response = await apiClient.get(`/carOwners/pv/${pv}`);

    let isFound;
    const { data } = response;
    if (data.success === true) {
      //navigation.navigate("SearchEnd", data);
      isFound = true;
      navigation.navigate("SearchEndSplashScreen", { data, isFound });
    } else {
      isFound = false;
      navigation.navigate("SearchEndSplashScreen", { data, isFound });
    }
  } catch (err) {
    console.log(err);
  }
};
