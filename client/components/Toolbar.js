import styles from './Toolbar.less';

console.log( styles );

export default Regular.extend( {
	template: `
		<div class="${ styles.base }">
			<div class="${ styles.item } iconfont" on-click="{ this.onPalette() }">&#xe664;</div>
		</div>
	`,
	onPalette() {
		this.$emit( 'palette' );
	},
} );
