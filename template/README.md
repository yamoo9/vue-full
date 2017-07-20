# {{ name }}

> {{ description }}

## Build Setup

``` bash
# 개발 의존 모듈 설치
npm install

# 웹 서버(localhost:8080)로 구동
npm run dev

# 배포를 위해 압축 후, 빌드
npm run build

# 배포를 위해 압축 후, 빌드 (번들링 리포트 포함)
npm run build --report
{{#unit}}

# 유닛 테스트 수행
npm run unit
{{/unit}}
{{#e2e}}

# e2e 테스트 수행
npm run e2e
{{/e2e}}
{{#if_or unit e2e}}

# 모든 테스트 수행
npm test
{{/if_or}}
```

<!-- 보다 자세한 사용법은 [가이드](http://yamoo9.github.io/vue-full/), [vue-loader 문서(한국어 번역)](https://vue-loader.vuejs.org/kr/)를 읽어보세요. -->
보다 자세한 사용법은 [가이드](https://vuejs-templates.github.io/webpack/), [vue-loader 문서(한국어 번역)](https://vue-loader.vuejs.org/kr/)를 읽어보세요.
