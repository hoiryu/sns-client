import { zodResolver } from '@hookform/resolvers/zod';
import { debounce } from 'lodash';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ISearchSchema, searchSchema } from '~schemas/search';
import TextFieldAuto from '~stories/ui/inputs/texts/TextFieldAuto';

const TextFieldSearch = () => {
	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<ISearchSchema>({
		resolver: zodResolver(searchSchema),
		defaultValues: {
			keyword: '',
		},
		mode: 'onChange',
	});
	const [options, setOptions] = useState<string[]>([]);
	const router = useRouter();

	const onSubmit = useMemo(
		() =>
			debounce((data: ISearchSchema) => {
				const { keyword } = data;

				if (!options.includes(keyword)) {
					setOptions(prev => {
						if (prev.length < 5) return [...prev, keyword];
						return [...prev.slice(1), keyword];
					});
				}
			}, 500),
		[options],
	);

	useEffect(() => () => onSubmit.cancel(), [onSubmit]);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Controller
				name='keyword'
				control={control}
				render={({ field }) => {
					return (
						<TextFieldAuto
							freeSolo
							inputProps={{
								...field,
								error: !!errors.keyword,
								helperText: errors.keyword?.message,
								disabled: isSubmitting,
							}}
							options={options}
						/>
					);
				}}
			/>
		</form>
	);
};

export default TextFieldSearch;
