import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { colors } from '~/constants/colors';
import { sizes } from '~/constants/sizes';
import { variants } from '~/constants/variants';
import { Button } from '~/stories/ui/buttons/Button';

const meta = {
	title: 'UI/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		color: {
			control: 'select',
			options: colors,
			description: '색상',
		},
		variant: {
			control: 'select',
			options: variants,
			description: '종류',
		},
		size: {
			control: 'select',
			options: sizes,
			description: '크기',
		},
		children: {
			control: 'text',
			description: '텍스트 or 리액트노드',
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

export const Primary: Story = {
	args: {
		color: 'primary',
		children: 'Button',
	},
};
