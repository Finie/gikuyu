import EncryptionStore from 'src/data/EncryptionStore';
import apiClient from '../client/ApiClient';

const findMyMatches = (data: {page: number; pagesize: number}) => {
  return apiClient.get(
    `/api/match?page=${data.page}&pageSize=${data.pagesize}`,
  );
};

const getCurrentAccounts = () => {
  return apiClient.get(`/api/user/me`);
};

const exploreMatches = (data: { ageRange: any; distanceRange: any; page: any; pageSize: any; }) => {
  const {ageRange, distanceRange, page, pageSize} = data;
  return apiClient.get(
    `/api/user/explore?ageRange=${ageRange}&distanceRange=${distanceRange}&page=${page}&pageSize=${pageSize}`,
  );
};

const postaMatchedUser = (data: {username: string; status: string}) => {
  return apiClient.post(`/api/swipe`, data);
};

export default {
  findMyMatches,
  getCurrentAccounts,
  exploreMatches,
  postaMatchedUser,
};
