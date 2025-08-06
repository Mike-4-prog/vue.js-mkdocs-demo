
### Try Vue Online
- To quickly get a taste of Vue, you can try it directly in our *[Playground](https://play.vuejs.org/#eNp9kVFLwzAQx7/KeS9TmBuiT6MOVAbqg4oKvuSltLeuM01CcpmF0u/utaXVhzEISe7/vyS/yzV459ziEAlXmITMl47XylDtrGfIaZtGzdAoA5CnnJ5fDHsATxy9GSOAKhQrmD2S1ha+rNf52Wyw2m6RSUaynB6QgKlyOmWSCCDZXa2bprsF2jZZStSrpXGR4XBZ2Zz0rULxFYqVLKfTOEcOmTXbsljsgzVSRw+lMLOVKzX5V8elNUHhasRVmArnz3OvsY80H/VsR9n3EX0f6k5T+OYpkD+Qwsnj1BfEg735eKFa9pMp5FFL9gnznYLVsWMc0u6jyQX7X15P+1R1PSlN8Rk2NZMJY1EdaP/Jfb5CaebDidL/cK8XN2NzsP0F+HSp8w==)*.

- If you prefer a plain HTML setup without any build steps, you can use this *[JSFiddle](https://jsfiddle.net/yyx990803/2ke1ab0z/)* as your starting point.

- If you are already familiar with Node.js and the concept of build tools, you can also try a complete build setup right within your browser on *[StackBlitz](https://stackblitz.com/edit/vitejs-vite-3s2evyl3?file=index.html&terminal=dev)*.
### Creating a Vue Application
!!! info "Prerequisites"

    - Familiarity with the command line  
    - Install [Node.js](https://nodejs.org/en) version 18.3 or higher

This section introduces how to scaffold a Vue *[Single Page Application](https://vuejs.org/guide/extras/ways-of-using-vue.html#single-page-application-spa)* on your local machine. The created project will be using a build setup based on *[Vite](https://vite.dev/)* and allow us to use Vue *[Single-File Components](https://vuejs.org/guide/scaling-up/sfc.html)* (SFCs).

Make sure you have an up-to-date version of [Node.js](https://nodejs.org/en) installed and your current working directory is the one where you intend to create a project. Run the following command in your command line (without the `$` sign):

**Install Vue with your preferred package manager:**
=== "npm"

    ```bash
    $ npm create vue@latest
    ```

=== "pnpm"

    ```bash
    $ pnpm create vue@latest
    ```

=== "yarn"

    ```bash
    # For Yarn (v1+)
    $ yarn create vue

    # For Yarn Modern (v2+)
    $ yarn create vue@latest

    # For Yarn ^v4.11
    $ yarn dlx create-vue@latest
    ```

=== "bun"

    ```bash
    $ bun create vue@latest
    ```
This command will install and execute *[create-vue](https://github.com/vuejs/create-vue)*, the official Vue project scaffolding tool. You will be presented with prompts for several optional features such as TypeScript and testing support:

<div style={{ overflowX: 'auto', backgroundColor: '#1e1e1e', color: '#dcdcdc', borderRadius: '0.5rem', padding: '1rem', fontFamily: 'monospace', fontSize: '0.875rem', border: 'none', boxShadow: 'none' }}>
<pre style={{ margin: 0 }}><code>
✔ Project name: … &lt;your-project-name&gt;
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add an End-to-End Testing Solution? … No / Cypress / Nightwatch / Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
✔ Add Vue DevTools 7 extension for debugging? (experimental) … No / Yes

Scaffolding project in ./&lt;your-project-name&gt;...
Done.
</code></pre>
</div>
If you are unsure about an option, simply choose `No` by hitting enter for now. Once the project is created, follow the instructions to install dependencies and start the dev server:
=== "npm"

    ```bash
    $ cd <your-project-name>
    $ npm install
    $ npm run dev
    ```

=== "pnpm"

    ```bash
    $ cd <your-project-name>
    $ pnpm install
    $ pnpm run dev
    ```

=== "yarn"

    ```bash
    $ cd <your-project-name>
    $ yarn
    $ yarn dev
    ```

=== "bun"

    ```bash
    $ cd <your-project-name>
    $ bun install
    $ bun run dev
    ```
You should now have your first Vue project running! Note that the example components in the generated project are written using the *[Composition API](https://vuejs.org/guide/introduction.html#composition-api)* and `<script setup>`, rather than the *[Options API](https://vuejs.org/guide/introduction.html#options-api)*. Here are some additional tips:

- The recommended IDE setup is *[Visual Studio Code](https://code.visualstudio.com/)* + *[Vue - Official extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar)*. If you use other editors, check out the *[IDE support section](https://vuejs.org/guide/scaling-up/tooling.html#ide-support)*.

- More tooling details, including integration with backend frameworks, are discussed in the *[Tooling Guide](https://vuejs.org/guide/scaling-up/tooling.html)*.

- To learn more about the underlying build tool Vite, check out the [Vite docs](https://vite.dev/).

- If you choose to use TypeScript, check out the *[TypeScript Usage Guide](https://vuejs.org/guide/typescript/overview.html)*.

When you are ready to deploy your app to production, run the following:
=== "npm"

    ``` bash
    $ npm run build
    ```
=== "pnpm"

    ```bash
    $ pnpm run build
    ```
=== "yarn"

    ```bash
    $ yarn build
    ```
=== "bun"

    ```bash
    $ bun run build
    ```
This command will generate an optimized, production-ready version of your application in project's `./dist` directory. Check out the *[Production Deployment Guide](https://vuejs.org/guide/best-practices/production-deployment.html)* to learn more about deploying your app to production.

### *[Next Steps](https://vuejs.org/guide/quick-start.html#next-steps)*

### Using Vue from CDN
For quick prototyping or embedding Vue into an existing project, you can include Vue via CDN.
```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```
In this example, we're using *[unpkg](https://unpkg.com/)*, but you can use any CDN that hosts npm packages, such as *[jsDelivr](https://www.jsdelivr.com/package/npm/vue)* or *[cdnjs](https://cdnjs.com/libraries/vue)*. Alternatively, you can also download the file and host it yourself on your own server or local environment.

When using Vue from a CDN, there is no "build step" involved. This makes the setup a lot simpler, and is suitable for enhancing static HTML or integrating with a backend framework. However, you won't be able to use the Single-File Component (SFC) syntax.
##### Using the Global Build
The above link loads the global build of Vue, where all top-level APIs are exposed as properties on the global `Vue` object. Here is a full example using the global build:
```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<div id="app">{{ message }}</div>

<script>
  const { createApp, ref } = Vue

  createApp({
    setup() {
      const message = ref('Hello vue!')
      return {
        message
      }
    }
  }).mount('#app')
</script>
```
*[CodePen Demo](https://codepen.io/vuejs-examples/pen/eYQpQEG)*
##### Enabling Import maps
In the above example, we are importing from the full CDN URL, but in the rest of the documentation you will see code like this:
```js
import { createApp } from 'vue'
```
We can teach the browser where to locate the `vue` import by using *[Import Maps](https://caniuse.com/import-maps)*:
```html
<script type="importmap">
  {
    "imports": {
      "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
    }
  }
</script>

<div id="app">{{ message }}</div>

<script type="module">
  import { createApp, ref } from 'vue'

  createApp({
    setup() {
      const message = ref('Hello Vue!')
      return {
        message
      }
    }
  }).mount('#app')
</script>
```
You can also add entries for other dependencies to the import map - but make sure they point to the ES modules version of the library you intend to use.

!!! info "Import Maps Browser Support"

    Import Maps is a relatively new browser feature. Make sure to use a browser  
    within its [support range](https://caniuse.com/import-maps).  
    In particular, it is only supported in **Safari 16.4+**.

!!! warning "Notes on Production use"
    
    The examples so far are using the development build of Vue - if you intend to use Vue from a CDN in production, make sure to check out the *[Production Deployment Guide](https://vuejs.org/guide/best-practices/production-deployment.html#without-build-tools)*.
    While it is possible to use Vue without a build system, an alternative approach to consider is using *[`vuejs/petite-vue`](https://github.com/vuejs/petite-vue)* that could better suit the context where *[`jquery/jquery`](https://github.com/jquery/jquery)* (in the past) or *[`alpinejs/alpine`](https://github.com/alpinejs/alpine)* (in the present) might be used instead.

##### Splitting Up the Modules
As we dive deeper into the guide, we may need to split our code into separate JavaScript files so that they are easier to manage. For example:
```html
<!-- index.html -->
<div id="app"></div>

<script type="module">
  import { createApp } from 'vue'
  import MyComponent from './my-component.js'

  createApp(MyComponent).mount('#app')
</script>
```
```html
// my-component.js
import { ref } from 'vue'
export default {
  setup() {
    const count = ref(0)
    return { count }
  },
  template: `<div>Count is: {{ count }}</div>`
}
```
If you directly open the above `index.html` in your browser, you will find that it throws an error because ES modules cannot work over the `file://` protocol, which is the protocol the browser uses when you open a local file.

Due to security reasons, ES modules can only work over the `http://` protocol, which is what the browsers use when opening pages on the web. In order for ES modules to work on our local machine, we need to serve the index.html over the `http://` protocol, with a local HTTP server.

To start a local HTTP server, first make sure you have *[Node.js](https://nodejs.org/en/)* installed, then run `npx serve` from the command line in the same directory where your HTML file is. You can also use any other HTTP server that can serve static files with the correct MIME types.

You may have noticed that the imported component's template is inlined as a JavaScript string. If you are using VS Code, you can install the *[es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html)* extension and prefix the strings with a `/*html*/` comment to get syntax highlighting for them.

### Next Steps
If you skipped the *[Introduction](https://vuejs.org/guide/introduction.html)*, we strongly recommend reading it before moving on to the rest of the documentation.

<div class="md-typeset card-grid" markdown>

[**Continue with the Guide**  
The guide walks you through every aspect of the framework in full detail.](https://vuejs.org/guide/essentials/application.html){ .link-card }

[**Try the Tutorial**  
For those who prefer hands-on learning.](https://vuejs.org/tutorial/#step-1){ .link-card }

[**Check out the Examples**  
Explore examples of core features and common UI tasks.](https://vuejs.org/examples/#hello-world){ .link-card }

</div>
[✏️ Edit this page on GitHub](https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fvuejs%2Fdocs%2Fedit%2Fmain%2Fsrc%2Fguide%2Fquick-start.md){ .md-button .md-button--secondary }








         
    



