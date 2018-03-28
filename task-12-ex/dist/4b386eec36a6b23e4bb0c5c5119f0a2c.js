// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({10:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
	function App() {
		_classCallCheck(this, App);
	}

	_createClass(App, [{
		key: "render",
		value: function render() {
			console.log(1);
		}
	}]);

	return App;
}();

exports.default = App;
},{}],11:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Login = function () {
	function Login() {
		_classCallCheck(this, Login);
	}

	_createClass(Login, [{
		key: 'render',
		value: function render() {
			var showLogin = function showLogin() {
				document.querySelector('.input-login-wrapper').style.display = 'block';
				document.querySelector('.input-login-wrapper').innerHTML = '\n\t<div class = \'cross\'>x</div>\n\t<h3 class = \'h3\'>Log In</h3>\n\t        <input type = \'text\' value = \'login\' class = \'input-login\'>\n\t\t\t<input type = \'password\' value = \'\' class = \'input-login\'>\n\t\t\t<input type = \'submit\' value = \'Sign In\' class = \'login-sbm\'> \n\t\t\t<p>Have not an account?</p><div class = \'register-redirect\'>Register acc</div>\n\t';
				console.log(login);
			};

			var clkLogin = document.querySelector('#login-btn');
			clkLogin.addEventListener('click', showLogin, false);
		}
	}]);

	return Login;
}();

exports.default = Login;
},{"./App":10}],12:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Signin = function () {
	function Signin() {
		_classCallCheck(this, Signin);
	}

	_createClass(Signin, [{
		key: 'render',
		value: function render() {
			var showSignin = function showSignin() {
				document.querySelector('.input-login-wrapper').style.display = 'block';
				document.querySelector('.input-login-wrapper').innerHTML = '\n\t<div class = \'cross\'>x</div>\n\t<h3 class = \'h3\'>Sign Up</h3>\n\t        <label class = \'label\'>Name</lebel>\n\t        <input type = \'text\' value = \'login\' class = \'input-login\'>\n\t        <label class = \'label\'>Email</lebel>\n\t        <input type = \'text\' value = \'email\' class = \'input-login\'>\n\t        <label class = \'label\'>Password</lebel>\n\t\t\t<input type = \'password\' value = \'\' class = \'input-login\'>\n\t\t\t<label class = \'label\'>Confirm password</lebel>\n\t\t\t<input type = \'password\' value = \'\' class = \'input-login\'>\n\t\t\t<input type = \'submit\' value = \'Register\' class = \'login-sbm\'>\n\t\t\t<p>Already have you an account?</p><div class = \'login-redirect\'>Log in</div> \n\t';
				console.log(66);
			};

			var clkSignin = document.querySelector('#signup-btn');
			clkSignin.addEventListener('click', showSignin, false);
		}
	}]);

	return Signin;
}();

exports.default = Signin;
},{"./App":10}],13:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RedirectLogin = function () {
	function RedirectLogin() {
		_classCallCheck(this, RedirectLogin);
	}

	_createClass(RedirectLogin, [{
		key: 'render',
		value: function render() {
			var RedirectSignin = function RedirectSignin() {
				document.querySelector('.input-login-wrapper').style.display = 'block';
				document.querySelector('.input-login-wrapper').innerHTML = '\n\t<div class = \'cross\'>x</div>\n\t<h3 class = \'h3\'>Log In</h3>\n\t        <input type = \'text\' value = \'login\' class = \'input-login\'>\n\t\t\t<input type = \'password\' value = \'\' class = \'input-login\'>\n\t\t\t<input type = \'submit\' value = \'Sign In\' class = \'login-sbm\'> \n\t\t\t<p>Have not an account?</p><div class = \'register-redirect\'>Register</div>\n\t';
				console.log(777);

				//const html = `
				//<div class = 'cross'>x</div>
				//<h3 class = 'h3'>Log In</h3>
				//<input type = 'text' value = 'login' class = 'input-login'>
				//<input type = 'password' value = '' class = 'input-login'>
				//<input type = 'submit' value = 'Sign In' class = 'login-sbm'> 
				//<p>Have not an account?</p><div class = 'register-redirect'>Register</div>
				//`;

				//const fragment = document.querySelector('.input-login-wrapper').parseHTML(html);       
				//return fragment;


				var clkLogin = document.querySelector('.register-redirect');
				clkLogin.addEventListener('click', RedirectSignin, false);
			};
		}
	}]);

	return RedirectLogin;
}();

exports.default = RedirectLogin;
},{"./App":10}],14:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RedirectRegister = function () {
	function RedirectRegister() {
		_classCallCheck(this, RedirectRegister);
	}

	_createClass(RedirectRegister, [{
		key: 'render',
		value: function render() {
			var RedirectSignup = function RedirectSignup() {
				document.querySelector('.input-login-wrapper').style.display = 'block';
				document.querySelector('.input-login-wrapper').innerHTML = '\n\t<div class = \'cross\'>x</div>\n\t<h3 class = \'h3\'>Log In</h3>\n\t        <input type = \'text\' value = \'login\' class = \'input-login\'>\n\t\t\t<input type = \'password\' value = \'\' class = \'input-login\'>\n\t\t\t<input type = \'submit\' value = \'Sign In\' class = \'login-sbm\'> \n\t\t\t<p>Have not an account?</p><div class = \'signin-redirect\'>Sign up</div>\n\t';
				console.log(888);
			};

			var clkLogin = document.querySelector('.signin-redirect');
			clkLogin.addEventListener('click', RedirectSignup, false);
		}
	}]);

	return RedirectRegister;
}();

exports.default = RedirectRegister;
},{"./App":10}],3:[function(require,module,exports) {
"use strict";

var _App = require("./App");

var _App2 = _interopRequireDefault(_App);

var _login = require("./login");

var _login2 = _interopRequireDefault(_login);

var _register = require("./register");

var _register2 = _interopRequireDefault(_register);

var _signinRedirect = require("./signin-redirect");

var _signinRedirect2 = _interopRequireDefault(_signinRedirect);

var _signupRedirect = require("./signup-redirect");

var _signupRedirect2 = _interopRequireDefault(_signupRedirect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import HideAuthorization from "./hideform";
var app = new _App2.default();
var log = new _login2.default();
var sign = new _register2.default();
//const ha = new HideAuthorization();
var redlogin = new _signinRedirect2.default();
var redreg = new _signupRedirect2.default();

app.render();
log.render();
sign.render();
//ha.render();
redlogin.render();
redreg.render();
},{"./App":10,"./login":11,"./register":12,"./signin-redirect":13,"./signup-redirect":14}],16:[function(require,module,exports) {

var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = undefined || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '49515' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id);
  });
}
},{}]},{},[16,3])
//# sourceMappingURL=/dist/4b386eec36a6b23e4bb0c5c5119f0a2c.map