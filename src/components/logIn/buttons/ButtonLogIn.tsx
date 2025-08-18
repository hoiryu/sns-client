'use client';
import { signIn } from 'next-auth/react';
import { useCallback } from 'react';
import Button from '~/stories/ui/buttons/Button';

const ButtonLogIn = () => {
	const handleClick = useCallback(() => signIn('google'), []);

	return <Button children='로그인' onClick={handleClick} />;
};

export default ButtonLogIn;
