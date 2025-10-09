import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { COLORS } from '~src/consts/ui/input';
import FileField from '~stories/ui/inputs/files/FileField';

const meta = {
	title: 'UI/Inputs/File',
	component: FileField,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
	argTypes: {
		accept: {
			control: 'select',
			options: ['image', 'pdf', 'all'],
			mapping: {
				image: { 'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp'] },
				pdf: { 'application/pdf': [] },
				all: undefined,
			},
		},
		maxSize: {
			control: 'number',
			description: '최대 파일 크기 (bytes)',
		},
		maxFiles: {
			control: 'number',
			description: '최대 업로드 파일 개수',
		},
		color: {
			control: 'select',
			options: COLORS,
			description: '색상',
		},
		disabled: {
			control: 'radio',
			options: [true, false],
			description: '활성화 여부',
		},
		onDrop: {
			description: '이벤트 콜백',
		},
	},
	args: {
		accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp'] },
		maxSize: 1 * 1024 * 1024,
		maxFiles: 3,
		color: 'primary',
		disabled: false,
	},
} satisfies Meta<typeof FileField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		color: 'primary',
		disabled: false,
	},
};
