'use client';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { MouseEvent, useMemo, useState } from 'react';
import SwitchTheme from '~components/header/SwitchTheme';
import userService from '~services/userService';
import ButtonIcon from '~stories/ui/buttons/ButtonIcon';
import Box from '~stories/ui/containers/Box';
import IconDarkMode from '~stories/ui/icons/IconDarkMode';
import IconLogout from '~stories/ui/icons/IconLogout';
import IconPerson from '~stories/ui/icons/IconPerson';
import Menu from '~stories/ui/menus/Menu';
import MenuItem from '~stories/ui/menus/MenuItem';
import Avatar from '~stories/ui/profiles/Avatar';
import Tooltip from '~stories/ui/tooltips/Tooltip';
import Typography from '~stories/ui/typographys/Typography';
import { cn } from '~utils/cn';

const MemuAccount = () => {
	const { data: session } = userService.getMe();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = useMemo(() => Boolean(anchorEl), [anchorEl]);
	const handleClick = (e: MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
	const handleClose = () => setAnchorEl(null);
	const handleLogout = () => signOut({ callbackUrl: '/' });

	return (
		<>
			<Tooltip
				title='프로필 설정'
				children={
					<ButtonIcon
						size='small'
						aria-controls='프로필 메뉴'
						aria-haspopup='menu'
						aria-expanded={open}
						children={<Avatar src={session?.user?.image || undefined} />}
						onClick={handleClick}
					/>
				}
			/>

			<Menu
				component='section'
				anchorEl={anchorEl}
				open={open}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
				onClose={handleClose}
			>
				<Typography
					className={cn('flex items-center px-3 py-2 text-sm')}
					children={session?.user?.nickname}
				/>

				<MenuItem
					className={cn('justify-center')}
					disableRipple
					disableTouchRipple
					children={
						<Box
							className={cn('flex items-center gap-2')}
							children={
								<>
									<IconDarkMode fontSize='small' />
									<Typography className={cn('text-sm')} children='모드' />
									<SwitchTheme />
								</>
							}
						/>
					}
				/>
				<MenuItem
					component={Link}
					href={`/${session?.user?.nickname}`}
					className={cn('gap-2')}
					onClick={handleClose}
					children={
						<>
							<IconPerson fontSize='small' />
							<Typography className={cn('text-sm')} children='프로필' />
						</>
					}
				/>
				<MenuItem
					className={cn('gap-2 border-t border-neutral-400')}
					onClick={handleLogout}
					children={
						<>
							<IconLogout fontSize='small' />
							<Typography className={cn('text-sm')} children='로그아웃' />
						</>
					}
				/>
			</Menu>
		</>
	);
};

export default MemuAccount;
