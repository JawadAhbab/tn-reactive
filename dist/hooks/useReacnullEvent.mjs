import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { useEffect } from 'react';
var useReacnullEvent = function useReacnullEvent(state, callback) {
  var deps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  useEffect(function () {
    if (!state) return;
    var handle = state.on(function () {
      return callback(state.current);
    });
    return function () {
      return handle.disconnect();
    };
  }, [state === null || state === void 0 ? void 0 : state.id].concat(_toConsumableArray(deps)));
};
export { useReacnullEvent };
