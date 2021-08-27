import apiClient from "./client";

export const loginHandler = async (values, navigation, setSubmitting) => {
  try {
    const response = await apiClient.post("/login", values);
    const { data } = response;
    if (data.success) {
      navigation.navigate("HomeScreen", data.data);
      setSubmitting(false);
    } else {
      //TODO Fix The UI to show errors
      console.log("error");
      setSubmitting(false);
    }
  } catch (err) {}
};
