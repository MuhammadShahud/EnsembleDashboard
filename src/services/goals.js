import { getAuthToken } from '../utils/utils';
import axios from './base-api';
import requests from './requests';

export const getAllGoals = async (id) => {
  const response = await axios.get(requests.GET_ALL_GOALS + id);
  return response;
};
export const getEmployeeGoals = async (id) => {
  // const { authToken } = useSelector((state) => state.auth);
  const response = await axios.get(requests.GET_EMPLOYEE_GOALS + id, {
    headers: {
      Authorization: getAuthToken()
    }
  });
  return response;
};
