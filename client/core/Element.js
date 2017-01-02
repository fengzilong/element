import getMeta from './meta';

export default class Element {
	meta( key ) {
		const metas = getMeta();
		const meta = metas[ key ];
		if ( meta ) {
			return meta;
		}
		return metas;
	}
	placeholder( width, height ) {
		return `https://placekitten.com/g/${ width }/${ height || 0 }`;
	}
}
