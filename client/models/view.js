export default {
	name: 'view',
	state: {
		// Design视图
		design: false,
		// Component视图
		component: true,
	},
	reducers: {
		design( state ) {
			reset( state );
			state.design = true;
		},
		component( state ) {
			reset( state );
			state.component = true;
		},
	},
};

function reset( views ) {
	Object.keys( views ).forEach( key => {
		views[ key ] = false;
	} );
}
