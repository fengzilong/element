import Flex from '../components/Flex';
import Design from './Design';
import Component from './Component';

export default Regular.extend( {
	getters: {
		inDesignView: 'inDesignView',
		inComponentView: 'inComponentView',
	},
	template: `
		{#if inDesignView}
			<Design></Design>
		{/if}

		{#if inComponentView}
			<Component></Component>
		{/if}
	`,
} )
.component( {
	Flex,
	Design,
	Component,
} );
