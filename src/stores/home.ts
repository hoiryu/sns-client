import { create } from 'zustand';

export type ITabsValueHome = 'recommended' | 'following';

interface IStore {
	value: ITabsValueHome;
	setValue: (value: ITabsValueHome) => void;
}

export const useStoreHome = create<IStore>()(set => ({
	value: 'recommended',
	setValue: value => set({ value }),
}));
