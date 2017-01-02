import Titlebar from './Titlebar';
import Main from './Main';
import Toolbar from './Toolbar';
import Flex from '../components/Flex';

export default Regular.extend( {
	getters: {
	},
	template: `
		<Flex vertical>
			<Titlebar></Titlebar>

			<Flex auto>
				<Main></Main>
			</Flex>

			<Toolbar></Toolbar>
		</Flex>
	`,
} )
.component( {
	Titlebar,
	Main,
	Toolbar,
	Flex,
} );
