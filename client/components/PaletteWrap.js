import styles from './PaletteWrap.less';

export default Regular.extend( {
	template: `
		<div class="${ styles.base }">
			{#inc this.$body}
		</div>
	`,
} );
