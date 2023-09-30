import { useEffect } from 'react';
import { useForceUpdate } from 'tn-react-hooks';
var useReactiveState = function useReactiveState(state) {
  var update = useForceUpdate();
  var value = state.current;
  var setValue = function setValue(value) {
    return state.current = value;
  };
  useEffect(function () {
    var handle = state.on(function () {
      return update();
    });
    if (value !== state.current) update();
    return function () {
      return handle.disconnect();
    };
  }, [state.id]);
  return [value, setValue];
};
export { useReactiveState };
