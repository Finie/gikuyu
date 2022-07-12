import {UserProfile} from 'src/utils/shared.types';
import apiClient from '../client/ApiClient';

const getEthnicGroups = () => {
  return apiClient.get(`/api/app/profile/ethnic-group/`);
};

const getListOfethnicGroups = (id: number) => {
  return apiClient.get(`/api/app/profile/ethnicity/${id}`);
};

const fetchOtherPersions = () => {
  return apiClient.get(`/api/app/profile/other`);
};

const fetchPassions = () => {
  return apiClient.get(`/api/app/profile/passion`);
};

const fetchLanguages = () => {
  return apiClient.get(`/api/app/profile/language`);
};

const createUser = (data: UserProfile) => {
  const config = {
    headers: {
      'App-ID': '1',
    },
  };
  return apiClient.post(`/auth/register`, data, config);
};

const loginUser = (data: {username: string; password: string}) => {
  const config = {
    headers: {
      'App-ID': '1',
    },
  };

  return apiClient.post(`/auth/login`, data, config);
};

const updatePassword = (data: {username: string}) => {
  return apiClient.put(`/auth/forgot-password`, data);
};

export default {
  getEthnicGroups,
  getListOfethnicGroups,
  fetchOtherPersions,
  fetchPassions,
  fetchLanguages,
  createUser,
  loginUser,
  updatePassword,
};
