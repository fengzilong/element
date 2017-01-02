const { BrowserWindow } = require( 'electron' );
const windowStateKeeper = require( 'electron-window-state' );
// const path = require( 'path' );

let win;
module.exports = function () {
	if ( win ) {
		return win;
	}

	const windowState = windowStateKeeper( {
		defaultWidth: 900,
		defaultHeight: 600,
	} );

	win = new BrowserWindow( {
		show: true,
		// icon: path.resolve( __dirname, './resources/icon.png' ),
		width: 900,
		height: 600,
		frame: false,
		// resizable: false,
		center: true,
		titleBarStyle: 'hidden',
		// backgroundColor: '#FFF',
		// skipTaskbar: true,
	} );

	windowState.manage( win );

	win.loadURL( `file://${ __dirname }/../dist/index.html` );
	win.once( 'ready-to-show', function () {
		win.show();
	} );
	win.on( 'closed', onClosed );

	function onClosed() {
		win = null;
	}

	return win;
};
