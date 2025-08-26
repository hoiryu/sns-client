import { ReactNode } from 'react';

interface IProps {
	readonly children: ReactNode;
}

const Layout = ({ children }: IProps) => {
	return <div>{children}</div>;
};

export default Layout;
