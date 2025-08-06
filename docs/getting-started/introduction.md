

Learn what Vue is and how it helps you build efficient user interfaces.
!!! note "Vue 2 End of Life"
    Vue 2 support ended on **Dec 31, 2023**. Learn more about [Vue 2 EOL](https://v3.vuejs.org/guide/migration/introduction.html).
    - Upgrading from Vue 2? Check out the [Migration Guide](https://v3.vuejs.org/guide/migration/introduction.html).

---

<a href="https://www.vuemastery.com/courses/"
   style="
     display: flex;
     align-items: center;
     justify-content: space-between;
     gap: 1rem;
     margin: 2rem 0;
     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
     padding: 1rem;
     border-radius: 0.5rem;
     background: var(--md-default-bg-color);
     color: inherit;
     text-decoration: none;
   ">
  <img src="/assets/vuemastery-graphical.png" alt="Vue graphical"
       style="max-height: 50px; object-fit: contain;" />
  <span>
    Learn Vue with video tutorials on
    <span style="color: #41b883; font-weight: bold;">VueMastery.com</span>
  </span>
  <img src="/assets/vue-mastery-logo.png" alt="Vue logo"
       style="max-height: 50px; object-fit: contain;" />
</a>


---

### What is Vue?

Vue (pronounced /vjuː/, like **view**) is a **JavaScript framework** for building user interfaces. It builds on top of standard **HTML**, **CSS**, and **JavaScript** and provides a **declarative, component-based programming model** that helps you efficiently develop user interfaces of any complexity.

Here is a minimal example:

```js
import { createApp, ref } from 'vue'

createApp({
  setup() {
    return {
      count: ref(0)
    }
  }
}).mount('#app')
```
```html
<div id="app">
  <button @click="count++">
    Count is: {{ count }}
  </button>
</div>
```
###### Result

<div class="counter-area">
  <button id="counter-btn" class="counter-btn">Count is: <span id="counter-value">0</span></button>
</div>

<script>
  let count = 0;
  const btn = document.getElementById('counter-btn');
  const value = document.getElementById('counter-value');

  btn.addEventListener('click', () => {
    count++;
    value.textContent = count;
  });
</script>

<style>
.counter-btn {
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-weight: bold;
  background-color: #42b983;
  color: white;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.counter-area {
  display: flex;
  justify-content: start;
  padding: 10px;
  margin: 10px 0;
}
</style>


The above example demonstrates the two core features of Vue:

- **Declarative Rendering**: Vue extends standard HTML with a template syntax that allows us to declaratively describe HTML output based on JavaScript state.

- **Reactivity**: Vue automatically tracks JavaScript state changes and efficiently updates the DOM when changes happen.

You may already have questions — don't worry. We will cover every little detail in the rest of the documentation. For now, please read along so you can have a high-level understanding of what Vue offers.

The rest of the documentation assumes basic familiarity with **HTML**, **CSS**, and **JavaScript**. If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step – grasp the basics first, then return to Vue. You can check your knowledge level with these overviews for *[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)*, *[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)* and *[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)* if needed. Prior experience with other frameworks helps, but is not required.

### The Progressive Framework
Vue is a framework and ecosystem that covers most of the common features needed in frontend development. But the web is extremely diverse - the things we build on the web may vary drastically in form and scale. With that in mind, Vue is designed to be flexible and incrementally adoptable. Depending on your use case, Vue can be used in different ways:
- Enhancing static HTML without a build step
- Embedding as Web Components on any page
- Single-Page Application (SPA)
- Fullstack / Server-Side Rendering (SSR)
- Jamstack / Static Site Generation (SSG)
- Targeting desktop, mobile, WebGL, and even the terminal
If you find these concepts intimidating, don't worry! The tutorial and guide only require basic HTML and JavaScript knowledge, and you should be able to follow along without being an expert in any of these.


If you are an experienced developer interested in how to best integrate Vue into your stack, or you are curious about what these terms mean, we discuss them in more detail in *[Ways of Using Vue](/getting-started/ways-of-using-vue)*.

Despite the flexibility, the core knowledge about how Vue works is shared across all these use cases. Even if you are just a beginner now, the knowledge gained along the way will stay useful as you grow to tackle more ambitious goals in the future. If you are a veteran, you can pick the optimal way to leverage Vue based on the problems you are trying to solve, while retaining the same productivity. This is why we call Vue "The Progressive Framework": it's a framework that can grow with you and adapt to your needs.

### Single-File Components
In most build-tool-enabled Vue projects, we author Vue components using an HTML-like file format called **Single-File Component** (also known as `*.vue` files, abbreviated as **SFC**). A Vue SFC, as the name suggests, encapsulates the component's logic (**JavaScript**), template (**HTML**), and styles (**CSS**) in a single file.

Here's the previous example, written in SFC format:

```vue
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
```
SFC is a defining feature of Vue and is the recommended way to author Vue components if your use case warrants a build setup. You can learn more about the *[how and why of SFC](https://vuejs.org/guide/scaling-up/sfc.html)* in its dedicated section - but for now, just know that Vue will handle all the build tools setup for you.
### API styles
Vue components can be authored in two different API styles: Options API and Composition API.
##### Options API
With Options API, we define a component's logic using an object of options such as `data,` `methods,` and `mounted`. Properties defined by options are exposed on `this` inside functions, which points to the component instance:

```vue
<script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 0
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```
*[Try it in the play ground](https://play.vuejs.org/#eNp9Us1O3DAQfpWR1QMIlFRqT6sUtUUc4AAIOPqAcWYTs44d2eNl0SrvzjjZZDkgpEjx/Pj7mfFe/Ov7YptQrEQVdTA9XUiHu94HghrXKlmCvXQAZQkBlSazRYikCHOyVqROTqcG4Dql4OYIQPvkaAU/p3jIv+FcugPaOjlG8y4CtYqgSxl0ggblaqBgmgYDpJ5ZMOZbHVLr67iaKYzTATt0dNQAjGZiMVKfnX3NbM0a9bu2CK33mwk592N9xNEszFssrG9Onp9aZC5DRtnJFJgIP/ZHpqF4Ph1JpOOvKpdJckDY9ZYdcARQvSQi7+CvtkZv/kixWJDi4vIAzf72B55hqMrpCl+vygVLnAuKrHFtmuI1esfrG4VLoX3XG4vhrh+HK8UyLSmUtf7tZsxRSMgTmfK6Rb35Iv8adzknxX3AiGGLUiw1UqFBVp3LV4+3uOPzUux8nSx3f1N8QJ5vyhqntv/J1Sz7U9+o9rrLT9G45ile7QhdnE1lofNecze/4ctvrB/l/ip+z6sSwwfUxv9s)*

###### Which to Choose?
Both API styles are fully capable of covering common use cases. They are different interfaces powered by the exact same underlying system. In fact, the Options API is implemented on top of the Composition API! The fundamental concepts and knowledge about Vue are shared across the two styles.

The Options API is centered around the concept of a "component instance" (`this` as seen in the example), which typically aligns better with a class-based mental model for users coming from OOP language backgrounds. It is also more beginner-friendly by abstracting away the reactivity details and enforcing code organization via option groups.

The Composition API is centered around declaring reactive state variables directly in a function scope and composing state from multiple functions together to handle complexity. It is more free-form and requires an understanding of how reactivity works in Vue to be used effectively. In return, its flexibility enables more powerful patterns for organizing and reusing logic. You can learn more about the comparison between the two styles and the potential benefits of Composition API in the *[Composition API FAQ](https://vuejs.org/guide/extras/composition-api-faq.html)*.

If you are new to Vue, here's our general recommendation:

- For learning purposes, choose the style that is easier for you to understand. Again, most of the core   concepts are shared between the two styles. You can always pick up the other style later.

For production use:

  - Go with Options API if you are not using build tools, or plan to use Vue primarily in low-complexity
    scenarios, e.g. progressive enhancement.

  - Go with Composition API + Single-File Components if you plan to build full applications with Vue.

You are not required to commit to a single style while learning. The rest of the documentation will provide code samples in both styles where applicable, and you can toggle between them at any time using the API Preference switches at the top of the left sidebar. 
### Still Got Questions?
Check out our *[FAQ](https://vuejs.org/about/faq.html)*
### Pick Your Learning Path
Different developers have different learning styles. Feel free to pick a learning path that suits your preference - although we do recommend going over all of the content, if possible!
 
<div class="md-typeset card-grid" markdown>

[**Try the Tutorial**  
For those who prefer hands-on learning.](https://vuejs.org/tutorial/#step-1){ .link-card }

[**Read the Guide**  
Full walkthrough of the framework.](https://vuejs.org/guide/quick-start.html){ .link-card }

[**Check out the Examples**  
Explore core features and UI tasks.](https://vuejs.org/examples/#hello-world){ .link-card }

</div>

[✏️ Edit this page on GitHub](https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fvuejs%2Fdocs%2Fedit%2Fmain%2Fsrc%2Fguide%2Fquick-start.md){ .md-button .md-button--secondary }



    

