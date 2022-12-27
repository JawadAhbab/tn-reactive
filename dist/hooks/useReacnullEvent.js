'use strict';

var _toConsumableArray = require("@babel/runtime/helpers/toConsumableArray").default;
var react = require('react');
var useReacnullEvent = function useReacnullEvent(state, callback) {
  var deps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  react.useEffect(function () {
    if (!state) return;
    var handle = state.on(function () {
      return callback(state.current);
    });
    return function () {
      return handle.disconnect();
    };
  }, [state === null || state === void 0 ? void 0 : state.id].concat(_toConsumableArray(deps)));
};
exports.useReacnullEvent = useReacnullEvent;
