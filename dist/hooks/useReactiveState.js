'use strict';

var react = require('react');
var tnReactHooks = require('tn-react-hooks');
var useReactiveState = function useReactiveState(state) {
  var update = tnReactHooks.useForceUpdate();
  var value = state.current;
  var setValue = function setValue(value) {
    return state.current = value;
  };
  react.useEffect(function () {
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
exports.useReactiveState = useReactiveState;
