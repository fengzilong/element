import AMO from 'amo';
import App from './containers/App';
import actions from './actions';
import getters from './getters';
import toolbarModel from './models/toolbar';

import './css/index.less';
import './fonts/iconfont.css';

export default function () {
	/* eslint-disable */
	const app = AMO();
	/* eslint-enable */

	app.use( Regular );
	app.actions( actions );
	app.getters( getters );
	app.model( toolbarModel );
	app.start( App, '#app' );
}
