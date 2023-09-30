import { useEffect } from 'react';
import { useForceUpdate } from 'tn-react-hooks';
var useReactive = function useReactive(state) {
  var update = useForceUpdate();
  var value = state.current;
  useEffect(function () {
    var handle = state.on(function () {
      return update();
    });
    if (value !== state.current) update();
    return function () {
      return handle.disconnect();
    };
  }, [state.id]);
  return value;
};
export { useReactive };
