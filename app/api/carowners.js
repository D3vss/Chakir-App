import apiClient from "./client";

export const SearchHandler = async (values, setSubmitting, navigation) => {
  try {
    const { pv, vin } = values;

    const response = await apiClient.get(
      `/carOwners/${pv === "" ? `vin/${vin}` : `pv/${pv}`}`
    );
    const { data } = response;
    if (data.success === true) {
      navigation.navigate("SearchEnd", data);
    } else {
      alert("User Not Found");
    }
    setSubmitting(false);
  } catch (err) {
    console.log(err);
  }
};
