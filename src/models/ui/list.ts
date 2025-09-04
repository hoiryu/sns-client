import { ListItemButtonProps, ListItemProps } from '@mui/material';
import { LinkProps } from 'next/link';

/**
 * ListItem
 */
export type IListItemProps = ListItemProps & Partial<LinkProps>;

/**
 * ListItemButton
 */
export type IListItemButtonProps = ListItemButtonProps & Partial<LinkProps>;
