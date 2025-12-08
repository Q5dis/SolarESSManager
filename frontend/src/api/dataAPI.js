import { apiClient } from './client';

export const dataAPI = {
  getLatest: () => apiClient.get('/api/data/latest'),
};
