import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { COLORS_SWITCH, SIZES_SWITCH } from '~src/consts/ui/input';
import Switch from '~stories/ui/inputs/switchs/Switch';

const meta = {
	title: 'UI/Inputs/Switch',
	component: Switch,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		value: {
			control: 'text',
			description: '값',
		},
		color: {
			control: 'select',
			options: COLORS_SWITCH,
			description: '색상',
		},
		size: {
			control: 'select',
			options: SIZES_SWITCH,
			description: '크기',
		},
		disabled: {
			control: 'radio',
			options: [true, false],
			description: '활성화 여부',
		},
		onChange: {
			description: '이벤트 콜백',
		},
	},
	args: {
		value: '',
		color: 'primary',
		size: 'medium',
		disabled: false,
		onChange: fn(),
	},
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Medium: Story = {
	args: {
		color: 'primary',
		size: 'medium',
	},
};

export const Small: Story = {
	args: {
		color: 'primary',
		size: 'small',
	},
};
