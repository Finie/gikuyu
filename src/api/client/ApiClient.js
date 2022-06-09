import {create} from 'apisauce';
import EncryptionStore from 'src/data/EncryptionStore';

const apiClient = create({
  baseURL: 'http://165.22.28.94',
  timeout: 30000,
  // timeoutErrorMessage: 'Sorry server took too long to respond',
});

apiClient.addAsyncRequestTransform(async () => {
  const token = await EncryptionStore.getUserToken();

  if (!token) return null;

  const token2 = token.replace(/^"(.*)"$/, '$1');

  // request.headers["Accept"] = "application/json";
  request.headers['Authorization'] = token2;
  // request.headers["Authorization"] = "Authorization " + token2;
}); //adding headers

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    //save incoming data to cache --future v2

    return response;
  }

  // the resonse was not successful return cached data -- future v2

  return response;
};

const post = apiClient.post;

apiClient.post = async (url, data, axiosConfig) => {
  const response = await post(url, data, axiosConfig);

  if (response.ok) {
    //hande cache saving --future -v2
    //meanwhile return the data
    return response;
  }

  // when an error occures handle the error and return ofline data

  return response;
};

const patch = apiClient.patch;

apiClient.patch = async (url, data, axiosConfig) => {
  const response = await patch(url, data, axiosConfig);

  if (response.ok) {
    //hande cache saving --future -v2
    //meanwhile return the data
    return response;
  }

  // when an error occures handle the error and return ofline data

  return response;
};

export default apiClient;
