import { create } from 'zustand';

export type TTabsMainValue = 'recommended' | 'following';

interface IStore {
	value: TTabsMainValue;
	setValue: (value: TTabsMainValue) => void;
}

export const useStoreTabsMain = create<IStore>()(set => ({
	value: 'recommended',
	setValue: value => set({ value }),
}));
