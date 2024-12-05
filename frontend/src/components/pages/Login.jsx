// 슬밋pj -  로그인 페이지///


/////import area///////////////////////////////////////////////

export default function Login() {
// zustand useAuthStore 상태관리자 import
const { userId, setUserId, pwd, setPwd } = useAuthStore();
const { errorMessage, setErrorMessage, resetErrorMessage } = useGetErrorMsg();

const handleLogin = async () => {
try {
await someLoginApiCall(); // 가상 API 호출
resetErrorMessage(); // 에러 메시지 초기화
} catch (error) {
setErrorMessage("loginFailed"); // 에러 메시지 설정
}
};

  //// 코드 리턴구역 //////////////
  return (
    <>
    <div>
      <button onClick={handleLogin}>로그인</button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
    </>
  );
} 