import { Reservation } from '@/type/reservation';
import { apiClient } from '../apiClient';

export const writeToNotion = async (values: Reservation) => {
  return apiClient('POST', values);
};
