declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

export default function Signup() {
  function handleKakaoLogin() {
    /* eslint-disable @typescript-eslint/no-unsafe-call */
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    window.Kakao.Auth.authorize({
      redirectUri: `${window.location.origin}/kakao/oauth`,
    });
  }

  return (
    <div>
      <h1>Signup</h1>
      <button onClick={handleKakaoLogin}>카카오로 로그인하기</button>
    </div>
  );
}
