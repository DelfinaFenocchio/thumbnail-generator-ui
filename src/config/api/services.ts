import apiClient from './index';

export const generateThumbnails = async (payload) => {
  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
  };
  const { data } = await apiClient.post('/images', payload, config);
  return data.urls;
};
