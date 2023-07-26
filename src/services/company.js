import {  getIdFromLocalStorage } from '../utils/utils';
import axios from './base-api';
import requests from './requests';

export const getCompanyInfoById = async (id) => {
    const response = await axios.get(requests.GET_COMPANY_INFO + id);
    return response;
  };
  export const companyInfoReducer = async (data) => {
    const { ...finalData } = data;
  
    var config = {
      method: 'patch',
      url: requests.COMPANY_INFO + getIdFromLocalStorage(),
      data: finalData
    };
    return axios(config)
      .then(function (response) {
        return response;
      })
      .catch(function () {
        // console.log(error);
      });
  };
  
  export const companyLogoReducer = async (data) => {
    var config = {
      method: 'patch',
      url: requests.COMPANY_LOGO + getIdFromLocalStorage(),
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: data
    };
    return axios(config)
      .then(function (response) {
        return response;
      })
      .catch(function () {
        // console.log(error);
      });
  };
  