// 슬밋pj -  로그인 페이지///
import {useGetCustomerData} from "../../store/customerStore";
import {useGetErrorMsg} from "../../store/getErrorStore";
import KakaoLoginButton from "../atoms/KakaoLoginButton";

/////import area///////////////////////////////////////////////

export default function Login() {
  // zustand useGetCustomerData 상태관리자 import
  const { userId, setUserId, pwd, setPwd } = useGetCustomerData();
  const { errorMessage, setErrorMessage, resetErrorMessage } = useGetErrorMsg();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId, // zustand에서 관리 중인 userId
          password: pwd, // zustand에서 관리 중인 pwd
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("로그인 성공:", data);
        resetErrorMessage(); // 에러 메시지 초기화
      } else {
        const errorData = await response.json();
        console.error("로그인 실패:", errorData.message);
        setErrorMessage(errorData.message); // 에러 메시지 설정
      }
    } catch (error) {
      console.error("로그인 요청 중 오류 발생:", error);
      setErrorMessage("서버에 문제가 발생했습니다. 다시 시도해주세요."); // 예외 에러 처리
    }
  };

  //// 코드 리턴구역 //////////////
  return (
    <>
      <div>
        <KakaoLoginButton />
        <div>
          <div>
            <label>
              아이디:
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </label>
            <label>
              비밀번호:
              <input
                type="password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
            </label>
          </div>
          <button onClick={handleLogin}>로그인</button>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
      </div>
    </>
  );
}
