(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatApp = function ChatApp() {
    _classCallCheck(this, ChatApp);

    console.log('Hello es6!');
};

var ChatMessage = function () {
    function ChatMessage(_ref) {
        var m = _ref.message,
            _ref$user = _ref.user,
            u = _ref$user === undefined ? 'batman' : _ref$user,
            _ref$timestamp = _ref.timestamp,
            t = _ref$timestamp === undefined ? new Date().getTime() : _ref$timestamp;

        _classCallCheck(this, ChatMessage);

        this.user = user;
        this.message = message;
        this.timestamp = timestamp;
    }

    // this returns a plain javaAScript object with the info


    _createClass(ChatMessage, [{
        key: 'serialize',
        value: function serialize() {
            return { user: this.user,
                message: this.message,
                timestamp: this.timestamp
            };
        }
    }]);

    return ChatMessage;
}();

exports.default = ChatApp;

},{}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default();

},{"./app":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQ00sTyxHQUNGLG1CQUFhO0FBQUE7O0FBQ1QsWUFBUSxHQUFSLENBQVksWUFBWjtBQUVILEM7O0lBSUMsVztBQUVFLCtCQUNDO0FBQUEsWUFEcUIsQ0FDckIsUUFEWSxPQUNaO0FBQUEsNkJBRHVCLElBQ3ZCO0FBQUEsWUFENkIsQ0FDN0IsNkJBRCtCLFFBQy9CO0FBQUEsa0NBRHdDLFNBQ3hDO0FBQUEsWUFEbUQsQ0FDbkQsa0NBRHNELElBQUksSUFBSixFQUFELENBQWEsT0FBYixFQUNyRDs7QUFBQTs7QUFDRCxhQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsYUFBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLGFBQUssU0FBTCxHQUFpQixTQUFqQjtBQUNDOztBQUVMOzs7OztvQ0FDWTtBQUNWLG1CQUFTLEVBQUMsTUFBTSxLQUFLLElBQVo7QUFDUCx5QkFBUyxLQUFLLE9BRFA7QUFFUCwyQkFBVyxLQUFLO0FBRlQsYUFBVDtBQUtHOzs7Ozs7a0JBR00sTzs7Ozs7QUMzQmY7Ozs7OztBQUVBLElBQUksYUFBSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlxuY2xhc3MgQ2hhdEFwcHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBjb25zb2xlLmxvZygnSGVsbG8gZXM2IScpO1xuXG4gICAgfVxuXG59XG5cbmNsYXNzIENoYXRNZXNzYWdlIHtcblxuICAgICAgICBjb25zdHJ1Y3Rvcih7bWVzc2FnZTogbSx1c2VyOiB1PSdiYXRtYW4nLHRpbWVzdGFtcDogdD0obmV3IERhdGUoKSkuZ2V0VGltZSgpfSlcbiAgICAgICAgIHtcbiAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy50aW1lc3RhbXAgPSB0aW1lc3RhbXA7XG4gICAgICAgIH1cblxuICAgIC8vIHRoaXMgcmV0dXJucyBhIHBsYWluIGphdmFBU2NyaXB0IG9iamVjdCB3aXRoIHRoZSBpbmZvXG4gICAgIHNlcmlhbGl6ZSgpe1xuICAgICAgcmV0dXJuICAge3VzZXI6IHRoaXMudXNlcixcbiAgICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgICB0aW1lc3RhbXA6IHRoaXMudGltZXN0YW1wXG4gICAgICAgIH07XG5cbiAgICAgICAgfVxuICAgfVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0QXBwO1xuIiwiXG5pbXBvcnQgQ2hhdEFwcCBmcm9tICcuL2FwcCc7XG5cbm5ldyBDaGF0QXBwKCk7XG4iXX0=
