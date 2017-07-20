// 사용자 정의 Nightwatch 어설션(assertions).
// 메소드 이름은 파일 이름입니다.
// 다음과 같은 테스트에서 사용할 수 있습니다.
//
//   browser.assert.elementCount(selector, count)
//
// 사용자 정의 어설션(assertions) 작성법은 아래 링크를 참고하세요.
// http://nightwatchjs.org/guide#writing-custom-assertions

exports.assertion = function (selector, count) {
  this.message = 'Testing if element <' + selector + '> has count: ' + count{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  this.expected = count{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  this.pass = function (val) {
    return val === this.expected{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
  this.value = function (res) {
    return res.value{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
  this.command = function (cb) {
    var self = this{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    return this.api.execute(function (selector) {
      return document.querySelectorAll(selector).length{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }, [selector], function (res) {
      cb.call(self, res){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
}
