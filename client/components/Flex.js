export default Regular.extend( {
	template: `
		<div style="display: flex;width: { width ? width : '100%' };height: 100%;{ vertical ? 'flex-direction: column;' : '' } { auto ? 'flex: 1;' : '' }">
			{#inc this.$body}
		</div>
	`,
} );
