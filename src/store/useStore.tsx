import {create} from 'zustand';

const useStore = create(set => ({
  accessToken: null,
  setAccessToken: (token: any) => set({accessToken: token}),
}));

export default useStore;
