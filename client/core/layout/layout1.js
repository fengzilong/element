// 左右布局，左边定宽，右边自适应
export default {
	key: 'L1',
	name: '左定宽&右自适应',
	// preview: `${ base64 }`,
	slots: [ '$0', '$1' ],
	template: `
		<div style="display: flex;width: 100%;">
			<div>$0</div>
			<div style="flex: 1;">$1</div>
		</div>
	`,
};
