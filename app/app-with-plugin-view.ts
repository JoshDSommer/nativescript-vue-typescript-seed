import Vue = require('nativescript-vue');

Vue.registerElement('Gradient', () => require('nativescript-gradient').Gradient)

new Vue({
	template: `
		<Page class="page">
			<ActionBar class="action-bar" title="NativeScript-Vue"></ActionBar>
			<Gradient direction="to right" colors="#43b882,#4e607d">
				<Label text="Best gradient." horizontalAlignment="center"
					style="color: white; padding: 20" />
			</Gradient>
		</Page>
	`,
	data: {
		headingText: 'Welcome to NativeScript-Vue',
		bodyText: `
			This TypeScript template contains a number of app samples that you can use as the starting point of your app.
			To experiment, try copying and pasting the code from app-with-list-view.js, app-with-router.js, app-with-tab-view.js,
			or app-with-vmodel.js into your app’s app.js file.
		`
	}
}).$start();