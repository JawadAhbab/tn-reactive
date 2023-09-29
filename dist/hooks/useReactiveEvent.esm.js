import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { useEffect } from 'react';
var useReactiveEvent = function useReactiveEvent(state, callback) {
  var deps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  useEffect(function () {
    var handle = state.on(function () {
      return callback(state.current);
    });
    return function () {
      return handle.disconnect();
    };
  }, [state.id].concat(_toConsumableArray(deps)));
};
export { useReactiveEvent };
