import React, { useEffect } from "react";

const AuthCallback = () => {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    console.log("Authorization Code:", code);
  }, []);

  return <div>카카오 로그인 처리 중...</div>;
};

export default AuthCallback;
