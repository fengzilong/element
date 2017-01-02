function load( requireContext ) {
	const tmp = {};

	requireContext.keys().map( v => {
		const meta = requireContext( v );
		return meta.default || meta;
	} ).forEach( meta => {
		tmp[ meta.key ] = meta.value;
	} );

	return tmp;
}

export default function () {
	return load( require.context( './meta', true, /\.meta\.js$/ ) );
}
