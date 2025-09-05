import { create } from 'zustand';

export type ITabsValueSearch = 'popular' | 'live';

interface IStore {
	value: ITabsValueSearch;
	setValue: (value: ITabsValueSearch) => void;
}

export const useStoreSearch = create<IStore>()(set => ({
	value: 'popular',
	setValue: value => set({ value }),
}));
