// Typings for NativeScript-Vue
declare module 'nativescript-vue' {
	// import vue.js typings
	import Vue from 'vue';

	// creat a nativescript vue class that extends vue.js typings and adds the $start function.
	class NativeScriptVue extends Vue {
		/**
		 * calls the NativeScript application.start() method
		 */
		$start(): void;

		/**
		 * Registers NativeScript Plugin.
		 * @param elementName Name of the element to use in your template
		 * @param resolver  function to register the element
		 */
		static registerElement(elementName: string, resolver: function);
	}

	export = NativeScriptVue;
}

