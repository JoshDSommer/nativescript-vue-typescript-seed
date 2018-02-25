# NativeScript + Vue + TypeScript
## nativescript-vue-typescript-seed

This project is so anyone can get started using NativeScript and Vue with TypeScript. It is created when using the nativescript-vue-template(`tns create my-app --template nativescript-vue-template`) and updated it to use typescript. Nativescript-vue does not currently ship with type definitions for typescript, so instead Vue's typings are imported and reused with some minor tweaks for NativeScript, in the `nativescript-vue.d.ts` file


### Workflow:

* clone this repo, from the command line,`git clone git@github.com:TheOriginalJosh/nativescript-vue-typescript-seed.git myAppName`. 
* then `cd myAppName` 
* then run `npm install`
* from this point on, run NativeScript CLI commands as normal `tns run android`, `tns run ios`, etc. 
