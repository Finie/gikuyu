import apiClient from '../client/ApiClient';

const getEthnicGroups = () => {
  return apiClient.get(`/api/app/profile/ethnic-group/`);
};

const getListOfethnicGroups = (id: number) => {
  return apiClient.get(`/api/app/profile/ethnicity/${id}`);
};

export default {
  getEthnicGroups,
  getListOfethnicGroups,
};
