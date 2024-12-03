import { create } from "zustand";
import bcrypt from "bcryptjs";

// create() : 상태와 상태 변경 로직을 정의하는 객체를 반환
// set(): zustand 스토어 상태를 변경

// 1. useAuthStore함수에 create()매서드로 상태변환 로직 정의
const useGetCustomerData = create((set) => ({
  userId: "",
  setUserId: (userId) => set({ userId }),
  pwd: "",
  setPwd: (pwd) => {
    // 비밀번호 해싱:
    // bcrypt.hashSync(원본 데이터, 해싱 강도);
    const hashedPwd = bcrypt.hashSync(pwd, 10);
    set({ pwd: hashedPwd });
  },
  userName: "",
  setUserName: (userName) => set({ userName }),
  email: "",
  setEmail: (email) => set({ email }),

  resetAuthState: () => set({ userId: "", pwd: "", userName: "", email: "" }),
}));

const getErroMsg = create(() => ({
  // 에러메세지
  errorMessage: "",
  setErrorMessage: (msg) => set({ errorMessage: msg }),
}));

export default useGetCustomerData;
