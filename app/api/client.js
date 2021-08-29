import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://chakir-app-back-end.herokuapp.com/api/v1/",
});

export default apiClient;
