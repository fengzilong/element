import Flex from '../components/Flex';
import ComponentPreview from './ComponentPreview';
import ComponentEditor from './ComponentEditor';

export default Regular.extend( {
	template: `
		<Flex>
			<Flex auto>
				<ComponentPreview></ComponentPreview>
			</Flex>
			<Flex width="290px">
				<ComponentEditor></ComponentEditor>
			</Flex>
		</Flex>
	`,
} )
.component( {
	Flex,
	ComponentPreview,
	ComponentEditor,
} );
