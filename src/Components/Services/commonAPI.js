import axios from "axios";
import baseURL from "./baseURL";

const commonAPI = async (httpMethod, endpoint, requestbody) => {
  let requestConfig = {
    method: httpMethod,
    url: baseURL + endpoint,
    data: requestbody,
  };
  return await axios(requestConfig)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export default commonAPI;
