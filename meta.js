module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }
      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "프로젝트 이름"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "프로젝트 설명",
      "default": "Vue.js 프로젝트"
    },
    "author": {
      "type": "string",
      "message": "제작자"
    },
    "build": {
      "type": "list",
      "message": "Vue 빌드",
      "choices": [
        {
          "name": "런타임 + 컴파일러 버전: 권장",
          "value": "standalone",
          "short": "standalone"
        },
        {
          "name": "런타임 Only 버전: 가벼운 6KB min+gzip 파일(템플릿은 *.vue 파일에서만 허용)",
          "value": "runtime",
          "short": "runtime"
        }
      ]
    },
    "pug": {
       "type": "confirm",
       "message": "Pug 템플릿 엔진을 사용할까요?",
       "default": true
    },
    "sass": {
       "type": "confirm",
       "message": "Sass 프리프로세서를 사용할까요?",
       "default": true
    },
    "router": {
      "type": "confirm",
      "message": "Vue 라우터(vue-router)를 사용할까요?",
      "default": true
    },
    "lint": {
      "type": "confirm",
      "message": "ESLint를 통해 코드 문법을 검사할까요?",
      "default": true
    },
    "lintConfig": {
      "when": "lint",
      "type": "list",
      "message": "ESLint 프리셋을 선택해주세요.",
      "choices": [
        {
          "name": "Standard 스타일 (https://github.com/feross/standard)",
          "value": "standard",
          "short": "Standard"
        },
        {
          "name": "Airbnb 스타일 (https://github.com/airbnb/javascript)",
          "value": "airbnb",
          "short": "Airbnb"
        },
        {
          "name": "none (직접 규칙 설정)",
          "value": "none",
          "short": "none"
        }
      ]
    },
    "unit": {
      "type": "confirm",
      "message": "Karma + Mocha 유닛 테스트 도구를 설치할까요?",
      "default": false
    },
    "e2e": {
      "type": "confirm",
      "message": "Nightwatch를 사용해 e2e 테스트 하겠습니까?",
      "default": false
    }
  },
  "filters": {
    ".eslintrc.js": "lint",
    ".eslintignore": "lint",
    "config/test.env.js": "unit || e2e",
    "test/unit/**/*": "unit",
    "build/webpack.test.conf.js": "unit",
    "test/e2e/**/*": "e2e",
    "src/router/**/*": "router"
  },
  "completeMessage": "프로젝트 시작하기:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nhttps://vuejs-templates.github.io/webpack 에서 프로젝트 템플릿 사용 방법을 확인할 수 있습니다."
};
