import './TagEditor.less';
import Flex from './Flex';

export default Regular.extend( {
	template: `
		<Flex vertical>
			<Input placeholder="width"></Input>
			<Input placeholder="height"></Input>
			<RadioGroup>
				<RadioButton>启用</RadioButton>
				<RadioButton>不启用</RadioButton>
			</RadioGroup>
			<Button>应用</Button>
		</Flex>
	`,
} )
.component( {
	Flex,
} );
