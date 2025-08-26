'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { ISearchSchema, searchSchema } from '~schemas/search';
import TextField from '~stories/ui/inputs/texts/TextField';

const BarSearch = () => {
	const router = useRouter();
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

	const onSubmit = async (data: ISearchSchema) => {
		const { keyword } = data;
		router.push(`/search?keyword=${keyword}`);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Controller
				name='keyword'
				control={control}
				render={({ field }) => (
					<TextField
						{...field}
						label='검색'
						error={!!errors.keyword}
						helperText={errors.keyword?.message}
						disabled={isSubmitting}
					/>
				)}
			/>
		</form>
	);
};

export default BarSearch;
