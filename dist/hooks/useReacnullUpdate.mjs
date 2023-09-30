import { useEffect } from 'react';
import { useForceUpdate } from 'tn-react-hooks';
import { isArray } from 'tn-validate';
var useReacnullUpdate = function useReacnullUpdate(state) {
  var update = useForceUpdate();
  var statearr = isArray(state) ? state : [state];
  useEffect(function () {
    var handles = statearr.map(function (state) {
      return state === null || state === void 0 ? void 0 : state.on(function () {
        return update();
      });
    });
    return function () {
      return handles.forEach(function (handle) {
        return handle === null || handle === void 0 ? void 0 : handle.disconnect();
      });
    };
  }, [statearr.map(function (i) {
    return i === null || i === void 0 ? void 0 : i.id;
  }).join('-')]);
};
export { useReacnullUpdate };
