import axios from './base-api';
import requests from './requests';


export const deleteEmployee = async (id) => {
    const response = await axios.delete(requests.DELETE_EMPLOYEE + id);
    return response;
  };
  export const updateEmployee = async (id, data) => {
    const response = await axios.patch(requests.UPDATE_EMPLOYEE + id, data);
    return response;
  };
  export const getEmployee = async (id) => {
    const response = await axios.get(requests.GET_EMPLOYEE + id);
    return response;
  };