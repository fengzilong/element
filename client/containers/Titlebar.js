import Titlebar from '../components/Titlebar';
import Nav from '../components/Nav';

export default Regular.extend( {
	getters: {
		inDesignView: 'inDesignView',
	},
	template: `
		<Titlebar
			active=""
			on-minimize="{ this.onMinimize() }"
			on-maxmize="{ this.onMaxmize() }"
			on-close="{ this.onClose() }"
			on-nav="{ this.onNav( $event ) }"
		>
			<Nav
				active="{ inDesignView ? 'design' : 'component' }"
				source="{ navSource }"
				on-nav="{ this.onSwitchView( $event ) }"
			></Nav>
		</Titlebar>
	`,
	config() {
		this.data.navSource = [ 'design', 'component' ];
	},
	onMinimize() {
		this.dispatch( 'minimize' );
	},
	onMaxmize() {
		this.dispatch( 'maxmize' );
	},
	onClose() {
		this.dispatch( 'close' );
	},
	onSwitchView( name ) {
		this.dispatch( 'switchView', name );
	},
} )
.component( {
	Titlebar,
	Nav,
} );
