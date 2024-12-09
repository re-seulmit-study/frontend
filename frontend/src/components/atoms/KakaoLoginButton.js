import React from "react";
import { MainBtn } from "../../css/js/button";
const KakaoLoginButton = () => {
  const handleLogin = () => {
    window.Kakao.Auth.login({
      success: (authObj) => {
        console.log("카카오 로그인 성공!", authObj);
        fetchUserInfo(authObj.access_token); // 사용자 정보 요청
      },
      fail: (err) => {
        console.error("카카오 로그인 실패", err);
      },
    });
  };

  const fetchUserInfo = (token) => {
    window.Kakao.API.request({
      url: "/v2/user/me",
      success: (res) => {
        console.log("사용자 정보", res);
      },
      fail: (err) => {
        console.error("사용자 정보 요청 실패", err);
      },
    });
  };

  return <MainBtn bgcolor={"#FFE617"} onClick={handleLogin}>카카오로 로그인</MainBtn>;
};

export default KakaoLoginButton;
