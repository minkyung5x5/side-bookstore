const BASE_API_URL = '/api/notion';

export const apiClient = async (method: string, data?: Record<string, any>) => {
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(BASE_API_URL, options);
  return response.json();
};