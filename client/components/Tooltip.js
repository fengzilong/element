import './Tooltip.less';

export default Regular.extend( {
	template: `
		<div data-balloon="{ content }" data-balloon-pos="up">
			{#inc this.$body}
		</div>
	`,
} );
