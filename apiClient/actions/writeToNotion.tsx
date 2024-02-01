import { apiClient } from '../apiClient';

export const writeToNotion = async (title: string, content: string) => {
  return apiClient('POST', { title, content });
};
