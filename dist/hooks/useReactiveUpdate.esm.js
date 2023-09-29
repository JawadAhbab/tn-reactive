import { useEffect } from 'react';
import { useForceUpdate } from 'tn-react-hooks';
import { isArray } from 'tn-validate';
var useReactiveUpdate = function useReactiveUpdate(state) {
  var update = useForceUpdate();
  var statearr = isArray(state) ? state : [state];
  useEffect(function () {
    var handles = statearr.map(function (state) {
      return state.on(function () {
        return update();
      });
    });
    return function () {
      return handles.forEach(function (handle) {
        return handle.disconnect();
      });
    };
  }, [statearr.map(function (i) {
    return i.id;
  }).join('-')]);
};
export { useReactiveUpdate };
