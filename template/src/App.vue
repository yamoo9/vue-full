<template{{#pug}} lang="pug"{{/pug}}>
{{#if pug}}
  #app
    img(src="./assets/logo.png" alt="Vue")
    {{#router}}
    router-view
    {{else}}
    hello
    {{/router}}
{{else}}
  <div id="app">
    <img src="./assets/logo.png">
    {{#router}}
    <router-view></router-view>
    {{else}}
    <hello></hello>
    {{/router}}
  </div>
{{/if}}
</template>

<script>
{{#unless router}}
import Hello from './components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{/unless}}
export default {
  name: 'app'{{#router}}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{else}},
  components: {
    Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{/router}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style{{#sass}} lang="sass"{{/sass}}>
{{#if sass}}
html
  font-size: 100%
  background: #fff
body
  margin: 0
#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  margin-top: 60px
  text-align: center
  color: #2c3e50
{{else}}
html {
  font-size: 100%;
  background: #fff;
}
body {
  margin: 0
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  text-align: center;
  color: #2c3e50;
}
{{/if}}
</style>