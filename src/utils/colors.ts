import { formatRgb } from 'culori';

/**
 * Color 변환
 * 모든 Color 형식을 rgb 로 변환
 */
export const formatColor = (s: string) => formatRgb(s) as string;
