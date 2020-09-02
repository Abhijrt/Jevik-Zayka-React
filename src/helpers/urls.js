// const API_ROOT = 'http://localhost:8000/api/v1';
const API_ROOT = 'https://jevik-zayka.herokuapp.com/api/v1';

export const APIUrls = {
  signin: () => `${API_ROOT}/auth/create-session`,
  signup: () => `${API_ROOT}/users/create-user`,
  sendVerificationMailURL: () => `${API_ROOT}/verify-email/send-mail`,
  verifyAccountURL: (token) => `${API_ROOT}/verify-email/verify/${token}`,
  fetchProducts: () => `${API_ROOT}/products/get-products`,
};
