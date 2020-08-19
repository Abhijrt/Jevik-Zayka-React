const API_ROOT = 'https://jevik-zayka.herokuapp.com/api/v1';

export const APIUrls = {
  signin: () => `${API_ROOT}/auth/create-session`,
  signup: () => `${API_ROOT}/users/create-user`,
};
