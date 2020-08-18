const API_ROOT = 'http://localhost:8000/api/v1';

export const APIUrls = {
  signin: () => `${API_ROOT}/auth/create-session`,
  signup: () => `${API_ROOT}/users/create-user`,
};
