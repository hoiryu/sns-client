import { MenuItemProps, MenuProps } from '@mui/material';
import { LinkProps } from 'next/link';

export type TMenuItemProps = MenuItemProps & Partial<LinkProps>;

export type TMenuProps = MenuProps & Partial<LinkProps>;
