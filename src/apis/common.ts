import httpClient from '~networks/http';

/**
 * Images 생성하기
 */
export const postImages = async (formData: FormData) => {
	return httpClient.fetch<{ files: string[] }>('/common/images', {
		method: 'POST',
		body: formData,
	});
};
