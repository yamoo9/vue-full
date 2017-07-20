// 1. product config를 사용하여 dev 서버를 시작합니다.
process.env.NODE_ENV = 'testing'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

let server = require('../../build/dev-server.js'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

server.ready.then(() => {
  // 2. nightwatch 테스트 스위트(test suite)를 실행합니다.
  // 브라우저를 추가하여 실행하려면:
  //    1. test/e2e/nightwatch.conf.json 파일 test_settings 항목에 추가합니다.
  //    2. --env 플래그를 추가합니다. 예시: `npm run e2e -- --env chrome,firefox`
  // Nightwatch 설정에 관한 자세한 정보는 아래 링크를 참고하세요.
  // http://nightwatchjs.org/guide#settings-file
  var opts = process.argv.slice(2){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  if (opts.indexOf('--config') === -1) {
    opts = opts.concat(['--config', 'test/e2e/nightwatch.conf.js']){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
  if (opts.indexOf('--env') === -1) {
    opts = opts.concat(['--env', 'chrome']){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }

  var spawn = require('cross-spawn'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  var runner = spawn('./node_modules/.bin/nightwatch', opts, { stdio: 'inherit' }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  runner.on('exit', function (code) {
    server.close(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    process.exit(code){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  runner.on('error', function (err) {
    server.close(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    throw err{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
