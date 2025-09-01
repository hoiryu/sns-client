import { ButtonProps, IconButtonProps } from '@mui/material';
import { LinkProps } from 'next/link';

export type TButtonProps = ButtonProps & Partial<LinkProps>;

export type TButtonIconProps = IconButtonProps & Partial<LinkProps>;
