'use strict';

var react = require('react');
var tnReactHooks = require('tn-react-hooks');
var useReactive = function useReactive(state) {
  var update = tnReactHooks.useForceUpdate();
  var value = state.current;
  react.useEffect(function () {
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
exports.useReactive = useReactive;
