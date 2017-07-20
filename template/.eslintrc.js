// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
    jquery: true
  },
  globals: {
    Vue: true
  },
  {{#if_eq lintConfig "standard"}}

  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  {{/if_eq}}
  {{#if_eq lintConfig "airbnb"}}
  extends: 'airbnb-base',
  {{/if_eq}}

  // *.vue 파일 린팅에 필요
  plugins: [
    'html'
  ],
  {{#if_eq lintConfig "airbnb"}}

  // import, resolve 되는지 검증
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  {{/if_eq}}

  // 사용자 정의 규칙
  // ESLint 규칙:
  // http://eslint.org/docs/rules/
  // https://goo.gl/2P8squ
  'rules': {
    {{#if_eq lintConfig "standard"}}
    // 화살표 함수 허용
    'arrow-parens': 0,
    // async-await 허용
    'generator-star-spacing': 0,
    {{/if_eq}}

    {{#if_eq lintConfig "airbnb"}}
    // import 구문 사용 시, .js, .vue 확장자 필요 없음
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // 개발 의존성 모듈 옵션 허용
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    {{/if_eq}}

    'no-console': 0,
    'no-unused-vars': 0,
    'indent': [
        'error',
        2
    ],
    'linebreak-style': [
        'error',
        'unix'
    ],
    'quotes': [
        'error',
        'single'
    ],
    'semi': [
        'error',
        'always'
    ],

    // 개발 중 디버깅 허용
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
