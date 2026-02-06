import fetchRequest from "./fetch";
import services from "../services";

const BASE_URL = import.meta.env.VITE_API;
const API = fetchRequest(BASE_URL);

const apiRequest = async ({ service, payload, filter }) => {
  if (!services[service]) {
    throw new Error(`Service not found: ${service}`);
  }

  return await services[service]({
    API,
    payload,
    filter,
  });
};

export default apiRequest;
