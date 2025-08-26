import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import TextField, { colors, sizes, variants } from '~stories/ui/inputs/texts/TextField';

const meta = {
	title: 'UI/Inputs/Text',
	component: TextField,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		label: {
			control: 'text',
			description: '라벨',
		},
		variant: {
			control: 'select',
			options: variants,
			description: '종류',
		},
		color: {
			control: 'select',
			options: colors,
			description: '색상',
		},
		size: {
			control: 'select',
			options: sizes,
			description: '크기',
		},
		required: {
			control: 'radio',
			options: [true, false],
			description: '필수 여부',
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
		onDurationChange: {
			description: '이벤트 콜백',
		},
	},
	args: {
		label: 'Label',
		variant: 'outlined',
		color: 'primary',
		size: 'medium',
		required: false,
		disabled: false,
		error: false,
		helperText: '텍스트를 입력해주세요.',
		onDurationChange: fn(),
	},
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Medium: Story = {
	args: {
		label: 'Label',
		size: 'medium',
	},
};

export const Small: Story = {
	args: {
		label: 'Label',
		size: 'small',
	},
};
