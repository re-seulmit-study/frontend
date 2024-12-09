import { create } from "zustand";

// create() : 상태와 상태 변경 로직을 정의하는 객체를 반환
// set(): zustand 스토어 상태를 변경

// 1. useAuthStore함수에 create()매서드로 상태변환 로직 정의
const useGetCustomerData = create((set) => ({
  userId: "",
  setUserId: (userId) => set({ userId }),
  pwd: "",
  setPwd: (pwd) => {
    set({ pwd: pwd });
  },
  userName: "",
  setUserName: (userName) => set({ userName }),
  email: "",
  setEmail: (email) => set({ email }),
  resetAuthState: () => set({ userId: "", pwd: "", userName: "", email: "" }),
}));



export { useGetCustomerData,};
// 집주소 추가
