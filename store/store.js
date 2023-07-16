import create from "zustand"

const useLoginStore = create((set) => ({
  isLoggedIn: 0,
  user: '',
  accesstoken: '',
  setLogin: () => set((state) => ({ isLoggedIn: state.isLoggedIn + 1 })),
  setUser: (username) => set((state) => ({ user: username })),
  setAccessToken: (accessToken) => set((state) => ({ accesstoken: accessToken })),
  setLogout: () => set({ isLoggedIn: 0, user: '', accessToken: '' }),
}))

export default useLoginStore;