/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 * @nolint
 * @preventMunge
 * @generated SignedSource<<26fbc8eee6902991682d526f8537439c>>
 */

"use strict";
var dynamicFlagsUntyped = require("ReactNativeInternalFeatureFlags"),
  React = require("react"),
  REACT_ELEMENT_TYPE = Symbol.for("react.element"),
  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
  disableDefaultPropsExceptForClasses =
    dynamicFlagsUntyped.disableDefaultPropsExceptForClasses,
  hasOwnProperty = Object.prototype.hasOwnProperty,
  ReactCurrentOwner =
    React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
function jsxProd(type, config, maybeKey) {
  var propName,
    props = {},
    key = null,
    ref = null;
  void 0 !== maybeKey && (key = "" + maybeKey);
  void 0 !== config.key && (key = "" + config.key);
  void 0 !== config.ref && (ref = config.ref);
  for (propName in config)
    hasOwnProperty.call(config, propName) &&
      "key" !== propName &&
      "ref" !== propName &&
      (props[propName] = config[propName]);
  if (!disableDefaultPropsExceptForClasses && type && type.defaultProps)
    for (propName in ((config = type.defaultProps), config))
      void 0 === props[propName] && (props[propName] = config[propName]);
  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type: type,
    key: key,
    ref: ref,
    props: props,
    _owner: ReactCurrentOwner.current
  };
}
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.jsx = jsxProd;
exports.jsxs = jsxProd;
