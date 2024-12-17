import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'https://celebright.p-e.kr',
      changeOrigin: true,
      secure: false, // HTTPS 인증서 오류를 방지
    })
  );
}
