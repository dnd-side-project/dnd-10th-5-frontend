/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import axios from 'axios';
import { stringify } from 'qs';
import { useQueryString } from '@/hooks';

export default function KakaoOAuth() {
  const query = useQueryString();

  async function handleGetTokenInfo() {
    const params = stringify({
      grant_type: 'authorization_code',
      client_id: import.meta.env.VITE_API_KAKAO_REST_API_KEY,
      redirect_uri: window.location.href.split('?')[0],
      code: query.get('code'),
    });

    const { data } = await axios.post(
      `https://kauth.kakao.com/oauth/token?${params}`,
    );

    window.Kakao.Auth.setAccessToken(data.access_token);
  }

  async function handleGetKakaoInfo() {
    const data = await window.Kakao.API.request({
      url: '/v2/user/me',
    });

    alert(JSON.stringify(data));
  }

  return (
    <h1>
      카카오 로그인 리다이렉트 페이지
      <p>code: {query.get('code')}</p>
      <button onClick={() => void handleGetTokenInfo()}>
        토근 정보 가져오기
      </button>
      <button onClick={() => void handleGetKakaoInfo()}>
        정보 가져오기(토큰 가져온 후 실행)
      </button>
    </h1>
  );
}
