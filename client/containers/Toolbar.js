import Toolbar from '../components/Toolbar';
import PaletteWrap from '../components/PaletteWrap';
import Palette from '../components/Palette';

export default Regular.extend( {
	getters: {
		showPalette: 'showPalette',
		paletteColors: 'paletteColors',
	},
	template: `
		{#if showPalette}
			<PaletteWrap>
				<Palette colors="{ paletteColors }"></Palette>
			</PaletteWrap>
		{/if}

		<Toolbar
			on-palette="{ this.dispatch( 'togglePalette' ) }"
		></Toolbar>
	`,
} )
.component( {
	PaletteWrap,
	Palette,
	Toolbar,
} );
