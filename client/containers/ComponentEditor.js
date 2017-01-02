import Flex from '../components/Flex';
import TagEditor from '../components/TagEditor';
import LayoutEditor from '../components/LayoutEditor';

export default Regular.extend( {
	template: `
		<TagEditor></TagEditor>
	`,
} )
.component( {
	Flex,
	TagEditor,
	LayoutEditor,
} );
