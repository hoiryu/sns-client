import { create } from 'zustand';

export type ITabsValuePost = 'recommended' | 'following';

interface IStore {
	value: ITabsValuePost;
	setValue: (value: ITabsValuePost) => void;
}

export const storeTabsPost = create<IStore>()(set => ({
	value: 'recommended',
	setValue: value => set({ value }),
}));
