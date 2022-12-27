'use strict';

var _toConsumableArray = require("@babel/runtime/helpers/toConsumableArray").default;
var react = require('react');
var useReactiveEvent = function useReactiveEvent(state, callback) {
  var deps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  react.useEffect(function () {
    var handle = state.on(function () {
      return callback(state.current);
    });
    return function () {
      return handle.disconnect();
    };
  }, [state.id].concat(_toConsumableArray(deps)));
};
exports.useReactiveEvent = useReactiveEvent;
