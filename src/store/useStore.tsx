import {create} from 'zustand';

type StoreType = {
  accessToken: any;
  setAccessToken: (data: any) => void;
};
const useStore = create<StoreType>(set => ({
  accessToken: null,
  setAccessToken: (token: any) => set({accessToken: token}),
}));

export default useStore;
