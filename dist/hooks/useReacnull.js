'use strict';

var react = require('react');
var tnReactHooks = require('tn-react-hooks');
var useReacnull = function useReacnull(state) {
  var update = tnReactHooks.useForceUpdate();
  var value = state === null || state === void 0 ? void 0 : state.current;
  react.useEffect(function () {
    if (!state) return;
    var handle = state.on(function () {
      return update();
    });
    if (value !== state.current) update();
    return function () {
      return handle.disconnect();
    };
  }, [state === null || state === void 0 ? void 0 : state.id]);
  return value;
};
exports.useReacnull = useReacnull;
