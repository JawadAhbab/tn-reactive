'use strict';

var react = require('react');
var tnReactHooks = require('tn-react-hooks');
var tnValidate = require('tn-validate');
var useReactiveUpdate = function useReactiveUpdate(state) {
  var update = tnReactHooks.useForceUpdate();
  var statearr = tnValidate.isArray(state) ? state : [state];
  react.useEffect(function () {
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
exports.useReactiveUpdate = useReactiveUpdate;
