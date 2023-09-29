import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { customAlphabet } from 'nanoid/non-secure';
var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var uniqueID = customAlphabet(alphabet, 10);
var Reactive = /*#__PURE__*/function () {
  function Reactive(state) {
    _classCallCheck(this, Reactive);
    _defineProperty(this, "id", uniqueID());
    _defineProperty(this, "state", void 0);
    _defineProperty(this, "version", 0);
    _defineProperty(this, "events", {});
    this.state = state;
  }
  _createClass(Reactive, [{
    key: "current",
    get: function get() {
      return this.state;
    },
    set: function set(value) {
      this.set(value);
    }
  }, {
    key: "set",
    value: function set(value) {
      if (this.state === value) return;
      this.version += 1;
      this.state = value;
      this.callback(value);
    }
  }, {
    key: "emit",
    value: function emit(value) {
      this.state = value;
      this.callback(value);
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate() {
      this.callback(this.state);
    }
  }, {
    key: "callback",
    value: function callback(value) {
      Object.entries(this.events).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          _ = _ref2[0],
          callback = _ref2[1].callback;
        return callback(value);
      });
    }
  }, {
    key: "on",
    value: function on(callback) {
      var _this = this;
      var eventkey = "e".concat(uniqueID());
      this.events[eventkey] = {
        callback: callback
      };
      return {
        disconnect: function disconnect() {
          delete _this.events[eventkey];
        }
      };
    }
  }]);
  return Reactive;
}();
export { Reactive };
