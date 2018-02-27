// Typings for NativeScript augmentations to Vue-Router

// Import vue router so we can augment it's Router Options.
import * as VueRouter from 'vue-router';
declare module 'vue-router/types/router' {

	interface RouterOptions {
		/**
		 * NativeScript option
		*/
		pageRouting?: boolean;
	}
}