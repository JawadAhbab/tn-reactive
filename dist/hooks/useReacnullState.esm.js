import { useEffect } from 'react';
import { useForceUpdate } from 'tn-react-hooks';
var useReacnullState = function useReacnullState(state) {
  var update = useForceUpdate();
  var value = state === null || state === void 0 ? void 0 : state.current;
  var setValue = function setValue(value) {
    if (!state) return;
    state.current = value;
  };
  useEffect(function () {
    if (!state) return;
    var handle = state.on(function () {
      return update();
    });
    if (value !== state.current) update();
    return function () {
      return handle.disconnect();
    };
  }, [state === null || state === void 0 ? void 0 : state.id]);
  return [value, setValue];
};
export { useReacnullState };
