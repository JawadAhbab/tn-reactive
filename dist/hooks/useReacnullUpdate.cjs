'use strict';

var react = require('react');
var tnReactHooks = require('tn-react-hooks');
var tnValidate = require('tn-validate');
var useReacnullUpdate = function useReacnullUpdate(state) {
  var update = tnReactHooks.useForceUpdate();
  var statearr = tnValidate.isArray(state) ? state : [state];
  react.useEffect(function () {
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
exports.useReacnullUpdate = useReacnullUpdate;
