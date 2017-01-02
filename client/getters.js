export default {
	// 调色盘
	paletteColors: state => state.toolbar.paletteColors,
	showPalette: state => state.toolbar.showPalette,

	// 当前处于哪个视图
	inDesignView: state => state.view.design,
	inComponentView: state => state.view.component,
};
