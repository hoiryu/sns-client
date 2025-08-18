import ButtonLogIn from '~/components/logIn/buttons/ButtonLogIn';
import ButtonLogOut from '~/components/logIn/buttons/ButtonLogOut';
import ThemeProvider from '~/themes/ThemeProvider';

const Page = () => {
	return (
		<ThemeProvider>
			<div>
				<ButtonLogIn />
				<ButtonLogOut />
			</div>
		</ThemeProvider>
	);
};

export default Page;
