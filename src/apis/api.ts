import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_KAKAO_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}`,
  },
});
