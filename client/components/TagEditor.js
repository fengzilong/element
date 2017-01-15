import './TagEditor.less';
import Flex from './Flex';

export default Regular.extend( {
	template: `
		<Flex vertical>
			<Input placeholder="width"></Input>

			<Input placeholder="height"></Input>

			<RadioGroup checked="0">
				<RadioButton value="0">启用</RadioButton>
				<RadioButton value="1">不启用</RadioButton>
			</RadioGroup>

			<Button primary>应用</Button>
		</Flex>
	`,
} )
.component( {
	Flex,
} );
