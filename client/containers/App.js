import Sidebar from './Sidebar'
import Flex from '../components/Flex'

export default Regular.extend( {
	getters: {
	},
	template: `
		<Flex>
			<Sidebar></Sidebar>

			<Flex auto>
				<div style="padding: 20px;">
					content
				</div>
			</Flex>
		</Flex>
	`,
} )
.component( {
	Sidebar,
	Flex,
} )
