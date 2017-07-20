import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// 모든 테스트 파일은 파일 명 뒤에 .spec.js로 끝나야 합니다.
const testsContext = require.context('./specs', true, /\.spec$/){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
testsContext.keys().forEach(testsContext){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// main.js를 제외한 모든 src 파일에 적용합니다.
const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
srcContext.keys().forEach(srcContext){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
