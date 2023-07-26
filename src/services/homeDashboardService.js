import requests from "./requests";
import axios from './base-api';


export const getStatisticsData = async (params) => {
    const response = await axios.get(
      `${requests.GET_STATISTICS}/${params.companyId}`
    );
    return response;
  };