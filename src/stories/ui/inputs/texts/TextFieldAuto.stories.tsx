import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { debounce } from 'lodash';
import { SyntheticEvent, useMemo, useState } from 'react';
import { fn } from 'storybook/test';
import { COLORS_TEXT_FIELD, SIZES_TEXT_FIELD, VARIANTS_TEXT_FIELD } from '~constants/ui/input';
import TextFieldAuto from '~stories/ui/inputs/texts/TextFieldAuto';

const meta = {
	title: 'UI/Inputs/AutoText',
	component: TextFieldAuto,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
	argTypes: {
		inputProps: {
			control: 'object',
			variant: {
				control: 'select',
				options: VARIANTS_TEXT_FIELD,
				description: '종류',
			},
			color: {
				control: 'select',
				options: COLORS_TEXT_FIELD,
				description: '색상',
			},
			required: {
				control: 'radio',
				options: [true, false],
				description: '필수 여부',
			},
			size: {
				control: 'select',
				options: SIZES_TEXT_FIELD,
				description: '크기',
			},
			disabled: {
				control: 'radio',
				options: [true, false],
				description: '활성화 여부',
			},
			error: {
				control: 'radio',
				options: [true, false],
				description: '에러 상태',
			},
			helperText: {
				control: 'text',
				description: 'Validation 문구',
			},
		},
		options: {
			control: 'object',
			description: '자동완성 옵션',
		},
		freeSolo: {
			control: 'radio',
			options: [true, false],
			description: '자유 입력 여부',
		},
	},
	args: {
		inputProps: {
			variant: 'outlined',
			color: 'primary',
			size: 'medium',
			required: false,
			disabled: false,
			error: false,
			helperText: '텍스트를 입력해주세요.',
		},
		freeSolo: true,
		onDurationChange: fn(),
	},
} satisfies Meta<typeof TextFieldAuto>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DynamicAutocomplete: Story = {
	args: {
		inputProps: {
			variant: 'outlined',
			color: 'primary',
			size: 'medium',
			required: false,
			disabled: false,
			error: false,
			helperText: '텍스트를 입력해주세요.',
		},
		selectOnFocus: true,
		options: [],
	},
	render: initialArgs => {
		const [options, setOptions] = useState<string[]>(
			Array.isArray(initialArgs.options) ? initialArgs.options : [],
		);

		const handleInputChange = useMemo(
			() =>
				debounce((e: SyntheticEvent, value: string) => {
					if (value && !options.includes(value)) {
						setOptions(prev => {
							if (prev.length < 5) return [...prev, value];
							return [...prev.slice(1), value];
						});
					}
				}, 1000),
			[options],
		);

		return (
			<TextFieldAuto {...initialArgs} options={options} onInputChange={handleInputChange} />
		);
	},
};
