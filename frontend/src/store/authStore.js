import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));


const handleLoginSuccess = (userInfo) => {
    const { setUser } = useAuthStore();
    setUser(userInfo);
}

export { useAuthStore, handleLoginSuccess };