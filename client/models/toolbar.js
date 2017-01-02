export default {
	name: 'toolbar',
	state: {
		// 是否显示调色盘
		showPalette: false,
		// 调色盘颜色
		paletteColors: Element.meta( 'palette' ),
	},
	reducers: {
		showPalette( state ) {
			state.showPalette = true;
		},
		hidePalette( state ) {
			state.showPalette = false;
		},
		togglePalette( state ) {
			state.showPalette = !state.showPalette;
		},
	},
};
