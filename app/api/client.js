import { create } from "apisauce";

export const apiClientV1 = create({
  baseURL: "https://chakir-app-back-end.herokuapp.com/api/v1/",
});
export const apiClientV2 = create({
  baseURL: "https://chakir-app-back-end.herokuapp.com/api/v2/",
});
