import { http } from 'msw';

export const handlers = [
  http.get('/post', () => {
    console.log("Caputred a 'GET /posts' requesst");
  }),
];
