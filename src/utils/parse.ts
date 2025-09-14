/**
 * String To Null
 */
export const parseNullish = (str: string | null | undefined): string | null => {
	if (!str || str === 'null' || str === 'undefined') return null;
	return str;
};
