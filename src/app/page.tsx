import Main from '~/components/common/containers/Main';
import Header from '~/components/common/header/Header';
import ButtonLogIn from '~/components/logIn/buttons/ButtonLogIn';
import ButtonLogOut from '~/components/logIn/buttons/ButtonLogOut';

const Page = () => {
	return (
		<Main>
			<Header />
			<ButtonLogIn />
			<ButtonLogOut />
		</Main>
	);
};

export default Page;
