export default {
	switchView( { commit }, name ) {
		if ( name === 'design' ) {
			commit( 'view/design' );
		} else {
			commit( 'view/component' );
		}
	}
}
