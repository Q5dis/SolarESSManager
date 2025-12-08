import { apiClient } from './client';

export const energyAPI = {
  getOptimal: () => apiClient.get('/api/energy/optimal'),
  getPredicted: () => apiClient.get('/api/energy/predicted'),
};
