import { create } from 'zustand';

export type TTabsValueCategoryHome = '' | 'recommended' | 'following';

interface IStore {
	category: TTabsValueCategoryHome;
	setCategory: (category: TTabsValueCategoryHome) => void;
}

export const useStoreCategoryHome = create<IStore>()(set => ({
	category: '',
	setCategory: category => set({ category }),
}));
