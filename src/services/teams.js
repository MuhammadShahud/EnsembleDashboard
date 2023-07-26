import axios from './base-api';
import requests from './requests';

export const createTeam = async (data) => {
    const response = await axios.post(requests.CREATE_TEAM, data);
    return response;
  };
  export const getTeamInfoById = async (id) => {
    const response = await axios.get(requests.GET_TEAM_INFO + id);
    return response;
  };
  export const deleteTeam = async (id) => {
    const response = await axios.delete(requests.DELETE_TEAM + id);
    return response;
  };
  export const updateTeam = async (id, data) => {
    const response = await axios.patch(requests.UPDATE_TEAM + id, data);
    return response;
  };