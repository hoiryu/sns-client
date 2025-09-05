'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { debounce } from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQueryString } from '~hooks/useQueryString';
import { ISearchSchema, searchSchema } from '~schemas/search';
import ControllerTextFieldAuto from '~stories/ui/inputs/texts/ControllerTextFieldAuto';

const FormSearch = () => {
	const {
		control,
		handleSubmit: zodSubmit,
		formState,
	} = useForm<ISearchSchema>({
		resolver: zodResolver(searchSchema),
		defaultValues: {
			keyword: '',
		},
		mode: 'onChange',
	});
	const [options, setOptions] = useState<string[]>([]);
	const { setQueryString } = useQueryString();

	const handleSubmit = useMemo(
		() =>
			debounce((data: ISearchSchema) => {
				const { keyword } = data;
				setQueryString({ keyword });

				if (!options.includes(keyword) && keyword) {
					setOptions(prev => {
						if (prev.length < 5) return [...prev, keyword];
						return [...prev.slice(1), keyword];
					});
				}
			}, 200),
		[options],
	);

	useEffect(() => () => handleSubmit.cancel(), [handleSubmit]);

	return (
		<form onSubmit={zodSubmit(handleSubmit)}>
			<ControllerTextFieldAuto
				name='keyword'
				control={control}
				formState={formState}
				fieldProps={{
					freeSolo: true,
					autoHighlight: false,
					autoFocus: false,
					autoComplete: false,
					autoSelect: false,
					options: options,
				}}
			/>
		</form>
	);
};

export default FormSearch;
