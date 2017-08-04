# 정적 에셋 핸들링

프로젝트 구조 상 에셋을 관리하는 디렉토리는 `src/assets`, `static/` 입니다. 각 디렉토리는 어떤 차이가 있을까요?

### Webpack에서 에셋을 관리하는 방법

먼저 Webpack이 `*.vue` 컴포넌트 파일 내의 템플릿, CSS를 각각 `vue-html-loader`, `css-loader`로 해석하여 정적 에셋을 처리하는 방법(asset URLs)에 대해 이해해야 합니다.
예를 들어 `<img src="./logo.png">`, `background: url("./logo.png")`, `"./logo.png"` 와 같이 에셋의 상대 경로를 사용하면 **Webpack이 이를 모듈을 통해 처리해줍니다.**

`logo.png` 파일은 JavaScript가 아니라서 그대로 번들링되지 않습니다. 하여 Webpack은 의존 모듈 `url-loader`, `file-loader`을 통해 그래픽 파일을 번들링 처리합니다.
로더 설정은 이미 `yamoo9/vue-full` 템플릿에 구성되어 있기 때문에 별도로 구성하실 필요는 없습니다. Vue 파일에 추가한 상대 경로를 통해 로더는 파일 이름 및 식별자,
조건 처리된 base64 인코딩 처리된 코드를 사용할 수 있도록 처리해줍니다.

이렇게 처리된 에셋은 본질적으로 소스 코드이며, 빌드되는 동안 인라인/복사/이름변경이 가능합니다. 이런 이유로 Webpack이 처리할 정적 에셋을 `./src` 디렉토리 내에 포함하는 것을 권장합니다.
관리된 에셋은 모듈/컴포넌트에서 사용할 수 있습니다. 그렇다고 해서 모든 파일을 `/src/assets` 디렉토리 안에 넣어야 할 필요는 없습니다.

### 에셋 처리 규칙

- **./ 상대 경로 URL**, `./assets/logo.png` 경로 사용 시, 의존 모듈이 처리합니다. 이 파일은 Webpack의 출력 설정에 기반하여 자동으로 URL 처리합니다.

- **./ 생략된 상대경로 URL**, `assets/logo.png` 의 경우, `./assets/logo.png`로 자동 변경되어 처리됩니다.

- **`~` 접두사를 사용한 URL** `require('some-module/image.png')` 구문처럼 모듈 요청 처리합니다. `~` 접두사는 Webpack 환경설정에 등록된 구성을 사용합니다. 예를 들어 `assets` 별칭(Alias)를 등록한 후, `<img src="~assets/logo.png">` 처럼 사용할 수 있습니다.

- **절대 경로 URL**, `/assets/logo.png`의 경우, 처리되지 않습니다.

### JavaScript에서 에셋 경로 가져오기

Webpack이 에셋 경로를 올바르게 처리하려면 `require('./relative/path/to/file.jpg')`를 사용해야 하며, `file-loader`를 통해 처리된 URL을 반환받습니다.

``` js
computed: {
  background () {
    return require('./bgs/' + this.id + '.jpg');
  }
}
```

**위의 예는 최종 빌드된 결과에 `./bgs/` 내부 이미지를 포함합니다.** Webpack은 런타임(runtime) 중에 어떤 에셋 자원이 사용될 것인지 알 수 없기 때문에 모두 포함합니다.

### 진짜 정적 에셋

`static/` 디렉토리 내부 파일은 Webpack 로더에 의해 처리되지 않으며, 내부의 파일들은 최종 결과에 직접 복사됩니다.
`config/index.js` 파일의 `build.assetsPublicPath` 또는 `build.assetsSubDirectory`에 설정된 절대 경로에서 직접 파일을 참조합니다.
템플릿은 다음 값을 기본으로 사용합니다.

``` js
// config/index.js
module.exports = {
  // ...
  build: {
    assetsPublicPath: '/',
    assetsSubDirectory: 'static'
  }
}
```

`static/` 디렉토리에 배치된 파일은 절대 경로 URL을 사용하여 참조해야 합니다. `/static/[filename]`.
만약 `assetSubDirectory` 설정을 `assets`으로 변경하면 `/assets/[filename]`로 사용해야 합니다.

[백엔드 프레임워크에 통합](./backend.md)에서 `config` 파일에 대해 보다 자세히 공부할 수 있습니다.