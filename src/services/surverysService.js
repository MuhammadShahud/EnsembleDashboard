import axios from './base-api';
import requests from './requests';

export const getMetricsData = async (data) => {
  const response = await axios.get(requests.GET_FIXED_SURVEYS);
  return response;
};

export const getAnnouncementsData = async (params) => {
  const response = await axios.get(
    `${requests.GET_NOTI}/?companyId=${params.companyId}&type=${params.type}`
  );
  return response;
};

export const postAnnouncement = async (data) => {
  try {
    const response = await axios.post(requests.POST_NOTI, data);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const postMetric = async (data) => {
  console.log({ data }, 'post metric data');
  try {
    const response = await axios.post(requests.POST_METRIC, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getSurveysDashboardData = async (companyId) => {
  // console.log('api called', companyId)
  const response = await axios.get(
    `${requests.GET_SURVEY_DATA}?companyId=${companyId}`
  );
  return response;
};
