import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import Button, { colors, sizes, variants } from '~stories/ui/buttons/Button';

const meta = {
	title: 'UI/Buttons/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		children: {
			control: 'text',
			description: '텍스트 or 리액트노드',
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
		onClick: {
			description: '이벤트 콜백',
		},
	},
	args: {
		color: 'primary',
		variant: 'contained',
		size: 'medium',
		children: 'Button',
		onClick: fn(),
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Large: Story = {
	args: {
		color: 'primary',
		size: 'large',
		children: 'Button',
	},
};

export const Medium: Story = {
	args: {
		color: 'primary',
		size: 'medium',
		children: 'Button',
	},
};

export const Small: Story = {
	args: {
		color: 'primary',
		size: 'small',
		children: 'Button',
	},
};
