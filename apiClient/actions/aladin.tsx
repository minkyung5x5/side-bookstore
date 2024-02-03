import { aladinApiClient } from '../apiClient';

export const getFromAladin = async (data: {query: string}) => {
    return aladinApiClient('GET', data);
  };
