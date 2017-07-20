import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// 컴포넌트 로드
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{#router}}
// vue-router 모듈 로드
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}

// 환경설정: false로 설정할 경우, 배포에 대한 Tip을 출력하지 않습니다.
Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// 아래 라인 주석을 지우지 마세요.
/* eslint-disable no-new */

// Vue 루트 인스턴스 생성 및 설정
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
