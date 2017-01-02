'use strict';
const { app } = require( 'electron' );
const createMainWindow = require( './main-window' );
require( 'electron-debug' )();

let mainWindow;

app.on( 'window-all-closed', () => {
	if ( process.platform !== 'darwin' ) {
		app.quit();
	}
} );

app.on( 'activate', () => {
	if ( !mainWindow ) {
		mainWindow = createMainWindow();
	}
} );

app.on( 'ready', () => {
	mainWindow = createMainWindow();
} );
