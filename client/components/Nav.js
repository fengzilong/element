import styles from './Nav.less';

export default Regular.extend( {
	template: `
		<div class="${ styles.base }">
			{#list source as s}
				<div
					class="${ styles.item } { s === active ? 'active' : '' }"
					on-click="{ this.onNav( s ) }"
				>{ s }</div>
			{/list}
		</div>
	`,
	onNav( v ) {
		this.$emit( 'nav', v );
	},
} );
