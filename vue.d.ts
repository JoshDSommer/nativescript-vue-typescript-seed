//Augmenting Vue.js
import Vue from 'vue';

declare module "vue/types/vue" {
	interface Vue {
		/**
		 * calls the NativeScript application.start() method
		 */
		$start(): void;

		// /**
		//  * Registers NativeScript Plugin.
		//  * @param elementName Name of the element to use in your template
		//  * @param resolver  function to register the element
		//  */
		// static registerElement(elementName: string, resolver: function);
	}
}
