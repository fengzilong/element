import styles from './Palette.less';
import Tooltip from './Tooltip';

// TODO: tooltip

export default Regular.extend( {
	template: `
		<div class="${ styles.base }">
			{#list colors as color}
				<Tooltip content="{ color }">
					<div
						class="${ styles.color }"
						style="background-color: { color };"
						on-click="{ this.onSelect( color ) }"
					></div>
				</Tooltip>
			{/list}
		</div>
	`,
	onSelect( color ) {
		this.$emit( 'select', color );
	},
} )
.component( {
	Tooltip,
} );
