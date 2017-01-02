import Element from './core/Element';

// global
window.Element = new Element();

// ensure Element is mounted to window before boot app
require.ensure( './core/Element', function ( require ) {
	const AMO = require( 'amo' );
	const App = require( './containers/App' ).default;
	const actions = require( './actions' ).default;
	const getters = require( './getters' ).default;
	const toolbarModel = require( './models/toolbar' ).default;
	const viewModel = require( './models/view' ).default;

	require( './css/index.less' );
	require( './fonts/iconfont.css' );

	// Pure
	const Pure = require( 'pure-ui' );
	require( 'pure-ui/dist/pure.css' );
	Regular.use( Pure );

	/* eslint-disable */
	const app = AMO();
	/* eslint-enable */

	app.use( Regular );
	app.actions( actions );
	app.getters( getters );
	app.model( toolbarModel );
	app.model( viewModel );
	app.start( App, '#app' );
} );
