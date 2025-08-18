'use client';
import { signOut } from 'next-auth/react';
import { useCallback } from 'react';
import Button from '~/stories/ui/buttons/Button';

const ButtonLogOut = () => {
	const handleClick = useCallback(() => signOut({ callbackUrl: '/' }), []);

	return <Button children='로그아웃' onClick={handleClick} />;
};

export default ButtonLogOut;
