declare module 'nativescript-vue' {
	import Vue from 'vue';

	class NativeScriptVue extends Vue implements NativeScriptVue {
		/**
		 * calls the NativeScript application.start() method
		 */
		$start(): void;
		$http: any;
	}

	module NativeScriptVue {
	}

	export = NativeScriptVue;
}

