# vue-full

Vue 프로젝트 템플릿 Full Version. (Webpack, hot-reload, ESLint 문법 검사, 유닛 테스트, CSS 추출)

## 문서

<!-- - [GitBook](http://yamoo9.github.io/vue-full) -->
- [GitBook: vuejs-templates.github.io/webpack](https://vuejs-templates.github.io/webpack/)

## 사용법

``` bash
$ npm install -g vue-cli
$ vue init yamoo9/vue-full vue-project
$ cd vue-project
$ npm install
$ npm run dev
```

Port 번호는 기본 `8080`을 사용합니다. Port 변경이 필요한 경우 `config/index.js` 에서 수정하세요.

## 템플릿에 포함된 명령

- `npm run dev`: 개발 환경
- `npm run build`: 빌드 배포
- `npm run unit`: 유닛 테스트
- `npm run e2e`: End-to-end 테스트