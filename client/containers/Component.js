import Flex from '../components/Flex';
import ComponentPreview from './ComponentPreview';
import ComponentEditor from './ComponentEditor';

export default Regular.extend( {
	template: `
		<Flex>
			<Flex auto>
				<ComponentPreview></ComponentPreview>
			</Flex>
			<Flex width="260px">
				<div style="padding: 15px;width: 100%;border-left: solid 1px #f2f2f2">
					<ComponentEditor></ComponentEditor>
				</div>
			</Flex>
		</Flex>
	`,
} )
.component( {
	Flex,
	ComponentPreview,
	ComponentEditor,
} );
