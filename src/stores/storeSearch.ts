import { create } from 'zustand';

export type TTabsValueCategorySearch = '' | 'popular' | 'live';

interface IStore {
	category: TTabsValueCategorySearch;
	setCategory: (category: TTabsValueCategorySearch) => void;
}

export const useStoreCategorySearch = create<IStore>()(set => ({
	category: '',
	setCategory: category => set({ category }),
}));
