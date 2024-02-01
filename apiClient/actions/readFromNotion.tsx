import { apiClient } from '../apiClient';

export const readFromNotion = async () => {
  return apiClient('GET');
};