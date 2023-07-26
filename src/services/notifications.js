import axios from './base-api';
import requests from './requests';


export const getNotificationsData = async (companyID) => {
    const response = await axios.get(
    //   `${requests.GET_NOTI}/?companyId=${params.companyId}&limit=20`
    `${requests.GET_WEB_NOTI}/?companyId=${companyID}&limit=20`
    );
    return response;
};

export const updateCompanyInfo= async (data, companyID)=>{
  try {
    const response = await axios.patch(requests.COMPANY_INFO+companyID, data);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}