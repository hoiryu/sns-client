'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { ISearchSchema, searchSchema } from '~/schemas/search';
import TextField from '~/stories/ui/inputs/TextField';

const BarSearch = () => {
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
		await new Promise(resolve => setTimeout(resolve, 2000));

		alert(JSON.stringify(data, null, 2));
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
