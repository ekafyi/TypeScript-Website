(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"73Cn":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var l=n("ERkP"),a=n("Wbzz"),r=function(e){var t=function(t){return e.active&&e.active.toLowerCase()===t?"active":""};return l.createElement("nav",{className:"navbar-sub dev-tools"},l.createElement("ul",{className:"nav"},l.createElement("li",{className:"name"},l.createElement("h3",null,"Developer Tools")),l.createElement("li",{style:{display:"none"}},l.createElement("a",{className:t("compiler api"),href:Object(a.withPrefix)("/dev/compiler")},"Compiler API")),l.createElement("li",null,l.createElement("a",{className:t("sandbox"),href:Object(a.withPrefix)("/dev/sandbox")},"Sandbox")),l.createElement("li",null,l.createElement("a",{className:t("twoslash"),href:Object(a.withPrefix)("/dev/twoslash")},"Twoslash")),l.createElement("li",null,l.createElement("a",{className:t("typescript vfs"),href:Object(a.withPrefix)("/dev/typescript-vfs")},"TypeScript VFS")),l.createElement("li",null,l.createElement("a",{className:t("playground plugins"),href:Object(a.withPrefix)("/dev/playground-plugins")},"Playground Plugins")),l.createElement("li",null,l.createElement("a",{className:t("bug workbench"),href:Object(a.withPrefix)("/dev/bug-workbench")},"Bug Workbench"))))}},"L+7S":function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return u}));var l=n("ERkP"),a=n("9Dj+"),r=n("Wbzz"),i=(n("pzji"),n("GO2c")),o=n("73Cn"),c=function(e){return l.createElement(l.Fragment,null,l.createElement(a.a,{title:"Developers - Playground Plugins",description:"What is a TypeScript Playground Plugin, and how can you make one?",lang:"en",allSitePage:e.data.allSitePage},l.createElement("div",{id:"dev"},l.createElement(o.a,{active:"playground plugins"}),l.createElement("div",{className:"raised content main-content-block"},l.createElement("div",{className:"split-sixhundred"},l.createElement("h1",{style:{marginTop:"20px"}},"Your toys, our sandbox"),l.createElement("p",null,"The new TypeScript Playground allows people to hook into the Playground and extend it in ways in which the TypeScript team don't expect."),l.createElement("p",null,"The sidebar of the Playground uses the same plugin infrastructure as external plugins, so you have the same level of access as the playground to build interesting projects."),l.createElement("p",null,"Playground plugins are built via the DOM API and an expansive Design System, however, you're free to inject a framework like React or Svelte at runtime."),l.createElement("p",null," "),l.createElement("p",null,"Getting started is easy, we have a plugin template, and the Playground has a dev-mode for hooking directly to your local server, so you don't need to run a copy of the TypeScript website to have a working development environment."),l.createElement("p",null,"There is a complex reference plugin called ",l.createElement("a",{href:"https://github.com/orta/playground-slides"},"Presentation Mode")," and a much simpler ",l.createElement("a",{href:"https://github.com/orta/playground-plugin-tsquery"},"plugin for TSQuery")," which are available by default for you to investigate and understand."),l.createElement("p",null,"If you have questions as you are working on your plugin, ask in the ",l.createElement("a",{href:"https://discord.gg/typescript"},"TypeScript Community Discord"),". When it is polished let us know and we can add it to the default registry - making it visible to everyone easily.")),l.createElement("div",{className:"sixhundred",style:{borderLeft:"1px solid gray"}},l.createElement("img",{src:n("bcCT"),width:"100%",alt:"Screenshot of the playground showing the plugins tab"}))),l.createElement("div",{className:"raised main-content-block"},l.createElement("h2",null,"Quick Tutorial"),l.createElement("p",null,"You need about 5 minutes, Node.js, yarn and Firefox/Edge or Chrome."),l.createElement("p",null,l.createElement("b",null,"Step 1"),": Use the template to bootstrap: ",l.createElement("code",null,"yarn create typescript-playground-plugin playground-my-plugin")),l.createElement("p",null,l.createElement("b",null,"Step 2"),": Run ",l.createElement("code",null,"yarn start")," in the new repo, to start up the local dev server"),l.createElement("p",null,l.createElement("b",null,"Step 3"),": Open the ",l.createElement("a",{href:Object(r.withPrefix)("/play/")},"playground"),' in your browser, click "Options" and enable ',l.createElement("code",null,'"Connect to localhost:5000/index.js"')),l.createElement("p",null,l.createElement("b",null,"Step 4"),": Refresh, and see the new tab. That's your plugin up and running"),l.createElement("p",null," "),l.createElement("p",null,"That's all the pieces working in tandem, now you can make changes to the template and build out your plugin. The plugin in dev mode will always become forefront when connected, so you can re-load without a lot off clicks. To understand the template's technology, read the ",l.createElement("a",{href:"https://github.com/microsoft/TypeScript-Website/blob/v2/packages/create-typescript-playground-plugin/template/CONTRIBUTING.md"},"CONTRIBUTING.md")),l.createElement("h2",null,"Alternatives"),l.createElement("p",null,"There are community-run templates for Playground plugins which bootstrap your plugin with well-known view libraries:"),l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"https://github.com/gojutin/typescript-playground-plugin-react#typescript-playground-plugin-react"},"gojutin/typescript-playground-plugin-react")),l.createElement("li",null,l.createElement("a",{href:"https://github.com/gojutin/typescript-playground-plugin-svelte#typescript-playground-plugin-svelte"},"gojutin/typescript-playground-plugin-svelte"))),l.createElement("p",null,"They have their own up-to-date documentation in their READMEs.")))))};t.default=function(e){return l.createElement(i.a,{locale:"en"},l.createElement(c,e))};var u="2021495366"},bcCT:function(e,t,n){e.exports=n.p+"static/playground-plugin-preview-dbc16bfdfa7b81de0757bb7fad4656c1.png"}}]);
//# sourceMappingURL=component---src-pages-dev-playground-plugins-tsx-4dbf7a7fe8d8205e96a6.js.map