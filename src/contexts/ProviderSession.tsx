import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

interface IProps {
	children: ReactNode;
}

/**
 * Auth.js useSession 용 Provider
 */
const ProviderSession = ({ children }: Readonly<IProps>) => <SessionProvider children={children} />;

export default ProviderSession;
