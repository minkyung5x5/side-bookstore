import { notionApiClient } from '../apiClient';
import { Reservation } from '@/type/reservation';

export const getFromNotion = async () => {
  return notionApiClient('GET');
};

export const postToNotion = async (values: Reservation) => {
  return notionApiClient('POST', values);
};
