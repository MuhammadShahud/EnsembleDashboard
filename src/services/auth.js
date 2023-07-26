import { getAuthToken, getIdFromLocalStorage } from '../utils/utils';
import axios from './base-api';
import requests from './requests';

// Auth Request
export const register = async (data) => {
  const response = await axios.post(requests.REGISTER_URL, data);
  return response;
};
export const login = async (data) => {
  const response = await axios.post(requests.AUTH_URL, data);
  return response;
};
export const forgetPasswordRequest = async (data) => {
  const response = await axios.post(requests.FORGET_PASSWORD_URL, data);
  return response;
};
export const verifyCodeRequest = async (data) => {
  const response = await axios.post(requests.VERIFY_CODE_URL, data);
  return response;
};
export const resetPasswordRequest = async (data) => {
  const response = await axios.post(requests.CHANGE_PASSWORD_URL, data);
  return response;
};
export const registerEmployee = async (data) => {
  const response = await axios.post(requests.SIGNUP_EMPLOYEE, data);
  return response;
};


