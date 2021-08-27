import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://localhost:5000/api/v1",
});

export default apiClient;
