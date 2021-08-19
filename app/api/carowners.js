import client from "./client";

const endpoint = "/carowners";

const getCarOwners = () => client.get(endpoint);

export default {
  getCarOwners,
};
