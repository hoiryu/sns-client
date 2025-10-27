import { useMemo } from 'react';
import { Control, FieldValues, Path, useWatch } from 'react-hook-form';

/**
 * 업로드된 이미지 프리뷰 훅
 */
export function usePreviews<T extends FieldValues>(control: Control<T>, name: Path<T>) {
	const images = useWatch({ control, name });

	const previews = useMemo<{ url: string; name: string }[]>(() => {
		if (images.length === 0) return [];
		return images.map((f: File) => ({ url: URL.createObjectURL(f), name: f.name }));
	}, [images]);

	return previews;
}
