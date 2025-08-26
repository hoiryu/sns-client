import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useCallback } from 'react';
import { useArgs } from 'storybook/internal/preview-api';
import { fn } from 'storybook/test';
import Button from '~stories/ui/buttons/Button';
import Modal, { sizes } from '~stories/ui/modals/Modal';

const meta = {
	title: 'UI/Modals/Modal',
	component: Modal,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		open: {
			control: 'boolean',
			options: [true, false],
			description: '활성화 여부',
		},
		size: {
			control: 'select',
			options: sizes,
			description: '크기',
		},
		disablePortal: {
			control: 'boolean',
			options: [true, false],
			description: 'SSR 여부',
		},
		onClose: {
			description: '비활성화 콜백',
		},
	},
	args: {
		open: false,
		size: 'medium',
		disablePortal: false,
		children: <p>contents</p>,
		onClose: fn(),
	},
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Controlled: StoryObj<typeof Modal> = {
	render: args => {
		const [{ open }, updateArgs] = useArgs();

		const handleOpen = useCallback(() => updateArgs({ open: true }), []);
		const handleClose = useCallback(() => updateArgs({ open: false }), []);

		return (
			<>
				<Button onClick={handleOpen} children='open' />
				<Modal {...args} open={open} onClose={handleClose} />
			</>
		);
	},
};
