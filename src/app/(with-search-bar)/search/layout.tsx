import { ReactNode } from 'react';

interface IProps {
	children: ReactNode;
}

const Layout = ({ children }: IProps) => (
	<div>
		<p>임시 search bar</p>
		{children}
	</div>
);

export default Layout;
