(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function eI(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var Vy = { exports: {} },
  ql = {},
  Oy = { exports: {} },
  Z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lo = Symbol.for("react.element"),
  tI = Symbol.for("react.portal"),
  nI = Symbol.for("react.fragment"),
  rI = Symbol.for("react.strict_mode"),
  iI = Symbol.for("react.profiler"),
  sI = Symbol.for("react.provider"),
  oI = Symbol.for("react.context"),
  aI = Symbol.for("react.forward_ref"),
  lI = Symbol.for("react.suspense"),
  uI = Symbol.for("react.memo"),
  cI = Symbol.for("react.lazy"),
  Gp = Symbol.iterator;
function hI(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Gp && t[Gp]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var Ly = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  My = Object.assign,
  by = {};
function Ji(t, e, n) {
  ((this.props = t),
    (this.context = e),
    (this.refs = by),
    (this.updater = n || Ly));
}
Ji.prototype.isReactComponent = {};
Ji.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
Ji.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function Fy() {}
Fy.prototype = Ji.prototype;
function td(t, e, n) {
  ((this.props = t),
    (this.context = e),
    (this.refs = by),
    (this.updater = n || Ly));
}
var nd = (td.prototype = new Fy());
nd.constructor = td;
My(nd, Ji.prototype);
nd.isPureReactComponent = !0;
var Kp = Array.isArray,
  Uy = Object.prototype.hasOwnProperty,
  rd = { current: null },
  jy = { key: !0, ref: !0, __self: !0, __source: !0 };
function By(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (e != null)
    for (r in (e.ref !== void 0 && (o = e.ref),
    e.key !== void 0 && (s = "" + e.key),
    e))
      Uy.call(e, r) && !jy.hasOwnProperty(r) && (i[r] = e[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var u = Array(l), h = 0; h < l; h++) u[h] = arguments[h + 2];
    i.children = u;
  }
  if (t && t.defaultProps)
    for (r in ((l = t.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Lo,
    type: t,
    key: s,
    ref: o,
    props: i,
    _owner: rd.current,
  };
}
function dI(t, e) {
  return {
    $$typeof: Lo,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function id(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Lo;
}
function fI(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var Qp = /\/+/g;
function Qu(t, e) {
  return typeof t == "object" && t !== null && t.key != null
    ? fI("" + t.key)
    : e.toString(36);
}
function Ma(t, e, n, r, i) {
  var s = typeof t;
  (s === "undefined" || s === "boolean") && (t = null);
  var o = !1;
  if (t === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case Lo:
          case tI:
            o = !0;
        }
    }
  if (o)
    return (
      (o = t),
      (i = i(o)),
      (t = r === "" ? "." + Qu(o, 0) : r),
      Kp(i)
        ? ((n = ""),
          t != null && (n = t.replace(Qp, "$&/") + "/"),
          Ma(i, e, n, "", function (h) {
            return h;
          }))
        : i != null &&
          (id(i) &&
            (i = dI(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Qp, "$&/") + "/") +
                t,
            )),
          e.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Kp(t)))
    for (var l = 0; l < t.length; l++) {
      s = t[l];
      var u = r + Qu(s, l);
      o += Ma(s, e, n, u, i);
    }
  else if (((u = hI(t)), typeof u == "function"))
    for (t = u.call(t), l = 0; !(s = t.next()).done; )
      ((s = s.value), (u = r + Qu(s, l++)), (o += Ma(s, e, n, u, i)));
  else if (s === "object")
    throw (
      (e = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return o;
}
function fa(t, e, n) {
  if (t == null) return t;
  var r = [],
    i = 0;
  return (
    Ma(t, r, "", "", function (s) {
      return e.call(n, s, i++);
    }),
    r
  );
}
function pI(t) {
  if (t._status === -1) {
    var e = t._result;
    ((e = e()),
      e.then(
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = n));
        },
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = n));
        },
      ),
      t._status === -1 && ((t._status = 0), (t._result = e)));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var ot = { current: null },
  ba = { transition: null },
  mI = {
    ReactCurrentDispatcher: ot,
    ReactCurrentBatchConfig: ba,
    ReactCurrentOwner: rd,
  };
function zy() {
  throw Error("act(...) is not supported in production builds of React.");
}
Z.Children = {
  map: fa,
  forEach: function (t, e, n) {
    fa(
      t,
      function () {
        e.apply(this, arguments);
      },
      n,
    );
  },
  count: function (t) {
    var e = 0;
    return (
      fa(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      fa(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!id(t))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return t;
  },
};
Z.Component = Ji;
Z.Fragment = nI;
Z.Profiler = iI;
Z.PureComponent = td;
Z.StrictMode = rI;
Z.Suspense = lI;
Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mI;
Z.act = zy;
Z.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        ".",
    );
  var r = My({}, t.props),
    i = t.key,
    s = t.ref,
    o = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((s = e.ref), (o = rd.current)),
      e.key !== void 0 && (i = "" + e.key),
      t.type && t.type.defaultProps)
    )
      var l = t.type.defaultProps;
    for (u in e)
      Uy.call(e, u) &&
        !jy.hasOwnProperty(u) &&
        (r[u] = e[u] === void 0 && l !== void 0 ? l[u] : e[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    l = Array(u);
    for (var h = 0; h < u; h++) l[h] = arguments[h + 2];
    r.children = l;
  }
  return { $$typeof: Lo, type: t.type, key: i, ref: s, props: r, _owner: o };
};
Z.createContext = function (t) {
  return (
    (t = {
      $$typeof: oI,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: sI, _context: t }),
    (t.Consumer = t)
  );
};
Z.createElement = By;
Z.createFactory = function (t) {
  var e = By.bind(null, t);
  return ((e.type = t), e);
};
Z.createRef = function () {
  return { current: null };
};
Z.forwardRef = function (t) {
  return { $$typeof: aI, render: t };
};
Z.isValidElement = id;
Z.lazy = function (t) {
  return { $$typeof: cI, _payload: { _status: -1, _result: t }, _init: pI };
};
Z.memo = function (t, e) {
  return { $$typeof: uI, type: t, compare: e === void 0 ? null : e };
};
Z.startTransition = function (t) {
  var e = ba.transition;
  ba.transition = {};
  try {
    t();
  } finally {
    ba.transition = e;
  }
};
Z.unstable_act = zy;
Z.useCallback = function (t, e) {
  return ot.current.useCallback(t, e);
};
Z.useContext = function (t) {
  return ot.current.useContext(t);
};
Z.useDebugValue = function () {};
Z.useDeferredValue = function (t) {
  return ot.current.useDeferredValue(t);
};
Z.useEffect = function (t, e) {
  return ot.current.useEffect(t, e);
};
Z.useId = function () {
  return ot.current.useId();
};
Z.useImperativeHandle = function (t, e, n) {
  return ot.current.useImperativeHandle(t, e, n);
};
Z.useInsertionEffect = function (t, e) {
  return ot.current.useInsertionEffect(t, e);
};
Z.useLayoutEffect = function (t, e) {
  return ot.current.useLayoutEffect(t, e);
};
Z.useMemo = function (t, e) {
  return ot.current.useMemo(t, e);
};
Z.useReducer = function (t, e, n) {
  return ot.current.useReducer(t, e, n);
};
Z.useRef = function (t) {
  return ot.current.useRef(t);
};
Z.useState = function (t) {
  return ot.current.useState(t);
};
Z.useSyncExternalStore = function (t, e, n) {
  return ot.current.useSyncExternalStore(t, e, n);
};
Z.useTransition = function () {
  return ot.current.useTransition();
};
Z.version = "18.3.1";
Oy.exports = Z;
var oe = Oy.exports;
const gI = eI(oe);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yI = oe,
  _I = Symbol.for("react.element"),
  vI = Symbol.for("react.fragment"),
  EI = Object.prototype.hasOwnProperty,
  wI = yI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  TI = { key: !0, ref: !0, __self: !0, __source: !0 };
function $y(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null;
  (n !== void 0 && (s = "" + n),
    e.key !== void 0 && (s = "" + e.key),
    e.ref !== void 0 && (o = e.ref));
  for (r in e) EI.call(e, r) && !TI.hasOwnProperty(r) && (i[r] = e[r]);
  if (t && t.defaultProps)
    for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r]);
  return {
    $$typeof: _I,
    type: t,
    key: s,
    ref: o,
    props: i,
    _owner: wI.current,
  };
}
ql.Fragment = vI;
ql.jsx = $y;
ql.jsxs = $y;
Vy.exports = ql;
var C = Vy.exports,
  bc = {},
  Wy = { exports: {} },
  Tt = {},
  Hy = { exports: {} },
  qy = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(z, K) {
    var J = z.length;
    z.push(K);
    e: for (; 0 < J; ) {
      var me = (J - 1) >>> 1,
        Ie = z[me];
      if (0 < i(Ie, K)) ((z[me] = K), (z[J] = Ie), (J = me));
      else break e;
    }
  }
  function n(z) {
    return z.length === 0 ? null : z[0];
  }
  function r(z) {
    if (z.length === 0) return null;
    var K = z[0],
      J = z.pop();
    if (J !== K) {
      z[0] = J;
      e: for (var me = 0, Ie = z.length, Ir = Ie >>> 1; me < Ir; ) {
        var St = 2 * (me + 1) - 1,
          Sr = z[St],
          Vt = St + 1,
          Pn = z[Vt];
        if (0 > i(Sr, J))
          Vt < Ie && 0 > i(Pn, Sr)
            ? ((z[me] = Pn), (z[Vt] = J), (me = Vt))
            : ((z[me] = Sr), (z[St] = J), (me = St));
        else if (Vt < Ie && 0 > i(Pn, J))
          ((z[me] = Pn), (z[Vt] = J), (me = Vt));
        else break e;
      }
    }
    return K;
  }
  function i(z, K) {
    var J = z.sortIndex - K.sortIndex;
    return J !== 0 ? J : z.id - K.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    t.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      l = o.now();
    t.unstable_now = function () {
      return o.now() - l;
    };
  }
  var u = [],
    h = [],
    f = 1,
    p = null,
    m = 3,
    I = !1,
    N = !1,
    D = !1,
    F = typeof setTimeout == "function" ? setTimeout : null,
    S = typeof clearTimeout == "function" ? clearTimeout : null,
    E = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function R(z) {
    for (var K = n(h); K !== null; ) {
      if (K.callback === null) r(h);
      else if (K.startTime <= z)
        (r(h), (K.sortIndex = K.expirationTime), e(u, K));
      else break;
      K = n(h);
    }
  }
  function O(z) {
    if (((D = !1), R(z), !N))
      if (n(u) !== null) ((N = !0), ls(L));
      else {
        var K = n(h);
        K !== null && us(O, K.startTime - z);
      }
  }
  function L(z, K) {
    ((N = !1), D && ((D = !1), S(g), (g = -1)), (I = !0));
    var J = m;
    try {
      for (
        R(K), p = n(u);
        p !== null && (!(p.expirationTime > K) || (z && !A()));
      ) {
        var me = p.callback;
        if (typeof me == "function") {
          ((p.callback = null), (m = p.priorityLevel));
          var Ie = me(p.expirationTime <= K);
          ((K = t.unstable_now()),
            typeof Ie == "function" ? (p.callback = Ie) : p === n(u) && r(u),
            R(K));
        } else r(u);
        p = n(u);
      }
      if (p !== null) var Ir = !0;
      else {
        var St = n(h);
        (St !== null && us(O, St.startTime - K), (Ir = !1));
      }
      return Ir;
    } finally {
      ((p = null), (m = J), (I = !1));
    }
  }
  var V = !1,
    _ = null,
    g = -1,
    v = 5,
    T = -1;
  function A() {
    return !(t.unstable_now() - T < v);
  }
  function k() {
    if (_ !== null) {
      var z = t.unstable_now();
      T = z;
      var K = !0;
      try {
        K = _(!0, z);
      } finally {
        K ? w() : ((V = !1), (_ = null));
      }
    } else V = !1;
  }
  var w;
  if (typeof E == "function")
    w = function () {
      E(k);
    };
  else if (typeof MessageChannel < "u") {
    var je = new MessageChannel(),
      on = je.port2;
    ((je.port1.onmessage = k),
      (w = function () {
        on.postMessage(null);
      }));
  } else
    w = function () {
      F(k, 0);
    };
  function ls(z) {
    ((_ = z), V || ((V = !0), w()));
  }
  function us(z, K) {
    g = F(function () {
      z(t.unstable_now());
    }, K);
  }
  ((t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (z) {
      z.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      N || I || ((N = !0), ls(L));
    }),
    (t.unstable_forceFrameRate = function (z) {
      0 > z || 125 < z
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (v = 0 < z ? Math.floor(1e3 / z) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (t.unstable_next = function (z) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var K = 3;
          break;
        default:
          K = m;
      }
      var J = m;
      m = K;
      try {
        return z();
      } finally {
        m = J;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (z, K) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var J = m;
      m = z;
      try {
        return K();
      } finally {
        m = J;
      }
    }),
    (t.unstable_scheduleCallback = function (z, K, J) {
      var me = t.unstable_now();
      switch (
        (typeof J == "object" && J !== null
          ? ((J = J.delay), (J = typeof J == "number" && 0 < J ? me + J : me))
          : (J = me),
        z)
      ) {
        case 1:
          var Ie = -1;
          break;
        case 2:
          Ie = 250;
          break;
        case 5:
          Ie = 1073741823;
          break;
        case 4:
          Ie = 1e4;
          break;
        default:
          Ie = 5e3;
      }
      return (
        (Ie = J + Ie),
        (z = {
          id: f++,
          callback: K,
          priorityLevel: z,
          startTime: J,
          expirationTime: Ie,
          sortIndex: -1,
        }),
        J > me
          ? ((z.sortIndex = J),
            e(h, z),
            n(u) === null &&
              z === n(h) &&
              (D ? (S(g), (g = -1)) : (D = !0), us(O, J - me)))
          : ((z.sortIndex = Ie), e(u, z), N || I || ((N = !0), ls(L))),
        z
      );
    }),
    (t.unstable_shouldYield = A),
    (t.unstable_wrapCallback = function (z) {
      var K = m;
      return function () {
        var J = m;
        m = K;
        try {
          return z.apply(this, arguments);
        } finally {
          m = J;
        }
      };
    }));
})(qy);
Hy.exports = qy;
var II = Hy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var SI = oe,
  wt = II;
function U(t) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1;
    n < arguments.length;
    n++
  )
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Gy = new Set(),
  oo = {};
function Zr(t, e) {
  (Mi(t, e), Mi(t + "Capture", e));
}
function Mi(t, e) {
  for (oo[t] = e, t = 0; t < e.length; t++) Gy.add(e[t]);
}
var yn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Fc = Object.prototype.hasOwnProperty,
  AI =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Yp = {},
  Jp = {};
function CI(t) {
  return Fc.call(Jp, t)
    ? !0
    : Fc.call(Yp, t)
      ? !1
      : AI.test(t)
        ? (Jp[t] = !0)
        : ((Yp[t] = !0), !1);
}
function RI(t, e, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function kI(t, e, n, r) {
  if (e === null || typeof e > "u" || RI(t, e, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function at(t, e, n, r, i, s, o) {
  ((this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o));
}
var He = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    He[t] = new at(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  He[e] = new at(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  He[t] = new at(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  He[t] = new at(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    He[t] = new at(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  He[t] = new at(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  He[t] = new at(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  He[t] = new at(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  He[t] = new at(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var sd = /[\-:]([a-z])/g;
function od(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(sd, od);
    He[e] = new at(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(sd, od);
    He[e] = new at(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(sd, od);
  He[e] = new at(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  He[t] = new at(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
He.xlinkHref = new at(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (t) {
  He[t] = new at(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function ad(t, e, n, r) {
  var i = He.hasOwnProperty(e) ? He[e] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (kI(e, n, i, r) && (n = null),
    r || i === null
      ? CI(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
      : i.mustUseProperty
        ? (t[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((e = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? t.removeAttribute(e)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var Cn = SI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  pa = Symbol.for("react.element"),
  di = Symbol.for("react.portal"),
  fi = Symbol.for("react.fragment"),
  ld = Symbol.for("react.strict_mode"),
  Uc = Symbol.for("react.profiler"),
  Ky = Symbol.for("react.provider"),
  Qy = Symbol.for("react.context"),
  ud = Symbol.for("react.forward_ref"),
  jc = Symbol.for("react.suspense"),
  Bc = Symbol.for("react.suspense_list"),
  cd = Symbol.for("react.memo"),
  Fn = Symbol.for("react.lazy"),
  Yy = Symbol.for("react.offscreen"),
  Xp = Symbol.iterator;
function Cs(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Xp && t[Xp]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var ve = Object.assign,
  Yu;
function Ls(t) {
  if (Yu === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      Yu = (e && e[1]) || "";
    }
  return (
    `
` +
    Yu +
    t
  );
}
var Ju = !1;
function Xu(t, e) {
  if (!t || Ju) return "";
  Ju = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (h) {
          var r = h;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (h) {
          r = h;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (h) {
        r = h;
      }
      t();
    }
  } catch (h) {
    if (h && r && typeof h.stack == "string") {
      for (
        var i = h.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && i[o] !== s[l];
      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== s[l])) {
                var u =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", t.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    ((Ju = !1), (Error.prepareStackTrace = n));
  }
  return (t = t ? t.displayName || t.name : "") ? Ls(t) : "";
}
function PI(t) {
  switch (t.tag) {
    case 5:
      return Ls(t.type);
    case 16:
      return Ls("Lazy");
    case 13:
      return Ls("Suspense");
    case 19:
      return Ls("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((t = Xu(t.type, !1)), t);
    case 11:
      return ((t = Xu(t.type.render, !1)), t);
    case 1:
      return ((t = Xu(t.type, !0)), t);
    default:
      return "";
  }
}
function zc(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case fi:
      return "Fragment";
    case di:
      return "Portal";
    case Uc:
      return "Profiler";
    case ld:
      return "StrictMode";
    case jc:
      return "Suspense";
    case Bc:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case Qy:
        return (t.displayName || "Context") + ".Consumer";
      case Ky:
        return (t._context.displayName || "Context") + ".Provider";
      case ud:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case cd:
        return (
          (e = t.displayName || null),
          e !== null ? e : zc(t.type) || "Memo"
        );
      case Fn:
        ((e = t._payload), (t = t._init));
        try {
          return zc(t(e));
        } catch {}
    }
  return null;
}
function NI(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ""),
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return zc(e);
    case 8:
      return e === ld ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function ar(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function Jy(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function xI(t) {
  var e = Jy(t) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    r = "" + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          ((r = "" + o), s.call(this, o));
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          ((t._valueTracker = null), delete t[e]);
        },
      }
    );
  }
}
function ma(t) {
  t._valueTracker || (t._valueTracker = xI(t));
}
function Xy(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    r = "";
  return (
    t && (r = Jy(t) ? (t.checked ? "true" : "false") : t.value),
    (t = r),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function il(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function $c(t, e) {
  var n = e.checked;
  return ve({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  });
}
function Zp(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked;
  ((n = ar(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    }));
}
function Zy(t, e) {
  ((e = e.checked), e != null && ad(t, "checked", e, !1));
}
function Wc(t, e) {
  Zy(t, e);
  var n = ar(e.value),
    r = e.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
      : t.value !== "" + n && (t.value = "" + n);
  else if (r === "submit" || r === "reset") {
    t.removeAttribute("value");
    return;
  }
  (e.hasOwnProperty("value")
    ? Hc(t, e.type, n)
    : e.hasOwnProperty("defaultValue") && Hc(t, e.type, ar(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked));
}
function em(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    ((e = "" + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e));
  }
  ((n = t.name),
    n !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== "" && (t.name = n));
}
function Hc(t, e, n) {
  (e !== "number" || il(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var Ms = Array.isArray;
function Si(t, e, n, r) {
  if (((t = t.options), e)) {
    e = {};
    for (var i = 0; i < n.length; i++) e["$" + n[i]] = !0;
    for (n = 0; n < t.length; n++)
      ((i = e.hasOwnProperty("$" + t[n].value)),
        t[n].selected !== i && (t[n].selected = i),
        i && r && (t[n].defaultSelected = !0));
  } else {
    for (n = "" + ar(n), e = null, i = 0; i < t.length; i++) {
      if (t[i].value === n) {
        ((t[i].selected = !0), r && (t[i].defaultSelected = !0));
        return;
      }
      e !== null || t[i].disabled || (e = t[i]);
    }
    e !== null && (e.selected = !0);
  }
}
function qc(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(U(91));
  return ve({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function tm(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(U(92));
      if (Ms(n)) {
        if (1 < n.length) throw Error(U(93));
        n = n[0];
      }
      e = n;
    }
    (e == null && (e = ""), (n = e));
  }
  t._wrapperState = { initialValue: ar(n) };
}
function e_(t, e) {
  var n = ar(e.value),
    r = ar(e.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = "" + r));
}
function nm(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function t_(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Gc(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? t_(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : t;
}
var ga,
  n_ = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, r, i);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = e;
    else {
      for (
        ga = ga || document.createElement("div"),
          ga.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = ga.firstChild;
        t.firstChild;
      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function ao(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var Hs = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  DI = ["Webkit", "ms", "Moz", "O"];
Object.keys(Hs).forEach(function (t) {
  DI.forEach(function (e) {
    ((e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Hs[e] = Hs[t]));
  });
});
function r_(t, e, n) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : n || typeof e != "number" || e === 0 || (Hs.hasOwnProperty(t) && Hs[t])
      ? ("" + e).trim()
      : e + "px";
}
function i_(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = r_(n, e[n], r);
      (n === "float" && (n = "cssFloat"), r ? t.setProperty(n, i) : (t[n] = i));
    }
}
var VI = ve(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Kc(t, e) {
  if (e) {
    if (VI[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(U(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(U(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(U(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(U(62));
  }
}
function Qc(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Yc = null;
function hd(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var Jc = null,
  Ai = null,
  Ci = null;
function rm(t) {
  if ((t = Fo(t))) {
    if (typeof Jc != "function") throw Error(U(280));
    var e = t.stateNode;
    e && ((e = Jl(e)), Jc(t.stateNode, t.type, e));
  }
}
function s_(t) {
  Ai ? (Ci ? Ci.push(t) : (Ci = [t])) : (Ai = t);
}
function o_() {
  if (Ai) {
    var t = Ai,
      e = Ci;
    if (((Ci = Ai = null), rm(t), e)) for (t = 0; t < e.length; t++) rm(e[t]);
  }
}
function a_(t, e) {
  return t(e);
}
function l_() {}
var Zu = !1;
function u_(t, e, n) {
  if (Zu) return t(e, n);
  Zu = !0;
  try {
    return a_(t, e, n);
  } finally {
    ((Zu = !1), (Ai !== null || Ci !== null) && (l_(), o_()));
  }
}
function lo(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var r = Jl(n);
  if (r === null) return null;
  n = r[e];
  e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((t = t.type),
        (r = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !r));
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error(U(231, e, typeof n));
  return n;
}
var Xc = !1;
if (yn)
  try {
    var Rs = {};
    (Object.defineProperty(Rs, "passive", {
      get: function () {
        Xc = !0;
      },
    }),
      window.addEventListener("test", Rs, Rs),
      window.removeEventListener("test", Rs, Rs));
  } catch {
    Xc = !1;
  }
function OI(t, e, n, r, i, s, o, l, u) {
  var h = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, h);
  } catch (f) {
    this.onError(f);
  }
}
var qs = !1,
  sl = null,
  ol = !1,
  Zc = null,
  LI = {
    onError: function (t) {
      ((qs = !0), (sl = t));
    },
  };
function MI(t, e, n, r, i, s, o, l, u) {
  ((qs = !1), (sl = null), OI.apply(LI, arguments));
}
function bI(t, e, n, r, i, s, o, l, u) {
  if ((MI.apply(this, arguments), qs)) {
    if (qs) {
      var h = sl;
      ((qs = !1), (sl = null));
    } else throw Error(U(198));
    ol || ((ol = !0), (Zc = h));
  }
}
function ei(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do ((e = t), e.flags & 4098 && (n = e.return), (t = e.return));
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function c_(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function im(t) {
  if (ei(t) !== t) throw Error(U(188));
}
function FI(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = ei(t)), e === null)) throw Error(U(188));
    return e !== t ? null : t;
  }
  for (var n = t, r = e; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return (im(i), t);
        if (s === r) return (im(i), e);
        s = s.sibling;
      }
      throw Error(U(188));
    }
    if (n.return !== r.return) ((n = i), (r = s));
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          ((o = !0), (n = i), (r = s));
          break;
        }
        if (l === r) {
          ((o = !0), (r = i), (n = s));
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            ((o = !0), (n = s), (r = i));
            break;
          }
          if (l === r) {
            ((o = !0), (r = s), (n = i));
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(U(189));
      }
    }
    if (n.alternate !== r) throw Error(U(190));
  }
  if (n.tag !== 3) throw Error(U(188));
  return n.stateNode.current === n ? t : e;
}
function h_(t) {
  return ((t = FI(t)), t !== null ? d_(t) : null);
}
function d_(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = d_(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var f_ = wt.unstable_scheduleCallback,
  sm = wt.unstable_cancelCallback,
  UI = wt.unstable_shouldYield,
  jI = wt.unstable_requestPaint,
  Ae = wt.unstable_now,
  BI = wt.unstable_getCurrentPriorityLevel,
  dd = wt.unstable_ImmediatePriority,
  p_ = wt.unstable_UserBlockingPriority,
  al = wt.unstable_NormalPriority,
  zI = wt.unstable_LowPriority,
  m_ = wt.unstable_IdlePriority,
  Gl = null,
  Jt = null;
function $I(t) {
  if (Jt && typeof Jt.onCommitFiberRoot == "function")
    try {
      Jt.onCommitFiberRoot(Gl, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var Ut = Math.clz32 ? Math.clz32 : qI,
  WI = Math.log,
  HI = Math.LN2;
function qI(t) {
  return ((t >>>= 0), t === 0 ? 32 : (31 - ((WI(t) / HI) | 0)) | 0);
}
var ya = 64,
  _a = 4194304;
function bs(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function ll(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = t.suspendedLanes,
    s = t.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = bs(l)) : ((s &= o), s !== 0 && (r = bs(s)));
  } else ((o = n & ~i), o !== 0 ? (r = bs(o)) : s !== 0 && (r = bs(s)));
  if (r === 0) return 0;
  if (
    e !== 0 &&
    e !== r &&
    !(e & i) &&
    ((i = r & -r), (s = e & -e), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return e;
  if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= r; 0 < e; )
      ((n = 31 - Ut(e)), (i = 1 << n), (r |= t[n]), (e &= ~i));
  return r;
}
function GI(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function KI(t, e) {
  for (
    var n = t.suspendedLanes,
      r = t.pingedLanes,
      i = t.expirationTimes,
      s = t.pendingLanes;
    0 < s;
  ) {
    var o = 31 - Ut(s),
      l = 1 << o,
      u = i[o];
    (u === -1
      ? (!(l & n) || l & r) && (i[o] = GI(l, e))
      : u <= e && (t.expiredLanes |= l),
      (s &= ~l));
  }
}
function eh(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function g_() {
  var t = ya;
  return ((ya <<= 1), !(ya & 4194240) && (ya = 64), t);
}
function ec(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function Mo(t, e, n) {
  ((t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - Ut(e)),
    (t[e] = n));
}
function QI(t, e) {
  var n = t.pendingLanes & ~e;
  ((t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements));
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var i = 31 - Ut(n),
      s = 1 << i;
    ((e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~s));
  }
}
function fd(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var r = 31 - Ut(n),
      i = 1 << r;
    ((i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i));
  }
}
var ae = 0;
function y_(t) {
  return (
    (t &= -t),
    1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var __,
  pd,
  v_,
  E_,
  w_,
  th = !1,
  va = [],
  Kn = null,
  Qn = null,
  Yn = null,
  uo = new Map(),
  co = new Map(),
  jn = [],
  YI =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function om(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      Kn = null;
      break;
    case "dragenter":
    case "dragleave":
      Qn = null;
      break;
    case "mouseover":
    case "mouseout":
      Yn = null;
      break;
    case "pointerover":
    case "pointerout":
      uo.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      co.delete(e.pointerId);
  }
}
function ks(t, e, n, r, i, s) {
  return t === null || t.nativeEvent !== s
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      e !== null && ((e = Fo(e)), e !== null && pd(e)),
      t)
    : ((t.eventSystemFlags |= r),
      (e = t.targetContainers),
      i !== null && e.indexOf(i) === -1 && e.push(i),
      t);
}
function JI(t, e, n, r, i) {
  switch (e) {
    case "focusin":
      return ((Kn = ks(Kn, t, e, n, r, i)), !0);
    case "dragenter":
      return ((Qn = ks(Qn, t, e, n, r, i)), !0);
    case "mouseover":
      return ((Yn = ks(Yn, t, e, n, r, i)), !0);
    case "pointerover":
      var s = i.pointerId;
      return (uo.set(s, ks(uo.get(s) || null, t, e, n, r, i)), !0);
    case "gotpointercapture":
      return (
        (s = i.pointerId),
        co.set(s, ks(co.get(s) || null, t, e, n, r, i)),
        !0
      );
  }
  return !1;
}
function T_(t) {
  var e = Vr(t.target);
  if (e !== null) {
    var n = ei(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = c_(n)), e !== null)) {
          ((t.blockedOn = e),
            w_(t.priority, function () {
              v_(n);
            }));
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function Fa(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = nh(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Yc = r), n.target.dispatchEvent(r), (Yc = null));
    } else return ((e = Fo(n)), e !== null && pd(e), (t.blockedOn = n), !1);
    e.shift();
  }
  return !0;
}
function am(t, e, n) {
  Fa(t) && n.delete(e);
}
function XI() {
  ((th = !1),
    Kn !== null && Fa(Kn) && (Kn = null),
    Qn !== null && Fa(Qn) && (Qn = null),
    Yn !== null && Fa(Yn) && (Yn = null),
    uo.forEach(am),
    co.forEach(am));
}
function Ps(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    th ||
      ((th = !0),
      wt.unstable_scheduleCallback(wt.unstable_NormalPriority, XI)));
}
function ho(t) {
  function e(i) {
    return Ps(i, t);
  }
  if (0 < va.length) {
    Ps(va[0], t);
    for (var n = 1; n < va.length; n++) {
      var r = va[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (
    Kn !== null && Ps(Kn, t),
      Qn !== null && Ps(Qn, t),
      Yn !== null && Ps(Yn, t),
      uo.forEach(e),
      co.forEach(e),
      n = 0;
    n < jn.length;
    n++
  )
    ((r = jn[n]), r.blockedOn === t && (r.blockedOn = null));
  for (; 0 < jn.length && ((n = jn[0]), n.blockedOn === null); )
    (T_(n), n.blockedOn === null && jn.shift());
}
var Ri = Cn.ReactCurrentBatchConfig,
  ul = !0;
function ZI(t, e, n, r) {
  var i = ae,
    s = Ri.transition;
  Ri.transition = null;
  try {
    ((ae = 1), md(t, e, n, r));
  } finally {
    ((ae = i), (Ri.transition = s));
  }
}
function e0(t, e, n, r) {
  var i = ae,
    s = Ri.transition;
  Ri.transition = null;
  try {
    ((ae = 4), md(t, e, n, r));
  } finally {
    ((ae = i), (Ri.transition = s));
  }
}
function md(t, e, n, r) {
  if (ul) {
    var i = nh(t, e, n, r);
    if (i === null) (cc(t, e, r, cl, n), om(t, r));
    else if (JI(i, t, e, n, r)) r.stopPropagation();
    else if ((om(t, r), e & 4 && -1 < YI.indexOf(t))) {
      for (; i !== null; ) {
        var s = Fo(i);
        if (
          (s !== null && __(s),
          (s = nh(t, e, n, r)),
          s === null && cc(t, e, r, cl, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else cc(t, e, r, null, n);
  }
}
var cl = null;
function nh(t, e, n, r) {
  if (((cl = null), (t = hd(r)), (t = Vr(t)), t !== null))
    if (((e = ei(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = c_(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return ((cl = t), null);
}
function I_(t) {
  switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (BI()) {
        case dd:
          return 1;
        case p_:
          return 4;
        case al:
        case zI:
          return 16;
        case m_:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Hn = null,
  gd = null,
  Ua = null;
function S_() {
  if (Ua) return Ua;
  var t,
    e = gd,
    n = e.length,
    r,
    i = "value" in Hn ? Hn.value : Hn.textContent,
    s = i.length;
  for (t = 0; t < n && e[t] === i[t]; t++);
  var o = n - t;
  for (r = 1; r <= o && e[n - r] === i[s - r]; r++);
  return (Ua = i.slice(t, 1 < r ? 1 - r : void 0));
}
function ja(t) {
  var e = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function Ea() {
  return !0;
}
function lm() {
  return !1;
}
function It(t) {
  function e(n, r, i, s, o) {
    ((this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null));
    for (var l in t)
      t.hasOwnProperty(l) && ((n = t[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Ea
        : lm),
      (this.isPropagationStopped = lm),
      this
    );
  }
  return (
    ve(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ea));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ea));
      },
      persist: function () {},
      isPersistent: Ea,
    }),
    e
  );
}
var Xi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  yd = It(Xi),
  bo = ve({}, Xi, { view: 0, detail: 0 }),
  t0 = It(bo),
  tc,
  nc,
  Ns,
  Kl = ve({}, bo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: _d,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== Ns &&
            (Ns && t.type === "mousemove"
              ? ((tc = t.screenX - Ns.screenX), (nc = t.screenY - Ns.screenY))
              : (nc = tc = 0),
            (Ns = t)),
          tc);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : nc;
    },
  }),
  um = It(Kl),
  n0 = ve({}, Kl, { dataTransfer: 0 }),
  r0 = It(n0),
  i0 = ve({}, bo, { relatedTarget: 0 }),
  rc = It(i0),
  s0 = ve({}, Xi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  o0 = It(s0),
  a0 = ve({}, Xi, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  l0 = It(a0),
  u0 = ve({}, Xi, { data: 0 }),
  cm = It(u0),
  c0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  h0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  d0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function f0(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = d0[t]) ? !!e[t] : !1;
}
function _d() {
  return f0;
}
var p0 = ve({}, bo, {
    key: function (t) {
      if (t.key) {
        var e = c0[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress"
        ? ((t = ja(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
          ? h0[t.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: _d,
    charCode: function (t) {
      return t.type === "keypress" ? ja(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? ja(t)
        : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
    },
  }),
  m0 = It(p0),
  g0 = ve({}, Kl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  hm = It(g0),
  y0 = ve({}, bo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _d,
  }),
  _0 = It(y0),
  v0 = ve({}, Xi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  E0 = It(v0),
  w0 = ve({}, Kl, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
            ? -t.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  T0 = It(w0),
  I0 = [9, 13, 27, 32],
  vd = yn && "CompositionEvent" in window,
  Gs = null;
yn && "documentMode" in document && (Gs = document.documentMode);
var S0 = yn && "TextEvent" in window && !Gs,
  A_ = yn && (!vd || (Gs && 8 < Gs && 11 >= Gs)),
  dm = " ",
  fm = !1;
function C_(t, e) {
  switch (t) {
    case "keyup":
      return I0.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function R_(t) {
  return ((t = t.detail), typeof t == "object" && "data" in t ? t.data : null);
}
var pi = !1;
function A0(t, e) {
  switch (t) {
    case "compositionend":
      return R_(e);
    case "keypress":
      return e.which !== 32 ? null : ((fm = !0), dm);
    case "textInput":
      return ((t = e.data), t === dm && fm ? null : t);
    default:
      return null;
  }
}
function C0(t, e) {
  if (pi)
    return t === "compositionend" || (!vd && C_(t, e))
      ? ((t = S_()), (Ua = gd = Hn = null), (pi = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return A_ && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var R0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function pm(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!R0[t.type] : e === "textarea";
}
function k_(t, e, n, r) {
  (s_(r),
    (e = hl(e, "onChange")),
    0 < e.length &&
      ((n = new yd("onChange", "change", null, n, r)),
      t.push({ event: n, listeners: e })));
}
var Ks = null,
  fo = null;
function k0(t) {
  U_(t, 0);
}
function Ql(t) {
  var e = yi(t);
  if (Xy(e)) return t;
}
function P0(t, e) {
  if (t === "change") return e;
}
var P_ = !1;
if (yn) {
  var ic;
  if (yn) {
    var sc = "oninput" in document;
    if (!sc) {
      var mm = document.createElement("div");
      (mm.setAttribute("oninput", "return;"),
        (sc = typeof mm.oninput == "function"));
    }
    ic = sc;
  } else ic = !1;
  P_ = ic && (!document.documentMode || 9 < document.documentMode);
}
function gm() {
  Ks && (Ks.detachEvent("onpropertychange", N_), (fo = Ks = null));
}
function N_(t) {
  if (t.propertyName === "value" && Ql(fo)) {
    var e = [];
    (k_(e, fo, t, hd(t)), u_(k0, e));
  }
}
function N0(t, e, n) {
  t === "focusin"
    ? (gm(), (Ks = e), (fo = n), Ks.attachEvent("onpropertychange", N_))
    : t === "focusout" && gm();
}
function x0(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return Ql(fo);
}
function D0(t, e) {
  if (t === "click") return Ql(e);
}
function V0(t, e) {
  if (t === "input" || t === "change") return Ql(e);
}
function O0(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var $t = typeof Object.is == "function" ? Object.is : O0;
function po(t, e) {
  if ($t(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t),
    r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Fc.call(e, i) || !$t(t[i], e[i])) return !1;
  }
  return !0;
}
function ym(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function _m(t, e) {
  var n = ym(t);
  t = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = t + n.textContent.length), t <= e && r >= e))
        return { node: n, offset: e - t };
      t = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ym(n);
  }
}
function x_(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
          ? x_(t, e.parentNode)
          : "contains" in t
            ? t.contains(e)
            : t.compareDocumentPosition
              ? !!(t.compareDocumentPosition(e) & 16)
              : !1
    : !1;
}
function D_() {
  for (var t = window, e = il(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = il(t.document);
  }
  return e;
}
function Ed(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      e === "textarea" ||
      t.contentEditable === "true")
  );
}
function L0(t) {
  var e = D_(),
    n = t.focusedElem,
    r = t.selectionRange;
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    x_(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ed(n)) {
      if (
        ((e = r.start),
        (t = r.end),
        t === void 0 && (t = e),
        "selectionStart" in n)
      )
        ((n.selectionStart = e),
          (n.selectionEnd = Math.min(t, n.value.length)));
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        ((r = r.end === void 0 ? s : Math.min(r.end, i)),
          !t.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = _m(n, s)));
        var o = _m(n, r);
        i &&
          o &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== i.node ||
            t.anchorOffset !== i.offset ||
            t.focusNode !== o.node ||
            t.focusOffset !== o.offset) &&
          ((e = e.createRange()),
          e.setStart(i.node, i.offset),
          t.removeAllRanges(),
          s > r
            ? (t.addRange(e), t.extend(o.node, o.offset))
            : (e.setEnd(o.node, o.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
      ((t = e[n]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top));
  }
}
var M0 = yn && "documentMode" in document && 11 >= document.documentMode,
  mi = null,
  rh = null,
  Qs = null,
  ih = !1;
function vm(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ih ||
    mi == null ||
    mi !== il(r) ||
    ((r = mi),
    "selectionStart" in r && Ed(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Qs && po(Qs, r)) ||
      ((Qs = r),
      (r = hl(rh, "onSelect")),
      0 < r.length &&
        ((e = new yd("onSelect", "select", null, e, n)),
        t.push({ event: e, listeners: r }),
        (e.target = mi))));
}
function wa(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n["Webkit" + t] = "webkit" + e),
    (n["Moz" + t] = "moz" + e),
    n
  );
}
var gi = {
    animationend: wa("Animation", "AnimationEnd"),
    animationiteration: wa("Animation", "AnimationIteration"),
    animationstart: wa("Animation", "AnimationStart"),
    transitionend: wa("Transition", "TransitionEnd"),
  },
  oc = {},
  V_ = {};
yn &&
  ((V_ = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete gi.animationend.animation,
    delete gi.animationiteration.animation,
    delete gi.animationstart.animation),
  "TransitionEvent" in window || delete gi.transitionend.transition);
function Yl(t) {
  if (oc[t]) return oc[t];
  if (!gi[t]) return t;
  var e = gi[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in V_) return (oc[t] = e[n]);
  return t;
}
var O_ = Yl("animationend"),
  L_ = Yl("animationiteration"),
  M_ = Yl("animationstart"),
  b_ = Yl("transitionend"),
  F_ = new Map(),
  Em =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function mr(t, e) {
  (F_.set(t, e), Zr(e, [t]));
}
for (var ac = 0; ac < Em.length; ac++) {
  var lc = Em[ac],
    b0 = lc.toLowerCase(),
    F0 = lc[0].toUpperCase() + lc.slice(1);
  mr(b0, "on" + F0);
}
mr(O_, "onAnimationEnd");
mr(L_, "onAnimationIteration");
mr(M_, "onAnimationStart");
mr("dblclick", "onDoubleClick");
mr("focusin", "onFocus");
mr("focusout", "onBlur");
mr(b_, "onTransitionEnd");
Mi("onMouseEnter", ["mouseout", "mouseover"]);
Mi("onMouseLeave", ["mouseout", "mouseover"]);
Mi("onPointerEnter", ["pointerout", "pointerover"]);
Mi("onPointerLeave", ["pointerout", "pointerover"]);
Zr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Zr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Zr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Zr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Zr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Zr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Fs =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  U0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fs));
function wm(t, e, n) {
  var r = t.type || "unknown-event";
  ((t.currentTarget = n), bI(r, e, void 0, t), (t.currentTarget = null));
}
function U_(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var r = t[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (e)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            u = l.instance,
            h = l.currentTarget;
          if (((l = l.listener), u !== s && i.isPropagationStopped())) break e;
          (wm(i, l, h), (s = u));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (u = l.instance),
            (h = l.currentTarget),
            (l = l.listener),
            u !== s && i.isPropagationStopped())
          )
            break e;
          (wm(i, l, h), (s = u));
        }
    }
  }
  if (ol) throw ((t = Zc), (ol = !1), (Zc = null), t);
}
function de(t, e) {
  var n = e[uh];
  n === void 0 && (n = e[uh] = new Set());
  var r = t + "__bubble";
  n.has(r) || (j_(e, t, 2, !1), n.add(r));
}
function uc(t, e, n) {
  var r = 0;
  (e && (r |= 4), j_(n, t, r, e));
}
var Ta = "_reactListening" + Math.random().toString(36).slice(2);
function mo(t) {
  if (!t[Ta]) {
    ((t[Ta] = !0),
      Gy.forEach(function (n) {
        n !== "selectionchange" && (U0.has(n) || uc(n, !1, t), uc(n, !0, t));
      }));
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[Ta] || ((e[Ta] = !0), uc("selectionchange", !1, e));
  }
}
function j_(t, e, n, r) {
  switch (I_(e)) {
    case 1:
      var i = ZI;
      break;
    case 4:
      i = e0;
      break;
    default:
      i = md;
  }
  ((n = i.bind(null, e, n, t)),
    (i = void 0),
    !Xc ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: i })
        : t.addEventListener(e, n, !0)
      : i !== void 0
        ? t.addEventListener(e, n, { passive: i })
        : t.addEventListener(e, n, !1));
}
function cc(t, e, n, r, i) {
  var s = r;
  if (!(e & 1) && !(e & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = Vr(l)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = s = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  u_(function () {
    var h = s,
      f = hd(n),
      p = [];
    e: {
      var m = F_.get(t);
      if (m !== void 0) {
        var I = yd,
          N = t;
        switch (t) {
          case "keypress":
            if (ja(n) === 0) break e;
          case "keydown":
          case "keyup":
            I = m0;
            break;
          case "focusin":
            ((N = "focus"), (I = rc));
            break;
          case "focusout":
            ((N = "blur"), (I = rc));
            break;
          case "beforeblur":
          case "afterblur":
            I = rc;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            I = um;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            I = r0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            I = _0;
            break;
          case O_:
          case L_:
          case M_:
            I = o0;
            break;
          case b_:
            I = E0;
            break;
          case "scroll":
            I = t0;
            break;
          case "wheel":
            I = T0;
            break;
          case "copy":
          case "cut":
          case "paste":
            I = l0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            I = hm;
        }
        var D = (e & 4) !== 0,
          F = !D && t === "scroll",
          S = D ? (m !== null ? m + "Capture" : null) : m;
        D = [];
        for (var E = h, R; E !== null; ) {
          R = E;
          var O = R.stateNode;
          if (
            (R.tag === 5 &&
              O !== null &&
              ((R = O),
              S !== null && ((O = lo(E, S)), O != null && D.push(go(E, O, R)))),
            F)
          )
            break;
          E = E.return;
        }
        0 < D.length &&
          ((m = new I(m, N, null, n, f)), p.push({ event: m, listeners: D }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((m = t === "mouseover" || t === "pointerover"),
          (I = t === "mouseout" || t === "pointerout"),
          m &&
            n !== Yc &&
            (N = n.relatedTarget || n.fromElement) &&
            (Vr(N) || N[_n]))
        )
          break e;
        if (
          (I || m) &&
          ((m =
            f.window === f
              ? f
              : (m = f.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          I
            ? ((N = n.relatedTarget || n.toElement),
              (I = h),
              (N = N ? Vr(N) : null),
              N !== null &&
                ((F = ei(N)), N !== F || (N.tag !== 5 && N.tag !== 6)) &&
                (N = null))
            : ((I = null), (N = h)),
          I !== N)
        ) {
          if (
            ((D = um),
            (O = "onMouseLeave"),
            (S = "onMouseEnter"),
            (E = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((D = hm),
              (O = "onPointerLeave"),
              (S = "onPointerEnter"),
              (E = "pointer")),
            (F = I == null ? m : yi(I)),
            (R = N == null ? m : yi(N)),
            (m = new D(O, E + "leave", I, n, f)),
            (m.target = F),
            (m.relatedTarget = R),
            (O = null),
            Vr(f) === h &&
              ((D = new D(S, E + "enter", N, n, f)),
              (D.target = R),
              (D.relatedTarget = F),
              (O = D)),
            (F = O),
            I && N)
          )
            t: {
              for (D = I, S = N, E = 0, R = D; R; R = oi(R)) E++;
              for (R = 0, O = S; O; O = oi(O)) R++;
              for (; 0 < E - R; ) ((D = oi(D)), E--);
              for (; 0 < R - E; ) ((S = oi(S)), R--);
              for (; E--; ) {
                if (D === S || (S !== null && D === S.alternate)) break t;
                ((D = oi(D)), (S = oi(S)));
              }
              D = null;
            }
          else D = null;
          (I !== null && Tm(p, m, I, D, !1),
            N !== null && F !== null && Tm(p, F, N, D, !0));
        }
      }
      e: {
        if (
          ((m = h ? yi(h) : window),
          (I = m.nodeName && m.nodeName.toLowerCase()),
          I === "select" || (I === "input" && m.type === "file"))
        )
          var L = P0;
        else if (pm(m))
          if (P_) L = V0;
          else {
            L = x0;
            var V = N0;
          }
        else
          (I = m.nodeName) &&
            I.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (L = D0);
        if (L && (L = L(t, h))) {
          k_(p, L, n, f);
          break e;
        }
        (V && V(t, m, h),
          t === "focusout" &&
            (V = m._wrapperState) &&
            V.controlled &&
            m.type === "number" &&
            Hc(m, "number", m.value));
      }
      switch (((V = h ? yi(h) : window), t)) {
        case "focusin":
          (pm(V) || V.contentEditable === "true") &&
            ((mi = V), (rh = h), (Qs = null));
          break;
        case "focusout":
          Qs = rh = mi = null;
          break;
        case "mousedown":
          ih = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((ih = !1), vm(p, n, f));
          break;
        case "selectionchange":
          if (M0) break;
        case "keydown":
        case "keyup":
          vm(p, n, f);
      }
      var _;
      if (vd)
        e: {
          switch (t) {
            case "compositionstart":
              var g = "onCompositionStart";
              break e;
            case "compositionend":
              g = "onCompositionEnd";
              break e;
            case "compositionupdate":
              g = "onCompositionUpdate";
              break e;
          }
          g = void 0;
        }
      else
        pi
          ? C_(t, n) && (g = "onCompositionEnd")
          : t === "keydown" && n.keyCode === 229 && (g = "onCompositionStart");
      (g &&
        (A_ &&
          n.locale !== "ko" &&
          (pi || g !== "onCompositionStart"
            ? g === "onCompositionEnd" && pi && (_ = S_())
            : ((Hn = f),
              (gd = "value" in Hn ? Hn.value : Hn.textContent),
              (pi = !0))),
        (V = hl(h, g)),
        0 < V.length &&
          ((g = new cm(g, t, null, n, f)),
          p.push({ event: g, listeners: V }),
          _ ? (g.data = _) : ((_ = R_(n)), _ !== null && (g.data = _)))),
        (_ = S0 ? A0(t, n) : C0(t, n)) &&
          ((h = hl(h, "onBeforeInput")),
          0 < h.length &&
            ((f = new cm("onBeforeInput", "beforeinput", null, n, f)),
            p.push({ event: f, listeners: h }),
            (f.data = _))));
    }
    U_(p, e);
  });
}
function go(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function hl(t, e) {
  for (var n = e + "Capture", r = []; t !== null; ) {
    var i = t,
      s = i.stateNode;
    (i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = lo(t, n)),
      s != null && r.unshift(go(t, s, i)),
      (s = lo(t, e)),
      s != null && r.push(go(t, s, i))),
      (t = t.return));
  }
  return r;
}
function oi(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function Tm(t, e, n, r, i) {
  for (var s = e._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      u = l.alternate,
      h = l.stateNode;
    if (u !== null && u === r) break;
    (l.tag === 5 &&
      h !== null &&
      ((l = h),
      i
        ? ((u = lo(n, s)), u != null && o.unshift(go(n, u, l)))
        : i || ((u = lo(n, s)), u != null && o.push(go(n, u, l)))),
      (n = n.return));
  }
  o.length !== 0 && t.push({ event: e, listeners: o });
}
var j0 = /\r\n?/g,
  B0 = /\u0000|\uFFFD/g;
function Im(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      j0,
      `
`,
    )
    .replace(B0, "");
}
function Ia(t, e, n) {
  if (((e = Im(e)), Im(t) !== e && n)) throw Error(U(425));
}
function dl() {}
var sh = null,
  oh = null;
function ah(t, e) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var lh = typeof setTimeout == "function" ? setTimeout : void 0,
  z0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Sm = typeof Promise == "function" ? Promise : void 0,
  $0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Sm < "u"
        ? function (t) {
            return Sm.resolve(null).then(t).catch(W0);
          }
        : lh;
function W0(t) {
  setTimeout(function () {
    throw t;
  });
}
function hc(t, e) {
  var n = e,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((t.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          (t.removeChild(i), ho(e));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  ho(e);
}
function Jn(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function Am(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--;
      } else n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var Zi = Math.random().toString(36).slice(2),
  Yt = "__reactFiber$" + Zi,
  yo = "__reactProps$" + Zi,
  _n = "__reactContainer$" + Zi,
  uh = "__reactEvents$" + Zi,
  H0 = "__reactListeners$" + Zi,
  q0 = "__reactHandles$" + Zi;
function Vr(t) {
  var e = t[Yt];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[_n] || n[Yt])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = Am(t); t !== null; ) {
          if ((n = t[Yt])) return n;
          t = Am(t);
        }
      return e;
    }
    ((t = n), (n = t.parentNode));
  }
  return null;
}
function Fo(t) {
  return (
    (t = t[Yt] || t[_n]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function yi(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(U(33));
}
function Jl(t) {
  return t[yo] || null;
}
var ch = [],
  _i = -1;
function gr(t) {
  return { current: t };
}
function pe(t) {
  0 > _i || ((t.current = ch[_i]), (ch[_i] = null), _i--);
}
function ce(t, e) {
  (_i++, (ch[_i] = t.current), (t.current = e));
}
var lr = {},
  et = gr(lr),
  dt = gr(!1),
  Br = lr;
function bi(t, e) {
  var n = t.type.contextTypes;
  if (!n) return lr;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = e[s];
  return (
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ft(t) {
  return ((t = t.childContextTypes), t != null);
}
function fl() {
  (pe(dt), pe(et));
}
function Cm(t, e, n) {
  if (et.current !== lr) throw Error(U(168));
  (ce(et, e), ce(dt, n));
}
function B_(t, e, n) {
  var r = t.stateNode;
  if (((e = e.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(U(108, NI(t) || "Unknown", i));
  return ve({}, n, r);
}
function pl(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || lr),
    (Br = et.current),
    ce(et, t),
    ce(dt, dt.current),
    !0
  );
}
function Rm(t, e, n) {
  var r = t.stateNode;
  if (!r) throw Error(U(169));
  (n
    ? ((t = B_(t, e, Br)),
      (r.__reactInternalMemoizedMergedChildContext = t),
      pe(dt),
      pe(et),
      ce(et, t))
    : pe(dt),
    ce(dt, n));
}
var ln = null,
  Xl = !1,
  dc = !1;
function z_(t) {
  ln === null ? (ln = [t]) : ln.push(t);
}
function G0(t) {
  ((Xl = !0), z_(t));
}
function yr() {
  if (!dc && ln !== null) {
    dc = !0;
    var t = 0,
      e = ae;
    try {
      var n = ln;
      for (ae = 1; t < n.length; t++) {
        var r = n[t];
        do r = r(!0);
        while (r !== null);
      }
      ((ln = null), (Xl = !1));
    } catch (i) {
      throw (ln !== null && (ln = ln.slice(t + 1)), f_(dd, yr), i);
    } finally {
      ((ae = e), (dc = !1));
    }
  }
  return null;
}
var vi = [],
  Ei = 0,
  ml = null,
  gl = 0,
  At = [],
  Ct = 0,
  zr = null,
  cn = 1,
  hn = "";
function Nr(t, e) {
  ((vi[Ei++] = gl), (vi[Ei++] = ml), (ml = t), (gl = e));
}
function $_(t, e, n) {
  ((At[Ct++] = cn), (At[Ct++] = hn), (At[Ct++] = zr), (zr = t));
  var r = cn;
  t = hn;
  var i = 32 - Ut(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var s = 32 - Ut(e) + i;
  if (30 < s) {
    var o = i - (i % 5);
    ((s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (cn = (1 << (32 - Ut(e) + i)) | (n << i) | r),
      (hn = s + t));
  } else ((cn = (1 << s) | (n << i) | r), (hn = t));
}
function wd(t) {
  t.return !== null && (Nr(t, 1), $_(t, 1, 0));
}
function Td(t) {
  for (; t === ml; )
    ((ml = vi[--Ei]), (vi[Ei] = null), (gl = vi[--Ei]), (vi[Ei] = null));
  for (; t === zr; )
    ((zr = At[--Ct]),
      (At[Ct] = null),
      (hn = At[--Ct]),
      (At[Ct] = null),
      (cn = At[--Ct]),
      (At[Ct] = null));
}
var Et = null,
  _t = null,
  ge = !1,
  bt = null;
function W_(t, e) {
  var n = kt(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n));
}
function km(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (Et = t), (_t = Jn(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (Et = t), (_t = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = zr !== null ? { id: cn, overflow: hn } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = kt(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (Et = t),
            (_t = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function hh(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function dh(t) {
  if (ge) {
    var e = _t;
    if (e) {
      var n = e;
      if (!km(t, e)) {
        if (hh(t)) throw Error(U(418));
        e = Jn(n.nextSibling);
        var r = Et;
        e && km(t, e)
          ? W_(r, n)
          : ((t.flags = (t.flags & -4097) | 2), (ge = !1), (Et = t));
      }
    } else {
      if (hh(t)) throw Error(U(418));
      ((t.flags = (t.flags & -4097) | 2), (ge = !1), (Et = t));
    }
  }
}
function Pm(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  Et = t;
}
function Sa(t) {
  if (t !== Et) return !1;
  if (!ge) return (Pm(t), (ge = !0), !1);
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== "head" && e !== "body" && !ah(t.type, t.memoizedProps))),
    e && (e = _t))
  ) {
    if (hh(t)) throw (H_(), Error(U(418)));
    for (; e; ) (W_(t, e), (e = Jn(e.nextSibling)));
  }
  if ((Pm(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(U(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              _t = Jn(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      _t = null;
    }
  } else _t = Et ? Jn(t.stateNode.nextSibling) : null;
  return !0;
}
function H_() {
  for (var t = _t; t; ) t = Jn(t.nextSibling);
}
function Fi() {
  ((_t = Et = null), (ge = !1));
}
function Id(t) {
  bt === null ? (bt = [t]) : bt.push(t);
}
var K0 = Cn.ReactCurrentBatchConfig;
function xs(t, e, n) {
  if (
    ((t = n.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(U(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(U(147, t));
      var i = r,
        s = "" + t;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === s
        ? e.ref
        : ((e = function (o) {
            var l = i.refs;
            o === null ? delete l[s] : (l[s] = o);
          }),
          (e._stringRef = s),
          e);
    }
    if (typeof t != "string") throw Error(U(284));
    if (!n._owner) throw Error(U(290, t));
  }
  return t;
}
function Aa(t, e) {
  throw (
    (t = Object.prototype.toString.call(e)),
    Error(
      U(
        31,
        t === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : t,
      ),
    )
  );
}
function Nm(t) {
  var e = t._init;
  return e(t._payload);
}
function q_(t) {
  function e(S, E) {
    if (t) {
      var R = S.deletions;
      R === null ? ((S.deletions = [E]), (S.flags |= 16)) : R.push(E);
    }
  }
  function n(S, E) {
    if (!t) return null;
    for (; E !== null; ) (e(S, E), (E = E.sibling));
    return null;
  }
  function r(S, E) {
    for (S = new Map(); E !== null; )
      (E.key !== null ? S.set(E.key, E) : S.set(E.index, E), (E = E.sibling));
    return S;
  }
  function i(S, E) {
    return ((S = tr(S, E)), (S.index = 0), (S.sibling = null), S);
  }
  function s(S, E, R) {
    return (
      (S.index = R),
      t
        ? ((R = S.alternate),
          R !== null
            ? ((R = R.index), R < E ? ((S.flags |= 2), E) : R)
            : ((S.flags |= 2), E))
        : ((S.flags |= 1048576), E)
    );
  }
  function o(S) {
    return (t && S.alternate === null && (S.flags |= 2), S);
  }
  function l(S, E, R, O) {
    return E === null || E.tag !== 6
      ? ((E = vc(R, S.mode, O)), (E.return = S), E)
      : ((E = i(E, R)), (E.return = S), E);
  }
  function u(S, E, R, O) {
    var L = R.type;
    return L === fi
      ? f(S, E, R.props.children, O, R.key)
      : E !== null &&
          (E.elementType === L ||
            (typeof L == "object" &&
              L !== null &&
              L.$$typeof === Fn &&
              Nm(L) === E.type))
        ? ((O = i(E, R.props)), (O.ref = xs(S, E, R)), (O.return = S), O)
        : ((O = Ga(R.type, R.key, R.props, null, S.mode, O)),
          (O.ref = xs(S, E, R)),
          (O.return = S),
          O);
  }
  function h(S, E, R, O) {
    return E === null ||
      E.tag !== 4 ||
      E.stateNode.containerInfo !== R.containerInfo ||
      E.stateNode.implementation !== R.implementation
      ? ((E = Ec(R, S.mode, O)), (E.return = S), E)
      : ((E = i(E, R.children || [])), (E.return = S), E);
  }
  function f(S, E, R, O, L) {
    return E === null || E.tag !== 7
      ? ((E = Ur(R, S.mode, O, L)), (E.return = S), E)
      : ((E = i(E, R)), (E.return = S), E);
  }
  function p(S, E, R) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return ((E = vc("" + E, S.mode, R)), (E.return = S), E);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case pa:
          return (
            (R = Ga(E.type, E.key, E.props, null, S.mode, R)),
            (R.ref = xs(S, null, E)),
            (R.return = S),
            R
          );
        case di:
          return ((E = Ec(E, S.mode, R)), (E.return = S), E);
        case Fn:
          var O = E._init;
          return p(S, O(E._payload), R);
      }
      if (Ms(E) || Cs(E))
        return ((E = Ur(E, S.mode, R, null)), (E.return = S), E);
      Aa(S, E);
    }
    return null;
  }
  function m(S, E, R, O) {
    var L = E !== null ? E.key : null;
    if ((typeof R == "string" && R !== "") || typeof R == "number")
      return L !== null ? null : l(S, E, "" + R, O);
    if (typeof R == "object" && R !== null) {
      switch (R.$$typeof) {
        case pa:
          return R.key === L ? u(S, E, R, O) : null;
        case di:
          return R.key === L ? h(S, E, R, O) : null;
        case Fn:
          return ((L = R._init), m(S, E, L(R._payload), O));
      }
      if (Ms(R) || Cs(R)) return L !== null ? null : f(S, E, R, O, null);
      Aa(S, R);
    }
    return null;
  }
  function I(S, E, R, O, L) {
    if ((typeof O == "string" && O !== "") || typeof O == "number")
      return ((S = S.get(R) || null), l(E, S, "" + O, L));
    if (typeof O == "object" && O !== null) {
      switch (O.$$typeof) {
        case pa:
          return (
            (S = S.get(O.key === null ? R : O.key) || null),
            u(E, S, O, L)
          );
        case di:
          return (
            (S = S.get(O.key === null ? R : O.key) || null),
            h(E, S, O, L)
          );
        case Fn:
          var V = O._init;
          return I(S, E, R, V(O._payload), L);
      }
      if (Ms(O) || Cs(O)) return ((S = S.get(R) || null), f(E, S, O, L, null));
      Aa(E, O);
    }
    return null;
  }
  function N(S, E, R, O) {
    for (
      var L = null, V = null, _ = E, g = (E = 0), v = null;
      _ !== null && g < R.length;
      g++
    ) {
      _.index > g ? ((v = _), (_ = null)) : (v = _.sibling);
      var T = m(S, _, R[g], O);
      if (T === null) {
        _ === null && (_ = v);
        break;
      }
      (t && _ && T.alternate === null && e(S, _),
        (E = s(T, E, g)),
        V === null ? (L = T) : (V.sibling = T),
        (V = T),
        (_ = v));
    }
    if (g === R.length) return (n(S, _), ge && Nr(S, g), L);
    if (_ === null) {
      for (; g < R.length; g++)
        ((_ = p(S, R[g], O)),
          _ !== null &&
            ((E = s(_, E, g)),
            V === null ? (L = _) : (V.sibling = _),
            (V = _)));
      return (ge && Nr(S, g), L);
    }
    for (_ = r(S, _); g < R.length; g++)
      ((v = I(_, S, g, R[g], O)),
        v !== null &&
          (t && v.alternate !== null && _.delete(v.key === null ? g : v.key),
          (E = s(v, E, g)),
          V === null ? (L = v) : (V.sibling = v),
          (V = v)));
    return (
      t &&
        _.forEach(function (A) {
          return e(S, A);
        }),
      ge && Nr(S, g),
      L
    );
  }
  function D(S, E, R, O) {
    var L = Cs(R);
    if (typeof L != "function") throw Error(U(150));
    if (((R = L.call(R)), R == null)) throw Error(U(151));
    for (
      var V = (L = null), _ = E, g = (E = 0), v = null, T = R.next();
      _ !== null && !T.done;
      g++, T = R.next()
    ) {
      _.index > g ? ((v = _), (_ = null)) : (v = _.sibling);
      var A = m(S, _, T.value, O);
      if (A === null) {
        _ === null && (_ = v);
        break;
      }
      (t && _ && A.alternate === null && e(S, _),
        (E = s(A, E, g)),
        V === null ? (L = A) : (V.sibling = A),
        (V = A),
        (_ = v));
    }
    if (T.done) return (n(S, _), ge && Nr(S, g), L);
    if (_ === null) {
      for (; !T.done; g++, T = R.next())
        ((T = p(S, T.value, O)),
          T !== null &&
            ((E = s(T, E, g)),
            V === null ? (L = T) : (V.sibling = T),
            (V = T)));
      return (ge && Nr(S, g), L);
    }
    for (_ = r(S, _); !T.done; g++, T = R.next())
      ((T = I(_, S, g, T.value, O)),
        T !== null &&
          (t && T.alternate !== null && _.delete(T.key === null ? g : T.key),
          (E = s(T, E, g)),
          V === null ? (L = T) : (V.sibling = T),
          (V = T)));
    return (
      t &&
        _.forEach(function (k) {
          return e(S, k);
        }),
      ge && Nr(S, g),
      L
    );
  }
  function F(S, E, R, O) {
    if (
      (typeof R == "object" &&
        R !== null &&
        R.type === fi &&
        R.key === null &&
        (R = R.props.children),
      typeof R == "object" && R !== null)
    ) {
      switch (R.$$typeof) {
        case pa:
          e: {
            for (var L = R.key, V = E; V !== null; ) {
              if (V.key === L) {
                if (((L = R.type), L === fi)) {
                  if (V.tag === 7) {
                    (n(S, V.sibling),
                      (E = i(V, R.props.children)),
                      (E.return = S),
                      (S = E));
                    break e;
                  }
                } else if (
                  V.elementType === L ||
                  (typeof L == "object" &&
                    L !== null &&
                    L.$$typeof === Fn &&
                    Nm(L) === V.type)
                ) {
                  (n(S, V.sibling),
                    (E = i(V, R.props)),
                    (E.ref = xs(S, V, R)),
                    (E.return = S),
                    (S = E));
                  break e;
                }
                n(S, V);
                break;
              } else e(S, V);
              V = V.sibling;
            }
            R.type === fi
              ? ((E = Ur(R.props.children, S.mode, O, R.key)),
                (E.return = S),
                (S = E))
              : ((O = Ga(R.type, R.key, R.props, null, S.mode, O)),
                (O.ref = xs(S, E, R)),
                (O.return = S),
                (S = O));
          }
          return o(S);
        case di:
          e: {
            for (V = R.key; E !== null; ) {
              if (E.key === V)
                if (
                  E.tag === 4 &&
                  E.stateNode.containerInfo === R.containerInfo &&
                  E.stateNode.implementation === R.implementation
                ) {
                  (n(S, E.sibling),
                    (E = i(E, R.children || [])),
                    (E.return = S),
                    (S = E));
                  break e;
                } else {
                  n(S, E);
                  break;
                }
              else e(S, E);
              E = E.sibling;
            }
            ((E = Ec(R, S.mode, O)), (E.return = S), (S = E));
          }
          return o(S);
        case Fn:
          return ((V = R._init), F(S, E, V(R._payload), O));
      }
      if (Ms(R)) return N(S, E, R, O);
      if (Cs(R)) return D(S, E, R, O);
      Aa(S, R);
    }
    return (typeof R == "string" && R !== "") || typeof R == "number"
      ? ((R = "" + R),
        E !== null && E.tag === 6
          ? (n(S, E.sibling), (E = i(E, R)), (E.return = S), (S = E))
          : (n(S, E), (E = vc(R, S.mode, O)), (E.return = S), (S = E)),
        o(S))
      : n(S, E);
  }
  return F;
}
var Ui = q_(!0),
  G_ = q_(!1),
  yl = gr(null),
  _l = null,
  wi = null,
  Sd = null;
function Ad() {
  Sd = wi = _l = null;
}
function Cd(t) {
  var e = yl.current;
  (pe(yl), (t._currentValue = e));
}
function fh(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
        : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function ki(t, e) {
  ((_l = t),
    (Sd = wi = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && (ht = !0), (t.firstContext = null)));
}
function Nt(t) {
  var e = t._currentValue;
  if (Sd !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), wi === null)) {
      if (_l === null) throw Error(U(308));
      ((wi = t), (_l.dependencies = { lanes: 0, firstContext: t }));
    } else wi = wi.next = t;
  return e;
}
var Or = null;
function Rd(t) {
  Or === null ? (Or = [t]) : Or.push(t);
}
function K_(t, e, n, r) {
  var i = e.interleaved;
  return (
    i === null ? ((n.next = n), Rd(e)) : ((n.next = i.next), (i.next = n)),
    (e.interleaved = n),
    vn(t, r)
  );
}
function vn(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    ((t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Un = !1;
function kd(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Q_(t, e) {
  ((t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      }));
}
function pn(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Xn(t, e, n) {
  var r = t.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ie & 2)) {
    var i = r.pending;
    return (
      i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
      (r.pending = e),
      vn(t, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((e.next = e), Rd(r)) : ((e.next = i.next), (i.next = e)),
    (r.interleaved = e),
    vn(t, n)
  );
}
function Ba(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var r = e.lanes;
    ((r &= t.pendingLanes), (n |= r), (e.lanes = n), fd(t, n));
  }
}
function xm(t, e) {
  var n = t.updateQueue,
    r = t.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (s === null ? (i = s = o) : (s = s.next = o), (n = n.next));
      } while (n !== null);
      s === null ? (i = s = e) : (s = s.next = e);
    } else i = s = e;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (t.updateQueue = n));
    return;
  }
  ((t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e));
}
function vl(t, e, n, r) {
  var i = t.updateQueue;
  Un = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var u = l,
      h = u.next;
    ((u.next = null), o === null ? (s = h) : (o.next = h), (o = u));
    var f = t.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (l = f.lastBaseUpdate),
      l !== o &&
        (l === null ? (f.firstBaseUpdate = h) : (l.next = h),
        (f.lastBaseUpdate = u)));
  }
  if (s !== null) {
    var p = i.baseState;
    ((o = 0), (f = h = u = null), (l = s));
    do {
      var m = l.lane,
        I = l.eventTime;
      if ((r & m) === m) {
        f !== null &&
          (f = f.next =
            {
              eventTime: I,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var N = t,
            D = l;
          switch (((m = e), (I = n), D.tag)) {
            case 1:
              if (((N = D.payload), typeof N == "function")) {
                p = N.call(I, p, m);
                break e;
              }
              p = N;
              break e;
            case 3:
              N.flags = (N.flags & -65537) | 128;
            case 0:
              if (
                ((N = D.payload),
                (m = typeof N == "function" ? N.call(I, p, m) : N),
                m == null)
              )
                break e;
              p = ve({}, p, m);
              break e;
            case 2:
              Un = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((t.flags |= 64),
          (m = i.effects),
          m === null ? (i.effects = [l]) : m.push(l));
      } else
        ((I = {
          eventTime: I,
          lane: m,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          f === null ? ((h = f = I), (u = p)) : (f = f.next = I),
          (o |= m));
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        ((m = l),
          (l = m.next),
          (m.next = null),
          (i.lastBaseUpdate = m),
          (i.shared.pending = null));
      }
    } while (!0);
    if (
      (f === null && (u = p),
      (i.baseState = u),
      (i.firstBaseUpdate = h),
      (i.lastBaseUpdate = f),
      (e = i.shared.interleaved),
      e !== null)
    ) {
      i = e;
      do ((o |= i.lane), (i = i.next));
      while (i !== e);
    } else s === null && (i.shared.lanes = 0);
    ((Wr |= o), (t.lanes = o), (t.memoizedState = p));
  }
}
function Dm(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var r = t[e],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(U(191, i));
        i.call(r);
      }
    }
}
var Uo = {},
  Xt = gr(Uo),
  _o = gr(Uo),
  vo = gr(Uo);
function Lr(t) {
  if (t === Uo) throw Error(U(174));
  return t;
}
function Pd(t, e) {
  switch ((ce(vo, e), ce(_o, t), ce(Xt, Uo), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : Gc(null, "");
      break;
    default:
      ((t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = Gc(e, t)));
  }
  (pe(Xt), ce(Xt, e));
}
function ji() {
  (pe(Xt), pe(_o), pe(vo));
}
function Y_(t) {
  Lr(vo.current);
  var e = Lr(Xt.current),
    n = Gc(e, t.type);
  e !== n && (ce(_o, t), ce(Xt, n));
}
function Nd(t) {
  _o.current === t && (pe(Xt), pe(_o));
}
var ye = gr(0);
function El(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      ((e.child.return = e), (e = e.child));
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    ((e.sibling.return = e.return), (e = e.sibling));
  }
  return null;
}
var fc = [];
function xd() {
  for (var t = 0; t < fc.length; t++)
    fc[t]._workInProgressVersionPrimary = null;
  fc.length = 0;
}
var za = Cn.ReactCurrentDispatcher,
  pc = Cn.ReactCurrentBatchConfig,
  $r = 0,
  _e = null,
  De = null,
  Fe = null,
  wl = !1,
  Ys = !1,
  Eo = 0,
  Q0 = 0;
function Ke() {
  throw Error(U(321));
}
function Dd(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!$t(t[n], e[n])) return !1;
  return !0;
}
function Vd(t, e, n, r, i, s) {
  if (
    (($r = s),
    (_e = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (za.current = t === null || t.memoizedState === null ? Z0 : eS),
    (t = n(r, i)),
    Ys)
  ) {
    s = 0;
    do {
      if (((Ys = !1), (Eo = 0), 25 <= s)) throw Error(U(301));
      ((s += 1),
        (Fe = De = null),
        (e.updateQueue = null),
        (za.current = tS),
        (t = n(r, i)));
    } while (Ys);
  }
  if (
    ((za.current = Tl),
    (e = De !== null && De.next !== null),
    ($r = 0),
    (Fe = De = _e = null),
    (wl = !1),
    e)
  )
    throw Error(U(300));
  return t;
}
function Od() {
  var t = Eo !== 0;
  return ((Eo = 0), t);
}
function Kt() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (Fe === null ? (_e.memoizedState = Fe = t) : (Fe = Fe.next = t), Fe);
}
function xt() {
  if (De === null) {
    var t = _e.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = De.next;
  var e = Fe === null ? _e.memoizedState : Fe.next;
  if (e !== null) ((Fe = e), (De = t));
  else {
    if (t === null) throw Error(U(310));
    ((De = t),
      (t = {
        memoizedState: De.memoizedState,
        baseState: De.baseState,
        baseQueue: De.baseQueue,
        queue: De.queue,
        next: null,
      }),
      Fe === null ? (_e.memoizedState = Fe = t) : (Fe = Fe.next = t));
  }
  return Fe;
}
function wo(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function mc(t) {
  var e = xt(),
    n = e.queue;
  if (n === null) throw Error(U(311));
  n.lastRenderedReducer = t;
  var r = De,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      ((i.next = s.next), (s.next = o));
    }
    ((r.baseQueue = i = s), (n.pending = null));
  }
  if (i !== null) {
    ((s = i.next), (r = r.baseState));
    var l = (o = null),
      u = null,
      h = s;
    do {
      var f = h.lane;
      if (($r & f) === f)
        (u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null,
            }),
          (r = h.hasEagerState ? h.eagerState : t(r, h.action)));
      else {
        var p = {
          lane: f,
          action: h.action,
          hasEagerState: h.hasEagerState,
          eagerState: h.eagerState,
          next: null,
        };
        (u === null ? ((l = u = p), (o = r)) : (u = u.next = p),
          (_e.lanes |= f),
          (Wr |= f));
      }
      h = h.next;
    } while (h !== null && h !== s);
    (u === null ? (o = r) : (u.next = l),
      $t(r, e.memoizedState) || (ht = !0),
      (e.memoizedState = r),
      (e.baseState = o),
      (e.baseQueue = u),
      (n.lastRenderedState = r));
  }
  if (((t = n.interleaved), t !== null)) {
    i = t;
    do ((s = i.lane), (_e.lanes |= s), (Wr |= s), (i = i.next));
    while (i !== t);
  } else i === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function gc(t) {
  var e = xt(),
    n = e.queue;
  if (n === null) throw Error(U(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch,
    i = n.pending,
    s = e.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do ((s = t(s, o.action)), (o = o.next));
    while (o !== i);
    ($t(s, e.memoizedState) || (ht = !0),
      (e.memoizedState = s),
      e.baseQueue === null && (e.baseState = s),
      (n.lastRenderedState = s));
  }
  return [s, r];
}
function J_() {}
function X_(t, e) {
  var n = _e,
    r = xt(),
    i = e(),
    s = !$t(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (ht = !0)),
    (r = r.queue),
    Ld(tv.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || s || (Fe !== null && Fe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      To(9, ev.bind(null, n, r, i, e), void 0, null),
      Ue === null)
    )
      throw Error(U(349));
    $r & 30 || Z_(n, e, i);
  }
  return i;
}
function Z_(t, e, n) {
  ((t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = _e.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (_e.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t)));
}
function ev(t, e, n, r) {
  ((e.value = n), (e.getSnapshot = r), nv(e) && rv(t));
}
function tv(t, e, n) {
  return n(function () {
    nv(e) && rv(t);
  });
}
function nv(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !$t(t, n);
  } catch {
    return !0;
  }
}
function rv(t) {
  var e = vn(t, 1);
  e !== null && jt(e, t, 1, -1);
}
function Vm(t) {
  var e = Kt();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: wo,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = X0.bind(null, _e, t)),
    [e.memoizedState, t]
  );
}
function To(t, e, n, r) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
    (e = _e.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (_e.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
    t
  );
}
function iv() {
  return xt().memoizedState;
}
function $a(t, e, n, r) {
  var i = Kt();
  ((_e.flags |= t),
    (i.memoizedState = To(1 | e, n, void 0, r === void 0 ? null : r)));
}
function Zl(t, e, n, r) {
  var i = xt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (De !== null) {
    var o = De.memoizedState;
    if (((s = o.destroy), r !== null && Dd(r, o.deps))) {
      i.memoizedState = To(e, n, s, r);
      return;
    }
  }
  ((_e.flags |= t), (i.memoizedState = To(1 | e, n, s, r)));
}
function Om(t, e) {
  return $a(8390656, 8, t, e);
}
function Ld(t, e) {
  return Zl(2048, 8, t, e);
}
function sv(t, e) {
  return Zl(4, 2, t, e);
}
function ov(t, e) {
  return Zl(4, 4, t, e);
}
function av(t, e) {
  if (typeof e == "function")
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function lv(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null),
    Zl(4, 4, av.bind(null, e, t), n)
  );
}
function Md() {}
function uv(t, e) {
  var n = xt();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && Dd(e, r[1])
    ? r[0]
    : ((n.memoizedState = [t, e]), t);
}
function cv(t, e) {
  var n = xt();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && Dd(e, r[1])
    ? r[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function hv(t, e, n) {
  return $r & 21
    ? ($t(n, e) || ((n = g_()), (_e.lanes |= n), (Wr |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (ht = !0)), (t.memoizedState = n));
}
function Y0(t, e) {
  var n = ae;
  ((ae = n !== 0 && 4 > n ? n : 4), t(!0));
  var r = pc.transition;
  pc.transition = {};
  try {
    (t(!1), e());
  } finally {
    ((ae = n), (pc.transition = r));
  }
}
function dv() {
  return xt().memoizedState;
}
function J0(t, e, n) {
  var r = er(t);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    fv(t))
  )
    pv(e, n);
  else if (((n = K_(t, e, n, r)), n !== null)) {
    var i = st();
    (jt(n, t, r, i), mv(n, e, r));
  }
}
function X0(t, e, n) {
  var r = er(t),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (fv(t)) pv(e, i);
  else {
    var s = t.alternate;
    if (
      t.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = e.lastRenderedReducer), s !== null)
    )
      try {
        var o = e.lastRenderedState,
          l = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), $t(l, o))) {
          var u = e.interleaved;
          (u === null
            ? ((i.next = i), Rd(e))
            : ((i.next = u.next), (u.next = i)),
            (e.interleaved = i));
          return;
        }
      } catch {
      } finally {
      }
    ((n = K_(t, e, i, r)),
      n !== null && ((i = st()), jt(n, t, r, i), mv(n, e, r)));
  }
}
function fv(t) {
  var e = t.alternate;
  return t === _e || (e !== null && e === _e);
}
function pv(t, e) {
  Ys = wl = !0;
  var n = t.pending;
  (n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (t.pending = e));
}
function mv(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    ((r &= t.pendingLanes), (n |= r), (e.lanes = n), fd(t, n));
  }
}
var Tl = {
    readContext: Nt,
    useCallback: Ke,
    useContext: Ke,
    useEffect: Ke,
    useImperativeHandle: Ke,
    useInsertionEffect: Ke,
    useLayoutEffect: Ke,
    useMemo: Ke,
    useReducer: Ke,
    useRef: Ke,
    useState: Ke,
    useDebugValue: Ke,
    useDeferredValue: Ke,
    useTransition: Ke,
    useMutableSource: Ke,
    useSyncExternalStore: Ke,
    useId: Ke,
    unstable_isNewReconciler: !1,
  },
  Z0 = {
    readContext: Nt,
    useCallback: function (t, e) {
      return ((Kt().memoizedState = [t, e === void 0 ? null : e]), t);
    },
    useContext: Nt,
    useEffect: Om,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        $a(4194308, 4, av.bind(null, e, t), n)
      );
    },
    useLayoutEffect: function (t, e) {
      return $a(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return $a(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = Kt();
      return (
        (e = e === void 0 ? null : e),
        (t = t()),
        (n.memoizedState = [t, e]),
        t
      );
    },
    useReducer: function (t, e, n) {
      var r = Kt();
      return (
        (e = n !== void 0 ? n(e) : e),
        (r.memoizedState = r.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (r.queue = t),
        (t = t.dispatch = J0.bind(null, _e, t)),
        [r.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = Kt();
      return ((t = { current: t }), (e.memoizedState = t));
    },
    useState: Vm,
    useDebugValue: Md,
    useDeferredValue: function (t) {
      return (Kt().memoizedState = t);
    },
    useTransition: function () {
      var t = Vm(!1),
        e = t[0];
      return ((t = Y0.bind(null, t[1])), (Kt().memoizedState = t), [e, t]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var r = _e,
        i = Kt();
      if (ge) {
        if (n === void 0) throw Error(U(407));
        n = n();
      } else {
        if (((n = e()), Ue === null)) throw Error(U(349));
        $r & 30 || Z_(r, e, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: e };
      return (
        (i.queue = s),
        Om(tv.bind(null, r, s, t), [t]),
        (r.flags |= 2048),
        To(9, ev.bind(null, r, s, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = Kt(),
        e = Ue.identifierPrefix;
      if (ge) {
        var n = hn,
          r = cn;
        ((n = (r & ~(1 << (32 - Ut(r) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = Eo++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":"));
      } else ((n = Q0++), (e = ":" + e + "r" + n.toString(32) + ":"));
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  eS = {
    readContext: Nt,
    useCallback: uv,
    useContext: Nt,
    useEffect: Ld,
    useImperativeHandle: lv,
    useInsertionEffect: sv,
    useLayoutEffect: ov,
    useMemo: cv,
    useReducer: mc,
    useRef: iv,
    useState: function () {
      return mc(wo);
    },
    useDebugValue: Md,
    useDeferredValue: function (t) {
      var e = xt();
      return hv(e, De.memoizedState, t);
    },
    useTransition: function () {
      var t = mc(wo)[0],
        e = xt().memoizedState;
      return [t, e];
    },
    useMutableSource: J_,
    useSyncExternalStore: X_,
    useId: dv,
    unstable_isNewReconciler: !1,
  },
  tS = {
    readContext: Nt,
    useCallback: uv,
    useContext: Nt,
    useEffect: Ld,
    useImperativeHandle: lv,
    useInsertionEffect: sv,
    useLayoutEffect: ov,
    useMemo: cv,
    useReducer: gc,
    useRef: iv,
    useState: function () {
      return gc(wo);
    },
    useDebugValue: Md,
    useDeferredValue: function (t) {
      var e = xt();
      return De === null ? (e.memoizedState = t) : hv(e, De.memoizedState, t);
    },
    useTransition: function () {
      var t = gc(wo)[0],
        e = xt().memoizedState;
      return [t, e];
    },
    useMutableSource: J_,
    useSyncExternalStore: X_,
    useId: dv,
    unstable_isNewReconciler: !1,
  };
function Lt(t, e) {
  if (t && t.defaultProps) {
    ((e = ve({}, e)), (t = t.defaultProps));
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
function ph(t, e, n, r) {
  ((e = t.memoizedState),
    (n = n(r, e)),
    (n = n == null ? e : ve({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n));
}
var eu = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? ei(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var r = st(),
      i = er(t),
      s = pn(r, i);
    ((s.payload = e),
      n != null && (s.callback = n),
      (e = Xn(t, s, i)),
      e !== null && (jt(e, t, i, r), Ba(e, t, i)));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var r = st(),
      i = er(t),
      s = pn(r, i);
    ((s.tag = 1),
      (s.payload = e),
      n != null && (s.callback = n),
      (e = Xn(t, s, i)),
      e !== null && (jt(e, t, i, r), Ba(e, t, i)));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = st(),
      r = er(t),
      i = pn(n, r);
    ((i.tag = 2),
      e != null && (i.callback = e),
      (e = Xn(t, i, r)),
      e !== null && (jt(e, t, r, n), Ba(e, t, r)));
  },
};
function Lm(t, e, n, r, i, s, o) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(r, s, o)
      : e.prototype && e.prototype.isPureReactComponent
        ? !po(n, r) || !po(i, s)
        : !0
  );
}
function gv(t, e, n) {
  var r = !1,
    i = lr,
    s = e.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Nt(s))
      : ((i = ft(e) ? Br : et.current),
        (r = e.contextTypes),
        (s = (r = r != null) ? bi(t, i) : lr)),
    (e = new e(n, s)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = eu),
    (t.stateNode = e),
    (e._reactInternals = t),
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = i),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    e
  );
}
function Mm(t, e, n, r) {
  ((t = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && eu.enqueueReplaceState(e, e.state, null));
}
function mh(t, e, n, r) {
  var i = t.stateNode;
  ((i.props = n), (i.state = t.memoizedState), (i.refs = {}), kd(t));
  var s = e.contextType;
  (typeof s == "object" && s !== null
    ? (i.context = Nt(s))
    : ((s = ft(e) ? Br : et.current), (i.context = bi(t, s))),
    (i.state = t.memoizedState),
    (s = e.getDerivedStateFromProps),
    typeof s == "function" && (ph(t, e, s, n), (i.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((e = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      e !== i.state && eu.enqueueReplaceState(i, i.state, null),
      vl(t, n, i, r),
      (i.state = t.memoizedState)),
    typeof i.componentDidMount == "function" && (t.flags |= 4194308));
}
function Bi(t, e) {
  try {
    var n = "",
      r = e;
    do ((n += PI(r)), (r = r.return));
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: t, source: e, stack: i, digest: null };
}
function yc(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function gh(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var nS = typeof WeakMap == "function" ? WeakMap : Map;
function yv(t, e, n) {
  ((n = pn(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = e.value;
  return (
    (n.callback = function () {
      (Sl || ((Sl = !0), (Ch = r)), gh(t, e));
    }),
    n
  );
}
function _v(t, e, n) {
  ((n = pn(-1, n)), (n.tag = 3));
  var r = t.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = e.value;
    ((n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        gh(t, e);
      }));
  }
  var s = t.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        (gh(t, e),
          typeof r != "function" &&
            (Zn === null ? (Zn = new Set([this])) : Zn.add(this)));
        var o = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function bm(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new nS();
    var i = new Set();
    r.set(e, i);
  } else ((i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i)));
  i.has(n) || (i.add(n), (t = gS.bind(null, t, e, n)), e.then(t, t));
}
function Fm(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function Um(t, e, n, r, i) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = i), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((e = pn(-1, 1)), (e.tag = 2), Xn(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var rS = Cn.ReactCurrentOwner,
  ht = !1;
function it(t, e, n, r) {
  e.child = t === null ? G_(e, null, n, r) : Ui(e, t.child, n, r);
}
function jm(t, e, n, r, i) {
  n = n.render;
  var s = e.ref;
  return (
    ki(e, i),
    (r = Vd(t, e, n, r, s, i)),
    (n = Od()),
    t !== null && !ht
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        En(t, e, i))
      : (ge && n && wd(e), (e.flags |= 1), it(t, e, r, i), e.child)
  );
}
function Bm(t, e, n, r, i) {
  if (t === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Wd(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = s), vv(t, e, s, r, i))
      : ((t = Ga(n.type, null, r, e, e.mode, i)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((s = t.child), !(t.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : po), n(o, r) && t.ref === e.ref)
    )
      return En(t, e, i);
  }
  return (
    (e.flags |= 1),
    (t = tr(s, r)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function vv(t, e, n, r, i) {
  if (t !== null) {
    var s = t.memoizedProps;
    if (po(s, r) && t.ref === e.ref)
      if (((ht = !1), (e.pendingProps = r = s), (t.lanes & i) !== 0))
        t.flags & 131072 && (ht = !0);
      else return ((e.lanes = t.lanes), En(t, e, i));
  }
  return yh(t, e, n, r, i);
}
function Ev(t, e, n) {
  var r = e.pendingProps,
    i = r.children,
    s = t !== null ? t.memoizedState : null;
  if (r.mode === "hidden")
    if (!(e.mode & 1))
      ((e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ce(Ii, gt),
        (gt |= n));
    else {
      if (!(n & 1073741824))
        return (
          (t = s !== null ? s.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          ce(Ii, gt),
          (gt |= t),
          null
        );
      ((e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        ce(Ii, gt),
        (gt |= r));
    }
  else
    (s !== null ? ((r = s.baseLanes | n), (e.memoizedState = null)) : (r = n),
      ce(Ii, gt),
      (gt |= r));
  return (it(t, e, i, n), e.child);
}
function wv(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function yh(t, e, n, r, i) {
  var s = ft(n) ? Br : et.current;
  return (
    (s = bi(e, s)),
    ki(e, i),
    (n = Vd(t, e, n, r, s, i)),
    (r = Od()),
    t !== null && !ht
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        En(t, e, i))
      : (ge && r && wd(e), (e.flags |= 1), it(t, e, n, i), e.child)
  );
}
function zm(t, e, n, r, i) {
  if (ft(n)) {
    var s = !0;
    pl(e);
  } else s = !1;
  if ((ki(e, i), e.stateNode === null))
    (Wa(t, e), gv(e, n, r), mh(e, n, r, i), (r = !0));
  else if (t === null) {
    var o = e.stateNode,
      l = e.memoizedProps;
    o.props = l;
    var u = o.context,
      h = n.contextType;
    typeof h == "object" && h !== null
      ? (h = Nt(h))
      : ((h = ft(n) ? Br : et.current), (h = bi(e, h)));
    var f = n.getDerivedStateFromProps,
      p =
        typeof f == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    (p ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || u !== h) && Mm(e, o, r, h)),
      (Un = !1));
    var m = e.memoizedState;
    ((o.state = m),
      vl(e, r, o, i),
      (u = e.memoizedState),
      l !== r || m !== u || dt.current || Un
        ? (typeof f == "function" && (ph(e, n, f, r), (u = e.memoizedState)),
          (l = Un || Lm(e, n, l, r, m, u, h))
            ? (p ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = h),
          (r = l))
        : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
          (r = !1)));
  } else {
    ((o = e.stateNode),
      Q_(t, e),
      (l = e.memoizedProps),
      (h = e.type === e.elementType ? l : Lt(e.type, l)),
      (o.props = h),
      (p = e.pendingProps),
      (m = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Nt(u))
        : ((u = ft(n) ? Br : et.current), (u = bi(e, u))));
    var I = n.getDerivedStateFromProps;
    ((f =
      typeof I == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== p || m !== u) && Mm(e, o, r, u)),
      (Un = !1),
      (m = e.memoizedState),
      (o.state = m),
      vl(e, r, o, i));
    var N = e.memoizedState;
    l !== p || m !== N || dt.current || Un
      ? (typeof I == "function" && (ph(e, n, I, r), (N = e.memoizedState)),
        (h = Un || Lm(e, n, h, r, m, N, u) || !1)
          ? (f ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, N, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, N, u)),
            typeof o.componentDidUpdate == "function" && (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === t.memoizedProps && m === t.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === t.memoizedProps && m === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = N)),
        (o.props = r),
        (o.state = N),
        (o.context = u),
        (r = h))
      : (typeof o.componentDidUpdate != "function" ||
          (l === t.memoizedProps && m === t.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === t.memoizedProps && m === t.memoizedState) ||
          (e.flags |= 1024),
        (r = !1));
  }
  return _h(t, e, n, r, s, i);
}
function _h(t, e, n, r, i, s) {
  wv(t, e);
  var o = (e.flags & 128) !== 0;
  if (!r && !o) return (i && Rm(e, n, !1), En(t, e, s));
  ((r = e.stateNode), (rS.current = e));
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (e.flags |= 1),
    t !== null && o
      ? ((e.child = Ui(e, t.child, null, s)), (e.child = Ui(e, null, l, s)))
      : it(t, e, l, s),
    (e.memoizedState = r.state),
    i && Rm(e, n, !0),
    e.child
  );
}
function Tv(t) {
  var e = t.stateNode;
  (e.pendingContext
    ? Cm(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && Cm(t, e.context, !1),
    Pd(t, e.containerInfo));
}
function $m(t, e, n, r, i) {
  return (Fi(), Id(i), (e.flags |= 256), it(t, e, n, r), e.child);
}
var vh = { dehydrated: null, treeContext: null, retryLane: 0 };
function Eh(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function Iv(t, e, n) {
  var r = e.pendingProps,
    i = ye.current,
    s = !1,
    o = (e.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((s = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (i |= 1),
    ce(ye, i & 1),
    t === null)
  )
    return (
      dh(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((o = r.children),
          (t = r.fallback),
          s
            ? ((r = e.mode),
              (s = e.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = ru(o, r, 0, null)),
              (t = Ur(t, r, n, null)),
              (s.return = e),
              (t.return = e),
              (s.sibling = t),
              (e.child = s),
              (e.child.memoizedState = Eh(n)),
              (e.memoizedState = vh),
              t)
            : bd(e, o))
    );
  if (((i = t.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return iS(t, e, o, r, l, i, n);
  if (s) {
    ((s = r.fallback), (o = e.mode), (i = t.child), (l = i.sibling));
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && e.child !== i
        ? ((r = e.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (e.deletions = null))
        : ((r = tr(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (s = tr(l, s)) : ((s = Ur(s, o, n, null)), (s.flags |= 2)),
      (s.return = e),
      (r.return = e),
      (r.sibling = s),
      (e.child = r),
      (r = s),
      (s = e.child),
      (o = t.child.memoizedState),
      (o =
        o === null
          ? Eh(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = t.childLanes & ~n),
      (e.memoizedState = vh),
      r
    );
  }
  return (
    (s = t.child),
    (t = s.sibling),
    (r = tr(s, { mode: "visible", children: r.children })),
    !(e.mode & 1) && (r.lanes = n),
    (r.return = e),
    (r.sibling = null),
    t !== null &&
      ((n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = r),
    (e.memoizedState = null),
    r
  );
}
function bd(t, e) {
  return (
    (e = ru({ mode: "visible", children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function Ca(t, e, n, r) {
  return (
    r !== null && Id(r),
    Ui(e, t.child, null, n),
    (t = bd(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function iS(t, e, n, r, i, s, o) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (r = yc(Error(U(422)))), Ca(t, e, o, r))
      : e.memoizedState !== null
        ? ((e.child = t.child), (e.flags |= 128), null)
        : ((s = r.fallback),
          (i = e.mode),
          (r = ru({ mode: "visible", children: r.children }, i, 0, null)),
          (s = Ur(s, i, o, null)),
          (s.flags |= 2),
          (r.return = e),
          (s.return = e),
          (r.sibling = s),
          (e.child = r),
          e.mode & 1 && Ui(e, t.child, null, o),
          (e.child.memoizedState = Eh(o)),
          (e.memoizedState = vh),
          s);
  if (!(e.mode & 1)) return Ca(t, e, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (
      (r = l),
      (s = Error(U(419))),
      (r = yc(s, r, void 0)),
      Ca(t, e, o, r)
    );
  }
  if (((l = (o & t.childLanes) !== 0), ht || l)) {
    if (((r = Ue), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      ((i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), vn(t, i), jt(r, t, i, -1)));
    }
    return ($d(), (r = yc(Error(U(421)))), Ca(t, e, o, r));
  }
  return i.data === "$?"
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = yS.bind(null, t)),
      (i._reactRetry = e),
      null)
    : ((t = s.treeContext),
      (_t = Jn(i.nextSibling)),
      (Et = e),
      (ge = !0),
      (bt = null),
      t !== null &&
        ((At[Ct++] = cn),
        (At[Ct++] = hn),
        (At[Ct++] = zr),
        (cn = t.id),
        (hn = t.overflow),
        (zr = e)),
      (e = bd(e, r.children)),
      (e.flags |= 4096),
      e);
}
function Wm(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  (r !== null && (r.lanes |= e), fh(t.return, e, n));
}
function _c(t, e, n, r, i) {
  var s = t.memoizedState;
  s === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = e),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Sv(t, e, n) {
  var r = e.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((it(t, e, r.children, n), (r = ye.current), r & 2))
    ((r = (r & 1) | 2), (e.flags |= 128));
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Wm(t, n, e);
        else if (t.tag === 19) Wm(t, n, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    r &= 1;
  }
  if ((ce(ye, r), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = e.child, i = null; n !== null; )
          ((t = n.alternate),
            t !== null && El(t) === null && (i = n),
            (n = n.sibling));
        ((n = i),
          n === null
            ? ((i = e.child), (e.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          _c(e, !1, i, n, s));
        break;
      case "backwards":
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (((t = i.alternate), t !== null && El(t) === null)) {
            e.child = i;
            break;
          }
          ((t = i.sibling), (i.sibling = n), (n = i), (i = t));
        }
        _c(e, !0, n, null, s);
        break;
      case "together":
        _c(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function Wa(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function En(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (Wr |= e.lanes),
    !(n & e.childLanes))
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error(U(153));
  if (e.child !== null) {
    for (
      t = e.child, n = tr(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;
    )
      ((t = t.sibling),
        (n = n.sibling = tr(t, t.pendingProps)),
        (n.return = e));
    n.sibling = null;
  }
  return e.child;
}
function sS(t, e, n) {
  switch (e.tag) {
    case 3:
      (Tv(e), Fi());
      break;
    case 5:
      Y_(e);
      break;
    case 1:
      ft(e.type) && pl(e);
      break;
    case 4:
      Pd(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        i = e.memoizedProps.value;
      (ce(yl, r._currentValue), (r._currentValue = i));
      break;
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ce(ye, ye.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
            ? Iv(t, e, n)
            : (ce(ye, ye.current & 1),
              (t = En(t, e, n)),
              t !== null ? t.sibling : null);
      ce(ye, ye.current & 1);
      break;
    case 19:
      if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (r) return Sv(t, e, n);
        e.flags |= 128;
      }
      if (
        ((i = e.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ce(ye, ye.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((e.lanes = 0), Ev(t, e, n));
  }
  return En(t, e, n);
}
var Av, wh, Cv, Rv;
Av = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
wh = function () {};
Cv = function (t, e, n, r) {
  var i = t.memoizedProps;
  if (i !== r) {
    ((t = e.stateNode), Lr(Xt.current));
    var s = null;
    switch (n) {
      case "input":
        ((i = $c(t, i)), (r = $c(t, r)), (s = []));
        break;
      case "select":
        ((i = ve({}, i, { value: void 0 })),
          (r = ve({}, r, { value: void 0 })),
          (s = []));
        break;
      case "textarea":
        ((i = qc(t, i)), (r = qc(t, r)), (s = []));
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (t.onclick = dl);
    }
    Kc(n, r);
    var o;
    n = null;
    for (h in i)
      if (!r.hasOwnProperty(h) && i.hasOwnProperty(h) && i[h] != null)
        if (h === "style") {
          var l = i[h];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          h !== "dangerouslySetInnerHTML" &&
            h !== "children" &&
            h !== "suppressContentEditableWarning" &&
            h !== "suppressHydrationWarning" &&
            h !== "autoFocus" &&
            (oo.hasOwnProperty(h)
              ? s || (s = [])
              : (s = s || []).push(h, null));
    for (h in r) {
      var u = r[h];
      if (
        ((l = i != null ? i[h] : void 0),
        r.hasOwnProperty(h) && u !== l && (u != null || l != null))
      )
        if (h === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                l[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else (n || (s || (s = []), s.push(h, n)), (n = u));
        else
          h === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (s = s || []).push(h, u))
            : h === "children"
              ? (typeof u != "string" && typeof u != "number") ||
                (s = s || []).push(h, "" + u)
              : h !== "suppressContentEditableWarning" &&
                h !== "suppressHydrationWarning" &&
                (oo.hasOwnProperty(h)
                  ? (u != null && h === "onScroll" && de("scroll", t),
                    s || l === u || (s = []))
                  : (s = s || []).push(h, u));
    }
    n && (s = s || []).push("style", n);
    var h = s;
    (e.updateQueue = h) && (e.flags |= 4);
  }
};
Rv = function (t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function Ds(t, e) {
  if (!ge)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; )
          (e.alternate !== null && (n = e), (e = e.sibling));
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = t.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Qe(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    r = 0;
  if (e)
    for (var i = t.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = t),
        (i = i.sibling));
  else
    for (i = t.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = t),
        (i = i.sibling));
  return ((t.subtreeFlags |= r), (t.childLanes = n), e);
}
function oS(t, e, n) {
  var r = e.pendingProps;
  switch ((Td(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (Qe(e), null);
    case 1:
      return (ft(e.type) && fl(), Qe(e), null);
    case 3:
      return (
        (r = e.stateNode),
        ji(),
        pe(dt),
        pe(et),
        xd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (t === null || t.child === null) &&
          (Sa(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), bt !== null && (Ph(bt), (bt = null)))),
        wh(t, e),
        Qe(e),
        null
      );
    case 5:
      Nd(e);
      var i = Lr(vo.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        (Cv(t, e, n, r, i),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152)));
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(U(166));
          return (Qe(e), null);
        }
        if (((t = Lr(Xt.current)), Sa(e))) {
          ((r = e.stateNode), (n = e.type));
          var s = e.memoizedProps;
          switch (((r[Yt] = e), (r[yo] = s), (t = (e.mode & 1) !== 0), n)) {
            case "dialog":
              (de("cancel", r), de("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              de("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Fs.length; i++) de(Fs[i], r);
              break;
            case "source":
              de("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (de("error", r), de("load", r));
              break;
            case "details":
              de("toggle", r);
              break;
            case "input":
              (Zp(r, s), de("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!s.multiple }),
                de("invalid", r));
              break;
            case "textarea":
              (tm(r, s), de("invalid", r));
          }
          (Kc(n, s), (i = null));
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ia(r.textContent, l, t),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ia(r.textContent, l, t),
                    (i = ["children", "" + l]))
                : oo.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  de("scroll", r);
            }
          switch (n) {
            case "input":
              (ma(r), em(r, s, !0));
              break;
            case "textarea":
              (ma(r), nm(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = dl);
          }
          ((r = i), (e.updateQueue = r), r !== null && (e.flags |= 4));
        } else {
          ((o = i.nodeType === 9 ? i : i.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = t_(n)),
            t === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((t = o.createElement("div")),
                  (t.innerHTML = "<script><\/script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof r.is == "string"
                  ? (t = o.createElement(n, { is: r.is }))
                  : ((t = o.createElement(n)),
                    n === "select" &&
                      ((o = t),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (t = o.createElementNS(t, n)),
            (t[Yt] = e),
            (t[yo] = r),
            Av(t, e, !1, !1),
            (e.stateNode = t));
          e: {
            switch (((o = Qc(n, r)), n)) {
              case "dialog":
                (de("cancel", t), de("close", t), (i = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (de("load", t), (i = r));
                break;
              case "video":
              case "audio":
                for (i = 0; i < Fs.length; i++) de(Fs[i], t);
                i = r;
                break;
              case "source":
                (de("error", t), (i = r));
                break;
              case "img":
              case "image":
              case "link":
                (de("error", t), de("load", t), (i = r));
                break;
              case "details":
                (de("toggle", t), (i = r));
                break;
              case "input":
                (Zp(t, r), (i = $c(t, r)), de("invalid", t));
                break;
              case "option":
                i = r;
                break;
              case "select":
                ((t._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ve({}, r, { value: void 0 })),
                  de("invalid", t));
                break;
              case "textarea":
                (tm(t, r), (i = qc(t, r)), de("invalid", t));
                break;
              default:
                i = r;
            }
            (Kc(n, i), (l = i));
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var u = l[s];
                s === "style"
                  ? i_(t, u)
                  : s === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && n_(t, u))
                    : s === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && ao(t, u)
                        : typeof u == "number" && ao(t, "" + u)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (oo.hasOwnProperty(s)
                          ? u != null && s === "onScroll" && de("scroll", t)
                          : u != null && ad(t, s, u, o));
              }
            switch (n) {
              case "input":
                (ma(t), em(t, r, !1));
                break;
              case "textarea":
                (ma(t), nm(t));
                break;
              case "option":
                r.value != null && t.setAttribute("value", "" + ar(r.value));
                break;
              case "select":
                ((t.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Si(t, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Si(t, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof i.onClick == "function" && (t.onclick = dl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return (Qe(e), null);
    case 6:
      if (t && e.stateNode != null) Rv(t, e, t.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error(U(166));
        if (((n = Lr(vo.current)), Lr(Xt.current), Sa(e))) {
          if (
            ((r = e.stateNode),
            (n = e.memoizedProps),
            (r[Yt] = e),
            (s = r.nodeValue !== n) && ((t = Et), t !== null))
          )
            switch (t.tag) {
              case 3:
                Ia(r.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ia(r.nodeValue, n, (t.mode & 1) !== 0);
            }
          s && (e.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Yt] = e),
            (e.stateNode = r));
      }
      return (Qe(e), null);
    case 13:
      if (
        (pe(ye),
        (r = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (ge && _t !== null && e.mode & 1 && !(e.flags & 128))
          (H_(), Fi(), (e.flags |= 98560), (s = !1));
        else if (((s = Sa(e)), r !== null && r.dehydrated !== null)) {
          if (t === null) {
            if (!s) throw Error(U(318));
            if (
              ((s = e.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(U(317));
            s[Yt] = e;
          } else
            (Fi(),
              !(e.flags & 128) && (e.memoizedState = null),
              (e.flags |= 4));
          (Qe(e), (s = !1));
        } else (bt !== null && (Ph(bt), (bt = null)), (s = !0));
        if (!s) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((r = r !== null),
          r !== (t !== null && t.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || ye.current & 1 ? Ve === 0 && (Ve = 3) : $d())),
          e.updateQueue !== null && (e.flags |= 4),
          Qe(e),
          null);
    case 4:
      return (
        ji(),
        wh(t, e),
        t === null && mo(e.stateNode.containerInfo),
        Qe(e),
        null
      );
    case 10:
      return (Cd(e.type._context), Qe(e), null);
    case 17:
      return (ft(e.type) && fl(), Qe(e), null);
    case 19:
      if ((pe(ye), (s = e.memoizedState), s === null)) return (Qe(e), null);
      if (((r = (e.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Ds(s, !1);
        else {
          if (Ve !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((o = El(t)), o !== null)) {
                for (
                  e.flags |= 128,
                    Ds(s, !1),
                    r = o.updateQueue,
                    r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    r = n,
                    n = e.child;
                  n !== null;
                )
                  ((s = n),
                    (t = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = t),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (t = o.dependencies),
                        (s.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (n = n.sibling));
                return (ce(ye, (ye.current & 1) | 2), e.child);
              }
              t = t.sibling;
            }
          s.tail !== null &&
            Ae() > zi &&
            ((e.flags |= 128), (r = !0), Ds(s, !1), (e.lanes = 4194304));
        }
      else {
        if (!r)
          if (((t = El(o)), t !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              Ds(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !ge)
            )
              return (Qe(e), null);
          } else
            2 * Ae() - s.renderingStartTime > zi &&
              n !== 1073741824 &&
              ((e.flags |= 128), (r = !0), Ds(s, !1), (e.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (e.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((e = s.tail),
          (s.rendering = e),
          (s.tail = e.sibling),
          (s.renderingStartTime = Ae()),
          (e.sibling = null),
          (n = ye.current),
          ce(ye, r ? (n & 1) | 2 : n & 1),
          e)
        : (Qe(e), null);
    case 22:
    case 23:
      return (
        zd(),
        (r = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
        r && e.mode & 1
          ? gt & 1073741824 && (Qe(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : Qe(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(U(156, e.tag));
}
function aS(t, e) {
  switch ((Td(e), e.tag)) {
    case 1:
      return (
        ft(e.type) && fl(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        ji(),
        pe(dt),
        pe(et),
        xd(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return (Nd(e), null);
    case 13:
      if (
        (pe(ye), (t = e.memoizedState), t !== null && t.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(U(340));
        Fi();
      }
      return (
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return (pe(ye), null);
    case 4:
      return (ji(), null);
    case 10:
      return (Cd(e.type._context), null);
    case 22:
    case 23:
      return (zd(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Ra = !1,
  Xe = !1,
  lS = typeof WeakSet == "function" ? WeakSet : Set,
  W = null;
function Ti(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Te(t, e, r);
      }
    else n.current = null;
}
function Th(t, e, n) {
  try {
    n();
  } catch (r) {
    Te(t, e, r);
  }
}
var Hm = !1;
function uS(t, e) {
  if (((sh = ul), (t = D_()), Ed(t))) {
    if ("selectionStart" in t)
      var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, s.nodeType);
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            u = -1,
            h = 0,
            f = 0,
            p = t,
            m = null;
          t: for (;;) {
            for (
              var I;
              p !== n || (i !== 0 && p.nodeType !== 3) || (l = o + i),
                p !== s || (r !== 0 && p.nodeType !== 3) || (u = o + r),
                p.nodeType === 3 && (o += p.nodeValue.length),
                (I = p.firstChild) !== null;
            )
              ((m = p), (p = I));
            for (;;) {
              if (p === t) break t;
              if (
                (m === n && ++h === i && (l = o),
                m === s && ++f === r && (u = o),
                (I = p.nextSibling) !== null)
              )
                break;
              ((p = m), (m = p.parentNode));
            }
            p = I;
          }
          n = l === -1 || u === -1 ? null : { start: l, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (oh = { focusedElem: t, selectionRange: n }, ul = !1, W = e; W !== null; )
    if (((e = W), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      ((t.return = e), (W = t));
    else
      for (; W !== null; ) {
        e = W;
        try {
          var N = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (N !== null) {
                  var D = N.memoizedProps,
                    F = N.memoizedState,
                    S = e.stateNode,
                    E = S.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? D : Lt(e.type, D),
                      F,
                    );
                  S.__reactInternalSnapshotBeforeUpdate = E;
                }
                break;
              case 3:
                var R = e.stateNode.containerInfo;
                R.nodeType === 1
                  ? (R.textContent = "")
                  : R.nodeType === 9 &&
                    R.documentElement &&
                    R.removeChild(R.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(U(163));
            }
        } catch (O) {
          Te(e, e.return, O);
        }
        if (((t = e.sibling), t !== null)) {
          ((t.return = e.return), (W = t));
          break;
        }
        W = e.return;
      }
  return ((N = Hm), (Hm = !1), N);
}
function Js(t, e, n) {
  var r = e.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & t) === t) {
        var s = i.destroy;
        ((i.destroy = void 0), s !== void 0 && Th(e, n, s));
      }
      i = i.next;
    } while (i !== r);
  }
}
function tu(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== e);
  }
}
function Ih(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == "function" ? e(t) : (e.current = t);
  }
}
function kv(t) {
  var e = t.alternate;
  (e !== null && ((t.alternate = null), kv(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[Yt], delete e[yo], delete e[uh], delete e[H0], delete e[q0])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null));
}
function Pv(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function qm(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || Pv(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      ((t.child.return = t), (t = t.child));
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function Sh(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    ((t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = dl)));
  else if (r !== 4 && ((t = t.child), t !== null))
    for (Sh(t, e, n), t = t.sibling; t !== null; )
      (Sh(t, e, n), (t = t.sibling));
}
function Ah(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    ((t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t));
  else if (r !== 4 && ((t = t.child), t !== null))
    for (Ah(t, e, n), t = t.sibling; t !== null; )
      (Ah(t, e, n), (t = t.sibling));
}
var Be = null,
  Mt = !1;
function Mn(t, e, n) {
  for (n = n.child; n !== null; ) (Nv(t, e, n), (n = n.sibling));
}
function Nv(t, e, n) {
  if (Jt && typeof Jt.onCommitFiberUnmount == "function")
    try {
      Jt.onCommitFiberUnmount(Gl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Xe || Ti(n, e);
    case 6:
      var r = Be,
        i = Mt;
      ((Be = null),
        Mn(t, e, n),
        (Be = r),
        (Mt = i),
        Be !== null &&
          (Mt
            ? ((t = Be),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : Be.removeChild(n.stateNode)));
      break;
    case 18:
      Be !== null &&
        (Mt
          ? ((t = Be),
            (n = n.stateNode),
            t.nodeType === 8
              ? hc(t.parentNode, n)
              : t.nodeType === 1 && hc(t, n),
            ho(t))
          : hc(Be, n.stateNode));
      break;
    case 4:
      ((r = Be),
        (i = Mt),
        (Be = n.stateNode.containerInfo),
        (Mt = !0),
        Mn(t, e, n),
        (Be = r),
        (Mt = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Xe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          ((s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Th(n, e, o),
            (i = i.next));
        } while (i !== r);
      }
      Mn(t, e, n);
      break;
    case 1:
      if (
        !Xe &&
        (Ti(n, e),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (l) {
          Te(n, e, l);
        }
      Mn(t, e, n);
      break;
    case 21:
      Mn(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((Xe = (r = Xe) || n.memoizedState !== null), Mn(t, e, n), (Xe = r))
        : Mn(t, e, n);
      break;
    default:
      Mn(t, e, n);
  }
}
function Gm(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    (n === null && (n = t.stateNode = new lS()),
      e.forEach(function (r) {
        var i = _S.bind(null, t, r);
        n.has(r) || (n.add(r), r.then(i, i));
      }));
  }
}
function Ot(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = t,
          o = e,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              ((Be = l.stateNode), (Mt = !1));
              break e;
            case 3:
              ((Be = l.stateNode.containerInfo), (Mt = !0));
              break e;
            case 4:
              ((Be = l.stateNode.containerInfo), (Mt = !0));
              break e;
          }
          l = l.return;
        }
        if (Be === null) throw Error(U(160));
        (Nv(s, o, i), (Be = null), (Mt = !1));
        var u = i.alternate;
        (u !== null && (u.return = null), (i.return = null));
      } catch (h) {
        Te(i, e, h);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) (xv(e, t), (e = e.sibling));
}
function xv(t, e) {
  var n = t.alternate,
    r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ot(e, t), Gt(t), r & 4)) {
        try {
          (Js(3, t, t.return), tu(3, t));
        } catch (D) {
          Te(t, t.return, D);
        }
        try {
          Js(5, t, t.return);
        } catch (D) {
          Te(t, t.return, D);
        }
      }
      break;
    case 1:
      (Ot(e, t), Gt(t), r & 512 && n !== null && Ti(n, n.return));
      break;
    case 5:
      if (
        (Ot(e, t),
        Gt(t),
        r & 512 && n !== null && Ti(n, n.return),
        t.flags & 32)
      ) {
        var i = t.stateNode;
        try {
          ao(i, "");
        } catch (D) {
          Te(t, t.return, D);
        }
      }
      if (r & 4 && ((i = t.stateNode), i != null)) {
        var s = t.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          l = t.type,
          u = t.updateQueue;
        if (((t.updateQueue = null), u !== null))
          try {
            (l === "input" && s.type === "radio" && s.name != null && Zy(i, s),
              Qc(l, o));
            var h = Qc(l, s);
            for (o = 0; o < u.length; o += 2) {
              var f = u[o],
                p = u[o + 1];
              f === "style"
                ? i_(i, p)
                : f === "dangerouslySetInnerHTML"
                  ? n_(i, p)
                  : f === "children"
                    ? ao(i, p)
                    : ad(i, f, p, h);
            }
            switch (l) {
              case "input":
                Wc(i, s);
                break;
              case "textarea":
                e_(i, s);
                break;
              case "select":
                var m = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var I = s.value;
                I != null
                  ? Si(i, !!s.multiple, I, !1)
                  : m !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Si(i, !!s.multiple, s.defaultValue, !0)
                      : Si(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[yo] = s;
          } catch (D) {
            Te(t, t.return, D);
          }
      }
      break;
    case 6:
      if ((Ot(e, t), Gt(t), r & 4)) {
        if (t.stateNode === null) throw Error(U(162));
        ((i = t.stateNode), (s = t.memoizedProps));
        try {
          i.nodeValue = s;
        } catch (D) {
          Te(t, t.return, D);
        }
      }
      break;
    case 3:
      if (
        (Ot(e, t), Gt(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ho(e.containerInfo);
        } catch (D) {
          Te(t, t.return, D);
        }
      break;
    case 4:
      (Ot(e, t), Gt(t));
      break;
    case 13:
      (Ot(e, t),
        Gt(t),
        (i = t.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (jd = Ae())),
        r & 4 && Gm(t));
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((Xe = (h = Xe) || f), Ot(e, t), (Xe = h)) : Ot(e, t),
        Gt(t),
        r & 8192)
      ) {
        if (
          ((h = t.memoizedState !== null),
          (t.stateNode.isHidden = h) && !f && t.mode & 1)
        )
          for (W = t, f = t.child; f !== null; ) {
            for (p = W = f; W !== null; ) {
              switch (((m = W), (I = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Js(4, m, m.return);
                  break;
                case 1:
                  Ti(m, m.return);
                  var N = m.stateNode;
                  if (typeof N.componentWillUnmount == "function") {
                    ((r = m), (n = m.return));
                    try {
                      ((e = r),
                        (N.props = e.memoizedProps),
                        (N.state = e.memoizedState),
                        N.componentWillUnmount());
                    } catch (D) {
                      Te(r, n, D);
                    }
                  }
                  break;
                case 5:
                  Ti(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Qm(p);
                    continue;
                  }
              }
              I !== null ? ((I.return = m), (W = I)) : Qm(p);
            }
            f = f.sibling;
          }
        e: for (f = null, p = t; ; ) {
          if (p.tag === 5) {
            if (f === null) {
              f = p;
              try {
                ((i = p.stateNode),
                  h
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = p.stateNode),
                      (u = p.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (l.style.display = r_("display", o))));
              } catch (D) {
                Te(t, t.return, D);
              }
            }
          } else if (p.tag === 6) {
            if (f === null)
              try {
                p.stateNode.nodeValue = h ? "" : p.memoizedProps;
              } catch (D) {
                Te(t, t.return, D);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === t) &&
            p.child !== null
          ) {
            ((p.child.return = p), (p = p.child));
            continue;
          }
          if (p === t) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === t) break e;
            (f === p && (f = null), (p = p.return));
          }
          (f === p && (f = null),
            (p.sibling.return = p.return),
            (p = p.sibling));
        }
      }
      break;
    case 19:
      (Ot(e, t), Gt(t), r & 4 && Gm(t));
      break;
    case 21:
      break;
    default:
      (Ot(e, t), Gt(t));
  }
}
function Gt(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (Pv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(U(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (ao(i, ""), (r.flags &= -33));
          var s = qm(t);
          Ah(t, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = qm(t);
          Sh(t, l, o);
          break;
        default:
          throw Error(U(161));
      }
    } catch (u) {
      Te(t, t.return, u);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function cS(t, e, n) {
  ((W = t), Dv(t));
}
function Dv(t, e, n) {
  for (var r = (t.mode & 1) !== 0; W !== null; ) {
    var i = W,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Ra;
      if (!o) {
        var l = i.alternate,
          u = (l !== null && l.memoizedState !== null) || Xe;
        l = Ra;
        var h = Xe;
        if (((Ra = o), (Xe = u) && !h))
          for (W = i; W !== null; )
            ((o = W),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Ym(i)
                : u !== null
                  ? ((u.return = o), (W = u))
                  : Ym(i));
        for (; s !== null; ) ((W = s), Dv(s), (s = s.sibling));
        ((W = i), (Ra = l), (Xe = h));
      }
      Km(t);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (W = s)) : Km(t);
  }
}
function Km(t) {
  for (; W !== null; ) {
    var e = W;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Xe || tu(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !Xe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : Lt(e.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = e.updateQueue;
              s !== null && Dm(e, s, r);
              break;
            case 3:
              var o = e.updateQueue;
              if (o !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                Dm(e, o, n);
              }
              break;
            case 5:
              var l = e.stateNode;
              if (n === null && e.flags & 4) {
                n = l;
                var u = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var h = e.alternate;
                if (h !== null) {
                  var f = h.memoizedState;
                  if (f !== null) {
                    var p = f.dehydrated;
                    p !== null && ho(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(U(163));
          }
        Xe || (e.flags & 512 && Ih(e));
      } catch (m) {
        Te(e, e.return, m);
      }
    }
    if (e === t) {
      W = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      ((n.return = e.return), (W = n));
      break;
    }
    W = e.return;
  }
}
function Qm(t) {
  for (; W !== null; ) {
    var e = W;
    if (e === t) {
      W = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      ((n.return = e.return), (W = n));
      break;
    }
    W = e.return;
  }
}
function Ym(t) {
  for (; W !== null; ) {
    var e = W;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            tu(4, e);
          } catch (u) {
            Te(e, n, u);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = e.return;
            try {
              r.componentDidMount();
            } catch (u) {
              Te(e, i, u);
            }
          }
          var s = e.return;
          try {
            Ih(e);
          } catch (u) {
            Te(e, s, u);
          }
          break;
        case 5:
          var o = e.return;
          try {
            Ih(e);
          } catch (u) {
            Te(e, o, u);
          }
      }
    } catch (u) {
      Te(e, e.return, u);
    }
    if (e === t) {
      W = null;
      break;
    }
    var l = e.sibling;
    if (l !== null) {
      ((l.return = e.return), (W = l));
      break;
    }
    W = e.return;
  }
}
var hS = Math.ceil,
  Il = Cn.ReactCurrentDispatcher,
  Fd = Cn.ReactCurrentOwner,
  Pt = Cn.ReactCurrentBatchConfig,
  ie = 0,
  Ue = null,
  ke = null,
  We = 0,
  gt = 0,
  Ii = gr(0),
  Ve = 0,
  Io = null,
  Wr = 0,
  nu = 0,
  Ud = 0,
  Xs = null,
  ut = null,
  jd = 0,
  zi = 1 / 0,
  an = null,
  Sl = !1,
  Ch = null,
  Zn = null,
  ka = !1,
  qn = null,
  Al = 0,
  Zs = 0,
  Rh = null,
  Ha = -1,
  qa = 0;
function st() {
  return ie & 6 ? Ae() : Ha !== -1 ? Ha : (Ha = Ae());
}
function er(t) {
  return t.mode & 1
    ? ie & 2 && We !== 0
      ? We & -We
      : K0.transition !== null
        ? (qa === 0 && (qa = g_()), qa)
        : ((t = ae),
          t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : I_(t.type))),
          t)
    : 1;
}
function jt(t, e, n, r) {
  if (50 < Zs) throw ((Zs = 0), (Rh = null), Error(U(185)));
  (Mo(t, n, r),
    (!(ie & 2) || t !== Ue) &&
      (t === Ue && (!(ie & 2) && (nu |= n), Ve === 4 && Bn(t, We)),
      pt(t, r),
      n === 1 && ie === 0 && !(e.mode & 1) && ((zi = Ae() + 500), Xl && yr())));
}
function pt(t, e) {
  var n = t.callbackNode;
  KI(t, e);
  var r = ll(t, t === Ue ? We : 0);
  if (r === 0)
    (n !== null && sm(n), (t.callbackNode = null), (t.callbackPriority = 0));
  else if (((e = r & -r), t.callbackPriority !== e)) {
    if ((n != null && sm(n), e === 1))
      (t.tag === 0 ? G0(Jm.bind(null, t)) : z_(Jm.bind(null, t)),
        $0(function () {
          !(ie & 6) && yr();
        }),
        (n = null));
    else {
      switch (y_(r)) {
        case 1:
          n = dd;
          break;
        case 4:
          n = p_;
          break;
        case 16:
          n = al;
          break;
        case 536870912:
          n = m_;
          break;
        default:
          n = al;
      }
      n = jv(n, Vv.bind(null, t));
    }
    ((t.callbackPriority = e), (t.callbackNode = n));
  }
}
function Vv(t, e) {
  if (((Ha = -1), (qa = 0), ie & 6)) throw Error(U(327));
  var n = t.callbackNode;
  if (Pi() && t.callbackNode !== n) return null;
  var r = ll(t, t === Ue ? We : 0);
  if (r === 0) return null;
  if (r & 30 || r & t.expiredLanes || e) e = Cl(t, r);
  else {
    e = r;
    var i = ie;
    ie |= 2;
    var s = Lv();
    (Ue !== t || We !== e) && ((an = null), (zi = Ae() + 500), Fr(t, e));
    do
      try {
        pS();
        break;
      } catch (l) {
        Ov(t, l);
      }
    while (!0);
    (Ad(),
      (Il.current = s),
      (ie = i),
      ke !== null ? (e = 0) : ((Ue = null), (We = 0), (e = Ve)));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((i = eh(t)), i !== 0 && ((r = i), (e = kh(t, i)))), e === 1)
    )
      throw ((n = Io), Fr(t, 0), Bn(t, r), pt(t, Ae()), n);
    if (e === 6) Bn(t, r);
    else {
      if (
        ((i = t.current.alternate),
        !(r & 30) &&
          !dS(i) &&
          ((e = Cl(t, r)),
          e === 2 && ((s = eh(t)), s !== 0 && ((r = s), (e = kh(t, s)))),
          e === 1))
      )
        throw ((n = Io), Fr(t, 0), Bn(t, r), pt(t, Ae()), n);
      switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(U(345));
        case 2:
          xr(t, ut, an);
          break;
        case 3:
          if (
            (Bn(t, r), (r & 130023424) === r && ((e = jd + 500 - Ae()), 10 < e))
          ) {
            if (ll(t, 0) !== 0) break;
            if (((i = t.suspendedLanes), (i & r) !== r)) {
              (st(), (t.pingedLanes |= t.suspendedLanes & i));
              break;
            }
            t.timeoutHandle = lh(xr.bind(null, t, ut, an), e);
            break;
          }
          xr(t, ut, an);
          break;
        case 4:
          if ((Bn(t, r), (r & 4194240) === r)) break;
          for (e = t.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Ut(r);
            ((s = 1 << o), (o = e[o]), o > i && (i = o), (r &= ~s));
          }
          if (
            ((r = i),
            (r = Ae() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * hS(r / 1960)) - r),
            10 < r)
          ) {
            t.timeoutHandle = lh(xr.bind(null, t, ut, an), r);
            break;
          }
          xr(t, ut, an);
          break;
        case 5:
          xr(t, ut, an);
          break;
        default:
          throw Error(U(329));
      }
    }
  }
  return (pt(t, Ae()), t.callbackNode === n ? Vv.bind(null, t) : null);
}
function kh(t, e) {
  var n = Xs;
  return (
    t.current.memoizedState.isDehydrated && (Fr(t, e).flags |= 256),
    (t = Cl(t, e)),
    t !== 2 && ((e = ut), (ut = n), e !== null && Ph(e)),
    t
  );
}
function Ph(t) {
  ut === null ? (ut = t) : ut.push.apply(ut, t);
}
function dS(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!$t(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      ((n.return = e), (e = n));
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
  }
  return !0;
}
function Bn(t, e) {
  for (
    e &= ~Ud,
      e &= ~nu,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;
  ) {
    var n = 31 - Ut(e),
      r = 1 << n;
    ((t[n] = -1), (e &= ~r));
  }
}
function Jm(t) {
  if (ie & 6) throw Error(U(327));
  Pi();
  var e = ll(t, 0);
  if (!(e & 1)) return (pt(t, Ae()), null);
  var n = Cl(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = eh(t);
    r !== 0 && ((e = r), (n = kh(t, r)));
  }
  if (n === 1) throw ((n = Io), Fr(t, 0), Bn(t, e), pt(t, Ae()), n);
  if (n === 6) throw Error(U(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    xr(t, ut, an),
    pt(t, Ae()),
    null
  );
}
function Bd(t, e) {
  var n = ie;
  ie |= 1;
  try {
    return t(e);
  } finally {
    ((ie = n), ie === 0 && ((zi = Ae() + 500), Xl && yr()));
  }
}
function Hr(t) {
  qn !== null && qn.tag === 0 && !(ie & 6) && Pi();
  var e = ie;
  ie |= 1;
  var n = Pt.transition,
    r = ae;
  try {
    if (((Pt.transition = null), (ae = 1), t)) return t();
  } finally {
    ((ae = r), (Pt.transition = n), (ie = e), !(ie & 6) && yr());
  }
}
function zd() {
  ((gt = Ii.current), pe(Ii));
}
function Fr(t, e) {
  ((t.finishedWork = null), (t.finishedLanes = 0));
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), z0(n)), ke !== null))
    for (n = ke.return; n !== null; ) {
      var r = n;
      switch ((Td(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && fl());
          break;
        case 3:
          (ji(), pe(dt), pe(et), xd());
          break;
        case 5:
          Nd(r);
          break;
        case 4:
          ji();
          break;
        case 13:
          pe(ye);
          break;
        case 19:
          pe(ye);
          break;
        case 10:
          Cd(r.type._context);
          break;
        case 22:
        case 23:
          zd();
      }
      n = n.return;
    }
  if (
    ((Ue = t),
    (ke = t = tr(t.current, null)),
    (We = gt = e),
    (Ve = 0),
    (Io = null),
    (Ud = nu = Wr = 0),
    (ut = Xs = null),
    Or !== null)
  ) {
    for (e = 0; e < Or.length; e++)
      if (((n = Or[e]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          ((s.next = i), (r.next = o));
        }
        n.pending = r;
      }
    Or = null;
  }
  return t;
}
function Ov(t, e) {
  do {
    var n = ke;
    try {
      if ((Ad(), (za.current = Tl), wl)) {
        for (var r = _e.memoizedState; r !== null; ) {
          var i = r.queue;
          (i !== null && (i.pending = null), (r = r.next));
        }
        wl = !1;
      }
      if (
        (($r = 0),
        (Fe = De = _e = null),
        (Ys = !1),
        (Eo = 0),
        (Fd.current = null),
        n === null || n.return === null)
      ) {
        ((Ve = 1), (Io = e), (ke = null));
        break;
      }
      e: {
        var s = t,
          o = n.return,
          l = n,
          u = e;
        if (
          ((e = We),
          (l.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var h = u,
            f = l,
            p = f.tag;
          if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = f.alternate;
            m
              ? ((f.updateQueue = m.updateQueue),
                (f.memoizedState = m.memoizedState),
                (f.lanes = m.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var I = Fm(o);
          if (I !== null) {
            ((I.flags &= -257),
              Um(I, o, l, s, e),
              I.mode & 1 && bm(s, h, e),
              (e = I),
              (u = h));
            var N = e.updateQueue;
            if (N === null) {
              var D = new Set();
              (D.add(u), (e.updateQueue = D));
            } else N.add(u);
            break e;
          } else {
            if (!(e & 1)) {
              (bm(s, h, e), $d());
              break e;
            }
            u = Error(U(426));
          }
        } else if (ge && l.mode & 1) {
          var F = Fm(o);
          if (F !== null) {
            (!(F.flags & 65536) && (F.flags |= 256),
              Um(F, o, l, s, e),
              Id(Bi(u, l)));
            break e;
          }
        }
        ((s = u = Bi(u, l)),
          Ve !== 4 && (Ve = 2),
          Xs === null ? (Xs = [s]) : Xs.push(s),
          (s = o));
        do {
          switch (s.tag) {
            case 3:
              ((s.flags |= 65536), (e &= -e), (s.lanes |= e));
              var S = yv(s, u, e);
              xm(s, S);
              break e;
            case 1:
              l = u;
              var E = s.type,
                R = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof E.getDerivedStateFromError == "function" ||
                  (R !== null &&
                    typeof R.componentDidCatch == "function" &&
                    (Zn === null || !Zn.has(R))))
              ) {
                ((s.flags |= 65536), (e &= -e), (s.lanes |= e));
                var O = _v(s, l, e);
                xm(s, O);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      bv(n);
    } catch (L) {
      ((e = L), ke === n && n !== null && (ke = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Lv() {
  var t = Il.current;
  return ((Il.current = Tl), t === null ? Tl : t);
}
function $d() {
  ((Ve === 0 || Ve === 3 || Ve === 2) && (Ve = 4),
    Ue === null || (!(Wr & 268435455) && !(nu & 268435455)) || Bn(Ue, We));
}
function Cl(t, e) {
  var n = ie;
  ie |= 2;
  var r = Lv();
  (Ue !== t || We !== e) && ((an = null), Fr(t, e));
  do
    try {
      fS();
      break;
    } catch (i) {
      Ov(t, i);
    }
  while (!0);
  if ((Ad(), (ie = n), (Il.current = r), ke !== null)) throw Error(U(261));
  return ((Ue = null), (We = 0), Ve);
}
function fS() {
  for (; ke !== null; ) Mv(ke);
}
function pS() {
  for (; ke !== null && !UI(); ) Mv(ke);
}
function Mv(t) {
  var e = Uv(t.alternate, t, gt);
  ((t.memoizedProps = t.pendingProps),
    e === null ? bv(t) : (ke = e),
    (Fd.current = null));
}
function bv(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = aS(n, e)), n !== null)) {
        ((n.flags &= 32767), (ke = n));
        return;
      }
      if (t !== null)
        ((t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null));
      else {
        ((Ve = 6), (ke = null));
        return;
      }
    } else if (((n = oS(n, e, gt)), n !== null)) {
      ke = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      ke = e;
      return;
    }
    ke = e = t;
  } while (e !== null);
  Ve === 0 && (Ve = 5);
}
function xr(t, e, n) {
  var r = ae,
    i = Pt.transition;
  try {
    ((Pt.transition = null), (ae = 1), mS(t, e, n, r));
  } finally {
    ((Pt.transition = i), (ae = r));
  }
  return null;
}
function mS(t, e, n, r) {
  do Pi();
  while (qn !== null);
  if (ie & 6) throw Error(U(327));
  n = t.finishedWork;
  var i = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(U(177));
  ((t.callbackNode = null), (t.callbackPriority = 0));
  var s = n.lanes | n.childLanes;
  if (
    (QI(t, s),
    t === Ue && ((ke = Ue = null), (We = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ka ||
      ((ka = !0),
      jv(al, function () {
        return (Pi(), null);
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ((s = Pt.transition), (Pt.transition = null));
    var o = ae;
    ae = 1;
    var l = ie;
    ((ie |= 4),
      (Fd.current = null),
      uS(t, n),
      xv(n, t),
      L0(oh),
      (ul = !!sh),
      (oh = sh = null),
      (t.current = n),
      cS(n),
      jI(),
      (ie = l),
      (ae = o),
      (Pt.transition = s));
  } else t.current = n;
  if (
    (ka && ((ka = !1), (qn = t), (Al = i)),
    (s = t.pendingLanes),
    s === 0 && (Zn = null),
    $I(n.stateNode),
    pt(t, Ae()),
    e !== null)
  )
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      ((i = e[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
  if (Sl) throw ((Sl = !1), (t = Ch), (Ch = null), t);
  return (
    Al & 1 && t.tag !== 0 && Pi(),
    (s = t.pendingLanes),
    s & 1 ? (t === Rh ? Zs++ : ((Zs = 0), (Rh = t))) : (Zs = 0),
    yr(),
    null
  );
}
function Pi() {
  if (qn !== null) {
    var t = y_(Al),
      e = Pt.transition,
      n = ae;
    try {
      if (((Pt.transition = null), (ae = 16 > t ? 16 : t), qn === null))
        var r = !1;
      else {
        if (((t = qn), (qn = null), (Al = 0), ie & 6)) throw Error(U(331));
        var i = ie;
        for (ie |= 4, W = t.current; W !== null; ) {
          var s = W,
            o = s.child;
          if (W.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var h = l[u];
                for (W = h; W !== null; ) {
                  var f = W;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Js(8, f, s);
                  }
                  var p = f.child;
                  if (p !== null) ((p.return = f), (W = p));
                  else
                    for (; W !== null; ) {
                      f = W;
                      var m = f.sibling,
                        I = f.return;
                      if ((kv(f), f === h)) {
                        W = null;
                        break;
                      }
                      if (m !== null) {
                        ((m.return = I), (W = m));
                        break;
                      }
                      W = I;
                    }
                }
              }
              var N = s.alternate;
              if (N !== null) {
                var D = N.child;
                if (D !== null) {
                  N.child = null;
                  do {
                    var F = D.sibling;
                    ((D.sibling = null), (D = F));
                  } while (D !== null);
                }
              }
              W = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) ((o.return = s), (W = o));
          else
            e: for (; W !== null; ) {
              if (((s = W), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Js(9, s, s.return);
                }
              var S = s.sibling;
              if (S !== null) {
                ((S.return = s.return), (W = S));
                break e;
              }
              W = s.return;
            }
        }
        var E = t.current;
        for (W = E; W !== null; ) {
          o = W;
          var R = o.child;
          if (o.subtreeFlags & 2064 && R !== null) ((R.return = o), (W = R));
          else
            e: for (o = E; W !== null; ) {
              if (((l = W), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      tu(9, l);
                  }
                } catch (L) {
                  Te(l, l.return, L);
                }
              if (l === o) {
                W = null;
                break e;
              }
              var O = l.sibling;
              if (O !== null) {
                ((O.return = l.return), (W = O));
                break e;
              }
              W = l.return;
            }
        }
        if (
          ((ie = i), yr(), Jt && typeof Jt.onPostCommitFiberRoot == "function")
        )
          try {
            Jt.onPostCommitFiberRoot(Gl, t);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((ae = n), (Pt.transition = e));
    }
  }
  return !1;
}
function Xm(t, e, n) {
  ((e = Bi(n, e)),
    (e = yv(t, e, 1)),
    (t = Xn(t, e, 1)),
    (e = st()),
    t !== null && (Mo(t, 1, e), pt(t, e)));
}
function Te(t, e, n) {
  if (t.tag === 3) Xm(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        Xm(e, t, n);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Zn === null || !Zn.has(r)))
        ) {
          ((t = Bi(n, t)),
            (t = _v(e, t, 1)),
            (e = Xn(e, t, 1)),
            (t = st()),
            e !== null && (Mo(e, 1, t), pt(e, t)));
          break;
        }
      }
      e = e.return;
    }
}
function gS(t, e, n) {
  var r = t.pingCache;
  (r !== null && r.delete(e),
    (e = st()),
    (t.pingedLanes |= t.suspendedLanes & n),
    Ue === t &&
      (We & n) === n &&
      (Ve === 4 || (Ve === 3 && (We & 130023424) === We && 500 > Ae() - jd)
        ? Fr(t, 0)
        : (Ud |= n)),
    pt(t, e));
}
function Fv(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = _a), (_a <<= 1), !(_a & 130023424) && (_a = 4194304))
      : (e = 1));
  var n = st();
  ((t = vn(t, e)), t !== null && (Mo(t, e, n), pt(t, n)));
}
function yS(t) {
  var e = t.memoizedState,
    n = 0;
  (e !== null && (n = e.retryLane), Fv(t, n));
}
function _S(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var r = t.stateNode,
        i = t.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = t.stateNode;
      break;
    default:
      throw Error(U(314));
  }
  (r !== null && r.delete(e), Fv(t, n));
}
var Uv;
Uv = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || dt.current) ht = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return ((ht = !1), sS(t, e, n));
      ht = !!(t.flags & 131072);
    }
  else ((ht = !1), ge && e.flags & 1048576 && $_(e, gl, e.index));
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type;
      (Wa(t, e), (t = e.pendingProps));
      var i = bi(e, et.current);
      (ki(e, n), (i = Vd(null, e, r, t, i, n)));
      var s = Od();
      return (
        (e.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            ft(r) ? ((s = !0), pl(e)) : (s = !1),
            (e.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            kd(e),
            (i.updater = eu),
            (e.stateNode = i),
            (i._reactInternals = e),
            mh(e, r, t, n),
            (e = _h(null, e, r, !0, s, n)))
          : ((e.tag = 0), ge && s && wd(e), it(null, e, i, n), (e = e.child)),
        e
      );
    case 16:
      r = e.elementType;
      e: {
        switch (
          (Wa(t, e),
          (t = e.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (e.type = r),
          (i = e.tag = ES(r)),
          (t = Lt(r, t)),
          i)
        ) {
          case 0:
            e = yh(null, e, r, t, n);
            break e;
          case 1:
            e = zm(null, e, r, t, n);
            break e;
          case 11:
            e = jm(null, e, r, t, n);
            break e;
          case 14:
            e = Bm(null, e, r, Lt(r.type, t), n);
            break e;
        }
        throw Error(U(306, r, ""));
      }
      return e;
    case 0:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Lt(r, i)),
        yh(t, e, r, i, n)
      );
    case 1:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Lt(r, i)),
        zm(t, e, r, i, n)
      );
    case 3:
      e: {
        if ((Tv(e), t === null)) throw Error(U(387));
        ((r = e.pendingProps),
          (s = e.memoizedState),
          (i = s.element),
          Q_(t, e),
          vl(e, r, null, n));
        var o = e.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (e.updateQueue.baseState = s),
            (e.memoizedState = s),
            e.flags & 256)
          ) {
            ((i = Bi(Error(U(423)), e)), (e = $m(t, e, r, n, i)));
            break e;
          } else if (r !== i) {
            ((i = Bi(Error(U(424)), e)), (e = $m(t, e, r, n, i)));
            break e;
          } else
            for (
              _t = Jn(e.stateNode.containerInfo.firstChild),
                Et = e,
                ge = !0,
                bt = null,
                n = G_(e, null, r, n),
                e.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Fi(), r === i)) {
            e = En(t, e, n);
            break e;
          }
          it(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        Y_(e),
        t === null && dh(e),
        (r = e.type),
        (i = e.pendingProps),
        (s = t !== null ? t.memoizedProps : null),
        (o = i.children),
        ah(r, i) ? (o = null) : s !== null && ah(r, s) && (e.flags |= 32),
        wv(t, e),
        it(t, e, o, n),
        e.child
      );
    case 6:
      return (t === null && dh(e), null);
    case 13:
      return Iv(t, e, n);
    case 4:
      return (
        Pd(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        t === null ? (e.child = Ui(e, null, r, n)) : it(t, e, r, n),
        e.child
      );
    case 11:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Lt(r, i)),
        jm(t, e, r, i, n)
      );
    case 7:
      return (it(t, e, e.pendingProps, n), e.child);
    case 8:
      return (it(t, e, e.pendingProps.children, n), e.child);
    case 12:
      return (it(t, e, e.pendingProps.children, n), e.child);
    case 10:
      e: {
        if (
          ((r = e.type._context),
          (i = e.pendingProps),
          (s = e.memoizedProps),
          (o = i.value),
          ce(yl, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if ($t(s.value, o)) {
            if (s.children === i.children && !dt.current) {
              e = En(t, e, n);
              break e;
            }
          } else
            for (s = e.child, s !== null && (s.return = e); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                o = s.child;
                for (var u = l.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (s.tag === 1) {
                      ((u = pn(-1, n & -n)), (u.tag = 2));
                      var h = s.updateQueue;
                      if (h !== null) {
                        h = h.shared;
                        var f = h.pending;
                        (f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (h.pending = u));
                      }
                    }
                    ((s.lanes |= n),
                      (u = s.alternate),
                      u !== null && (u.lanes |= n),
                      fh(s.return, n, e),
                      (l.lanes |= n));
                    break;
                  }
                  u = u.next;
                }
              } else if (s.tag === 10) o = s.type === e.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(U(341));
                ((o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  fh(o, n, e),
                  (o = s.sibling));
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === e) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    ((s.return = o.return), (o = s));
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        (it(t, e, i.children, n), (e = e.child));
      }
      return e;
    case 9:
      return (
        (i = e.type),
        (r = e.pendingProps.children),
        ki(e, n),
        (i = Nt(i)),
        (r = r(i)),
        (e.flags |= 1),
        it(t, e, r, n),
        e.child
      );
    case 14:
      return (
        (r = e.type),
        (i = Lt(r, e.pendingProps)),
        (i = Lt(r.type, i)),
        Bm(t, e, r, i, n)
      );
    case 15:
      return vv(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Lt(r, i)),
        Wa(t, e),
        (e.tag = 1),
        ft(r) ? ((t = !0), pl(e)) : (t = !1),
        ki(e, n),
        gv(e, r, i),
        mh(e, r, i, n),
        _h(null, e, r, !0, t, n)
      );
    case 19:
      return Sv(t, e, n);
    case 22:
      return Ev(t, e, n);
  }
  throw Error(U(156, e.tag));
};
function jv(t, e) {
  return f_(t, e);
}
function vS(t, e, n, r) {
  ((this.tag = t),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function kt(t, e, n, r) {
  return new vS(t, e, n, r);
}
function Wd(t) {
  return ((t = t.prototype), !(!t || !t.isReactComponent));
}
function ES(t) {
  if (typeof t == "function") return Wd(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === ud)) return 11;
    if (t === cd) return 14;
  }
  return 2;
}
function tr(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = kt(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  );
}
function Ga(t, e, n, r, i, s) {
  var o = 2;
  if (((r = t), typeof t == "function")) Wd(t) && (o = 1);
  else if (typeof t == "string") o = 5;
  else
    e: switch (t) {
      case fi:
        return Ur(n.children, i, s, e);
      case ld:
        ((o = 8), (i |= 8));
        break;
      case Uc:
        return (
          (t = kt(12, n, e, i | 2)),
          (t.elementType = Uc),
          (t.lanes = s),
          t
        );
      case jc:
        return ((t = kt(13, n, e, i)), (t.elementType = jc), (t.lanes = s), t);
      case Bc:
        return ((t = kt(19, n, e, i)), (t.elementType = Bc), (t.lanes = s), t);
      case Yy:
        return ru(n, i, s, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case Ky:
              o = 10;
              break e;
            case Qy:
              o = 9;
              break e;
            case ud:
              o = 11;
              break e;
            case cd:
              o = 14;
              break e;
            case Fn:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(U(130, t == null ? t : typeof t, ""));
    }
  return (
    (e = kt(o, n, e, i)),
    (e.elementType = t),
    (e.type = r),
    (e.lanes = s),
    e
  );
}
function Ur(t, e, n, r) {
  return ((t = kt(7, t, r, e)), (t.lanes = n), t);
}
function ru(t, e, n, r) {
  return (
    (t = kt(22, t, r, e)),
    (t.elementType = Yy),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function vc(t, e, n) {
  return ((t = kt(6, t, null, e)), (t.lanes = n), t);
}
function Ec(t, e, n) {
  return (
    (e = kt(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function wS(t, e, n, r, i) {
  ((this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ec(0)),
    (this.expirationTimes = ec(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ec(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null));
}
function Hd(t, e, n, r, i, s, o, l, u) {
  return (
    (t = new wS(t, e, n, l, u)),
    e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
    (s = kt(3, null, null, e)),
    (t.current = s),
    (s.stateNode = t),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    kd(s),
    t
  );
}
function TS(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: di,
    key: r == null ? null : "" + r,
    children: t,
    containerInfo: e,
    implementation: n,
  };
}
function Bv(t) {
  if (!t) return lr;
  t = t._reactInternals;
  e: {
    if (ei(t) !== t || t.tag !== 1) throw Error(U(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (ft(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(U(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (ft(n)) return B_(t, n, e);
  }
  return e;
}
function zv(t, e, n, r, i, s, o, l, u) {
  return (
    (t = Hd(n, r, !0, t, i, s, o, l, u)),
    (t.context = Bv(null)),
    (n = t.current),
    (r = st()),
    (i = er(n)),
    (s = pn(r, i)),
    (s.callback = e ?? null),
    Xn(n, s, i),
    (t.current.lanes = i),
    Mo(t, i, r),
    pt(t, r),
    t
  );
}
function iu(t, e, n, r) {
  var i = e.current,
    s = st(),
    o = er(i);
  return (
    (n = Bv(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = pn(s, o)),
    (e.payload = { element: t }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (t = Xn(i, e, o)),
    t !== null && (jt(t, i, o, s), Ba(t, i, o)),
    o
  );
}
function Rl(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function Zm(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function qd(t, e) {
  (Zm(t, e), (t = t.alternate) && Zm(t, e));
}
function IS() {
  return null;
}
var $v =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function Gd(t) {
  this._internalRoot = t;
}
su.prototype.render = Gd.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(U(409));
  iu(t, e, null, null);
};
su.prototype.unmount = Gd.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    (Hr(function () {
      iu(null, t, null, null);
    }),
      (e[_n] = null));
  }
};
function su(t) {
  this._internalRoot = t;
}
su.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = E_();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < jn.length && e !== 0 && e < jn[n].priority; n++);
    (jn.splice(n, 0, t), n === 0 && T_(t));
  }
};
function Kd(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function ou(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function eg() {}
function SS(t, e, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var h = Rl(o);
        s.call(h);
      };
    }
    var o = zv(e, r, t, 0, null, !1, !1, "", eg);
    return (
      (t._reactRootContainer = o),
      (t[_n] = o.current),
      mo(t.nodeType === 8 ? t.parentNode : t),
      Hr(),
      o
    );
  }
  for (; (i = t.lastChild); ) t.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var h = Rl(u);
      l.call(h);
    };
  }
  var u = Hd(t, 0, !1, null, null, !1, !1, "", eg);
  return (
    (t._reactRootContainer = u),
    (t[_n] = u.current),
    mo(t.nodeType === 8 ? t.parentNode : t),
    Hr(function () {
      iu(e, u, n, r);
    }),
    u
  );
}
function au(t, e, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var u = Rl(o);
        l.call(u);
      };
    }
    iu(e, o, t, i);
  } else o = SS(n, e, t, i, r);
  return Rl(o);
}
__ = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = bs(e.pendingLanes);
        n !== 0 &&
          (fd(e, n | 1), pt(e, Ae()), !(ie & 6) && ((zi = Ae() + 500), yr()));
      }
      break;
    case 13:
      (Hr(function () {
        var r = vn(t, 1);
        if (r !== null) {
          var i = st();
          jt(r, t, 1, i);
        }
      }),
        qd(t, 1));
  }
};
pd = function (t) {
  if (t.tag === 13) {
    var e = vn(t, 134217728);
    if (e !== null) {
      var n = st();
      jt(e, t, 134217728, n);
    }
    qd(t, 134217728);
  }
};
v_ = function (t) {
  if (t.tag === 13) {
    var e = er(t),
      n = vn(t, e);
    if (n !== null) {
      var r = st();
      jt(n, t, e, r);
    }
    qd(t, e);
  }
};
E_ = function () {
  return ae;
};
w_ = function (t, e) {
  var n = ae;
  try {
    return ((ae = t), e());
  } finally {
    ae = n;
  }
};
Jc = function (t, e, n) {
  switch (e) {
    case "input":
      if ((Wc(t, n), (e = n.name), n.type === "radio" && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]',
          ),
            e = 0;
          e < n.length;
          e++
        ) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var i = Jl(r);
            if (!i) throw Error(U(90));
            (Xy(r), Wc(r, i));
          }
        }
      }
      break;
    case "textarea":
      e_(t, n);
      break;
    case "select":
      ((e = n.value), e != null && Si(t, !!n.multiple, e, !1));
  }
};
a_ = Bd;
l_ = Hr;
var AS = { usingClientEntryPoint: !1, Events: [Fo, yi, Jl, s_, o_, Bd] },
  Vs = {
    findFiberByHostInstance: Vr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  CS = {
    bundleType: Vs.bundleType,
    version: Vs.version,
    rendererPackageName: Vs.rendererPackageName,
    rendererConfig: Vs.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Cn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return ((t = h_(t)), t === null ? null : t.stateNode);
    },
    findFiberByHostInstance: Vs.findFiberByHostInstance || IS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Pa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Pa.isDisabled && Pa.supportsFiber)
    try {
      ((Gl = Pa.inject(CS)), (Jt = Pa));
    } catch {}
}
Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = AS;
Tt.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Kd(e)) throw Error(U(200));
  return TS(t, e, null, n);
};
Tt.createRoot = function (t, e) {
  if (!Kd(t)) throw Error(U(299));
  var n = !1,
    r = "",
    i = $v;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    (e = Hd(t, 1, !1, null, null, n, !1, r, i)),
    (t[_n] = e.current),
    mo(t.nodeType === 8 ? t.parentNode : t),
    new Gd(e)
  );
};
Tt.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function"
      ? Error(U(188))
      : ((t = Object.keys(t).join(",")), Error(U(268, t)));
  return ((t = h_(e)), (t = t === null ? null : t.stateNode), t);
};
Tt.flushSync = function (t) {
  return Hr(t);
};
Tt.hydrate = function (t, e, n) {
  if (!ou(e)) throw Error(U(200));
  return au(null, t, e, !0, n);
};
Tt.hydrateRoot = function (t, e, n) {
  if (!Kd(t)) throw Error(U(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = $v;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (e = zv(e, null, t, 1, n ?? null, i, !1, s, o)),
    (t[_n] = e.current),
    mo(t),
    r)
  )
    for (t = 0; t < r.length; t++)
      ((n = r[t]),
        (i = n._getVersion),
        (i = i(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, i])
          : e.mutableSourceEagerHydrationData.push(n, i));
  return new su(e);
};
Tt.render = function (t, e, n) {
  if (!ou(e)) throw Error(U(200));
  return au(null, t, e, !1, n);
};
Tt.unmountComponentAtNode = function (t) {
  if (!ou(t)) throw Error(U(40));
  return t._reactRootContainer
    ? (Hr(function () {
        au(null, null, t, !1, function () {
          ((t._reactRootContainer = null), (t[_n] = null));
        });
      }),
      !0)
    : !1;
};
Tt.unstable_batchedUpdates = Bd;
Tt.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
  if (!ou(n)) throw Error(U(200));
  if (t == null || t._reactInternals === void 0) throw Error(U(38));
  return au(t, e, n, !1, r);
};
Tt.version = "18.3.1-next-f1338f8080-20240426";
function Wv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wv);
    } catch (t) {
      console.error(t);
    }
}
(Wv(), (Wy.exports = Tt));
var RS = Wy.exports,
  tg = RS;
((bc.createRoot = tg.createRoot), (bc.hydrateRoot = tg.hydrateRoot));
const kS = () => {};
var ng = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Hv = function (t) {
    const e = [];
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      let i = t.charCodeAt(r);
      i < 128
        ? (e[n++] = i)
        : i < 2048
          ? ((e[n++] = (i >> 6) | 192), (e[n++] = (i & 63) | 128))
          : (i & 64512) === 55296 &&
              r + 1 < t.length &&
              (t.charCodeAt(r + 1) & 64512) === 56320
            ? ((i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++r) & 1023)),
              (e[n++] = (i >> 18) | 240),
              (e[n++] = ((i >> 12) & 63) | 128),
              (e[n++] = ((i >> 6) & 63) | 128),
              (e[n++] = (i & 63) | 128))
            : ((e[n++] = (i >> 12) | 224),
              (e[n++] = ((i >> 6) & 63) | 128),
              (e[n++] = (i & 63) | 128));
    }
    return e;
  },
  PS = function (t) {
    const e = [];
    let n = 0,
      r = 0;
    for (; n < t.length; ) {
      const i = t[n++];
      if (i < 128) e[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        const s = t[n++];
        e[r++] = String.fromCharCode(((i & 31) << 6) | (s & 63));
      } else if (i > 239 && i < 365) {
        const s = t[n++],
          o = t[n++],
          l = t[n++],
          u =
            (((i & 7) << 18) | ((s & 63) << 12) | ((o & 63) << 6) | (l & 63)) -
            65536;
        ((e[r++] = String.fromCharCode(55296 + (u >> 10))),
          (e[r++] = String.fromCharCode(56320 + (u & 1023))));
      } else {
        const s = t[n++],
          o = t[n++];
        e[r++] = String.fromCharCode(
          ((i & 15) << 12) | ((s & 63) << 6) | (o & 63),
        );
      }
    }
    return e.join("");
  },
  qv = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(t, e) {
      if (!Array.isArray(t))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let i = 0; i < t.length; i += 3) {
        const s = t[i],
          o = i + 1 < t.length,
          l = o ? t[i + 1] : 0,
          u = i + 2 < t.length,
          h = u ? t[i + 2] : 0,
          f = s >> 2,
          p = ((s & 3) << 4) | (l >> 4);
        let m = ((l & 15) << 2) | (h >> 6),
          I = h & 63;
        (u || ((I = 64), o || (m = 64)), r.push(n[f], n[p], n[m], n[I]));
      }
      return r.join("");
    },
    encodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? btoa(t)
        : this.encodeByteArray(Hv(t), e);
    },
    decodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? atob(t)
        : PS(this.decodeStringToByteArray(t, e));
    },
    decodeStringToByteArray(t, e) {
      this.init_();
      const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let i = 0; i < t.length; ) {
        const s = n[t.charAt(i++)],
          l = i < t.length ? n[t.charAt(i)] : 0;
        ++i;
        const h = i < t.length ? n[t.charAt(i)] : 64;
        ++i;
        const p = i < t.length ? n[t.charAt(i)] : 64;
        if ((++i, s == null || l == null || h == null || p == null))
          throw new NS();
        const m = (s << 2) | (l >> 4);
        if ((r.push(m), h !== 64)) {
          const I = ((l << 4) & 240) | (h >> 2);
          if ((r.push(I), p !== 64)) {
            const N = ((h << 6) & 192) | p;
            r.push(N);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        ((this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {}));
        for (let t = 0; t < this.ENCODED_VALS.length; t++)
          ((this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
            (this.charToByteMap_[this.byteToCharMap_[t]] = t),
            (this.byteToCharMapWebSafe_[t] =
              this.ENCODED_VALS_WEBSAFE.charAt(t)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t),
            t >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t)));
      }
    },
  };
class NS extends Error {
  constructor() {
    (super(...arguments), (this.name = "DecodeBase64StringError"));
  }
}
const xS = function (t) {
    const e = Hv(t);
    return qv.encodeByteArray(e, !0);
  },
  kl = function (t) {
    return xS(t).replace(/\./g, "");
  },
  Gv = function (t) {
    try {
      return qv.decodeString(t, !0);
    } catch (e) {
      console.error("base64Decode failed: ", e);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function DS() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const VS = () => DS().__FIREBASE_DEFAULTS__,
  OS = () => {
    if (typeof process > "u" || typeof ng > "u") return;
    const t = ng.__FIREBASE_DEFAULTS__;
    if (t) return JSON.parse(t);
  },
  LS = () => {
    if (typeof document > "u") return;
    let t;
    try {
      t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const e = t && Gv(t[1]);
    return e && JSON.parse(e);
  },
  lu = () => {
    try {
      return kS() || VS() || OS() || LS();
    } catch (t) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
      return;
    }
  },
  Kv = (t) => {
    var e, n;
    return (n = (e = lu()) == null ? void 0 : e.emulatorHosts) == null
      ? void 0
      : n[t];
  },
  MS = (t) => {
    const e = Kv(t);
    if (!e) return;
    const n = e.lastIndexOf(":");
    if (n <= 0 || n + 1 === e.length)
      throw new Error(`Invalid host ${e} with no separate hostname and port!`);
    const r = parseInt(e.substring(n + 1), 10);
    return e[0] === "[" ? [e.substring(1, n - 1), r] : [e.substring(0, n), r];
  },
  Qv = () => {
    var t;
    return (t = lu()) == null ? void 0 : t.config;
  },
  Yv = (t) => {
    var e;
    return (e = lu()) == null ? void 0 : e[`_${t}`];
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bS {
  constructor() {
    ((this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((e, n) => {
        ((this.resolve = e), (this.reject = n));
      })));
  }
  wrapCallback(e) {
    return (n, r) => {
      (n ? this.reject(n) : this.resolve(r),
        typeof e == "function" &&
          (this.promise.catch(() => {}), e.length === 1 ? e(n) : e(n, r)));
    };
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function es(t) {
  try {
    return (
      t.startsWith("http://") || t.startsWith("https://")
        ? new URL(t).hostname
        : t
    ).endsWith(".cloudworkstations.dev");
  } catch {
    return !1;
  }
}
async function Jv(t) {
  return (await fetch(t, { credentials: "include" })).ok;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function FS(t, e) {
  if (t.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.',
    );
  const n = { alg: "none", type: "JWT" },
    r = e || "demo-project",
    i = t.iat || 0,
    s = t.sub || t.user_id;
  if (!s)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const o = {
    iss: `https://securetoken.google.com/${r}`,
    aud: r,
    iat: i,
    exp: i + 3600,
    auth_time: i,
    sub: s,
    user_id: s,
    firebase: { sign_in_provider: "custom", identities: {} },
    ...t,
  };
  return [kl(JSON.stringify(n)), kl(JSON.stringify(o)), ""].join(".");
}
const eo = {};
function US() {
  const t = { prod: [], emulator: [] };
  for (const e of Object.keys(eo)) eo[e] ? t.emulator.push(e) : t.prod.push(e);
  return t;
}
function jS(t) {
  let e = document.getElementById(t),
    n = !1;
  return (
    e ||
      ((e = document.createElement("div")), e.setAttribute("id", t), (n = !0)),
    { created: n, element: e }
  );
}
let rg = !1;
function Xv(t, e) {
  if (
    typeof window > "u" ||
    typeof document > "u" ||
    !es(window.location.host) ||
    eo[t] === e ||
    eo[t] ||
    rg
  )
    return;
  eo[t] = e;
  function n(m) {
    return `__firebase__banner__${m}`;
  }
  const r = "__firebase__banner",
    s = US().prod.length > 0;
  function o() {
    const m = document.getElementById(r);
    m && m.remove();
  }
  function l(m) {
    ((m.style.display = "flex"),
      (m.style.background = "#7faaf0"),
      (m.style.position = "fixed"),
      (m.style.bottom = "5px"),
      (m.style.left = "5px"),
      (m.style.padding = ".5em"),
      (m.style.borderRadius = "5px"),
      (m.style.alignItems = "center"));
  }
  function u(m, I) {
    (m.setAttribute("width", "24"),
      m.setAttribute("id", I),
      m.setAttribute("height", "24"),
      m.setAttribute("viewBox", "0 0 24 24"),
      m.setAttribute("fill", "none"),
      (m.style.marginLeft = "-6px"));
  }
  function h() {
    const m = document.createElement("span");
    return (
      (m.style.cursor = "pointer"),
      (m.style.marginLeft = "16px"),
      (m.style.fontSize = "24px"),
      (m.innerHTML = " &times;"),
      (m.onclick = () => {
        ((rg = !0), o());
      }),
      m
    );
  }
  function f(m, I) {
    (m.setAttribute("id", I),
      (m.innerText = "Learn more"),
      (m.href =
        "https://firebase.google.com/docs/studio/preview-apps#preview-backend"),
      m.setAttribute("target", "__blank"),
      (m.style.paddingLeft = "5px"),
      (m.style.textDecoration = "underline"));
  }
  function p() {
    const m = jS(r),
      I = n("text"),
      N = document.getElementById(I) || document.createElement("span"),
      D = n("learnmore"),
      F = document.getElementById(D) || document.createElement("a"),
      S = n("preprendIcon"),
      E =
        document.getElementById(S) ||
        document.createElementNS("http://www.w3.org/2000/svg", "svg");
    if (m.created) {
      const R = m.element;
      (l(R), f(F, D));
      const O = h();
      (u(E, S), R.append(E, N, F, O), document.body.appendChild(R));
    }
    (s
      ? ((N.innerText = "Preview backend disconnected."),
        (E.innerHTML = `<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`))
      : ((E.innerHTML = `<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`),
        (N.innerText = "Preview backend running in this workspace.")),
      N.setAttribute("id", I));
  }
  document.readyState === "loading"
    ? window.addEventListener("DOMContentLoaded", p)
    : p();
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tt() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function BS() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())
  );
}
function zS() {
  var e;
  const t = (e = lu()) == null ? void 0 : e.forceEnvironment;
  if (t === "node") return !0;
  if (t === "browser") return !1;
  try {
    return (
      Object.prototype.toString.call(global.process) === "[object process]"
    );
  } catch {
    return !1;
  }
}
function $S() {
  return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers";
}
function WS() {
  const t =
    typeof chrome == "object"
      ? chrome.runtime
      : typeof browser == "object"
        ? browser.runtime
        : void 0;
  return typeof t == "object" && t.id !== void 0;
}
function HS() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function qS() {
  const t = tt();
  return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0;
}
function GS() {
  return (
    !zS() &&
    !!navigator.userAgent &&
    navigator.userAgent.includes("Safari") &&
    !navigator.userAgent.includes("Chrome")
  );
}
function KS() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function QS() {
  return new Promise((t, e) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        i = self.indexedDB.open(r);
      ((i.onsuccess = () => {
        (i.result.close(), n || self.indexedDB.deleteDatabase(r), t(!0));
      }),
        (i.onupgradeneeded = () => {
          n = !1;
        }),
        (i.onerror = () => {
          var s;
          e(((s = i.error) == null ? void 0 : s.message) || "");
        }));
    } catch (n) {
      e(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const YS = "FirebaseError";
class Rn extends Error {
  constructor(e, n, r) {
    (super(n),
      (this.code = e),
      (this.customData = r),
      (this.name = YS),
      Object.setPrototypeOf(this, Rn.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, jo.prototype.create));
  }
}
class jo {
  constructor(e, n, r) {
    ((this.service = e), (this.serviceName = n), (this.errors = r));
  }
  create(e, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${e}`,
      s = this.errors[e],
      o = s ? JS(s, r) : "Error",
      l = `${this.serviceName}: ${o} (${i}).`;
    return new Rn(i, l, r);
  }
}
function JS(t, e) {
  return t.replace(XS, (n, r) => {
    const i = e[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const XS = /\{\$([^}]+)}/g;
function ZS(t) {
  for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  return !0;
}
function qr(t, e) {
  if (t === e) return !0;
  const n = Object.keys(t),
    r = Object.keys(e);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const s = t[i],
      o = e[i];
    if (ig(s) && ig(o)) {
      if (!qr(s, o)) return !1;
    } else if (s !== o) return !1;
  }
  for (const i of r) if (!n.includes(i)) return !1;
  return !0;
}
function ig(t) {
  return t !== null && typeof t == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Bo(t) {
  const e = [];
  for (const [n, r] of Object.entries(t))
    Array.isArray(r)
      ? r.forEach((i) => {
          e.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
        })
      : e.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
  return e.length ? "&" + e.join("&") : "";
}
function Us(t) {
  const e = {};
  return (
    t
      .replace(/^\?/, "")
      .split("&")
      .forEach((r) => {
        if (r) {
          const [i, s] = r.split("=");
          e[decodeURIComponent(i)] = decodeURIComponent(s);
        }
      }),
    e
  );
}
function js(t) {
  const e = t.indexOf("?");
  if (!e) return "";
  const n = t.indexOf("#", e);
  return t.substring(e, n > 0 ? n : void 0);
}
function eA(t, e) {
  const n = new tA(t, e);
  return n.subscribe.bind(n);
}
class tA {
  constructor(e, n) {
    ((this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = n),
      this.task
        .then(() => {
          e(this);
        })
        .catch((r) => {
          this.error(r);
        }));
  }
  next(e) {
    this.forEachObserver((n) => {
      n.next(e);
    });
  }
  error(e) {
    (this.forEachObserver((n) => {
      n.error(e);
    }),
      this.close(e));
  }
  complete() {
    (this.forEachObserver((e) => {
      e.complete();
    }),
      this.close());
  }
  subscribe(e, n, r) {
    let i;
    if (e === void 0 && n === void 0 && r === void 0)
      throw new Error("Missing Observer.");
    (nA(e, ["next", "error", "complete"])
      ? (i = e)
      : (i = { next: e, error: n, complete: r }),
      i.next === void 0 && (i.next = wc),
      i.error === void 0 && (i.error = wc),
      i.complete === void 0 && (i.complete = wc));
    const s = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? i.error(this.finalError) : i.complete();
          } catch {}
        }),
      this.observers.push(i),
      s
    );
  }
  unsubscribeOne(e) {
    this.observers === void 0 ||
      this.observers[e] === void 0 ||
      (delete this.observers[e],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(e) {
    if (!this.finalized)
      for (let n = 0; n < this.observers.length; n++) this.sendOne(n, e);
  }
  sendOne(e, n) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[e] !== void 0)
        try {
          n(this.observers[e]);
        } catch (r) {
          typeof console < "u" && console.error && console.error(r);
        }
    });
  }
  close(e) {
    this.finalized ||
      ((this.finalized = !0),
      e !== void 0 && (this.finalError = e),
      this.task.then(() => {
        ((this.observers = void 0), (this.onNoObservers = void 0));
      }));
  }
}
function nA(t, e) {
  if (typeof t != "object" || t === null) return !1;
  for (const n of e) if (n in t && typeof t[n] == "function") return !0;
  return !1;
}
function wc() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Le(t) {
  return t && t._delegate ? t._delegate : t;
}
class Gr {
  constructor(e, n, r) {
    ((this.name = e),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null));
  }
  setInstantiationMode(e) {
    return ((this.instantiationMode = e), this);
  }
  setMultipleInstances(e) {
    return ((this.multipleInstances = e), this);
  }
  setServiceProps(e) {
    return ((this.serviceProps = e), this);
  }
  setInstanceCreatedCallback(e) {
    return ((this.onInstanceCreated = e), this);
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Dr = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rA {
  constructor(e, n) {
    ((this.name = e),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map()));
  }
  get(e) {
    const n = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(n)) {
      const r = new bS();
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: n });
          i && r.resolve(i);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(e) {
    const n = this.normalizeInstanceIdentifier(
        e == null ? void 0 : e.identifier,
      ),
      r = (e == null ? void 0 : e.optional) ?? !1;
    if (this.isInitialized(n) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: n });
      } catch (i) {
        if (r) return null;
        throw i;
      }
    else {
      if (r) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = e), !!this.shouldAutoInitialize())) {
      if (sA(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: Dr });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n);
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: i });
          r.resolve(s);
        } catch {}
      }
    }
  }
  clearInstance(e = Dr) {
    (this.instancesDeferred.delete(e),
      this.instancesOptions.delete(e),
      this.instances.delete(e));
  }
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...e.filter((n) => "_delete" in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = Dr) {
    return this.instances.has(e);
  }
  getOptions(e = Dr) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: n = {} } = e,
      r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n,
    });
    for (const [s, o] of this.instancesDeferred.entries()) {
      const l = this.normalizeInstanceIdentifier(s);
      r === l && o.resolve(i);
    }
    return i;
  }
  onInit(e, n) {
    const r = this.normalizeInstanceIdentifier(n),
      i = this.onInitCallbacks.get(r) ?? new Set();
    (i.add(e), this.onInitCallbacks.set(r, i));
    const s = this.instances.get(r);
    return (
      s && e(s, r),
      () => {
        i.delete(e);
      }
    );
  }
  invokeOnInitCallbacks(e, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const i of r)
        try {
          i(e, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: e, options: n = {} }) {
    let r = this.instances.get(e);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: iA(e),
        options: n,
      })),
      this.instances.set(e, r),
      this.instancesOptions.set(e, n),
      this.invokeOnInitCallbacks(r, e),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, e, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(e = Dr) {
    return this.component ? (this.component.multipleInstances ? e : Dr) : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function iA(t) {
  return t === Dr ? void 0 : t;
}
function sA(t) {
  return t.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oA {
  constructor(e) {
    ((this.name = e), (this.providers = new Map()));
  }
  addComponent(e) {
    const n = this.getProvider(e.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${e.name} has already been registered with ${this.name}`,
      );
    n.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    (this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
      this.addComponent(e));
  }
  getProvider(e) {
    if (this.providers.has(e)) return this.providers.get(e);
    const n = new rA(e, this);
    return (this.providers.set(e, n), n);
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var ee;
(function (t) {
  ((t[(t.DEBUG = 0)] = "DEBUG"),
    (t[(t.VERBOSE = 1)] = "VERBOSE"),
    (t[(t.INFO = 2)] = "INFO"),
    (t[(t.WARN = 3)] = "WARN"),
    (t[(t.ERROR = 4)] = "ERROR"),
    (t[(t.SILENT = 5)] = "SILENT"));
})(ee || (ee = {}));
const aA = {
    debug: ee.DEBUG,
    verbose: ee.VERBOSE,
    info: ee.INFO,
    warn: ee.WARN,
    error: ee.ERROR,
    silent: ee.SILENT,
  },
  lA = ee.INFO,
  uA = {
    [ee.DEBUG]: "log",
    [ee.VERBOSE]: "log",
    [ee.INFO]: "info",
    [ee.WARN]: "warn",
    [ee.ERROR]: "error",
  },
  cA = (t, e, ...n) => {
    if (e < t.logLevel) return;
    const r = new Date().toISOString(),
      i = uA[e];
    if (i) console[i](`[${r}]  ${t.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${e})`,
      );
  };
class Qd {
  constructor(e) {
    ((this.name = e),
      (this._logLevel = lA),
      (this._logHandler = cA),
      (this._userLogHandler = null));
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in ee))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? aA[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if (typeof e != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  debug(...e) {
    (this._userLogHandler && this._userLogHandler(this, ee.DEBUG, ...e),
      this._logHandler(this, ee.DEBUG, ...e));
  }
  log(...e) {
    (this._userLogHandler && this._userLogHandler(this, ee.VERBOSE, ...e),
      this._logHandler(this, ee.VERBOSE, ...e));
  }
  info(...e) {
    (this._userLogHandler && this._userLogHandler(this, ee.INFO, ...e),
      this._logHandler(this, ee.INFO, ...e));
  }
  warn(...e) {
    (this._userLogHandler && this._userLogHandler(this, ee.WARN, ...e),
      this._logHandler(this, ee.WARN, ...e));
  }
  error(...e) {
    (this._userLogHandler && this._userLogHandler(this, ee.ERROR, ...e),
      this._logHandler(this, ee.ERROR, ...e));
  }
}
const hA = (t, e) => e.some((n) => t instanceof n);
let sg, og;
function dA() {
  return (
    sg ||
    (sg = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function fA() {
  return (
    og ||
    (og = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const Zv = new WeakMap(),
  Nh = new WeakMap(),
  eE = new WeakMap(),
  Tc = new WeakMap(),
  Yd = new WeakMap();
function pA(t) {
  const e = new Promise((n, r) => {
    const i = () => {
        (t.removeEventListener("success", s),
          t.removeEventListener("error", o));
      },
      s = () => {
        (n(nr(t.result)), i());
      },
      o = () => {
        (r(t.error), i());
      };
    (t.addEventListener("success", s), t.addEventListener("error", o));
  });
  return (
    e
      .then((n) => {
        n instanceof IDBCursor && Zv.set(n, t);
      })
      .catch(() => {}),
    Yd.set(e, t),
    e
  );
}
function mA(t) {
  if (Nh.has(t)) return;
  const e = new Promise((n, r) => {
    const i = () => {
        (t.removeEventListener("complete", s),
          t.removeEventListener("error", o),
          t.removeEventListener("abort", o));
      },
      s = () => {
        (n(), i());
      },
      o = () => {
        (r(t.error || new DOMException("AbortError", "AbortError")), i());
      };
    (t.addEventListener("complete", s),
      t.addEventListener("error", o),
      t.addEventListener("abort", o));
  });
  Nh.set(t, e);
}
let xh = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === "done") return Nh.get(t);
      if (e === "objectStoreNames") return t.objectStoreNames || eE.get(t);
      if (e === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return nr(t[e]);
  },
  set(t, e, n) {
    return ((t[e] = n), !0);
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store")
      ? !0
      : e in t;
  },
};
function gA(t) {
  xh = t(xh);
}
function yA(t) {
  return t === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (e, ...n) {
        const r = t.call(Ic(this), e, ...n);
        return (eE.set(r, e.sort ? e.sort() : [e]), nr(r));
      }
    : fA().includes(t)
      ? function (...e) {
          return (t.apply(Ic(this), e), nr(Zv.get(this)));
        }
      : function (...e) {
          return nr(t.apply(Ic(this), e));
        };
}
function _A(t) {
  return typeof t == "function"
    ? yA(t)
    : (t instanceof IDBTransaction && mA(t),
      hA(t, dA()) ? new Proxy(t, xh) : t);
}
function nr(t) {
  if (t instanceof IDBRequest) return pA(t);
  if (Tc.has(t)) return Tc.get(t);
  const e = _A(t);
  return (e !== t && (Tc.set(t, e), Yd.set(e, t)), e);
}
const Ic = (t) => Yd.get(t);
function vA(t, e, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(t, e),
    l = nr(o);
  return (
    r &&
      o.addEventListener("upgradeneeded", (u) => {
        r(nr(o.result), u.oldVersion, u.newVersion, nr(o.transaction), u);
      }),
    n && o.addEventListener("blocked", (u) => n(u.oldVersion, u.newVersion, u)),
    l
      .then((u) => {
        (s && u.addEventListener("close", () => s()),
          i &&
            u.addEventListener("versionchange", (h) =>
              i(h.oldVersion, h.newVersion, h),
            ));
      })
      .catch(() => {}),
    l
  );
}
const EA = ["get", "getKey", "getAll", "getAllKeys", "count"],
  wA = ["put", "add", "delete", "clear"],
  Sc = new Map();
function ag(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string")) return;
  if (Sc.get(e)) return Sc.get(e);
  const n = e.replace(/FromIndex$/, ""),
    r = e !== n,
    i = wA.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || EA.includes(n))
  )
    return;
  const s = async function (o, ...l) {
    const u = this.transaction(o, i ? "readwrite" : "readonly");
    let h = u.store;
    return (
      r && (h = h.index(l.shift())),
      (await Promise.all([h[n](...l), i && u.done]))[0]
    );
  };
  return (Sc.set(e, s), s);
}
gA((t) => ({
  ...t,
  get: (e, n, r) => ag(e, n) || t.get(e, n, r),
  has: (e, n) => !!ag(e, n) || t.has(e, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class TA {
  constructor(e) {
    this.container = e;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (IA(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function IA(t) {
  const e = t.getComponent();
  return (e == null ? void 0 : e.type) === "VERSION";
}
const Dh = "@firebase/app",
  lg = "0.14.9";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const wn = new Qd("@firebase/app"),
  SA = "@firebase/app-compat",
  AA = "@firebase/analytics-compat",
  CA = "@firebase/analytics",
  RA = "@firebase/app-check-compat",
  kA = "@firebase/app-check",
  PA = "@firebase/auth",
  NA = "@firebase/auth-compat",
  xA = "@firebase/database",
  DA = "@firebase/data-connect",
  VA = "@firebase/database-compat",
  OA = "@firebase/functions",
  LA = "@firebase/functions-compat",
  MA = "@firebase/installations",
  bA = "@firebase/installations-compat",
  FA = "@firebase/messaging",
  UA = "@firebase/messaging-compat",
  jA = "@firebase/performance",
  BA = "@firebase/performance-compat",
  zA = "@firebase/remote-config",
  $A = "@firebase/remote-config-compat",
  WA = "@firebase/storage",
  HA = "@firebase/storage-compat",
  qA = "@firebase/firestore",
  GA = "@firebase/ai",
  KA = "@firebase/firestore-compat",
  QA = "firebase",
  YA = "12.10.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Vh = "[DEFAULT]",
  JA = {
    [Dh]: "fire-core",
    [SA]: "fire-core-compat",
    [CA]: "fire-analytics",
    [AA]: "fire-analytics-compat",
    [kA]: "fire-app-check",
    [RA]: "fire-app-check-compat",
    [PA]: "fire-auth",
    [NA]: "fire-auth-compat",
    [xA]: "fire-rtdb",
    [DA]: "fire-data-connect",
    [VA]: "fire-rtdb-compat",
    [OA]: "fire-fn",
    [LA]: "fire-fn-compat",
    [MA]: "fire-iid",
    [bA]: "fire-iid-compat",
    [FA]: "fire-fcm",
    [UA]: "fire-fcm-compat",
    [jA]: "fire-perf",
    [BA]: "fire-perf-compat",
    [zA]: "fire-rc",
    [$A]: "fire-rc-compat",
    [WA]: "fire-gcs",
    [HA]: "fire-gcs-compat",
    [qA]: "fire-fst",
    [KA]: "fire-fst-compat",
    [GA]: "fire-vertex",
    "fire-js": "fire-js",
    [QA]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Pl = new Map(),
  XA = new Map(),
  Oh = new Map();
function ug(t, e) {
  try {
    t.container.addComponent(e);
  } catch (n) {
    wn.debug(
      `Component ${e.name} failed to register with FirebaseApp ${t.name}`,
      n,
    );
  }
}
function $i(t) {
  const e = t.name;
  if (Oh.has(e))
    return (
      wn.debug(`There were multiple attempts to register component ${e}.`),
      !1
    );
  Oh.set(e, t);
  for (const n of Pl.values()) ug(n, t);
  for (const n of XA.values()) ug(n, t);
  return !0;
}
function Jd(t, e) {
  const n = t.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return (n && n.triggerHeartbeat(), t.container.getProvider(e));
}
function yt(t) {
  return t == null ? !1 : t.settings !== void 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ZA = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported":
      "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment":
      "FirebaseServerApp is not for use in browser environments.",
  },
  rr = new jo("app", "Firebase", ZA);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e1 {
  constructor(e, n, r) {
    ((this._isDeleted = !1),
      (this._options = { ...e }),
      (this._config = { ...n }),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new Gr("app", () => this, "PUBLIC")));
  }
  get automaticDataCollectionEnabled() {
    return (this.checkDestroyed(), this._automaticDataCollectionEnabled);
  }
  set automaticDataCollectionEnabled(e) {
    (this.checkDestroyed(), (this._automaticDataCollectionEnabled = e));
  }
  get name() {
    return (this.checkDestroyed(), this._name);
  }
  get options() {
    return (this.checkDestroyed(), this._options);
  }
  get config() {
    return (this.checkDestroyed(), this._config);
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  checkDestroyed() {
    if (this.isDeleted) throw rr.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ts = YA;
function tE(t, e = {}) {
  let n = t;
  typeof e != "object" && (e = { name: e });
  const r = { name: Vh, automaticDataCollectionEnabled: !0, ...e },
    i = r.name;
  if (typeof i != "string" || !i)
    throw rr.create("bad-app-name", { appName: String(i) });
  if ((n || (n = Qv()), !n)) throw rr.create("no-options");
  const s = Pl.get(i);
  if (s) {
    if (qr(n, s.options) && qr(r, s.config)) return s;
    throw rr.create("duplicate-app", { appName: i });
  }
  const o = new oA(i);
  for (const u of Oh.values()) o.addComponent(u);
  const l = new e1(n, r, o);
  return (Pl.set(i, l), l);
}
function nE(t = Vh) {
  const e = Pl.get(t);
  if (!e && t === Vh && Qv()) return tE();
  if (!e) throw rr.create("no-app", { appName: t });
  return e;
}
function ir(t, e, n) {
  let r = JA[t] ?? t;
  n && (r += `-${n}`);
  const i = r.match(/\s|\//),
    s = e.match(/\s|\//);
  if (i || s) {
    const o = [`Unable to register library "${r}" with version "${e}":`];
    (i &&
      o.push(
        `library name "${r}" contains illegal characters (whitespace or "/")`,
      ),
      i && s && o.push("and"),
      s &&
        o.push(
          `version name "${e}" contains illegal characters (whitespace or "/")`,
        ),
      wn.warn(o.join(" ")));
    return;
  }
  $i(new Gr(`${r}-version`, () => ({ library: r, version: e }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const t1 = "firebase-heartbeat-database",
  n1 = 1,
  So = "firebase-heartbeat-store";
let Ac = null;
function rE() {
  return (
    Ac ||
      (Ac = vA(t1, n1, {
        upgrade: (t, e) => {
          switch (e) {
            case 0:
              try {
                t.createObjectStore(So);
              } catch (n) {
                console.warn(n);
              }
          }
        },
      }).catch((t) => {
        throw rr.create("idb-open", { originalErrorMessage: t.message });
      })),
    Ac
  );
}
async function r1(t) {
  try {
    const n = (await rE()).transaction(So),
      r = await n.objectStore(So).get(iE(t));
    return (await n.done, r);
  } catch (e) {
    if (e instanceof Rn) wn.warn(e.message);
    else {
      const n = rr.create("idb-get", {
        originalErrorMessage: e == null ? void 0 : e.message,
      });
      wn.warn(n.message);
    }
  }
}
async function cg(t, e) {
  try {
    const r = (await rE()).transaction(So, "readwrite");
    (await r.objectStore(So).put(e, iE(t)), await r.done);
  } catch (n) {
    if (n instanceof Rn) wn.warn(n.message);
    else {
      const r = rr.create("idb-set", {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      wn.warn(r.message);
    }
  }
}
function iE(t) {
  return `${t.name}!${t.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const i1 = 1024,
  s1 = 30;
class o1 {
  constructor(e) {
    ((this.container = e), (this._heartbeatsCache = null));
    const n = this.container.getProvider("app").getImmediate();
    ((this._storage = new l1(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r))));
  }
  async triggerHeartbeat() {
    var e, n;
    try {
      const i = this.container
          .getProvider("platform-logger")
          .getImmediate()
          .getPlatformInfoString(),
        s = hg();
      if (
        (((e = this._heartbeatsCache) == null ? void 0 : e.heartbeats) ==
          null &&
          ((this._heartbeatsCache = await this._heartbeatsCachePromise),
          ((n = this._heartbeatsCache) == null ? void 0 : n.heartbeats) ==
            null)) ||
        this._heartbeatsCache.lastSentHeartbeatDate === s ||
        this._heartbeatsCache.heartbeats.some((o) => o.date === s)
      )
        return;
      if (
        (this._heartbeatsCache.heartbeats.push({ date: s, agent: i }),
        this._heartbeatsCache.heartbeats.length > s1)
      ) {
        const o = u1(this._heartbeatsCache.heartbeats);
        this._heartbeatsCache.heartbeats.splice(o, 1);
      }
      return this._storage.overwrite(this._heartbeatsCache);
    } catch (r) {
      wn.warn(r);
    }
  }
  async getHeartbeatsHeader() {
    var e;
    try {
      if (
        (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
        ((e = this._heartbeatsCache) == null ? void 0 : e.heartbeats) == null ||
          this._heartbeatsCache.heartbeats.length === 0)
      )
        return "";
      const n = hg(),
        { heartbeatsToSend: r, unsentEntries: i } = a1(
          this._heartbeatsCache.heartbeats,
        ),
        s = kl(JSON.stringify({ version: 2, heartbeats: r }));
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = n),
        i.length > 0
          ? ((this._heartbeatsCache.heartbeats = i),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        s
      );
    } catch (n) {
      return (wn.warn(n), "");
    }
  }
}
function hg() {
  return new Date().toISOString().substring(0, 10);
}
function a1(t, e = i1) {
  const n = [];
  let r = t.slice();
  for (const i of t) {
    const s = n.find((o) => o.agent === i.agent);
    if (s) {
      if ((s.dates.push(i.date), dg(n) > e)) {
        s.dates.pop();
        break;
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), dg(n) > e)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class l1 {
  constructor(e) {
    ((this.app = e),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()));
  }
  async runIndexedDBEnvironmentCheck() {
    return KS()
      ? QS()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await r1(this.app);
      return n != null && n.heartbeats ? n : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(e) {
    if (await this._canUseIndexedDBPromise) {
      const r = await this.read();
      return cg(this.app, {
        lastSentHeartbeatDate:
          e.lastSentHeartbeatDate ?? r.lastSentHeartbeatDate,
        heartbeats: e.heartbeats,
      });
    } else return;
  }
  async add(e) {
    if (await this._canUseIndexedDBPromise) {
      const r = await this.read();
      return cg(this.app, {
        lastSentHeartbeatDate:
          e.lastSentHeartbeatDate ?? r.lastSentHeartbeatDate,
        heartbeats: [...r.heartbeats, ...e.heartbeats],
      });
    } else return;
  }
}
function dg(t) {
  return kl(JSON.stringify({ version: 2, heartbeats: t })).length;
}
function u1(t) {
  if (t.length === 0) return -1;
  let e = 0,
    n = t[0].date;
  for (let r = 1; r < t.length; r++)
    t[r].date < n && ((n = t[r].date), (e = r));
  return e;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function c1(t) {
  ($i(new Gr("platform-logger", (e) => new TA(e), "PRIVATE")),
    $i(new Gr("heartbeat", (e) => new o1(e), "PRIVATE")),
    ir(Dh, lg, t),
    ir(Dh, lg, "esm2020"),
    ir("fire-js", ""));
}
c1("");
function sE() {
  return {
    "dependent-sdk-initialized-before-auth":
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
const h1 = sE,
  oE = new jo("auth", "Firebase", sE());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Nl = new Qd("@firebase/auth");
function d1(t, ...e) {
  Nl.logLevel <= ee.WARN && Nl.warn(`Auth (${ts}): ${t}`, ...e);
}
function Ka(t, ...e) {
  Nl.logLevel <= ee.ERROR && Nl.error(`Auth (${ts}): ${t}`, ...e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Dt(t, ...e) {
  throw Zd(t, ...e);
}
function Bt(t, ...e) {
  return Zd(t, ...e);
}
function Xd(t, e, n) {
  const r = { ...h1(), [e]: n };
  return new jo("auth", "Firebase", r).create(e, { appName: t.name });
}
function mn(t) {
  return Xd(
    t,
    "operation-not-supported-in-this-environment",
    "Operations that alter the current user are not supported in conjunction with FirebaseServerApp",
  );
}
function f1(t, e, n) {
  const r = n;
  if (!(e instanceof r))
    throw (
      r.name !== e.constructor.name && Dt(t, "argument-error"),
      Xd(
        t,
        "argument-error",
        `Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`,
      )
    );
}
function Zd(t, ...e) {
  if (typeof t != "string") {
    const n = e[0],
      r = [...e.slice(1)];
    return (r[0] && (r[0].appName = t.name), t._errorFactory.create(n, ...r));
  }
  return oE.create(t, ...e);
}
function q(t, e, ...n) {
  if (!t) throw Zd(e, ...n);
}
function dn(t) {
  const e = "INTERNAL ASSERTION FAILED: " + t;
  throw (Ka(e), new Error(e));
}
function Tn(t, e) {
  t || dn(e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Lh() {
  var t;
  return (
    (typeof self < "u" && ((t = self.location) == null ? void 0 : t.href)) || ""
  );
}
function p1() {
  return fg() === "http:" || fg() === "https:";
}
function fg() {
  var t;
  return (
    (typeof self < "u" &&
      ((t = self.location) == null ? void 0 : t.protocol)) ||
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function m1() {
  return typeof navigator < "u" &&
    navigator &&
    "onLine" in navigator &&
    typeof navigator.onLine == "boolean" &&
    (p1() || WS() || "connection" in navigator)
    ? navigator.onLine
    : !0;
}
function g1() {
  if (typeof navigator > "u") return null;
  const t = navigator;
  return (t.languages && t.languages[0]) || t.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zo {
  constructor(e, n) {
    ((this.shortDelay = e),
      (this.longDelay = n),
      Tn(n > e, "Short delay should be less than long delay!"),
      (this.isMobile = BS() || HS()));
  }
  get() {
    return m1()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ef(t, e) {
  Tn(t.emulator, "Emulator should always be set here");
  const { url: n } = t.emulator;
  return e ? `${n}${e.startsWith("/") ? e.slice(1) : e}` : n;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aE {
  static initialize(e, n, r) {
    ((this.fetchImpl = e),
      n && (this.headersImpl = n),
      r && (this.responseImpl = r));
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self) return self.fetch;
    if (typeof globalThis < "u" && globalThis.fetch) return globalThis.fetch;
    if (typeof fetch < "u") return fetch;
    dn(
      "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill",
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < "u" && "Headers" in self) return self.Headers;
    if (typeof globalThis < "u" && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < "u") return Headers;
    dn(
      "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill",
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < "u" && "Response" in self) return self.Response;
    if (typeof globalThis < "u" && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < "u") return Response;
    dn(
      "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill",
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const y1 = {
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  MISSING_CUSTOM_TOKEN: "internal-error",
  INVALID_IDENTIFIER: "invalid-email",
  MISSING_CONTINUE_URI: "internal-error",
  INVALID_PASSWORD: "wrong-password",
  MISSING_PASSWORD: "missing-password",
  INVALID_LOGIN_CREDENTIALS: "invalid-credential",
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  MISSING_REQ_TYPE: "internal-error",
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  MISSING_OOB_CODE: "internal-error",
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
  RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "missing-client-type",
  MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
  INVALID_REQ_TYPE: "invalid-req-type",
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const _1 = [
    "/v1/accounts:signInWithCustomToken",
    "/v1/accounts:signInWithEmailLink",
    "/v1/accounts:signInWithIdp",
    "/v1/accounts:signInWithPassword",
    "/v1/accounts:signInWithPhoneNumber",
    "/v1/token",
  ],
  v1 = new zo(3e4, 6e4);
function _r(t, e) {
  return t.tenantId && !e.tenantId ? { ...e, tenantId: t.tenantId } : e;
}
async function kn(t, e, n, r, i = {}) {
  return lE(t, i, async () => {
    let s = {},
      o = {};
    r && (e === "GET" ? (o = r) : (s = { body: JSON.stringify(r) }));
    const l = Bo({ key: t.config.apiKey, ...o }).slice(1),
      u = await t._getAdditionalHeaders();
    ((u["Content-Type"] = "application/json"),
      t.languageCode && (u["X-Firebase-Locale"] = t.languageCode));
    const h = { method: e, headers: u, ...s };
    return (
      $S() || (h.referrerPolicy = "no-referrer"),
      t.emulatorConfig &&
        es(t.emulatorConfig.host) &&
        (h.credentials = "include"),
      aE.fetch()(await uE(t, t.config.apiHost, n, l), h)
    );
  });
}
async function lE(t, e, n) {
  t._canInitEmulator = !1;
  const r = { ...y1, ...e };
  try {
    const i = new w1(t),
      s = await Promise.race([n(), i.promise]);
    i.clearNetworkTimeout();
    const o = await s.json();
    if ("needConfirmation" in o)
      throw Na(t, "account-exists-with-different-credential", o);
    if (s.ok && !("errorMessage" in o)) return o;
    {
      const l = s.ok ? o.errorMessage : o.error.message,
        [u, h] = l.split(" : ");
      if (u === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw Na(t, "credential-already-in-use", o);
      if (u === "EMAIL_EXISTS") throw Na(t, "email-already-in-use", o);
      if (u === "USER_DISABLED") throw Na(t, "user-disabled", o);
      const f = r[u] || u.toLowerCase().replace(/[_\s]+/g, "-");
      if (h) throw Xd(t, f, h);
      Dt(t, f);
    }
  } catch (i) {
    if (i instanceof Rn) throw i;
    Dt(t, "network-request-failed", { message: String(i) });
  }
}
async function $o(t, e, n, r, i = {}) {
  const s = await kn(t, e, n, r, i);
  return (
    "mfaPendingCredential" in s &&
      Dt(t, "multi-factor-auth-required", { _serverResponse: s }),
    s
  );
}
async function uE(t, e, n, r) {
  const i = `${e}${n}?${r}`,
    s = t,
    o = s.config.emulator ? ef(t.config, i) : `${t.config.apiScheme}://${i}`;
  return _1.includes(n) &&
    (await s._persistenceManagerAvailable, s._getPersistenceType() === "COOKIE")
    ? s._getPersistence()._getFinalTarget(o).toString()
    : o;
}
function E1(t) {
  switch (t) {
    case "ENFORCE":
      return "ENFORCE";
    case "AUDIT":
      return "AUDIT";
    case "OFF":
      return "OFF";
    default:
      return "ENFORCEMENT_STATE_UNSPECIFIED";
  }
}
class w1 {
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
  constructor(e) {
    ((this.auth = e),
      (this.timer = null),
      (this.promise = new Promise((n, r) => {
        this.timer = setTimeout(
          () => r(Bt(this.auth, "network-request-failed")),
          v1.get(),
        );
      })));
  }
}
function Na(t, e, n) {
  const r = { appName: t.name };
  (n.email && (r.email = n.email),
    n.phoneNumber && (r.phoneNumber = n.phoneNumber));
  const i = Bt(t, e, r);
  return ((i.customData._tokenResponse = n), i);
}
function pg(t) {
  return t !== void 0 && t.enterprise !== void 0;
}
class T1 {
  constructor(e) {
    if (
      ((this.siteKey = ""),
      (this.recaptchaEnforcementState = []),
      e.recaptchaKey === void 0)
    )
      throw new Error("recaptchaKey undefined");
    ((this.siteKey = e.recaptchaKey.split("/")[3]),
      (this.recaptchaEnforcementState = e.recaptchaEnforcementState));
  }
  getProviderEnforcementState(e) {
    if (
      !this.recaptchaEnforcementState ||
      this.recaptchaEnforcementState.length === 0
    )
      return null;
    for (const n of this.recaptchaEnforcementState)
      if (n.provider && n.provider === e) return E1(n.enforcementState);
    return null;
  }
  isProviderEnabled(e) {
    return (
      this.getProviderEnforcementState(e) === "ENFORCE" ||
      this.getProviderEnforcementState(e) === "AUDIT"
    );
  }
  isAnyProviderEnabled() {
    return (
      this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER") ||
      this.isProviderEnabled("PHONE_PROVIDER")
    );
  }
}
async function I1(t, e) {
  return kn(t, "GET", "/v2/recaptchaConfig", _r(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function S1(t, e) {
  return kn(t, "POST", "/v1/accounts:delete", e);
}
async function xl(t, e) {
  return kn(t, "POST", "/v1/accounts:lookup", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function to(t) {
  if (t)
    try {
      const e = new Date(Number(t));
      if (!isNaN(e.getTime())) return e.toUTCString();
    } catch {}
}
async function A1(t, e = !1) {
  const n = Le(t),
    r = await n.getIdToken(e),
    i = tf(r);
  q(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
  const s = typeof i.firebase == "object" ? i.firebase : void 0,
    o = s == null ? void 0 : s.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: to(Cc(i.auth_time)),
    issuedAtTime: to(Cc(i.iat)),
    expirationTime: to(Cc(i.exp)),
    signInProvider: o || null,
    signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null,
  };
}
function Cc(t) {
  return Number(t) * 1e3;
}
function tf(t) {
  const [e, n, r] = t.split(".");
  if (e === void 0 || n === void 0 || r === void 0)
    return (Ka("JWT malformed, contained fewer than 3 sections"), null);
  try {
    const i = Gv(n);
    return i
      ? JSON.parse(i)
      : (Ka("Failed to decode base64 JWT payload"), null);
  } catch (i) {
    return (
      Ka(
        "Caught error parsing JWT payload as JSON",
        i == null ? void 0 : i.toString(),
      ),
      null
    );
  }
}
function mg(t) {
  const e = tf(t);
  return (
    q(e, "internal-error"),
    q(typeof e.exp < "u", "internal-error"),
    q(typeof e.iat < "u", "internal-error"),
    Number(e.exp) - Number(e.iat)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Wi(t, e, n = !1) {
  if (n) return e;
  try {
    return await e;
  } catch (r) {
    throw (
      r instanceof Rn &&
        C1(r) &&
        t.auth.currentUser === t &&
        (await t.auth.signOut()),
      r
    );
  }
}
function C1({ code: t }) {
  return t === "auth/user-disabled" || t === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class R1 {
  constructor(e) {
    ((this.user = e),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4));
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    this.isRunning &&
      ((this.isRunning = !1),
      this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(e) {
    if (e) {
      const n = this.errorBackoff;
      return ((this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), n);
    } else {
      this.errorBackoff = 3e4;
      const r =
        (this.user.stsTokenManager.expirationTime ?? 0) - Date.now() - 3e5;
      return Math.max(0, r);
    }
  }
  schedule(e = !1) {
    if (!this.isRunning) return;
    const n = this.getInterval(e);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, n);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (e) {
      (e == null ? void 0 : e.code) === "auth/network-request-failed" &&
        this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Mh {
  constructor(e, n) {
    ((this.createdAt = e), (this.lastLoginAt = n), this._initializeTime());
  }
  _initializeTime() {
    ((this.lastSignInTime = to(this.lastLoginAt)),
      (this.creationTime = to(this.createdAt)));
  }
  _copy(e) {
    ((this.createdAt = e.createdAt),
      (this.lastLoginAt = e.lastLoginAt),
      this._initializeTime());
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Dl(t) {
  var p;
  const e = t.auth,
    n = await t.getIdToken(),
    r = await Wi(t, xl(e, { idToken: n }));
  q(r == null ? void 0 : r.users.length, e, "internal-error");
  const i = r.users[0];
  t._notifyReloadListener(i);
  const s =
      (p = i.providerUserInfo) != null && p.length
        ? cE(i.providerUserInfo)
        : [],
    o = P1(t.providerData, s),
    l = t.isAnonymous,
    u = !(t.email && i.passwordHash) && !(o != null && o.length),
    h = l ? u : !1,
    f = {
      uid: i.localId,
      displayName: i.displayName || null,
      photoURL: i.photoUrl || null,
      email: i.email || null,
      emailVerified: i.emailVerified || !1,
      phoneNumber: i.phoneNumber || null,
      tenantId: i.tenantId || null,
      providerData: o,
      metadata: new Mh(i.createdAt, i.lastLoginAt),
      isAnonymous: h,
    };
  Object.assign(t, f);
}
async function k1(t) {
  const e = Le(t);
  (await Dl(e),
    await e.auth._persistUserIfCurrent(e),
    e.auth._notifyListenersIfCurrent(e));
}
function P1(t, e) {
  return [
    ...t.filter((r) => !e.some((i) => i.providerId === r.providerId)),
    ...e,
  ];
}
function cE(t) {
  return t.map(({ providerId: e, ...n }) => ({
    providerId: e,
    uid: n.rawId || "",
    displayName: n.displayName || null,
    email: n.email || null,
    phoneNumber: n.phoneNumber || null,
    photoURL: n.photoUrl || null,
  }));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function N1(t, e) {
  const n = await lE(t, {}, async () => {
    const r = Bo({ grant_type: "refresh_token", refresh_token: e }).slice(1),
      { tokenApiHost: i, apiKey: s } = t.config,
      o = await uE(t, i, "/v1/token", `key=${s}`),
      l = await t._getAdditionalHeaders();
    l["Content-Type"] = "application/x-www-form-urlencoded";
    const u = { method: "POST", headers: l, body: r };
    return (
      t.emulatorConfig &&
        es(t.emulatorConfig.host) &&
        (u.credentials = "include"),
      aE.fetch()(o, u)
    );
  });
  return {
    accessToken: n.access_token,
    expiresIn: n.expires_in,
    refreshToken: n.refresh_token,
  };
}
async function x1(t, e) {
  return kn(t, "POST", "/v2/accounts:revokeToken", _r(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ni {
  constructor() {
    ((this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null));
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    (q(e.idToken, "internal-error"),
      q(typeof e.idToken < "u", "internal-error"),
      q(typeof e.refreshToken < "u", "internal-error"));
    const n =
      "expiresIn" in e && typeof e.expiresIn < "u"
        ? Number(e.expiresIn)
        : mg(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, n);
  }
  updateFromIdToken(e) {
    q(e.length !== 0, "internal-error");
    const n = mg(e);
    this.updateTokensAndExpiration(e, null, n);
  }
  async getToken(e, n = !1) {
    return !n && this.accessToken && !this.isExpired
      ? this.accessToken
      : (q(this.refreshToken, e, "user-token-expired"),
        this.refreshToken
          ? (await this.refresh(e, this.refreshToken), this.accessToken)
          : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(e, n) {
    const { accessToken: r, refreshToken: i, expiresIn: s } = await N1(e, n);
    this.updateTokensAndExpiration(r, i, Number(s));
  }
  updateTokensAndExpiration(e, n, r) {
    ((this.refreshToken = n || null),
      (this.accessToken = e || null),
      (this.expirationTime = Date.now() + r * 1e3));
  }
  static fromJSON(e, n) {
    const { refreshToken: r, accessToken: i, expirationTime: s } = n,
      o = new Ni();
    return (
      r &&
        (q(typeof r == "string", "internal-error", { appName: e }),
        (o.refreshToken = r)),
      i &&
        (q(typeof i == "string", "internal-error", { appName: e }),
        (o.accessToken = i)),
      s &&
        (q(typeof s == "number", "internal-error", { appName: e }),
        (o.expirationTime = s)),
      o
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(e) {
    ((this.accessToken = e.accessToken),
      (this.refreshToken = e.refreshToken),
      (this.expirationTime = e.expirationTime));
  }
  _clone() {
    return Object.assign(new Ni(), this.toJSON());
  }
  _performRefresh() {
    return dn("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bn(t, e) {
  q(typeof t == "string" || typeof t > "u", "internal-error", { appName: e });
}
class Ft {
  constructor({ uid: e, auth: n, stsTokenManager: r, ...i }) {
    ((this.providerId = "firebase"),
      (this.proactiveRefresh = new R1(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = e),
      (this.auth = n),
      (this.stsTokenManager = r),
      (this.accessToken = r.accessToken),
      (this.displayName = i.displayName || null),
      (this.email = i.email || null),
      (this.emailVerified = i.emailVerified || !1),
      (this.phoneNumber = i.phoneNumber || null),
      (this.photoURL = i.photoURL || null),
      (this.isAnonymous = i.isAnonymous || !1),
      (this.tenantId = i.tenantId || null),
      (this.providerData = i.providerData ? [...i.providerData] : []),
      (this.metadata = new Mh(i.createdAt || void 0, i.lastLoginAt || void 0)));
  }
  async getIdToken(e) {
    const n = await Wi(this, this.stsTokenManager.getToken(this.auth, e));
    return (
      q(n, this.auth, "internal-error"),
      this.accessToken !== n &&
        ((this.accessToken = n),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      n
    );
  }
  getIdTokenResult(e) {
    return A1(this, e);
  }
  reload() {
    return k1(this);
  }
  _assign(e) {
    this !== e &&
      (q(this.uid === e.uid, this.auth, "internal-error"),
      (this.displayName = e.displayName),
      (this.photoURL = e.photoURL),
      (this.email = e.email),
      (this.emailVerified = e.emailVerified),
      (this.phoneNumber = e.phoneNumber),
      (this.isAnonymous = e.isAnonymous),
      (this.tenantId = e.tenantId),
      (this.providerData = e.providerData.map((n) => ({ ...n }))),
      this.metadata._copy(e.metadata),
      this.stsTokenManager._assign(e.stsTokenManager));
  }
  _clone(e) {
    const n = new Ft({
      ...this,
      auth: e,
      stsTokenManager: this.stsTokenManager._clone(),
    });
    return (n.metadata._copy(this.metadata), n);
  }
  _onReload(e) {
    (q(!this.reloadListener, this.auth, "internal-error"),
      (this.reloadListener = e),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo),
        (this.reloadUserInfo = null)));
  }
  _notifyReloadListener(e) {
    this.reloadListener ? this.reloadListener(e) : (this.reloadUserInfo = e);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(e, n = !1) {
    let r = !1;
    (e.idToken &&
      e.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(e), (r = !0)),
      n && (await Dl(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this));
  }
  async delete() {
    if (yt(this.auth.app)) return Promise.reject(mn(this.auth));
    const e = await this.getIdToken();
    return (
      await Wi(this, S1(this.auth, { idToken: e })),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    );
  }
  toJSON() {
    return {
      uid: this.uid,
      email: this.email || void 0,
      emailVerified: this.emailVerified,
      displayName: this.displayName || void 0,
      isAnonymous: this.isAnonymous,
      photoURL: this.photoURL || void 0,
      phoneNumber: this.phoneNumber || void 0,
      tenantId: this.tenantId || void 0,
      providerData: this.providerData.map((e) => ({ ...e })),
      stsTokenManager: this.stsTokenManager.toJSON(),
      _redirectEventId: this._redirectEventId,
      ...this.metadata.toJSON(),
      apiKey: this.auth.config.apiKey,
      appName: this.auth.name,
    };
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(e, n) {
    const r = n.displayName ?? void 0,
      i = n.email ?? void 0,
      s = n.phoneNumber ?? void 0,
      o = n.photoURL ?? void 0,
      l = n.tenantId ?? void 0,
      u = n._redirectEventId ?? void 0,
      h = n.createdAt ?? void 0,
      f = n.lastLoginAt ?? void 0,
      {
        uid: p,
        emailVerified: m,
        isAnonymous: I,
        providerData: N,
        stsTokenManager: D,
      } = n;
    q(p && D, e, "internal-error");
    const F = Ni.fromJSON(this.name, D);
    (q(typeof p == "string", e, "internal-error"),
      bn(r, e.name),
      bn(i, e.name),
      q(typeof m == "boolean", e, "internal-error"),
      q(typeof I == "boolean", e, "internal-error"),
      bn(s, e.name),
      bn(o, e.name),
      bn(l, e.name),
      bn(u, e.name),
      bn(h, e.name),
      bn(f, e.name));
    const S = new Ft({
      uid: p,
      auth: e,
      email: i,
      emailVerified: m,
      displayName: r,
      isAnonymous: I,
      photoURL: o,
      phoneNumber: s,
      tenantId: l,
      stsTokenManager: F,
      createdAt: h,
      lastLoginAt: f,
    });
    return (
      N && Array.isArray(N) && (S.providerData = N.map((E) => ({ ...E }))),
      u && (S._redirectEventId = u),
      S
    );
  }
  static async _fromIdTokenResponse(e, n, r = !1) {
    const i = new Ni();
    i.updateFromServerResponse(n);
    const s = new Ft({
      uid: n.localId,
      auth: e,
      stsTokenManager: i,
      isAnonymous: r,
    });
    return (await Dl(s), s);
  }
  static async _fromGetAccountInfoResponse(e, n, r) {
    const i = n.users[0];
    q(i.localId !== void 0, "internal-error");
    const s = i.providerUserInfo !== void 0 ? cE(i.providerUserInfo) : [],
      o = !(i.email && i.passwordHash) && !(s != null && s.length),
      l = new Ni();
    l.updateFromIdToken(r);
    const u = new Ft({
        uid: i.localId,
        auth: e,
        stsTokenManager: l,
        isAnonymous: o,
      }),
      h = {
        uid: i.localId,
        displayName: i.displayName || null,
        photoURL: i.photoUrl || null,
        email: i.email || null,
        emailVerified: i.emailVerified || !1,
        phoneNumber: i.phoneNumber || null,
        tenantId: i.tenantId || null,
        providerData: s,
        metadata: new Mh(i.createdAt, i.lastLoginAt),
        isAnonymous: !(i.email && i.passwordHash) && !(s != null && s.length),
      };
    return (Object.assign(u, h), u);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const gg = new Map();
function fn(t) {
  Tn(t instanceof Function, "Expected a class definition");
  let e = gg.get(t);
  return e
    ? (Tn(e instanceof t, "Instance stored in cache mismatched with class"), e)
    : ((e = new t()), gg.set(t, e), e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hE {
  constructor() {
    ((this.type = "NONE"), (this.storage = {}));
  }
  async _isAvailable() {
    return !0;
  }
  async _set(e, n) {
    this.storage[e] = n;
  }
  async _get(e) {
    const n = this.storage[e];
    return n === void 0 ? null : n;
  }
  async _remove(e) {
    delete this.storage[e];
  }
  _addListener(e, n) {}
  _removeListener(e, n) {}
}
hE.type = "NONE";
const yg = hE;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Qa(t, e, n) {
  return `firebase:${t}:${e}:${n}`;
}
class xi {
  constructor(e, n, r) {
    ((this.persistence = e), (this.auth = n), (this.userKey = r));
    const { config: i, name: s } = this.auth;
    ((this.fullUserKey = Qa(this.userKey, i.apiKey, s)),
      (this.fullPersistenceKey = Qa("persistence", i.apiKey, s)),
      (this.boundEventHandler = n._onStorageEvent.bind(n)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler));
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    if (!e) return null;
    if (typeof e == "string") {
      const n = await xl(this.auth, { idToken: e }).catch(() => {});
      return n ? Ft._fromGetAccountInfoResponse(this.auth, n, e) : null;
    }
    return Ft._fromJSON(this.auth, e);
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type,
    );
  }
  async setPersistence(e) {
    if (this.persistence === e) return;
    const n = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = e), n))
      return this.setCurrentUser(n);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(e, n, r = "authUser") {
    if (!n.length) return new xi(fn(yg), e, r);
    const i = (
      await Promise.all(
        n.map(async (h) => {
          if (await h._isAvailable()) return h;
        }),
      )
    ).filter((h) => h);
    let s = i[0] || fn(yg);
    const o = Qa(r, e.config.apiKey, e.name);
    let l = null;
    for (const h of n)
      try {
        const f = await h._get(o);
        if (f) {
          let p;
          if (typeof f == "string") {
            const m = await xl(e, { idToken: f }).catch(() => {});
            if (!m) break;
            p = await Ft._fromGetAccountInfoResponse(e, m, f);
          } else p = Ft._fromJSON(e, f);
          (h !== s && (l = p), (s = h));
          break;
        }
      } catch {}
    const u = i.filter((h) => h._shouldAllowMigration);
    return !s._shouldAllowMigration || !u.length
      ? new xi(s, e, r)
      : ((s = u[0]),
        l && (await s._set(o, l.toJSON())),
        await Promise.all(
          n.map(async (h) => {
            if (h !== s)
              try {
                await h._remove(o);
              } catch {}
          }),
        ),
        new xi(s, e, r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _g(t) {
  const e = t.toLowerCase();
  if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
    return "Opera";
  if (mE(e)) return "IEMobile";
  if (e.includes("msie") || e.includes("trident/")) return "IE";
  if (e.includes("edge/")) return "Edge";
  if (dE(e)) return "Firefox";
  if (e.includes("silk/")) return "Silk";
  if (yE(e)) return "Blackberry";
  if (_E(e)) return "Webos";
  if (fE(e)) return "Safari";
  if ((e.includes("chrome/") || pE(e)) && !e.includes("edge/")) return "Chrome";
  if (gE(e)) return "Android";
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = t.match(n);
    if ((r == null ? void 0 : r.length) === 2) return r[1];
  }
  return "Other";
}
function dE(t = tt()) {
  return /firefox\//i.test(t);
}
function fE(t = tt()) {
  const e = t.toLowerCase();
  return (
    e.includes("safari/") &&
    !e.includes("chrome/") &&
    !e.includes("crios/") &&
    !e.includes("android")
  );
}
function pE(t = tt()) {
  return /crios\//i.test(t);
}
function mE(t = tt()) {
  return /iemobile/i.test(t);
}
function gE(t = tt()) {
  return /android/i.test(t);
}
function yE(t = tt()) {
  return /blackberry/i.test(t);
}
function _E(t = tt()) {
  return /webos/i.test(t);
}
function nf(t = tt()) {
  return (
    /iphone|ipad|ipod/i.test(t) || (/macintosh/i.test(t) && /mobile/i.test(t))
  );
}
function D1(t = tt()) {
  var e;
  return nf(t) && !!((e = window.navigator) != null && e.standalone);
}
function V1() {
  return qS() && document.documentMode === 10;
}
function vE(t = tt()) {
  return nf(t) || gE(t) || _E(t) || yE(t) || /windows phone/i.test(t) || mE(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function EE(t, e = []) {
  let n;
  switch (t) {
    case "Browser":
      n = _g(tt());
      break;
    case "Worker":
      n = `${_g(tt())}-${t}`;
      break;
    default:
      n = t;
  }
  const r = e.length ? e.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${ts}/${r}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class O1 {
  constructor(e) {
    ((this.auth = e), (this.queue = []));
  }
  pushCallback(e, n) {
    const r = (s) =>
      new Promise((o, l) => {
        try {
          const u = e(s);
          o(u);
        } catch (u) {
          l(u);
        }
      });
    ((r.onAbort = n), this.queue.push(r));
    const i = this.queue.length - 1;
    return () => {
      this.queue[i] = () => Promise.resolve();
    };
  }
  async runMiddleware(e) {
    if (this.auth.currentUser === e) return;
    const n = [];
    try {
      for (const r of this.queue) (await r(e), r.onAbort && n.push(r.onAbort));
    } catch (r) {
      n.reverse();
      for (const i of n)
        try {
          i();
        } catch {}
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: r == null ? void 0 : r.message,
      });
    }
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function L1(t, e = {}) {
  return kn(t, "GET", "/v2/passwordPolicy", _r(t, e));
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const M1 = 6;
class b1 {
  constructor(e) {
    var r;
    const n = e.customStrengthOptions;
    ((this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength =
        n.minPasswordLength ?? M1),
      n.maxPasswordLength &&
        (this.customStrengthOptions.maxPasswordLength = n.maxPasswordLength),
      n.containsLowercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsLowercaseLetter =
          n.containsLowercaseCharacter),
      n.containsUppercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsUppercaseLetter =
          n.containsUppercaseCharacter),
      n.containsNumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNumericCharacter =
          n.containsNumericCharacter),
      n.containsNonAlphanumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNonAlphanumericCharacter =
          n.containsNonAlphanumericCharacter),
      (this.enforcementState = e.enforcementState),
      this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" &&
        (this.enforcementState = "OFF"),
      (this.allowedNonAlphanumericCharacters =
        ((r = e.allowedNonAlphanumericCharacters) == null
          ? void 0
          : r.join("")) ?? ""),
      (this.forceUpgradeOnSignin = e.forceUpgradeOnSignin ?? !1),
      (this.schemaVersion = e.schemaVersion));
  }
  validatePassword(e) {
    const n = { isValid: !0, passwordPolicy: this };
    return (
      this.validatePasswordLengthOptions(e, n),
      this.validatePasswordCharacterOptions(e, n),
      n.isValid && (n.isValid = n.meetsMinPasswordLength ?? !0),
      n.isValid && (n.isValid = n.meetsMaxPasswordLength ?? !0),
      n.isValid && (n.isValid = n.containsLowercaseLetter ?? !0),
      n.isValid && (n.isValid = n.containsUppercaseLetter ?? !0),
      n.isValid && (n.isValid = n.containsNumericCharacter ?? !0),
      n.isValid && (n.isValid = n.containsNonAlphanumericCharacter ?? !0),
      n
    );
  }
  validatePasswordLengthOptions(e, n) {
    const r = this.customStrengthOptions.minPasswordLength,
      i = this.customStrengthOptions.maxPasswordLength;
    (r && (n.meetsMinPasswordLength = e.length >= r),
      i && (n.meetsMaxPasswordLength = e.length <= i));
  }
  validatePasswordCharacterOptions(e, n) {
    this.updatePasswordCharacterOptionsStatuses(n, !1, !1, !1, !1);
    let r;
    for (let i = 0; i < e.length; i++)
      ((r = e.charAt(i)),
        this.updatePasswordCharacterOptionsStatuses(
          n,
          r >= "a" && r <= "z",
          r >= "A" && r <= "Z",
          r >= "0" && r <= "9",
          this.allowedNonAlphanumericCharacters.includes(r),
        ));
  }
  updatePasswordCharacterOptionsStatuses(e, n, r, i, s) {
    (this.customStrengthOptions.containsLowercaseLetter &&
      (e.containsLowercaseLetter || (e.containsLowercaseLetter = n)),
      this.customStrengthOptions.containsUppercaseLetter &&
        (e.containsUppercaseLetter || (e.containsUppercaseLetter = r)),
      this.customStrengthOptions.containsNumericCharacter &&
        (e.containsNumericCharacter || (e.containsNumericCharacter = i)),
      this.customStrengthOptions.containsNonAlphanumericCharacter &&
        (e.containsNonAlphanumericCharacter ||
          (e.containsNonAlphanumericCharacter = s)));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class F1 {
  constructor(e, n, r, i) {
    ((this.app = e),
      (this.heartbeatServiceProvider = n),
      (this.appCheckServiceProvider = r),
      (this.config = i),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new vg(this)),
      (this.idTokenSubscription = new vg(this)),
      (this.beforeStateQueue = new O1(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = oE),
      (this._agentRecaptchaConfig = null),
      (this._tenantRecaptchaConfigs = {}),
      (this._projectPasswordPolicy = null),
      (this._tenantPasswordPolicies = {}),
      (this._resolvePersistenceManagerAvailable = void 0),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = e.name),
      (this.clientVersion = i.sdkClientVersion),
      (this._persistenceManagerAvailable = new Promise(
        (s) => (this._resolvePersistenceManagerAvailable = s),
      )));
  }
  _initializeWithPersistence(e, n) {
    return (
      n && (this._popupRedirectResolver = fn(n)),
      (this._initializationPromise = this.queue(async () => {
        var r, i, s;
        if (
          !this._deleted &&
          ((this.persistenceManager = await xi.create(this, e)),
          (r = this._resolvePersistenceManagerAvailable) == null ||
            r.call(this),
          !this._deleted)
        ) {
          if (
            (i = this._popupRedirectResolver) != null &&
            i._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          (await this.initializeCurrentUser(n),
            (this.lastNotifiedUid =
              ((s = this.currentUser) == null ? void 0 : s.uid) || null),
            !this._deleted && (this._isInitialized = !0));
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const e = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !e)) {
      if (this.currentUser && e && this.currentUser.uid === e.uid) {
        (this._currentUser._assign(e), await this.currentUser.getIdToken());
        return;
      }
      await this._updateCurrentUser(e, !0);
    }
  }
  async initializeCurrentUserFromIdToken(e) {
    try {
      const n = await xl(this, { idToken: e }),
        r = await Ft._fromGetAccountInfoResponse(this, n, e);
      await this.directlySetCurrentUser(r);
    } catch (n) {
      (console.warn(
        "FirebaseServerApp could not login user with provided authIdToken: ",
        n,
      ),
        await this.directlySetCurrentUser(null));
    }
  }
  async initializeCurrentUser(e) {
    var s;
    if (yt(this.app)) {
      const o = this.app.settings.authIdToken;
      return o
        ? new Promise((l) => {
            setTimeout(() =>
              this.initializeCurrentUserFromIdToken(o).then(l, l),
            );
          })
        : this.directlySetCurrentUser(null);
    }
    const n = await this.assertedPersistence.getCurrentUser();
    let r = n,
      i = !1;
    if (e && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const o = (s = this.redirectUser) == null ? void 0 : s._redirectEventId,
        l = r == null ? void 0 : r._redirectEventId,
        u = await this.tryRedirectSignIn(e);
      (!o || o === l) && u != null && u.user && ((r = u.user), (i = !0));
    }
    if (!r) return this.directlySetCurrentUser(null);
    if (!r._redirectEventId) {
      if (i)
        try {
          await this.beforeStateQueue.runMiddleware(r);
        } catch (o) {
          ((r = n),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(o),
            ));
        }
      return r
        ? this.reloadAndSetCurrentUserOrClear(r)
        : this.directlySetCurrentUser(null);
    }
    return (
      q(this._popupRedirectResolver, this, "argument-error"),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === r._redirectEventId
        ? this.directlySetCurrentUser(r)
        : this.reloadAndSetCurrentUserOrClear(r)
    );
  }
  async tryRedirectSignIn(e) {
    let n = null;
    try {
      n = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return n;
  }
  async reloadAndSetCurrentUserOrClear(e) {
    try {
      await Dl(e);
    } catch (n) {
      if ((n == null ? void 0 : n.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = g1();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    if (yt(this.app)) return Promise.reject(mn(this));
    const n = e ? Le(e) : null;
    return (
      n &&
        q(
          n.auth.config.apiKey === this.config.apiKey,
          this,
          "invalid-user-token",
        ),
      this._updateCurrentUser(n && n._clone(this))
    );
  }
  async _updateCurrentUser(e, n = !1) {
    if (!this._deleted)
      return (
        e && q(this.tenantId === e.tenantId, this, "tenant-id-mismatch"),
        n || (await this.beforeStateQueue.runMiddleware(e)),
        this.queue(async () => {
          (await this.directlySetCurrentUser(e), this.notifyAuthListeners());
        })
      );
  }
  async signOut() {
    return yt(this.app)
      ? Promise.reject(mn(this))
      : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) &&
          (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0));
  }
  setPersistence(e) {
    return yt(this.app)
      ? Promise.reject(mn(this))
      : this.queue(async () => {
          await this.assertedPersistence.setPersistence(fn(e));
        });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null
      ? this._agentRecaptchaConfig
      : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(e) {
    this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
    const n = this._getPasswordPolicyInternal();
    return n.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
      ? Promise.reject(
          this._errorFactory.create(
            "unsupported-password-policy-schema-version",
            {},
          ),
        )
      : n.validatePassword(e);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null
      ? this._projectPasswordPolicy
      : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const e = await L1(this),
      n = new b1(e);
    this.tenantId === null
      ? (this._projectPasswordPolicy = n)
      : (this._tenantPasswordPolicies[this.tenantId] = n);
  }
  _getPersistenceType() {
    return this.assertedPersistence.persistence.type;
  }
  _getPersistence() {
    return this.assertedPersistence.persistence;
  }
  _updateErrorMap(e) {
    this._errorFactory = new jo("auth", "Firebase", e());
  }
  onAuthStateChanged(e, n, r) {
    return this.registerStateListener(this.authStateSubscription, e, n, r);
  }
  beforeAuthStateChanged(e, n) {
    return this.beforeStateQueue.pushCallback(e, n);
  }
  onIdTokenChanged(e, n, r) {
    return this.registerStateListener(this.idTokenSubscription, e, n, r);
  }
  authStateReady() {
    return new Promise((e, n) => {
      if (this.currentUser) e();
      else {
        const r = this.onAuthStateChanged(() => {
          (r(), e());
        }, n);
      }
    });
  }
  async revokeAccessToken(e) {
    if (this.currentUser) {
      const n = await this.currentUser.getIdToken(),
        r = {
          providerId: "apple.com",
          tokenType: "ACCESS_TOKEN",
          token: e,
          idToken: n,
        };
      (this.tenantId != null && (r.tenantId = this.tenantId),
        await x1(this, r));
    }
  }
  toJSON() {
    var e;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser: (e = this._currentUser) == null ? void 0 : e.toJSON(),
    };
  }
  async _setRedirectUser(e, n) {
    const r = await this.getOrInitRedirectPersistenceManager(n);
    return e === null ? r.removeCurrentUser() : r.setCurrentUser(e);
  }
  async getOrInitRedirectPersistenceManager(e) {
    if (!this.redirectPersistenceManager) {
      const n = (e && fn(e)) || this._popupRedirectResolver;
      (q(n, this, "argument-error"),
        (this.redirectPersistenceManager = await xi.create(
          this,
          [fn(n._redirectPersistence)],
          "redirectUser",
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser()));
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(e) {
    var n, r;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((n = this._currentUser) == null ? void 0 : n._redirectEventId) === e
        ? this._currentUser
        : ((r = this.redirectUser) == null ? void 0 : r._redirectEventId) === e
          ? this.redirectUser
          : null
    );
  }
  async _persistUserIfCurrent(e) {
    if (e === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(e));
  }
  _notifyListenersIfCurrent(e) {
    e === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    ((this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh());
  }
  _stopProactiveRefresh() {
    ((this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh());
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var n;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const e = ((n = this.currentUser) == null ? void 0 : n.uid) ?? null;
    this.lastNotifiedUid !== e &&
      ((this.lastNotifiedUid = e),
      this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(e, n, r, i) {
    if (this._deleted) return () => {};
    const s = typeof n == "function" ? n : n.next.bind(n);
    let o = !1;
    const l = this._isInitialized
      ? Promise.resolve()
      : this._initializationPromise;
    if (
      (q(l, this, "internal-error"),
      l.then(() => {
        o || s(this.currentUser);
      }),
      typeof n == "function")
    ) {
      const u = e.addObserver(n, r, i);
      return () => {
        ((o = !0), u());
      };
    } else {
      const u = e.addObserver(n);
      return () => {
        ((o = !0), u());
      };
    }
  }
  async directlySetCurrentUser(e) {
    (this.currentUser &&
      this.currentUser !== e &&
      this._currentUser._stopProactiveRefresh(),
      e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(),
      (this.currentUser = e),
      e
        ? await this.assertedPersistence.setCurrentUser(e)
        : await this.assertedPersistence.removeCurrentUser());
  }
  queue(e) {
    return ((this.operations = this.operations.then(e, e)), this.operations);
  }
  get assertedPersistence() {
    return (
      q(this.persistenceManager, this, "internal-error"),
      this.persistenceManager
    );
  }
  _logFramework(e) {
    !e ||
      this.frameworks.includes(e) ||
      (this.frameworks.push(e),
      this.frameworks.sort(),
      (this.clientVersion = EE(
        this.config.clientPlatform,
        this._getFrameworks(),
      )));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var i;
    const e = { "X-Client-Version": this.clientVersion };
    this.app.options.appId && (e["X-Firebase-gmpid"] = this.app.options.appId);
    const n = await ((i = this.heartbeatServiceProvider.getImmediate({
      optional: !0,
    })) == null
      ? void 0
      : i.getHeartbeatsHeader());
    n && (e["X-Firebase-Client"] = n);
    const r = await this._getAppCheckToken();
    return (r && (e["X-Firebase-AppCheck"] = r), e);
  }
  async _getAppCheckToken() {
    var n;
    if (yt(this.app) && this.app.settings.appCheckToken)
      return this.app.settings.appCheckToken;
    const e = await ((n = this.appCheckServiceProvider.getImmediate({
      optional: !0,
    })) == null
      ? void 0
      : n.getToken());
    return (
      e != null &&
        e.error &&
        d1(`Error while retrieving App Check token: ${e.error}`),
      e == null ? void 0 : e.token
    );
  }
}
function vr(t) {
  return Le(t);
}
class vg {
  constructor(e) {
    ((this.auth = e),
      (this.observer = null),
      (this.addObserver = eA((n) => (this.observer = n))));
  }
  get next() {
    return (
      q(this.observer, this.auth, "internal-error"),
      this.observer.next.bind(this.observer)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let uu = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: "",
};
function U1(t) {
  uu = t;
}
function wE(t) {
  return uu.loadJS(t);
}
function j1() {
  return uu.recaptchaEnterpriseScript;
}
function B1() {
  return uu.gapiScript;
}
function z1(t) {
  return `__${t}${Math.floor(Math.random() * 1e6)}`;
}
class $1 {
  constructor() {
    this.enterprise = new W1();
  }
  ready(e) {
    e();
  }
  execute(e, n) {
    return Promise.resolve("token");
  }
  render(e, n) {
    return "";
  }
}
class W1 {
  ready(e) {
    e();
  }
  execute(e, n) {
    return Promise.resolve("token");
  }
  render(e, n) {
    return "";
  }
}
const H1 = "recaptcha-enterprise",
  TE = "NO_RECAPTCHA";
class q1 {
  constructor(e) {
    ((this.type = H1), (this.auth = vr(e)));
  }
  async verify(e = "verify", n = !1) {
    async function r(s) {
      if (!n) {
        if (s.tenantId == null && s._agentRecaptchaConfig != null)
          return s._agentRecaptchaConfig.siteKey;
        if (
          s.tenantId != null &&
          s._tenantRecaptchaConfigs[s.tenantId] !== void 0
        )
          return s._tenantRecaptchaConfigs[s.tenantId].siteKey;
      }
      return new Promise(async (o, l) => {
        I1(s, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE",
        })
          .then((u) => {
            if (u.recaptchaKey === void 0)
              l(new Error("recaptcha Enterprise site key undefined"));
            else {
              const h = new T1(u);
              return (
                s.tenantId == null
                  ? (s._agentRecaptchaConfig = h)
                  : (s._tenantRecaptchaConfigs[s.tenantId] = h),
                o(h.siteKey)
              );
            }
          })
          .catch((u) => {
            l(u);
          });
      });
    }
    function i(s, o, l) {
      const u = window.grecaptcha;
      pg(u)
        ? u.enterprise.ready(() => {
            u.enterprise
              .execute(s, { action: e })
              .then((h) => {
                o(h);
              })
              .catch(() => {
                o(TE);
              });
          })
        : l(Error("No reCAPTCHA enterprise script loaded."));
    }
    return this.auth.settings.appVerificationDisabledForTesting
      ? new $1().execute("siteKey", { action: "verify" })
      : new Promise((s, o) => {
          r(this.auth)
            .then((l) => {
              if (!n && pg(window.grecaptcha)) i(l, s, o);
              else {
                if (typeof window > "u") {
                  o(
                    new Error("RecaptchaVerifier is only supported in browser"),
                  );
                  return;
                }
                let u = j1();
                (u.length !== 0 && (u += l),
                  wE(u)
                    .then(() => {
                      i(l, s, o);
                    })
                    .catch((h) => {
                      o(h);
                    }));
              }
            })
            .catch((l) => {
              o(l);
            });
        });
  }
}
async function Eg(t, e, n, r = !1, i = !1) {
  const s = new q1(t);
  let o;
  if (i) o = TE;
  else
    try {
      o = await s.verify(n);
    } catch {
      o = await s.verify(n, !0);
    }
  const l = { ...e };
  if (n === "mfaSmsEnrollment" || n === "mfaSmsSignIn") {
    if ("phoneEnrollmentInfo" in l) {
      const u = l.phoneEnrollmentInfo.phoneNumber,
        h = l.phoneEnrollmentInfo.recaptchaToken;
      Object.assign(l, {
        phoneEnrollmentInfo: {
          phoneNumber: u,
          recaptchaToken: h,
          captchaResponse: o,
          clientType: "CLIENT_TYPE_WEB",
          recaptchaVersion: "RECAPTCHA_ENTERPRISE",
        },
      });
    } else if ("phoneSignInInfo" in l) {
      const u = l.phoneSignInInfo.recaptchaToken;
      Object.assign(l, {
        phoneSignInInfo: {
          recaptchaToken: u,
          captchaResponse: o,
          clientType: "CLIENT_TYPE_WEB",
          recaptchaVersion: "RECAPTCHA_ENTERPRISE",
        },
      });
    }
    return l;
  }
  return (
    r
      ? Object.assign(l, { captchaResp: o })
      : Object.assign(l, { captchaResponse: o }),
    Object.assign(l, { clientType: "CLIENT_TYPE_WEB" }),
    Object.assign(l, { recaptchaVersion: "RECAPTCHA_ENTERPRISE" }),
    l
  );
}
async function bh(t, e, n, r, i) {
  var s;
  if (
    (s = t._getRecaptchaConfig()) != null &&
    s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")
  ) {
    const o = await Eg(t, e, n, n === "getOobCode");
    return r(t, o);
  } else
    return r(t, e).catch(async (o) => {
      if (o.code === "auth/missing-recaptcha-token") {
        console.log(
          `${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`,
        );
        const l = await Eg(t, e, n, n === "getOobCode");
        return r(t, l);
      } else return Promise.reject(o);
    });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function G1(t, e) {
  const n = Jd(t, "auth");
  if (n.isInitialized()) {
    const i = n.getImmediate(),
      s = n.getOptions();
    if (qr(s, e ?? {})) return i;
    Dt(i, "already-initialized");
  }
  return n.initialize({ options: e });
}
function K1(t, e) {
  const n = (e == null ? void 0 : e.persistence) || [],
    r = (Array.isArray(n) ? n : [n]).map(fn);
  (e != null && e.errorMap && t._updateErrorMap(e.errorMap),
    t._initializeWithPersistence(
      r,
      e == null ? void 0 : e.popupRedirectResolver,
    ));
}
function Q1(t, e, n) {
  const r = vr(t);
  q(/^https?:\/\//.test(e), r, "invalid-emulator-scheme");
  const i = !1,
    s = IE(e),
    { host: o, port: l } = Y1(e),
    u = l === null ? "" : `:${l}`,
    h = { url: `${s}//${o}${u}/` },
    f = Object.freeze({
      host: o,
      port: l,
      protocol: s.replace(":", ""),
      options: Object.freeze({ disableWarnings: i }),
    });
  if (!r._canInitEmulator) {
    (q(r.config.emulator && r.emulatorConfig, r, "emulator-config-failed"),
      q(
        qr(h, r.config.emulator) && qr(f, r.emulatorConfig),
        r,
        "emulator-config-failed",
      ));
    return;
  }
  ((r.config.emulator = h),
    (r.emulatorConfig = f),
    (r.settings.appVerificationDisabledForTesting = !0),
    es(o) ? (Jv(`${s}//${o}${u}`), Xv("Auth", !0)) : J1());
}
function IE(t) {
  const e = t.indexOf(":");
  return e < 0 ? "" : t.substr(0, e + 1);
}
function Y1(t) {
  const e = IE(t),
    n = /(\/\/)?([^?#/]+)/.exec(t.substr(e.length));
  if (!n) return { host: "", port: null };
  const r = n[2].split("@").pop() || "",
    i = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (i) {
    const s = i[1];
    return { host: s, port: wg(r.substr(s.length + 1)) };
  } else {
    const [s, o] = r.split(":");
    return { host: s, port: wg(o) };
  }
}
function wg(t) {
  if (!t) return null;
  const e = Number(t);
  return isNaN(e) ? null : e;
}
function J1() {
  function t() {
    const e = document.createElement("p"),
      n = e.style;
    ((e.innerText =
      "Running in emulator mode. Do not use with production credentials."),
      (n.position = "fixed"),
      (n.width = "100%"),
      (n.backgroundColor = "#ffffff"),
      (n.border = ".1em solid #000000"),
      (n.color = "#b50000"),
      (n.bottom = "0px"),
      (n.left = "0px"),
      (n.margin = "0px"),
      (n.zIndex = "10000"),
      (n.textAlign = "center"),
      e.classList.add("firebase-emulator-warning"),
      document.body.appendChild(e));
  }
  (typeof console < "u" &&
    typeof console.info == "function" &&
    console.info(
      "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.",
    ),
    typeof window < "u" &&
      typeof document < "u" &&
      (document.readyState === "loading"
        ? window.addEventListener("DOMContentLoaded", t)
        : t()));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rf {
  constructor(e, n) {
    ((this.providerId = e), (this.signInMethod = n));
  }
  toJSON() {
    return dn("not implemented");
  }
  _getIdTokenResponse(e) {
    return dn("not implemented");
  }
  _linkToIdToken(e, n) {
    return dn("not implemented");
  }
  _getReauthenticationResolver(e) {
    return dn("not implemented");
  }
}
async function X1(t, e) {
  return kn(t, "POST", "/v1/accounts:signUp", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Z1(t, e) {
  return $o(t, "POST", "/v1/accounts:signInWithPassword", _r(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function eC(t, e) {
  return $o(t, "POST", "/v1/accounts:signInWithEmailLink", _r(t, e));
}
async function tC(t, e) {
  return $o(t, "POST", "/v1/accounts:signInWithEmailLink", _r(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ao extends rf {
  constructor(e, n, r, i = null) {
    (super("password", r),
      (this._email = e),
      (this._password = n),
      (this._tenantId = i));
  }
  static _fromEmailAndPassword(e, n) {
    return new Ao(e, n, "password");
  }
  static _fromEmailAndCode(e, n, r = null) {
    return new Ao(e, n, "emailLink", r);
  }
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId,
    };
  }
  static fromJSON(e) {
    const n = typeof e == "string" ? JSON.parse(e) : e;
    if (n != null && n.email && n != null && n.password) {
      if (n.signInMethod === "password")
        return this._fromEmailAndPassword(n.email, n.password);
      if (n.signInMethod === "emailLink")
        return this._fromEmailAndCode(n.email, n.password, n.tenantId);
    }
    return null;
  }
  async _getIdTokenResponse(e) {
    switch (this.signInMethod) {
      case "password":
        const n = {
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB",
        };
        return bh(e, n, "signInWithPassword", Z1);
      case "emailLink":
        return eC(e, { email: this._email, oobCode: this._password });
      default:
        Dt(e, "internal-error");
    }
  }
  async _linkToIdToken(e, n) {
    switch (this.signInMethod) {
      case "password":
        const r = {
          idToken: n,
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB",
        };
        return bh(e, r, "signUpPassword", X1);
      case "emailLink":
        return tC(e, {
          idToken: n,
          email: this._email,
          oobCode: this._password,
        });
      default:
        Dt(e, "internal-error");
    }
  }
  _getReauthenticationResolver(e) {
    return this._getIdTokenResponse(e);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Di(t, e) {
  return $o(t, "POST", "/v1/accounts:signInWithIdp", _r(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const nC = "http://localhost";
class Kr extends rf {
  constructor() {
    (super(...arguments), (this.pendingToken = null));
  }
  static _fromParams(e) {
    const n = new Kr(e.providerId, e.signInMethod);
    return (
      e.idToken || e.accessToken
        ? (e.idToken && (n.idToken = e.idToken),
          e.accessToken && (n.accessToken = e.accessToken),
          e.nonce && !e.pendingToken && (n.nonce = e.nonce),
          e.pendingToken && (n.pendingToken = e.pendingToken))
        : e.oauthToken && e.oauthTokenSecret
          ? ((n.accessToken = e.oauthToken), (n.secret = e.oauthTokenSecret))
          : Dt("argument-error"),
      n
    );
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod,
    };
  }
  static fromJSON(e) {
    const n = typeof e == "string" ? JSON.parse(e) : e,
      { providerId: r, signInMethod: i, ...s } = n;
    if (!r || !i) return null;
    const o = new Kr(r, i);
    return (
      (o.idToken = s.idToken || void 0),
      (o.accessToken = s.accessToken || void 0),
      (o.secret = s.secret),
      (o.nonce = s.nonce),
      (o.pendingToken = s.pendingToken || null),
      o
    );
  }
  _getIdTokenResponse(e) {
    const n = this.buildRequest();
    return Di(e, n);
  }
  _linkToIdToken(e, n) {
    const r = this.buildRequest();
    return ((r.idToken = n), Di(e, r));
  }
  _getReauthenticationResolver(e) {
    const n = this.buildRequest();
    return ((n.autoCreate = !1), Di(e, n));
  }
  buildRequest() {
    const e = { requestUri: nC, returnSecureToken: !0 };
    if (this.pendingToken) e.pendingToken = this.pendingToken;
    else {
      const n = {};
      (this.idToken && (n.id_token = this.idToken),
        this.accessToken && (n.access_token = this.accessToken),
        this.secret && (n.oauth_token_secret = this.secret),
        (n.providerId = this.providerId),
        this.nonce && !this.pendingToken && (n.nonce = this.nonce),
        (e.postBody = Bo(n)));
    }
    return e;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rC(t) {
  switch (t) {
    case "recoverEmail":
      return "RECOVER_EMAIL";
    case "resetPassword":
      return "PASSWORD_RESET";
    case "signIn":
      return "EMAIL_SIGNIN";
    case "verifyEmail":
      return "VERIFY_EMAIL";
    case "verifyAndChangeEmail":
      return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition":
      return "REVERT_SECOND_FACTOR_ADDITION";
    default:
      return null;
  }
}
function iC(t) {
  const e = Us(js(t)).link,
    n = e ? Us(js(e)).deep_link_id : null,
    r = Us(js(t)).deep_link_id;
  return (r ? Us(js(r)).link : null) || r || n || e || t;
}
class sf {
  constructor(e) {
    const n = Us(js(e)),
      r = n.apiKey ?? null,
      i = n.oobCode ?? null,
      s = rC(n.mode ?? null);
    (q(r && i && s, "argument-error"),
      (this.apiKey = r),
      (this.operation = s),
      (this.code = i),
      (this.continueUrl = n.continueUrl ?? null),
      (this.languageCode = n.lang ?? null),
      (this.tenantId = n.tenantId ?? null));
  }
  static parseLink(e) {
    const n = iC(e);
    try {
      return new sf(n);
    } catch {
      return null;
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ns {
  constructor() {
    this.providerId = ns.PROVIDER_ID;
  }
  static credential(e, n) {
    return Ao._fromEmailAndPassword(e, n);
  }
  static credentialWithLink(e, n) {
    const r = sf.parseLink(n);
    return (
      q(r, "argument-error"),
      Ao._fromEmailAndCode(e, r.code, r.tenantId)
    );
  }
}
ns.PROVIDER_ID = "password";
ns.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
ns.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class of {
  constructor(e) {
    ((this.providerId = e),
      (this.defaultLanguageCode = null),
      (this.customParameters = {}));
  }
  setDefaultLanguage(e) {
    this.defaultLanguageCode = e;
  }
  setCustomParameters(e) {
    return ((this.customParameters = e), this);
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Wo extends of {
  constructor() {
    (super(...arguments), (this.scopes = []));
  }
  addScope(e) {
    return (this.scopes.includes(e) || this.scopes.push(e), this);
  }
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zn extends Wo {
  constructor() {
    super("facebook.com");
  }
  static credential(e) {
    return Kr._fromParams({
      providerId: zn.PROVIDER_ID,
      signInMethod: zn.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e,
    });
  }
  static credentialFromResult(e) {
    return zn.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return zn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
    try {
      return zn.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
zn.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
zn.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class un extends Wo {
  constructor() {
    (super("google.com"), this.addScope("profile"));
  }
  static credential(e, n) {
    return Kr._fromParams({
      providerId: un.PROVIDER_ID,
      signInMethod: un.GOOGLE_SIGN_IN_METHOD,
      idToken: e,
      accessToken: n,
    });
  }
  static credentialFromResult(e) {
    return un.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return un.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthIdToken: n, oauthAccessToken: r } = e;
    if (!n && !r) return null;
    try {
      return un.credential(n, r);
    } catch {
      return null;
    }
  }
}
un.GOOGLE_SIGN_IN_METHOD = "google.com";
un.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $n extends Wo {
  constructor() {
    super("github.com");
  }
  static credential(e) {
    return Kr._fromParams({
      providerId: $n.PROVIDER_ID,
      signInMethod: $n.GITHUB_SIGN_IN_METHOD,
      accessToken: e,
    });
  }
  static credentialFromResult(e) {
    return $n.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return $n.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
    try {
      return $n.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
$n.GITHUB_SIGN_IN_METHOD = "github.com";
$n.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Wn extends Wo {
  constructor() {
    super("twitter.com");
  }
  static credential(e, n) {
    return Kr._fromParams({
      providerId: Wn.PROVIDER_ID,
      signInMethod: Wn.TWITTER_SIGN_IN_METHOD,
      oauthToken: e,
      oauthTokenSecret: n,
    });
  }
  static credentialFromResult(e) {
    return Wn.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return Wn.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = e;
    if (!n || !r) return null;
    try {
      return Wn.credential(n, r);
    } catch {
      return null;
    }
  }
}
Wn.TWITTER_SIGN_IN_METHOD = "twitter.com";
Wn.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function sC(t, e) {
  return $o(t, "POST", "/v1/accounts:signUp", _r(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Qr {
  constructor(e) {
    ((this.user = e.user),
      (this.providerId = e.providerId),
      (this._tokenResponse = e._tokenResponse),
      (this.operationType = e.operationType));
  }
  static async _fromIdTokenResponse(e, n, r, i = !1) {
    const s = await Ft._fromIdTokenResponse(e, r, i),
      o = Tg(r);
    return new Qr({
      user: s,
      providerId: o,
      _tokenResponse: r,
      operationType: n,
    });
  }
  static async _forOperation(e, n, r) {
    await e._updateTokensIfNecessary(r, !0);
    const i = Tg(r);
    return new Qr({
      user: e,
      providerId: i,
      _tokenResponse: r,
      operationType: n,
    });
  }
}
function Tg(t) {
  return t.providerId ? t.providerId : "phoneNumber" in t ? "phone" : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Vl extends Rn {
  constructor(e, n, r, i) {
    (super(n.code, n.message),
      (this.operationType = r),
      (this.user = i),
      Object.setPrototypeOf(this, Vl.prototype),
      (this.customData = {
        appName: e.name,
        tenantId: e.tenantId ?? void 0,
        _serverResponse: n.customData._serverResponse,
        operationType: r,
      }));
  }
  static _fromErrorAndOperation(e, n, r, i) {
    return new Vl(e, n, r, i);
  }
}
function SE(t, e, n, r) {
  return (
    e === "reauthenticate"
      ? n._getReauthenticationResolver(t)
      : n._getIdTokenResponse(t)
  ).catch((s) => {
    throw s.code === "auth/multi-factor-auth-required"
      ? Vl._fromErrorAndOperation(t, s, e, r)
      : s;
  });
}
async function oC(t, e, n = !1) {
  const r = await Wi(t, e._linkToIdToken(t.auth, await t.getIdToken()), n);
  return Qr._forOperation(t, "link", r);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aC(t, e, n = !1) {
  const { auth: r } = t;
  if (yt(r.app)) return Promise.reject(mn(r));
  const i = "reauthenticate";
  try {
    const s = await Wi(t, SE(r, i, e, t), n);
    q(s.idToken, r, "internal-error");
    const o = tf(s.idToken);
    q(o, r, "internal-error");
    const { sub: l } = o;
    return (q(t.uid === l, r, "user-mismatch"), Qr._forOperation(t, i, s));
  } catch (s) {
    throw (
      (s == null ? void 0 : s.code) === "auth/user-not-found" &&
        Dt(r, "user-mismatch"),
      s
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function AE(t, e, n = !1) {
  if (yt(t.app)) return Promise.reject(mn(t));
  const r = "signIn",
    i = await SE(t, r, e),
    s = await Qr._fromIdTokenResponse(t, r, i);
  return (n || (await t._updateCurrentUser(s.user)), s);
}
async function lC(t, e) {
  return AE(vr(t), e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function CE(t) {
  const e = vr(t);
  e._getPasswordPolicyInternal() && (await e._updatePasswordPolicy());
}
async function uC(t, e, n) {
  if (yt(t.app)) return Promise.reject(mn(t));
  const r = vr(t),
    o = await bh(
      r,
      {
        returnSecureToken: !0,
        email: e,
        password: n,
        clientType: "CLIENT_TYPE_WEB",
      },
      "signUpPassword",
      sC,
    ).catch((u) => {
      throw (u.code === "auth/password-does-not-meet-requirements" && CE(t), u);
    }),
    l = await Qr._fromIdTokenResponse(r, "signIn", o);
  return (await r._updateCurrentUser(l.user), l);
}
function cC(t, e, n) {
  return yt(t.app)
    ? Promise.reject(mn(t))
    : lC(Le(t), ns.credential(e, n)).catch(async (r) => {
        throw (
          r.code === "auth/password-does-not-meet-requirements" && CE(t),
          r
        );
      });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function hC(t, e) {
  return kn(t, "POST", "/v1/accounts:update", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function dC(t, { displayName: e, photoURL: n }) {
  if (e === void 0 && n === void 0) return;
  const r = Le(t),
    s = {
      idToken: await r.getIdToken(),
      displayName: e,
      photoUrl: n,
      returnSecureToken: !0,
    },
    o = await Wi(r, hC(r.auth, s));
  ((r.displayName = o.displayName || null), (r.photoURL = o.photoUrl || null));
  const l = r.providerData.find(({ providerId: u }) => u === "password");
  (l && ((l.displayName = r.displayName), (l.photoURL = r.photoURL)),
    await r._updateTokensIfNecessary(o));
}
function fC(t, e, n, r) {
  return Le(t).onIdTokenChanged(e, n, r);
}
function pC(t, e, n) {
  return Le(t).beforeAuthStateChanged(e, n);
}
function mC(t, e, n, r) {
  return Le(t).onAuthStateChanged(e, n, r);
}
function gC(t) {
  return Le(t).signOut();
}
const Ol = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class RE {
  constructor(e, n) {
    ((this.storageRetriever = e), (this.type = n));
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(Ol, "1"),
          this.storage.removeItem(Ol),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(e, n) {
    return (this.storage.setItem(e, JSON.stringify(n)), Promise.resolve());
  }
  _get(e) {
    const n = this.storage.getItem(e);
    return Promise.resolve(n ? JSON.parse(n) : null);
  }
  _remove(e) {
    return (this.storage.removeItem(e), Promise.resolve());
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const yC = 1e3,
  _C = 10;
class kE extends RE {
  constructor() {
    (super(() => window.localStorage, "LOCAL"),
      (this.boundEventHandler = (e, n) => this.onStorageEvent(e, n)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.fallbackToPolling = vE()),
      (this._shouldAllowMigration = !0));
  }
  forAllChangedKeys(e) {
    for (const n of Object.keys(this.listeners)) {
      const r = this.storage.getItem(n),
        i = this.localCache[n];
      r !== i && e(n, i, r);
    }
  }
  onStorageEvent(e, n = !1) {
    if (!e.key) {
      this.forAllChangedKeys((o, l, u) => {
        this.notifyListeners(o, u);
      });
      return;
    }
    const r = e.key;
    n ? this.detachListener() : this.stopPolling();
    const i = () => {
        const o = this.storage.getItem(r);
        (!n && this.localCache[r] === o) || this.notifyListeners(r, o);
      },
      s = this.storage.getItem(r);
    V1() && s !== e.newValue && e.newValue !== e.oldValue
      ? setTimeout(i, _C)
      : i();
  }
  notifyListeners(e, n) {
    this.localCache[e] = n;
    const r = this.listeners[e];
    if (r) for (const i of Array.from(r)) i(n && JSON.parse(n));
  }
  startPolling() {
    (this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((e, n, r) => {
          this.onStorageEvent(
            new StorageEvent("storage", { key: e, oldValue: n, newValue: r }),
            !0,
          );
        });
      }, yC)));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(e, n) {
    (Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[e] ||
        ((this.listeners[e] = new Set()),
        (this.localCache[e] = this.storage.getItem(e))),
      this.listeners[e].add(n));
  }
  _removeListener(e, n) {
    (this.listeners[e] &&
      (this.listeners[e].delete(n),
      this.listeners[e].size === 0 && delete this.listeners[e]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling()));
  }
  async _set(e, n) {
    (await super._set(e, n), (this.localCache[e] = JSON.stringify(n)));
  }
  async _get(e) {
    const n = await super._get(e);
    return ((this.localCache[e] = JSON.stringify(n)), n);
  }
  async _remove(e) {
    (await super._remove(e), delete this.localCache[e]);
  }
}
kE.type = "LOCAL";
const vC = kE;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class PE extends RE {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(e, n) {}
  _removeListener(e, n) {}
}
PE.type = "SESSION";
const NE = PE;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function EC(t) {
  return Promise.all(
    t.map(async (e) => {
      try {
        return { fulfilled: !0, value: await e };
      } catch (n) {
        return { fulfilled: !1, reason: n };
      }
    }),
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cu {
  constructor(e) {
    ((this.eventTarget = e),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this)));
  }
  static _getInstance(e) {
    const n = this.receivers.find((i) => i.isListeningto(e));
    if (n) return n;
    const r = new cu(e);
    return (this.receivers.push(r), r);
  }
  isListeningto(e) {
    return this.eventTarget === e;
  }
  async handleEvent(e) {
    const n = e,
      { eventId: r, eventType: i, data: s } = n.data,
      o = this.handlersMap[i];
    if (!(o != null && o.size)) return;
    n.ports[0].postMessage({ status: "ack", eventId: r, eventType: i });
    const l = Array.from(o).map(async (h) => h(n.origin, s)),
      u = await EC(l);
    n.ports[0].postMessage({
      status: "done",
      eventId: r,
      eventType: i,
      response: u,
    });
  }
  _subscribe(e, n) {
    (Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener("message", this.boundEventHandler),
      this.handlersMap[e] || (this.handlersMap[e] = new Set()),
      this.handlersMap[e].add(n));
  }
  _unsubscribe(e, n) {
    (this.handlersMap[e] && n && this.handlersMap[e].delete(n),
      (!n || this.handlersMap[e].size === 0) && delete this.handlersMap[e],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener(
          "message",
          this.boundEventHandler,
        ));
  }
}
cu.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function af(t = "", e = 10) {
  let n = "";
  for (let r = 0; r < e; r++) n += Math.floor(Math.random() * 10);
  return t + n;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wC {
  constructor(e) {
    ((this.target = e), (this.handlers = new Set()));
  }
  removeMessageHandler(e) {
    (e.messageChannel &&
      (e.messageChannel.port1.removeEventListener("message", e.onMessage),
      e.messageChannel.port1.close()),
      this.handlers.delete(e));
  }
  async _send(e, n, r = 50) {
    const i = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!i) throw new Error("connection_unavailable");
    let s, o;
    return new Promise((l, u) => {
      const h = af("", 20);
      i.port1.start();
      const f = setTimeout(() => {
        u(new Error("unsupported_event"));
      }, r);
      ((o = {
        messageChannel: i,
        onMessage(p) {
          const m = p;
          if (m.data.eventId === h)
            switch (m.data.status) {
              case "ack":
                (clearTimeout(f),
                  (s = setTimeout(() => {
                    u(new Error("timeout"));
                  }, 3e3)));
                break;
              case "done":
                (clearTimeout(s), l(m.data.response));
                break;
              default:
                (clearTimeout(f),
                  clearTimeout(s),
                  u(new Error("invalid_response")));
                break;
            }
        },
      }),
        this.handlers.add(o),
        i.port1.addEventListener("message", o.onMessage),
        this.target.postMessage({ eventType: e, eventId: h, data: n }, [
          i.port2,
        ]));
    }).finally(() => {
      o && this.removeMessageHandler(o);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Zt() {
  return window;
}
function TC(t) {
  Zt().location.href = t;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function xE() {
  return (
    typeof Zt().WorkerGlobalScope < "u" &&
    typeof Zt().importScripts == "function"
  );
}
async function IC() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function SC() {
  var t;
  return (
    ((t = navigator == null ? void 0 : navigator.serviceWorker) == null
      ? void 0
      : t.controller) || null
  );
}
function AC() {
  return xE() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const DE = "firebaseLocalStorageDb",
  CC = 1,
  Ll = "firebaseLocalStorage",
  VE = "fbase_key";
class Ho {
  constructor(e) {
    this.request = e;
  }
  toPromise() {
    return new Promise((e, n) => {
      (this.request.addEventListener("success", () => {
        e(this.request.result);
      }),
        this.request.addEventListener("error", () => {
          n(this.request.error);
        }));
    });
  }
}
function hu(t, e) {
  return t.transaction([Ll], e ? "readwrite" : "readonly").objectStore(Ll);
}
function RC() {
  const t = indexedDB.deleteDatabase(DE);
  return new Ho(t).toPromise();
}
function Fh() {
  const t = indexedDB.open(DE, CC);
  return new Promise((e, n) => {
    (t.addEventListener("error", () => {
      n(t.error);
    }),
      t.addEventListener("upgradeneeded", () => {
        const r = t.result;
        try {
          r.createObjectStore(Ll, { keyPath: VE });
        } catch (i) {
          n(i);
        }
      }),
      t.addEventListener("success", async () => {
        const r = t.result;
        r.objectStoreNames.contains(Ll)
          ? e(r)
          : (r.close(), await RC(), e(await Fh()));
      }));
  });
}
async function Ig(t, e, n) {
  const r = hu(t, !0).put({ [VE]: e, value: n });
  return new Ho(r).toPromise();
}
async function kC(t, e) {
  const n = hu(t, !1).get(e),
    r = await new Ho(n).toPromise();
  return r === void 0 ? null : r.value;
}
function Sg(t, e) {
  const n = hu(t, !0).delete(e);
  return new Ho(n).toPromise();
}
const PC = 800,
  NC = 3;
class OE {
  constructor() {
    ((this.type = "LOCAL"),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise =
        this.initializeServiceWorkerMessaging().then(
          () => {},
          () => {},
        )));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await Fh()), this.db);
  }
  async _withRetries(e) {
    let n = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await e(r);
      } catch (r) {
        if (n++ > NC) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return xE() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    ((this.receiver = cu._getInstance(AC())),
      this.receiver._subscribe("keyChanged", async (e, n) => ({
        keyProcessed: (await this._poll()).includes(n.key),
      })),
      this.receiver._subscribe("ping", async (e, n) => ["keyChanged"]));
  }
  async initializeSender() {
    var n, r;
    if (((this.activeServiceWorker = await IC()), !this.activeServiceWorker))
      return;
    this.sender = new wC(this.activeServiceWorker);
    const e = await this.sender._send("ping", {}, 800);
    e &&
      (n = e[0]) != null &&
      n.fulfilled &&
      (r = e[0]) != null &&
      r.value.includes("keyChanged") &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(e) {
    if (
      !(
        !this.sender ||
        !this.activeServiceWorker ||
        SC() !== this.activeServiceWorker
      )
    )
      try {
        await this.sender._send(
          "keyChanged",
          { key: e },
          this.serviceWorkerReceiverAvailable ? 800 : 50,
        );
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const e = await Fh();
      return (await Ig(e, Ol, "1"), await Sg(e, Ol), !0);
    } catch {}
    return !1;
  }
  async _withPendingWrite(e) {
    this.pendingWrites++;
    try {
      await e();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(e, n) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((r) => Ig(r, e, n)),
        (this.localCache[e] = n),
        this.notifyServiceWorker(e)
      ),
    );
  }
  async _get(e) {
    const n = await this._withRetries((r) => kC(r, e));
    return ((this.localCache[e] = n), n);
  }
  async _remove(e) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((n) => Sg(n, e)),
        delete this.localCache[e],
        this.notifyServiceWorker(e)
      ),
    );
  }
  async _poll() {
    const e = await this._withRetries((i) => {
      const s = hu(i, !1).getAll();
      return new Ho(s).toPromise();
    });
    if (!e) return [];
    if (this.pendingWrites !== 0) return [];
    const n = [],
      r = new Set();
    if (e.length !== 0)
      for (const { fbase_key: i, value: s } of e)
        (r.add(i),
          JSON.stringify(this.localCache[i]) !== JSON.stringify(s) &&
            (this.notifyListeners(i, s), n.push(i)));
    for (const i of Object.keys(this.localCache))
      this.localCache[i] &&
        !r.has(i) &&
        (this.notifyListeners(i, null), n.push(i));
    return n;
  }
  notifyListeners(e, n) {
    this.localCache[e] = n;
    const r = this.listeners[e];
    if (r) for (const i of Array.from(r)) i(n);
  }
  startPolling() {
    (this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), PC)));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(e, n) {
    (Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[e] || ((this.listeners[e] = new Set()), this._get(e)),
      this.listeners[e].add(n));
  }
  _removeListener(e, n) {
    (this.listeners[e] &&
      (this.listeners[e].delete(n),
      this.listeners[e].size === 0 && delete this.listeners[e]),
      Object.keys(this.listeners).length === 0 && this.stopPolling());
  }
}
OE.type = "LOCAL";
const xC = OE;
new zo(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function LE(t, e) {
  return e
    ? fn(e)
    : (q(t._popupRedirectResolver, t, "argument-error"),
      t._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lf extends rf {
  constructor(e) {
    (super("custom", "custom"), (this.params = e));
  }
  _getIdTokenResponse(e) {
    return Di(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, n) {
    return Di(e, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(e) {
    return Di(e, this._buildIdpRequest());
  }
  _buildIdpRequest(e) {
    const n = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return (e && (n.idToken = e), n);
  }
}
function DC(t) {
  return AE(t.auth, new lf(t), t.bypassAuthState);
}
function VC(t) {
  const { auth: e, user: n } = t;
  return (q(n, e, "internal-error"), aC(n, new lf(t), t.bypassAuthState));
}
async function OC(t) {
  const { auth: e, user: n } = t;
  return (q(n, e, "internal-error"), oC(n, new lf(t), t.bypassAuthState));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ME {
  constructor(e, n, r, i, s = !1) {
    ((this.auth = e),
      (this.resolver = r),
      (this.user = i),
      (this.bypassAuthState = s),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(n) ? n : [n]));
  }
  execute() {
    return new Promise(async (e, n) => {
      this.pendingPromise = { resolve: e, reject: n };
      try {
        ((this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this));
      } catch (r) {
        this.reject(r);
      }
    });
  }
  async onAuthEvent(e) {
    const {
      urlResponse: n,
      sessionId: r,
      postBody: i,
      tenantId: s,
      error: o,
      type: l,
    } = e;
    if (o) {
      this.reject(o);
      return;
    }
    const u = {
      auth: this.auth,
      requestUri: n,
      sessionId: r,
      tenantId: s || void 0,
      postBody: i || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(l)(u));
    } catch (h) {
      this.reject(h);
    }
  }
  onError(e) {
    this.reject(e);
  }
  getIdpTask(e) {
    switch (e) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return DC;
      case "linkViaPopup":
      case "linkViaRedirect":
        return OC;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return VC;
      default:
        Dt(this.auth, "internal-error");
    }
  }
  resolve(e) {
    (Tn(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.resolve(e),
      this.unregisterAndCleanUp());
  }
  reject(e) {
    (Tn(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.reject(e),
      this.unregisterAndCleanUp());
  }
  unregisterAndCleanUp() {
    (this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp());
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const LC = new zo(2e3, 1e4);
async function MC(t, e, n) {
  if (yt(t.app))
    return Promise.reject(Bt(t, "operation-not-supported-in-this-environment"));
  const r = vr(t);
  f1(t, e, of);
  const i = LE(r, n);
  return new Mr(r, "signInViaPopup", e, i).executeNotNull();
}
class Mr extends ME {
  constructor(e, n, r, i, s) {
    (super(e, n, i, s),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      Mr.currentPopupAction && Mr.currentPopupAction.cancel(),
      (Mr.currentPopupAction = this));
  }
  async executeNotNull() {
    const e = await this.execute();
    return (q(e, this.auth, "internal-error"), e);
  }
  async onExecution() {
    Tn(this.filter.length === 1, "Popup operations only handle one event");
    const e = af();
    ((this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      e,
    )),
      (this.authWindow.associatedEvent = e),
      this.resolver._originValidation(this.auth).catch((n) => {
        this.reject(n);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
        n || this.reject(Bt(this.auth, "web-storage-unsupported"));
      }),
      this.pollUserCancellation());
  }
  get eventId() {
    var e;
    return ((e = this.authWindow) == null ? void 0 : e.associatedEvent) || null;
  }
  cancel() {
    this.reject(Bt(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    (this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (Mr.currentPopupAction = null));
  }
  pollUserCancellation() {
    const e = () => {
      var n, r;
      if (
        (r = (n = this.authWindow) == null ? void 0 : n.window) != null &&
        r.closed
      ) {
        this.pollId = window.setTimeout(() => {
          ((this.pollId = null),
            this.reject(Bt(this.auth, "popup-closed-by-user")));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(e, LC.get());
    };
    e();
  }
}
Mr.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const bC = "pendingRedirect",
  Ya = new Map();
class FC extends ME {
  constructor(e, n, r = !1) {
    (super(
      e,
      ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"],
      n,
      void 0,
      r,
    ),
      (this.eventId = null));
  }
  async execute() {
    let e = Ya.get(this.auth._key());
    if (!e) {
      try {
        const r = (await UC(this.resolver, this.auth))
          ? await super.execute()
          : null;
        e = () => Promise.resolve(r);
      } catch (n) {
        e = () => Promise.reject(n);
      }
      Ya.set(this.auth._key(), e);
    }
    return (
      this.bypassAuthState ||
        Ya.set(this.auth._key(), () => Promise.resolve(null)),
      e()
    );
  }
  async onAuthEvent(e) {
    if (e.type === "signInViaRedirect") return super.onAuthEvent(e);
    if (e.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (e.eventId) {
      const n = await this.auth._redirectUserForId(e.eventId);
      if (n) return ((this.user = n), super.onAuthEvent(e));
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function UC(t, e) {
  const n = zC(e),
    r = BC(t);
  if (!(await r._isAvailable())) return !1;
  const i = (await r._get(n)) === "true";
  return (await r._remove(n), i);
}
function jC(t, e) {
  Ya.set(t._key(), e);
}
function BC(t) {
  return fn(t._redirectPersistence);
}
function zC(t) {
  return Qa(bC, t.config.apiKey, t.name);
}
async function $C(t, e, n = !1) {
  if (yt(t.app)) return Promise.reject(mn(t));
  const r = vr(t),
    i = LE(r, e),
    o = await new FC(r, i, n).execute();
  return (
    o &&
      !n &&
      (delete o.user._redirectEventId,
      await r._persistUserIfCurrent(o.user),
      await r._setRedirectUser(null, e)),
    o
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const WC = 10 * 60 * 1e3;
class HC {
  constructor(e) {
    ((this.auth = e),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now()));
  }
  registerConsumer(e) {
    (this.consumers.add(e),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, e) &&
        (this.sendToConsumer(this.queuedRedirectEvent, e),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null)));
  }
  unregisterConsumer(e) {
    this.consumers.delete(e);
  }
  onEvent(e) {
    if (this.hasEventBeenHandled(e)) return !1;
    let n = !1;
    return (
      this.consumers.forEach((r) => {
        this.isEventForConsumer(e, r) &&
          ((n = !0), this.sendToConsumer(e, r), this.saveEventToCache(e));
      }),
      this.hasHandledPotentialRedirect ||
        !qC(e) ||
        ((this.hasHandledPotentialRedirect = !0),
        n || ((this.queuedRedirectEvent = e), (n = !0))),
      n
    );
  }
  sendToConsumer(e, n) {
    var r;
    if (e.error && !bE(e)) {
      const i =
        ((r = e.error.code) == null ? void 0 : r.split("auth/")[1]) ||
        "internal-error";
      n.onError(Bt(this.auth, i));
    } else n.onAuthEvent(e);
  }
  isEventForConsumer(e, n) {
    const r = n.eventId === null || (!!e.eventId && e.eventId === n.eventId);
    return n.filter.includes(e.type) && r;
  }
  hasEventBeenHandled(e) {
    return (
      Date.now() - this.lastProcessedEventTime >= WC &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(Ag(e))
    );
  }
  saveEventToCache(e) {
    (this.cachedEventUids.add(Ag(e)),
      (this.lastProcessedEventTime = Date.now()));
  }
}
function Ag(t) {
  return [t.type, t.eventId, t.sessionId, t.tenantId]
    .filter((e) => e)
    .join("-");
}
function bE({ type: t, error: e }) {
  return (
    t === "unknown" && (e == null ? void 0 : e.code) === "auth/no-auth-event"
  );
}
function qC(t) {
  switch (t.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return bE(t);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function GC(t, e = {}) {
  return kn(t, "GET", "/v1/projects", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const KC = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  QC = /^https?/;
async function YC(t) {
  if (t.config.emulator) return;
  const { authorizedDomains: e } = await GC(t);
  for (const n of e)
    try {
      if (JC(n)) return;
    } catch {}
  Dt(t, "unauthorized-domain");
}
function JC(t) {
  const e = Lh(),
    { protocol: n, hostname: r } = new URL(e);
  if (t.startsWith("chrome-extension://")) {
    const o = new URL(t);
    return o.hostname === "" && r === ""
      ? n === "chrome-extension:" &&
          t.replace("chrome-extension://", "") ===
            e.replace("chrome-extension://", "")
      : n === "chrome-extension:" && o.hostname === r;
  }
  if (!QC.test(n)) return !1;
  if (KC.test(t)) return r === t;
  const i = t.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const XC = new zo(3e4, 6e4);
function Cg() {
  const t = Zt().___jsl;
  if (t != null && t.H) {
    for (const e of Object.keys(t.H))
      if (
        ((t.H[e].r = t.H[e].r || []),
        (t.H[e].L = t.H[e].L || []),
        (t.H[e].r = [...t.H[e].L]),
        t.CP)
      )
        for (let n = 0; n < t.CP.length; n++) t.CP[n] = null;
  }
}
function ZC(t) {
  return new Promise((e, n) => {
    var i, s, o;
    function r() {
      (Cg(),
        gapi.load("gapi.iframes", {
          callback: () => {
            e(gapi.iframes.getContext());
          },
          ontimeout: () => {
            (Cg(), n(Bt(t, "network-request-failed")));
          },
          timeout: XC.get(),
        }));
    }
    if ((s = (i = Zt().gapi) == null ? void 0 : i.iframes) != null && s.Iframe)
      e(gapi.iframes.getContext());
    else if ((o = Zt().gapi) != null && o.load) r();
    else {
      const l = z1("iframefcb");
      return (
        (Zt()[l] = () => {
          gapi.load ? r() : n(Bt(t, "network-request-failed"));
        }),
        wE(`${B1()}?onload=${l}`).catch((u) => n(u))
      );
    }
  }).catch((e) => {
    throw ((Ja = null), e);
  });
}
let Ja = null;
function eR(t) {
  return ((Ja = Ja || ZC(t)), Ja);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const tR = new zo(5e3, 15e3),
  nR = "__/auth/iframe",
  rR = "emulator/auth/iframe",
  iR = {
    style: { position: "absolute", top: "-100px", width: "1px", height: "1px" },
    "aria-hidden": "true",
    tabindex: "-1",
  },
  sR = new Map([
    ["identitytoolkit.googleapis.com", "p"],
    ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
    ["test-identitytoolkit.sandbox.googleapis.com", "t"],
  ]);
function oR(t) {
  const e = t.config;
  q(e.authDomain, t, "auth-domain-config-required");
  const n = e.emulator ? ef(e, rR) : `https://${t.config.authDomain}/${nR}`,
    r = { apiKey: e.apiKey, appName: t.name, v: ts },
    i = sR.get(t.config.apiHost);
  i && (r.eid = i);
  const s = t._getFrameworks();
  return (s.length && (r.fw = s.join(",")), `${n}?${Bo(r).slice(1)}`);
}
async function aR(t) {
  const e = await eR(t),
    n = Zt().gapi;
  return (
    q(n, t, "internal-error"),
    e.open(
      {
        where: document.body,
        url: oR(t),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: iR,
        dontclear: !0,
      },
      (r) =>
        new Promise(async (i, s) => {
          await r.restyle({ setHideOnLeave: !1 });
          const o = Bt(t, "network-request-failed"),
            l = Zt().setTimeout(() => {
              s(o);
            }, tR.get());
          function u() {
            (Zt().clearTimeout(l), i(r));
          }
          r.ping(u).then(u, () => {
            s(o);
          });
        }),
    )
  );
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const lR = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no",
  },
  uR = 500,
  cR = 600,
  hR = "_blank",
  dR = "http://localhost";
class Rg {
  constructor(e) {
    ((this.window = e), (this.associatedEvent = null));
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function fR(t, e, n, r = uR, i = cR) {
  const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
    o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let l = "";
  const u = {
      ...lR,
      width: r.toString(),
      height: i.toString(),
      top: s,
      left: o,
    },
    h = tt().toLowerCase();
  (n && (l = pE(h) ? hR : n), dE(h) && ((e = e || dR), (u.scrollbars = "yes")));
  const f = Object.entries(u).reduce((m, [I, N]) => `${m}${I}=${N},`, "");
  if (D1(h) && l !== "_self") return (pR(e || "", l), new Rg(null));
  const p = window.open(e || "", l, f);
  q(p, t, "popup-blocked");
  try {
    p.focus();
  } catch {}
  return new Rg(p);
}
function pR(t, e) {
  const n = document.createElement("a");
  ((n.href = t), (n.target = e));
  const r = document.createEvent("MouseEvent");
  (r.initMouseEvent(
    "click",
    !0,
    !0,
    window,
    1,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    1,
    null,
  ),
    n.dispatchEvent(r));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const mR = "__/auth/handler",
  gR = "emulator/auth/handler",
  yR = encodeURIComponent("fac");
async function kg(t, e, n, r, i, s) {
  (q(t.config.authDomain, t, "auth-domain-config-required"),
    q(t.config.apiKey, t, "invalid-api-key"));
  const o = {
    apiKey: t.config.apiKey,
    appName: t.name,
    authType: n,
    redirectUrl: r,
    v: ts,
    eventId: i,
  };
  if (e instanceof of) {
    (e.setDefaultLanguage(t.languageCode),
      (o.providerId = e.providerId || ""),
      ZS(e.getCustomParameters()) ||
        (o.customParameters = JSON.stringify(e.getCustomParameters())));
    for (const [f, p] of Object.entries({})) o[f] = p;
  }
  if (e instanceof Wo) {
    const f = e.getScopes().filter((p) => p !== "");
    f.length > 0 && (o.scopes = f.join(","));
  }
  t.tenantId && (o.tid = t.tenantId);
  const l = o;
  for (const f of Object.keys(l)) l[f] === void 0 && delete l[f];
  const u = await t._getAppCheckToken(),
    h = u ? `#${yR}=${encodeURIComponent(u)}` : "";
  return `${_R(t)}?${Bo(l).slice(1)}${h}`;
}
function _R({ config: t }) {
  return t.emulator ? ef(t, gR) : `https://${t.authDomain}/${mR}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Rc = "webStorageSupport";
class vR {
  constructor() {
    ((this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = NE),
      (this._completeRedirectFn = $C),
      (this._overrideRedirectResult = jC));
  }
  async _openPopup(e, n, r, i) {
    var o;
    Tn(
      (o = this.eventManagers[e._key()]) == null ? void 0 : o.manager,
      "_initialize() not called before _openPopup()",
    );
    const s = await kg(e, n, r, Lh(), i);
    return fR(e, s, af());
  }
  async _openRedirect(e, n, r, i) {
    await this._originValidation(e);
    const s = await kg(e, n, r, Lh(), i);
    return (TC(s), new Promise(() => {}));
  }
  _initialize(e) {
    const n = e._key();
    if (this.eventManagers[n]) {
      const { manager: i, promise: s } = this.eventManagers[n];
      return i
        ? Promise.resolve(i)
        : (Tn(s, "If manager is not set, promise should be"), s);
    }
    const r = this.initAndGetManager(e);
    return (
      (this.eventManagers[n] = { promise: r }),
      r.catch(() => {
        delete this.eventManagers[n];
      }),
      r
    );
  }
  async initAndGetManager(e) {
    const n = await aR(e),
      r = new HC(e);
    return (
      n.register(
        "authEvent",
        (i) => (
          q(i == null ? void 0 : i.authEvent, e, "invalid-auth-event"),
          { status: r.onEvent(i.authEvent) ? "ACK" : "ERROR" }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
      ),
      (this.eventManagers[e._key()] = { manager: r }),
      (this.iframes[e._key()] = n),
      r
    );
  }
  _isIframeWebStorageSupported(e, n) {
    this.iframes[e._key()].send(
      Rc,
      { type: Rc },
      (i) => {
        var o;
        const s = (o = i == null ? void 0 : i[0]) == null ? void 0 : o[Rc];
        (s !== void 0 && n(!!s), Dt(e, "internal-error"));
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    );
  }
  _originValidation(e) {
    const n = e._key();
    return (
      this.originValidationPromises[n] ||
        (this.originValidationPromises[n] = YC(e)),
      this.originValidationPromises[n]
    );
  }
  get _shouldInitProactively() {
    return vE() || fE() || nf();
  }
}
const ER = vR;
var Pg = "@firebase/auth",
  Ng = "1.12.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wR {
  constructor(e) {
    ((this.auth = e), (this.internalListeners = new Map()));
  }
  getUid() {
    var e;
    return (
      this.assertAuthConfigured(),
      ((e = this.auth.currentUser) == null ? void 0 : e.uid) || null
    );
  }
  async getToken(e) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser
        ? { accessToken: await this.auth.currentUser.getIdToken(e) }
        : null
    );
  }
  addAuthTokenListener(e) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(e))) return;
    const n = this.auth.onIdTokenChanged((r) => {
      e((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
    });
    (this.internalListeners.set(e, n), this.updateProactiveRefresh());
  }
  removeAuthTokenListener(e) {
    this.assertAuthConfigured();
    const n = this.internalListeners.get(e);
    n && (this.internalListeners.delete(e), n(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    q(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth",
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function TR(t) {
  switch (t) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    case "WebExtension":
      return "web-extension";
    default:
      return;
  }
}
function IR(t) {
  ($i(
    new Gr(
      "auth",
      (e, { options: n }) => {
        const r = e.getProvider("app").getImmediate(),
          i = e.getProvider("heartbeat"),
          s = e.getProvider("app-check-internal"),
          { apiKey: o, authDomain: l } = r.options;
        q(o && !o.includes(":"), "invalid-api-key", { appName: r.name });
        const u = {
            apiKey: o,
            authDomain: l,
            clientPlatform: t,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: EE(t),
          },
          h = new F1(r, i, s, u);
        return (K1(h, n), h);
      },
      "PUBLIC",
    )
      .setInstantiationMode("EXPLICIT")
      .setInstanceCreatedCallback((e, n, r) => {
        e.getProvider("auth-internal").initialize();
      }),
  ),
    $i(
      new Gr(
        "auth-internal",
        (e) => {
          const n = vr(e.getProvider("auth").getImmediate());
          return ((r) => new wR(r))(n);
        },
        "PRIVATE",
      ).setInstantiationMode("EXPLICIT"),
    ),
    ir(Pg, Ng, TR(t)),
    ir(Pg, Ng, "esm2020"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const SR = 5 * 60,
  AR = Yv("authIdTokenMaxAge") || SR;
let xg = null;
const CR = (t) => async (e) => {
  const n = e && (await e.getIdTokenResult()),
    r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (r && r > AR) return;
  const i = n == null ? void 0 : n.token;
  xg !== i &&
    ((xg = i),
    await fetch(t, {
      method: i ? "POST" : "DELETE",
      headers: i ? { Authorization: `Bearer ${i}` } : {},
    }));
};
function RR(t = nE()) {
  const e = Jd(t, "auth");
  if (e.isInitialized()) return e.getImmediate();
  const n = G1(t, { popupRedirectResolver: ER, persistence: [xC, vC, NE] }),
    r = Yv("authTokenSyncURL");
  if (r && typeof isSecureContext == "boolean" && isSecureContext) {
    const s = new URL(r, location.origin);
    if (location.origin === s.origin) {
      const o = CR(s.toString());
      (pC(n, o, () => o(n.currentUser)), fC(n, (l) => o(l)));
    }
  }
  const i = Kv("auth");
  return (i && Q1(n, `http://${i}`), n);
}
function kR() {
  var t;
  return (
    ((t = document.getElementsByTagName("head")) == null ? void 0 : t[0]) ??
    document
  );
}
U1({
  loadJS(t) {
    return new Promise((e, n) => {
      const r = document.createElement("script");
      (r.setAttribute("src", t),
        (r.onload = e),
        (r.onerror = (i) => {
          const s = Bt("internal-error");
          ((s.customData = i), n(s));
        }),
        (r.type = "text/javascript"),
        (r.charset = "UTF-8"),
        kR().appendChild(r));
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript:
    "https://www.google.com/recaptcha/enterprise.js?render=",
});
IR("Browser");
var Dg =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/ var sr, FE;
(function () {
  var t;
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ function e(_, g) {
    function v() {}
    ((v.prototype = g.prototype),
      (_.F = g.prototype),
      (_.prototype = new v()),
      (_.prototype.constructor = _),
      (_.D = function (T, A, k) {
        for (
          var w = Array(arguments.length - 2), je = 2;
          je < arguments.length;
          je++
        )
          w[je - 2] = arguments[je];
        return g.prototype[A].apply(T, w);
      }));
  }
  function n() {
    this.blockSize = -1;
  }
  function r() {
    ((this.blockSize = -1),
      (this.blockSize = 64),
      (this.g = Array(4)),
      (this.C = Array(this.blockSize)),
      (this.o = this.h = 0),
      this.u());
  }
  (e(r, n),
    (r.prototype.u = function () {
      ((this.g[0] = 1732584193),
        (this.g[1] = 4023233417),
        (this.g[2] = 2562383102),
        (this.g[3] = 271733878),
        (this.o = this.h = 0));
    }));
  function i(_, g, v) {
    v || (v = 0);
    const T = Array(16);
    if (typeof g == "string")
      for (var A = 0; A < 16; ++A)
        T[A] =
          g.charCodeAt(v++) |
          (g.charCodeAt(v++) << 8) |
          (g.charCodeAt(v++) << 16) |
          (g.charCodeAt(v++) << 24);
    else
      for (A = 0; A < 16; ++A)
        T[A] = g[v++] | (g[v++] << 8) | (g[v++] << 16) | (g[v++] << 24);
    ((g = _.g[0]), (v = _.g[1]), (A = _.g[2]));
    let k = _.g[3],
      w;
    ((w = (g + (k ^ (v & (A ^ k))) + T[0] + 3614090360) & 4294967295),
      (g = v + (((w << 7) & 4294967295) | (w >>> 25))),
      (w = (k + (A ^ (g & (v ^ A))) + T[1] + 3905402710) & 4294967295),
      (k = g + (((w << 12) & 4294967295) | (w >>> 20))),
      (w = (A + (v ^ (k & (g ^ v))) + T[2] + 606105819) & 4294967295),
      (A = k + (((w << 17) & 4294967295) | (w >>> 15))),
      (w = (v + (g ^ (A & (k ^ g))) + T[3] + 3250441966) & 4294967295),
      (v = A + (((w << 22) & 4294967295) | (w >>> 10))),
      (w = (g + (k ^ (v & (A ^ k))) + T[4] + 4118548399) & 4294967295),
      (g = v + (((w << 7) & 4294967295) | (w >>> 25))),
      (w = (k + (A ^ (g & (v ^ A))) + T[5] + 1200080426) & 4294967295),
      (k = g + (((w << 12) & 4294967295) | (w >>> 20))),
      (w = (A + (v ^ (k & (g ^ v))) + T[6] + 2821735955) & 4294967295),
      (A = k + (((w << 17) & 4294967295) | (w >>> 15))),
      (w = (v + (g ^ (A & (k ^ g))) + T[7] + 4249261313) & 4294967295),
      (v = A + (((w << 22) & 4294967295) | (w >>> 10))),
      (w = (g + (k ^ (v & (A ^ k))) + T[8] + 1770035416) & 4294967295),
      (g = v + (((w << 7) & 4294967295) | (w >>> 25))),
      (w = (k + (A ^ (g & (v ^ A))) + T[9] + 2336552879) & 4294967295),
      (k = g + (((w << 12) & 4294967295) | (w >>> 20))),
      (w = (A + (v ^ (k & (g ^ v))) + T[10] + 4294925233) & 4294967295),
      (A = k + (((w << 17) & 4294967295) | (w >>> 15))),
      (w = (v + (g ^ (A & (k ^ g))) + T[11] + 2304563134) & 4294967295),
      (v = A + (((w << 22) & 4294967295) | (w >>> 10))),
      (w = (g + (k ^ (v & (A ^ k))) + T[12] + 1804603682) & 4294967295),
      (g = v + (((w << 7) & 4294967295) | (w >>> 25))),
      (w = (k + (A ^ (g & (v ^ A))) + T[13] + 4254626195) & 4294967295),
      (k = g + (((w << 12) & 4294967295) | (w >>> 20))),
      (w = (A + (v ^ (k & (g ^ v))) + T[14] + 2792965006) & 4294967295),
      (A = k + (((w << 17) & 4294967295) | (w >>> 15))),
      (w = (v + (g ^ (A & (k ^ g))) + T[15] + 1236535329) & 4294967295),
      (v = A + (((w << 22) & 4294967295) | (w >>> 10))),
      (w = (g + (A ^ (k & (v ^ A))) + T[1] + 4129170786) & 4294967295),
      (g = v + (((w << 5) & 4294967295) | (w >>> 27))),
      (w = (k + (v ^ (A & (g ^ v))) + T[6] + 3225465664) & 4294967295),
      (k = g + (((w << 9) & 4294967295) | (w >>> 23))),
      (w = (A + (g ^ (v & (k ^ g))) + T[11] + 643717713) & 4294967295),
      (A = k + (((w << 14) & 4294967295) | (w >>> 18))),
      (w = (v + (k ^ (g & (A ^ k))) + T[0] + 3921069994) & 4294967295),
      (v = A + (((w << 20) & 4294967295) | (w >>> 12))),
      (w = (g + (A ^ (k & (v ^ A))) + T[5] + 3593408605) & 4294967295),
      (g = v + (((w << 5) & 4294967295) | (w >>> 27))),
      (w = (k + (v ^ (A & (g ^ v))) + T[10] + 38016083) & 4294967295),
      (k = g + (((w << 9) & 4294967295) | (w >>> 23))),
      (w = (A + (g ^ (v & (k ^ g))) + T[15] + 3634488961) & 4294967295),
      (A = k + (((w << 14) & 4294967295) | (w >>> 18))),
      (w = (v + (k ^ (g & (A ^ k))) + T[4] + 3889429448) & 4294967295),
      (v = A + (((w << 20) & 4294967295) | (w >>> 12))),
      (w = (g + (A ^ (k & (v ^ A))) + T[9] + 568446438) & 4294967295),
      (g = v + (((w << 5) & 4294967295) | (w >>> 27))),
      (w = (k + (v ^ (A & (g ^ v))) + T[14] + 3275163606) & 4294967295),
      (k = g + (((w << 9) & 4294967295) | (w >>> 23))),
      (w = (A + (g ^ (v & (k ^ g))) + T[3] + 4107603335) & 4294967295),
      (A = k + (((w << 14) & 4294967295) | (w >>> 18))),
      (w = (v + (k ^ (g & (A ^ k))) + T[8] + 1163531501) & 4294967295),
      (v = A + (((w << 20) & 4294967295) | (w >>> 12))),
      (w = (g + (A ^ (k & (v ^ A))) + T[13] + 2850285829) & 4294967295),
      (g = v + (((w << 5) & 4294967295) | (w >>> 27))),
      (w = (k + (v ^ (A & (g ^ v))) + T[2] + 4243563512) & 4294967295),
      (k = g + (((w << 9) & 4294967295) | (w >>> 23))),
      (w = (A + (g ^ (v & (k ^ g))) + T[7] + 1735328473) & 4294967295),
      (A = k + (((w << 14) & 4294967295) | (w >>> 18))),
      (w = (v + (k ^ (g & (A ^ k))) + T[12] + 2368359562) & 4294967295),
      (v = A + (((w << 20) & 4294967295) | (w >>> 12))),
      (w = (g + (v ^ A ^ k) + T[5] + 4294588738) & 4294967295),
      (g = v + (((w << 4) & 4294967295) | (w >>> 28))),
      (w = (k + (g ^ v ^ A) + T[8] + 2272392833) & 4294967295),
      (k = g + (((w << 11) & 4294967295) | (w >>> 21))),
      (w = (A + (k ^ g ^ v) + T[11] + 1839030562) & 4294967295),
      (A = k + (((w << 16) & 4294967295) | (w >>> 16))),
      (w = (v + (A ^ k ^ g) + T[14] + 4259657740) & 4294967295),
      (v = A + (((w << 23) & 4294967295) | (w >>> 9))),
      (w = (g + (v ^ A ^ k) + T[1] + 2763975236) & 4294967295),
      (g = v + (((w << 4) & 4294967295) | (w >>> 28))),
      (w = (k + (g ^ v ^ A) + T[4] + 1272893353) & 4294967295),
      (k = g + (((w << 11) & 4294967295) | (w >>> 21))),
      (w = (A + (k ^ g ^ v) + T[7] + 4139469664) & 4294967295),
      (A = k + (((w << 16) & 4294967295) | (w >>> 16))),
      (w = (v + (A ^ k ^ g) + T[10] + 3200236656) & 4294967295),
      (v = A + (((w << 23) & 4294967295) | (w >>> 9))),
      (w = (g + (v ^ A ^ k) + T[13] + 681279174) & 4294967295),
      (g = v + (((w << 4) & 4294967295) | (w >>> 28))),
      (w = (k + (g ^ v ^ A) + T[0] + 3936430074) & 4294967295),
      (k = g + (((w << 11) & 4294967295) | (w >>> 21))),
      (w = (A + (k ^ g ^ v) + T[3] + 3572445317) & 4294967295),
      (A = k + (((w << 16) & 4294967295) | (w >>> 16))),
      (w = (v + (A ^ k ^ g) + T[6] + 76029189) & 4294967295),
      (v = A + (((w << 23) & 4294967295) | (w >>> 9))),
      (w = (g + (v ^ A ^ k) + T[9] + 3654602809) & 4294967295),
      (g = v + (((w << 4) & 4294967295) | (w >>> 28))),
      (w = (k + (g ^ v ^ A) + T[12] + 3873151461) & 4294967295),
      (k = g + (((w << 11) & 4294967295) | (w >>> 21))),
      (w = (A + (k ^ g ^ v) + T[15] + 530742520) & 4294967295),
      (A = k + (((w << 16) & 4294967295) | (w >>> 16))),
      (w = (v + (A ^ k ^ g) + T[2] + 3299628645) & 4294967295),
      (v = A + (((w << 23) & 4294967295) | (w >>> 9))),
      (w = (g + (A ^ (v | ~k)) + T[0] + 4096336452) & 4294967295),
      (g = v + (((w << 6) & 4294967295) | (w >>> 26))),
      (w = (k + (v ^ (g | ~A)) + T[7] + 1126891415) & 4294967295),
      (k = g + (((w << 10) & 4294967295) | (w >>> 22))),
      (w = (A + (g ^ (k | ~v)) + T[14] + 2878612391) & 4294967295),
      (A = k + (((w << 15) & 4294967295) | (w >>> 17))),
      (w = (v + (k ^ (A | ~g)) + T[5] + 4237533241) & 4294967295),
      (v = A + (((w << 21) & 4294967295) | (w >>> 11))),
      (w = (g + (A ^ (v | ~k)) + T[12] + 1700485571) & 4294967295),
      (g = v + (((w << 6) & 4294967295) | (w >>> 26))),
      (w = (k + (v ^ (g | ~A)) + T[3] + 2399980690) & 4294967295),
      (k = g + (((w << 10) & 4294967295) | (w >>> 22))),
      (w = (A + (g ^ (k | ~v)) + T[10] + 4293915773) & 4294967295),
      (A = k + (((w << 15) & 4294967295) | (w >>> 17))),
      (w = (v + (k ^ (A | ~g)) + T[1] + 2240044497) & 4294967295),
      (v = A + (((w << 21) & 4294967295) | (w >>> 11))),
      (w = (g + (A ^ (v | ~k)) + T[8] + 1873313359) & 4294967295),
      (g = v + (((w << 6) & 4294967295) | (w >>> 26))),
      (w = (k + (v ^ (g | ~A)) + T[15] + 4264355552) & 4294967295),
      (k = g + (((w << 10) & 4294967295) | (w >>> 22))),
      (w = (A + (g ^ (k | ~v)) + T[6] + 2734768916) & 4294967295),
      (A = k + (((w << 15) & 4294967295) | (w >>> 17))),
      (w = (v + (k ^ (A | ~g)) + T[13] + 1309151649) & 4294967295),
      (v = A + (((w << 21) & 4294967295) | (w >>> 11))),
      (w = (g + (A ^ (v | ~k)) + T[4] + 4149444226) & 4294967295),
      (g = v + (((w << 6) & 4294967295) | (w >>> 26))),
      (w = (k + (v ^ (g | ~A)) + T[11] + 3174756917) & 4294967295),
      (k = g + (((w << 10) & 4294967295) | (w >>> 22))),
      (w = (A + (g ^ (k | ~v)) + T[2] + 718787259) & 4294967295),
      (A = k + (((w << 15) & 4294967295) | (w >>> 17))),
      (w = (v + (k ^ (A | ~g)) + T[9] + 3951481745) & 4294967295),
      (_.g[0] = (_.g[0] + g) & 4294967295),
      (_.g[1] =
        (_.g[1] + (A + (((w << 21) & 4294967295) | (w >>> 11)))) & 4294967295),
      (_.g[2] = (_.g[2] + A) & 4294967295),
      (_.g[3] = (_.g[3] + k) & 4294967295));
  }
  ((r.prototype.v = function (_, g) {
    g === void 0 && (g = _.length);
    const v = g - this.blockSize,
      T = this.C;
    let A = this.h,
      k = 0;
    for (; k < g; ) {
      if (A == 0) for (; k <= v; ) (i(this, _, k), (k += this.blockSize));
      if (typeof _ == "string") {
        for (; k < g; )
          if (((T[A++] = _.charCodeAt(k++)), A == this.blockSize)) {
            (i(this, T), (A = 0));
            break;
          }
      } else
        for (; k < g; )
          if (((T[A++] = _[k++]), A == this.blockSize)) {
            (i(this, T), (A = 0));
            break;
          }
    }
    ((this.h = A), (this.o += g));
  }),
    (r.prototype.A = function () {
      var _ = Array(
        (this.h < 56 ? this.blockSize : this.blockSize * 2) - this.h,
      );
      _[0] = 128;
      for (var g = 1; g < _.length - 8; ++g) _[g] = 0;
      g = this.o * 8;
      for (var v = _.length - 8; v < _.length; ++v)
        ((_[v] = g & 255), (g /= 256));
      for (this.v(_), _ = Array(16), g = 0, v = 0; v < 4; ++v)
        for (let T = 0; T < 32; T += 8) _[g++] = (this.g[v] >>> T) & 255;
      return _;
    }));
  function s(_, g) {
    var v = l;
    return Object.prototype.hasOwnProperty.call(v, _) ? v[_] : (v[_] = g(_));
  }
  function o(_, g) {
    this.h = g;
    const v = [];
    let T = !0;
    for (let A = _.length - 1; A >= 0; A--) {
      const k = _[A] | 0;
      (T && k == g) || ((v[A] = k), (T = !1));
    }
    this.g = v;
  }
  var l = {};
  function u(_) {
    return -128 <= _ && _ < 128
      ? s(_, function (g) {
          return new o([g | 0], g < 0 ? -1 : 0);
        })
      : new o([_ | 0], _ < 0 ? -1 : 0);
  }
  function h(_) {
    if (isNaN(_) || !isFinite(_)) return p;
    if (_ < 0) return F(h(-_));
    const g = [];
    let v = 1;
    for (let T = 0; _ >= v; T++) ((g[T] = (_ / v) | 0), (v *= 4294967296));
    return new o(g, 0);
  }
  function f(_, g) {
    if (_.length == 0) throw Error("number format error: empty string");
    if (((g = g || 10), g < 2 || 36 < g))
      throw Error("radix out of range: " + g);
    if (_.charAt(0) == "-") return F(f(_.substring(1), g));
    if (_.indexOf("-") >= 0)
      throw Error('number format error: interior "-" character');
    const v = h(Math.pow(g, 8));
    let T = p;
    for (let k = 0; k < _.length; k += 8) {
      var A = Math.min(8, _.length - k);
      const w = parseInt(_.substring(k, k + A), g);
      A < 8
        ? ((A = h(Math.pow(g, A))), (T = T.j(A).add(h(w))))
        : ((T = T.j(v)), (T = T.add(h(w))));
    }
    return T;
  }
  var p = u(0),
    m = u(1),
    I = u(16777216);
  ((t = o.prototype),
    (t.m = function () {
      if (D(this)) return -F(this).m();
      let _ = 0,
        g = 1;
      for (let v = 0; v < this.g.length; v++) {
        const T = this.i(v);
        ((_ += (T >= 0 ? T : 4294967296 + T) * g), (g *= 4294967296));
      }
      return _;
    }),
    (t.toString = function (_) {
      if (((_ = _ || 10), _ < 2 || 36 < _))
        throw Error("radix out of range: " + _);
      if (N(this)) return "0";
      if (D(this)) return "-" + F(this).toString(_);
      const g = h(Math.pow(_, 6));
      var v = this;
      let T = "";
      for (;;) {
        const A = O(v, g).g;
        v = S(v, A.j(g));
        let k = ((v.g.length > 0 ? v.g[0] : v.h) >>> 0).toString(_);
        if (((v = A), N(v))) return k + T;
        for (; k.length < 6; ) k = "0" + k;
        T = k + T;
      }
    }),
    (t.i = function (_) {
      return _ < 0 ? 0 : _ < this.g.length ? this.g[_] : this.h;
    }));
  function N(_) {
    if (_.h != 0) return !1;
    for (let g = 0; g < _.g.length; g++) if (_.g[g] != 0) return !1;
    return !0;
  }
  function D(_) {
    return _.h == -1;
  }
  t.l = function (_) {
    return ((_ = S(this, _)), D(_) ? -1 : N(_) ? 0 : 1);
  };
  function F(_) {
    const g = _.g.length,
      v = [];
    for (let T = 0; T < g; T++) v[T] = ~_.g[T];
    return new o(v, ~_.h).add(m);
  }
  ((t.abs = function () {
    return D(this) ? F(this) : this;
  }),
    (t.add = function (_) {
      const g = Math.max(this.g.length, _.g.length),
        v = [];
      let T = 0;
      for (let A = 0; A <= g; A++) {
        let k = T + (this.i(A) & 65535) + (_.i(A) & 65535),
          w = (k >>> 16) + (this.i(A) >>> 16) + (_.i(A) >>> 16);
        ((T = w >>> 16), (k &= 65535), (w &= 65535), (v[A] = (w << 16) | k));
      }
      return new o(v, v[v.length - 1] & -2147483648 ? -1 : 0);
    }));
  function S(_, g) {
    return _.add(F(g));
  }
  t.j = function (_) {
    if (N(this) || N(_)) return p;
    if (D(this)) return D(_) ? F(this).j(F(_)) : F(F(this).j(_));
    if (D(_)) return F(this.j(F(_)));
    if (this.l(I) < 0 && _.l(I) < 0) return h(this.m() * _.m());
    const g = this.g.length + _.g.length,
      v = [];
    for (var T = 0; T < 2 * g; T++) v[T] = 0;
    for (T = 0; T < this.g.length; T++)
      for (let A = 0; A < _.g.length; A++) {
        const k = this.i(T) >>> 16,
          w = this.i(T) & 65535,
          je = _.i(A) >>> 16,
          on = _.i(A) & 65535;
        ((v[2 * T + 2 * A] += w * on),
          E(v, 2 * T + 2 * A),
          (v[2 * T + 2 * A + 1] += k * on),
          E(v, 2 * T + 2 * A + 1),
          (v[2 * T + 2 * A + 1] += w * je),
          E(v, 2 * T + 2 * A + 1),
          (v[2 * T + 2 * A + 2] += k * je),
          E(v, 2 * T + 2 * A + 2));
      }
    for (_ = 0; _ < g; _++) v[_] = (v[2 * _ + 1] << 16) | v[2 * _];
    for (_ = g; _ < 2 * g; _++) v[_] = 0;
    return new o(v, 0);
  };
  function E(_, g) {
    for (; (_[g] & 65535) != _[g]; )
      ((_[g + 1] += _[g] >>> 16), (_[g] &= 65535), g++);
  }
  function R(_, g) {
    ((this.g = _), (this.h = g));
  }
  function O(_, g) {
    if (N(g)) throw Error("division by zero");
    if (N(_)) return new R(p, p);
    if (D(_)) return ((g = O(F(_), g)), new R(F(g.g), F(g.h)));
    if (D(g)) return ((g = O(_, F(g))), new R(F(g.g), g.h));
    if (_.g.length > 30) {
      if (D(_) || D(g))
        throw Error("slowDivide_ only works with positive integers.");
      for (var v = m, T = g; T.l(_) <= 0; ) ((v = L(v)), (T = L(T)));
      var A = V(v, 1),
        k = V(T, 1);
      for (T = V(T, 2), v = V(v, 2); !N(T); ) {
        var w = k.add(T);
        (w.l(_) <= 0 && ((A = A.add(v)), (k = w)),
          (T = V(T, 1)),
          (v = V(v, 1)));
      }
      return ((g = S(_, A.j(g))), new R(A, g));
    }
    for (A = p; _.l(g) >= 0; ) {
      for (
        v = Math.max(1, Math.floor(_.m() / g.m())),
          T = Math.ceil(Math.log(v) / Math.LN2),
          T = T <= 48 ? 1 : Math.pow(2, T - 48),
          k = h(v),
          w = k.j(g);
        D(w) || w.l(_) > 0;
      )
        ((v -= T), (k = h(v)), (w = k.j(g)));
      (N(k) && (k = m), (A = A.add(k)), (_ = S(_, w)));
    }
    return new R(A, _);
  }
  ((t.B = function (_) {
    return O(this, _).h;
  }),
    (t.and = function (_) {
      const g = Math.max(this.g.length, _.g.length),
        v = [];
      for (let T = 0; T < g; T++) v[T] = this.i(T) & _.i(T);
      return new o(v, this.h & _.h);
    }),
    (t.or = function (_) {
      const g = Math.max(this.g.length, _.g.length),
        v = [];
      for (let T = 0; T < g; T++) v[T] = this.i(T) | _.i(T);
      return new o(v, this.h | _.h);
    }),
    (t.xor = function (_) {
      const g = Math.max(this.g.length, _.g.length),
        v = [];
      for (let T = 0; T < g; T++) v[T] = this.i(T) ^ _.i(T);
      return new o(v, this.h ^ _.h);
    }));
  function L(_) {
    const g = _.g.length + 1,
      v = [];
    for (let T = 0; T < g; T++) v[T] = (_.i(T) << 1) | (_.i(T - 1) >>> 31);
    return new o(v, _.h);
  }
  function V(_, g) {
    const v = g >> 5;
    g %= 32;
    const T = _.g.length - v,
      A = [];
    for (let k = 0; k < T; k++)
      A[k] =
        g > 0 ? (_.i(k + v) >>> g) | (_.i(k + v + 1) << (32 - g)) : _.i(k + v);
    return new o(A, _.h);
  }
  ((r.prototype.digest = r.prototype.A),
    (r.prototype.reset = r.prototype.u),
    (r.prototype.update = r.prototype.v),
    (FE = r),
    (o.prototype.add = o.prototype.add),
    (o.prototype.multiply = o.prototype.j),
    (o.prototype.modulo = o.prototype.B),
    (o.prototype.compare = o.prototype.l),
    (o.prototype.toNumber = o.prototype.m),
    (o.prototype.toString = o.prototype.toString),
    (o.prototype.getBits = o.prototype.i),
    (o.fromNumber = h),
    (o.fromString = f),
    (sr = o));
}).apply(
  typeof Dg < "u"
    ? Dg
    : typeof self < "u"
      ? self
      : typeof window < "u"
        ? window
        : {},
);
var xa =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/ var UE, Bs, jE, Xa, Uh, BE, zE, $E;
(function () {
  var t,
    e = Object.defineProperty;
  function n(a) {
    a = [
      typeof globalThis == "object" && globalThis,
      a,
      typeof window == "object" && window,
      typeof self == "object" && self,
      typeof xa == "object" && xa,
    ];
    for (var c = 0; c < a.length; ++c) {
      var d = a[c];
      if (d && d.Math == Math) return d;
    }
    throw Error("Cannot find global object");
  }
  var r = n(this);
  function i(a, c) {
    if (c)
      e: {
        var d = r;
        a = a.split(".");
        for (var y = 0; y < a.length - 1; y++) {
          var P = a[y];
          if (!(P in d)) break e;
          d = d[P];
        }
        ((a = a[a.length - 1]),
          (y = d[a]),
          (c = c(y)),
          c != y &&
            c != null &&
            e(d, a, { configurable: !0, writable: !0, value: c }));
      }
  }
  (i("Symbol.dispose", function (a) {
    return a || Symbol("Symbol.dispose");
  }),
    i("Array.prototype.values", function (a) {
      return (
        a ||
        function () {
          return this[Symbol.iterator]();
        }
      );
    }),
    i("Object.entries", function (a) {
      return (
        a ||
        function (c) {
          var d = [],
            y;
          for (y in c)
            Object.prototype.hasOwnProperty.call(c, y) && d.push([y, c[y]]);
          return d;
        }
      );
    }));
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ var s = s || {},
    o = this || self;
  function l(a) {
    var c = typeof a;
    return (c == "object" && a != null) || c == "function";
  }
  function u(a, c, d) {
    return a.call.apply(a.bind, arguments);
  }
  function h(a, c, d) {
    return ((h = u), h.apply(null, arguments));
  }
  function f(a, c) {
    var d = Array.prototype.slice.call(arguments, 1);
    return function () {
      var y = d.slice();
      return (y.push.apply(y, arguments), a.apply(this, y));
    };
  }
  function p(a, c) {
    function d() {}
    ((d.prototype = c.prototype),
      (a.Z = c.prototype),
      (a.prototype = new d()),
      (a.prototype.constructor = a),
      (a.Ob = function (y, P, x) {
        for (
          var j = Array(arguments.length - 2), X = 2;
          X < arguments.length;
          X++
        )
          j[X - 2] = arguments[X];
        return c.prototype[P].apply(y, j);
      }));
  }
  var m =
    typeof AsyncContext < "u" && typeof AsyncContext.Snapshot == "function"
      ? (a) => a && AsyncContext.Snapshot.wrap(a)
      : (a) => a;
  function I(a) {
    const c = a.length;
    if (c > 0) {
      const d = Array(c);
      for (let y = 0; y < c; y++) d[y] = a[y];
      return d;
    }
    return [];
  }
  function N(a, c) {
    for (let y = 1; y < arguments.length; y++) {
      const P = arguments[y];
      var d = typeof P;
      if (
        ((d =
          d != "object" ? d : P ? (Array.isArray(P) ? "array" : d) : "null"),
        d == "array" || (d == "object" && typeof P.length == "number"))
      ) {
        d = a.length || 0;
        const x = P.length || 0;
        a.length = d + x;
        for (let j = 0; j < x; j++) a[d + j] = P[j];
      } else a.push(P);
    }
  }
  class D {
    constructor(c, d) {
      ((this.i = c), (this.j = d), (this.h = 0), (this.g = null));
    }
    get() {
      let c;
      return (
        this.h > 0
          ? (this.h--, (c = this.g), (this.g = c.next), (c.next = null))
          : (c = this.i()),
        c
      );
    }
  }
  function F(a) {
    o.setTimeout(() => {
      throw a;
    }, 0);
  }
  function S() {
    var a = _;
    let c = null;
    return (
      a.g &&
        ((c = a.g), (a.g = a.g.next), a.g || (a.h = null), (c.next = null)),
      c
    );
  }
  class E {
    constructor() {
      this.h = this.g = null;
    }
    add(c, d) {
      const y = R.get();
      (y.set(c, d), this.h ? (this.h.next = y) : (this.g = y), (this.h = y));
    }
  }
  var R = new D(
    () => new O(),
    (a) => a.reset(),
  );
  class O {
    constructor() {
      this.next = this.g = this.h = null;
    }
    set(c, d) {
      ((this.h = c), (this.g = d), (this.next = null));
    }
    reset() {
      this.next = this.g = this.h = null;
    }
  }
  let L,
    V = !1,
    _ = new E(),
    g = () => {
      const a = Promise.resolve(void 0);
      L = () => {
        a.then(v);
      };
    };
  function v() {
    for (var a; (a = S()); ) {
      try {
        a.h.call(a.g);
      } catch (d) {
        F(d);
      }
      var c = R;
      (c.j(a), c.h < 100 && (c.h++, (a.next = c.g), (c.g = a)));
    }
    V = !1;
  }
  function T() {
    ((this.u = this.u), (this.C = this.C));
  }
  ((T.prototype.u = !1),
    (T.prototype.dispose = function () {
      this.u || ((this.u = !0), this.N());
    }),
    (T.prototype[Symbol.dispose] = function () {
      this.dispose();
    }),
    (T.prototype.N = function () {
      if (this.C) for (; this.C.length; ) this.C.shift()();
    }));
  function A(a, c) {
    ((this.type = a), (this.g = this.target = c), (this.defaultPrevented = !1));
  }
  A.prototype.h = function () {
    this.defaultPrevented = !0;
  };
  var k = (function () {
    if (!o.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      c = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        },
      });
    try {
      const d = () => {};
      (o.addEventListener("test", d, c), o.removeEventListener("test", d, c));
    } catch {}
    return a;
  })();
  function w(a) {
    return /^[\s\xa0]*$/.test(a);
  }
  function je(a, c) {
    (A.call(this, a ? a.type : ""),
      (this.relatedTarget = this.g = this.target = null),
      (this.button =
        this.screenY =
        this.screenX =
        this.clientY =
        this.clientX =
          0),
      (this.key = ""),
      (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
      (this.state = null),
      (this.pointerId = 0),
      (this.pointerType = ""),
      (this.i = null),
      a && this.init(a, c));
  }
  (p(je, A),
    (je.prototype.init = function (a, c) {
      const d = (this.type = a.type),
        y =
          a.changedTouches && a.changedTouches.length
            ? a.changedTouches[0]
            : null;
      ((this.target = a.target || a.srcElement),
        (this.g = c),
        (c = a.relatedTarget),
        c ||
          (d == "mouseover"
            ? (c = a.fromElement)
            : d == "mouseout" && (c = a.toElement)),
        (this.relatedTarget = c),
        y
          ? ((this.clientX = y.clientX !== void 0 ? y.clientX : y.pageX),
            (this.clientY = y.clientY !== void 0 ? y.clientY : y.pageY),
            (this.screenX = y.screenX || 0),
            (this.screenY = y.screenY || 0))
          : ((this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX),
            (this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY),
            (this.screenX = a.screenX || 0),
            (this.screenY = a.screenY || 0)),
        (this.button = a.button),
        (this.key = a.key || ""),
        (this.ctrlKey = a.ctrlKey),
        (this.altKey = a.altKey),
        (this.shiftKey = a.shiftKey),
        (this.metaKey = a.metaKey),
        (this.pointerId = a.pointerId || 0),
        (this.pointerType = a.pointerType),
        (this.state = a.state),
        (this.i = a),
        a.defaultPrevented && je.Z.h.call(this));
    }),
    (je.prototype.h = function () {
      je.Z.h.call(this);
      const a = this.i;
      a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
    }));
  var on = "closure_listenable_" + ((Math.random() * 1e6) | 0),
    ls = 0;
  function us(a, c, d, y, P) {
    ((this.listener = a),
      (this.proxy = null),
      (this.src = c),
      (this.type = d),
      (this.capture = !!y),
      (this.ha = P),
      (this.key = ++ls),
      (this.da = this.fa = !1));
  }
  function z(a) {
    ((a.da = !0),
      (a.listener = null),
      (a.proxy = null),
      (a.src = null),
      (a.ha = null));
  }
  function K(a, c, d) {
    for (const y in a) c.call(d, a[y], y, a);
  }
  function J(a, c) {
    for (const d in a) c.call(void 0, a[d], d, a);
  }
  function me(a) {
    const c = {};
    for (const d in a) c[d] = a[d];
    return c;
  }
  const Ie =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " ",
    );
  function Ir(a, c) {
    let d, y;
    for (let P = 1; P < arguments.length; P++) {
      y = arguments[P];
      for (d in y) a[d] = y[d];
      for (let x = 0; x < Ie.length; x++)
        ((d = Ie[x]),
          Object.prototype.hasOwnProperty.call(y, d) && (a[d] = y[d]));
    }
  }
  function St(a) {
    ((this.src = a), (this.g = {}), (this.h = 0));
  }
  St.prototype.add = function (a, c, d, y, P) {
    const x = a.toString();
    ((a = this.g[x]), a || ((a = this.g[x] = []), this.h++));
    const j = Vt(a, c, y, P);
    return (
      j > -1
        ? ((c = a[j]), d || (c.fa = !1))
        : ((c = new us(c, this.src, x, !!y, P)), (c.fa = d), a.push(c)),
      c
    );
  };
  function Sr(a, c) {
    const d = c.type;
    if (d in a.g) {
      var y = a.g[d],
        P = Array.prototype.indexOf.call(y, c, void 0),
        x;
      ((x = P >= 0) && Array.prototype.splice.call(y, P, 1),
        x && (z(c), a.g[d].length == 0 && (delete a.g[d], a.h--)));
    }
  }
  function Vt(a, c, d, y) {
    for (let P = 0; P < a.length; ++P) {
      const x = a[P];
      if (!x.da && x.listener == c && x.capture == !!d && x.ha == y) return P;
    }
    return -1;
  }
  var Pn = "closure_lm_" + ((Math.random() * 1e6) | 0),
    ku = {};
  function Qf(a, c, d, y, P) {
    if (Array.isArray(c)) {
      for (let x = 0; x < c.length; x++) Qf(a, c[x], d, y, P);
      return null;
    }
    return (
      (d = Xf(d)),
      a && a[on] ? a.J(c, d, l(y) ? !!y.capture : !1, P) : AT(a, c, d, !1, y, P)
    );
  }
  function AT(a, c, d, y, P, x) {
    if (!c) throw Error("Invalid event type");
    const j = l(P) ? !!P.capture : !!P;
    let X = Nu(a);
    if ((X || (a[Pn] = X = new St(a)), (d = X.add(c, d, y, j, x)), d.proxy))
      return d;
    if (
      ((y = CT()),
      (d.proxy = y),
      (y.src = a),
      (y.listener = d),
      a.addEventListener)
    )
      (k || (P = j),
        P === void 0 && (P = !1),
        a.addEventListener(c.toString(), y, P));
    else if (a.attachEvent) a.attachEvent(Jf(c.toString()), y);
    else if (a.addListener && a.removeListener) a.addListener(y);
    else throw Error("addEventListener and attachEvent are unavailable.");
    return d;
  }
  function CT() {
    function a(d) {
      return c.call(a.src, a.listener, d);
    }
    const c = RT;
    return a;
  }
  function Yf(a, c, d, y, P) {
    if (Array.isArray(c))
      for (var x = 0; x < c.length; x++) Yf(a, c[x], d, y, P);
    else
      ((y = l(y) ? !!y.capture : !!y),
        (d = Xf(d)),
        a && a[on]
          ? ((a = a.i),
            (x = String(c).toString()),
            x in a.g &&
              ((c = a.g[x]),
              (d = Vt(c, d, y, P)),
              d > -1 &&
                (z(c[d]),
                Array.prototype.splice.call(c, d, 1),
                c.length == 0 && (delete a.g[x], a.h--))))
          : a &&
            (a = Nu(a)) &&
            ((c = a.g[c.toString()]),
            (a = -1),
            c && (a = Vt(c, d, y, P)),
            (d = a > -1 ? c[a] : null) && Pu(d)));
  }
  function Pu(a) {
    if (typeof a != "number" && a && !a.da) {
      var c = a.src;
      if (c && c[on]) Sr(c.i, a);
      else {
        var d = a.type,
          y = a.proxy;
        (c.removeEventListener
          ? c.removeEventListener(d, y, a.capture)
          : c.detachEvent
            ? c.detachEvent(Jf(d), y)
            : c.addListener && c.removeListener && c.removeListener(y),
          (d = Nu(c))
            ? (Sr(d, a), d.h == 0 && ((d.src = null), (c[Pn] = null)))
            : z(a));
      }
    }
  }
  function Jf(a) {
    return a in ku ? ku[a] : (ku[a] = "on" + a);
  }
  function RT(a, c) {
    if (a.da) a = !0;
    else {
      c = new je(c, this);
      const d = a.listener,
        y = a.ha || a.src;
      (a.fa && Pu(a), (a = d.call(y, c)));
    }
    return a;
  }
  function Nu(a) {
    return ((a = a[Pn]), a instanceof St ? a : null);
  }
  var xu = "__closure_events_fn_" + ((Math.random() * 1e9) >>> 0);
  function Xf(a) {
    return typeof a == "function"
      ? a
      : (a[xu] ||
          (a[xu] = function (c) {
            return a.handleEvent(c);
          }),
        a[xu]);
  }
  function Ge() {
    (T.call(this), (this.i = new St(this)), (this.M = this), (this.G = null));
  }
  (p(Ge, T),
    (Ge.prototype[on] = !0),
    (Ge.prototype.removeEventListener = function (a, c, d, y) {
      Yf(this, a, c, d, y);
    }));
  function nt(a, c) {
    var d,
      y = a.G;
    if (y) for (d = []; y; y = y.G) d.push(y);
    if (((a = a.M), (y = c.type || c), typeof c == "string")) c = new A(c, a);
    else if (c instanceof A) c.target = c.target || a;
    else {
      var P = c;
      ((c = new A(y, a)), Ir(c, P));
    }
    P = !0;
    let x, j;
    if (d)
      for (j = d.length - 1; j >= 0; j--)
        ((x = c.g = d[j]), (P = ta(x, y, !0, c) && P));
    if (
      ((x = c.g = a), (P = ta(x, y, !0, c) && P), (P = ta(x, y, !1, c) && P), d)
    )
      for (j = 0; j < d.length; j++)
        ((x = c.g = d[j]), (P = ta(x, y, !1, c) && P));
  }
  ((Ge.prototype.N = function () {
    if ((Ge.Z.N.call(this), this.i)) {
      var a = this.i;
      for (const c in a.g) {
        const d = a.g[c];
        for (let y = 0; y < d.length; y++) z(d[y]);
        (delete a.g[c], a.h--);
      }
    }
    this.G = null;
  }),
    (Ge.prototype.J = function (a, c, d, y) {
      return this.i.add(String(a), c, !1, d, y);
    }),
    (Ge.prototype.K = function (a, c, d, y) {
      return this.i.add(String(a), c, !0, d, y);
    }));
  function ta(a, c, d, y) {
    if (((c = a.i.g[String(c)]), !c)) return !0;
    c = c.concat();
    let P = !0;
    for (let x = 0; x < c.length; ++x) {
      const j = c[x];
      if (j && !j.da && j.capture == d) {
        const X = j.listener,
          xe = j.ha || j.src;
        (j.fa && Sr(a.i, j), (P = X.call(xe, y) !== !1 && P));
      }
    }
    return P && !y.defaultPrevented;
  }
  function kT(a, c) {
    if (typeof a != "function")
      if (a && typeof a.handleEvent == "function") a = h(a.handleEvent, a);
      else throw Error("Invalid listener argument");
    return Number(c) > 2147483647 ? -1 : o.setTimeout(a, c || 0);
  }
  function Zf(a) {
    a.g = kT(() => {
      ((a.g = null), a.i && ((a.i = !1), Zf(a)));
    }, a.l);
    const c = a.h;
    ((a.h = null), a.m.apply(null, c));
  }
  class PT extends T {
    constructor(c, d) {
      (super(),
        (this.m = c),
        (this.l = d),
        (this.h = null),
        (this.i = !1),
        (this.g = null));
    }
    j(c) {
      ((this.h = arguments), this.g ? (this.i = !0) : Zf(this));
    }
    N() {
      (super.N(),
        this.g &&
          (o.clearTimeout(this.g),
          (this.g = null),
          (this.i = !1),
          (this.h = null)));
    }
  }
  function cs(a) {
    (T.call(this), (this.h = a), (this.g = {}));
  }
  p(cs, T);
  var ep = [];
  function tp(a) {
    (K(
      a.g,
      function (c, d) {
        this.g.hasOwnProperty(d) && Pu(c);
      },
      a,
    ),
      (a.g = {}));
  }
  ((cs.prototype.N = function () {
    (cs.Z.N.call(this), tp(this));
  }),
    (cs.prototype.handleEvent = function () {
      throw Error("EventHandler.handleEvent not implemented");
    }));
  var Du = o.JSON.stringify,
    NT = o.JSON.parse,
    xT = class {
      stringify(a) {
        return o.JSON.stringify(a, void 0);
      }
      parse(a) {
        return o.JSON.parse(a, void 0);
      }
    };
  function np() {}
  function rp() {}
  var hs = { OPEN: "a", hb: "b", ERROR: "c", tb: "d" };
  function Vu() {
    A.call(this, "d");
  }
  p(Vu, A);
  function Ou() {
    A.call(this, "c");
  }
  p(Ou, A);
  var Ar = {},
    ip = null;
  function na() {
    return (ip = ip || new Ge());
  }
  Ar.Ia = "serverreachability";
  function sp(a) {
    A.call(this, Ar.Ia, a);
  }
  p(sp, A);
  function ds(a) {
    const c = na();
    nt(c, new sp(c));
  }
  Ar.STAT_EVENT = "statevent";
  function op(a, c) {
    (A.call(this, Ar.STAT_EVENT, a), (this.stat = c));
  }
  p(op, A);
  function rt(a) {
    const c = na();
    nt(c, new op(c, a));
  }
  Ar.Ja = "timingevent";
  function ap(a, c) {
    (A.call(this, Ar.Ja, a), (this.size = c));
  }
  p(ap, A);
  function fs(a, c) {
    if (typeof a != "function")
      throw Error("Fn must not be null and must be a function");
    return o.setTimeout(function () {
      a();
    }, c);
  }
  function ps() {
    this.g = !0;
  }
  ps.prototype.ua = function () {
    this.g = !1;
  };
  function DT(a, c, d, y, P, x) {
    a.info(function () {
      if (a.g)
        if (x) {
          var j = "",
            X = x.split("&");
          for (let le = 0; le < X.length; le++) {
            var xe = X[le].split("=");
            if (xe.length > 1) {
              const Me = xe[0];
              xe = xe[1];
              const qt = Me.split("_");
              j =
                qt.length >= 2 && qt[1] == "type"
                  ? j + (Me + "=" + xe + "&")
                  : j + (Me + "=redacted&");
            }
          }
        } else j = null;
      else j = x;
      return (
        "XMLHTTP REQ (" +
        y +
        ") [attempt " +
        P +
        "]: " +
        c +
        `
` +
        d +
        `
` +
        j
      );
    });
  }
  function VT(a, c, d, y, P, x, j) {
    a.info(function () {
      return (
        "XMLHTTP RESP (" +
        y +
        ") [ attempt " +
        P +
        "]: " +
        c +
        `
` +
        d +
        `
` +
        x +
        " " +
        j
      );
    });
  }
  function ri(a, c, d, y) {
    a.info(function () {
      return "XMLHTTP TEXT (" + c + "): " + LT(a, d) + (y ? " " + y : "");
    });
  }
  function OT(a, c) {
    a.info(function () {
      return "TIMEOUT: " + c;
    });
  }
  ps.prototype.info = function () {};
  function LT(a, c) {
    if (!a.g) return c;
    if (!c) return null;
    try {
      const x = JSON.parse(c);
      if (x) {
        for (a = 0; a < x.length; a++)
          if (Array.isArray(x[a])) {
            var d = x[a];
            if (!(d.length < 2)) {
              var y = d[1];
              if (Array.isArray(y) && !(y.length < 1)) {
                var P = y[0];
                if (P != "noop" && P != "stop" && P != "close")
                  for (let j = 1; j < y.length; j++) y[j] = "";
              }
            }
          }
      }
      return Du(x);
    } catch {
      return c;
    }
  }
  var ra = {
      NO_ERROR: 0,
      cb: 1,
      qb: 2,
      pb: 3,
      kb: 4,
      ob: 5,
      rb: 6,
      Ga: 7,
      TIMEOUT: 8,
      ub: 9,
    },
    lp = {
      ib: "complete",
      Fb: "success",
      ERROR: "error",
      Ga: "abort",
      xb: "ready",
      yb: "readystatechange",
      TIMEOUT: "timeout",
      sb: "incrementaldata",
      wb: "progress",
      lb: "downloadprogress",
      Nb: "uploadprogress",
    },
    up;
  function Lu() {}
  (p(Lu, np),
    (Lu.prototype.g = function () {
      return new XMLHttpRequest();
    }),
    (up = new Lu()));
  function ms(a) {
    return encodeURIComponent(String(a));
  }
  function MT(a) {
    var c = 1;
    a = a.split(":");
    const d = [];
    for (; c > 0 && a.length; ) (d.push(a.shift()), c--);
    return (a.length && d.push(a.join(":")), d);
  }
  function Nn(a, c, d, y) {
    ((this.j = a),
      (this.i = c),
      (this.l = d),
      (this.S = y || 1),
      (this.V = new cs(this)),
      (this.H = 45e3),
      (this.J = null),
      (this.o = !1),
      (this.u = this.B = this.A = this.M = this.F = this.T = this.D = null),
      (this.G = []),
      (this.g = null),
      (this.C = 0),
      (this.m = this.v = null),
      (this.X = -1),
      (this.K = !1),
      (this.P = 0),
      (this.O = null),
      (this.W = this.L = this.U = this.R = !1),
      (this.h = new cp()));
  }
  function cp() {
    ((this.i = null), (this.g = ""), (this.h = !1));
  }
  var hp = {},
    Mu = {};
  function bu(a, c, d) {
    ((a.M = 1), (a.A = sa(Ht(c))), (a.u = d), (a.R = !0), dp(a, null));
  }
  function dp(a, c) {
    ((a.F = Date.now()), ia(a), (a.B = Ht(a.A)));
    var d = a.B,
      y = a.S;
    (Array.isArray(y) || (y = [String(y)]),
      Ap(d.i, "t", y),
      (a.C = 0),
      (d = a.j.L),
      (a.h = new cp()),
      (a.g = $p(a.j, d ? c : null, !a.u)),
      a.P > 0 && (a.O = new PT(h(a.Y, a, a.g), a.P)),
      (c = a.V),
      (d = a.g),
      (y = a.ba));
    var P = "readystatechange";
    Array.isArray(P) || (P && (ep[0] = P.toString()), (P = ep));
    for (let x = 0; x < P.length; x++) {
      const j = Qf(d, P[x], y || c.handleEvent, !1, c.h || c);
      if (!j) break;
      c.g[j.key] = j;
    }
    ((c = a.J ? me(a.J) : {}),
      a.u
        ? (a.v || (a.v = "POST"),
          (c["Content-Type"] = "application/x-www-form-urlencoded"),
          a.g.ea(a.B, a.v, a.u, c))
        : ((a.v = "GET"), a.g.ea(a.B, a.v, null, c)),
      ds(),
      DT(a.i, a.v, a.B, a.l, a.S, a.u));
  }
  ((Nn.prototype.ba = function (a) {
    a = a.target;
    const c = this.O;
    c && Vn(a) == 3 ? c.j() : this.Y(a);
  }),
    (Nn.prototype.Y = function (a) {
      try {
        if (a == this.g)
          e: {
            const X = Vn(this.g),
              xe = this.g.ya(),
              le = this.g.ca();
            if (
              !(X < 3) &&
              (X != 3 || (this.g && (this.h.h || this.g.la() || Dp(this.g))))
            ) {
              (this.K ||
                X != 4 ||
                xe == 7 ||
                (xe == 8 || le <= 0 ? ds(3) : ds(2)),
                Fu(this));
              var c = this.g.ca();
              this.X = c;
              var d = bT(this);
              if (
                ((this.o = c == 200),
                VT(this.i, this.v, this.B, this.l, this.S, X, c),
                this.o)
              ) {
                if (this.U && !this.L) {
                  t: {
                    if (this.g) {
                      var y,
                        P = this.g;
                      if (
                        (y = P.g
                          ? P.g.getResponseHeader("X-HTTP-Initial-Response")
                          : null) &&
                        !w(y)
                      ) {
                        var x = y;
                        break t;
                      }
                    }
                    x = null;
                  }
                  if ((a = x))
                    (ri(
                      this.i,
                      this.l,
                      a,
                      "Initial handshake response via X-HTTP-Initial-Response",
                    ),
                      (this.L = !0),
                      Uu(this, a));
                  else {
                    ((this.o = !1), (this.m = 3), rt(12), Cr(this), gs(this));
                    break e;
                  }
                }
                if (this.R) {
                  a = !0;
                  let Me;
                  for (; !this.K && this.C < d.length; )
                    if (((Me = FT(this, d)), Me == Mu)) {
                      (X == 4 && ((this.m = 4), rt(14), (a = !1)),
                        ri(this.i, this.l, null, "[Incomplete Response]"));
                      break;
                    } else if (Me == hp) {
                      ((this.m = 4),
                        rt(15),
                        ri(this.i, this.l, d, "[Invalid Chunk]"),
                        (a = !1));
                      break;
                    } else (ri(this.i, this.l, Me, null), Uu(this, Me));
                  if (
                    (fp(this) &&
                      this.C != 0 &&
                      ((this.h.g = this.h.g.slice(this.C)), (this.C = 0)),
                    X != 4 ||
                      d.length != 0 ||
                      this.h.h ||
                      ((this.m = 1), rt(16), (a = !1)),
                    (this.o = this.o && a),
                    !a)
                  )
                    (ri(this.i, this.l, d, "[Invalid Chunked Response]"),
                      Cr(this),
                      gs(this));
                  else if (d.length > 0 && !this.W) {
                    this.W = !0;
                    var j = this.j;
                    j.g == this &&
                      j.aa &&
                      !j.P &&
                      (j.j.info(
                        "Great, no buffering proxy detected. Bytes received: " +
                          d.length,
                      ),
                      Gu(j),
                      (j.P = !0),
                      rt(11));
                  }
                } else (ri(this.i, this.l, d, null), Uu(this, d));
                (X == 4 && Cr(this),
                  this.o &&
                    !this.K &&
                    (X == 4 ? Up(this.j, this) : ((this.o = !1), ia(this))));
              } else
                (XT(this.g),
                  c == 400 && d.indexOf("Unknown SID") > 0
                    ? ((this.m = 3), rt(12))
                    : ((this.m = 0), rt(13)),
                  Cr(this),
                  gs(this));
            }
          }
      } catch {
      } finally {
      }
    }));
  function bT(a) {
    if (!fp(a)) return a.g.la();
    const c = Dp(a.g);
    if (c === "") return "";
    let d = "";
    const y = c.length,
      P = Vn(a.g) == 4;
    if (!a.h.i) {
      if (typeof TextDecoder > "u") return (Cr(a), gs(a), "");
      a.h.i = new o.TextDecoder();
    }
    for (let x = 0; x < y; x++)
      ((a.h.h = !0), (d += a.h.i.decode(c[x], { stream: !(P && x == y - 1) })));
    return ((c.length = 0), (a.h.g += d), (a.C = 0), a.h.g);
  }
  function fp(a) {
    return a.g ? a.v == "GET" && a.M != 2 && a.j.Aa : !1;
  }
  function FT(a, c) {
    var d = a.C,
      y = c.indexOf(
        `
`,
        d,
      );
    return y == -1
      ? Mu
      : ((d = Number(c.substring(d, y))),
        isNaN(d)
          ? hp
          : ((y += 1),
            y + d > c.length
              ? Mu
              : ((c = c.slice(y, y + d)), (a.C = y + d), c)));
  }
  Nn.prototype.cancel = function () {
    ((this.K = !0), Cr(this));
  };
  function ia(a) {
    ((a.T = Date.now() + a.H), pp(a, a.H));
  }
  function pp(a, c) {
    if (a.D != null) throw Error("WatchDog timer not null");
    a.D = fs(h(a.aa, a), c);
  }
  function Fu(a) {
    a.D && (o.clearTimeout(a.D), (a.D = null));
  }
  Nn.prototype.aa = function () {
    this.D = null;
    const a = Date.now();
    a - this.T >= 0
      ? (OT(this.i, this.B),
        this.M != 2 && (ds(), rt(17)),
        Cr(this),
        (this.m = 2),
        gs(this))
      : pp(this, this.T - a);
  };
  function gs(a) {
    a.j.I == 0 || a.K || Up(a.j, a);
  }
  function Cr(a) {
    Fu(a);
    var c = a.O;
    (c && typeof c.dispose == "function" && c.dispose(),
      (a.O = null),
      tp(a.V),
      a.g && ((c = a.g), (a.g = null), c.abort(), c.dispose()));
  }
  function Uu(a, c) {
    try {
      var d = a.j;
      if (d.I != 0 && (d.g == a || ju(d.h, a))) {
        if (!a.L && ju(d.h, a) && d.I == 3) {
          try {
            var y = d.Ba.g.parse(c);
          } catch {
            y = null;
          }
          if (Array.isArray(y) && y.length == 3) {
            var P = y;
            if (P[0] == 0) {
              e: if (!d.v) {
                if (d.g)
                  if (d.g.F + 3e3 < a.F) (ca(d), la(d));
                  else break e;
                (qu(d), rt(18));
              }
            } else
              ((d.xa = P[1]),
                0 < d.xa - d.K &&
                  P[2] < 37500 &&
                  d.F &&
                  d.A == 0 &&
                  !d.C &&
                  (d.C = fs(h(d.Va, d), 6e3)));
            yp(d.h) <= 1 && d.ta && (d.ta = void 0);
          } else kr(d, 11);
        } else if (((a.L || d.g == a) && ca(d), !w(c)))
          for (P = d.Ba.g.parse(c), c = 0; c < P.length; c++) {
            let le = P[c];
            const Me = le[0];
            if (!(Me <= d.K))
              if (((d.K = Me), (le = le[1]), d.I == 2))
                if (le[0] == "c") {
                  ((d.M = le[1]), (d.ba = le[2]));
                  const qt = le[3];
                  qt != null && ((d.ka = qt), d.j.info("VER=" + d.ka));
                  const Pr = le[4];
                  Pr != null && ((d.za = Pr), d.j.info("SVER=" + d.za));
                  const On = le[5];
                  (On != null &&
                    typeof On == "number" &&
                    On > 0 &&
                    ((y = 1.5 * On),
                    (d.O = y),
                    d.j.info("backChannelRequestTimeoutMs_=" + y)),
                    (y = d));
                  const Ln = a.g;
                  if (Ln) {
                    const da = Ln.g
                      ? Ln.g.getResponseHeader("X-Client-Wire-Protocol")
                      : null;
                    if (da) {
                      var x = y.h;
                      x.g ||
                        (da.indexOf("spdy") == -1 &&
                          da.indexOf("quic") == -1 &&
                          da.indexOf("h2") == -1) ||
                        ((x.j = x.l),
                        (x.g = new Set()),
                        x.h && (Bu(x, x.h), (x.h = null)));
                    }
                    if (y.G) {
                      const Ku = Ln.g
                        ? Ln.g.getResponseHeader("X-HTTP-Session-Id")
                        : null;
                      Ku && ((y.wa = Ku), he(y.J, y.G, Ku));
                    }
                  }
                  ((d.I = 3),
                    d.l && d.l.ra(),
                    d.aa &&
                      ((d.T = Date.now() - a.F),
                      d.j.info("Handshake RTT: " + d.T + "ms")),
                    (y = d));
                  var j = a;
                  if (((y.na = zp(y, y.L ? y.ba : null, y.W)), j.L)) {
                    _p(y.h, j);
                    var X = j,
                      xe = y.O;
                    (xe && (X.H = xe), X.D && (Fu(X), ia(X)), (y.g = j));
                  } else bp(y);
                  d.i.length > 0 && ua(d);
                } else (le[0] != "stop" && le[0] != "close") || kr(d, 7);
              else
                d.I == 3 &&
                  (le[0] == "stop" || le[0] == "close"
                    ? le[0] == "stop"
                      ? kr(d, 7)
                      : Hu(d)
                    : le[0] != "noop" && d.l && d.l.qa(le),
                  (d.A = 0));
          }
      }
      ds(4);
    } catch {}
  }
  var UT = class {
    constructor(a, c) {
      ((this.g = a), (this.map = c));
    }
  };
  function mp(a) {
    ((this.l = a || 10),
      o.PerformanceNavigationTiming
        ? ((a = o.performance.getEntriesByType("navigation")),
          (a =
            a.length > 0 &&
            (a[0].nextHopProtocol == "hq" || a[0].nextHopProtocol == "h2")))
        : (a = !!(
            o.chrome &&
            o.chrome.loadTimes &&
            o.chrome.loadTimes() &&
            o.chrome.loadTimes().wasFetchedViaSpdy
          )),
      (this.j = a ? this.l : 1),
      (this.g = null),
      this.j > 1 && (this.g = new Set()),
      (this.h = null),
      (this.i = []));
  }
  function gp(a) {
    return a.h ? !0 : a.g ? a.g.size >= a.j : !1;
  }
  function yp(a) {
    return a.h ? 1 : a.g ? a.g.size : 0;
  }
  function ju(a, c) {
    return a.h ? a.h == c : a.g ? a.g.has(c) : !1;
  }
  function Bu(a, c) {
    a.g ? a.g.add(c) : (a.h = c);
  }
  function _p(a, c) {
    a.h && a.h == c ? (a.h = null) : a.g && a.g.has(c) && a.g.delete(c);
  }
  mp.prototype.cancel = function () {
    if (((this.i = vp(this)), this.h)) (this.h.cancel(), (this.h = null));
    else if (this.g && this.g.size !== 0) {
      for (const a of this.g.values()) a.cancel();
      this.g.clear();
    }
  };
  function vp(a) {
    if (a.h != null) return a.i.concat(a.h.G);
    if (a.g != null && a.g.size !== 0) {
      let c = a.i;
      for (const d of a.g.values()) c = c.concat(d.G);
      return c;
    }
    return I(a.i);
  }
  var Ep = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$",
  );
  function jT(a, c) {
    if (a) {
      a = a.split("&");
      for (let d = 0; d < a.length; d++) {
        const y = a[d].indexOf("=");
        let P,
          x = null;
        (y >= 0
          ? ((P = a[d].substring(0, y)), (x = a[d].substring(y + 1)))
          : (P = a[d]),
          c(P, x ? decodeURIComponent(x.replace(/\+/g, " ")) : ""));
      }
    }
  }
  function xn(a) {
    ((this.g = this.o = this.j = ""),
      (this.u = null),
      (this.m = this.h = ""),
      (this.l = !1));
    let c;
    a instanceof xn
      ? ((this.l = a.l),
        ys(this, a.j),
        (this.o = a.o),
        (this.g = a.g),
        _s(this, a.u),
        (this.h = a.h),
        zu(this, Cp(a.i)),
        (this.m = a.m))
      : a && (c = String(a).match(Ep))
        ? ((this.l = !1),
          ys(this, c[1] || "", !0),
          (this.o = vs(c[2] || "")),
          (this.g = vs(c[3] || "", !0)),
          _s(this, c[4]),
          (this.h = vs(c[5] || "", !0)),
          zu(this, c[6] || "", !0),
          (this.m = vs(c[7] || "")))
        : ((this.l = !1), (this.i = new ws(null, this.l)));
  }
  ((xn.prototype.toString = function () {
    const a = [];
    var c = this.j;
    c && a.push(Es(c, wp, !0), ":");
    var d = this.g;
    return (
      (d || c == "file") &&
        (a.push("//"),
        (c = this.o) && a.push(Es(c, wp, !0), "@"),
        a.push(ms(d).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        (d = this.u),
        d != null && a.push(":", String(d))),
      (d = this.h) &&
        (this.g && d.charAt(0) != "/" && a.push("/"),
        a.push(Es(d, d.charAt(0) == "/" ? $T : zT, !0))),
      (d = this.i.toString()) && a.push("?", d),
      (d = this.m) && a.push("#", Es(d, HT)),
      a.join("")
    );
  }),
    (xn.prototype.resolve = function (a) {
      const c = Ht(this);
      let d = !!a.j;
      (d ? ys(c, a.j) : (d = !!a.o),
        d ? (c.o = a.o) : (d = !!a.g),
        d ? (c.g = a.g) : (d = a.u != null));
      var y = a.h;
      if (d) _s(c, a.u);
      else if ((d = !!a.h)) {
        if (y.charAt(0) != "/")
          if (this.g && !this.h) y = "/" + y;
          else {
            var P = c.h.lastIndexOf("/");
            P != -1 && (y = c.h.slice(0, P + 1) + y);
          }
        if (((P = y), P == ".." || P == ".")) y = "";
        else if (P.indexOf("./") != -1 || P.indexOf("/.") != -1) {
          ((y = P.lastIndexOf("/", 0) == 0), (P = P.split("/")));
          const x = [];
          for (let j = 0; j < P.length; ) {
            const X = P[j++];
            X == "."
              ? y && j == P.length && x.push("")
              : X == ".."
                ? ((x.length > 1 || (x.length == 1 && x[0] != "")) && x.pop(),
                  y && j == P.length && x.push(""))
                : (x.push(X), (y = !0));
          }
          y = x.join("/");
        } else y = P;
      }
      return (
        d ? (c.h = y) : (d = a.i.toString() !== ""),
        d ? zu(c, Cp(a.i)) : (d = !!a.m),
        d && (c.m = a.m),
        c
      );
    }));
  function Ht(a) {
    return new xn(a);
  }
  function ys(a, c, d) {
    ((a.j = d ? vs(c, !0) : c), a.j && (a.j = a.j.replace(/:$/, "")));
  }
  function _s(a, c) {
    if (c) {
      if (((c = Number(c)), isNaN(c) || c < 0))
        throw Error("Bad port number " + c);
      a.u = c;
    } else a.u = null;
  }
  function zu(a, c, d) {
    c instanceof ws
      ? ((a.i = c), qT(a.i, a.l))
      : (d || (c = Es(c, WT)), (a.i = new ws(c, a.l)));
  }
  function he(a, c, d) {
    a.i.set(c, d);
  }
  function sa(a) {
    return (
      he(
        a,
        "zx",
        Math.floor(Math.random() * 2147483648).toString(36) +
          Math.abs(
            Math.floor(Math.random() * 2147483648) ^ Date.now(),
          ).toString(36),
      ),
      a
    );
  }
  function vs(a, c) {
    return a
      ? c
        ? decodeURI(a.replace(/%25/g, "%2525"))
        : decodeURIComponent(a)
      : "";
  }
  function Es(a, c, d) {
    return typeof a == "string"
      ? ((a = encodeURI(a).replace(c, BT)),
        d && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        a)
      : null;
  }
  function BT(a) {
    return (
      (a = a.charCodeAt(0)),
      "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16)
    );
  }
  var wp = /[#\/\?@]/g,
    zT = /[#\?:]/g,
    $T = /[#\?]/g,
    WT = /[#\?@]/g,
    HT = /#/g;
  function ws(a, c) {
    ((this.h = this.g = null), (this.i = a || null), (this.j = !!c));
  }
  function Rr(a) {
    a.g ||
      ((a.g = new Map()),
      (a.h = 0),
      a.i &&
        jT(a.i, function (c, d) {
          a.add(decodeURIComponent(c.replace(/\+/g, " ")), d);
        }));
  }
  ((t = ws.prototype),
    (t.add = function (a, c) {
      (Rr(this), (this.i = null), (a = ii(this, a)));
      let d = this.g.get(a);
      return (d || this.g.set(a, (d = [])), d.push(c), (this.h += 1), this);
    }));
  function Tp(a, c) {
    (Rr(a),
      (c = ii(a, c)),
      a.g.has(c) && ((a.i = null), (a.h -= a.g.get(c).length), a.g.delete(c)));
  }
  function Ip(a, c) {
    return (Rr(a), (c = ii(a, c)), a.g.has(c));
  }
  t.forEach = function (a, c) {
    (Rr(this),
      this.g.forEach(function (d, y) {
        d.forEach(function (P) {
          a.call(c, P, y, this);
        }, this);
      }, this));
  };
  function Sp(a, c) {
    Rr(a);
    let d = [];
    if (typeof c == "string") Ip(a, c) && (d = d.concat(a.g.get(ii(a, c))));
    else
      for (a = Array.from(a.g.values()), c = 0; c < a.length; c++)
        d = d.concat(a[c]);
    return d;
  }
  ((t.set = function (a, c) {
    return (
      Rr(this),
      (this.i = null),
      (a = ii(this, a)),
      Ip(this, a) && (this.h -= this.g.get(a).length),
      this.g.set(a, [c]),
      (this.h += 1),
      this
    );
  }),
    (t.get = function (a, c) {
      return a ? ((a = Sp(this, a)), a.length > 0 ? String(a[0]) : c) : c;
    }));
  function Ap(a, c, d) {
    (Tp(a, c),
      d.length > 0 &&
        ((a.i = null), a.g.set(ii(a, c), I(d)), (a.h += d.length)));
  }
  t.toString = function () {
    if (this.i) return this.i;
    if (!this.g) return "";
    const a = [],
      c = Array.from(this.g.keys());
    for (let y = 0; y < c.length; y++) {
      var d = c[y];
      const P = ms(d);
      d = Sp(this, d);
      for (let x = 0; x < d.length; x++) {
        let j = P;
        (d[x] !== "" && (j += "=" + ms(d[x])), a.push(j));
      }
    }
    return (this.i = a.join("&"));
  };
  function Cp(a) {
    const c = new ws();
    return ((c.i = a.i), a.g && ((c.g = new Map(a.g)), (c.h = a.h)), c);
  }
  function ii(a, c) {
    return ((c = String(c)), a.j && (c = c.toLowerCase()), c);
  }
  function qT(a, c) {
    (c &&
      !a.j &&
      (Rr(a),
      (a.i = null),
      a.g.forEach(function (d, y) {
        const P = y.toLowerCase();
        y != P && (Tp(this, y), Ap(this, P, d));
      }, a)),
      (a.j = c));
  }
  function GT(a, c) {
    const d = new ps();
    if (o.Image) {
      const y = new Image();
      ((y.onload = f(Dn, d, "TestLoadImage: loaded", !0, c, y)),
        (y.onerror = f(Dn, d, "TestLoadImage: error", !1, c, y)),
        (y.onabort = f(Dn, d, "TestLoadImage: abort", !1, c, y)),
        (y.ontimeout = f(Dn, d, "TestLoadImage: timeout", !1, c, y)),
        o.setTimeout(function () {
          y.ontimeout && y.ontimeout();
        }, 1e4),
        (y.src = a));
    } else c(!1);
  }
  function KT(a, c) {
    const d = new ps(),
      y = new AbortController(),
      P = setTimeout(() => {
        (y.abort(), Dn(d, "TestPingServer: timeout", !1, c));
      }, 1e4);
    fetch(a, { signal: y.signal })
      .then((x) => {
        (clearTimeout(P),
          x.ok
            ? Dn(d, "TestPingServer: ok", !0, c)
            : Dn(d, "TestPingServer: server error", !1, c));
      })
      .catch(() => {
        (clearTimeout(P), Dn(d, "TestPingServer: error", !1, c));
      });
  }
  function Dn(a, c, d, y, P) {
    try {
      (P &&
        ((P.onload = null),
        (P.onerror = null),
        (P.onabort = null),
        (P.ontimeout = null)),
        y(d));
    } catch {}
  }
  function QT() {
    this.g = new xT();
  }
  function $u(a) {
    ((this.i = a.Sb || null), (this.h = a.ab || !1));
  }
  (p($u, np),
    ($u.prototype.g = function () {
      return new oa(this.i, this.h);
    }));
  function oa(a, c) {
    (Ge.call(this),
      (this.H = a),
      (this.o = c),
      (this.m = void 0),
      (this.status = this.readyState = 0),
      (this.responseType =
        this.responseText =
        this.response =
        this.statusText =
          ""),
      (this.onreadystatechange = null),
      (this.A = new Headers()),
      (this.h = null),
      (this.F = "GET"),
      (this.D = ""),
      (this.g = !1),
      (this.B = this.j = this.l = null),
      (this.v = new AbortController()));
  }
  (p(oa, Ge),
    (t = oa.prototype),
    (t.open = function (a, c) {
      if (this.readyState != 0)
        throw (this.abort(), Error("Error reopening a connection"));
      ((this.F = a), (this.D = c), (this.readyState = 1), Is(this));
    }),
    (t.send = function (a) {
      if (this.readyState != 1)
        throw (this.abort(), Error("need to call open() first. "));
      if (this.v.signal.aborted)
        throw (this.abort(), Error("Request was aborted."));
      this.g = !0;
      const c = {
        headers: this.A,
        method: this.F,
        credentials: this.m,
        cache: void 0,
        signal: this.v.signal,
      };
      (a && (c.body = a),
        (this.H || o)
          .fetch(new Request(this.D, c))
          .then(this.Pa.bind(this), this.ga.bind(this)));
    }),
    (t.abort = function () {
      ((this.response = this.responseText = ""),
        (this.A = new Headers()),
        (this.status = 0),
        this.v.abort(),
        this.j && this.j.cancel("Request was aborted.").catch(() => {}),
        this.readyState >= 1 &&
          this.g &&
          this.readyState != 4 &&
          ((this.g = !1), Ts(this)),
        (this.readyState = 0));
    }),
    (t.Pa = function (a) {
      if (
        this.g &&
        ((this.l = a),
        this.h ||
          ((this.status = this.l.status),
          (this.statusText = this.l.statusText),
          (this.h = a.headers),
          (this.readyState = 2),
          Is(this)),
        this.g && ((this.readyState = 3), Is(this), this.g))
      )
        if (this.responseType === "arraybuffer")
          a.arrayBuffer().then(this.Na.bind(this), this.ga.bind(this));
        else if (typeof o.ReadableStream < "u" && "body" in a) {
          if (((this.j = a.body.getReader()), this.o)) {
            if (this.responseType)
              throw Error(
                'responseType must be empty for "streamBinaryChunks" mode responses.',
              );
            this.response = [];
          } else
            ((this.response = this.responseText = ""),
              (this.B = new TextDecoder()));
          Rp(this);
        } else a.text().then(this.Oa.bind(this), this.ga.bind(this));
    }));
  function Rp(a) {
    a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a));
  }
  ((t.Ma = function (a) {
    if (this.g) {
      if (this.o && a.value) this.response.push(a.value);
      else if (!this.o) {
        var c = a.value ? a.value : new Uint8Array(0);
        (c = this.B.decode(c, { stream: !a.done })) &&
          (this.response = this.responseText += c);
      }
      (a.done ? Ts(this) : Is(this), this.readyState == 3 && Rp(this));
    }
  }),
    (t.Oa = function (a) {
      this.g && ((this.response = this.responseText = a), Ts(this));
    }),
    (t.Na = function (a) {
      this.g && ((this.response = a), Ts(this));
    }),
    (t.ga = function () {
      this.g && Ts(this);
    }));
  function Ts(a) {
    ((a.readyState = 4), (a.l = null), (a.j = null), (a.B = null), Is(a));
  }
  ((t.setRequestHeader = function (a, c) {
    this.A.append(a, c);
  }),
    (t.getResponseHeader = function (a) {
      return (this.h && this.h.get(a.toLowerCase())) || "";
    }),
    (t.getAllResponseHeaders = function () {
      if (!this.h) return "";
      const a = [],
        c = this.h.entries();
      for (var d = c.next(); !d.done; )
        ((d = d.value), a.push(d[0] + ": " + d[1]), (d = c.next()));
      return a.join(`\r
`);
    }));
  function Is(a) {
    a.onreadystatechange && a.onreadystatechange.call(a);
  }
  Object.defineProperty(oa.prototype, "withCredentials", {
    get: function () {
      return this.m === "include";
    },
    set: function (a) {
      this.m = a ? "include" : "same-origin";
    },
  });
  function kp(a) {
    let c = "";
    return (
      K(a, function (d, y) {
        ((c += y),
          (c += ":"),
          (c += d),
          (c += `\r
`));
      }),
      c
    );
  }
  function Wu(a, c, d) {
    e: {
      for (y in d) {
        var y = !1;
        break e;
      }
      y = !0;
    }
    y || ((d = kp(d)), typeof a == "string" ? d != null && ms(d) : he(a, c, d));
  }
  function we(a) {
    (Ge.call(this),
      (this.headers = new Map()),
      (this.L = a || null),
      (this.h = !1),
      (this.g = null),
      (this.D = ""),
      (this.o = 0),
      (this.l = ""),
      (this.j = this.B = this.v = this.A = !1),
      (this.m = null),
      (this.F = ""),
      (this.H = !1));
  }
  p(we, Ge);
  var YT = /^https?$/i,
    JT = ["POST", "PUT"];
  ((t = we.prototype),
    (t.Fa = function (a) {
      this.H = a;
    }),
    (t.ea = function (a, c, d, y) {
      if (this.g)
        throw Error(
          "[goog.net.XhrIo] Object is active with another request=" +
            this.D +
            "; newUri=" +
            a,
        );
      ((c = c ? c.toUpperCase() : "GET"),
        (this.D = a),
        (this.l = ""),
        (this.o = 0),
        (this.A = !1),
        (this.h = !0),
        (this.g = this.L ? this.L.g() : up.g()),
        (this.g.onreadystatechange = m(h(this.Ca, this))));
      try {
        ((this.B = !0), this.g.open(c, String(a), !0), (this.B = !1));
      } catch (x) {
        Pp(this, x);
        return;
      }
      if (((a = d || ""), (d = new Map(this.headers)), y))
        if (Object.getPrototypeOf(y) === Object.prototype)
          for (var P in y) d.set(P, y[P]);
        else if (typeof y.keys == "function" && typeof y.get == "function")
          for (const x of y.keys()) d.set(x, y.get(x));
        else throw Error("Unknown input type for opt_headers: " + String(y));
      ((y = Array.from(d.keys()).find(
        (x) => x.toLowerCase() == "content-type",
      )),
        (P = o.FormData && a instanceof o.FormData),
        !(Array.prototype.indexOf.call(JT, c, void 0) >= 0) ||
          y ||
          P ||
          d.set(
            "Content-Type",
            "application/x-www-form-urlencoded;charset=utf-8",
          ));
      for (const [x, j] of d) this.g.setRequestHeader(x, j);
      (this.F && (this.g.responseType = this.F),
        "withCredentials" in this.g &&
          this.g.withCredentials !== this.H &&
          (this.g.withCredentials = this.H));
      try {
        (this.m && (clearTimeout(this.m), (this.m = null)),
          (this.v = !0),
          this.g.send(a),
          (this.v = !1));
      } catch (x) {
        Pp(this, x);
      }
    }));
  function Pp(a, c) {
    ((a.h = !1),
      a.g && ((a.j = !0), a.g.abort(), (a.j = !1)),
      (a.l = c),
      (a.o = 5),
      Np(a),
      aa(a));
  }
  function Np(a) {
    a.A || ((a.A = !0), nt(a, "complete"), nt(a, "error"));
  }
  ((t.abort = function (a) {
    this.g &&
      this.h &&
      ((this.h = !1),
      (this.j = !0),
      this.g.abort(),
      (this.j = !1),
      (this.o = a || 7),
      nt(this, "complete"),
      nt(this, "abort"),
      aa(this));
  }),
    (t.N = function () {
      (this.g &&
        (this.h &&
          ((this.h = !1), (this.j = !0), this.g.abort(), (this.j = !1)),
        aa(this, !0)),
        we.Z.N.call(this));
    }),
    (t.Ca = function () {
      this.u || (this.B || this.v || this.j ? xp(this) : this.Xa());
    }),
    (t.Xa = function () {
      xp(this);
    }));
  function xp(a) {
    if (a.h && typeof s < "u") {
      if (a.v && Vn(a) == 4) setTimeout(a.Ca.bind(a), 0);
      else if ((nt(a, "readystatechange"), Vn(a) == 4)) {
        a.h = !1;
        try {
          const x = a.ca();
          e: switch (x) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var c = !0;
              break e;
            default:
              c = !1;
          }
          var d;
          if (!(d = c)) {
            var y;
            if ((y = x === 0)) {
              let j = String(a.D).match(Ep)[1] || null;
              (!j &&
                o.self &&
                o.self.location &&
                (j = o.self.location.protocol.slice(0, -1)),
                (y = !YT.test(j ? j.toLowerCase() : "")));
            }
            d = y;
          }
          if (d) (nt(a, "complete"), nt(a, "success"));
          else {
            a.o = 6;
            try {
              var P = Vn(a) > 2 ? a.g.statusText : "";
            } catch {
              P = "";
            }
            ((a.l = P + " [" + a.ca() + "]"), Np(a));
          }
        } finally {
          aa(a);
        }
      }
    }
  }
  function aa(a, c) {
    if (a.g) {
      a.m && (clearTimeout(a.m), (a.m = null));
      const d = a.g;
      ((a.g = null), c || nt(a, "ready"));
      try {
        d.onreadystatechange = null;
      } catch {}
    }
  }
  t.isActive = function () {
    return !!this.g;
  };
  function Vn(a) {
    return a.g ? a.g.readyState : 0;
  }
  ((t.ca = function () {
    try {
      return Vn(this) > 2 ? this.g.status : -1;
    } catch {
      return -1;
    }
  }),
    (t.la = function () {
      try {
        return this.g ? this.g.responseText : "";
      } catch {
        return "";
      }
    }),
    (t.La = function (a) {
      if (this.g) {
        var c = this.g.responseText;
        return (a && c.indexOf(a) == 0 && (c = c.substring(a.length)), NT(c));
      }
    }));
  function Dp(a) {
    try {
      if (!a.g) return null;
      if ("response" in a.g) return a.g.response;
      switch (a.F) {
        case "":
        case "text":
          return a.g.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in a.g)
            return a.g.mozResponseArrayBuffer;
      }
      return null;
    } catch {
      return null;
    }
  }
  function XT(a) {
    const c = {};
    a = ((a.g && Vn(a) >= 2 && a.g.getAllResponseHeaders()) || "").split(`\r
`);
    for (let y = 0; y < a.length; y++) {
      if (w(a[y])) continue;
      var d = MT(a[y]);
      const P = d[0];
      if (((d = d[1]), typeof d != "string")) continue;
      d = d.trim();
      const x = c[P] || [];
      ((c[P] = x), x.push(d));
    }
    J(c, function (y) {
      return y.join(", ");
    });
  }
  ((t.ya = function () {
    return this.o;
  }),
    (t.Ha = function () {
      return typeof this.l == "string" ? this.l : String(this.l);
    }));
  function Ss(a, c, d) {
    return (d && d.internalChannelParams && d.internalChannelParams[a]) || c;
  }
  function Vp(a) {
    ((this.za = 0),
      (this.i = []),
      (this.j = new ps()),
      (this.ba =
        this.na =
        this.J =
        this.W =
        this.g =
        this.wa =
        this.G =
        this.H =
        this.u =
        this.U =
        this.o =
          null),
      (this.Ya = this.V = 0),
      (this.Sa = Ss("failFast", !1, a)),
      (this.F = this.C = this.v = this.m = this.l = null),
      (this.X = !0),
      (this.xa = this.K = -1),
      (this.Y = this.A = this.D = 0),
      (this.Qa = Ss("baseRetryDelayMs", 5e3, a)),
      (this.Za = Ss("retryDelaySeedMs", 1e4, a)),
      (this.Ta = Ss("forwardChannelMaxRetries", 2, a)),
      (this.va = Ss("forwardChannelRequestTimeoutMs", 2e4, a)),
      (this.ma = (a && a.xmlHttpFactory) || void 0),
      (this.Ua = (a && a.Rb) || void 0),
      (this.Aa = (a && a.useFetchStreams) || !1),
      (this.O = void 0),
      (this.L = (a && a.supportsCrossDomainXhr) || !1),
      (this.M = ""),
      (this.h = new mp(a && a.concurrentRequestLimit)),
      (this.Ba = new QT()),
      (this.S = (a && a.fastHandshake) || !1),
      (this.R = (a && a.encodeInitMessageHeaders) || !1),
      this.S && this.R && (this.R = !1),
      (this.Ra = (a && a.Pb) || !1),
      a && a.ua && this.j.ua(),
      a && a.forceLongPolling && (this.X = !1),
      (this.aa = (!this.S && this.X && a && a.detectBufferingProxy) || !1),
      (this.ia = void 0),
      a &&
        a.longPollingTimeout &&
        a.longPollingTimeout > 0 &&
        (this.ia = a.longPollingTimeout),
      (this.ta = void 0),
      (this.T = 0),
      (this.P = !1),
      (this.ja = this.B = null));
  }
  ((t = Vp.prototype),
    (t.ka = 8),
    (t.I = 1),
    (t.connect = function (a, c, d, y) {
      (rt(0),
        (this.W = a),
        (this.H = c || {}),
        d && y !== void 0 && ((this.H.OSID = d), (this.H.OAID = y)),
        (this.F = this.X),
        (this.J = zp(this, null, this.W)),
        ua(this));
    }));
  function Hu(a) {
    if ((Op(a), a.I == 3)) {
      var c = a.V++,
        d = Ht(a.J);
      if (
        (he(d, "SID", a.M),
        he(d, "RID", c),
        he(d, "TYPE", "terminate"),
        As(a, d),
        (c = new Nn(a, a.j, c)),
        (c.M = 2),
        (c.A = sa(Ht(d))),
        (d = !1),
        o.navigator && o.navigator.sendBeacon)
      )
        try {
          d = o.navigator.sendBeacon(c.A.toString(), "");
        } catch {}
      (!d && o.Image && ((new Image().src = c.A), (d = !0)),
        d || ((c.g = $p(c.j, null)), c.g.ea(c.A)),
        (c.F = Date.now()),
        ia(c));
    }
    Bp(a);
  }
  function la(a) {
    a.g && (Gu(a), a.g.cancel(), (a.g = null));
  }
  function Op(a) {
    (la(a),
      a.v && (o.clearTimeout(a.v), (a.v = null)),
      ca(a),
      a.h.cancel(),
      a.m && (typeof a.m == "number" && o.clearTimeout(a.m), (a.m = null)));
  }
  function ua(a) {
    if (!gp(a.h) && !a.m) {
      a.m = !0;
      var c = a.Ea;
      (L || g(), V || (L(), (V = !0)), _.add(c, a), (a.D = 0));
    }
  }
  function ZT(a, c) {
    return yp(a.h) >= a.h.j - (a.m ? 1 : 0)
      ? !1
      : a.m
        ? ((a.i = c.G.concat(a.i)), !0)
        : a.I == 1 || a.I == 2 || a.D >= (a.Sa ? 0 : a.Ta)
          ? !1
          : ((a.m = fs(h(a.Ea, a, c), jp(a, a.D))), a.D++, !0);
  }
  t.Ea = function (a) {
    if (this.m)
      if (((this.m = null), this.I == 1)) {
        if (!a) {
          ((this.V = Math.floor(Math.random() * 1e5)), (a = this.V++));
          const P = new Nn(this, this.j, a);
          let x = this.o;
          if (
            (this.U && (x ? ((x = me(x)), Ir(x, this.U)) : (x = this.U)),
            this.u !== null || this.R || ((P.J = x), (x = null)),
            this.S)
          )
            e: {
              for (var c = 0, d = 0; d < this.i.length; d++) {
                t: {
                  var y = this.i[d];
                  if (
                    "__data__" in y.map &&
                    ((y = y.map.__data__), typeof y == "string")
                  ) {
                    y = y.length;
                    break t;
                  }
                  y = void 0;
                }
                if (y === void 0) break;
                if (((c += y), c > 4096)) {
                  c = d;
                  break e;
                }
                if (c === 4096 || d === this.i.length - 1) {
                  c = d + 1;
                  break e;
                }
              }
              c = 1e3;
            }
          else c = 1e3;
          ((c = Mp(this, P, c)),
            (d = Ht(this.J)),
            he(d, "RID", a),
            he(d, "CVER", 22),
            this.G && he(d, "X-HTTP-Session-Id", this.G),
            As(this, d),
            x &&
              (this.R
                ? (c = "headers=" + ms(kp(x)) + "&" + c)
                : this.u && Wu(d, this.u, x)),
            Bu(this.h, P),
            this.Ra && he(d, "TYPE", "init"),
            this.S
              ? (he(d, "$req", c),
                he(d, "SID", "null"),
                (P.U = !0),
                bu(P, d, null))
              : bu(P, d, c),
            (this.I = 2));
        }
      } else
        this.I == 3 &&
          (a ? Lp(this, a) : this.i.length == 0 || gp(this.h) || Lp(this));
  };
  function Lp(a, c) {
    var d;
    c ? (d = c.l) : (d = a.V++);
    const y = Ht(a.J);
    (he(y, "SID", a.M),
      he(y, "RID", d),
      he(y, "AID", a.K),
      As(a, y),
      a.u && a.o && Wu(y, a.u, a.o),
      (d = new Nn(a, a.j, d, a.D + 1)),
      a.u === null && (d.J = a.o),
      c && (a.i = c.G.concat(a.i)),
      (c = Mp(a, d, 1e3)),
      (d.H = Math.round(a.va * 0.5) + Math.round(a.va * 0.5 * Math.random())),
      Bu(a.h, d),
      bu(d, y, c));
  }
  function As(a, c) {
    (a.H &&
      K(a.H, function (d, y) {
        he(c, y, d);
      }),
      a.l &&
        K({}, function (d, y) {
          he(c, y, d);
        }));
  }
  function Mp(a, c, d) {
    d = Math.min(a.i.length, d);
    const y = a.l ? h(a.l.Ka, a.l, a) : null;
    e: {
      var P = a.i;
      let X = -1;
      for (;;) {
        const xe = ["count=" + d];
        X == -1
          ? d > 0
            ? ((X = P[0].g), xe.push("ofs=" + X))
            : (X = 0)
          : xe.push("ofs=" + X);
        let le = !0;
        for (let Me = 0; Me < d; Me++) {
          var x = P[Me].g;
          const qt = P[Me].map;
          if (((x -= X), x < 0)) ((X = Math.max(0, P[Me].g - 100)), (le = !1));
          else
            try {
              x = "req" + x + "_" || "";
              try {
                var j = qt instanceof Map ? qt : Object.entries(qt);
                for (const [Pr, On] of j) {
                  let Ln = On;
                  (l(On) && (Ln = Du(On)),
                    xe.push(x + Pr + "=" + encodeURIComponent(Ln)));
                }
              } catch (Pr) {
                throw (
                  xe.push(x + "type=" + encodeURIComponent("_badmap")),
                  Pr
                );
              }
            } catch {
              y && y(qt);
            }
        }
        if (le) {
          j = xe.join("&");
          break e;
        }
      }
      j = void 0;
    }
    return ((a = a.i.splice(0, d)), (c.G = a), j);
  }
  function bp(a) {
    if (!a.g && !a.v) {
      a.Y = 1;
      var c = a.Da;
      (L || g(), V || (L(), (V = !0)), _.add(c, a), (a.A = 0));
    }
  }
  function qu(a) {
    return a.g || a.v || a.A >= 3
      ? !1
      : (a.Y++, (a.v = fs(h(a.Da, a), jp(a, a.A))), a.A++, !0);
  }
  ((t.Da = function () {
    if (
      ((this.v = null),
      Fp(this),
      this.aa && !(this.P || this.g == null || this.T <= 0))
    ) {
      var a = 4 * this.T;
      (this.j.info("BP detection timer enabled: " + a),
        (this.B = fs(h(this.Wa, this), a)));
    }
  }),
    (t.Wa = function () {
      this.B &&
        ((this.B = null),
        this.j.info("BP detection timeout reached."),
        this.j.info("Buffering proxy detected and switch to long-polling!"),
        (this.F = !1),
        (this.P = !0),
        rt(10),
        la(this),
        Fp(this));
    }));
  function Gu(a) {
    a.B != null && (o.clearTimeout(a.B), (a.B = null));
  }
  function Fp(a) {
    ((a.g = new Nn(a, a.j, "rpc", a.Y)),
      a.u === null && (a.g.J = a.o),
      (a.g.P = 0));
    var c = Ht(a.na);
    (he(c, "RID", "rpc"),
      he(c, "SID", a.M),
      he(c, "AID", a.K),
      he(c, "CI", a.F ? "0" : "1"),
      !a.F && a.ia && he(c, "TO", a.ia),
      he(c, "TYPE", "xmlhttp"),
      As(a, c),
      a.u && a.o && Wu(c, a.u, a.o),
      a.O && (a.g.H = a.O));
    var d = a.g;
    ((a = a.ba),
      (d.M = 1),
      (d.A = sa(Ht(c))),
      (d.u = null),
      (d.R = !0),
      dp(d, a));
  }
  t.Va = function () {
    this.C != null && ((this.C = null), la(this), qu(this), rt(19));
  };
  function ca(a) {
    a.C != null && (o.clearTimeout(a.C), (a.C = null));
  }
  function Up(a, c) {
    var d = null;
    if (a.g == c) {
      (ca(a), Gu(a), (a.g = null));
      var y = 2;
    } else if (ju(a.h, c)) ((d = c.G), _p(a.h, c), (y = 1));
    else return;
    if (a.I != 0) {
      if (c.o)
        if (y == 1) {
          ((d = c.u ? c.u.length : 0), (c = Date.now() - c.F));
          var P = a.D;
          ((y = na()), nt(y, new ap(y, d)), ua(a));
        } else bp(a);
      else if (
        ((P = c.m),
        P == 3 ||
          (P == 0 && c.X > 0) ||
          !((y == 1 && ZT(a, c)) || (y == 2 && qu(a))))
      )
        switch ((d && d.length > 0 && ((c = a.h), (c.i = c.i.concat(d))), P)) {
          case 1:
            kr(a, 5);
            break;
          case 4:
            kr(a, 10);
            break;
          case 3:
            kr(a, 6);
            break;
          default:
            kr(a, 2);
        }
    }
  }
  function jp(a, c) {
    let d = a.Qa + Math.floor(Math.random() * a.Za);
    return (a.isActive() || (d *= 2), d * c);
  }
  function kr(a, c) {
    if ((a.j.info("Error code " + c), c == 2)) {
      var d = h(a.bb, a),
        y = a.Ua;
      const P = !y;
      ((y = new xn(y || "//www.google.com/images/cleardot.gif")),
        (o.location && o.location.protocol == "http") || ys(y, "https"),
        sa(y),
        P ? GT(y.toString(), d) : KT(y.toString(), d));
    } else rt(2);
    ((a.I = 0), a.l && a.l.pa(c), Bp(a), Op(a));
  }
  t.bb = function (a) {
    a
      ? (this.j.info("Successfully pinged google.com"), rt(2))
      : (this.j.info("Failed to ping google.com"), rt(1));
  };
  function Bp(a) {
    if (((a.I = 0), (a.ja = []), a.l)) {
      const c = vp(a.h);
      ((c.length != 0 || a.i.length != 0) &&
        (N(a.ja, c),
        N(a.ja, a.i),
        (a.h.i.length = 0),
        I(a.i),
        (a.i.length = 0)),
        a.l.oa());
    }
  }
  function zp(a, c, d) {
    var y = d instanceof xn ? Ht(d) : new xn(d);
    if (y.g != "") (c && (y.g = c + "." + y.g), _s(y, y.u));
    else {
      var P = o.location;
      ((y = P.protocol),
        (c = c ? c + "." + P.hostname : P.hostname),
        (P = +P.port));
      const x = new xn(null);
      (y && ys(x, y), c && (x.g = c), P && _s(x, P), d && (x.h = d), (y = x));
    }
    return (
      (d = a.G),
      (c = a.wa),
      d && c && he(y, d, c),
      he(y, "VER", a.ka),
      As(a, y),
      y
    );
  }
  function $p(a, c, d) {
    if (c && !a.L)
      throw Error("Can't create secondary domain capable XhrIo object.");
    return (
      (c = a.Aa && !a.ma ? new we(new $u({ ab: d })) : new we(a.ma)),
      c.Fa(a.L),
      c
    );
  }
  t.isActive = function () {
    return !!this.l && this.l.isActive(this);
  };
  function Wp() {}
  ((t = Wp.prototype),
    (t.ra = function () {}),
    (t.qa = function () {}),
    (t.pa = function () {}),
    (t.oa = function () {}),
    (t.isActive = function () {
      return !0;
    }),
    (t.Ka = function () {}));
  function ha() {}
  ha.prototype.g = function (a, c) {
    return new mt(a, c);
  };
  function mt(a, c) {
    (Ge.call(this),
      (this.g = new Vp(c)),
      (this.l = a),
      (this.h = (c && c.messageUrlParams) || null),
      (a = (c && c.messageHeaders) || null),
      c &&
        c.clientProtocolHeaderRequired &&
        (a
          ? (a["X-Client-Protocol"] = "webchannel")
          : (a = { "X-Client-Protocol": "webchannel" })),
      (this.g.o = a),
      (a = (c && c.initMessageHeaders) || null),
      c &&
        c.messageContentType &&
        (a
          ? (a["X-WebChannel-Content-Type"] = c.messageContentType)
          : (a = { "X-WebChannel-Content-Type": c.messageContentType })),
      c &&
        c.sa &&
        (a
          ? (a["X-WebChannel-Client-Profile"] = c.sa)
          : (a = { "X-WebChannel-Client-Profile": c.sa })),
      (this.g.U = a),
      (a = c && c.Qb) && !w(a) && (this.g.u = a),
      (this.A = (c && c.supportsCrossDomainXhr) || !1),
      (this.v = (c && c.sendRawJson) || !1),
      (c = c && c.httpSessionIdParam) &&
        !w(c) &&
        ((this.g.G = c),
        (a = this.h),
        a !== null && c in a && ((a = this.h), c in a && delete a[c])),
      (this.j = new si(this)));
  }
  (p(mt, Ge),
    (mt.prototype.m = function () {
      ((this.g.l = this.j),
        this.A && (this.g.L = !0),
        this.g.connect(this.l, this.h || void 0));
    }),
    (mt.prototype.close = function () {
      Hu(this.g);
    }),
    (mt.prototype.o = function (a) {
      var c = this.g;
      if (typeof a == "string") {
        var d = {};
        ((d.__data__ = a), (a = d));
      } else this.v && ((d = {}), (d.__data__ = Du(a)), (a = d));
      (c.i.push(new UT(c.Ya++, a)), c.I == 3 && ua(c));
    }),
    (mt.prototype.N = function () {
      ((this.g.l = null),
        delete this.j,
        Hu(this.g),
        delete this.g,
        mt.Z.N.call(this));
    }));
  function Hp(a) {
    (Vu.call(this),
      a.__headers__ &&
        ((this.headers = a.__headers__),
        (this.statusCode = a.__status__),
        delete a.__headers__,
        delete a.__status__));
    var c = a.__sm__;
    if (c) {
      e: {
        for (const d in c) {
          a = d;
          break e;
        }
        a = void 0;
      }
      ((this.i = a) &&
        ((a = this.i), (c = c !== null && a in c ? c[a] : void 0)),
        (this.data = c));
    } else this.data = a;
  }
  p(Hp, Vu);
  function qp() {
    (Ou.call(this), (this.status = 1));
  }
  p(qp, Ou);
  function si(a) {
    this.g = a;
  }
  (p(si, Wp),
    (si.prototype.ra = function () {
      nt(this.g, "a");
    }),
    (si.prototype.qa = function (a) {
      nt(this.g, new Hp(a));
    }),
    (si.prototype.pa = function (a) {
      nt(this.g, new qp());
    }),
    (si.prototype.oa = function () {
      nt(this.g, "b");
    }),
    (ha.prototype.createWebChannel = ha.prototype.g),
    (mt.prototype.send = mt.prototype.o),
    (mt.prototype.open = mt.prototype.m),
    (mt.prototype.close = mt.prototype.close),
    ($E = function () {
      return new ha();
    }),
    (zE = function () {
      return na();
    }),
    (BE = Ar),
    (Uh = {
      jb: 0,
      mb: 1,
      nb: 2,
      Hb: 3,
      Mb: 4,
      Jb: 5,
      Kb: 6,
      Ib: 7,
      Gb: 8,
      Lb: 9,
      PROXY: 10,
      NOPROXY: 11,
      Eb: 12,
      Ab: 13,
      Bb: 14,
      zb: 15,
      Cb: 16,
      Db: 17,
      fb: 18,
      eb: 19,
      gb: 20,
    }),
    (ra.NO_ERROR = 0),
    (ra.TIMEOUT = 8),
    (ra.HTTP_ERROR = 6),
    (Xa = ra),
    (lp.COMPLETE = "complete"),
    (jE = lp),
    (rp.EventType = hs),
    (hs.OPEN = "a"),
    (hs.CLOSE = "b"),
    (hs.ERROR = "c"),
    (hs.MESSAGE = "d"),
    (Ge.prototype.listen = Ge.prototype.J),
    (Bs = rp),
    (we.prototype.listenOnce = we.prototype.K),
    (we.prototype.getLastError = we.prototype.Ha),
    (we.prototype.getLastErrorCode = we.prototype.ya),
    (we.prototype.getStatus = we.prototype.ca),
    (we.prototype.getResponseJson = we.prototype.La),
    (we.prototype.getResponseText = we.prototype.la),
    (we.prototype.send = we.prototype.ea),
    (we.prototype.setWithCredentials = we.prototype.Fa),
    (UE = we));
}).apply(
  typeof xa < "u"
    ? xa
    : typeof self < "u"
      ? self
      : typeof window < "u"
        ? window
        : {},
);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Je {
  constructor(e) {
    this.uid = e;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(e) {
    return e.uid === this.uid;
  }
}
((Je.UNAUTHENTICATED = new Je(null)),
  (Je.GOOGLE_CREDENTIALS = new Je("google-credentials-uid")),
  (Je.FIRST_PARTY = new Je("first-party-uid")),
  (Je.MOCK_USER = new Je("mock-user")));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let rs = "12.10.0";
function PR(t) {
  rs = t;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Yr = new Qd("@firebase/firestore");
function li() {
  return Yr.logLevel;
}
function $(t, ...e) {
  if (Yr.logLevel <= ee.DEBUG) {
    const n = e.map(uf);
    Yr.debug(`Firestore (${rs}): ${t}`, ...n);
  }
}
function In(t, ...e) {
  if (Yr.logLevel <= ee.ERROR) {
    const n = e.map(uf);
    Yr.error(`Firestore (${rs}): ${t}`, ...n);
  }
}
function Jr(t, ...e) {
  if (Yr.logLevel <= ee.WARN) {
    const n = e.map(uf);
    Yr.warn(`Firestore (${rs}): ${t}`, ...n);
  }
}
function uf(t) {
  if (typeof t == "string") return t;
  try {
    return (function (n) {
      return JSON.stringify(n);
    })(t);
  } catch {
    return t;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function G(t, e, n) {
  let r = "Unexpected state";
  (typeof e == "string" ? (r = e) : (n = e), WE(t, r, n));
}
function WE(t, e, n) {
  let r = `FIRESTORE (${rs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;
  if (n !== void 0)
    try {
      r += " CONTEXT: " + JSON.stringify(n);
    } catch {
      r += " CONTEXT: " + n;
    }
  throw (In(r), new Error(r));
}
function se(t, e, n, r) {
  let i = "Unexpected state";
  (typeof n == "string" ? (i = n) : (r = n), t || WE(e, i, r));
}
function Y(t, e) {
  return t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const M = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss",
};
class B extends Rn {
  constructor(e, n) {
    (super(e, n),
      (this.code = e),
      (this.message = n),
      (this.toString = () =>
        `${this.name}: [code=${this.code}]: ${this.message}`));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gn {
  constructor() {
    this.promise = new Promise((e, n) => {
      ((this.resolve = e), (this.reject = n));
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class HE {
  constructor(e, n) {
    ((this.user = n),
      (this.type = "OAuth"),
      (this.headers = new Map()),
      this.headers.set("Authorization", `Bearer ${e}`));
  }
}
class NR {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {}
  start(e, n) {
    e.enqueueRetryable(() => n(Je.UNAUTHENTICATED));
  }
  shutdown() {}
}
class xR {
  constructor(e) {
    ((this.token = e), (this.changeListener = null));
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {}
  start(e, n) {
    ((this.changeListener = n), e.enqueueRetryable(() => n(this.token.user)));
  }
  shutdown() {
    this.changeListener = null;
  }
}
class DR {
  constructor(e) {
    ((this.t = e),
      (this.currentUser = Je.UNAUTHENTICATED),
      (this.i = 0),
      (this.forceRefresh = !1),
      (this.auth = null));
  }
  start(e, n) {
    se(this.o === void 0, 42304);
    let r = this.i;
    const i = (u) => (this.i !== r ? ((r = this.i), n(u)) : Promise.resolve());
    let s = new gn();
    this.o = () => {
      (this.i++,
        (this.currentUser = this.u()),
        s.resolve(),
        (s = new gn()),
        e.enqueueRetryable(() => i(this.currentUser)));
    };
    const o = () => {
        const u = s;
        e.enqueueRetryable(async () => {
          (await u.promise, await i(this.currentUser));
        });
      },
      l = (u) => {
        ($("FirebaseAuthCredentialsProvider", "Auth detected"),
          (this.auth = u),
          this.o && (this.auth.addAuthTokenListener(this.o), o()));
      };
    (this.t.onInit((u) => l(u)),
      setTimeout(() => {
        if (!this.auth) {
          const u = this.t.getImmediate({ optional: !0 });
          u
            ? l(u)
            : ($("FirebaseAuthCredentialsProvider", "Auth not yet detected"),
              s.resolve(),
              (s = new gn()));
        }
      }, 0),
      o());
  }
  getToken() {
    const e = this.i,
      n = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.auth
        ? this.auth
            .getToken(n)
            .then((r) =>
              this.i !== e
                ? ($(
                    "FirebaseAuthCredentialsProvider",
                    "getToken aborted due to token change.",
                  ),
                  this.getToken())
                : r
                  ? (se(typeof r.accessToken == "string", 31837, { l: r }),
                    new HE(r.accessToken, this.currentUser))
                  : null,
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    (this.auth && this.o && this.auth.removeAuthTokenListener(this.o),
      (this.o = void 0));
  }
  u() {
    const e = this.auth && this.auth.getUid();
    return (se(e === null || typeof e == "string", 2055, { h: e }), new Je(e));
  }
}
class VR {
  constructor(e, n, r) {
    ((this.P = e),
      (this.T = n),
      (this.I = r),
      (this.type = "FirstParty"),
      (this.user = Je.FIRST_PARTY),
      (this.R = new Map()));
  }
  A() {
    return this.I ? this.I() : null;
  }
  get headers() {
    this.R.set("X-Goog-AuthUser", this.P);
    const e = this.A();
    return (
      e && this.R.set("Authorization", e),
      this.T && this.R.set("X-Goog-Iam-Authorization-Token", this.T),
      this.R
    );
  }
}
class OR {
  constructor(e, n, r) {
    ((this.P = e), (this.T = n), (this.I = r));
  }
  getToken() {
    return Promise.resolve(new VR(this.P, this.T, this.I));
  }
  start(e, n) {
    e.enqueueRetryable(() => n(Je.FIRST_PARTY));
  }
  shutdown() {}
  invalidateToken() {}
}
class Vg {
  constructor(e) {
    ((this.value = e),
      (this.type = "AppCheck"),
      (this.headers = new Map()),
      e && e.length > 0 && this.headers.set("x-firebase-appcheck", this.value));
  }
}
class LR {
  constructor(e, n) {
    ((this.V = n),
      (this.forceRefresh = !1),
      (this.appCheck = null),
      (this.m = null),
      (this.p = null),
      yt(e) && e.settings.appCheckToken && (this.p = e.settings.appCheckToken));
  }
  start(e, n) {
    se(this.o === void 0, 3512);
    const r = (s) => {
      s.error != null &&
        $(
          "FirebaseAppCheckTokenProvider",
          `Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`,
        );
      const o = s.token !== this.m;
      return (
        (this.m = s.token),
        $(
          "FirebaseAppCheckTokenProvider",
          `Received ${o ? "new" : "existing"} token.`,
        ),
        o ? n(s.token) : Promise.resolve()
      );
    };
    this.o = (s) => {
      e.enqueueRetryable(() => r(s));
    };
    const i = (s) => {
      ($("FirebaseAppCheckTokenProvider", "AppCheck detected"),
        (this.appCheck = s),
        this.o && this.appCheck.addTokenListener(this.o));
    };
    (this.V.onInit((s) => i(s)),
      setTimeout(() => {
        if (!this.appCheck) {
          const s = this.V.getImmediate({ optional: !0 });
          s
            ? i(s)
            : $("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
        }
      }, 0));
  }
  getToken() {
    if (this.p) return Promise.resolve(new Vg(this.p));
    const e = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.appCheck
        ? this.appCheck
            .getToken(e)
            .then((n) =>
              n
                ? (se(typeof n.token == "string", 44558, { tokenResult: n }),
                  (this.m = n.token),
                  new Vg(n.token))
                : null,
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    (this.appCheck && this.o && this.appCheck.removeTokenListener(this.o),
      (this.o = void 0));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function MR(t) {
  const e = typeof self < "u" && (self.crypto || self.msCrypto),
    n = new Uint8Array(t);
  if (e && typeof e.getRandomValues == "function") e.getRandomValues(n);
  else for (let r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
  return n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cf {
  static newId() {
    const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      n = 62 * Math.floor(4.129032258064516);
    let r = "";
    for (; r.length < 20; ) {
      const i = MR(40);
      for (let s = 0; s < i.length; ++s)
        r.length < 20 && i[s] < n && (r += e.charAt(i[s] % 62));
    }
    return r;
  }
}
function te(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function jh(t, e) {
  const n = Math.min(t.length, e.length);
  for (let r = 0; r < n; r++) {
    const i = t.charAt(r),
      s = e.charAt(r);
    if (i !== s) return kc(i) === kc(s) ? te(i, s) : kc(i) ? 1 : -1;
  }
  return te(t.length, e.length);
}
const bR = 55296,
  FR = 57343;
function kc(t) {
  const e = t.charCodeAt(0);
  return e >= bR && e <= FR;
}
function Hi(t, e, n) {
  return t.length === e.length && t.every((r, i) => n(r, e[i]));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Og = "__name__";
class Qt {
  constructor(e, n, r) {
    (n === void 0
      ? (n = 0)
      : n > e.length && G(637, { offset: n, range: e.length }),
      r === void 0
        ? (r = e.length - n)
        : r > e.length - n && G(1746, { length: r, range: e.length - n }),
      (this.segments = e),
      (this.offset = n),
      (this.len = r));
  }
  get length() {
    return this.len;
  }
  isEqual(e) {
    return Qt.comparator(this, e) === 0;
  }
  child(e) {
    const n = this.segments.slice(this.offset, this.limit());
    return (
      e instanceof Qt
        ? e.forEach((r) => {
            n.push(r);
          })
        : n.push(e),
      this.construct(n)
    );
  }
  limit() {
    return this.offset + this.length;
  }
  popFirst(e) {
    return (
      (e = e === void 0 ? 1 : e),
      this.construct(this.segments, this.offset + e, this.length - e)
    );
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(e) {
    return this.segments[this.offset + e];
  }
  isEmpty() {
    return this.length === 0;
  }
  isPrefixOf(e) {
    if (e.length < this.length) return !1;
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== e.get(n)) return !1;
    return !0;
  }
  isImmediateParentOf(e) {
    if (this.length + 1 !== e.length) return !1;
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== e.get(n)) return !1;
    return !0;
  }
  forEach(e) {
    for (let n = this.offset, r = this.limit(); n < r; n++) e(this.segments[n]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(e, n) {
    const r = Math.min(e.length, n.length);
    for (let i = 0; i < r; i++) {
      const s = Qt.compareSegments(e.get(i), n.get(i));
      if (s !== 0) return s;
    }
    return te(e.length, n.length);
  }
  static compareSegments(e, n) {
    const r = Qt.isNumericId(e),
      i = Qt.isNumericId(n);
    return r && !i
      ? -1
      : !r && i
        ? 1
        : r && i
          ? Qt.extractNumericId(e).compare(Qt.extractNumericId(n))
          : jh(e, n);
  }
  static isNumericId(e) {
    return e.startsWith("__id") && e.endsWith("__");
  }
  static extractNumericId(e) {
    return sr.fromString(e.substring(4, e.length - 2));
  }
}
class ue extends Qt {
  construct(e, n, r) {
    return new ue(e, n, r);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  toUriEncodedString() {
    return this.toArray().map(encodeURIComponent).join("/");
  }
  static fromString(...e) {
    const n = [];
    for (const r of e) {
      if (r.indexOf("//") >= 0)
        throw new B(
          M.INVALID_ARGUMENT,
          `Invalid segment (${r}). Paths must not contain // in them.`,
        );
      n.push(...r.split("/").filter((i) => i.length > 0));
    }
    return new ue(n);
  }
  static emptyPath() {
    return new ue([]);
  }
}
const UR = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class $e extends Qt {
  construct(e, n, r) {
    return new $e(e, n, r);
  }
  static isValidIdentifier(e) {
    return UR.test(e);
  }
  canonicalString() {
    return this.toArray()
      .map(
        (e) => (
          (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`")),
          $e.isValidIdentifier(e) || (e = "`" + e + "`"),
          e
        ),
      )
      .join(".");
  }
  toString() {
    return this.canonicalString();
  }
  isKeyField() {
    return this.length === 1 && this.get(0) === Og;
  }
  static keyField() {
    return new $e([Og]);
  }
  static fromServerFormat(e) {
    const n = [];
    let r = "",
      i = 0;
    const s = () => {
      if (r.length === 0)
        throw new B(
          M.INVALID_ARGUMENT,
          `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
        );
      (n.push(r), (r = ""));
    };
    let o = !1;
    for (; i < e.length; ) {
      const l = e[i];
      if (l === "\\") {
        if (i + 1 === e.length)
          throw new B(
            M.INVALID_ARGUMENT,
            "Path has trailing escape character: " + e,
          );
        const u = e[i + 1];
        if (u !== "\\" && u !== "." && u !== "`")
          throw new B(
            M.INVALID_ARGUMENT,
            "Path has invalid escape sequence: " + e,
          );
        ((r += u), (i += 2));
      } else
        l === "`"
          ? ((o = !o), i++)
          : l !== "." || o
            ? ((r += l), i++)
            : (s(), i++);
    }
    if ((s(), o))
      throw new B(M.INVALID_ARGUMENT, "Unterminated ` in path: " + e);
    return new $e(n);
  }
  static emptyPath() {
    return new $e([]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class H {
  constructor(e) {
    this.path = e;
  }
  static fromPath(e) {
    return new H(ue.fromString(e));
  }
  static fromName(e) {
    return new H(ue.fromString(e).popFirst(5));
  }
  static empty() {
    return new H(ue.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  hasCollectionId(e) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === e;
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(e) {
    return e !== null && ue.comparator(this.path, e.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(e, n) {
    return ue.comparator(e.path, n.path);
  }
  static isDocumentKey(e) {
    return e.length % 2 == 0;
  }
  static fromSegments(e) {
    return new H(new ue(e.slice()));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function qE(t, e, n) {
  if (!n)
    throw new B(
      M.INVALID_ARGUMENT,
      `Function ${t}() cannot be called with an empty ${e}.`,
    );
}
function jR(t, e, n, r) {
  if (e === !0 && r === !0)
    throw new B(M.INVALID_ARGUMENT, `${t} and ${n} cannot be used together.`);
}
function Lg(t) {
  if (!H.isDocumentKey(t))
    throw new B(
      M.INVALID_ARGUMENT,
      `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`,
    );
}
function Mg(t) {
  if (H.isDocumentKey(t))
    throw new B(
      M.INVALID_ARGUMENT,
      `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`,
    );
}
function GE(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    (Object.getPrototypeOf(t) === Object.prototype ||
      Object.getPrototypeOf(t) === null)
  );
}
function du(t) {
  if (t === void 0) return "undefined";
  if (t === null) return "null";
  if (typeof t == "string")
    return (
      t.length > 20 && (t = `${t.substring(0, 20)}...`),
      JSON.stringify(t)
    );
  if (typeof t == "number" || typeof t == "boolean") return "" + t;
  if (typeof t == "object") {
    if (t instanceof Array) return "an array";
    {
      const e = (function (r) {
        return r.constructor ? r.constructor.name : null;
      })(t);
      return e ? `a custom ${e} object` : "an object";
    }
  }
  return typeof t == "function" ? "a function" : G(12329, { type: typeof t });
}
function Sn(t, e) {
  if (("_delegate" in t && (t = t._delegate), !(t instanceof e))) {
    if (e.name === t.constructor.name)
      throw new B(
        M.INVALID_ARGUMENT,
        "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?",
      );
    {
      const n = du(t);
      throw new B(
        M.INVALID_ARGUMENT,
        `Expected type '${e.name}', but it was: ${n}`,
      );
    }
  }
  return t;
}
function BR(t, e) {
  if (e <= 0)
    throw new B(
      M.INVALID_ARGUMENT,
      `Function ${t}() requires a positive number, but it was: ${e}.`,
    );
}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ne(t, e) {
  const n = { typeString: t };
  return (e && (n.value = e), n);
}
function qo(t, e) {
  if (!GE(t)) throw new B(M.INVALID_ARGUMENT, "JSON must be an object");
  let n;
  for (const r in e)
    if (e[r]) {
      const i = e[r].typeString,
        s = "value" in e[r] ? { value: e[r].value } : void 0;
      if (!(r in t)) {
        n = `JSON missing required field: '${r}'`;
        break;
      }
      const o = t[r];
      if (i && typeof o !== i) {
        n = `JSON field '${r}' must be a ${i}.`;
        break;
      }
      if (s !== void 0 && o !== s.value) {
        n = `Expected '${r}' field to equal '${s.value}'`;
        break;
      }
    }
  if (n) throw new B(M.INVALID_ARGUMENT, n);
  return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const bg = -62135596800,
  Fg = 1e6;
class fe {
  static now() {
    return fe.fromMillis(Date.now());
  }
  static fromDate(e) {
    return fe.fromMillis(e.getTime());
  }
  static fromMillis(e) {
    const n = Math.floor(e / 1e3),
      r = Math.floor((e - 1e3 * n) * Fg);
    return new fe(n, r);
  }
  constructor(e, n) {
    if (((this.seconds = e), (this.nanoseconds = n), n < 0))
      throw new B(
        M.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + n,
      );
    if (n >= 1e9)
      throw new B(
        M.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + n,
      );
    if (e < bg)
      throw new B(M.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
    if (e >= 253402300800)
      throw new B(M.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
  }
  toDate() {
    return new Date(this.toMillis());
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / Fg;
  }
  _compareTo(e) {
    return this.seconds === e.seconds
      ? te(this.nanoseconds, e.nanoseconds)
      : te(this.seconds, e.seconds);
  }
  isEqual(e) {
    return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds;
  }
  toString() {
    return (
      "Timestamp(seconds=" +
      this.seconds +
      ", nanoseconds=" +
      this.nanoseconds +
      ")"
    );
  }
  toJSON() {
    return {
      type: fe._jsonSchemaVersion,
      seconds: this.seconds,
      nanoseconds: this.nanoseconds,
    };
  }
  static fromJSON(e) {
    if (qo(e, fe._jsonSchema)) return new fe(e.seconds, e.nanoseconds);
  }
  valueOf() {
    const e = this.seconds - bg;
    return (
      String(e).padStart(12, "0") +
      "." +
      String(this.nanoseconds).padStart(9, "0")
    );
  }
}
((fe._jsonSchemaVersion = "firestore/timestamp/1.0"),
  (fe._jsonSchema = {
    type: Ne("string", fe._jsonSchemaVersion),
    seconds: Ne("number"),
    nanoseconds: Ne("number"),
  }));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Q {
  static fromTimestamp(e) {
    return new Q(e);
  }
  static min() {
    return new Q(new fe(0, 0));
  }
  static max() {
    return new Q(new fe(253402300799, 999999999));
  }
  constructor(e) {
    this.timestamp = e;
  }
  compareTo(e) {
    return this.timestamp._compareTo(e.timestamp);
  }
  isEqual(e) {
    return this.timestamp.isEqual(e.timestamp);
  }
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Co = -1;
function zR(t, e) {
  const n = t.toTimestamp().seconds,
    r = t.toTimestamp().nanoseconds + 1,
    i = Q.fromTimestamp(r === 1e9 ? new fe(n + 1, 0) : new fe(n, r));
  return new ur(i, H.empty(), e);
}
function $R(t) {
  return new ur(t.readTime, t.key, Co);
}
class ur {
  constructor(e, n, r) {
    ((this.readTime = e), (this.documentKey = n), (this.largestBatchId = r));
  }
  static min() {
    return new ur(Q.min(), H.empty(), Co);
  }
  static max() {
    return new ur(Q.max(), H.empty(), Co);
  }
}
function WR(t, e) {
  let n = t.readTime.compareTo(e.readTime);
  return n !== 0
    ? n
    : ((n = H.comparator(t.documentKey, e.documentKey)),
      n !== 0 ? n : te(t.largestBatchId, e.largestBatchId));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const HR =
  "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
class qR {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(e) {
    this.onCommittedListeners.push(e);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((e) => e());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function is(t) {
  if (t.code !== M.FAILED_PRECONDITION || t.message !== HR) throw t;
  $("LocalStore", "Unexpectedly lost primary lease");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class b {
  constructor(e) {
    ((this.nextCallback = null),
      (this.catchCallback = null),
      (this.result = void 0),
      (this.error = void 0),
      (this.isDone = !1),
      (this.callbackAttached = !1),
      e(
        (n) => {
          ((this.isDone = !0),
            (this.result = n),
            this.nextCallback && this.nextCallback(n));
        },
        (n) => {
          ((this.isDone = !0),
            (this.error = n),
            this.catchCallback && this.catchCallback(n));
        },
      ));
  }
  catch(e) {
    return this.next(void 0, e);
  }
  next(e, n) {
    return (
      this.callbackAttached && G(59440),
      (this.callbackAttached = !0),
      this.isDone
        ? this.error
          ? this.wrapFailure(n, this.error)
          : this.wrapSuccess(e, this.result)
        : new b((r, i) => {
            ((this.nextCallback = (s) => {
              this.wrapSuccess(e, s).next(r, i);
            }),
              (this.catchCallback = (s) => {
                this.wrapFailure(n, s).next(r, i);
              }));
          })
    );
  }
  toPromise() {
    return new Promise((e, n) => {
      this.next(e, n);
    });
  }
  wrapUserFunction(e) {
    try {
      const n = e();
      return n instanceof b ? n : b.resolve(n);
    } catch (n) {
      return b.reject(n);
    }
  }
  wrapSuccess(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : b.resolve(n);
  }
  wrapFailure(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : b.reject(n);
  }
  static resolve(e) {
    return new b((n, r) => {
      n(e);
    });
  }
  static reject(e) {
    return new b((n, r) => {
      r(e);
    });
  }
  static waitFor(e) {
    return new b((n, r) => {
      let i = 0,
        s = 0,
        o = !1;
      (e.forEach((l) => {
        (++i,
          l.next(
            () => {
              (++s, o && s === i && n());
            },
            (u) => r(u),
          ));
      }),
        (o = !0),
        s === i && n());
    });
  }
  static or(e) {
    let n = b.resolve(!1);
    for (const r of e) n = n.next((i) => (i ? b.resolve(i) : r()));
    return n;
  }
  static forEach(e, n) {
    const r = [];
    return (
      e.forEach((i, s) => {
        r.push(n.call(this, i, s));
      }),
      this.waitFor(r)
    );
  }
  static mapArray(e, n) {
    return new b((r, i) => {
      const s = e.length,
        o = new Array(s);
      let l = 0;
      for (let u = 0; u < s; u++) {
        const h = u;
        n(e[h]).next(
          (f) => {
            ((o[h] = f), ++l, l === s && r(o));
          },
          (f) => i(f),
        );
      }
    });
  }
  static doWhile(e, n) {
    return new b((r, i) => {
      const s = () => {
        e() === !0
          ? n().next(() => {
              s();
            }, i)
          : r();
      };
      s();
    });
  }
}
function GR(t) {
  const e = t.match(/Android ([\d.]+)/i),
    n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
  return Number(n);
}
function ss(t) {
  return t.name === "IndexedDbTransactionError";
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fu {
  constructor(e, n) {
    ((this.previousValue = e),
      n &&
        ((n.sequenceNumberHandler = (r) => this.ae(r)),
        (this.ue = (r) => n.writeSequenceNumber(r))));
  }
  ae(e) {
    return (
      (this.previousValue = Math.max(e, this.previousValue)),
      this.previousValue
    );
  }
  next() {
    const e = ++this.previousValue;
    return (this.ue && this.ue(e), e);
  }
}
fu.ce = -1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const hf = -1;
function pu(t) {
  return t == null;
}
function Ml(t) {
  return t === 0 && 1 / t == -1 / 0;
}
function KR(t) {
  return (
    typeof t == "number" &&
    Number.isInteger(t) &&
    !Ml(t) &&
    t <= Number.MAX_SAFE_INTEGER &&
    t >= Number.MIN_SAFE_INTEGER
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const KE = "";
function QR(t) {
  let e = "";
  for (let n = 0; n < t.length; n++)
    (e.length > 0 && (e = Ug(e)), (e = YR(t.get(n), e)));
  return Ug(e);
}
function YR(t, e) {
  let n = e;
  const r = t.length;
  for (let i = 0; i < r; i++) {
    const s = t.charAt(i);
    switch (s) {
      case "\0":
        n += "";
        break;
      case KE:
        n += "";
        break;
      default:
        n += s;
    }
  }
  return n;
}
function Ug(t) {
  return t + KE + "";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function jg(t) {
  let e = 0;
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
  return e;
}
function Er(t, e) {
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}
function QE(t) {
  for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ee {
  constructor(e, n) {
    ((this.comparator = e), (this.root = n || ze.EMPTY));
  }
  insert(e, n) {
    return new Ee(
      this.comparator,
      this.root
        .insert(e, n, this.comparator)
        .copy(null, null, ze.BLACK, null, null),
    );
  }
  remove(e) {
    return new Ee(
      this.comparator,
      this.root
        .remove(e, this.comparator)
        .copy(null, null, ze.BLACK, null, null),
    );
  }
  get(e) {
    let n = this.root;
    for (; !n.isEmpty(); ) {
      const r = this.comparator(e, n.key);
      if (r === 0) return n.value;
      r < 0 ? (n = n.left) : r > 0 && (n = n.right);
    }
    return null;
  }
  indexOf(e) {
    let n = 0,
      r = this.root;
    for (; !r.isEmpty(); ) {
      const i = this.comparator(e, r.key);
      if (i === 0) return n + r.left.size;
      i < 0 ? (r = r.left) : ((n += r.left.size + 1), (r = r.right));
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  get size() {
    return this.root.size;
  }
  minKey() {
    return this.root.minKey();
  }
  maxKey() {
    return this.root.maxKey();
  }
  inorderTraversal(e) {
    return this.root.inorderTraversal(e);
  }
  forEach(e) {
    this.inorderTraversal((n, r) => (e(n, r), !1));
  }
  toString() {
    const e = [];
    return (
      this.inorderTraversal((n, r) => (e.push(`${n}:${r}`), !1)),
      `{${e.join(", ")}}`
    );
  }
  reverseTraversal(e) {
    return this.root.reverseTraversal(e);
  }
  getIterator() {
    return new Da(this.root, null, this.comparator, !1);
  }
  getIteratorFrom(e) {
    return new Da(this.root, e, this.comparator, !1);
  }
  getReverseIterator() {
    return new Da(this.root, null, this.comparator, !0);
  }
  getReverseIteratorFrom(e) {
    return new Da(this.root, e, this.comparator, !0);
  }
}
class Da {
  constructor(e, n, r, i) {
    ((this.isReverse = i), (this.nodeStack = []));
    let s = 1;
    for (; !e.isEmpty(); )
      if (((s = n ? r(e.key, n) : 1), n && i && (s *= -1), s < 0))
        e = this.isReverse ? e.left : e.right;
      else {
        if (s === 0) {
          this.nodeStack.push(e);
          break;
        }
        (this.nodeStack.push(e), (e = this.isReverse ? e.right : e.left));
      }
  }
  getNext() {
    let e = this.nodeStack.pop();
    const n = { key: e.key, value: e.value };
    if (this.isReverse)
      for (e = e.left; !e.isEmpty(); ) (this.nodeStack.push(e), (e = e.right));
    else
      for (e = e.right; !e.isEmpty(); ) (this.nodeStack.push(e), (e = e.left));
    return n;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (this.nodeStack.length === 0) return null;
    const e = this.nodeStack[this.nodeStack.length - 1];
    return { key: e.key, value: e.value };
  }
}
class ze {
  constructor(e, n, r, i, s) {
    ((this.key = e),
      (this.value = n),
      (this.color = r ?? ze.RED),
      (this.left = i ?? ze.EMPTY),
      (this.right = s ?? ze.EMPTY),
      (this.size = this.left.size + 1 + this.right.size));
  }
  copy(e, n, r, i, s) {
    return new ze(
      e ?? this.key,
      n ?? this.value,
      r ?? this.color,
      i ?? this.left,
      s ?? this.right,
    );
  }
  isEmpty() {
    return !1;
  }
  inorderTraversal(e) {
    return (
      this.left.inorderTraversal(e) ||
      e(this.key, this.value) ||
      this.right.inorderTraversal(e)
    );
  }
  reverseTraversal(e) {
    return (
      this.right.reverseTraversal(e) ||
      e(this.key, this.value) ||
      this.left.reverseTraversal(e)
    );
  }
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  minKey() {
    return this.min().key;
  }
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  insert(e, n, r) {
    let i = this;
    const s = r(e, i.key);
    return (
      (i =
        s < 0
          ? i.copy(null, null, null, i.left.insert(e, n, r), null)
          : s === 0
            ? i.copy(null, n, null, null, null)
            : i.copy(null, null, null, null, i.right.insert(e, n, r))),
      i.fixUp()
    );
  }
  removeMin() {
    if (this.left.isEmpty()) return ze.EMPTY;
    let e = this;
    return (
      e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()),
      (e = e.copy(null, null, null, e.left.removeMin(), null)),
      e.fixUp()
    );
  }
  remove(e, n) {
    let r,
      i = this;
    if (n(e, i.key) < 0)
      (i.left.isEmpty() ||
        i.left.isRed() ||
        i.left.left.isRed() ||
        (i = i.moveRedLeft()),
        (i = i.copy(null, null, null, i.left.remove(e, n), null)));
    else {
      if (
        (i.left.isRed() && (i = i.rotateRight()),
        i.right.isEmpty() ||
          i.right.isRed() ||
          i.right.left.isRed() ||
          (i = i.moveRedRight()),
        n(e, i.key) === 0)
      ) {
        if (i.right.isEmpty()) return ze.EMPTY;
        ((r = i.right.min()),
          (i = i.copy(r.key, r.value, null, null, i.right.removeMin())));
      }
      i = i.copy(null, null, null, null, i.right.remove(e, n));
    }
    return i.fixUp();
  }
  isRed() {
    return this.color;
  }
  fixUp() {
    let e = this;
    return (
      e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()),
      e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()),
      e.left.isRed() && e.right.isRed() && (e = e.colorFlip()),
      e
    );
  }
  moveRedLeft() {
    let e = this.colorFlip();
    return (
      e.right.left.isRed() &&
        ((e = e.copy(null, null, null, null, e.right.rotateRight())),
        (e = e.rotateLeft()),
        (e = e.colorFlip())),
      e
    );
  }
  moveRedRight() {
    let e = this.colorFlip();
    return (
      e.left.left.isRed() && ((e = e.rotateRight()), (e = e.colorFlip())),
      e
    );
  }
  rotateLeft() {
    const e = this.copy(null, null, ze.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  rotateRight() {
    const e = this.copy(null, null, ze.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e);
  }
  colorFlip() {
    const e = this.left.copy(null, null, !this.left.color, null, null),
      n = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, e, n);
  }
  checkMaxDepth() {
    const e = this.check();
    return Math.pow(2, e) <= this.size + 1;
  }
  check() {
    if (this.isRed() && this.left.isRed())
      throw G(43730, { key: this.key, value: this.value });
    if (this.right.isRed())
      throw G(14113, { key: this.key, value: this.value });
    const e = this.left.check();
    if (e !== this.right.check()) throw G(27949);
    return e + (this.isRed() ? 0 : 1);
  }
}
((ze.EMPTY = null), (ze.RED = !0), (ze.BLACK = !1));
ze.EMPTY = new (class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw G(57766);
  }
  get value() {
    throw G(16141);
  }
  get color() {
    throw G(16727);
  }
  get left() {
    throw G(29726);
  }
  get right() {
    throw G(36894);
  }
  copy(e, n, r, i, s) {
    return this;
  }
  insert(e, n, r) {
    return new ze(e, n);
  }
  remove(e, n) {
    return this;
  }
  isEmpty() {
    return !0;
  }
  inorderTraversal(e) {
    return !1;
  }
  reverseTraversal(e) {
    return !1;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return !1;
  }
  checkMaxDepth() {
    return !0;
  }
  check() {
    return 0;
  }
})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Oe {
  constructor(e) {
    ((this.comparator = e), (this.data = new Ee(this.comparator)));
  }
  has(e) {
    return this.data.get(e) !== null;
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(e) {
    return this.data.indexOf(e);
  }
  forEach(e) {
    this.data.inorderTraversal((n, r) => (e(n), !1));
  }
  forEachInRange(e, n) {
    const r = this.data.getIteratorFrom(e[0]);
    for (; r.hasNext(); ) {
      const i = r.getNext();
      if (this.comparator(i.key, e[1]) >= 0) return;
      n(i.key);
    }
  }
  forEachWhile(e, n) {
    let r;
    for (
      r = n !== void 0 ? this.data.getIteratorFrom(n) : this.data.getIterator();
      r.hasNext();
    )
      if (!e(r.getNext().key)) return;
  }
  firstAfterOrEqual(e) {
    const n = this.data.getIteratorFrom(e);
    return n.hasNext() ? n.getNext().key : null;
  }
  getIterator() {
    return new Bg(this.data.getIterator());
  }
  getIteratorFrom(e) {
    return new Bg(this.data.getIteratorFrom(e));
  }
  add(e) {
    return this.copy(this.data.remove(e).insert(e, !0));
  }
  delete(e) {
    return this.has(e) ? this.copy(this.data.remove(e)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(e) {
    let n = this;
    return (
      n.size < e.size && ((n = e), (e = this)),
      e.forEach((r) => {
        n = n.add(r);
      }),
      n
    );
  }
  isEqual(e) {
    if (!(e instanceof Oe) || this.size !== e.size) return !1;
    const n = this.data.getIterator(),
      r = e.data.getIterator();
    for (; n.hasNext(); ) {
      const i = n.getNext().key,
        s = r.getNext().key;
      if (this.comparator(i, s) !== 0) return !1;
    }
    return !0;
  }
  toArray() {
    const e = [];
    return (
      this.forEach((n) => {
        e.push(n);
      }),
      e
    );
  }
  toString() {
    const e = [];
    return (this.forEach((n) => e.push(n)), "SortedSet(" + e.toString() + ")");
  }
  copy(e) {
    const n = new Oe(this.comparator);
    return ((n.data = e), n);
  }
}
class Bg {
  constructor(e) {
    this.iter = e;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vt {
  constructor(e) {
    ((this.fields = e), e.sort($e.comparator));
  }
  static empty() {
    return new vt([]);
  }
  unionWith(e) {
    let n = new Oe($e.comparator);
    for (const r of this.fields) n = n.add(r);
    for (const r of e) n = n.add(r);
    return new vt(n.toArray());
  }
  covers(e) {
    for (const n of this.fields) if (n.isPrefixOf(e)) return !0;
    return !1;
  }
  isEqual(e) {
    return Hi(this.fields, e.fields, (n, r) => n.isEqual(r));
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class YE extends Error {
  constructor() {
    (super(...arguments), (this.name = "Base64DecodeError"));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qe {
  constructor(e) {
    this.binaryString = e;
  }
  static fromBase64String(e) {
    const n = (function (i) {
      try {
        return atob(i);
      } catch (s) {
        throw typeof DOMException < "u" && s instanceof DOMException
          ? new YE("Invalid base64 string: " + s)
          : s;
      }
    })(e);
    return new qe(n);
  }
  static fromUint8Array(e) {
    const n = (function (i) {
      let s = "";
      for (let o = 0; o < i.length; ++o) s += String.fromCharCode(i[o]);
      return s;
    })(e);
    return new qe(n);
  }
  [Symbol.iterator]() {
    let e = 0;
    return {
      next: () =>
        e < this.binaryString.length
          ? { value: this.binaryString.charCodeAt(e++), done: !1 }
          : { value: void 0, done: !0 },
    };
  }
  toBase64() {
    return (function (n) {
      return btoa(n);
    })(this.binaryString);
  }
  toUint8Array() {
    return (function (n) {
      const r = new Uint8Array(n.length);
      for (let i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);
      return r;
    })(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(e) {
    return te(this.binaryString, e.binaryString);
  }
  isEqual(e) {
    return this.binaryString === e.binaryString;
  }
}
qe.EMPTY_BYTE_STRING = new qe("");
const JR = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function cr(t) {
  if ((se(!!t, 39018), typeof t == "string")) {
    let e = 0;
    const n = JR.exec(t);
    if ((se(!!n, 46558, { timestamp: t }), n[1])) {
      let i = n[1];
      ((i = (i + "000000000").substr(0, 9)), (e = Number(i)));
    }
    const r = new Date(t);
    return { seconds: Math.floor(r.getTime() / 1e3), nanos: e };
  }
  return { seconds: Se(t.seconds), nanos: Se(t.nanos) };
}
function Se(t) {
  return typeof t == "number" ? t : typeof t == "string" ? Number(t) : 0;
}
function hr(t) {
  return typeof t == "string" ? qe.fromBase64String(t) : qe.fromUint8Array(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const JE = "server_timestamp",
  XE = "__type__",
  ZE = "__previous_value__",
  ew = "__local_write_time__";
function df(t) {
  var n, r;
  return (
    ((r = (((n = t == null ? void 0 : t.mapValue) == null
      ? void 0
      : n.fields) || {})[XE]) == null
      ? void 0
      : r.stringValue) === JE
  );
}
function mu(t) {
  const e = t.mapValue.fields[ZE];
  return df(e) ? mu(e) : e;
}
function Ro(t) {
  const e = cr(t.mapValue.fields[ew].timestampValue);
  return new fe(e.seconds, e.nanos);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class XR {
  constructor(e, n, r, i, s, o, l, u, h, f, p) {
    ((this.databaseId = e),
      (this.appId = n),
      (this.persistenceKey = r),
      (this.host = i),
      (this.ssl = s),
      (this.forceLongPolling = o),
      (this.autoDetectLongPolling = l),
      (this.longPollingOptions = u),
      (this.useFetchStreams = h),
      (this.isUsingEmulator = f),
      (this.apiKey = p));
  }
}
const bl = "(default)";
class ko {
  constructor(e, n) {
    ((this.projectId = e), (this.database = n || bl));
  }
  static empty() {
    return new ko("", "");
  }
  get isDefaultDatabase() {
    return this.database === bl;
  }
  isEqual(e) {
    return (
      e instanceof ko &&
      e.projectId === this.projectId &&
      e.database === this.database
    );
  }
}
function ZR(t, e) {
  if (!Object.prototype.hasOwnProperty.apply(t.options, ["projectId"]))
    throw new B(
      M.INVALID_ARGUMENT,
      '"projectId" not provided in firebase.initializeApp.',
    );
  return new ko(t.options.projectId, e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const tw = "__type__",
  ek = "__max__",
  Va = { mapValue: {} },
  nw = "__vector__",
  Fl = "value";
function dr(t) {
  return "nullValue" in t
    ? 0
    : "booleanValue" in t
      ? 1
      : "integerValue" in t || "doubleValue" in t
        ? 2
        : "timestampValue" in t
          ? 3
          : "stringValue" in t
            ? 5
            : "bytesValue" in t
              ? 6
              : "referenceValue" in t
                ? 7
                : "geoPointValue" in t
                  ? 8
                  : "arrayValue" in t
                    ? 9
                    : "mapValue" in t
                      ? df(t)
                        ? 4
                        : nk(t)
                          ? 9007199254740991
                          : tk(t)
                            ? 10
                            : 11
                      : G(28295, { value: t });
}
function sn(t, e) {
  if (t === e) return !0;
  const n = dr(t);
  if (n !== dr(e)) return !1;
  switch (n) {
    case 0:
    case 9007199254740991:
      return !0;
    case 1:
      return t.booleanValue === e.booleanValue;
    case 4:
      return Ro(t).isEqual(Ro(e));
    case 3:
      return (function (i, s) {
        if (
          typeof i.timestampValue == "string" &&
          typeof s.timestampValue == "string" &&
          i.timestampValue.length === s.timestampValue.length
        )
          return i.timestampValue === s.timestampValue;
        const o = cr(i.timestampValue),
          l = cr(s.timestampValue);
        return o.seconds === l.seconds && o.nanos === l.nanos;
      })(t, e);
    case 5:
      return t.stringValue === e.stringValue;
    case 6:
      return (function (i, s) {
        return hr(i.bytesValue).isEqual(hr(s.bytesValue));
      })(t, e);
    case 7:
      return t.referenceValue === e.referenceValue;
    case 8:
      return (function (i, s) {
        return (
          Se(i.geoPointValue.latitude) === Se(s.geoPointValue.latitude) &&
          Se(i.geoPointValue.longitude) === Se(s.geoPointValue.longitude)
        );
      })(t, e);
    case 2:
      return (function (i, s) {
        if ("integerValue" in i && "integerValue" in s)
          return Se(i.integerValue) === Se(s.integerValue);
        if ("doubleValue" in i && "doubleValue" in s) {
          const o = Se(i.doubleValue),
            l = Se(s.doubleValue);
          return o === l ? Ml(o) === Ml(l) : isNaN(o) && isNaN(l);
        }
        return !1;
      })(t, e);
    case 9:
      return Hi(t.arrayValue.values || [], e.arrayValue.values || [], sn);
    case 10:
    case 11:
      return (function (i, s) {
        const o = i.mapValue.fields || {},
          l = s.mapValue.fields || {};
        if (jg(o) !== jg(l)) return !1;
        for (const u in o)
          if (o.hasOwnProperty(u) && (l[u] === void 0 || !sn(o[u], l[u])))
            return !1;
        return !0;
      })(t, e);
    default:
      return G(52216, { left: t });
  }
}
function Po(t, e) {
  return (t.values || []).find((n) => sn(n, e)) !== void 0;
}
function qi(t, e) {
  if (t === e) return 0;
  const n = dr(t),
    r = dr(e);
  if (n !== r) return te(n, r);
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return te(t.booleanValue, e.booleanValue);
    case 2:
      return (function (s, o) {
        const l = Se(s.integerValue || s.doubleValue),
          u = Se(o.integerValue || o.doubleValue);
        return l < u
          ? -1
          : l > u
            ? 1
            : l === u
              ? 0
              : isNaN(l)
                ? isNaN(u)
                  ? 0
                  : -1
                : 1;
      })(t, e);
    case 3:
      return zg(t.timestampValue, e.timestampValue);
    case 4:
      return zg(Ro(t), Ro(e));
    case 5:
      return jh(t.stringValue, e.stringValue);
    case 6:
      return (function (s, o) {
        const l = hr(s),
          u = hr(o);
        return l.compareTo(u);
      })(t.bytesValue, e.bytesValue);
    case 7:
      return (function (s, o) {
        const l = s.split("/"),
          u = o.split("/");
        for (let h = 0; h < l.length && h < u.length; h++) {
          const f = te(l[h], u[h]);
          if (f !== 0) return f;
        }
        return te(l.length, u.length);
      })(t.referenceValue, e.referenceValue);
    case 8:
      return (function (s, o) {
        const l = te(Se(s.latitude), Se(o.latitude));
        return l !== 0 ? l : te(Se(s.longitude), Se(o.longitude));
      })(t.geoPointValue, e.geoPointValue);
    case 9:
      return $g(t.arrayValue, e.arrayValue);
    case 10:
      return (function (s, o) {
        var m, I, N, D;
        const l = s.fields || {},
          u = o.fields || {},
          h = (m = l[Fl]) == null ? void 0 : m.arrayValue,
          f = (I = u[Fl]) == null ? void 0 : I.arrayValue,
          p = te(
            ((N = h == null ? void 0 : h.values) == null ? void 0 : N.length) ||
              0,
            ((D = f == null ? void 0 : f.values) == null ? void 0 : D.length) ||
              0,
          );
        return p !== 0 ? p : $g(h, f);
      })(t.mapValue, e.mapValue);
    case 11:
      return (function (s, o) {
        if (s === Va.mapValue && o === Va.mapValue) return 0;
        if (s === Va.mapValue) return 1;
        if (o === Va.mapValue) return -1;
        const l = s.fields || {},
          u = Object.keys(l),
          h = o.fields || {},
          f = Object.keys(h);
        (u.sort(), f.sort());
        for (let p = 0; p < u.length && p < f.length; ++p) {
          const m = jh(u[p], f[p]);
          if (m !== 0) return m;
          const I = qi(l[u[p]], h[f[p]]);
          if (I !== 0) return I;
        }
        return te(u.length, f.length);
      })(t.mapValue, e.mapValue);
    default:
      throw G(23264, { he: n });
  }
}
function zg(t, e) {
  if (typeof t == "string" && typeof e == "string" && t.length === e.length)
    return te(t, e);
  const n = cr(t),
    r = cr(e),
    i = te(n.seconds, r.seconds);
  return i !== 0 ? i : te(n.nanos, r.nanos);
}
function $g(t, e) {
  const n = t.values || [],
    r = e.values || [];
  for (let i = 0; i < n.length && i < r.length; ++i) {
    const s = qi(n[i], r[i]);
    if (s) return s;
  }
  return te(n.length, r.length);
}
function Gi(t) {
  return Bh(t);
}
function Bh(t) {
  return "nullValue" in t
    ? "null"
    : "booleanValue" in t
      ? "" + t.booleanValue
      : "integerValue" in t
        ? "" + t.integerValue
        : "doubleValue" in t
          ? "" + t.doubleValue
          : "timestampValue" in t
            ? (function (n) {
                const r = cr(n);
                return `time(${r.seconds},${r.nanos})`;
              })(t.timestampValue)
            : "stringValue" in t
              ? t.stringValue
              : "bytesValue" in t
                ? (function (n) {
                    return hr(n).toBase64();
                  })(t.bytesValue)
                : "referenceValue" in t
                  ? (function (n) {
                      return H.fromName(n).toString();
                    })(t.referenceValue)
                  : "geoPointValue" in t
                    ? (function (n) {
                        return `geo(${n.latitude},${n.longitude})`;
                      })(t.geoPointValue)
                    : "arrayValue" in t
                      ? (function (n) {
                          let r = "[",
                            i = !0;
                          for (const s of n.values || [])
                            (i ? (i = !1) : (r += ","), (r += Bh(s)));
                          return r + "]";
                        })(t.arrayValue)
                      : "mapValue" in t
                        ? (function (n) {
                            const r = Object.keys(n.fields || {}).sort();
                            let i = "{",
                              s = !0;
                            for (const o of r)
                              (s ? (s = !1) : (i += ","),
                                (i += `${o}:${Bh(n.fields[o])}`));
                            return i + "}";
                          })(t.mapValue)
                        : G(61005, { value: t });
}
function Za(t) {
  switch (dr(t)) {
    case 0:
    case 1:
      return 4;
    case 2:
      return 8;
    case 3:
    case 8:
      return 16;
    case 4:
      const e = mu(t);
      return e ? 16 + Za(e) : 16;
    case 5:
      return 2 * t.stringValue.length;
    case 6:
      return hr(t.bytesValue).approximateByteSize();
    case 7:
      return t.referenceValue.length;
    case 9:
      return (function (r) {
        return (r.values || []).reduce((i, s) => i + Za(s), 0);
      })(t.arrayValue);
    case 10:
    case 11:
      return (function (r) {
        let i = 0;
        return (
          Er(r.fields, (s, o) => {
            i += s.length + Za(o);
          }),
          i
        );
      })(t.mapValue);
    default:
      throw G(13486, { value: t });
  }
}
function Wg(t, e) {
  return {
    referenceValue: `projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`,
  };
}
function zh(t) {
  return !!t && "integerValue" in t;
}
function ff(t) {
  return !!t && "arrayValue" in t;
}
function Hg(t) {
  return !!t && "nullValue" in t;
}
function qg(t) {
  return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}
function el(t) {
  return !!t && "mapValue" in t;
}
function tk(t) {
  var n, r;
  return (
    ((r = (((n = t == null ? void 0 : t.mapValue) == null
      ? void 0
      : n.fields) || {})[tw]) == null
      ? void 0
      : r.stringValue) === nw
  );
}
function no(t) {
  if (t.geoPointValue) return { geoPointValue: { ...t.geoPointValue } };
  if (t.timestampValue && typeof t.timestampValue == "object")
    return { timestampValue: { ...t.timestampValue } };
  if (t.mapValue) {
    const e = { mapValue: { fields: {} } };
    return (Er(t.mapValue.fields, (n, r) => (e.mapValue.fields[n] = no(r))), e);
  }
  if (t.arrayValue) {
    const e = { arrayValue: { values: [] } };
    for (let n = 0; n < (t.arrayValue.values || []).length; ++n)
      e.arrayValue.values[n] = no(t.arrayValue.values[n]);
    return e;
  }
  return { ...t };
}
function nk(t) {
  return (((t.mapValue || {}).fields || {}).__type__ || {}).stringValue === ek;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ct {
  constructor(e) {
    this.value = e;
  }
  static empty() {
    return new ct({ mapValue: {} });
  }
  field(e) {
    if (e.isEmpty()) return this.value;
    {
      let n = this.value;
      for (let r = 0; r < e.length - 1; ++r)
        if (((n = (n.mapValue.fields || {})[e.get(r)]), !el(n))) return null;
      return ((n = (n.mapValue.fields || {})[e.lastSegment()]), n || null);
    }
  }
  set(e, n) {
    this.getFieldsMap(e.popLast())[e.lastSegment()] = no(n);
  }
  setAll(e) {
    let n = $e.emptyPath(),
      r = {},
      i = [];
    e.forEach((o, l) => {
      if (!n.isImmediateParentOf(l)) {
        const u = this.getFieldsMap(n);
        (this.applyChanges(u, r, i), (r = {}), (i = []), (n = l.popLast()));
      }
      o ? (r[l.lastSegment()] = no(o)) : i.push(l.lastSegment());
    });
    const s = this.getFieldsMap(n);
    this.applyChanges(s, r, i);
  }
  delete(e) {
    const n = this.field(e.popLast());
    el(n) && n.mapValue.fields && delete n.mapValue.fields[e.lastSegment()];
  }
  isEqual(e) {
    return sn(this.value, e.value);
  }
  getFieldsMap(e) {
    let n = this.value;
    n.mapValue.fields || (n.mapValue = { fields: {} });
    for (let r = 0; r < e.length; ++r) {
      let i = n.mapValue.fields[e.get(r)];
      ((el(i) && i.mapValue.fields) ||
        ((i = { mapValue: { fields: {} } }), (n.mapValue.fields[e.get(r)] = i)),
        (n = i));
    }
    return n.mapValue.fields;
  }
  applyChanges(e, n, r) {
    Er(n, (i, s) => (e[i] = s));
    for (const i of r) delete e[i];
  }
  clone() {
    return new ct(no(this.value));
  }
}
function rw(t) {
  const e = [];
  return (
    Er(t.fields, (n, r) => {
      const i = new $e([n]);
      if (el(r)) {
        const s = rw(r.mapValue).fields;
        if (s.length === 0) e.push(i);
        else for (const o of s) e.push(i.child(o));
      } else e.push(i);
    }),
    new vt(e)
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ze {
  constructor(e, n, r, i, s, o, l) {
    ((this.key = e),
      (this.documentType = n),
      (this.version = r),
      (this.readTime = i),
      (this.createTime = s),
      (this.data = o),
      (this.documentState = l));
  }
  static newInvalidDocument(e) {
    return new Ze(e, 0, Q.min(), Q.min(), Q.min(), ct.empty(), 0);
  }
  static newFoundDocument(e, n, r, i) {
    return new Ze(e, 1, n, Q.min(), r, i, 0);
  }
  static newNoDocument(e, n) {
    return new Ze(e, 2, n, Q.min(), Q.min(), ct.empty(), 0);
  }
  static newUnknownDocument(e, n) {
    return new Ze(e, 3, n, Q.min(), Q.min(), ct.empty(), 2);
  }
  convertToFoundDocument(e, n) {
    return (
      !this.createTime.isEqual(Q.min()) ||
        (this.documentType !== 2 && this.documentType !== 0) ||
        (this.createTime = e),
      (this.version = e),
      (this.documentType = 1),
      (this.data = n),
      (this.documentState = 0),
      this
    );
  }
  convertToNoDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 2),
      (this.data = ct.empty()),
      (this.documentState = 0),
      this
    );
  }
  convertToUnknownDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 3),
      (this.data = ct.empty()),
      (this.documentState = 2),
      this
    );
  }
  setHasCommittedMutations() {
    return ((this.documentState = 2), this);
  }
  setHasLocalMutations() {
    return ((this.documentState = 1), (this.version = Q.min()), this);
  }
  setReadTime(e) {
    return ((this.readTime = e), this);
  }
  get hasLocalMutations() {
    return this.documentState === 1;
  }
  get hasCommittedMutations() {
    return this.documentState === 2;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return this.documentType !== 0;
  }
  isFoundDocument() {
    return this.documentType === 1;
  }
  isNoDocument() {
    return this.documentType === 2;
  }
  isUnknownDocument() {
    return this.documentType === 3;
  }
  isEqual(e) {
    return (
      e instanceof Ze &&
      this.key.isEqual(e.key) &&
      this.version.isEqual(e.version) &&
      this.documentType === e.documentType &&
      this.documentState === e.documentState &&
      this.data.isEqual(e.data)
    );
  }
  mutableCopy() {
    return new Ze(
      this.key,
      this.documentType,
      this.version,
      this.readTime,
      this.createTime,
      this.data.clone(),
      this.documentState,
    );
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ul {
  constructor(e, n) {
    ((this.position = e), (this.inclusive = n));
  }
}
function Gg(t, e, n) {
  let r = 0;
  for (let i = 0; i < t.position.length; i++) {
    const s = e[i],
      o = t.position[i];
    if (
      (s.field.isKeyField()
        ? (r = H.comparator(H.fromName(o.referenceValue), n.key))
        : (r = qi(o, n.data.field(s.field))),
      s.dir === "desc" && (r *= -1),
      r !== 0)
    )
      break;
  }
  return r;
}
function Kg(t, e) {
  if (t === null) return e === null;
  if (
    e === null ||
    t.inclusive !== e.inclusive ||
    t.position.length !== e.position.length
  )
    return !1;
  for (let n = 0; n < t.position.length; n++)
    if (!sn(t.position[n], e.position[n])) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class No {
  constructor(e, n = "asc") {
    ((this.field = e), (this.dir = n));
  }
}
function rk(t, e) {
  return t.dir === e.dir && t.field.isEqual(e.field);
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iw {}
class Pe extends iw {
  constructor(e, n, r) {
    (super(), (this.field = e), (this.op = n), (this.value = r));
  }
  static create(e, n, r) {
    return e.isKeyField()
      ? n === "in" || n === "not-in"
        ? this.createKeyFieldInFilter(e, n, r)
        : new sk(e, n, r)
      : n === "array-contains"
        ? new lk(e, r)
        : n === "in"
          ? new uk(e, r)
          : n === "not-in"
            ? new ck(e, r)
            : n === "array-contains-any"
              ? new hk(e, r)
              : new Pe(e, n, r);
  }
  static createKeyFieldInFilter(e, n, r) {
    return n === "in" ? new ok(e, r) : new ak(e, r);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return this.op === "!="
      ? n !== null &&
          n.nullValue === void 0 &&
          this.matchesComparison(qi(n, this.value))
      : n !== null &&
          dr(this.value) === dr(n) &&
          this.matchesComparison(qi(n, this.value));
  }
  matchesComparison(e) {
    switch (this.op) {
      case "<":
        return e < 0;
      case "<=":
        return e <= 0;
      case "==":
        return e === 0;
      case "!=":
        return e !== 0;
      case ">":
        return e > 0;
      case ">=":
        return e >= 0;
      default:
        return G(47266, { operator: this.op });
    }
  }
  isInequality() {
    return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
  }
  getFlattenedFilters() {
    return [this];
  }
  getFilters() {
    return [this];
  }
}
class Wt extends iw {
  constructor(e, n) {
    (super(), (this.filters = e), (this.op = n), (this.Pe = null));
  }
  static create(e, n) {
    return new Wt(e, n);
  }
  matches(e) {
    return sw(this)
      ? this.filters.find((n) => !n.matches(e)) === void 0
      : this.filters.find((n) => n.matches(e)) !== void 0;
  }
  getFlattenedFilters() {
    return (
      this.Pe !== null ||
        (this.Pe = this.filters.reduce(
          (e, n) => e.concat(n.getFlattenedFilters()),
          [],
        )),
      this.Pe
    );
  }
  getFilters() {
    return Object.assign([], this.filters);
  }
}
function sw(t) {
  return t.op === "and";
}
function ow(t) {
  return ik(t) && sw(t);
}
function ik(t) {
  for (const e of t.filters) if (e instanceof Wt) return !1;
  return !0;
}
function $h(t) {
  if (t instanceof Pe)
    return t.field.canonicalString() + t.op.toString() + Gi(t.value);
  if (ow(t)) return t.filters.map((e) => $h(e)).join(",");
  {
    const e = t.filters.map((n) => $h(n)).join(",");
    return `${t.op}(${e})`;
  }
}
function aw(t, e) {
  return t instanceof Pe
    ? (function (r, i) {
        return (
          i instanceof Pe &&
          r.op === i.op &&
          r.field.isEqual(i.field) &&
          sn(r.value, i.value)
        );
      })(t, e)
    : t instanceof Wt
      ? (function (r, i) {
          return i instanceof Wt &&
            r.op === i.op &&
            r.filters.length === i.filters.length
            ? r.filters.reduce((s, o, l) => s && aw(o, i.filters[l]), !0)
            : !1;
        })(t, e)
      : void G(19439);
}
function lw(t) {
  return t instanceof Pe
    ? (function (n) {
        return `${n.field.canonicalString()} ${n.op} ${Gi(n.value)}`;
      })(t)
    : t instanceof Wt
      ? (function (n) {
          return (
            n.op.toString() + " {" + n.getFilters().map(lw).join(" ,") + "}"
          );
        })(t)
      : "Filter";
}
class sk extends Pe {
  constructor(e, n, r) {
    (super(e, n, r), (this.key = H.fromName(r.referenceValue)));
  }
  matches(e) {
    const n = H.comparator(e.key, this.key);
    return this.matchesComparison(n);
  }
}
class ok extends Pe {
  constructor(e, n) {
    (super(e, "in", n), (this.keys = uw("in", n)));
  }
  matches(e) {
    return this.keys.some((n) => n.isEqual(e.key));
  }
}
class ak extends Pe {
  constructor(e, n) {
    (super(e, "not-in", n), (this.keys = uw("not-in", n)));
  }
  matches(e) {
    return !this.keys.some((n) => n.isEqual(e.key));
  }
}
function uw(t, e) {
  var n;
  return (((n = e.arrayValue) == null ? void 0 : n.values) || []).map((r) =>
    H.fromName(r.referenceValue),
  );
}
class lk extends Pe {
  constructor(e, n) {
    super(e, "array-contains", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return ff(n) && Po(n.arrayValue, this.value);
  }
}
class uk extends Pe {
  constructor(e, n) {
    super(e, "in", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return n !== null && Po(this.value.arrayValue, n);
  }
}
class ck extends Pe {
  constructor(e, n) {
    super(e, "not-in", n);
  }
  matches(e) {
    if (Po(this.value.arrayValue, { nullValue: "NULL_VALUE" })) return !1;
    const n = e.data.field(this.field);
    return (
      n !== null && n.nullValue === void 0 && !Po(this.value.arrayValue, n)
    );
  }
}
class hk extends Pe {
  constructor(e, n) {
    super(e, "array-contains-any", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return (
      !(!ff(n) || !n.arrayValue.values) &&
      n.arrayValue.values.some((r) => Po(this.value.arrayValue, r))
    );
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dk {
  constructor(e, n = null, r = [], i = [], s = null, o = null, l = null) {
    ((this.path = e),
      (this.collectionGroup = n),
      (this.orderBy = r),
      (this.filters = i),
      (this.limit = s),
      (this.startAt = o),
      (this.endAt = l),
      (this.Te = null));
  }
}
function Qg(t, e = null, n = [], r = [], i = null, s = null, o = null) {
  return new dk(t, e, n, r, i, s, o);
}
function pf(t) {
  const e = Y(t);
  if (e.Te === null) {
    let n = e.path.canonicalString();
    (e.collectionGroup !== null && (n += "|cg:" + e.collectionGroup),
      (n += "|f:"),
      (n += e.filters.map((r) => $h(r)).join(",")),
      (n += "|ob:"),
      (n += e.orderBy
        .map((r) =>
          (function (s) {
            return s.field.canonicalString() + s.dir;
          })(r),
        )
        .join(",")),
      pu(e.limit) || ((n += "|l:"), (n += e.limit)),
      e.startAt &&
        ((n += "|lb:"),
        (n += e.startAt.inclusive ? "b:" : "a:"),
        (n += e.startAt.position.map((r) => Gi(r)).join(","))),
      e.endAt &&
        ((n += "|ub:"),
        (n += e.endAt.inclusive ? "a:" : "b:"),
        (n += e.endAt.position.map((r) => Gi(r)).join(","))),
      (e.Te = n));
  }
  return e.Te;
}
function mf(t, e) {
  if (t.limit !== e.limit || t.orderBy.length !== e.orderBy.length) return !1;
  for (let n = 0; n < t.orderBy.length; n++)
    if (!rk(t.orderBy[n], e.orderBy[n])) return !1;
  if (t.filters.length !== e.filters.length) return !1;
  for (let n = 0; n < t.filters.length; n++)
    if (!aw(t.filters[n], e.filters[n])) return !1;
  return (
    t.collectionGroup === e.collectionGroup &&
    !!t.path.isEqual(e.path) &&
    !!Kg(t.startAt, e.startAt) &&
    Kg(t.endAt, e.endAt)
  );
}
function Wh(t) {
  return (
    H.isDocumentKey(t.path) &&
    t.collectionGroup === null &&
    t.filters.length === 0
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class os {
  constructor(
    e,
    n = null,
    r = [],
    i = [],
    s = null,
    o = "F",
    l = null,
    u = null,
  ) {
    ((this.path = e),
      (this.collectionGroup = n),
      (this.explicitOrderBy = r),
      (this.filters = i),
      (this.limit = s),
      (this.limitType = o),
      (this.startAt = l),
      (this.endAt = u),
      (this.Ie = null),
      (this.Ee = null),
      (this.Re = null),
      this.startAt,
      this.endAt);
  }
}
function fk(t, e, n, r, i, s, o, l) {
  return new os(t, e, n, r, i, s, o, l);
}
function gf(t) {
  return new os(t);
}
function Yg(t) {
  return (
    t.filters.length === 0 &&
    t.limit === null &&
    t.startAt == null &&
    t.endAt == null &&
    (t.explicitOrderBy.length === 0 ||
      (t.explicitOrderBy.length === 1 &&
        t.explicitOrderBy[0].field.isKeyField()))
  );
}
function pk(t) {
  return (
    H.isDocumentKey(t.path) &&
    t.collectionGroup === null &&
    t.filters.length === 0
  );
}
function cw(t) {
  return t.collectionGroup !== null;
}
function ro(t) {
  const e = Y(t);
  if (e.Ie === null) {
    e.Ie = [];
    const n = new Set();
    for (const s of e.explicitOrderBy)
      (e.Ie.push(s), n.add(s.field.canonicalString()));
    const r =
      e.explicitOrderBy.length > 0
        ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir
        : "asc";
    ((function (o) {
      let l = new Oe($e.comparator);
      return (
        o.filters.forEach((u) => {
          u.getFlattenedFilters().forEach((h) => {
            h.isInequality() && (l = l.add(h.field));
          });
        }),
        l
      );
    })(e).forEach((s) => {
      n.has(s.canonicalString()) || s.isKeyField() || e.Ie.push(new No(s, r));
    }),
      n.has($e.keyField().canonicalString()) ||
        e.Ie.push(new No($e.keyField(), r)));
  }
  return e.Ie;
}
function en(t) {
  const e = Y(t);
  return (e.Ee || (e.Ee = mk(e, ro(t))), e.Ee);
}
function mk(t, e) {
  if (t.limitType === "F")
    return Qg(
      t.path,
      t.collectionGroup,
      e,
      t.filters,
      t.limit,
      t.startAt,
      t.endAt,
    );
  {
    e = e.map((i) => {
      const s = i.dir === "desc" ? "asc" : "desc";
      return new No(i.field, s);
    });
    const n = t.endAt ? new Ul(t.endAt.position, t.endAt.inclusive) : null,
      r = t.startAt ? new Ul(t.startAt.position, t.startAt.inclusive) : null;
    return Qg(t.path, t.collectionGroup, e, t.filters, t.limit, n, r);
  }
}
function Hh(t, e) {
  const n = t.filters.concat([e]);
  return new os(
    t.path,
    t.collectionGroup,
    t.explicitOrderBy.slice(),
    n,
    t.limit,
    t.limitType,
    t.startAt,
    t.endAt,
  );
}
function gk(t, e) {
  const n = t.explicitOrderBy.concat([e]);
  return new os(
    t.path,
    t.collectionGroup,
    n,
    t.filters.slice(),
    t.limit,
    t.limitType,
    t.startAt,
    t.endAt,
  );
}
function jl(t, e, n) {
  return new os(
    t.path,
    t.collectionGroup,
    t.explicitOrderBy.slice(),
    t.filters.slice(),
    e,
    n,
    t.startAt,
    t.endAt,
  );
}
function gu(t, e) {
  return mf(en(t), en(e)) && t.limitType === e.limitType;
}
function hw(t) {
  return `${pf(en(t))}|lt:${t.limitType}`;
}
function ui(t) {
  return `Query(target=${(function (n) {
    let r = n.path.canonicalString();
    return (
      n.collectionGroup !== null &&
        (r += " collectionGroup=" + n.collectionGroup),
      n.filters.length > 0 &&
        (r += `, filters: [${n.filters.map((i) => lw(i)).join(", ")}]`),
      pu(n.limit) || (r += ", limit: " + n.limit),
      n.orderBy.length > 0 &&
        (r += `, orderBy: [${n.orderBy
          .map((i) =>
            (function (o) {
              return `${o.field.canonicalString()} (${o.dir})`;
            })(i),
          )
          .join(", ")}]`),
      n.startAt &&
        ((r += ", startAt: "),
        (r += n.startAt.inclusive ? "b:" : "a:"),
        (r += n.startAt.position.map((i) => Gi(i)).join(","))),
      n.endAt &&
        ((r += ", endAt: "),
        (r += n.endAt.inclusive ? "a:" : "b:"),
        (r += n.endAt.position.map((i) => Gi(i)).join(","))),
      `Target(${r})`
    );
  })(en(t))}; limitType=${t.limitType})`;
}
function yu(t, e) {
  return (
    e.isFoundDocument() &&
    (function (r, i) {
      const s = i.key.path;
      return r.collectionGroup !== null
        ? i.key.hasCollectionId(r.collectionGroup) && r.path.isPrefixOf(s)
        : H.isDocumentKey(r.path)
          ? r.path.isEqual(s)
          : r.path.isImmediateParentOf(s);
    })(t, e) &&
    (function (r, i) {
      for (const s of ro(r))
        if (!s.field.isKeyField() && i.data.field(s.field) === null) return !1;
      return !0;
    })(t, e) &&
    (function (r, i) {
      for (const s of r.filters) if (!s.matches(i)) return !1;
      return !0;
    })(t, e) &&
    (function (r, i) {
      return !(
        (r.startAt &&
          !(function (o, l, u) {
            const h = Gg(o, l, u);
            return o.inclusive ? h <= 0 : h < 0;
          })(r.startAt, ro(r), i)) ||
        (r.endAt &&
          !(function (o, l, u) {
            const h = Gg(o, l, u);
            return o.inclusive ? h >= 0 : h > 0;
          })(r.endAt, ro(r), i))
      );
    })(t, e)
  );
}
function yk(t) {
  return (
    t.collectionGroup ||
    (t.path.length % 2 == 1
      ? t.path.lastSegment()
      : t.path.get(t.path.length - 2))
  );
}
function dw(t) {
  return (e, n) => {
    let r = !1;
    for (const i of ro(t)) {
      const s = _k(i, e, n);
      if (s !== 0) return s;
      r = r || i.field.isKeyField();
    }
    return 0;
  };
}
function _k(t, e, n) {
  const r = t.field.isKeyField()
    ? H.comparator(e.key, n.key)
    : (function (s, o, l) {
        const u = o.data.field(s),
          h = l.data.field(s);
        return u !== null && h !== null ? qi(u, h) : G(42886);
      })(t.field, e, n);
  switch (t.dir) {
    case "asc":
      return r;
    case "desc":
      return -1 * r;
    default:
      return G(19790, { direction: t.dir });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ti {
  constructor(e, n) {
    ((this.mapKeyFn = e),
      (this.equalsFn = n),
      (this.inner = {}),
      (this.innerSize = 0));
  }
  get(e) {
    const n = this.mapKeyFn(e),
      r = this.inner[n];
    if (r !== void 0) {
      for (const [i, s] of r) if (this.equalsFn(i, e)) return s;
    }
  }
  has(e) {
    return this.get(e) !== void 0;
  }
  set(e, n) {
    const r = this.mapKeyFn(e),
      i = this.inner[r];
    if (i === void 0)
      return ((this.inner[r] = [[e, n]]), void this.innerSize++);
    for (let s = 0; s < i.length; s++)
      if (this.equalsFn(i[s][0], e)) return void (i[s] = [e, n]);
    (i.push([e, n]), this.innerSize++);
  }
  delete(e) {
    const n = this.mapKeyFn(e),
      r = this.inner[n];
    if (r === void 0) return !1;
    for (let i = 0; i < r.length; i++)
      if (this.equalsFn(r[i][0], e))
        return (
          r.length === 1 ? delete this.inner[n] : r.splice(i, 1),
          this.innerSize--,
          !0
        );
    return !1;
  }
  forEach(e) {
    Er(this.inner, (n, r) => {
      for (const [i, s] of r) e(i, s);
    });
  }
  isEmpty() {
    return QE(this.inner);
  }
  size() {
    return this.innerSize;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const vk = new Ee(H.comparator);
function An() {
  return vk;
}
const fw = new Ee(H.comparator);
function zs(...t) {
  let e = fw;
  for (const n of t) e = e.insert(n.key, n);
  return e;
}
function pw(t) {
  let e = fw;
  return (t.forEach((n, r) => (e = e.insert(n, r.overlayedDocument))), e);
}
function br() {
  return io();
}
function mw() {
  return io();
}
function io() {
  return new ti(
    (t) => t.toString(),
    (t, e) => t.isEqual(e),
  );
}
const Ek = new Ee(H.comparator),
  wk = new Oe(H.comparator);
function ne(...t) {
  let e = wk;
  for (const n of t) e = e.add(n);
  return e;
}
const Tk = new Oe(te);
function Ik() {
  return Tk;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function yf(t, e) {
  if (t.useProto3Json) {
    if (isNaN(e)) return { doubleValue: "NaN" };
    if (e === 1 / 0) return { doubleValue: "Infinity" };
    if (e === -1 / 0) return { doubleValue: "-Infinity" };
  }
  return { doubleValue: Ml(e) ? "-0" : e };
}
function gw(t) {
  return { integerValue: "" + t };
}
function yw(t, e) {
  return KR(e) ? gw(e) : yf(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _u {
  constructor() {
    this._ = void 0;
  }
}
function Sk(t, e, n) {
  return t instanceof xo
    ? (function (i, s) {
        const o = {
          fields: {
            [XE]: { stringValue: JE },
            [ew]: {
              timestampValue: { seconds: i.seconds, nanos: i.nanoseconds },
            },
          },
        };
        return (
          s && df(s) && (s = mu(s)),
          s && (o.fields[ZE] = s),
          { mapValue: o }
        );
      })(n, e)
    : t instanceof Do
      ? vw(t, e)
      : t instanceof Vo
        ? Ew(t, e)
        : (function (i, s) {
            const o = _w(i, s),
              l = Jg(o) + Jg(i.Ae);
            return zh(o) && zh(i.Ae) ? gw(l) : yf(i.serializer, l);
          })(t, e);
}
function Ak(t, e, n) {
  return t instanceof Do ? vw(t, e) : t instanceof Vo ? Ew(t, e) : n;
}
function _w(t, e) {
  return t instanceof Oo
    ? (function (r) {
        return (
          zh(r) ||
          (function (s) {
            return !!s && "doubleValue" in s;
          })(r)
        );
      })(e)
      ? e
      : { integerValue: 0 }
    : null;
}
class xo extends _u {}
class Do extends _u {
  constructor(e) {
    (super(), (this.elements = e));
  }
}
function vw(t, e) {
  const n = ww(e);
  for (const r of t.elements) n.some((i) => sn(i, r)) || n.push(r);
  return { arrayValue: { values: n } };
}
class Vo extends _u {
  constructor(e) {
    (super(), (this.elements = e));
  }
}
function Ew(t, e) {
  let n = ww(e);
  for (const r of t.elements) n = n.filter((i) => !sn(i, r));
  return { arrayValue: { values: n } };
}
class Oo extends _u {
  constructor(e, n) {
    (super(), (this.serializer = e), (this.Ae = n));
  }
}
function Jg(t) {
  return Se(t.integerValue || t.doubleValue);
}
function ww(t) {
  return ff(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Tw {
  constructor(e, n) {
    ((this.field = e), (this.transform = n));
  }
}
function Ck(t, e) {
  return (
    t.field.isEqual(e.field) &&
    (function (r, i) {
      return (r instanceof Do && i instanceof Do) ||
        (r instanceof Vo && i instanceof Vo)
        ? Hi(r.elements, i.elements, sn)
        : r instanceof Oo && i instanceof Oo
          ? sn(r.Ae, i.Ae)
          : r instanceof xo && i instanceof xo;
    })(t.transform, e.transform)
  );
}
class Rk {
  constructor(e, n) {
    ((this.version = e), (this.transformResults = n));
  }
}
class tn {
  constructor(e, n) {
    ((this.updateTime = e), (this.exists = n));
  }
  static none() {
    return new tn();
  }
  static exists(e) {
    return new tn(void 0, e);
  }
  static updateTime(e) {
    return new tn(e);
  }
  get isNone() {
    return this.updateTime === void 0 && this.exists === void 0;
  }
  isEqual(e) {
    return (
      this.exists === e.exists &&
      (this.updateTime
        ? !!e.updateTime && this.updateTime.isEqual(e.updateTime)
        : !e.updateTime)
    );
  }
}
function tl(t, e) {
  return t.updateTime !== void 0
    ? e.isFoundDocument() && e.version.isEqual(t.updateTime)
    : t.exists === void 0 || t.exists === e.isFoundDocument();
}
class vu {}
function Iw(t, e) {
  if (!t.hasLocalMutations || (e && e.fields.length === 0)) return null;
  if (e === null)
    return t.isNoDocument()
      ? new Aw(t.key, tn.none())
      : new Go(t.key, t.data, tn.none());
  {
    const n = t.data,
      r = ct.empty();
    let i = new Oe($e.comparator);
    for (let s of e.fields)
      if (!i.has(s)) {
        let o = n.field(s);
        (o === null && s.length > 1 && ((s = s.popLast()), (o = n.field(s))),
          o === null ? r.delete(s) : r.set(s, o),
          (i = i.add(s)));
      }
    return new wr(t.key, r, new vt(i.toArray()), tn.none());
  }
}
function kk(t, e, n) {
  t instanceof Go
    ? (function (i, s, o) {
        const l = i.value.clone(),
          u = Zg(i.fieldTransforms, s, o.transformResults);
        (l.setAll(u),
          s.convertToFoundDocument(o.version, l).setHasCommittedMutations());
      })(t, e, n)
    : t instanceof wr
      ? (function (i, s, o) {
          if (!tl(i.precondition, s))
            return void s.convertToUnknownDocument(o.version);
          const l = Zg(i.fieldTransforms, s, o.transformResults),
            u = s.data;
          (u.setAll(Sw(i)),
            u.setAll(l),
            s.convertToFoundDocument(o.version, u).setHasCommittedMutations());
        })(t, e, n)
      : (function (i, s, o) {
          s.convertToNoDocument(o.version).setHasCommittedMutations();
        })(0, e, n);
}
function so(t, e, n, r) {
  return t instanceof Go
    ? (function (s, o, l, u) {
        if (!tl(s.precondition, o)) return l;
        const h = s.value.clone(),
          f = ey(s.fieldTransforms, u, o);
        return (
          h.setAll(f),
          o.convertToFoundDocument(o.version, h).setHasLocalMutations(),
          null
        );
      })(t, e, n, r)
    : t instanceof wr
      ? (function (s, o, l, u) {
          if (!tl(s.precondition, o)) return l;
          const h = ey(s.fieldTransforms, u, o),
            f = o.data;
          return (
            f.setAll(Sw(s)),
            f.setAll(h),
            o.convertToFoundDocument(o.version, f).setHasLocalMutations(),
            l === null
              ? null
              : l
                  .unionWith(s.fieldMask.fields)
                  .unionWith(s.fieldTransforms.map((p) => p.field))
          );
        })(t, e, n, r)
      : (function (s, o, l) {
          return tl(s.precondition, o)
            ? (o.convertToNoDocument(o.version).setHasLocalMutations(), null)
            : l;
        })(t, e, n);
}
function Pk(t, e) {
  let n = null;
  for (const r of t.fieldTransforms) {
    const i = e.data.field(r.field),
      s = _w(r.transform, i || null);
    s != null && (n === null && (n = ct.empty()), n.set(r.field, s));
  }
  return n || null;
}
function Xg(t, e) {
  return (
    t.type === e.type &&
    !!t.key.isEqual(e.key) &&
    !!t.precondition.isEqual(e.precondition) &&
    !!(function (r, i) {
      return (
        (r === void 0 && i === void 0) ||
        (!(!r || !i) && Hi(r, i, (s, o) => Ck(s, o)))
      );
    })(t.fieldTransforms, e.fieldTransforms) &&
    (t.type === 0
      ? t.value.isEqual(e.value)
      : t.type !== 1 ||
        (t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask)))
  );
}
class Go extends vu {
  constructor(e, n, r, i = []) {
    (super(),
      (this.key = e),
      (this.value = n),
      (this.precondition = r),
      (this.fieldTransforms = i),
      (this.type = 0));
  }
  getFieldMask() {
    return null;
  }
}
class wr extends vu {
  constructor(e, n, r, i, s = []) {
    (super(),
      (this.key = e),
      (this.data = n),
      (this.fieldMask = r),
      (this.precondition = i),
      (this.fieldTransforms = s),
      (this.type = 1));
  }
  getFieldMask() {
    return this.fieldMask;
  }
}
function Sw(t) {
  const e = new Map();
  return (
    t.fieldMask.fields.forEach((n) => {
      if (!n.isEmpty()) {
        const r = t.data.field(n);
        e.set(n, r);
      }
    }),
    e
  );
}
function Zg(t, e, n) {
  const r = new Map();
  se(t.length === n.length, 32656, { Ve: n.length, de: t.length });
  for (let i = 0; i < n.length; i++) {
    const s = t[i],
      o = s.transform,
      l = e.data.field(s.field);
    r.set(s.field, Ak(o, l, n[i]));
  }
  return r;
}
function ey(t, e, n) {
  const r = new Map();
  for (const i of t) {
    const s = i.transform,
      o = n.data.field(i.field);
    r.set(i.field, Sk(s, o, e));
  }
  return r;
}
class Aw extends vu {
  constructor(e, n) {
    (super(),
      (this.key = e),
      (this.precondition = n),
      (this.type = 2),
      (this.fieldTransforms = []));
  }
  getFieldMask() {
    return null;
  }
}
class Nk extends vu {
  constructor(e, n) {
    (super(),
      (this.key = e),
      (this.precondition = n),
      (this.type = 3),
      (this.fieldTransforms = []));
  }
  getFieldMask() {
    return null;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xk {
  constructor(e, n, r, i) {
    ((this.batchId = e),
      (this.localWriteTime = n),
      (this.baseMutations = r),
      (this.mutations = i));
  }
  applyToRemoteDocument(e, n) {
    const r = n.mutationResults;
    for (let i = 0; i < this.mutations.length; i++) {
      const s = this.mutations[i];
      s.key.isEqual(e.key) && kk(s, e, r[i]);
    }
  }
  applyToLocalView(e, n) {
    for (const r of this.baseMutations)
      r.key.isEqual(e.key) && (n = so(r, e, n, this.localWriteTime));
    for (const r of this.mutations)
      r.key.isEqual(e.key) && (n = so(r, e, n, this.localWriteTime));
    return n;
  }
  applyToLocalDocumentSet(e, n) {
    const r = mw();
    return (
      this.mutations.forEach((i) => {
        const s = e.get(i.key),
          o = s.overlayedDocument;
        let l = this.applyToLocalView(o, s.mutatedFields);
        l = n.has(i.key) ? null : l;
        const u = Iw(o, l);
        (u !== null && r.set(i.key, u),
          o.isValidDocument() || o.convertToNoDocument(Q.min()));
      }),
      r
    );
  }
  keys() {
    return this.mutations.reduce((e, n) => e.add(n.key), ne());
  }
  isEqual(e) {
    return (
      this.batchId === e.batchId &&
      Hi(this.mutations, e.mutations, (n, r) => Xg(n, r)) &&
      Hi(this.baseMutations, e.baseMutations, (n, r) => Xg(n, r))
    );
  }
}
class _f {
  constructor(e, n, r, i) {
    ((this.batch = e),
      (this.commitVersion = n),
      (this.mutationResults = r),
      (this.docVersions = i));
  }
  static from(e, n, r) {
    se(e.mutations.length === r.length, 58842, {
      me: e.mutations.length,
      fe: r.length,
    });
    let i = (function () {
      return Ek;
    })();
    const s = e.mutations;
    for (let o = 0; o < s.length; o++) i = i.insert(s[o].key, r[o].version);
    return new _f(e, n, r, i);
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Dk {
  constructor(e, n) {
    ((this.largestBatchId = e), (this.mutation = n));
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(e) {
    return e !== null && this.mutation === e.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Vk {
  constructor(e, n) {
    ((this.count = e), (this.unchangedNames = n));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Re, re;
function Ok(t) {
  switch (t) {
    case M.OK:
      return G(64938);
    case M.CANCELLED:
    case M.UNKNOWN:
    case M.DEADLINE_EXCEEDED:
    case M.RESOURCE_EXHAUSTED:
    case M.INTERNAL:
    case M.UNAVAILABLE:
    case M.UNAUTHENTICATED:
      return !1;
    case M.INVALID_ARGUMENT:
    case M.NOT_FOUND:
    case M.ALREADY_EXISTS:
    case M.PERMISSION_DENIED:
    case M.FAILED_PRECONDITION:
    case M.ABORTED:
    case M.OUT_OF_RANGE:
    case M.UNIMPLEMENTED:
    case M.DATA_LOSS:
      return !0;
    default:
      return G(15467, { code: t });
  }
}
function Cw(t) {
  if (t === void 0) return (In("GRPC error has no .code"), M.UNKNOWN);
  switch (t) {
    case Re.OK:
      return M.OK;
    case Re.CANCELLED:
      return M.CANCELLED;
    case Re.UNKNOWN:
      return M.UNKNOWN;
    case Re.DEADLINE_EXCEEDED:
      return M.DEADLINE_EXCEEDED;
    case Re.RESOURCE_EXHAUSTED:
      return M.RESOURCE_EXHAUSTED;
    case Re.INTERNAL:
      return M.INTERNAL;
    case Re.UNAVAILABLE:
      return M.UNAVAILABLE;
    case Re.UNAUTHENTICATED:
      return M.UNAUTHENTICATED;
    case Re.INVALID_ARGUMENT:
      return M.INVALID_ARGUMENT;
    case Re.NOT_FOUND:
      return M.NOT_FOUND;
    case Re.ALREADY_EXISTS:
      return M.ALREADY_EXISTS;
    case Re.PERMISSION_DENIED:
      return M.PERMISSION_DENIED;
    case Re.FAILED_PRECONDITION:
      return M.FAILED_PRECONDITION;
    case Re.ABORTED:
      return M.ABORTED;
    case Re.OUT_OF_RANGE:
      return M.OUT_OF_RANGE;
    case Re.UNIMPLEMENTED:
      return M.UNIMPLEMENTED;
    case Re.DATA_LOSS:
      return M.DATA_LOSS;
    default:
      return G(39323, { code: t });
  }
}
(((re = Re || (Re = {}))[(re.OK = 0)] = "OK"),
  (re[(re.CANCELLED = 1)] = "CANCELLED"),
  (re[(re.UNKNOWN = 2)] = "UNKNOWN"),
  (re[(re.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
  (re[(re.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
  (re[(re.NOT_FOUND = 5)] = "NOT_FOUND"),
  (re[(re.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
  (re[(re.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
  (re[(re.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
  (re[(re.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
  (re[(re.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
  (re[(re.ABORTED = 10)] = "ABORTED"),
  (re[(re.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
  (re[(re.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
  (re[(re.INTERNAL = 13)] = "INTERNAL"),
  (re[(re.UNAVAILABLE = 14)] = "UNAVAILABLE"),
  (re[(re.DATA_LOSS = 15)] = "DATA_LOSS"));
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Lk() {
  return new TextEncoder();
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Mk = new sr([4294967295, 4294967295], 0);
function ty(t) {
  const e = Lk().encode(t),
    n = new FE();
  return (n.update(e), new Uint8Array(n.digest()));
}
function ny(t) {
  const e = new DataView(t.buffer),
    n = e.getUint32(0, !0),
    r = e.getUint32(4, !0),
    i = e.getUint32(8, !0),
    s = e.getUint32(12, !0);
  return [new sr([n, r], 0), new sr([i, s], 0)];
}
class vf {
  constructor(e, n, r) {
    if (
      ((this.bitmap = e),
      (this.padding = n),
      (this.hashCount = r),
      n < 0 || n >= 8)
    )
      throw new $s(`Invalid padding: ${n}`);
    if (r < 0) throw new $s(`Invalid hash count: ${r}`);
    if (e.length > 0 && this.hashCount === 0)
      throw new $s(`Invalid hash count: ${r}`);
    if (e.length === 0 && n !== 0)
      throw new $s(`Invalid padding when bitmap length is 0: ${n}`);
    ((this.ge = 8 * e.length - n), (this.pe = sr.fromNumber(this.ge)));
  }
  ye(e, n, r) {
    let i = e.add(n.multiply(sr.fromNumber(r)));
    return (
      i.compare(Mk) === 1 && (i = new sr([i.getBits(0), i.getBits(1)], 0)),
      i.modulo(this.pe).toNumber()
    );
  }
  we(e) {
    return !!(this.bitmap[Math.floor(e / 8)] & (1 << (e % 8)));
  }
  mightContain(e) {
    if (this.ge === 0) return !1;
    const n = ty(e),
      [r, i] = ny(n);
    for (let s = 0; s < this.hashCount; s++) {
      const o = this.ye(r, i, s);
      if (!this.we(o)) return !1;
    }
    return !0;
  }
  static create(e, n, r) {
    const i = e % 8 == 0 ? 0 : 8 - (e % 8),
      s = new Uint8Array(Math.ceil(e / 8)),
      o = new vf(s, i, n);
    return (r.forEach((l) => o.insert(l)), o);
  }
  insert(e) {
    if (this.ge === 0) return;
    const n = ty(e),
      [r, i] = ny(n);
    for (let s = 0; s < this.hashCount; s++) {
      const o = this.ye(r, i, s);
      this.be(o);
    }
  }
  be(e) {
    const n = Math.floor(e / 8),
      r = e % 8;
    this.bitmap[n] |= 1 << r;
  }
}
class $s extends Error {
  constructor() {
    (super(...arguments), (this.name = "BloomFilterError"));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Eu {
  constructor(e, n, r, i, s) {
    ((this.snapshotVersion = e),
      (this.targetChanges = n),
      (this.targetMismatches = r),
      (this.documentUpdates = i),
      (this.resolvedLimboDocuments = s));
  }
  static createSynthesizedRemoteEventForCurrentChange(e, n, r) {
    const i = new Map();
    return (
      i.set(e, Ko.createSynthesizedTargetChangeForCurrentChange(e, n, r)),
      new Eu(Q.min(), i, new Ee(te), An(), ne())
    );
  }
}
class Ko {
  constructor(e, n, r, i, s) {
    ((this.resumeToken = e),
      (this.current = n),
      (this.addedDocuments = r),
      (this.modifiedDocuments = i),
      (this.removedDocuments = s));
  }
  static createSynthesizedTargetChangeForCurrentChange(e, n, r) {
    return new Ko(r, n, ne(), ne(), ne());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nl {
  constructor(e, n, r, i) {
    ((this.Se = e), (this.removedTargetIds = n), (this.key = r), (this.De = i));
  }
}
class Rw {
  constructor(e, n) {
    ((this.targetId = e), (this.Ce = n));
  }
}
class kw {
  constructor(e, n, r = qe.EMPTY_BYTE_STRING, i = null) {
    ((this.state = e),
      (this.targetIds = n),
      (this.resumeToken = r),
      (this.cause = i));
  }
}
class ry {
  constructor() {
    ((this.ve = 0),
      (this.Fe = iy()),
      (this.Me = qe.EMPTY_BYTE_STRING),
      (this.xe = !1),
      (this.Oe = !0));
  }
  get current() {
    return this.xe;
  }
  get resumeToken() {
    return this.Me;
  }
  get Ne() {
    return this.ve !== 0;
  }
  get Be() {
    return this.Oe;
  }
  Le(e) {
    e.approximateByteSize() > 0 && ((this.Oe = !0), (this.Me = e));
  }
  ke() {
    let e = ne(),
      n = ne(),
      r = ne();
    return (
      this.Fe.forEach((i, s) => {
        switch (s) {
          case 0:
            e = e.add(i);
            break;
          case 2:
            n = n.add(i);
            break;
          case 1:
            r = r.add(i);
            break;
          default:
            G(38017, { changeType: s });
        }
      }),
      new Ko(this.Me, this.xe, e, n, r)
    );
  }
  Ke() {
    ((this.Oe = !1), (this.Fe = iy()));
  }
  qe(e, n) {
    ((this.Oe = !0), (this.Fe = this.Fe.insert(e, n)));
  }
  Ue(e) {
    ((this.Oe = !0), (this.Fe = this.Fe.remove(e)));
  }
  $e() {
    this.ve += 1;
  }
  We() {
    ((this.ve -= 1), se(this.ve >= 0, 3241, { ve: this.ve }));
  }
  Qe() {
    ((this.Oe = !0), (this.xe = !0));
  }
}
class bk {
  constructor(e) {
    ((this.Ge = e),
      (this.ze = new Map()),
      (this.je = An()),
      (this.He = Oa()),
      (this.Je = Oa()),
      (this.Ze = new Ee(te)));
  }
  Xe(e) {
    for (const n of e.Se)
      e.De && e.De.isFoundDocument()
        ? this.Ye(n, e.De)
        : this.et(n, e.key, e.De);
    for (const n of e.removedTargetIds) this.et(n, e.key, e.De);
  }
  tt(e) {
    this.forEachTarget(e, (n) => {
      const r = this.nt(n);
      switch (e.state) {
        case 0:
          this.rt(n) && r.Le(e.resumeToken);
          break;
        case 1:
          (r.We(), r.Ne || r.Ke(), r.Le(e.resumeToken));
          break;
        case 2:
          (r.We(), r.Ne || this.removeTarget(n));
          break;
        case 3:
          this.rt(n) && (r.Qe(), r.Le(e.resumeToken));
          break;
        case 4:
          this.rt(n) && (this.it(n), r.Le(e.resumeToken));
          break;
        default:
          G(56790, { state: e.state });
      }
    });
  }
  forEachTarget(e, n) {
    e.targetIds.length > 0
      ? e.targetIds.forEach(n)
      : this.ze.forEach((r, i) => {
          this.rt(i) && n(i);
        });
  }
  st(e) {
    const n = e.targetId,
      r = e.Ce.count,
      i = this.ot(n);
    if (i) {
      const s = i.target;
      if (Wh(s))
        if (r === 0) {
          const o = new H(s.path);
          this.et(n, o, Ze.newNoDocument(o, Q.min()));
        } else se(r === 1, 20013, { expectedCount: r });
      else {
        const o = this._t(n);
        if (o !== r) {
          const l = this.ut(e),
            u = l ? this.ct(l, e, o) : 1;
          if (u !== 0) {
            this.it(n);
            const h =
              u === 2
                ? "TargetPurposeExistenceFilterMismatchBloom"
                : "TargetPurposeExistenceFilterMismatch";
            this.Ze = this.Ze.insert(n, h);
          }
        }
      }
    }
  }
  ut(e) {
    const n = e.Ce.unchangedNames;
    if (!n || !n.bits) return null;
    const {
      bits: { bitmap: r = "", padding: i = 0 },
      hashCount: s = 0,
    } = n;
    let o, l;
    try {
      o = hr(r).toUint8Array();
    } catch (u) {
      if (u instanceof YE)
        return (
          Jr(
            "Decoding the base64 bloom filter in existence filter failed (" +
              u.message +
              "); ignoring the bloom filter and falling back to full re-query.",
          ),
          null
        );
      throw u;
    }
    try {
      l = new vf(o, i, s);
    } catch (u) {
      return (
        Jr(
          u instanceof $s
            ? "BloomFilter error: "
            : "Applying bloom filter failed: ",
          u,
        ),
        null
      );
    }
    return l.ge === 0 ? null : l;
  }
  ct(e, n, r) {
    return n.Ce.count === r - this.Pt(e, n.targetId) ? 0 : 2;
  }
  Pt(e, n) {
    const r = this.Ge.getRemoteKeysForTarget(n);
    let i = 0;
    return (
      r.forEach((s) => {
        const o = this.Ge.ht(),
          l = `projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;
        e.mightContain(l) || (this.et(n, s, null), i++);
      }),
      i
    );
  }
  Tt(e) {
    const n = new Map();
    this.ze.forEach((s, o) => {
      const l = this.ot(o);
      if (l) {
        if (s.current && Wh(l.target)) {
          const u = new H(l.target.path);
          this.It(u).has(o) ||
            this.Et(o, u) ||
            this.et(o, u, Ze.newNoDocument(u, e));
        }
        s.Be && (n.set(o, s.ke()), s.Ke());
      }
    });
    let r = ne();
    (this.Je.forEach((s, o) => {
      let l = !0;
      (o.forEachWhile((u) => {
        const h = this.ot(u);
        return (
          !h || h.purpose === "TargetPurposeLimboResolution" || ((l = !1), !1)
        );
      }),
        l && (r = r.add(s)));
    }),
      this.je.forEach((s, o) => o.setReadTime(e)));
    const i = new Eu(e, n, this.Ze, this.je, r);
    return (
      (this.je = An()),
      (this.He = Oa()),
      (this.Je = Oa()),
      (this.Ze = new Ee(te)),
      i
    );
  }
  Ye(e, n) {
    if (!this.rt(e)) return;
    const r = this.Et(e, n.key) ? 2 : 0;
    (this.nt(e).qe(n.key, r),
      (this.je = this.je.insert(n.key, n)),
      (this.He = this.He.insert(n.key, this.It(n.key).add(e))),
      (this.Je = this.Je.insert(n.key, this.Rt(n.key).add(e))));
  }
  et(e, n, r) {
    if (!this.rt(e)) return;
    const i = this.nt(e);
    (this.Et(e, n) ? i.qe(n, 1) : i.Ue(n),
      (this.Je = this.Je.insert(n, this.Rt(n).delete(e))),
      (this.Je = this.Je.insert(n, this.Rt(n).add(e))),
      r && (this.je = this.je.insert(n, r)));
  }
  removeTarget(e) {
    this.ze.delete(e);
  }
  _t(e) {
    const n = this.nt(e).ke();
    return (
      this.Ge.getRemoteKeysForTarget(e).size +
      n.addedDocuments.size -
      n.removedDocuments.size
    );
  }
  $e(e) {
    this.nt(e).$e();
  }
  nt(e) {
    let n = this.ze.get(e);
    return (n || ((n = new ry()), this.ze.set(e, n)), n);
  }
  Rt(e) {
    let n = this.Je.get(e);
    return (n || ((n = new Oe(te)), (this.Je = this.Je.insert(e, n))), n);
  }
  It(e) {
    let n = this.He.get(e);
    return (n || ((n = new Oe(te)), (this.He = this.He.insert(e, n))), n);
  }
  rt(e) {
    const n = this.ot(e) !== null;
    return (n || $("WatchChangeAggregator", "Detected inactive target", e), n);
  }
  ot(e) {
    const n = this.ze.get(e);
    return n && n.Ne ? null : this.Ge.At(e);
  }
  it(e) {
    (this.ze.set(e, new ry()),
      this.Ge.getRemoteKeysForTarget(e).forEach((n) => {
        this.et(e, n, null);
      }));
  }
  Et(e, n) {
    return this.Ge.getRemoteKeysForTarget(e).has(n);
  }
}
function Oa() {
  return new Ee(H.comparator);
}
function iy() {
  return new Ee(H.comparator);
}
const Fk = { asc: "ASCENDING", desc: "DESCENDING" },
  Uk = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY",
  },
  jk = { and: "AND", or: "OR" };
class Bk {
  constructor(e, n) {
    ((this.databaseId = e), (this.useProto3Json = n));
  }
}
function qh(t, e) {
  return t.useProto3Json || pu(e) ? e : { value: e };
}
function Bl(t, e) {
  return t.useProto3Json
    ? `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z`
    : { seconds: "" + e.seconds, nanos: e.nanoseconds };
}
function Pw(t, e) {
  return t.useProto3Json ? e.toBase64() : e.toUint8Array();
}
function zk(t, e) {
  return Bl(t, e.toTimestamp());
}
function nn(t) {
  return (
    se(!!t, 49232),
    Q.fromTimestamp(
      (function (n) {
        const r = cr(n);
        return new fe(r.seconds, r.nanos);
      })(t),
    )
  );
}
function Ef(t, e) {
  return Gh(t, e).canonicalString();
}
function Gh(t, e) {
  const n = (function (i) {
    return new ue(["projects", i.projectId, "databases", i.database]);
  })(t).child("documents");
  return e === void 0 ? n : n.child(e);
}
function Nw(t) {
  const e = ue.fromString(t);
  return (se(Lw(e), 10190, { key: e.toString() }), e);
}
function Kh(t, e) {
  return Ef(t.databaseId, e.path);
}
function Pc(t, e) {
  const n = Nw(e);
  if (n.get(1) !== t.databaseId.projectId)
    throw new B(
      M.INVALID_ARGUMENT,
      "Tried to deserialize key from different project: " +
        n.get(1) +
        " vs " +
        t.databaseId.projectId,
    );
  if (n.get(3) !== t.databaseId.database)
    throw new B(
      M.INVALID_ARGUMENT,
      "Tried to deserialize key from different database: " +
        n.get(3) +
        " vs " +
        t.databaseId.database,
    );
  return new H(Dw(n));
}
function xw(t, e) {
  return Ef(t.databaseId, e);
}
function $k(t) {
  const e = Nw(t);
  return e.length === 4 ? ue.emptyPath() : Dw(e);
}
function Qh(t) {
  return new ue([
    "projects",
    t.databaseId.projectId,
    "databases",
    t.databaseId.database,
  ]).canonicalString();
}
function Dw(t) {
  return (
    se(t.length > 4 && t.get(4) === "documents", 29091, { key: t.toString() }),
    t.popFirst(5)
  );
}
function sy(t, e, n) {
  return { name: Kh(t, e), fields: n.value.mapValue.fields };
}
function Wk(t, e) {
  let n;
  if ("targetChange" in e) {
    e.targetChange;
    const r = (function (h) {
        return h === "NO_CHANGE"
          ? 0
          : h === "ADD"
            ? 1
            : h === "REMOVE"
              ? 2
              : h === "CURRENT"
                ? 3
                : h === "RESET"
                  ? 4
                  : G(39313, { state: h });
      })(e.targetChange.targetChangeType || "NO_CHANGE"),
      i = e.targetChange.targetIds || [],
      s = (function (h, f) {
        return h.useProto3Json
          ? (se(f === void 0 || typeof f == "string", 58123),
            qe.fromBase64String(f || ""))
          : (se(
              f === void 0 || f instanceof Buffer || f instanceof Uint8Array,
              16193,
            ),
            qe.fromUint8Array(f || new Uint8Array()));
      })(t, e.targetChange.resumeToken),
      o = e.targetChange.cause,
      l =
        o &&
        (function (h) {
          const f = h.code === void 0 ? M.UNKNOWN : Cw(h.code);
          return new B(f, h.message || "");
        })(o);
    n = new kw(r, i, s, l || null);
  } else if ("documentChange" in e) {
    e.documentChange;
    const r = e.documentChange;
    (r.document, r.document.name, r.document.updateTime);
    const i = Pc(t, r.document.name),
      s = nn(r.document.updateTime),
      o = r.document.createTime ? nn(r.document.createTime) : Q.min(),
      l = new ct({ mapValue: { fields: r.document.fields } }),
      u = Ze.newFoundDocument(i, s, o, l),
      h = r.targetIds || [],
      f = r.removedTargetIds || [];
    n = new nl(h, f, u.key, u);
  } else if ("documentDelete" in e) {
    e.documentDelete;
    const r = e.documentDelete;
    r.document;
    const i = Pc(t, r.document),
      s = r.readTime ? nn(r.readTime) : Q.min(),
      o = Ze.newNoDocument(i, s),
      l = r.removedTargetIds || [];
    n = new nl([], l, o.key, o);
  } else if ("documentRemove" in e) {
    e.documentRemove;
    const r = e.documentRemove;
    r.document;
    const i = Pc(t, r.document),
      s = r.removedTargetIds || [];
    n = new nl([], s, i, null);
  } else {
    if (!("filter" in e)) return G(11601, { Vt: e });
    {
      e.filter;
      const r = e.filter;
      r.targetId;
      const { count: i = 0, unchangedNames: s } = r,
        o = new Vk(i, s),
        l = r.targetId;
      n = new Rw(l, o);
    }
  }
  return n;
}
function Hk(t, e) {
  let n;
  if (e instanceof Go) n = { update: sy(t, e.key, e.value) };
  else if (e instanceof Aw) n = { delete: Kh(t, e.key) };
  else if (e instanceof wr)
    n = { update: sy(t, e.key, e.data), updateMask: eP(e.fieldMask) };
  else {
    if (!(e instanceof Nk)) return G(16599, { dt: e.type });
    n = { verify: Kh(t, e.key) };
  }
  return (
    e.fieldTransforms.length > 0 &&
      (n.updateTransforms = e.fieldTransforms.map((r) =>
        (function (s, o) {
          const l = o.transform;
          if (l instanceof xo)
            return {
              fieldPath: o.field.canonicalString(),
              setToServerValue: "REQUEST_TIME",
            };
          if (l instanceof Do)
            return {
              fieldPath: o.field.canonicalString(),
              appendMissingElements: { values: l.elements },
            };
          if (l instanceof Vo)
            return {
              fieldPath: o.field.canonicalString(),
              removeAllFromArray: { values: l.elements },
            };
          if (l instanceof Oo)
            return { fieldPath: o.field.canonicalString(), increment: l.Ae };
          throw G(20930, { transform: o.transform });
        })(0, r),
      )),
    e.precondition.isNone ||
      (n.currentDocument = (function (i, s) {
        return s.updateTime !== void 0
          ? { updateTime: zk(i, s.updateTime) }
          : s.exists !== void 0
            ? { exists: s.exists }
            : G(27497);
      })(t, e.precondition)),
    n
  );
}
function qk(t, e) {
  return t && t.length > 0
    ? (se(e !== void 0, 14353),
      t.map((n) =>
        (function (i, s) {
          let o = i.updateTime ? nn(i.updateTime) : nn(s);
          return (
            o.isEqual(Q.min()) && (o = nn(s)),
            new Rk(o, i.transformResults || [])
          );
        })(n, e),
      ))
    : [];
}
function Gk(t, e) {
  return { documents: [xw(t, e.path)] };
}
function Kk(t, e) {
  const n = { structuredQuery: {} },
    r = e.path;
  let i;
  (e.collectionGroup !== null
    ? ((i = r),
      (n.structuredQuery.from = [
        { collectionId: e.collectionGroup, allDescendants: !0 },
      ]))
    : ((i = r.popLast()),
      (n.structuredQuery.from = [{ collectionId: r.lastSegment() }])),
    (n.parent = xw(t, i)));
  const s = (function (h) {
    if (h.length !== 0) return Ow(Wt.create(h, "and"));
  })(e.filters);
  s && (n.structuredQuery.where = s);
  const o = (function (h) {
    if (h.length !== 0)
      return h.map((f) =>
        (function (m) {
          return { field: ci(m.field), direction: Jk(m.dir) };
        })(f),
      );
  })(e.orderBy);
  o && (n.structuredQuery.orderBy = o);
  const l = qh(t, e.limit);
  return (
    l !== null && (n.structuredQuery.limit = l),
    e.startAt &&
      (n.structuredQuery.startAt = (function (h) {
        return { before: h.inclusive, values: h.position };
      })(e.startAt)),
    e.endAt &&
      (n.structuredQuery.endAt = (function (h) {
        return { before: !h.inclusive, values: h.position };
      })(e.endAt)),
    { ft: n, parent: i }
  );
}
function Qk(t) {
  let e = $k(t.parent);
  const n = t.structuredQuery,
    r = n.from ? n.from.length : 0;
  let i = null;
  if (r > 0) {
    se(r === 1, 65062);
    const f = n.from[0];
    f.allDescendants ? (i = f.collectionId) : (e = e.child(f.collectionId));
  }
  let s = [];
  n.where &&
    (s = (function (p) {
      const m = Vw(p);
      return m instanceof Wt && ow(m) ? m.getFilters() : [m];
    })(n.where));
  let o = [];
  n.orderBy &&
    (o = (function (p) {
      return p.map((m) =>
        (function (N) {
          return new No(
            hi(N.field),
            (function (F) {
              switch (F) {
                case "ASCENDING":
                  return "asc";
                case "DESCENDING":
                  return "desc";
                default:
                  return;
              }
            })(N.direction),
          );
        })(m),
      );
    })(n.orderBy));
  let l = null;
  n.limit &&
    (l = (function (p) {
      let m;
      return ((m = typeof p == "object" ? p.value : p), pu(m) ? null : m);
    })(n.limit));
  let u = null;
  n.startAt &&
    (u = (function (p) {
      const m = !!p.before,
        I = p.values || [];
      return new Ul(I, m);
    })(n.startAt));
  let h = null;
  return (
    n.endAt &&
      (h = (function (p) {
        const m = !p.before,
          I = p.values || [];
        return new Ul(I, m);
      })(n.endAt)),
    fk(e, i, o, s, l, "F", u, h)
  );
}
function Yk(t, e) {
  const n = (function (i) {
    switch (i) {
      case "TargetPurposeListen":
        return null;
      case "TargetPurposeExistenceFilterMismatch":
        return "existence-filter-mismatch";
      case "TargetPurposeExistenceFilterMismatchBloom":
        return "existence-filter-mismatch-bloom";
      case "TargetPurposeLimboResolution":
        return "limbo-document";
      default:
        return G(28987, { purpose: i });
    }
  })(e.purpose);
  return n == null ? null : { "goog-listen-tags": n };
}
function Vw(t) {
  return t.unaryFilter !== void 0
    ? (function (n) {
        switch (n.unaryFilter.op) {
          case "IS_NAN":
            const r = hi(n.unaryFilter.field);
            return Pe.create(r, "==", { doubleValue: NaN });
          case "IS_NULL":
            const i = hi(n.unaryFilter.field);
            return Pe.create(i, "==", { nullValue: "NULL_VALUE" });
          case "IS_NOT_NAN":
            const s = hi(n.unaryFilter.field);
            return Pe.create(s, "!=", { doubleValue: NaN });
          case "IS_NOT_NULL":
            const o = hi(n.unaryFilter.field);
            return Pe.create(o, "!=", { nullValue: "NULL_VALUE" });
          case "OPERATOR_UNSPECIFIED":
            return G(61313);
          default:
            return G(60726);
        }
      })(t)
    : t.fieldFilter !== void 0
      ? (function (n) {
          return Pe.create(
            hi(n.fieldFilter.field),
            (function (i) {
              switch (i) {
                case "EQUAL":
                  return "==";
                case "NOT_EQUAL":
                  return "!=";
                case "GREATER_THAN":
                  return ">";
                case "GREATER_THAN_OR_EQUAL":
                  return ">=";
                case "LESS_THAN":
                  return "<";
                case "LESS_THAN_OR_EQUAL":
                  return "<=";
                case "ARRAY_CONTAINS":
                  return "array-contains";
                case "IN":
                  return "in";
                case "NOT_IN":
                  return "not-in";
                case "ARRAY_CONTAINS_ANY":
                  return "array-contains-any";
                case "OPERATOR_UNSPECIFIED":
                  return G(58110);
                default:
                  return G(50506);
              }
            })(n.fieldFilter.op),
            n.fieldFilter.value,
          );
        })(t)
      : t.compositeFilter !== void 0
        ? (function (n) {
            return Wt.create(
              n.compositeFilter.filters.map((r) => Vw(r)),
              (function (i) {
                switch (i) {
                  case "AND":
                    return "and";
                  case "OR":
                    return "or";
                  default:
                    return G(1026);
                }
              })(n.compositeFilter.op),
            );
          })(t)
        : G(30097, { filter: t });
}
function Jk(t) {
  return Fk[t];
}
function Xk(t) {
  return Uk[t];
}
function Zk(t) {
  return jk[t];
}
function ci(t) {
  return { fieldPath: t.canonicalString() };
}
function hi(t) {
  return $e.fromServerFormat(t.fieldPath);
}
function Ow(t) {
  return t instanceof Pe
    ? (function (n) {
        if (n.op === "==") {
          if (qg(n.value))
            return { unaryFilter: { field: ci(n.field), op: "IS_NAN" } };
          if (Hg(n.value))
            return { unaryFilter: { field: ci(n.field), op: "IS_NULL" } };
        } else if (n.op === "!=") {
          if (qg(n.value))
            return { unaryFilter: { field: ci(n.field), op: "IS_NOT_NAN" } };
          if (Hg(n.value))
            return { unaryFilter: { field: ci(n.field), op: "IS_NOT_NULL" } };
        }
        return {
          fieldFilter: { field: ci(n.field), op: Xk(n.op), value: n.value },
        };
      })(t)
    : t instanceof Wt
      ? (function (n) {
          const r = n.getFilters().map((i) => Ow(i));
          return r.length === 1
            ? r[0]
            : { compositeFilter: { op: Zk(n.op), filters: r } };
        })(t)
      : G(54877, { filter: t });
}
function eP(t) {
  const e = [];
  return (
    t.fields.forEach((n) => e.push(n.canonicalString())),
    { fieldPaths: e }
  );
}
function Lw(t) {
  return t.length >= 4 && t.get(0) === "projects" && t.get(2) === "databases";
}
function Mw(t) {
  return (
    !!t && typeof t._toProto == "function" && t._protoValueType === "ProtoValue"
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Gn {
  constructor(
    e,
    n,
    r,
    i,
    s = Q.min(),
    o = Q.min(),
    l = qe.EMPTY_BYTE_STRING,
    u = null,
  ) {
    ((this.target = e),
      (this.targetId = n),
      (this.purpose = r),
      (this.sequenceNumber = i),
      (this.snapshotVersion = s),
      (this.lastLimboFreeSnapshotVersion = o),
      (this.resumeToken = l),
      (this.expectedCount = u));
  }
  withSequenceNumber(e) {
    return new Gn(
      this.target,
      this.targetId,
      this.purpose,
      e,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      this.expectedCount,
    );
  }
  withResumeToken(e, n) {
    return new Gn(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      n,
      this.lastLimboFreeSnapshotVersion,
      e,
      null,
    );
  }
  withExpectedCount(e) {
    return new Gn(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      e,
    );
  }
  withLastLimboFreeSnapshotVersion(e) {
    return new Gn(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      e,
      this.resumeToken,
      this.expectedCount,
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tP {
  constructor(e) {
    this.yt = e;
  }
}
function nP(t) {
  const e = Qk({ parent: t.parent, structuredQuery: t.structuredQuery });
  return t.limitType === "LAST" ? jl(e, e.limit, "L") : e;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rP {
  constructor() {
    this.Sn = new iP();
  }
  addToCollectionParentIndex(e, n) {
    return (this.Sn.add(n), b.resolve());
  }
  getCollectionParents(e, n) {
    return b.resolve(this.Sn.getEntries(n));
  }
  addFieldIndex(e, n) {
    return b.resolve();
  }
  deleteFieldIndex(e, n) {
    return b.resolve();
  }
  deleteAllFieldIndexes(e) {
    return b.resolve();
  }
  createTargetIndexes(e, n) {
    return b.resolve();
  }
  getDocumentsMatchingTarget(e, n) {
    return b.resolve(null);
  }
  getIndexType(e, n) {
    return b.resolve(0);
  }
  getFieldIndexes(e, n) {
    return b.resolve([]);
  }
  getNextCollectionGroupToUpdate(e) {
    return b.resolve(null);
  }
  getMinOffset(e, n) {
    return b.resolve(ur.min());
  }
  getMinOffsetFromCollectionGroup(e, n) {
    return b.resolve(ur.min());
  }
  updateCollectionGroup(e, n, r) {
    return b.resolve();
  }
  updateIndexEntries(e, n) {
    return b.resolve();
  }
}
class iP {
  constructor() {
    this.index = {};
  }
  add(e) {
    const n = e.lastSegment(),
      r = e.popLast(),
      i = this.index[n] || new Oe(ue.comparator),
      s = !i.has(r);
    return ((this.index[n] = i.add(r)), s);
  }
  has(e) {
    const n = e.lastSegment(),
      r = e.popLast(),
      i = this.index[n];
    return i && i.has(r);
  }
  getEntries(e) {
    return (this.index[e] || new Oe(ue.comparator)).toArray();
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const oy = {
    didRun: !1,
    sequenceNumbersCollected: 0,
    targetsRemoved: 0,
    documentsRemoved: 0,
  },
  bw = 41943040;
class lt {
  static withCacheSize(e) {
    return new lt(
      e,
      lt.DEFAULT_COLLECTION_PERCENTILE,
      lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT,
    );
  }
  constructor(e, n, r) {
    ((this.cacheSizeCollectionThreshold = e),
      (this.percentileToCollect = n),
      (this.maximumSequenceNumbersToCollect = r));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ ((lt.DEFAULT_COLLECTION_PERCENTILE = 10),
  (lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3),
  (lt.DEFAULT = new lt(
    bw,
    lt.DEFAULT_COLLECTION_PERCENTILE,
    lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT,
  )),
  (lt.DISABLED = new lt(-1, 0, 0)));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ki {
  constructor(e) {
    this.sr = e;
  }
  next() {
    return ((this.sr += 2), this.sr);
  }
  static _r() {
    return new Ki(0);
  }
  static ar() {
    return new Ki(-1);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ay = "LruGarbageCollector",
  sP = 1048576;
function ly([t, e], [n, r]) {
  const i = te(t, n);
  return i === 0 ? te(e, r) : i;
}
class oP {
  constructor(e) {
    ((this.Pr = e), (this.buffer = new Oe(ly)), (this.Tr = 0));
  }
  Ir() {
    return ++this.Tr;
  }
  Er(e) {
    const n = [e, this.Ir()];
    if (this.buffer.size < this.Pr) this.buffer = this.buffer.add(n);
    else {
      const r = this.buffer.last();
      ly(n, r) < 0 && (this.buffer = this.buffer.delete(r).add(n));
    }
  }
  get maxValue() {
    return this.buffer.last()[0];
  }
}
class aP {
  constructor(e, n, r) {
    ((this.garbageCollector = e),
      (this.asyncQueue = n),
      (this.localStore = r),
      (this.Rr = null));
  }
  start() {
    this.garbageCollector.params.cacheSizeCollectionThreshold !== -1 &&
      this.Ar(6e4);
  }
  stop() {
    this.Rr && (this.Rr.cancel(), (this.Rr = null));
  }
  get started() {
    return this.Rr !== null;
  }
  Ar(e) {
    ($(ay, `Garbage collection scheduled in ${e}ms`),
      (this.Rr = this.asyncQueue.enqueueAfterDelay(
        "lru_garbage_collection",
        e,
        async () => {
          this.Rr = null;
          try {
            await this.localStore.collectGarbage(this.garbageCollector);
          } catch (n) {
            ss(n)
              ? $(ay, "Ignoring IndexedDB error during garbage collection: ", n)
              : await is(n);
          }
          await this.Ar(3e5);
        },
      )));
  }
}
class lP {
  constructor(e, n) {
    ((this.Vr = e), (this.params = n));
  }
  calculateTargetCount(e, n) {
    return this.Vr.dr(e).next((r) => Math.floor((n / 100) * r));
  }
  nthSequenceNumber(e, n) {
    if (n === 0) return b.resolve(fu.ce);
    const r = new oP(n);
    return this.Vr.forEachTarget(e, (i) => r.Er(i.sequenceNumber))
      .next(() => this.Vr.mr(e, (i) => r.Er(i)))
      .next(() => r.maxValue);
  }
  removeTargets(e, n, r) {
    return this.Vr.removeTargets(e, n, r);
  }
  removeOrphanedDocuments(e, n) {
    return this.Vr.removeOrphanedDocuments(e, n);
  }
  collect(e, n) {
    return this.params.cacheSizeCollectionThreshold === -1
      ? ($("LruGarbageCollector", "Garbage collection skipped; disabled"),
        b.resolve(oy))
      : this.getCacheSize(e).next((r) =>
          r < this.params.cacheSizeCollectionThreshold
            ? ($(
                "LruGarbageCollector",
                `Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`,
              ),
              oy)
            : this.gr(e, n),
        );
  }
  getCacheSize(e) {
    return this.Vr.getCacheSize(e);
  }
  gr(e, n) {
    let r, i, s, o, l, u, h;
    const f = Date.now();
    return this.calculateTargetCount(e, this.params.percentileToCollect)
      .next(
        (p) => (
          p > this.params.maximumSequenceNumbersToCollect
            ? ($(
                "LruGarbageCollector",
                `Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`,
              ),
              (i = this.params.maximumSequenceNumbersToCollect))
            : (i = p),
          (o = Date.now()),
          this.nthSequenceNumber(e, i)
        ),
      )
      .next((p) => ((r = p), (l = Date.now()), this.removeTargets(e, r, n)))
      .next(
        (p) => ((s = p), (u = Date.now()), this.removeOrphanedDocuments(e, r)),
      )
      .next(
        (p) => (
          (h = Date.now()),
          li() <= ee.DEBUG &&
            $(
              "LruGarbageCollector",
              `LRU Garbage Collection
	Counted targets in ${o - f}ms
	Determined least recently used ${i} in ` +
                (l - o) +
                `ms
	Removed ${s} targets in ` +
                (u - l) +
                `ms
	Removed ${p} documents in ` +
                (h - u) +
                `ms
Total Duration: ${h - f}ms`,
            ),
          b.resolve({
            didRun: !0,
            sequenceNumbersCollected: i,
            targetsRemoved: s,
            documentsRemoved: p,
          })
        ),
      );
  }
}
function uP(t, e) {
  return new lP(t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cP {
  constructor() {
    ((this.changes = new ti(
      (e) => e.toString(),
      (e, n) => e.isEqual(n),
    )),
      (this.changesApplied = !1));
  }
  addEntry(e) {
    (this.assertNotApplied(), this.changes.set(e.key, e));
  }
  removeEntry(e, n) {
    (this.assertNotApplied(),
      this.changes.set(e, Ze.newInvalidDocument(e).setReadTime(n)));
  }
  getEntry(e, n) {
    this.assertNotApplied();
    const r = this.changes.get(n);
    return r !== void 0 ? b.resolve(r) : this.getFromCache(e, n);
  }
  getEntries(e, n) {
    return this.getAllFromCache(e, n);
  }
  apply(e) {
    return (
      this.assertNotApplied(),
      (this.changesApplied = !0),
      this.applyChanges(e)
    );
  }
  assertNotApplied() {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hP {
  constructor(e, n) {
    ((this.overlayedDocument = e), (this.mutatedFields = n));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dP {
  constructor(e, n, r, i) {
    ((this.remoteDocumentCache = e),
      (this.mutationQueue = n),
      (this.documentOverlayCache = r),
      (this.indexManager = i));
  }
  getDocument(e, n) {
    let r = null;
    return this.documentOverlayCache
      .getOverlay(e, n)
      .next((i) => ((r = i), this.remoteDocumentCache.getEntry(e, n)))
      .next((i) => (r !== null && so(r.mutation, i, vt.empty(), fe.now()), i));
  }
  getDocuments(e, n) {
    return this.remoteDocumentCache
      .getEntries(e, n)
      .next((r) => this.getLocalViewOfDocuments(e, r, ne()).next(() => r));
  }
  getLocalViewOfDocuments(e, n, r = ne()) {
    const i = br();
    return this.populateOverlays(e, i, n).next(() =>
      this.computeViews(e, n, i, r).next((s) => {
        let o = zs();
        return (
          s.forEach((l, u) => {
            o = o.insert(l, u.overlayedDocument);
          }),
          o
        );
      }),
    );
  }
  getOverlayedDocuments(e, n) {
    const r = br();
    return this.populateOverlays(e, r, n).next(() =>
      this.computeViews(e, n, r, ne()),
    );
  }
  populateOverlays(e, n, r) {
    const i = [];
    return (
      r.forEach((s) => {
        n.has(s) || i.push(s);
      }),
      this.documentOverlayCache.getOverlays(e, i).next((s) => {
        s.forEach((o, l) => {
          n.set(o, l);
        });
      })
    );
  }
  computeViews(e, n, r, i) {
    let s = An();
    const o = io(),
      l = (function () {
        return io();
      })();
    return (
      n.forEach((u, h) => {
        const f = r.get(h.key);
        i.has(h.key) && (f === void 0 || f.mutation instanceof wr)
          ? (s = s.insert(h.key, h))
          : f !== void 0
            ? (o.set(h.key, f.mutation.getFieldMask()),
              so(f.mutation, h, f.mutation.getFieldMask(), fe.now()))
            : o.set(h.key, vt.empty());
      }),
      this.recalculateAndSaveOverlays(e, s).next(
        (u) => (
          u.forEach((h, f) => o.set(h, f)),
          n.forEach((h, f) => l.set(h, new hP(f, o.get(h) ?? null))),
          l
        ),
      )
    );
  }
  recalculateAndSaveOverlays(e, n) {
    const r = io();
    let i = new Ee((o, l) => o - l),
      s = ne();
    return this.mutationQueue
      .getAllMutationBatchesAffectingDocumentKeys(e, n)
      .next((o) => {
        for (const l of o)
          l.keys().forEach((u) => {
            const h = n.get(u);
            if (h === null) return;
            let f = r.get(u) || vt.empty();
            ((f = l.applyToLocalView(h, f)), r.set(u, f));
            const p = (i.get(l.batchId) || ne()).add(u);
            i = i.insert(l.batchId, p);
          });
      })
      .next(() => {
        const o = [],
          l = i.getReverseIterator();
        for (; l.hasNext(); ) {
          const u = l.getNext(),
            h = u.key,
            f = u.value,
            p = mw();
          (f.forEach((m) => {
            if (!s.has(m)) {
              const I = Iw(n.get(m), r.get(m));
              (I !== null && p.set(m, I), (s = s.add(m)));
            }
          }),
            o.push(this.documentOverlayCache.saveOverlays(e, h, p)));
        }
        return b.waitFor(o);
      })
      .next(() => r);
  }
  recalculateAndSaveOverlaysForDocumentKeys(e, n) {
    return this.remoteDocumentCache
      .getEntries(e, n)
      .next((r) => this.recalculateAndSaveOverlays(e, r));
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    return pk(n)
      ? this.getDocumentsMatchingDocumentQuery(e, n.path)
      : cw(n)
        ? this.getDocumentsMatchingCollectionGroupQuery(e, n, r, i)
        : this.getDocumentsMatchingCollectionQuery(e, n, r, i);
  }
  getNextDocuments(e, n, r, i) {
    return this.remoteDocumentCache
      .getAllFromCollectionGroup(e, n, r, i)
      .next((s) => {
        const o =
          i - s.size > 0
            ? this.documentOverlayCache.getOverlaysForCollectionGroup(
                e,
                n,
                r.largestBatchId,
                i - s.size,
              )
            : b.resolve(br());
        let l = Co,
          u = s;
        return o.next((h) =>
          b
            .forEach(
              h,
              (f, p) => (
                l < p.largestBatchId && (l = p.largestBatchId),
                s.get(f)
                  ? b.resolve()
                  : this.remoteDocumentCache.getEntry(e, f).next((m) => {
                      u = u.insert(f, m);
                    })
              ),
            )
            .next(() => this.populateOverlays(e, h, s))
            .next(() => this.computeViews(e, u, h, ne()))
            .next((f) => ({ batchId: l, changes: pw(f) })),
        );
      });
  }
  getDocumentsMatchingDocumentQuery(e, n) {
    return this.getDocument(e, new H(n)).next((r) => {
      let i = zs();
      return (r.isFoundDocument() && (i = i.insert(r.key, r)), i);
    });
  }
  getDocumentsMatchingCollectionGroupQuery(e, n, r, i) {
    const s = n.collectionGroup;
    let o = zs();
    return this.indexManager.getCollectionParents(e, s).next((l) =>
      b
        .forEach(l, (u) => {
          const h = (function (p, m) {
            return new os(
              m,
              null,
              p.explicitOrderBy.slice(),
              p.filters.slice(),
              p.limit,
              p.limitType,
              p.startAt,
              p.endAt,
            );
          })(n, u.child(s));
          return this.getDocumentsMatchingCollectionQuery(e, h, r, i).next(
            (f) => {
              f.forEach((p, m) => {
                o = o.insert(p, m);
              });
            },
          );
        })
        .next(() => o),
    );
  }
  getDocumentsMatchingCollectionQuery(e, n, r, i) {
    let s;
    return this.documentOverlayCache
      .getOverlaysForCollection(e, n.path, r.largestBatchId)
      .next(
        (o) => (
          (s = o),
          this.remoteDocumentCache.getDocumentsMatchingQuery(e, n, r, s, i)
        ),
      )
      .next((o) => {
        s.forEach((u, h) => {
          const f = h.getKey();
          o.get(f) === null && (o = o.insert(f, Ze.newInvalidDocument(f)));
        });
        let l = zs();
        return (
          o.forEach((u, h) => {
            const f = s.get(u);
            (f !== void 0 && so(f.mutation, h, vt.empty(), fe.now()),
              yu(n, h) && (l = l.insert(u, h)));
          }),
          l
        );
      });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fP {
  constructor(e) {
    ((this.serializer = e), (this.Nr = new Map()), (this.Br = new Map()));
  }
  getBundleMetadata(e, n) {
    return b.resolve(this.Nr.get(n));
  }
  saveBundleMetadata(e, n) {
    return (
      this.Nr.set(
        n.id,
        (function (i) {
          return { id: i.id, version: i.version, createTime: nn(i.createTime) };
        })(n),
      ),
      b.resolve()
    );
  }
  getNamedQuery(e, n) {
    return b.resolve(this.Br.get(n));
  }
  saveNamedQuery(e, n) {
    return (
      this.Br.set(
        n.name,
        (function (i) {
          return {
            name: i.name,
            query: nP(i.bundledQuery),
            readTime: nn(i.readTime),
          };
        })(n),
      ),
      b.resolve()
    );
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pP {
  constructor() {
    ((this.overlays = new Ee(H.comparator)), (this.Lr = new Map()));
  }
  getOverlay(e, n) {
    return b.resolve(this.overlays.get(n));
  }
  getOverlays(e, n) {
    const r = br();
    return b
      .forEach(n, (i) =>
        this.getOverlay(e, i).next((s) => {
          s !== null && r.set(i, s);
        }),
      )
      .next(() => r);
  }
  saveOverlays(e, n, r) {
    return (
      r.forEach((i, s) => {
        this.bt(e, n, s);
      }),
      b.resolve()
    );
  }
  removeOverlaysForBatchId(e, n, r) {
    const i = this.Lr.get(r);
    return (
      i !== void 0 &&
        (i.forEach((s) => (this.overlays = this.overlays.remove(s))),
        this.Lr.delete(r)),
      b.resolve()
    );
  }
  getOverlaysForCollection(e, n, r) {
    const i = br(),
      s = n.length + 1,
      o = new H(n.child("")),
      l = this.overlays.getIteratorFrom(o);
    for (; l.hasNext(); ) {
      const u = l.getNext().value,
        h = u.getKey();
      if (!n.isPrefixOf(h.path)) break;
      h.path.length === s && u.largestBatchId > r && i.set(u.getKey(), u);
    }
    return b.resolve(i);
  }
  getOverlaysForCollectionGroup(e, n, r, i) {
    let s = new Ee((h, f) => h - f);
    const o = this.overlays.getIterator();
    for (; o.hasNext(); ) {
      const h = o.getNext().value;
      if (h.getKey().getCollectionGroup() === n && h.largestBatchId > r) {
        let f = s.get(h.largestBatchId);
        (f === null && ((f = br()), (s = s.insert(h.largestBatchId, f))),
          f.set(h.getKey(), h));
      }
    }
    const l = br(),
      u = s.getIterator();
    for (
      ;
      u.hasNext() &&
      (u.getNext().value.forEach((h, f) => l.set(h, f)), !(l.size() >= i));
    );
    return b.resolve(l);
  }
  bt(e, n, r) {
    const i = this.overlays.get(r.key);
    if (i !== null) {
      const o = this.Lr.get(i.largestBatchId).delete(r.key);
      this.Lr.set(i.largestBatchId, o);
    }
    this.overlays = this.overlays.insert(r.key, new Dk(n, r));
    let s = this.Lr.get(n);
    (s === void 0 && ((s = ne()), this.Lr.set(n, s)),
      this.Lr.set(n, s.add(r.key)));
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mP {
  constructor() {
    this.sessionToken = qe.EMPTY_BYTE_STRING;
  }
  getSessionToken(e) {
    return b.resolve(this.sessionToken);
  }
  setSessionToken(e, n) {
    return ((this.sessionToken = n), b.resolve());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wf {
  constructor() {
    ((this.kr = new Oe(be.Kr)), (this.qr = new Oe(be.Ur)));
  }
  isEmpty() {
    return this.kr.isEmpty();
  }
  addReference(e, n) {
    const r = new be(e, n);
    ((this.kr = this.kr.add(r)), (this.qr = this.qr.add(r)));
  }
  $r(e, n) {
    e.forEach((r) => this.addReference(r, n));
  }
  removeReference(e, n) {
    this.Wr(new be(e, n));
  }
  Qr(e, n) {
    e.forEach((r) => this.removeReference(r, n));
  }
  Gr(e) {
    const n = new H(new ue([])),
      r = new be(n, e),
      i = new be(n, e + 1),
      s = [];
    return (
      this.qr.forEachInRange([r, i], (o) => {
        (this.Wr(o), s.push(o.key));
      }),
      s
    );
  }
  zr() {
    this.kr.forEach((e) => this.Wr(e));
  }
  Wr(e) {
    ((this.kr = this.kr.delete(e)), (this.qr = this.qr.delete(e)));
  }
  jr(e) {
    const n = new H(new ue([])),
      r = new be(n, e),
      i = new be(n, e + 1);
    let s = ne();
    return (
      this.qr.forEachInRange([r, i], (o) => {
        s = s.add(o.key);
      }),
      s
    );
  }
  containsKey(e) {
    const n = new be(e, 0),
      r = this.kr.firstAfterOrEqual(n);
    return r !== null && e.isEqual(r.key);
  }
}
class be {
  constructor(e, n) {
    ((this.key = e), (this.Hr = n));
  }
  static Kr(e, n) {
    return H.comparator(e.key, n.key) || te(e.Hr, n.Hr);
  }
  static Ur(e, n) {
    return te(e.Hr, n.Hr) || H.comparator(e.key, n.key);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gP {
  constructor(e, n) {
    ((this.indexManager = e),
      (this.referenceDelegate = n),
      (this.mutationQueue = []),
      (this.Yn = 1),
      (this.Jr = new Oe(be.Kr)));
  }
  checkEmpty(e) {
    return b.resolve(this.mutationQueue.length === 0);
  }
  addMutationBatch(e, n, r, i) {
    const s = this.Yn;
    (this.Yn++,
      this.mutationQueue.length > 0 &&
        this.mutationQueue[this.mutationQueue.length - 1]);
    const o = new xk(s, n, r, i);
    this.mutationQueue.push(o);
    for (const l of i)
      ((this.Jr = this.Jr.add(new be(l.key, s))),
        this.indexManager.addToCollectionParentIndex(e, l.key.path.popLast()));
    return b.resolve(o);
  }
  lookupMutationBatch(e, n) {
    return b.resolve(this.Zr(n));
  }
  getNextMutationBatchAfterBatchId(e, n) {
    const r = n + 1,
      i = this.Xr(r),
      s = i < 0 ? 0 : i;
    return b.resolve(
      this.mutationQueue.length > s ? this.mutationQueue[s] : null,
    );
  }
  getHighestUnacknowledgedBatchId() {
    return b.resolve(this.mutationQueue.length === 0 ? hf : this.Yn - 1);
  }
  getAllMutationBatches(e) {
    return b.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(e, n) {
    const r = new be(n, 0),
      i = new be(n, Number.POSITIVE_INFINITY),
      s = [];
    return (
      this.Jr.forEachInRange([r, i], (o) => {
        const l = this.Zr(o.Hr);
        s.push(l);
      }),
      b.resolve(s)
    );
  }
  getAllMutationBatchesAffectingDocumentKeys(e, n) {
    let r = new Oe(te);
    return (
      n.forEach((i) => {
        const s = new be(i, 0),
          o = new be(i, Number.POSITIVE_INFINITY);
        this.Jr.forEachInRange([s, o], (l) => {
          r = r.add(l.Hr);
        });
      }),
      b.resolve(this.Yr(r))
    );
  }
  getAllMutationBatchesAffectingQuery(e, n) {
    const r = n.path,
      i = r.length + 1;
    let s = r;
    H.isDocumentKey(s) || (s = s.child(""));
    const o = new be(new H(s), 0);
    let l = new Oe(te);
    return (
      this.Jr.forEachWhile((u) => {
        const h = u.key.path;
        return !!r.isPrefixOf(h) && (h.length === i && (l = l.add(u.Hr)), !0);
      }, o),
      b.resolve(this.Yr(l))
    );
  }
  Yr(e) {
    const n = [];
    return (
      e.forEach((r) => {
        const i = this.Zr(r);
        i !== null && n.push(i);
      }),
      n
    );
  }
  removeMutationBatch(e, n) {
    (se(this.ei(n.batchId, "removed") === 0, 55003),
      this.mutationQueue.shift());
    let r = this.Jr;
    return b
      .forEach(n.mutations, (i) => {
        const s = new be(i.key, n.batchId);
        return (
          (r = r.delete(s)),
          this.referenceDelegate.markPotentiallyOrphaned(e, i.key)
        );
      })
      .next(() => {
        this.Jr = r;
      });
  }
  nr(e) {}
  containsKey(e, n) {
    const r = new be(n, 0),
      i = this.Jr.firstAfterOrEqual(r);
    return b.resolve(n.isEqual(i && i.key));
  }
  performConsistencyCheck(e) {
    return (this.mutationQueue.length, b.resolve());
  }
  ei(e, n) {
    return this.Xr(e);
  }
  Xr(e) {
    return this.mutationQueue.length === 0
      ? 0
      : e - this.mutationQueue[0].batchId;
  }
  Zr(e) {
    const n = this.Xr(e);
    return n < 0 || n >= this.mutationQueue.length
      ? null
      : this.mutationQueue[n];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yP {
  constructor(e) {
    ((this.ti = e),
      (this.docs = (function () {
        return new Ee(H.comparator);
      })()),
      (this.size = 0));
  }
  setIndexManager(e) {
    this.indexManager = e;
  }
  addEntry(e, n) {
    const r = n.key,
      i = this.docs.get(r),
      s = i ? i.size : 0,
      o = this.ti(n);
    return (
      (this.docs = this.docs.insert(r, { document: n.mutableCopy(), size: o })),
      (this.size += o - s),
      this.indexManager.addToCollectionParentIndex(e, r.path.popLast())
    );
  }
  removeEntry(e) {
    const n = this.docs.get(e);
    n && ((this.docs = this.docs.remove(e)), (this.size -= n.size));
  }
  getEntry(e, n) {
    const r = this.docs.get(n);
    return b.resolve(r ? r.document.mutableCopy() : Ze.newInvalidDocument(n));
  }
  getEntries(e, n) {
    let r = An();
    return (
      n.forEach((i) => {
        const s = this.docs.get(i);
        r = r.insert(
          i,
          s ? s.document.mutableCopy() : Ze.newInvalidDocument(i),
        );
      }),
      b.resolve(r)
    );
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    let s = An();
    const o = n.path,
      l = new H(o.child("__id-9223372036854775808__")),
      u = this.docs.getIteratorFrom(l);
    for (; u.hasNext(); ) {
      const {
        key: h,
        value: { document: f },
      } = u.getNext();
      if (!o.isPrefixOf(h.path)) break;
      h.path.length > o.length + 1 ||
        WR($R(f), r) <= 0 ||
        ((i.has(f.key) || yu(n, f)) && (s = s.insert(f.key, f.mutableCopy())));
    }
    return b.resolve(s);
  }
  getAllFromCollectionGroup(e, n, r, i) {
    G(9500);
  }
  ni(e, n) {
    return b.forEach(this.docs, (r) => n(r));
  }
  newChangeBuffer(e) {
    return new _P(this);
  }
  getSize(e) {
    return b.resolve(this.size);
  }
}
class _P extends cP {
  constructor(e) {
    (super(), (this.Mr = e));
  }
  applyChanges(e) {
    const n = [];
    return (
      this.changes.forEach((r, i) => {
        i.isValidDocument()
          ? n.push(this.Mr.addEntry(e, i))
          : this.Mr.removeEntry(r);
      }),
      b.waitFor(n)
    );
  }
  getFromCache(e, n) {
    return this.Mr.getEntry(e, n);
  }
  getAllFromCache(e, n) {
    return this.Mr.getEntries(e, n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vP {
  constructor(e) {
    ((this.persistence = e),
      (this.ri = new ti((n) => pf(n), mf)),
      (this.lastRemoteSnapshotVersion = Q.min()),
      (this.highestTargetId = 0),
      (this.ii = 0),
      (this.si = new wf()),
      (this.targetCount = 0),
      (this.oi = Ki._r()));
  }
  forEachTarget(e, n) {
    return (this.ri.forEach((r, i) => n(i)), b.resolve());
  }
  getLastRemoteSnapshotVersion(e) {
    return b.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(e) {
    return b.resolve(this.ii);
  }
  allocateTargetId(e) {
    return (
      (this.highestTargetId = this.oi.next()),
      b.resolve(this.highestTargetId)
    );
  }
  setTargetsMetadata(e, n, r) {
    return (
      r && (this.lastRemoteSnapshotVersion = r),
      n > this.ii && (this.ii = n),
      b.resolve()
    );
  }
  lr(e) {
    this.ri.set(e.target, e);
    const n = e.targetId;
    (n > this.highestTargetId &&
      ((this.oi = new Ki(n)), (this.highestTargetId = n)),
      e.sequenceNumber > this.ii && (this.ii = e.sequenceNumber));
  }
  addTargetData(e, n) {
    return (this.lr(n), (this.targetCount += 1), b.resolve());
  }
  updateTargetData(e, n) {
    return (this.lr(n), b.resolve());
  }
  removeTargetData(e, n) {
    return (
      this.ri.delete(n.target),
      this.si.Gr(n.targetId),
      (this.targetCount -= 1),
      b.resolve()
    );
  }
  removeTargets(e, n, r) {
    let i = 0;
    const s = [];
    return (
      this.ri.forEach((o, l) => {
        l.sequenceNumber <= n &&
          r.get(l.targetId) === null &&
          (this.ri.delete(o),
          s.push(this.removeMatchingKeysForTargetId(e, l.targetId)),
          i++);
      }),
      b.waitFor(s).next(() => i)
    );
  }
  getTargetCount(e) {
    return b.resolve(this.targetCount);
  }
  getTargetData(e, n) {
    const r = this.ri.get(n) || null;
    return b.resolve(r);
  }
  addMatchingKeys(e, n, r) {
    return (this.si.$r(n, r), b.resolve());
  }
  removeMatchingKeys(e, n, r) {
    this.si.Qr(n, r);
    const i = this.persistence.referenceDelegate,
      s = [];
    return (
      i &&
        n.forEach((o) => {
          s.push(i.markPotentiallyOrphaned(e, o));
        }),
      b.waitFor(s)
    );
  }
  removeMatchingKeysForTargetId(e, n) {
    return (this.si.Gr(n), b.resolve());
  }
  getMatchingKeysForTargetId(e, n) {
    const r = this.si.jr(n);
    return b.resolve(r);
  }
  containsKey(e, n) {
    return b.resolve(this.si.containsKey(n));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Fw {
  constructor(e, n) {
    ((this._i = {}),
      (this.overlays = {}),
      (this.ai = new fu(0)),
      (this.ui = !1),
      (this.ui = !0),
      (this.ci = new mP()),
      (this.referenceDelegate = e(this)),
      (this.li = new vP(this)),
      (this.indexManager = new rP()),
      (this.remoteDocumentCache = (function (i) {
        return new yP(i);
      })((r) => this.referenceDelegate.hi(r))),
      (this.serializer = new tP(n)),
      (this.Pi = new fP(this.serializer)));
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return ((this.ui = !1), Promise.resolve());
  }
  get started() {
    return this.ui;
  }
  setDatabaseDeletedListener() {}
  setNetworkEnabled() {}
  getIndexManager(e) {
    return this.indexManager;
  }
  getDocumentOverlayCache(e) {
    let n = this.overlays[e.toKey()];
    return (n || ((n = new pP()), (this.overlays[e.toKey()] = n)), n);
  }
  getMutationQueue(e, n) {
    let r = this._i[e.toKey()];
    return (
      r || ((r = new gP(n, this.referenceDelegate)), (this._i[e.toKey()] = r)),
      r
    );
  }
  getGlobalsCache() {
    return this.ci;
  }
  getTargetCache() {
    return this.li;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.Pi;
  }
  runTransaction(e, n, r) {
    $("MemoryPersistence", "Starting transaction:", e);
    const i = new EP(this.ai.next());
    return (
      this.referenceDelegate.Ti(),
      r(i)
        .next((s) => this.referenceDelegate.Ii(i).next(() => s))
        .toPromise()
        .then((s) => (i.raiseOnCommittedEvent(), s))
    );
  }
  Ei(e, n) {
    return b.or(Object.values(this._i).map((r) => () => r.containsKey(e, n)));
  }
}
class EP extends qR {
  constructor(e) {
    (super(), (this.currentSequenceNumber = e));
  }
}
class Tf {
  constructor(e) {
    ((this.persistence = e), (this.Ri = new wf()), (this.Ai = null));
  }
  static Vi(e) {
    return new Tf(e);
  }
  get di() {
    if (this.Ai) return this.Ai;
    throw G(60996);
  }
  addReference(e, n, r) {
    return (
      this.Ri.addReference(r, n),
      this.di.delete(r.toString()),
      b.resolve()
    );
  }
  removeReference(e, n, r) {
    return (
      this.Ri.removeReference(r, n),
      this.di.add(r.toString()),
      b.resolve()
    );
  }
  markPotentiallyOrphaned(e, n) {
    return (this.di.add(n.toString()), b.resolve());
  }
  removeTarget(e, n) {
    this.Ri.Gr(n.targetId).forEach((i) => this.di.add(i.toString()));
    const r = this.persistence.getTargetCache();
    return r
      .getMatchingKeysForTargetId(e, n.targetId)
      .next((i) => {
        i.forEach((s) => this.di.add(s.toString()));
      })
      .next(() => r.removeTargetData(e, n));
  }
  Ti() {
    this.Ai = new Set();
  }
  Ii(e) {
    const n = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return b
      .forEach(this.di, (r) => {
        const i = H.fromPath(r);
        return this.mi(e, i).next((s) => {
          s || n.removeEntry(i, Q.min());
        });
      })
      .next(() => ((this.Ai = null), n.apply(e)));
  }
  updateLimboDocument(e, n) {
    return this.mi(e, n).next((r) => {
      r ? this.di.delete(n.toString()) : this.di.add(n.toString());
    });
  }
  hi(e) {
    return 0;
  }
  mi(e, n) {
    return b.or([
      () => b.resolve(this.Ri.containsKey(n)),
      () => this.persistence.getTargetCache().containsKey(e, n),
      () => this.persistence.Ei(e, n),
    ]);
  }
}
class zl {
  constructor(e, n) {
    ((this.persistence = e),
      (this.fi = new ti(
        (r) => QR(r.path),
        (r, i) => r.isEqual(i),
      )),
      (this.garbageCollector = uP(this, n)));
  }
  static Vi(e, n) {
    return new zl(e, n);
  }
  Ti() {}
  Ii(e) {
    return b.resolve();
  }
  forEachTarget(e, n) {
    return this.persistence.getTargetCache().forEachTarget(e, n);
  }
  dr(e) {
    const n = this.pr(e);
    return this.persistence
      .getTargetCache()
      .getTargetCount(e)
      .next((r) => n.next((i) => r + i));
  }
  pr(e) {
    let n = 0;
    return this.mr(e, (r) => {
      n++;
    }).next(() => n);
  }
  mr(e, n) {
    return b.forEach(this.fi, (r, i) =>
      this.wr(e, r, i).next((s) => (s ? b.resolve() : n(i))),
    );
  }
  removeTargets(e, n, r) {
    return this.persistence.getTargetCache().removeTargets(e, n, r);
  }
  removeOrphanedDocuments(e, n) {
    let r = 0;
    const i = this.persistence.getRemoteDocumentCache(),
      s = i.newChangeBuffer();
    return i
      .ni(e, (o) =>
        this.wr(e, o, n).next((l) => {
          l || (r++, s.removeEntry(o, Q.min()));
        }),
      )
      .next(() => s.apply(e))
      .next(() => r);
  }
  markPotentiallyOrphaned(e, n) {
    return (this.fi.set(n, e.currentSequenceNumber), b.resolve());
  }
  removeTarget(e, n) {
    const r = n.withSequenceNumber(e.currentSequenceNumber);
    return this.persistence.getTargetCache().updateTargetData(e, r);
  }
  addReference(e, n, r) {
    return (this.fi.set(r, e.currentSequenceNumber), b.resolve());
  }
  removeReference(e, n, r) {
    return (this.fi.set(r, e.currentSequenceNumber), b.resolve());
  }
  updateLimboDocument(e, n) {
    return (this.fi.set(n, e.currentSequenceNumber), b.resolve());
  }
  hi(e) {
    let n = e.key.toString().length;
    return (e.isFoundDocument() && (n += Za(e.data.value)), n);
  }
  wr(e, n, r) {
    return b.or([
      () => this.persistence.Ei(e, n),
      () => this.persistence.getTargetCache().containsKey(e, n),
      () => {
        const i = this.fi.get(n);
        return b.resolve(i !== void 0 && i > r);
      },
    ]);
  }
  getCacheSize(e) {
    return this.persistence.getRemoteDocumentCache().getSize(e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class If {
  constructor(e, n, r, i) {
    ((this.targetId = e), (this.fromCache = n), (this.Ts = r), (this.Is = i));
  }
  static Es(e, n) {
    let r = ne(),
      i = ne();
    for (const s of n.docChanges)
      switch (s.type) {
        case 0:
          r = r.add(s.doc.key);
          break;
        case 1:
          i = i.add(s.doc.key);
      }
    return new If(e, n.fromCache, r, i);
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wP {
  constructor() {
    this._documentReadCount = 0;
  }
  get documentReadCount() {
    return this._documentReadCount;
  }
  incrementDocumentReadCount(e) {
    this._documentReadCount += e;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class TP {
  constructor() {
    ((this.Rs = !1),
      (this.As = !1),
      (this.Vs = 100),
      (this.ds = (function () {
        return GS() ? 8 : GR(tt()) > 0 ? 6 : 4;
      })()));
  }
  initialize(e, n) {
    ((this.fs = e), (this.indexManager = n), (this.Rs = !0));
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    const s = { result: null };
    return this.gs(e, n)
      .next((o) => {
        s.result = o;
      })
      .next(() => {
        if (!s.result)
          return this.ps(e, n, i, r).next((o) => {
            s.result = o;
          });
      })
      .next(() => {
        if (s.result) return;
        const o = new wP();
        return this.ys(e, n, o).next((l) => {
          if (((s.result = l), this.As)) return this.ws(e, n, o, l.size);
        });
      })
      .next(() => s.result);
  }
  ws(e, n, r, i) {
    return r.documentReadCount < this.Vs
      ? (li() <= ee.DEBUG &&
          $(
            "QueryEngine",
            "SDK will not create cache indexes for query:",
            ui(n),
            "since it only creates cache indexes for collection contains",
            "more than or equal to",
            this.Vs,
            "documents",
          ),
        b.resolve())
      : (li() <= ee.DEBUG &&
          $(
            "QueryEngine",
            "Query:",
            ui(n),
            "scans",
            r.documentReadCount,
            "local documents and returns",
            i,
            "documents as results.",
          ),
        r.documentReadCount > this.ds * i
          ? (li() <= ee.DEBUG &&
              $(
                "QueryEngine",
                "The SDK decides to create cache indexes for query:",
                ui(n),
                "as using cache indexes may help improve performance.",
              ),
            this.indexManager.createTargetIndexes(e, en(n)))
          : b.resolve());
  }
  gs(e, n) {
    if (Yg(n)) return b.resolve(null);
    let r = en(n);
    return this.indexManager.getIndexType(e, r).next((i) =>
      i === 0
        ? null
        : (n.limit !== null && i === 1 && ((n = jl(n, null, "F")), (r = en(n))),
          this.indexManager.getDocumentsMatchingTarget(e, r).next((s) => {
            const o = ne(...s);
            return this.fs.getDocuments(e, o).next((l) =>
              this.indexManager.getMinOffset(e, r).next((u) => {
                const h = this.bs(n, l);
                return this.Ss(n, h, o, u.readTime)
                  ? this.gs(e, jl(n, null, "F"))
                  : this.Ds(e, h, n, u);
              }),
            );
          })),
    );
  }
  ps(e, n, r, i) {
    return Yg(n) || i.isEqual(Q.min())
      ? b.resolve(null)
      : this.fs.getDocuments(e, r).next((s) => {
          const o = this.bs(n, s);
          return this.Ss(n, o, r, i)
            ? b.resolve(null)
            : (li() <= ee.DEBUG &&
                $(
                  "QueryEngine",
                  "Re-using previous result from %s to execute query: %s",
                  i.toString(),
                  ui(n),
                ),
              this.Ds(e, o, n, zR(i, Co)).next((l) => l));
        });
  }
  bs(e, n) {
    let r = new Oe(dw(e));
    return (
      n.forEach((i, s) => {
        yu(e, s) && (r = r.add(s));
      }),
      r
    );
  }
  Ss(e, n, r, i) {
    if (e.limit === null) return !1;
    if (r.size !== n.size) return !0;
    const s = e.limitType === "F" ? n.last() : n.first();
    return !!s && (s.hasPendingWrites || s.version.compareTo(i) > 0);
  }
  ys(e, n, r) {
    return (
      li() <= ee.DEBUG &&
        $("QueryEngine", "Using full collection scan to execute query:", ui(n)),
      this.fs.getDocumentsMatchingQuery(e, n, ur.min(), r)
    );
  }
  Ds(e, n, r, i) {
    return this.fs.getDocumentsMatchingQuery(e, r, i).next(
      (s) => (
        n.forEach((o) => {
          s = s.insert(o.key, o);
        }),
        s
      ),
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Sf = "LocalStore",
  IP = 3e8;
class SP {
  constructor(e, n, r, i) {
    ((this.persistence = e),
      (this.Cs = n),
      (this.serializer = i),
      (this.vs = new Ee(te)),
      (this.Fs = new ti((s) => pf(s), mf)),
      (this.Ms = new Map()),
      (this.xs = e.getRemoteDocumentCache()),
      (this.li = e.getTargetCache()),
      (this.Pi = e.getBundleCache()),
      this.Os(r));
  }
  Os(e) {
    ((this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e)),
      (this.indexManager = this.persistence.getIndexManager(e)),
      (this.mutationQueue = this.persistence.getMutationQueue(
        e,
        this.indexManager,
      )),
      (this.localDocuments = new dP(
        this.xs,
        this.mutationQueue,
        this.documentOverlayCache,
        this.indexManager,
      )),
      this.xs.setIndexManager(this.indexManager),
      this.Cs.initialize(this.localDocuments, this.indexManager));
  }
  collectGarbage(e) {
    return this.persistence.runTransaction(
      "Collect garbage",
      "readwrite-primary",
      (n) => e.collect(n, this.vs),
    );
  }
}
function AP(t, e, n, r) {
  return new SP(t, e, n, r);
}
async function Uw(t, e) {
  const n = Y(t);
  return await n.persistence.runTransaction(
    "Handle user change",
    "readonly",
    (r) => {
      let i;
      return n.mutationQueue
        .getAllMutationBatches(r)
        .next(
          (s) => ((i = s), n.Os(e), n.mutationQueue.getAllMutationBatches(r)),
        )
        .next((s) => {
          const o = [],
            l = [];
          let u = ne();
          for (const h of i) {
            o.push(h.batchId);
            for (const f of h.mutations) u = u.add(f.key);
          }
          for (const h of s) {
            l.push(h.batchId);
            for (const f of h.mutations) u = u.add(f.key);
          }
          return n.localDocuments
            .getDocuments(r, u)
            .next((h) => ({ Ns: h, removedBatchIds: o, addedBatchIds: l }));
        });
    },
  );
}
function CP(t, e) {
  const n = Y(t);
  return n.persistence.runTransaction(
    "Acknowledge batch",
    "readwrite-primary",
    (r) => {
      const i = e.batch.keys(),
        s = n.xs.newChangeBuffer({ trackRemovals: !0 });
      return (function (l, u, h, f) {
        const p = h.batch,
          m = p.keys();
        let I = b.resolve();
        return (
          m.forEach((N) => {
            I = I.next(() => f.getEntry(u, N)).next((D) => {
              const F = h.docVersions.get(N);
              (se(F !== null, 48541),
                D.version.compareTo(F) < 0 &&
                  (p.applyToRemoteDocument(D, h),
                  D.isValidDocument() &&
                    (D.setReadTime(h.commitVersion), f.addEntry(D))));
            });
          }),
          I.next(() => l.mutationQueue.removeMutationBatch(u, p))
        );
      })(n, r, e, s)
        .next(() => s.apply(r))
        .next(() => n.mutationQueue.performConsistencyCheck(r))
        .next(() =>
          n.documentOverlayCache.removeOverlaysForBatchId(
            r,
            i,
            e.batch.batchId,
          ),
        )
        .next(() =>
          n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(
            r,
            (function (l) {
              let u = ne();
              for (let h = 0; h < l.mutationResults.length; ++h)
                l.mutationResults[h].transformResults.length > 0 &&
                  (u = u.add(l.batch.mutations[h].key));
              return u;
            })(e),
          ),
        )
        .next(() => n.localDocuments.getDocuments(r, i));
    },
  );
}
function jw(t) {
  const e = Y(t);
  return e.persistence.runTransaction(
    "Get last remote snapshot version",
    "readonly",
    (n) => e.li.getLastRemoteSnapshotVersion(n),
  );
}
function RP(t, e) {
  const n = Y(t),
    r = e.snapshotVersion;
  let i = n.vs;
  return n.persistence
    .runTransaction("Apply remote event", "readwrite-primary", (s) => {
      const o = n.xs.newChangeBuffer({ trackRemovals: !0 });
      i = n.vs;
      const l = [];
      e.targetChanges.forEach((f, p) => {
        const m = i.get(p);
        if (!m) return;
        l.push(
          n.li
            .removeMatchingKeys(s, f.removedDocuments, p)
            .next(() => n.li.addMatchingKeys(s, f.addedDocuments, p)),
        );
        let I = m.withSequenceNumber(s.currentSequenceNumber);
        (e.targetMismatches.get(p) !== null
          ? (I = I.withResumeToken(
              qe.EMPTY_BYTE_STRING,
              Q.min(),
            ).withLastLimboFreeSnapshotVersion(Q.min()))
          : f.resumeToken.approximateByteSize() > 0 &&
            (I = I.withResumeToken(f.resumeToken, r)),
          (i = i.insert(p, I)),
          (function (D, F, S) {
            return D.resumeToken.approximateByteSize() === 0 ||
              F.snapshotVersion.toMicroseconds() -
                D.snapshotVersion.toMicroseconds() >=
                IP
              ? !0
              : S.addedDocuments.size +
                  S.modifiedDocuments.size +
                  S.removedDocuments.size >
                  0;
          })(m, I, f) && l.push(n.li.updateTargetData(s, I)));
      });
      let u = An(),
        h = ne();
      if (
        (e.documentUpdates.forEach((f) => {
          e.resolvedLimboDocuments.has(f) &&
            l.push(n.persistence.referenceDelegate.updateLimboDocument(s, f));
        }),
        l.push(
          kP(s, o, e.documentUpdates).next((f) => {
            ((u = f.Bs), (h = f.Ls));
          }),
        ),
        !r.isEqual(Q.min()))
      ) {
        const f = n.li
          .getLastRemoteSnapshotVersion(s)
          .next((p) => n.li.setTargetsMetadata(s, s.currentSequenceNumber, r));
        l.push(f);
      }
      return b
        .waitFor(l)
        .next(() => o.apply(s))
        .next(() => n.localDocuments.getLocalViewOfDocuments(s, u, h))
        .next(() => u);
    })
    .then((s) => ((n.vs = i), s));
}
function kP(t, e, n) {
  let r = ne(),
    i = ne();
  return (
    n.forEach((s) => (r = r.add(s))),
    e.getEntries(t, r).next((s) => {
      let o = An();
      return (
        n.forEach((l, u) => {
          const h = s.get(l);
          (u.isFoundDocument() !== h.isFoundDocument() && (i = i.add(l)),
            u.isNoDocument() && u.version.isEqual(Q.min())
              ? (e.removeEntry(l, u.readTime), (o = o.insert(l, u)))
              : !h.isValidDocument() ||
                  u.version.compareTo(h.version) > 0 ||
                  (u.version.compareTo(h.version) === 0 && h.hasPendingWrites)
                ? (e.addEntry(u), (o = o.insert(l, u)))
                : $(
                    Sf,
                    "Ignoring outdated watch update for ",
                    l,
                    ". Current version:",
                    h.version,
                    " Watch version:",
                    u.version,
                  ));
        }),
        { Bs: o, Ls: i }
      );
    })
  );
}
function PP(t, e) {
  const n = Y(t);
  return n.persistence.runTransaction(
    "Get next mutation batch",
    "readonly",
    (r) => (
      e === void 0 && (e = hf),
      n.mutationQueue.getNextMutationBatchAfterBatchId(r, e)
    ),
  );
}
function NP(t, e) {
  const n = Y(t);
  return n.persistence
    .runTransaction("Allocate target", "readwrite", (r) => {
      let i;
      return n.li
        .getTargetData(r, e)
        .next((s) =>
          s
            ? ((i = s), b.resolve(i))
            : n.li
                .allocateTargetId(r)
                .next(
                  (o) => (
                    (i = new Gn(
                      e,
                      o,
                      "TargetPurposeListen",
                      r.currentSequenceNumber,
                    )),
                    n.li.addTargetData(r, i).next(() => i)
                  ),
                ),
        );
    })
    .then((r) => {
      const i = n.vs.get(r.targetId);
      return (
        (i === null || r.snapshotVersion.compareTo(i.snapshotVersion) > 0) &&
          ((n.vs = n.vs.insert(r.targetId, r)), n.Fs.set(e, r.targetId)),
        r
      );
    });
}
async function Yh(t, e, n) {
  const r = Y(t),
    i = r.vs.get(e),
    s = n ? "readwrite" : "readwrite-primary";
  try {
    n ||
      (await r.persistence.runTransaction("Release target", s, (o) =>
        r.persistence.referenceDelegate.removeTarget(o, i),
      ));
  } catch (o) {
    if (!ss(o)) throw o;
    $(Sf, `Failed to update sequence numbers for target ${e}: ${o}`);
  }
  ((r.vs = r.vs.remove(e)), r.Fs.delete(i.target));
}
function uy(t, e, n) {
  const r = Y(t);
  let i = Q.min(),
    s = ne();
  return r.persistence.runTransaction("Execute query", "readwrite", (o) =>
    (function (u, h, f) {
      const p = Y(u),
        m = p.Fs.get(f);
      return m !== void 0 ? b.resolve(p.vs.get(m)) : p.li.getTargetData(h, f);
    })(r, o, en(e))
      .next((l) => {
        if (l)
          return (
            (i = l.lastLimboFreeSnapshotVersion),
            r.li.getMatchingKeysForTargetId(o, l.targetId).next((u) => {
              s = u;
            })
          );
      })
      .next(() =>
        r.Cs.getDocumentsMatchingQuery(o, e, n ? i : Q.min(), n ? s : ne()),
      )
      .next((l) => (xP(r, yk(e), l), { documents: l, ks: s })),
  );
}
function xP(t, e, n) {
  let r = t.Ms.get(e) || Q.min();
  (n.forEach((i, s) => {
    s.readTime.compareTo(r) > 0 && (r = s.readTime);
  }),
    t.Ms.set(e, r));
}
class cy {
  constructor() {
    this.activeTargetIds = Ik();
  }
  Qs(e) {
    this.activeTargetIds = this.activeTargetIds.add(e);
  }
  Gs(e) {
    this.activeTargetIds = this.activeTargetIds.delete(e);
  }
  Ws() {
    const e = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now(),
    };
    return JSON.stringify(e);
  }
}
class DP {
  constructor() {
    ((this.vo = new cy()),
      (this.Fo = {}),
      (this.onlineStateHandler = null),
      (this.sequenceNumberHandler = null));
  }
  addPendingMutation(e) {}
  updateMutationState(e, n, r) {}
  addLocalQueryTarget(e, n = !0) {
    return (n && this.vo.Qs(e), this.Fo[e] || "not-current");
  }
  updateQueryState(e, n, r) {
    this.Fo[e] = n;
  }
  removeLocalQueryTarget(e) {
    this.vo.Gs(e);
  }
  isLocalQueryTarget(e) {
    return this.vo.activeTargetIds.has(e);
  }
  clearQueryState(e) {
    delete this.Fo[e];
  }
  getAllActiveQueryTargets() {
    return this.vo.activeTargetIds;
  }
  isActiveQueryTarget(e) {
    return this.vo.activeTargetIds.has(e);
  }
  start() {
    return ((this.vo = new cy()), Promise.resolve());
  }
  handleUserChange(e, n, r) {}
  setOnlineState(e) {}
  shutdown() {}
  writeSequenceNumber(e) {}
  notifyBundleLoaded(e) {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class VP {
  Mo(e) {}
  shutdown() {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const hy = "ConnectivityMonitor";
class dy {
  constructor() {
    ((this.xo = () => this.Oo()),
      (this.No = () => this.Bo()),
      (this.Lo = []),
      this.ko());
  }
  Mo(e) {
    this.Lo.push(e);
  }
  shutdown() {
    (window.removeEventListener("online", this.xo),
      window.removeEventListener("offline", this.No));
  }
  ko() {
    (window.addEventListener("online", this.xo),
      window.addEventListener("offline", this.No));
  }
  Oo() {
    $(hy, "Network connectivity changed: AVAILABLE");
    for (const e of this.Lo) e(0);
  }
  Bo() {
    $(hy, "Network connectivity changed: UNAVAILABLE");
    for (const e of this.Lo) e(1);
  }
  static v() {
    return (
      typeof window < "u" &&
      window.addEventListener !== void 0 &&
      window.removeEventListener !== void 0
    );
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let La = null;
function Jh() {
  return (
    La === null
      ? (La = (function () {
          return 268435456 + Math.round(2147483648 * Math.random());
        })())
      : La++,
    "0x" + La.toString(16)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Nc = "RestConnection",
  OP = {
    BatchGetDocuments: "batchGet",
    Commit: "commit",
    RunQuery: "runQuery",
    RunAggregationQuery: "runAggregationQuery",
    ExecutePipeline: "executePipeline",
  };
class LP {
  get Ko() {
    return !1;
  }
  constructor(e) {
    ((this.databaseInfo = e), (this.databaseId = e.databaseId));
    const n = e.ssl ? "https" : "http",
      r = encodeURIComponent(this.databaseId.projectId),
      i = encodeURIComponent(this.databaseId.database);
    ((this.qo = n + "://" + e.host),
      (this.Uo = `projects/${r}/databases/${i}`),
      (this.$o =
        this.databaseId.database === bl
          ? `project_id=${r}`
          : `project_id=${r}&database_id=${i}`));
  }
  Wo(e, n, r, i, s) {
    const o = Jh(),
      l = this.Qo(e, n.toUriEncodedString());
    $(Nc, `Sending RPC '${e}' ${o}:`, l, r);
    const u = {
      "google-cloud-resource-prefix": this.Uo,
      "x-goog-request-params": this.$o,
    };
    this.Go(u, i, s);
    const { host: h } = new URL(l),
      f = es(h);
    return this.zo(e, l, u, r, f).then(
      (p) => ($(Nc, `Received RPC '${e}' ${o}: `, p), p),
      (p) => {
        throw (
          Jr(
            Nc,
            `RPC '${e}' ${o} failed with error: `,
            p,
            "url: ",
            l,
            "request:",
            r,
          ),
          p
        );
      },
    );
  }
  jo(e, n, r, i, s, o) {
    return this.Wo(e, n, r, i, s);
  }
  Go(e, n, r) {
    ((e["X-Goog-Api-Client"] = (function () {
      return "gl-js/ fire/" + rs;
    })()),
      (e["Content-Type"] = "text/plain"),
      this.databaseInfo.appId &&
        (e["X-Firebase-GMPID"] = this.databaseInfo.appId),
      n && n.headers.forEach((i, s) => (e[s] = i)),
      r && r.headers.forEach((i, s) => (e[s] = i)));
  }
  Qo(e, n) {
    const r = OP[e];
    let i = `${this.qo}/v1/${n}:${r}`;
    return (
      this.databaseInfo.apiKey &&
        (i = `${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),
      i
    );
  }
  terminate() {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class MP {
  constructor(e) {
    ((this.Ho = e.Ho), (this.Jo = e.Jo));
  }
  Zo(e) {
    this.Xo = e;
  }
  Yo(e) {
    this.e_ = e;
  }
  t_(e) {
    this.n_ = e;
  }
  onMessage(e) {
    this.r_ = e;
  }
  close() {
    this.Jo();
  }
  send(e) {
    this.Ho(e);
  }
  i_() {
    this.Xo();
  }
  s_() {
    this.e_();
  }
  o_(e) {
    this.n_(e);
  }
  __(e) {
    this.r_(e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ye = "WebChannelConnection",
  Os = (t, e, n) => {
    t.listen(e, (r) => {
      try {
        n(r);
      } catch (i) {
        setTimeout(() => {
          throw i;
        }, 0);
      }
    });
  };
class Vi extends LP {
  constructor(e) {
    (super(e),
      (this.a_ = []),
      (this.forceLongPolling = e.forceLongPolling),
      (this.autoDetectLongPolling = e.autoDetectLongPolling),
      (this.useFetchStreams = e.useFetchStreams),
      (this.longPollingOptions = e.longPollingOptions));
  }
  static u_() {
    if (!Vi.c_) {
      const e = zE();
      (Os(e, BE.STAT_EVENT, (n) => {
        n.stat === Uh.PROXY
          ? $(Ye, "STAT_EVENT: detected buffering proxy")
          : n.stat === Uh.NOPROXY &&
            $(Ye, "STAT_EVENT: detected no buffering proxy");
      }),
        (Vi.c_ = !0));
    }
  }
  zo(e, n, r, i, s) {
    const o = Jh();
    return new Promise((l, u) => {
      const h = new UE();
      (h.setWithCredentials(!0),
        h.listenOnce(jE.COMPLETE, () => {
          try {
            switch (h.getLastErrorCode()) {
              case Xa.NO_ERROR:
                const p = h.getResponseJson();
                ($(Ye, `XHR for RPC '${e}' ${o} received:`, JSON.stringify(p)),
                  l(p));
                break;
              case Xa.TIMEOUT:
                ($(Ye, `RPC '${e}' ${o} timed out`),
                  u(new B(M.DEADLINE_EXCEEDED, "Request time out")));
                break;
              case Xa.HTTP_ERROR:
                const m = h.getStatus();
                if (
                  ($(
                    Ye,
                    `RPC '${e}' ${o} failed with status:`,
                    m,
                    "response text:",
                    h.getResponseText(),
                  ),
                  m > 0)
                ) {
                  let I = h.getResponseJson();
                  Array.isArray(I) && (I = I[0]);
                  const N = I == null ? void 0 : I.error;
                  if (N && N.status && N.message) {
                    const D = (function (S) {
                      const E = S.toLowerCase().replace(/_/g, "-");
                      return Object.values(M).indexOf(E) >= 0 ? E : M.UNKNOWN;
                    })(N.status);
                    u(new B(D, N.message));
                  } else
                    u(
                      new B(
                        M.UNKNOWN,
                        "Server responded with status " + h.getStatus(),
                      ),
                    );
                } else u(new B(M.UNAVAILABLE, "Connection failed."));
                break;
              default:
                G(9055, {
                  l_: e,
                  streamId: o,
                  h_: h.getLastErrorCode(),
                  P_: h.getLastError(),
                });
            }
          } finally {
            $(Ye, `RPC '${e}' ${o} completed.`);
          }
        }));
      const f = JSON.stringify(i);
      ($(Ye, `RPC '${e}' ${o} sending request:`, i),
        h.send(n, "POST", f, r, 15));
    });
  }
  T_(e, n, r) {
    const i = Jh(),
      s = [this.qo, "/", "google.firestore.v1.Firestore", "/", e, "/channel"],
      o = this.createWebChannelTransport(),
      l = {
        httpSessionIdParam: "gsessionid",
        initMessageHeaders: {},
        messageUrlParams: {
          database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`,
        },
        sendRawJson: !0,
        supportsCrossDomainXhr: !0,
        internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
        forceLongPolling: this.forceLongPolling,
        detectBufferingProxy: this.autoDetectLongPolling,
      },
      u = this.longPollingOptions.timeoutSeconds;
    (u !== void 0 && (l.longPollingTimeout = Math.round(1e3 * u)),
      this.useFetchStreams && (l.useFetchStreams = !0),
      this.Go(l.initMessageHeaders, n, r),
      (l.encodeInitMessageHeaders = !0));
    const h = s.join("");
    $(Ye, `Creating RPC '${e}' stream ${i}: ${h}`, l);
    const f = o.createWebChannel(h, l);
    this.I_(f);
    let p = !1,
      m = !1;
    const I = new MP({
      Ho: (N) => {
        m
          ? $(Ye, `Not sending because RPC '${e}' stream ${i} is closed:`, N)
          : (p ||
              ($(Ye, `Opening RPC '${e}' stream ${i} transport.`),
              f.open(),
              (p = !0)),
            $(Ye, `RPC '${e}' stream ${i} sending:`, N),
            f.send(N));
      },
      Jo: () => f.close(),
    });
    return (
      Os(f, Bs.EventType.OPEN, () => {
        m || ($(Ye, `RPC '${e}' stream ${i} transport opened.`), I.i_());
      }),
      Os(f, Bs.EventType.CLOSE, () => {
        m ||
          ((m = !0),
          $(Ye, `RPC '${e}' stream ${i} transport closed`),
          I.o_(),
          this.E_(f));
      }),
      Os(f, Bs.EventType.ERROR, (N) => {
        m ||
          ((m = !0),
          Jr(
            Ye,
            `RPC '${e}' stream ${i} transport errored. Name:`,
            N.name,
            "Message:",
            N.message,
          ),
          I.o_(new B(M.UNAVAILABLE, "The operation could not be completed")));
      }),
      Os(f, Bs.EventType.MESSAGE, (N) => {
        var D;
        if (!m) {
          const F = N.data[0];
          se(!!F, 16349);
          const S = F,
            E =
              (S == null ? void 0 : S.error) ||
              ((D = S[0]) == null ? void 0 : D.error);
          if (E) {
            $(Ye, `RPC '${e}' stream ${i} received error:`, E);
            const R = E.status;
            let O = (function (_) {
                const g = Re[_];
                if (g !== void 0) return Cw(g);
              })(R),
              L = E.message;
            (R === "NOT_FOUND" &&
              L.includes("database") &&
              L.includes("does not exist") &&
              L.includes(this.databaseId.database) &&
              Jr(
                `Database '${this.databaseId.database}' not found. Please check your project configuration.`,
              ),
              O === void 0 &&
                ((O = M.INTERNAL),
                (L =
                  "Unknown error status: " + R + " with message " + E.message)),
              (m = !0),
              I.o_(new B(O, L)),
              f.close());
          } else ($(Ye, `RPC '${e}' stream ${i} received:`, F), I.__(F));
        }
      }),
      Vi.u_(),
      setTimeout(() => {
        I.s_();
      }, 0),
      I
    );
  }
  terminate() {
    (this.a_.forEach((e) => e.close()), (this.a_ = []));
  }
  I_(e) {
    this.a_.push(e);
  }
  E_(e) {
    this.a_ = this.a_.filter((n) => n === e);
  }
  Go(e, n, r) {
    (super.Go(e, n, r),
      this.databaseInfo.apiKey &&
        (e["x-goog-api-key"] = this.databaseInfo.apiKey));
  }
  createWebChannelTransport() {
    return $E();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bP(t) {
  return new Vi(t);
}
function xc() {
  return typeof document < "u" ? document : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function wu(t) {
  return new Bk(t, !0);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Vi.c_ = !1;
class Bw {
  constructor(e, n, r = 1e3, i = 1.5, s = 6e4) {
    ((this.Ci = e),
      (this.timerId = n),
      (this.R_ = r),
      (this.A_ = i),
      (this.V_ = s),
      (this.d_ = 0),
      (this.m_ = null),
      (this.f_ = Date.now()),
      this.reset());
  }
  reset() {
    this.d_ = 0;
  }
  g_() {
    this.d_ = this.V_;
  }
  p_(e) {
    this.cancel();
    const n = Math.floor(this.d_ + this.y_()),
      r = Math.max(0, Date.now() - this.f_),
      i = Math.max(0, n - r);
    (i > 0 &&
      $(
        "ExponentialBackoff",
        `Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`,
      ),
      (this.m_ = this.Ci.enqueueAfterDelay(
        this.timerId,
        i,
        () => ((this.f_ = Date.now()), e()),
      )),
      (this.d_ *= this.A_),
      this.d_ < this.R_ && (this.d_ = this.R_),
      this.d_ > this.V_ && (this.d_ = this.V_));
  }
  w_() {
    this.m_ !== null && (this.m_.skipDelay(), (this.m_ = null));
  }
  cancel() {
    this.m_ !== null && (this.m_.cancel(), (this.m_ = null));
  }
  y_() {
    return (Math.random() - 0.5) * this.d_;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const fy = "PersistentStream";
class zw {
  constructor(e, n, r, i, s, o, l, u) {
    ((this.Ci = e),
      (this.b_ = r),
      (this.S_ = i),
      (this.connection = s),
      (this.authCredentialsProvider = o),
      (this.appCheckCredentialsProvider = l),
      (this.listener = u),
      (this.state = 0),
      (this.D_ = 0),
      (this.C_ = null),
      (this.v_ = null),
      (this.stream = null),
      (this.F_ = 0),
      (this.M_ = new Bw(e, n)));
  }
  x_() {
    return this.state === 1 || this.state === 5 || this.O_();
  }
  O_() {
    return this.state === 2 || this.state === 3;
  }
  start() {
    ((this.F_ = 0), this.state !== 4 ? this.auth() : this.N_());
  }
  async stop() {
    this.x_() && (await this.close(0));
  }
  B_() {
    ((this.state = 0), this.M_.reset());
  }
  L_() {
    this.O_() &&
      this.C_ === null &&
      (this.C_ = this.Ci.enqueueAfterDelay(this.b_, 6e4, () => this.k_()));
  }
  K_(e) {
    (this.q_(), this.stream.send(e));
  }
  async k_() {
    if (this.O_()) return this.close(0);
  }
  q_() {
    this.C_ && (this.C_.cancel(), (this.C_ = null));
  }
  U_() {
    this.v_ && (this.v_.cancel(), (this.v_ = null));
  }
  async close(e, n) {
    (this.q_(),
      this.U_(),
      this.M_.cancel(),
      this.D_++,
      e !== 4
        ? this.M_.reset()
        : n && n.code === M.RESOURCE_EXHAUSTED
          ? (In(n.toString()),
            In(
              "Using maximum backoff delay to prevent overloading the backend.",
            ),
            this.M_.g_())
          : n &&
            n.code === M.UNAUTHENTICATED &&
            this.state !== 3 &&
            (this.authCredentialsProvider.invalidateToken(),
            this.appCheckCredentialsProvider.invalidateToken()),
      this.stream !== null &&
        (this.W_(), this.stream.close(), (this.stream = null)),
      (this.state = e),
      await this.listener.t_(n));
  }
  W_() {}
  auth() {
    this.state = 1;
    const e = this.Q_(this.D_),
      n = this.D_;
    Promise.all([
      this.authCredentialsProvider.getToken(),
      this.appCheckCredentialsProvider.getToken(),
    ]).then(
      ([r, i]) => {
        this.D_ === n && this.G_(r, i);
      },
      (r) => {
        e(() => {
          const i = new B(
            M.UNKNOWN,
            "Fetching auth token failed: " + r.message,
          );
          return this.z_(i);
        });
      },
    );
  }
  G_(e, n) {
    const r = this.Q_(this.D_);
    ((this.stream = this.j_(e, n)),
      this.stream.Zo(() => {
        r(() => this.listener.Zo());
      }),
      this.stream.Yo(() => {
        r(
          () => (
            (this.state = 2),
            (this.v_ = this.Ci.enqueueAfterDelay(
              this.S_,
              1e4,
              () => (this.O_() && (this.state = 3), Promise.resolve()),
            )),
            this.listener.Yo()
          ),
        );
      }),
      this.stream.t_((i) => {
        r(() => this.z_(i));
      }),
      this.stream.onMessage((i) => {
        r(() => (++this.F_ == 1 ? this.H_(i) : this.onNext(i)));
      }));
  }
  N_() {
    ((this.state = 5),
      this.M_.p_(async () => {
        ((this.state = 0), this.start());
      }));
  }
  z_(e) {
    return (
      $(fy, `close with error: ${e}`),
      (this.stream = null),
      this.close(4, e)
    );
  }
  Q_(e) {
    return (n) => {
      this.Ci.enqueueAndForget(() =>
        this.D_ === e
          ? n()
          : ($(fy, "stream callback skipped by getCloseGuardedDispatcher."),
            Promise.resolve()),
      );
    };
  }
}
class FP extends zw {
  constructor(e, n, r, i, s, o) {
    (super(
      e,
      "listen_stream_connection_backoff",
      "listen_stream_idle",
      "health_check_timeout",
      n,
      r,
      i,
      o,
    ),
      (this.serializer = s));
  }
  j_(e, n) {
    return this.connection.T_("Listen", e, n);
  }
  H_(e) {
    return this.onNext(e);
  }
  onNext(e) {
    this.M_.reset();
    const n = Wk(this.serializer, e),
      r = (function (s) {
        if (!("targetChange" in s)) return Q.min();
        const o = s.targetChange;
        return o.targetIds && o.targetIds.length
          ? Q.min()
          : o.readTime
            ? nn(o.readTime)
            : Q.min();
      })(e);
    return this.listener.J_(n, r);
  }
  Z_(e) {
    const n = {};
    ((n.database = Qh(this.serializer)),
      (n.addTarget = (function (s, o) {
        let l;
        const u = o.target;
        if (
          ((l = Wh(u) ? { documents: Gk(s, u) } : { query: Kk(s, u).ft }),
          (l.targetId = o.targetId),
          o.resumeToken.approximateByteSize() > 0)
        ) {
          l.resumeToken = Pw(s, o.resumeToken);
          const h = qh(s, o.expectedCount);
          h !== null && (l.expectedCount = h);
        } else if (o.snapshotVersion.compareTo(Q.min()) > 0) {
          l.readTime = Bl(s, o.snapshotVersion.toTimestamp());
          const h = qh(s, o.expectedCount);
          h !== null && (l.expectedCount = h);
        }
        return l;
      })(this.serializer, e)));
    const r = Yk(this.serializer, e);
    (r && (n.labels = r), this.K_(n));
  }
  X_(e) {
    const n = {};
    ((n.database = Qh(this.serializer)), (n.removeTarget = e), this.K_(n));
  }
}
class UP extends zw {
  constructor(e, n, r, i, s, o) {
    (super(
      e,
      "write_stream_connection_backoff",
      "write_stream_idle",
      "health_check_timeout",
      n,
      r,
      i,
      o,
    ),
      (this.serializer = s));
  }
  get Y_() {
    return this.F_ > 0;
  }
  start() {
    ((this.lastStreamToken = void 0), super.start());
  }
  W_() {
    this.Y_ && this.ea([]);
  }
  j_(e, n) {
    return this.connection.T_("Write", e, n);
  }
  H_(e) {
    return (
      se(!!e.streamToken, 31322),
      (this.lastStreamToken = e.streamToken),
      se(!e.writeResults || e.writeResults.length === 0, 55816),
      this.listener.ta()
    );
  }
  onNext(e) {
    (se(!!e.streamToken, 12678),
      (this.lastStreamToken = e.streamToken),
      this.M_.reset());
    const n = qk(e.writeResults, e.commitTime),
      r = nn(e.commitTime);
    return this.listener.na(r, n);
  }
  ra() {
    const e = {};
    ((e.database = Qh(this.serializer)), this.K_(e));
  }
  ea(e) {
    const n = {
      streamToken: this.lastStreamToken,
      writes: e.map((r) => Hk(this.serializer, r)),
    };
    this.K_(n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jP {}
class BP extends jP {
  constructor(e, n, r, i) {
    (super(),
      (this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.connection = r),
      (this.serializer = i),
      (this.ia = !1));
  }
  sa() {
    if (this.ia)
      throw new B(
        M.FAILED_PRECONDITION,
        "The client has already been terminated.",
      );
  }
  Wo(e, n, r, i) {
    return (
      this.sa(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([s, o]) => this.connection.Wo(e, Gh(n, r), i, s, o))
        .catch((s) => {
          throw s.name === "FirebaseError"
            ? (s.code === M.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              s)
            : new B(M.UNKNOWN, s.toString());
        })
    );
  }
  jo(e, n, r, i, s) {
    return (
      this.sa(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([o, l]) => this.connection.jo(e, Gh(n, r), i, o, l, s))
        .catch((o) => {
          throw o.name === "FirebaseError"
            ? (o.code === M.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              o)
            : new B(M.UNKNOWN, o.toString());
        })
    );
  }
  terminate() {
    ((this.ia = !0), this.connection.terminate());
  }
}
function zP(t, e, n, r) {
  return new BP(t, e, n, r);
}
class $P {
  constructor(e, n) {
    ((this.asyncQueue = e),
      (this.onlineStateHandler = n),
      (this.state = "Unknown"),
      (this.oa = 0),
      (this._a = null),
      (this.aa = !0));
  }
  ua() {
    this.oa === 0 &&
      (this.ca("Unknown"),
      (this._a = this.asyncQueue.enqueueAfterDelay(
        "online_state_timeout",
        1e4,
        () => (
          (this._a = null),
          this.la("Backend didn't respond within 10 seconds."),
          this.ca("Offline"),
          Promise.resolve()
        ),
      )));
  }
  ha(e) {
    this.state === "Online"
      ? this.ca("Unknown")
      : (this.oa++,
        this.oa >= 1 &&
          (this.Pa(),
          this.la(
            `Connection failed 1 times. Most recent error: ${e.toString()}`,
          ),
          this.ca("Offline")));
  }
  set(e) {
    (this.Pa(), (this.oa = 0), e === "Online" && (this.aa = !1), this.ca(e));
  }
  ca(e) {
    e !== this.state && ((this.state = e), this.onlineStateHandler(e));
  }
  la(e) {
    const n = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.aa ? (In(n), (this.aa = !1)) : $("OnlineStateTracker", n);
  }
  Pa() {
    this._a !== null && (this._a.cancel(), (this._a = null));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Xr = "RemoteStore";
class WP {
  constructor(e, n, r, i, s) {
    ((this.localStore = e),
      (this.datastore = n),
      (this.asyncQueue = r),
      (this.remoteSyncer = {}),
      (this.Ta = []),
      (this.Ia = new Map()),
      (this.Ea = new Set()),
      (this.Ra = []),
      (this.Aa = s),
      this.Aa.Mo((o) => {
        r.enqueueAndForget(async () => {
          ni(this) &&
            ($(Xr, "Restarting streams for network reachability change."),
            await (async function (u) {
              const h = Y(u);
              (h.Ea.add(4),
                await Qo(h),
                h.Va.set("Unknown"),
                h.Ea.delete(4),
                await Tu(h));
            })(this));
        });
      }),
      (this.Va = new $P(r, i)));
  }
}
async function Tu(t) {
  if (ni(t)) for (const e of t.Ra) await e(!0);
}
async function Qo(t) {
  for (const e of t.Ra) await e(!1);
}
function $w(t, e) {
  const n = Y(t);
  n.Ia.has(e.targetId) ||
    (n.Ia.set(e.targetId, e), kf(n) ? Rf(n) : as(n).O_() && Cf(n, e));
}
function Af(t, e) {
  const n = Y(t),
    r = as(n);
  (n.Ia.delete(e),
    r.O_() && Ww(n, e),
    n.Ia.size === 0 && (r.O_() ? r.L_() : ni(n) && n.Va.set("Unknown")));
}
function Cf(t, e) {
  if (
    (t.da.$e(e.targetId),
    e.resumeToken.approximateByteSize() > 0 ||
      e.snapshotVersion.compareTo(Q.min()) > 0)
  ) {
    const n = t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;
    e = e.withExpectedCount(n);
  }
  as(t).Z_(e);
}
function Ww(t, e) {
  (t.da.$e(e), as(t).X_(e));
}
function Rf(t) {
  ((t.da = new bk({
    getRemoteKeysForTarget: (e) => t.remoteSyncer.getRemoteKeysForTarget(e),
    At: (e) => t.Ia.get(e) || null,
    ht: () => t.datastore.serializer.databaseId,
  })),
    as(t).start(),
    t.Va.ua());
}
function kf(t) {
  return ni(t) && !as(t).x_() && t.Ia.size > 0;
}
function ni(t) {
  return Y(t).Ea.size === 0;
}
function Hw(t) {
  t.da = void 0;
}
async function HP(t) {
  t.Va.set("Online");
}
async function qP(t) {
  t.Ia.forEach((e, n) => {
    Cf(t, e);
  });
}
async function GP(t, e) {
  (Hw(t), kf(t) ? (t.Va.ha(e), Rf(t)) : t.Va.set("Unknown"));
}
async function KP(t, e, n) {
  if ((t.Va.set("Online"), e instanceof kw && e.state === 2 && e.cause))
    try {
      await (async function (i, s) {
        const o = s.cause;
        for (const l of s.targetIds)
          i.Ia.has(l) &&
            (await i.remoteSyncer.rejectListen(l, o),
            i.Ia.delete(l),
            i.da.removeTarget(l));
      })(t, e);
    } catch (r) {
      ($(Xr, "Failed to remove targets %s: %s ", e.targetIds.join(","), r),
        await $l(t, r));
    }
  else if (
    (e instanceof nl ? t.da.Xe(e) : e instanceof Rw ? t.da.st(e) : t.da.tt(e),
    !n.isEqual(Q.min()))
  )
    try {
      const r = await jw(t.localStore);
      n.compareTo(r) >= 0 &&
        (await (function (s, o) {
          const l = s.da.Tt(o);
          return (
            l.targetChanges.forEach((u, h) => {
              if (u.resumeToken.approximateByteSize() > 0) {
                const f = s.Ia.get(h);
                f && s.Ia.set(h, f.withResumeToken(u.resumeToken, o));
              }
            }),
            l.targetMismatches.forEach((u, h) => {
              const f = s.Ia.get(u);
              if (!f) return;
              (s.Ia.set(
                u,
                f.withResumeToken(qe.EMPTY_BYTE_STRING, f.snapshotVersion),
              ),
                Ww(s, u));
              const p = new Gn(f.target, u, h, f.sequenceNumber);
              Cf(s, p);
            }),
            s.remoteSyncer.applyRemoteEvent(l)
          );
        })(t, n));
    } catch (r) {
      ($(Xr, "Failed to raise snapshot:", r), await $l(t, r));
    }
}
async function $l(t, e, n) {
  if (!ss(e)) throw e;
  (t.Ea.add(1),
    await Qo(t),
    t.Va.set("Offline"),
    n || (n = () => jw(t.localStore)),
    t.asyncQueue.enqueueRetryable(async () => {
      ($(Xr, "Retrying IndexedDB access"),
        await n(),
        t.Ea.delete(1),
        await Tu(t));
    }));
}
function qw(t, e) {
  return e().catch((n) => $l(t, n, e));
}
async function Iu(t) {
  const e = Y(t),
    n = fr(e);
  let r = e.Ta.length > 0 ? e.Ta[e.Ta.length - 1].batchId : hf;
  for (; QP(e); )
    try {
      const i = await PP(e.localStore, r);
      if (i === null) {
        e.Ta.length === 0 && n.L_();
        break;
      }
      ((r = i.batchId), YP(e, i));
    } catch (i) {
      await $l(e, i);
    }
  Gw(e) && Kw(e);
}
function QP(t) {
  return ni(t) && t.Ta.length < 10;
}
function YP(t, e) {
  t.Ta.push(e);
  const n = fr(t);
  n.O_() && n.Y_ && n.ea(e.mutations);
}
function Gw(t) {
  return ni(t) && !fr(t).x_() && t.Ta.length > 0;
}
function Kw(t) {
  fr(t).start();
}
async function JP(t) {
  fr(t).ra();
}
async function XP(t) {
  const e = fr(t);
  for (const n of t.Ta) e.ea(n.mutations);
}
async function ZP(t, e, n) {
  const r = t.Ta.shift(),
    i = _f.from(r, e, n);
  (await qw(t, () => t.remoteSyncer.applySuccessfulWrite(i)), await Iu(t));
}
async function eN(t, e) {
  (e &&
    fr(t).Y_ &&
    (await (async function (r, i) {
      if (
        (function (o) {
          return Ok(o) && o !== M.ABORTED;
        })(i.code)
      ) {
        const s = r.Ta.shift();
        (fr(r).B_(),
          await qw(r, () => r.remoteSyncer.rejectFailedWrite(s.batchId, i)),
          await Iu(r));
      }
    })(t, e)),
    Gw(t) && Kw(t));
}
async function py(t, e) {
  const n = Y(t);
  (n.asyncQueue.verifyOperationInProgress(),
    $(Xr, "RemoteStore received new credentials"));
  const r = ni(n);
  (n.Ea.add(3),
    await Qo(n),
    r && n.Va.set("Unknown"),
    await n.remoteSyncer.handleCredentialChange(e),
    n.Ea.delete(3),
    await Tu(n));
}
async function tN(t, e) {
  const n = Y(t);
  e
    ? (n.Ea.delete(2), await Tu(n))
    : e || (n.Ea.add(2), await Qo(n), n.Va.set("Unknown"));
}
function as(t) {
  return (
    t.ma ||
      ((t.ma = (function (n, r, i) {
        const s = Y(n);
        return (
          s.sa(),
          new FP(
            r,
            s.connection,
            s.authCredentials,
            s.appCheckCredentials,
            s.serializer,
            i,
          )
        );
      })(t.datastore, t.asyncQueue, {
        Zo: HP.bind(null, t),
        Yo: qP.bind(null, t),
        t_: GP.bind(null, t),
        J_: KP.bind(null, t),
      })),
      t.Ra.push(async (e) => {
        e
          ? (t.ma.B_(), kf(t) ? Rf(t) : t.Va.set("Unknown"))
          : (await t.ma.stop(), Hw(t));
      })),
    t.ma
  );
}
function fr(t) {
  return (
    t.fa ||
      ((t.fa = (function (n, r, i) {
        const s = Y(n);
        return (
          s.sa(),
          new UP(
            r,
            s.connection,
            s.authCredentials,
            s.appCheckCredentials,
            s.serializer,
            i,
          )
        );
      })(t.datastore, t.asyncQueue, {
        Zo: () => Promise.resolve(),
        Yo: JP.bind(null, t),
        t_: eN.bind(null, t),
        ta: XP.bind(null, t),
        na: ZP.bind(null, t),
      })),
      t.Ra.push(async (e) => {
        e
          ? (t.fa.B_(), await Iu(t))
          : (await t.fa.stop(),
            t.Ta.length > 0 &&
              ($(
                Xr,
                `Stopping write stream with ${t.Ta.length} pending writes`,
              ),
              (t.Ta = [])));
      })),
    t.fa
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Pf {
  constructor(e, n, r, i, s) {
    ((this.asyncQueue = e),
      (this.timerId = n),
      (this.targetTimeMs = r),
      (this.op = i),
      (this.removalCallback = s),
      (this.deferred = new gn()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((o) => {}));
  }
  get promise() {
    return this.deferred.promise;
  }
  static createAndSchedule(e, n, r, i, s) {
    const o = Date.now() + r,
      l = new Pf(e, n, o, i, s);
    return (l.start(r), l);
  }
  start(e) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(e) {
    this.timerHandle !== null &&
      (this.clearTimeout(),
      this.deferred.reject(
        new B(M.CANCELLED, "Operation cancelled" + (e ? ": " + e : "")),
      ));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() =>
      this.timerHandle !== null
        ? (this.clearTimeout(), this.op().then((e) => this.deferred.resolve(e)))
        : Promise.resolve(),
    );
  }
  clearTimeout() {
    this.timerHandle !== null &&
      (this.removalCallback(this),
      clearTimeout(this.timerHandle),
      (this.timerHandle = null));
  }
}
function Nf(t, e) {
  if ((In("AsyncQueue", `${e}: ${t}`), ss(t)))
    return new B(M.UNAVAILABLE, `${e}: ${t}`);
  throw t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Oi {
  static emptySet(e) {
    return new Oi(e.comparator);
  }
  constructor(e) {
    ((this.comparator = e
      ? (n, r) => e(n, r) || H.comparator(n.key, r.key)
      : (n, r) => H.comparator(n.key, r.key)),
      (this.keyedMap = zs()),
      (this.sortedSet = new Ee(this.comparator)));
  }
  has(e) {
    return this.keyedMap.get(e) != null;
  }
  get(e) {
    return this.keyedMap.get(e);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  indexOf(e) {
    const n = this.keyedMap.get(e);
    return n ? this.sortedSet.indexOf(n) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  forEach(e) {
    this.sortedSet.inorderTraversal((n, r) => (e(n), !1));
  }
  add(e) {
    const n = this.delete(e.key);
    return n.copy(n.keyedMap.insert(e.key, e), n.sortedSet.insert(e, null));
  }
  delete(e) {
    const n = this.get(e);
    return n
      ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(n))
      : this;
  }
  isEqual(e) {
    if (!(e instanceof Oi) || this.size !== e.size) return !1;
    const n = this.sortedSet.getIterator(),
      r = e.sortedSet.getIterator();
    for (; n.hasNext(); ) {
      const i = n.getNext().key,
        s = r.getNext().key;
      if (!i.isEqual(s)) return !1;
    }
    return !0;
  }
  toString() {
    const e = [];
    return (
      this.forEach((n) => {
        e.push(n.toString());
      }),
      e.length === 0
        ? "DocumentSet ()"
        : `DocumentSet (
  ` +
          e.join(`  
`) +
          `
)`
    );
  }
  copy(e, n) {
    const r = new Oi();
    return (
      (r.comparator = this.comparator),
      (r.keyedMap = e),
      (r.sortedSet = n),
      r
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class my {
  constructor() {
    this.ga = new Ee(H.comparator);
  }
  track(e) {
    const n = e.doc.key,
      r = this.ga.get(n);
    r
      ? e.type !== 0 && r.type === 3
        ? (this.ga = this.ga.insert(n, e))
        : e.type === 3 && r.type !== 1
          ? (this.ga = this.ga.insert(n, { type: r.type, doc: e.doc }))
          : e.type === 2 && r.type === 2
            ? (this.ga = this.ga.insert(n, { type: 2, doc: e.doc }))
            : e.type === 2 && r.type === 0
              ? (this.ga = this.ga.insert(n, { type: 0, doc: e.doc }))
              : e.type === 1 && r.type === 0
                ? (this.ga = this.ga.remove(n))
                : e.type === 1 && r.type === 2
                  ? (this.ga = this.ga.insert(n, { type: 1, doc: r.doc }))
                  : e.type === 0 && r.type === 1
                    ? (this.ga = this.ga.insert(n, { type: 2, doc: e.doc }))
                    : G(63341, { Vt: e, pa: r })
      : (this.ga = this.ga.insert(n, e));
  }
  ya() {
    const e = [];
    return (
      this.ga.inorderTraversal((n, r) => {
        e.push(r);
      }),
      e
    );
  }
}
class Qi {
  constructor(e, n, r, i, s, o, l, u, h) {
    ((this.query = e),
      (this.docs = n),
      (this.oldDocs = r),
      (this.docChanges = i),
      (this.mutatedKeys = s),
      (this.fromCache = o),
      (this.syncStateChanged = l),
      (this.excludesMetadataChanges = u),
      (this.hasCachedResults = h));
  }
  static fromInitialDocuments(e, n, r, i, s) {
    const o = [];
    return (
      n.forEach((l) => {
        o.push({ type: 0, doc: l });
      }),
      new Qi(e, n, Oi.emptySet(n), o, r, i, !0, !1, s)
    );
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty();
  }
  isEqual(e) {
    if (
      !(
        this.fromCache === e.fromCache &&
        this.hasCachedResults === e.hasCachedResults &&
        this.syncStateChanged === e.syncStateChanged &&
        this.mutatedKeys.isEqual(e.mutatedKeys) &&
        gu(this.query, e.query) &&
        this.docs.isEqual(e.docs) &&
        this.oldDocs.isEqual(e.oldDocs)
      )
    )
      return !1;
    const n = this.docChanges,
      r = e.docChanges;
    if (n.length !== r.length) return !1;
    for (let i = 0; i < n.length; i++)
      if (n[i].type !== r[i].type || !n[i].doc.isEqual(r[i].doc)) return !1;
    return !0;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nN {
  constructor() {
    ((this.wa = void 0), (this.ba = []));
  }
  Sa() {
    return this.ba.some((e) => e.Da());
  }
}
class rN {
  constructor() {
    ((this.queries = gy()),
      (this.onlineState = "Unknown"),
      (this.Ca = new Set()));
  }
  terminate() {
    (function (n, r) {
      const i = Y(n),
        s = i.queries;
      ((i.queries = gy()),
        s.forEach((o, l) => {
          for (const u of l.ba) u.onError(r);
        }));
    })(this, new B(M.ABORTED, "Firestore shutting down"));
  }
}
function gy() {
  return new ti((t) => hw(t), gu);
}
async function Qw(t, e) {
  const n = Y(t);
  let r = 3;
  const i = e.query;
  let s = n.queries.get(i);
  s ? !s.Sa() && e.Da() && (r = 2) : ((s = new nN()), (r = e.Da() ? 0 : 1));
  try {
    switch (r) {
      case 0:
        s.wa = await n.onListen(i, !0);
        break;
      case 1:
        s.wa = await n.onListen(i, !1);
        break;
      case 2:
        await n.onFirstRemoteStoreListen(i);
    }
  } catch (o) {
    const l = Nf(o, `Initialization of query '${ui(e.query)}' failed`);
    return void e.onError(l);
  }
  (n.queries.set(i, s),
    s.ba.push(e),
    e.va(n.onlineState),
    s.wa && e.Fa(s.wa) && xf(n));
}
async function Yw(t, e) {
  const n = Y(t),
    r = e.query;
  let i = 3;
  const s = n.queries.get(r);
  if (s) {
    const o = s.ba.indexOf(e);
    o >= 0 &&
      (s.ba.splice(o, 1),
      s.ba.length === 0 ? (i = e.Da() ? 0 : 1) : !s.Sa() && e.Da() && (i = 2));
  }
  switch (i) {
    case 0:
      return (n.queries.delete(r), n.onUnlisten(r, !0));
    case 1:
      return (n.queries.delete(r), n.onUnlisten(r, !1));
    case 2:
      return n.onLastRemoteStoreUnlisten(r);
    default:
      return;
  }
}
function iN(t, e) {
  const n = Y(t);
  let r = !1;
  for (const i of e) {
    const s = i.query,
      o = n.queries.get(s);
    if (o) {
      for (const l of o.ba) l.Fa(i) && (r = !0);
      o.wa = i;
    }
  }
  r && xf(n);
}
function sN(t, e, n) {
  const r = Y(t),
    i = r.queries.get(e);
  if (i) for (const s of i.ba) s.onError(n);
  r.queries.delete(e);
}
function xf(t) {
  t.Ca.forEach((e) => {
    e.next();
  });
}
var Xh, yy;
(((yy = Xh || (Xh = {})).Ma = "default"), (yy.Cache = "cache"));
class Jw {
  constructor(e, n, r) {
    ((this.query = e),
      (this.xa = n),
      (this.Oa = !1),
      (this.Na = null),
      (this.onlineState = "Unknown"),
      (this.options = r || {}));
  }
  Fa(e) {
    if (!this.options.includeMetadataChanges) {
      const r = [];
      for (const i of e.docChanges) i.type !== 3 && r.push(i);
      e = new Qi(
        e.query,
        e.docs,
        e.oldDocs,
        r,
        e.mutatedKeys,
        e.fromCache,
        e.syncStateChanged,
        !0,
        e.hasCachedResults,
      );
    }
    let n = !1;
    return (
      this.Oa
        ? this.Ba(e) && (this.xa.next(e), (n = !0))
        : this.La(e, this.onlineState) && (this.ka(e), (n = !0)),
      (this.Na = e),
      n
    );
  }
  onError(e) {
    this.xa.error(e);
  }
  va(e) {
    this.onlineState = e;
    let n = !1;
    return (
      this.Na &&
        !this.Oa &&
        this.La(this.Na, e) &&
        (this.ka(this.Na), (n = !0)),
      n
    );
  }
  La(e, n) {
    if (!e.fromCache || !this.Da()) return !0;
    const r = n !== "Offline";
    return (
      (!this.options.Ka || !r) &&
      (!e.docs.isEmpty() || e.hasCachedResults || n === "Offline")
    );
  }
  Ba(e) {
    if (e.docChanges.length > 0) return !0;
    const n = this.Na && this.Na.hasPendingWrites !== e.hasPendingWrites;
    return (
      !(!e.syncStateChanged && !n) && this.options.includeMetadataChanges === !0
    );
  }
  ka(e) {
    ((e = Qi.fromInitialDocuments(
      e.query,
      e.docs,
      e.mutatedKeys,
      e.fromCache,
      e.hasCachedResults,
    )),
      (this.Oa = !0),
      this.xa.next(e));
  }
  Da() {
    return this.options.source !== Xh.Cache;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xw {
  constructor(e) {
    this.key = e;
  }
}
class Zw {
  constructor(e) {
    this.key = e;
  }
}
class oN {
  constructor(e, n) {
    ((this.query = e),
      (this.Za = n),
      (this.Xa = null),
      (this.hasCachedResults = !1),
      (this.current = !1),
      (this.Ya = ne()),
      (this.mutatedKeys = ne()),
      (this.eu = dw(e)),
      (this.tu = new Oi(this.eu)));
  }
  get nu() {
    return this.Za;
  }
  ru(e, n) {
    const r = n ? n.iu : new my(),
      i = n ? n.tu : this.tu;
    let s = n ? n.mutatedKeys : this.mutatedKeys,
      o = i,
      l = !1;
    const u =
        this.query.limitType === "F" && i.size === this.query.limit
          ? i.last()
          : null,
      h =
        this.query.limitType === "L" && i.size === this.query.limit
          ? i.first()
          : null;
    if (
      (e.inorderTraversal((f, p) => {
        const m = i.get(f),
          I = yu(this.query, p) ? p : null,
          N = !!m && this.mutatedKeys.has(m.key),
          D =
            !!I &&
            (I.hasLocalMutations ||
              (this.mutatedKeys.has(I.key) && I.hasCommittedMutations));
        let F = !1;
        (m && I
          ? m.data.isEqual(I.data)
            ? N !== D && (r.track({ type: 3, doc: I }), (F = !0))
            : this.su(m, I) ||
              (r.track({ type: 2, doc: I }),
              (F = !0),
              ((u && this.eu(I, u) > 0) || (h && this.eu(I, h) < 0)) &&
                (l = !0))
          : !m && I
            ? (r.track({ type: 0, doc: I }), (F = !0))
            : m &&
              !I &&
              (r.track({ type: 1, doc: m }), (F = !0), (u || h) && (l = !0)),
          F &&
            (I
              ? ((o = o.add(I)), (s = D ? s.add(f) : s.delete(f)))
              : ((o = o.delete(f)), (s = s.delete(f)))));
      }),
      this.query.limit !== null)
    )
      for (; o.size > this.query.limit; ) {
        const f = this.query.limitType === "F" ? o.last() : o.first();
        ((o = o.delete(f.key)),
          (s = s.delete(f.key)),
          r.track({ type: 1, doc: f }));
      }
    return { tu: o, iu: r, Ss: l, mutatedKeys: s };
  }
  su(e, n) {
    return (
      e.hasLocalMutations && n.hasCommittedMutations && !n.hasLocalMutations
    );
  }
  applyChanges(e, n, r, i) {
    const s = this.tu;
    ((this.tu = e.tu), (this.mutatedKeys = e.mutatedKeys));
    const o = e.iu.ya();
    (o.sort(
      (f, p) =>
        (function (I, N) {
          const D = (F) => {
            switch (F) {
              case 0:
                return 1;
              case 2:
              case 3:
                return 2;
              case 1:
                return 0;
              default:
                return G(20277, { Vt: F });
            }
          };
          return D(I) - D(N);
        })(f.type, p.type) || this.eu(f.doc, p.doc),
    ),
      this.ou(r),
      (i = i ?? !1));
    const l = n && !i ? this._u() : [],
      u = this.Ya.size === 0 && this.current && !i ? 1 : 0,
      h = u !== this.Xa;
    return (
      (this.Xa = u),
      o.length !== 0 || h
        ? {
            snapshot: new Qi(
              this.query,
              e.tu,
              s,
              o,
              e.mutatedKeys,
              u === 0,
              h,
              !1,
              !!r && r.resumeToken.approximateByteSize() > 0,
            ),
            au: l,
          }
        : { au: l }
    );
  }
  va(e) {
    return this.current && e === "Offline"
      ? ((this.current = !1),
        this.applyChanges(
          { tu: this.tu, iu: new my(), mutatedKeys: this.mutatedKeys, Ss: !1 },
          !1,
        ))
      : { au: [] };
  }
  uu(e) {
    return (
      !this.Za.has(e) && !!this.tu.has(e) && !this.tu.get(e).hasLocalMutations
    );
  }
  ou(e) {
    e &&
      (e.addedDocuments.forEach((n) => (this.Za = this.Za.add(n))),
      e.modifiedDocuments.forEach((n) => {}),
      e.removedDocuments.forEach((n) => (this.Za = this.Za.delete(n))),
      (this.current = e.current));
  }
  _u() {
    if (!this.current) return [];
    const e = this.Ya;
    ((this.Ya = ne()),
      this.tu.forEach((r) => {
        this.uu(r.key) && (this.Ya = this.Ya.add(r.key));
      }));
    const n = [];
    return (
      e.forEach((r) => {
        this.Ya.has(r) || n.push(new Zw(r));
      }),
      this.Ya.forEach((r) => {
        e.has(r) || n.push(new Xw(r));
      }),
      n
    );
  }
  cu(e) {
    ((this.Za = e.ks), (this.Ya = ne()));
    const n = this.ru(e.documents);
    return this.applyChanges(n, !0);
  }
  lu() {
    return Qi.fromInitialDocuments(
      this.query,
      this.tu,
      this.mutatedKeys,
      this.Xa === 0,
      this.hasCachedResults,
    );
  }
}
const Df = "SyncEngine";
class aN {
  constructor(e, n, r) {
    ((this.query = e), (this.targetId = n), (this.view = r));
  }
}
class lN {
  constructor(e) {
    ((this.key = e), (this.hu = !1));
  }
}
class uN {
  constructor(e, n, r, i, s, o) {
    ((this.localStore = e),
      (this.remoteStore = n),
      (this.eventManager = r),
      (this.sharedClientState = i),
      (this.currentUser = s),
      (this.maxConcurrentLimboResolutions = o),
      (this.Pu = {}),
      (this.Tu = new ti((l) => hw(l), gu)),
      (this.Iu = new Map()),
      (this.Eu = new Set()),
      (this.Ru = new Ee(H.comparator)),
      (this.Au = new Map()),
      (this.Vu = new wf()),
      (this.du = {}),
      (this.mu = new Map()),
      (this.fu = Ki.ar()),
      (this.onlineState = "Unknown"),
      (this.gu = void 0));
  }
  get isPrimaryClient() {
    return this.gu === !0;
  }
}
async function cN(t, e, n = !0) {
  const r = sT(t);
  let i;
  const s = r.Tu.get(e);
  return (
    s
      ? (r.sharedClientState.addLocalQueryTarget(s.targetId), (i = s.view.lu()))
      : (i = await eT(r, e, n, !0)),
    i
  );
}
async function hN(t, e) {
  const n = sT(t);
  await eT(n, e, !0, !1);
}
async function eT(t, e, n, r) {
  const i = await NP(t.localStore, en(e)),
    s = i.targetId,
    o = t.sharedClientState.addLocalQueryTarget(s, n);
  let l;
  return (
    r && (l = await dN(t, e, s, o === "current", i.resumeToken)),
    t.isPrimaryClient && n && $w(t.remoteStore, i),
    l
  );
}
async function dN(t, e, n, r, i) {
  t.pu = (p, m, I) =>
    (async function (D, F, S, E) {
      let R = F.view.ru(S);
      R.Ss &&
        (R = await uy(D.localStore, F.query, !1).then(({ documents: _ }) =>
          F.view.ru(_, R),
        ));
      const O = E && E.targetChanges.get(F.targetId),
        L = E && E.targetMismatches.get(F.targetId) != null,
        V = F.view.applyChanges(R, D.isPrimaryClient, O, L);
      return (vy(D, F.targetId, V.au), V.snapshot);
    })(t, p, m, I);
  const s = await uy(t.localStore, e, !0),
    o = new oN(e, s.ks),
    l = o.ru(s.documents),
    u = Ko.createSynthesizedTargetChangeForCurrentChange(
      n,
      r && t.onlineState !== "Offline",
      i,
    ),
    h = o.applyChanges(l, t.isPrimaryClient, u);
  vy(t, n, h.au);
  const f = new aN(e, n, o);
  return (
    t.Tu.set(e, f),
    t.Iu.has(n) ? t.Iu.get(n).push(e) : t.Iu.set(n, [e]),
    h.snapshot
  );
}
async function fN(t, e, n) {
  const r = Y(t),
    i = r.Tu.get(e),
    s = r.Iu.get(i.targetId);
  if (s.length > 1)
    return (
      r.Iu.set(
        i.targetId,
        s.filter((o) => !gu(o, e)),
      ),
      void r.Tu.delete(e)
    );
  r.isPrimaryClient
    ? (r.sharedClientState.removeLocalQueryTarget(i.targetId),
      r.sharedClientState.isActiveQueryTarget(i.targetId) ||
        (await Yh(r.localStore, i.targetId, !1)
          .then(() => {
            (r.sharedClientState.clearQueryState(i.targetId),
              n && Af(r.remoteStore, i.targetId),
              Zh(r, i.targetId));
          })
          .catch(is)))
    : (Zh(r, i.targetId), await Yh(r.localStore, i.targetId, !0));
}
async function pN(t, e) {
  const n = Y(t),
    r = n.Tu.get(e),
    i = n.Iu.get(r.targetId);
  n.isPrimaryClient &&
    i.length === 1 &&
    (n.sharedClientState.removeLocalQueryTarget(r.targetId),
    Af(n.remoteStore, r.targetId));
}
async function mN(t, e, n) {
  const r = TN(t);
  try {
    const i = await (function (o, l) {
      const u = Y(o),
        h = fe.now(),
        f = l.reduce((I, N) => I.add(N.key), ne());
      let p, m;
      return u.persistence
        .runTransaction("Locally write mutations", "readwrite", (I) => {
          let N = An(),
            D = ne();
          return u.xs
            .getEntries(I, f)
            .next((F) => {
              ((N = F),
                N.forEach((S, E) => {
                  E.isValidDocument() || (D = D.add(S));
                }));
            })
            .next(() => u.localDocuments.getOverlayedDocuments(I, N))
            .next((F) => {
              p = F;
              const S = [];
              for (const E of l) {
                const R = Pk(E, p.get(E.key).overlayedDocument);
                R != null &&
                  S.push(new wr(E.key, R, rw(R.value.mapValue), tn.exists(!0)));
              }
              return u.mutationQueue.addMutationBatch(I, h, S, l);
            })
            .next((F) => {
              m = F;
              const S = F.applyToLocalDocumentSet(p, D);
              return u.documentOverlayCache.saveOverlays(I, F.batchId, S);
            });
        })
        .then(() => ({ batchId: m.batchId, changes: pw(p) }));
    })(r.localStore, e);
    (r.sharedClientState.addPendingMutation(i.batchId),
      (function (o, l, u) {
        let h = o.du[o.currentUser.toKey()];
        (h || (h = new Ee(te)),
          (h = h.insert(l, u)),
          (o.du[o.currentUser.toKey()] = h));
      })(r, i.batchId, n),
      await Yo(r, i.changes),
      await Iu(r.remoteStore));
  } catch (i) {
    const s = Nf(i, "Failed to persist write");
    n.reject(s);
  }
}
async function tT(t, e) {
  const n = Y(t);
  try {
    const r = await RP(n.localStore, e);
    (e.targetChanges.forEach((i, s) => {
      const o = n.Au.get(s);
      o &&
        (se(
          i.addedDocuments.size +
            i.modifiedDocuments.size +
            i.removedDocuments.size <=
            1,
          22616,
        ),
        i.addedDocuments.size > 0
          ? (o.hu = !0)
          : i.modifiedDocuments.size > 0
            ? se(o.hu, 14607)
            : i.removedDocuments.size > 0 && (se(o.hu, 42227), (o.hu = !1)));
    }),
      await Yo(n, r, e));
  } catch (r) {
    await is(r);
  }
}
function _y(t, e, n) {
  const r = Y(t);
  if ((r.isPrimaryClient && n === 0) || (!r.isPrimaryClient && n === 1)) {
    const i = [];
    (r.Tu.forEach((s, o) => {
      const l = o.view.va(e);
      l.snapshot && i.push(l.snapshot);
    }),
      (function (o, l) {
        const u = Y(o);
        u.onlineState = l;
        let h = !1;
        (u.queries.forEach((f, p) => {
          for (const m of p.ba) m.va(l) && (h = !0);
        }),
          h && xf(u));
      })(r.eventManager, e),
      i.length && r.Pu.J_(i),
      (r.onlineState = e),
      r.isPrimaryClient && r.sharedClientState.setOnlineState(e));
  }
}
async function gN(t, e, n) {
  const r = Y(t);
  r.sharedClientState.updateQueryState(e, "rejected", n);
  const i = r.Au.get(e),
    s = i && i.key;
  if (s) {
    let o = new Ee(H.comparator);
    o = o.insert(s, Ze.newNoDocument(s, Q.min()));
    const l = ne().add(s),
      u = new Eu(Q.min(), new Map(), new Ee(te), o, l);
    (await tT(r, u), (r.Ru = r.Ru.remove(s)), r.Au.delete(e), Vf(r));
  } else
    await Yh(r.localStore, e, !1)
      .then(() => Zh(r, e, n))
      .catch(is);
}
async function yN(t, e) {
  const n = Y(t),
    r = e.batch.batchId;
  try {
    const i = await CP(n.localStore, e);
    (rT(n, r, null),
      nT(n, r),
      n.sharedClientState.updateMutationState(r, "acknowledged"),
      await Yo(n, i));
  } catch (i) {
    await is(i);
  }
}
async function _N(t, e, n) {
  const r = Y(t);
  try {
    const i = await (function (o, l) {
      const u = Y(o);
      return u.persistence.runTransaction(
        "Reject batch",
        "readwrite-primary",
        (h) => {
          let f;
          return u.mutationQueue
            .lookupMutationBatch(h, l)
            .next(
              (p) => (
                se(p !== null, 37113),
                (f = p.keys()),
                u.mutationQueue.removeMutationBatch(h, p)
              ),
            )
            .next(() => u.mutationQueue.performConsistencyCheck(h))
            .next(() =>
              u.documentOverlayCache.removeOverlaysForBatchId(h, f, l),
            )
            .next(() =>
              u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h, f),
            )
            .next(() => u.localDocuments.getDocuments(h, f));
        },
      );
    })(r.localStore, e);
    (rT(r, e, n),
      nT(r, e),
      r.sharedClientState.updateMutationState(e, "rejected", n),
      await Yo(r, i));
  } catch (i) {
    await is(i);
  }
}
function nT(t, e) {
  ((t.mu.get(e) || []).forEach((n) => {
    n.resolve();
  }),
    t.mu.delete(e));
}
function rT(t, e, n) {
  const r = Y(t);
  let i = r.du[r.currentUser.toKey()];
  if (i) {
    const s = i.get(e);
    (s && (n ? s.reject(n) : s.resolve(), (i = i.remove(e))),
      (r.du[r.currentUser.toKey()] = i));
  }
}
function Zh(t, e, n = null) {
  t.sharedClientState.removeLocalQueryTarget(e);
  for (const r of t.Iu.get(e)) (t.Tu.delete(r), n && t.Pu.yu(r, n));
  (t.Iu.delete(e),
    t.isPrimaryClient &&
      t.Vu.Gr(e).forEach((r) => {
        t.Vu.containsKey(r) || iT(t, r);
      }));
}
function iT(t, e) {
  t.Eu.delete(e.path.canonicalString());
  const n = t.Ru.get(e);
  n !== null &&
    (Af(t.remoteStore, n), (t.Ru = t.Ru.remove(e)), t.Au.delete(n), Vf(t));
}
function vy(t, e, n) {
  for (const r of n)
    r instanceof Xw
      ? (t.Vu.addReference(r.key, e), vN(t, r))
      : r instanceof Zw
        ? ($(Df, "Document no longer in limbo: " + r.key),
          t.Vu.removeReference(r.key, e),
          t.Vu.containsKey(r.key) || iT(t, r.key))
        : G(19791, { wu: r });
}
function vN(t, e) {
  const n = e.key,
    r = n.path.canonicalString();
  t.Ru.get(n) ||
    t.Eu.has(r) ||
    ($(Df, "New document in limbo: " + n), t.Eu.add(r), Vf(t));
}
function Vf(t) {
  for (; t.Eu.size > 0 && t.Ru.size < t.maxConcurrentLimboResolutions; ) {
    const e = t.Eu.values().next().value;
    t.Eu.delete(e);
    const n = new H(ue.fromString(e)),
      r = t.fu.next();
    (t.Au.set(r, new lN(n)),
      (t.Ru = t.Ru.insert(n, r)),
      $w(
        t.remoteStore,
        new Gn(en(gf(n.path)), r, "TargetPurposeLimboResolution", fu.ce),
      ));
  }
}
async function Yo(t, e, n) {
  const r = Y(t),
    i = [],
    s = [],
    o = [];
  r.Tu.isEmpty() ||
    (r.Tu.forEach((l, u) => {
      o.push(
        r.pu(u, e, n).then((h) => {
          var f;
          if ((h || n) && r.isPrimaryClient) {
            const p = h
              ? !h.fromCache
              : (f = n == null ? void 0 : n.targetChanges.get(u.targetId)) ==
                  null
                ? void 0
                : f.current;
            r.sharedClientState.updateQueryState(
              u.targetId,
              p ? "current" : "not-current",
            );
          }
          if (h) {
            i.push(h);
            const p = If.Es(u.targetId, h);
            s.push(p);
          }
        }),
      );
    }),
    await Promise.all(o),
    r.Pu.J_(i),
    await (async function (u, h) {
      const f = Y(u);
      try {
        await f.persistence.runTransaction(
          "notifyLocalViewChanges",
          "readwrite",
          (p) =>
            b.forEach(h, (m) =>
              b
                .forEach(m.Ts, (I) =>
                  f.persistence.referenceDelegate.addReference(
                    p,
                    m.targetId,
                    I,
                  ),
                )
                .next(() =>
                  b.forEach(m.Is, (I) =>
                    f.persistence.referenceDelegate.removeReference(
                      p,
                      m.targetId,
                      I,
                    ),
                  ),
                ),
            ),
        );
      } catch (p) {
        if (!ss(p)) throw p;
        $(Sf, "Failed to update sequence numbers: " + p);
      }
      for (const p of h) {
        const m = p.targetId;
        if (!p.fromCache) {
          const I = f.vs.get(m),
            N = I.snapshotVersion,
            D = I.withLastLimboFreeSnapshotVersion(N);
          f.vs = f.vs.insert(m, D);
        }
      }
    })(r.localStore, s));
}
async function EN(t, e) {
  const n = Y(t);
  if (!n.currentUser.isEqual(e)) {
    $(Df, "User change. New user:", e.toKey());
    const r = await Uw(n.localStore, e);
    ((n.currentUser = e),
      (function (s, o) {
        (s.mu.forEach((l) => {
          l.forEach((u) => {
            u.reject(new B(M.CANCELLED, o));
          });
        }),
          s.mu.clear());
      })(n, "'waitForPendingWrites' promise is rejected due to a user change."),
      n.sharedClientState.handleUserChange(
        e,
        r.removedBatchIds,
        r.addedBatchIds,
      ),
      await Yo(n, r.Ns));
  }
}
function wN(t, e) {
  const n = Y(t),
    r = n.Au.get(e);
  if (r && r.hu) return ne().add(r.key);
  {
    let i = ne();
    const s = n.Iu.get(e);
    if (!s) return i;
    for (const o of s) {
      const l = n.Tu.get(o);
      i = i.unionWith(l.view.nu);
    }
    return i;
  }
}
function sT(t) {
  const e = Y(t);
  return (
    (e.remoteStore.remoteSyncer.applyRemoteEvent = tT.bind(null, e)),
    (e.remoteStore.remoteSyncer.getRemoteKeysForTarget = wN.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectListen = gN.bind(null, e)),
    (e.Pu.J_ = iN.bind(null, e.eventManager)),
    (e.Pu.yu = sN.bind(null, e.eventManager)),
    e
  );
}
function TN(t) {
  const e = Y(t);
  return (
    (e.remoteStore.remoteSyncer.applySuccessfulWrite = yN.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectFailedWrite = _N.bind(null, e)),
    e
  );
}
class Wl {
  constructor() {
    ((this.kind = "memory"), (this.synchronizeTabs = !1));
  }
  async initialize(e) {
    ((this.serializer = wu(e.databaseInfo.databaseId)),
      (this.sharedClientState = this.Du(e)),
      (this.persistence = this.Cu(e)),
      await this.persistence.start(),
      (this.localStore = this.vu(e)),
      (this.gcScheduler = this.Fu(e, this.localStore)),
      (this.indexBackfillerScheduler = this.Mu(e, this.localStore)));
  }
  Fu(e, n) {
    return null;
  }
  Mu(e, n) {
    return null;
  }
  vu(e) {
    return AP(this.persistence, new TP(), e.initialUser, this.serializer);
  }
  Cu(e) {
    return new Fw(Tf.Vi, this.serializer);
  }
  Du(e) {
    return new DP();
  }
  async terminate() {
    var e, n;
    ((e = this.gcScheduler) == null || e.stop(),
      (n = this.indexBackfillerScheduler) == null || n.stop(),
      this.sharedClientState.shutdown(),
      await this.persistence.shutdown());
  }
}
Wl.provider = { build: () => new Wl() };
class IN extends Wl {
  constructor(e) {
    (super(), (this.cacheSizeBytes = e));
  }
  Fu(e, n) {
    se(this.persistence.referenceDelegate instanceof zl, 46915);
    const r = this.persistence.referenceDelegate.garbageCollector;
    return new aP(r, e.asyncQueue, n);
  }
  Cu(e) {
    const n =
      this.cacheSizeBytes !== void 0
        ? lt.withCacheSize(this.cacheSizeBytes)
        : lt.DEFAULT;
    return new Fw((r) => zl.Vi(r, n), this.serializer);
  }
}
class ed {
  async initialize(e, n) {
    this.localStore ||
      ((this.localStore = e.localStore),
      (this.sharedClientState = e.sharedClientState),
      (this.datastore = this.createDatastore(n)),
      (this.remoteStore = this.createRemoteStore(n)),
      (this.eventManager = this.createEventManager(n)),
      (this.syncEngine = this.createSyncEngine(n, !e.synchronizeTabs)),
      (this.sharedClientState.onlineStateHandler = (r) =>
        _y(this.syncEngine, r, 1)),
      (this.remoteStore.remoteSyncer.handleCredentialChange = EN.bind(
        null,
        this.syncEngine,
      )),
      await tN(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(e) {
    return (function () {
      return new rN();
    })();
  }
  createDatastore(e) {
    const n = wu(e.databaseInfo.databaseId),
      r = bP(e.databaseInfo);
    return zP(e.authCredentials, e.appCheckCredentials, r, n);
  }
  createRemoteStore(e) {
    return (function (r, i, s, o, l) {
      return new WP(r, i, s, o, l);
    })(
      this.localStore,
      this.datastore,
      e.asyncQueue,
      (n) => _y(this.syncEngine, n, 0),
      (function () {
        return dy.v() ? new dy() : new VP();
      })(),
    );
  }
  createSyncEngine(e, n) {
    return (function (i, s, o, l, u, h, f) {
      const p = new uN(i, s, o, l, u, h);
      return (f && (p.gu = !0), p);
    })(
      this.localStore,
      this.remoteStore,
      this.eventManager,
      this.sharedClientState,
      e.initialUser,
      e.maxConcurrentLimboResolutions,
      n,
    );
  }
  async terminate() {
    var e, n;
    (await (async function (i) {
      const s = Y(i);
      ($(Xr, "RemoteStore shutting down."),
        s.Ea.add(5),
        await Qo(s),
        s.Aa.shutdown(),
        s.Va.set("Unknown"));
    })(this.remoteStore),
      (e = this.datastore) == null || e.terminate(),
      (n = this.eventManager) == null || n.terminate());
  }
}
ed.provider = { build: () => new ed() };
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oT {
  constructor(e) {
    ((this.observer = e), (this.muted = !1));
  }
  next(e) {
    this.muted || (this.observer.next && this.Ou(this.observer.next, e));
  }
  error(e) {
    this.muted ||
      (this.observer.error
        ? this.Ou(this.observer.error, e)
        : In("Uncaught Error in snapshot listener:", e.toString()));
  }
  Nu() {
    this.muted = !0;
  }
  Ou(e, n) {
    setTimeout(() => {
      this.muted || e(n);
    }, 0);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const pr = "FirestoreClient";
class SN {
  constructor(e, n, r, i, s) {
    ((this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.asyncQueue = r),
      (this._databaseInfo = i),
      (this.user = Je.UNAUTHENTICATED),
      (this.clientId = cf.newId()),
      (this.authCredentialListener = () => Promise.resolve()),
      (this.appCheckCredentialListener = () => Promise.resolve()),
      (this._uninitializedComponentsProvider = s),
      this.authCredentials.start(r, async (o) => {
        ($(pr, "Received user=", o.uid),
          await this.authCredentialListener(o),
          (this.user = o));
      }),
      this.appCheckCredentials.start(
        r,
        (o) => (
          $(pr, "Received new app check token=", o),
          this.appCheckCredentialListener(o, this.user)
        ),
      ));
  }
  get configuration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this._databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100,
    };
  }
  setCredentialChangeListener(e) {
    this.authCredentialListener = e;
  }
  setAppCheckTokenChangeListener(e) {
    this.appCheckCredentialListener = e;
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const e = new gn();
    return (
      this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          (this._onlineComponents && (await this._onlineComponents.terminate()),
            this._offlineComponents &&
              (await this._offlineComponents.terminate()),
            this.authCredentials.shutdown(),
            this.appCheckCredentials.shutdown(),
            e.resolve());
        } catch (n) {
          const r = Nf(n, "Failed to shutdown persistence");
          e.reject(r);
        }
      }),
      e.promise
    );
  }
}
async function Dc(t, e) {
  (t.asyncQueue.verifyOperationInProgress(),
    $(pr, "Initializing OfflineComponentProvider"));
  const n = t.configuration;
  await e.initialize(n);
  let r = n.initialUser;
  (t.setCredentialChangeListener(async (i) => {
    r.isEqual(i) || (await Uw(e.localStore, i), (r = i));
  }),
    e.persistence.setDatabaseDeletedListener(() => t.terminate()),
    (t._offlineComponents = e));
}
async function Ey(t, e) {
  t.asyncQueue.verifyOperationInProgress();
  const n = await AN(t);
  ($(pr, "Initializing OnlineComponentProvider"),
    await e.initialize(n, t.configuration),
    t.setCredentialChangeListener((r) => py(e.remoteStore, r)),
    t.setAppCheckTokenChangeListener((r, i) => py(e.remoteStore, i)),
    (t._onlineComponents = e));
}
async function AN(t) {
  if (!t._offlineComponents)
    if (t._uninitializedComponentsProvider) {
      $(pr, "Using user provided OfflineComponentProvider");
      try {
        await Dc(t, t._uninitializedComponentsProvider._offline);
      } catch (e) {
        const n = e;
        if (
          !(function (i) {
            return i.name === "FirebaseError"
              ? i.code === M.FAILED_PRECONDITION || i.code === M.UNIMPLEMENTED
              : !(typeof DOMException < "u" && i instanceof DOMException) ||
                  i.code === 22 ||
                  i.code === 20 ||
                  i.code === 11;
          })(n)
        )
          throw n;
        (Jr(
          "Error using user provided cache. Falling back to memory cache: " + n,
        ),
          await Dc(t, new Wl()));
      }
    } else
      ($(pr, "Using default OfflineComponentProvider"),
        await Dc(t, new IN(void 0)));
  return t._offlineComponents;
}
async function aT(t) {
  return (
    t._onlineComponents ||
      (t._uninitializedComponentsProvider
        ? ($(pr, "Using user provided OnlineComponentProvider"),
          await Ey(t, t._uninitializedComponentsProvider._online))
        : ($(pr, "Using default OnlineComponentProvider"),
          await Ey(t, new ed()))),
    t._onlineComponents
  );
}
function CN(t) {
  return aT(t).then((e) => e.syncEngine);
}
async function lT(t) {
  const e = await aT(t),
    n = e.eventManager;
  return (
    (n.onListen = cN.bind(null, e.syncEngine)),
    (n.onUnlisten = fN.bind(null, e.syncEngine)),
    (n.onFirstRemoteStoreListen = hN.bind(null, e.syncEngine)),
    (n.onLastRemoteStoreUnlisten = pN.bind(null, e.syncEngine)),
    n
  );
}
function RN(t, e, n = {}) {
  const r = new gn();
  return (
    t.asyncQueue.enqueueAndForget(async () =>
      (function (s, o, l, u, h) {
        const f = new oT({
            next: (m) => {
              (f.Nu(), o.enqueueAndForget(() => Yw(s, p)));
              const I = m.docs.has(l);
              !I && m.fromCache
                ? h.reject(
                    new B(
                      M.UNAVAILABLE,
                      "Failed to get document because the client is offline.",
                    ),
                  )
                : I && m.fromCache && u && u.source === "server"
                  ? h.reject(
                      new B(
                        M.UNAVAILABLE,
                        'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)',
                      ),
                    )
                  : h.resolve(m);
            },
            error: (m) => h.reject(m),
          }),
          p = new Jw(gf(l.path), f, { includeMetadataChanges: !0, Ka: !0 });
        return Qw(s, p);
      })(await lT(t), t.asyncQueue, e, n, r),
    ),
    r.promise
  );
}
function kN(t, e, n = {}) {
  const r = new gn();
  return (
    t.asyncQueue.enqueueAndForget(async () =>
      (function (s, o, l, u, h) {
        const f = new oT({
            next: (m) => {
              (f.Nu(),
                o.enqueueAndForget(() => Yw(s, p)),
                m.fromCache && u.source === "server"
                  ? h.reject(
                      new B(
                        M.UNAVAILABLE,
                        'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)',
                      ),
                    )
                  : h.resolve(m));
            },
            error: (m) => h.reject(m),
          }),
          p = new Jw(l, f, { includeMetadataChanges: !0, Ka: !0 });
        return Qw(s, p);
      })(await lT(t), t.asyncQueue, e, n, r),
    ),
    r.promise
  );
}
function PN(t, e) {
  const n = new gn();
  return (
    t.asyncQueue.enqueueAndForget(async () => mN(await CN(t), e, n)),
    n.promise
  );
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function uT(t) {
  const e = {};
  return (
    t.timeoutSeconds !== void 0 && (e.timeoutSeconds = t.timeoutSeconds),
    e
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const NN = "ComponentProvider",
  wy = new Map();
function xN(t, e, n, r, i) {
  return new XR(
    t,
    e,
    n,
    i.host,
    i.ssl,
    i.experimentalForceLongPolling,
    i.experimentalAutoDetectLongPolling,
    uT(i.experimentalLongPollingOptions),
    i.useFetchStreams,
    i.isUsingEmulator,
    r,
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const cT = "firestore.googleapis.com",
  Ty = !0;
class Iy {
  constructor(e) {
    if (e.host === void 0) {
      if (e.ssl !== void 0)
        throw new B(
          M.INVALID_ARGUMENT,
          "Can't provide ssl option if host option is not set",
        );
      ((this.host = cT), (this.ssl = Ty));
    } else ((this.host = e.host), (this.ssl = e.ssl ?? Ty));
    if (
      ((this.isUsingEmulator = e.emulatorOptions !== void 0),
      (this.credentials = e.credentials),
      (this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties),
      (this.localCache = e.localCache),
      e.cacheSizeBytes === void 0)
    )
      this.cacheSizeBytes = bw;
    else {
      if (e.cacheSizeBytes !== -1 && e.cacheSizeBytes < sP)
        throw new B(
          M.INVALID_ARGUMENT,
          "cacheSizeBytes must be at least 1048576",
        );
      this.cacheSizeBytes = e.cacheSizeBytes;
    }
    (jR(
      "experimentalForceLongPolling",
      e.experimentalForceLongPolling,
      "experimentalAutoDetectLongPolling",
      e.experimentalAutoDetectLongPolling,
    ),
      (this.experimentalForceLongPolling = !!e.experimentalForceLongPolling),
      this.experimentalForceLongPolling
        ? (this.experimentalAutoDetectLongPolling = !1)
        : e.experimentalAutoDetectLongPolling === void 0
          ? (this.experimentalAutoDetectLongPolling = !0)
          : (this.experimentalAutoDetectLongPolling =
              !!e.experimentalAutoDetectLongPolling),
      (this.experimentalLongPollingOptions = uT(
        e.experimentalLongPollingOptions ?? {},
      )),
      (function (r) {
        if (r.timeoutSeconds !== void 0) {
          if (isNaN(r.timeoutSeconds))
            throw new B(
              M.INVALID_ARGUMENT,
              `invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`,
            );
          if (r.timeoutSeconds < 5)
            throw new B(
              M.INVALID_ARGUMENT,
              `invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`,
            );
          if (r.timeoutSeconds > 30)
            throw new B(
              M.INVALID_ARGUMENT,
              `invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`,
            );
        }
      })(this.experimentalLongPollingOptions),
      (this.useFetchStreams = !!e.useFetchStreams));
  }
  isEqual(e) {
    return (
      this.host === e.host &&
      this.ssl === e.ssl &&
      this.credentials === e.credentials &&
      this.cacheSizeBytes === e.cacheSizeBytes &&
      this.experimentalForceLongPolling === e.experimentalForceLongPolling &&
      this.experimentalAutoDetectLongPolling ===
        e.experimentalAutoDetectLongPolling &&
      (function (r, i) {
        return r.timeoutSeconds === i.timeoutSeconds;
      })(
        this.experimentalLongPollingOptions,
        e.experimentalLongPollingOptions,
      ) &&
      this.ignoreUndefinedProperties === e.ignoreUndefinedProperties &&
      this.useFetchStreams === e.useFetchStreams
    );
  }
}
class Su {
  constructor(e, n, r, i) {
    ((this._authCredentials = e),
      (this._appCheckCredentials = n),
      (this._databaseId = r),
      (this._app = i),
      (this.type = "firestore-lite"),
      (this._persistenceKey = "(lite)"),
      (this._settings = new Iy({})),
      (this._settingsFrozen = !1),
      (this._emulatorOptions = {}),
      (this._terminateTask = "notTerminated"));
  }
  get app() {
    if (!this._app)
      throw new B(
        M.FAILED_PRECONDITION,
        "Firestore was not initialized using the Firebase SDK. 'app' is not available",
      );
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== "notTerminated";
  }
  _setSettings(e) {
    if (this._settingsFrozen)
      throw new B(
        M.FAILED_PRECONDITION,
        "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.",
      );
    ((this._settings = new Iy(e)),
      (this._emulatorOptions = e.emulatorOptions || {}),
      e.credentials !== void 0 &&
        (this._authCredentials = (function (r) {
          if (!r) return new NR();
          switch (r.type) {
            case "firstParty":
              return new OR(
                r.sessionIndex || "0",
                r.iamToken || null,
                r.authTokenFactory || null,
              );
            case "provider":
              return r.client;
            default:
              throw new B(
                M.INVALID_ARGUMENT,
                "makeAuthCredentialsProvider failed due to invalid credential type",
              );
          }
        })(e.credentials)));
  }
  _getSettings() {
    return this._settings;
  }
  _getEmulatorOptions() {
    return this._emulatorOptions;
  }
  _freezeSettings() {
    return ((this._settingsFrozen = !0), this._settings);
  }
  _delete() {
    return (
      this._terminateTask === "notTerminated" &&
        (this._terminateTask = this._terminate()),
      this._terminateTask
    );
  }
  async _restart() {
    this._terminateTask === "notTerminated"
      ? await this._terminate()
      : (this._terminateTask = "notTerminated");
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings,
    };
  }
  _terminate() {
    return (
      (function (n) {
        const r = wy.get(n);
        r && ($(NN, "Removing Datastore"), wy.delete(n), r.terminate());
      })(this),
      Promise.resolve()
    );
  }
}
function DN(t, e, n, r = {}) {
  var h;
  t = Sn(t, Su);
  const i = es(e),
    s = t._getSettings(),
    o = { ...s, emulatorOptions: t._getEmulatorOptions() },
    l = `${e}:${n}`;
  (i && (Jv(`https://${l}`), Xv("Firestore", !0)),
    s.host !== cT &&
      s.host !== l &&
      Jr(
        "Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.",
      ));
  const u = { ...s, host: l, ssl: i, emulatorOptions: r };
  if (!qr(u, o) && (t._setSettings(u), r.mockUserToken)) {
    let f, p;
    if (typeof r.mockUserToken == "string")
      ((f = r.mockUserToken), (p = Je.MOCK_USER));
    else {
      f = FS(
        r.mockUserToken,
        (h = t._app) == null ? void 0 : h.options.projectId,
      );
      const m = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!m)
        throw new B(
          M.INVALID_ARGUMENT,
          "mockUserToken must contain 'sub' or 'user_id' field!",
        );
      p = new Je(m);
    }
    t._authCredentials = new xR(new HE(f, p));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Tr {
  constructor(e, n, r) {
    ((this.converter = n),
      (this._query = r),
      (this.type = "query"),
      (this.firestore = e));
  }
  withConverter(e) {
    return new Tr(this.firestore, e, this._query);
  }
}
class Ce {
  constructor(e, n, r) {
    ((this.converter = n),
      (this._key = r),
      (this.type = "document"),
      (this.firestore = e));
  }
  get _path() {
    return this._key.path;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get path() {
    return this._key.path.canonicalString();
  }
  get parent() {
    return new or(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(e) {
    return new Ce(this.firestore, e, this._key);
  }
  toJSON() {
    return { type: Ce._jsonSchemaVersion, referencePath: this._key.toString() };
  }
  static fromJSON(e, n, r) {
    if (qo(n, Ce._jsonSchema))
      return new Ce(e, r || null, new H(ue.fromString(n.referencePath)));
  }
}
((Ce._jsonSchemaVersion = "firestore/documentReference/1.0"),
  (Ce._jsonSchema = {
    type: Ne("string", Ce._jsonSchemaVersion),
    referencePath: Ne("string"),
  }));
class or extends Tr {
  constructor(e, n, r) {
    (super(e, n, gf(r)), (this._path = r), (this.type = "collection"));
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    const e = this._path.popLast();
    return e.isEmpty() ? null : new Ce(this.firestore, null, new H(e));
  }
  withConverter(e) {
    return new or(this.firestore, e, this._path);
  }
}
function VN(t, e, ...n) {
  if (((t = Le(t)), qE("collection", "path", e), t instanceof Su)) {
    const r = ue.fromString(e, ...n);
    return (Mg(r), new or(t, null, r));
  }
  {
    if (!(t instanceof Ce || t instanceof or))
      throw new B(
        M.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore",
      );
    const r = t._path.child(ue.fromString(e, ...n));
    return (Mg(r), new or(t.firestore, null, r));
  }
}
function Of(t, e, ...n) {
  if (
    ((t = Le(t)),
    arguments.length === 1 && (e = cf.newId()),
    qE("doc", "path", e),
    t instanceof Su)
  ) {
    const r = ue.fromString(e, ...n);
    return (Lg(r), new Ce(t, null, new H(r)));
  }
  {
    if (!(t instanceof Ce || t instanceof or))
      throw new B(
        M.INVALID_ARGUMENT,
        "Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore",
      );
    const r = t._path.child(ue.fromString(e, ...n));
    return (
      Lg(r),
      new Ce(t.firestore, t instanceof or ? t.converter : null, new H(r))
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Sy = "AsyncQueue";
class Ay {
  constructor(e = Promise.resolve()) {
    ((this.Yu = []),
      (this.ec = !1),
      (this.tc = []),
      (this.nc = null),
      (this.rc = !1),
      (this.sc = !1),
      (this.oc = []),
      (this.M_ = new Bw(this, "async_queue_retry")),
      (this._c = () => {
        const r = xc();
        (r && $(Sy, "Visibility state changed to " + r.visibilityState),
          this.M_.w_());
      }),
      (this.ac = e));
    const n = xc();
    n &&
      typeof n.addEventListener == "function" &&
      n.addEventListener("visibilitychange", this._c);
  }
  get isShuttingDown() {
    return this.ec;
  }
  enqueueAndForget(e) {
    this.enqueue(e);
  }
  enqueueAndForgetEvenWhileRestricted(e) {
    (this.uc(), this.cc(e));
  }
  enterRestrictedMode(e) {
    if (!this.ec) {
      ((this.ec = !0), (this.sc = e || !1));
      const n = xc();
      n &&
        typeof n.removeEventListener == "function" &&
        n.removeEventListener("visibilitychange", this._c);
    }
  }
  enqueue(e) {
    if ((this.uc(), this.ec)) return new Promise(() => {});
    const n = new gn();
    return this.cc(() =>
      this.ec && this.sc
        ? Promise.resolve()
        : (e().then(n.resolve, n.reject), n.promise),
    ).then(() => n.promise);
  }
  enqueueRetryable(e) {
    this.enqueueAndForget(() => (this.Yu.push(e), this.lc()));
  }
  async lc() {
    if (this.Yu.length !== 0) {
      try {
        (await this.Yu[0](), this.Yu.shift(), this.M_.reset());
      } catch (e) {
        if (!ss(e)) throw e;
        $(Sy, "Operation failed with retryable error: " + e);
      }
      this.Yu.length > 0 && this.M_.p_(() => this.lc());
    }
  }
  cc(e) {
    const n = this.ac.then(
      () => (
        (this.rc = !0),
        e()
          .catch((r) => {
            throw (
              (this.nc = r),
              (this.rc = !1),
              In("INTERNAL UNHANDLED ERROR: ", Cy(r)),
              r
            );
          })
          .then((r) => ((this.rc = !1), r))
      ),
    );
    return ((this.ac = n), n);
  }
  enqueueAfterDelay(e, n, r) {
    (this.uc(), this.oc.indexOf(e) > -1 && (n = 0));
    const i = Pf.createAndSchedule(this, e, n, r, (s) => this.hc(s));
    return (this.tc.push(i), i);
  }
  uc() {
    this.nc && G(47125, { Pc: Cy(this.nc) });
  }
  verifyOperationInProgress() {}
  async Tc() {
    let e;
    do ((e = this.ac), await e);
    while (e !== this.ac);
  }
  Ic(e) {
    for (const n of this.tc) if (n.timerId === e) return !0;
    return !1;
  }
  Ec(e) {
    return this.Tc().then(() => {
      this.tc.sort((n, r) => n.targetTimeMs - r.targetTimeMs);
      for (const n of this.tc)
        if ((n.skipDelay(), e !== "all" && n.timerId === e)) break;
      return this.Tc();
    });
  }
  Rc(e) {
    this.oc.push(e);
  }
  hc(e) {
    const n = this.tc.indexOf(e);
    this.tc.splice(n, 1);
  }
}
function Cy(t) {
  let e = t.message || "";
  return (
    t.stack &&
      (e = t.stack.includes(t.message)
        ? t.stack
        : t.message +
          `
` +
          t.stack),
    e
  );
}
class Jo extends Su {
  constructor(e, n, r, i) {
    (super(e, n, r, i),
      (this.type = "firestore"),
      (this._queue = new Ay()),
      (this._persistenceKey = (i == null ? void 0 : i.name) || "[DEFAULT]"));
  }
  async _terminate() {
    if (this._firestoreClient) {
      const e = this._firestoreClient.terminate();
      ((this._queue = new Ay(e)), (this._firestoreClient = void 0), await e);
    }
  }
}
function ON(t, e) {
  const n = typeof t == "object" ? t : nE(),
    r = typeof t == "string" ? t : bl,
    i = Jd(n, "firestore").getImmediate({ identifier: r });
  if (!i._initialized) {
    const s = MS("firestore");
    s && DN(i, ...s);
  }
  return i;
}
function Lf(t) {
  if (t._terminated)
    throw new B(
      M.FAILED_PRECONDITION,
      "The client has already been terminated.",
    );
  return (t._firestoreClient || LN(t), t._firestoreClient);
}
function LN(t) {
  var r, i, s, o;
  const e = t._freezeSettings(),
    n = xN(
      t._databaseId,
      ((r = t._app) == null ? void 0 : r.options.appId) || "",
      t._persistenceKey,
      (i = t._app) == null ? void 0 : i.options.apiKey,
      e,
    );
  (t._componentsProvider ||
    ((s = e.localCache) != null &&
      s._offlineComponentProvider &&
      (o = e.localCache) != null &&
      o._onlineComponentProvider &&
      (t._componentsProvider = {
        _offline: e.localCache._offlineComponentProvider,
        _online: e.localCache._onlineComponentProvider,
      })),
    (t._firestoreClient = new SN(
      t._authCredentials,
      t._appCheckCredentials,
      t._queue,
      n,
      t._componentsProvider &&
        (function (u) {
          const h = u == null ? void 0 : u._online.build();
          return {
            _offline: u == null ? void 0 : u._offline.build(h),
            _online: h,
          };
        })(t._componentsProvider),
    )));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Rt {
  constructor(e) {
    this._byteString = e;
  }
  static fromBase64String(e) {
    try {
      return new Rt(qe.fromBase64String(e));
    } catch (n) {
      throw new B(
        M.INVALID_ARGUMENT,
        "Failed to construct data from Base64 string: " + n,
      );
    }
  }
  static fromUint8Array(e) {
    return new Rt(qe.fromUint8Array(e));
  }
  toBase64() {
    return this._byteString.toBase64();
  }
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  isEqual(e) {
    return this._byteString.isEqual(e._byteString);
  }
  toJSON() {
    return { type: Rt._jsonSchemaVersion, bytes: this.toBase64() };
  }
  static fromJSON(e) {
    if (qo(e, Rt._jsonSchema)) return Rt.fromBase64String(e.bytes);
  }
}
((Rt._jsonSchemaVersion = "firestore/bytes/1.0"),
  (Rt._jsonSchema = {
    type: Ne("string", Rt._jsonSchemaVersion),
    bytes: Ne("string"),
  }));
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Mf {
  constructor(...e) {
    for (let n = 0; n < e.length; ++n)
      if (e[n].length === 0)
        throw new B(
          M.INVALID_ARGUMENT,
          "Invalid field name at argument $(i + 1). Field names must not be empty.",
        );
    this._internalPath = new $e(e);
  }
  isEqual(e) {
    return this._internalPath.isEqual(e._internalPath);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xo {
  constructor(e) {
    this._methodName = e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rn {
  constructor(e, n) {
    if (!isFinite(e) || e < -90 || e > 90)
      throw new B(
        M.INVALID_ARGUMENT,
        "Latitude must be a number between -90 and 90, but was: " + e,
      );
    if (!isFinite(n) || n < -180 || n > 180)
      throw new B(
        M.INVALID_ARGUMENT,
        "Longitude must be a number between -180 and 180, but was: " + n,
      );
    ((this._lat = e), (this._long = n));
  }
  get latitude() {
    return this._lat;
  }
  get longitude() {
    return this._long;
  }
  isEqual(e) {
    return this._lat === e._lat && this._long === e._long;
  }
  _compareTo(e) {
    return te(this._lat, e._lat) || te(this._long, e._long);
  }
  toJSON() {
    return {
      latitude: this._lat,
      longitude: this._long,
      type: rn._jsonSchemaVersion,
    };
  }
  static fromJSON(e) {
    if (qo(e, rn._jsonSchema)) return new rn(e.latitude, e.longitude);
  }
}
((rn._jsonSchemaVersion = "firestore/geoPoint/1.0"),
  (rn._jsonSchema = {
    type: Ne("string", rn._jsonSchemaVersion),
    latitude: Ne("number"),
    longitude: Ne("number"),
  }));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zt {
  constructor(e) {
    this._values = (e || []).map((n) => n);
  }
  toArray() {
    return this._values.map((e) => e);
  }
  isEqual(e) {
    return (function (r, i) {
      if (r.length !== i.length) return !1;
      for (let s = 0; s < r.length; ++s) if (r[s] !== i[s]) return !1;
      return !0;
    })(this._values, e._values);
  }
  toJSON() {
    return { type: zt._jsonSchemaVersion, vectorValues: this._values };
  }
  static fromJSON(e) {
    if (qo(e, zt._jsonSchema)) {
      if (
        Array.isArray(e.vectorValues) &&
        e.vectorValues.every((n) => typeof n == "number")
      )
        return new zt(e.vectorValues);
      throw new B(
        M.INVALID_ARGUMENT,
        "Expected 'vectorValues' field to be a number array",
      );
    }
  }
}
((zt._jsonSchemaVersion = "firestore/vectorValue/1.0"),
  (zt._jsonSchema = {
    type: Ne("string", zt._jsonSchemaVersion),
    vectorValues: Ne("object"),
  }));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const MN = /^__.*__$/;
class bN {
  constructor(e, n, r) {
    ((this.data = e), (this.fieldMask = n), (this.fieldTransforms = r));
  }
  toMutation(e, n) {
    return this.fieldMask !== null
      ? new wr(e, this.data, this.fieldMask, n, this.fieldTransforms)
      : new Go(e, this.data, n, this.fieldTransforms);
  }
}
class hT {
  constructor(e, n, r) {
    ((this.data = e), (this.fieldMask = n), (this.fieldTransforms = r));
  }
  toMutation(e, n) {
    return new wr(e, this.data, this.fieldMask, n, this.fieldTransforms);
  }
}
function dT(t) {
  switch (t) {
    case 0:
    case 2:
    case 1:
      return !0;
    case 3:
    case 4:
      return !1;
    default:
      throw G(40011, { dataSource: t });
  }
}
class bf {
  constructor(e, n, r, i, s, o) {
    ((this.settings = e),
      (this.databaseId = n),
      (this.serializer = r),
      (this.ignoreUndefinedProperties = i),
      s === void 0 && this.validatePath(),
      (this.fieldTransforms = s || []),
      (this.fieldMask = o || []));
  }
  get path() {
    return this.settings.path;
  }
  get dataSource() {
    return this.settings.dataSource;
  }
  contextWith(e) {
    return new bf(
      { ...this.settings, ...e },
      this.databaseId,
      this.serializer,
      this.ignoreUndefinedProperties,
      this.fieldTransforms,
      this.fieldMask,
    );
  }
  childContextForField(e) {
    var i;
    const n = (i = this.path) == null ? void 0 : i.child(e),
      r = this.contextWith({ path: n, arrayElement: !1 });
    return (r.validatePathSegment(e), r);
  }
  childContextForFieldPath(e) {
    var i;
    const n = (i = this.path) == null ? void 0 : i.child(e),
      r = this.contextWith({ path: n, arrayElement: !1 });
    return (r.validatePath(), r);
  }
  childContextForArray(e) {
    return this.contextWith({ path: void 0, arrayElement: !0 });
  }
  createError(e) {
    return Hl(
      e,
      this.settings.methodName,
      this.settings.hasConverter || !1,
      this.path,
      this.settings.targetDoc,
    );
  }
  contains(e) {
    return (
      this.fieldMask.find((n) => e.isPrefixOf(n)) !== void 0 ||
      this.fieldTransforms.find((n) => e.isPrefixOf(n.field)) !== void 0
    );
  }
  validatePath() {
    if (this.path)
      for (let e = 0; e < this.path.length; e++)
        this.validatePathSegment(this.path.get(e));
  }
  validatePathSegment(e) {
    if (e.length === 0)
      throw this.createError("Document fields must not be empty");
    if (dT(this.dataSource) && MN.test(e))
      throw this.createError('Document fields cannot begin and end with "__"');
  }
}
class FN {
  constructor(e, n, r) {
    ((this.databaseId = e),
      (this.ignoreUndefinedProperties = n),
      (this.serializer = r || wu(e)));
  }
  createContext(e, n, r, i = !1) {
    return new bf(
      {
        dataSource: e,
        methodName: n,
        targetDoc: r,
        path: $e.emptyPath(),
        arrayElement: !1,
        hasConverter: i,
      },
      this.databaseId,
      this.serializer,
      this.ignoreUndefinedProperties,
    );
  }
}
function Ff(t) {
  const e = t._freezeSettings(),
    n = wu(t._databaseId);
  return new FN(t._databaseId, !!e.ignoreUndefinedProperties, n);
}
function UN(t, e, n, r, i, s = {}) {
  const o = t.createContext(s.merge || s.mergeFields ? 2 : 0, e, n, i);
  Bf("Data must be an object, but it was:", o, r);
  const l = fT(r, o);
  let u, h;
  if (s.merge) ((u = new vt(o.fieldMask)), (h = o.fieldTransforms));
  else if (s.mergeFields) {
    const f = [];
    for (const p of s.mergeFields) {
      const m = Yi(e, p, n);
      if (!o.contains(m))
        throw new B(
          M.INVALID_ARGUMENT,
          `Field '${m}' is specified in your field mask but missing from your input data.`,
        );
      gT(f, m) || f.push(m);
    }
    ((u = new vt(f)), (h = o.fieldTransforms.filter((p) => u.covers(p.field))));
  } else ((u = null), (h = o.fieldTransforms));
  return new bN(new ct(l), u, h);
}
class Au extends Xo {
  _toFieldTransform(e) {
    if (e.dataSource !== 2)
      throw e.dataSource === 1
        ? e.createError(
            `${this._methodName}() can only appear at the top level of your update data`,
          )
        : e.createError(
            `${this._methodName}() cannot be used with set() unless you pass {merge:true}`,
          );
    return (e.fieldMask.push(e.path), null);
  }
  isEqual(e) {
    return e instanceof Au;
  }
}
class Uf extends Xo {
  _toFieldTransform(e) {
    return new Tw(e.path, new xo());
  }
  isEqual(e) {
    return e instanceof Uf;
  }
}
class jf extends Xo {
  constructor(e, n) {
    (super(e), (this.Vc = n));
  }
  _toFieldTransform(e) {
    const n = new Oo(e.serializer, yw(e.serializer, this.Vc));
    return new Tw(e.path, n);
  }
  isEqual(e) {
    return e instanceof jf && this.Vc === e.Vc;
  }
}
function jN(t, e, n, r) {
  const i = t.createContext(1, e, n);
  Bf("Data must be an object, but it was:", i, r);
  const s = [],
    o = ct.empty();
  Er(r, (u, h) => {
    const f = mT(e, u, n);
    h = Le(h);
    const p = i.childContextForFieldPath(f);
    if (h instanceof Au) s.push(f);
    else {
      const m = Zo(h, p);
      m != null && (s.push(f), o.set(f, m));
    }
  });
  const l = new vt(s);
  return new hT(o, l, i.fieldTransforms);
}
function BN(t, e, n, r, i, s) {
  const o = t.createContext(1, e, n),
    l = [Yi(e, r, n)],
    u = [i];
  if (s.length % 2 != 0)
    throw new B(
      M.INVALID_ARGUMENT,
      `Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`,
    );
  for (let m = 0; m < s.length; m += 2) (l.push(Yi(e, s[m])), u.push(s[m + 1]));
  const h = [],
    f = ct.empty();
  for (let m = l.length - 1; m >= 0; --m)
    if (!gT(h, l[m])) {
      const I = l[m];
      let N = u[m];
      N = Le(N);
      const D = o.childContextForFieldPath(I);
      if (N instanceof Au) h.push(I);
      else {
        const F = Zo(N, D);
        F != null && (h.push(I), f.set(I, F));
      }
    }
  const p = new vt(h);
  return new hT(f, p, o.fieldTransforms);
}
function zN(t, e, n, r = !1) {
  return Zo(n, t.createContext(r ? 4 : 3, e));
}
function Zo(t, e) {
  if (pT((t = Le(t)))) return (Bf("Unsupported field value:", e, t), fT(t, e));
  if (t instanceof Xo)
    return (
      (function (r, i) {
        if (!dT(i.dataSource))
          throw i.createError(
            `${r._methodName}() can only be used with update() and set()`,
          );
        if (!i.path)
          throw i.createError(
            `${r._methodName}() is not currently supported inside arrays`,
          );
        const s = r._toFieldTransform(i);
        s && i.fieldTransforms.push(s);
      })(t, e),
      null
    );
  if (t === void 0 && e.ignoreUndefinedProperties) return null;
  if ((e.path && e.fieldMask.push(e.path), t instanceof Array)) {
    if (e.settings.arrayElement && e.dataSource !== 4)
      throw e.createError("Nested arrays are not supported");
    return (function (r, i) {
      const s = [];
      let o = 0;
      for (const l of r) {
        let u = Zo(l, i.childContextForArray(o));
        (u == null && (u = { nullValue: "NULL_VALUE" }), s.push(u), o++);
      }
      return { arrayValue: { values: s } };
    })(t, e);
  }
  return (function (r, i) {
    if ((r = Le(r)) === null) return { nullValue: "NULL_VALUE" };
    if (typeof r == "number") return yw(i.serializer, r);
    if (typeof r == "boolean") return { booleanValue: r };
    if (typeof r == "string") return { stringValue: r };
    if (r instanceof Date) {
      const s = fe.fromDate(r);
      return { timestampValue: Bl(i.serializer, s) };
    }
    if (r instanceof fe) {
      const s = new fe(r.seconds, 1e3 * Math.floor(r.nanoseconds / 1e3));
      return { timestampValue: Bl(i.serializer, s) };
    }
    if (r instanceof rn)
      return {
        geoPointValue: { latitude: r.latitude, longitude: r.longitude },
      };
    if (r instanceof Rt) return { bytesValue: Pw(i.serializer, r._byteString) };
    if (r instanceof Ce) {
      const s = i.databaseId,
        o = r.firestore._databaseId;
      if (!o.isEqual(s))
        throw i.createError(
          `Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`,
        );
      return {
        referenceValue: Ef(
          r.firestore._databaseId || i.databaseId,
          r._key.path,
        ),
      };
    }
    if (r instanceof zt)
      return (function (o, l) {
        const u = o instanceof zt ? o.toArray() : o;
        return {
          mapValue: {
            fields: {
              [tw]: { stringValue: nw },
              [Fl]: {
                arrayValue: {
                  values: u.map((f) => {
                    if (typeof f != "number")
                      throw l.createError(
                        "VectorValues must only contain numeric values.",
                      );
                    return yf(l.serializer, f);
                  }),
                },
              },
            },
          },
        };
      })(r, i);
    if (Mw(r)) return r._toProto(i.serializer);
    throw i.createError(`Unsupported field value: ${du(r)}`);
  })(t, e);
}
function fT(t, e) {
  const n = {};
  return (
    QE(t)
      ? e.path && e.path.length > 0 && e.fieldMask.push(e.path)
      : Er(t, (r, i) => {
          const s = Zo(i, e.childContextForField(r));
          s != null && (n[r] = s);
        }),
    { mapValue: { fields: n } }
  );
}
function pT(t) {
  return !(
    typeof t != "object" ||
    t === null ||
    t instanceof Array ||
    t instanceof Date ||
    t instanceof fe ||
    t instanceof rn ||
    t instanceof Rt ||
    t instanceof Ce ||
    t instanceof Xo ||
    t instanceof zt ||
    Mw(t)
  );
}
function Bf(t, e, n) {
  if (!pT(n) || !GE(n)) {
    const r = du(n);
    throw r === "an object"
      ? e.createError(t + " a custom object")
      : e.createError(t + " " + r);
  }
}
function Yi(t, e, n) {
  if ((e = Le(e)) instanceof Mf) return e._internalPath;
  if (typeof e == "string") return mT(t, e);
  throw Hl("Field path arguments must be of type string or ", t, !1, void 0, n);
}
const $N = new RegExp("[~\\*/\\[\\]]");
function mT(t, e, n) {
  if (e.search($N) >= 0)
    throw Hl(
      `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
      t,
      !1,
      void 0,
      n,
    );
  try {
    return new Mf(...e.split("."))._internalPath;
  } catch {
    throw Hl(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      t,
      !1,
      void 0,
      n,
    );
  }
}
function Hl(t, e, n, r, i) {
  const s = r && !r.isEmpty(),
    o = i !== void 0;
  let l = `Function ${e}() called with invalid data`;
  (n && (l += " (via `toFirestore()`)"), (l += ". "));
  let u = "";
  return (
    (s || o) &&
      ((u += " (found"),
      s && (u += ` in field ${r}`),
      o && (u += ` in document ${i}`),
      (u += ")")),
    new B(M.INVALID_ARGUMENT, l + t + u)
  );
}
function gT(t, e) {
  return t.some((n) => n.isEqual(e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class WN {
  convertValue(e, n = "none") {
    switch (dr(e)) {
      case 0:
        return null;
      case 1:
        return e.booleanValue;
      case 2:
        return Se(e.integerValue || e.doubleValue);
      case 3:
        return this.convertTimestamp(e.timestampValue);
      case 4:
        return this.convertServerTimestamp(e, n);
      case 5:
        return e.stringValue;
      case 6:
        return this.convertBytes(hr(e.bytesValue));
      case 7:
        return this.convertReference(e.referenceValue);
      case 8:
        return this.convertGeoPoint(e.geoPointValue);
      case 9:
        return this.convertArray(e.arrayValue, n);
      case 11:
        return this.convertObject(e.mapValue, n);
      case 10:
        return this.convertVectorValue(e.mapValue);
      default:
        throw G(62114, { value: e });
    }
  }
  convertObject(e, n) {
    return this.convertObjectMap(e.fields, n);
  }
  convertObjectMap(e, n = "none") {
    const r = {};
    return (
      Er(e, (i, s) => {
        r[i] = this.convertValue(s, n);
      }),
      r
    );
  }
  convertVectorValue(e) {
    var r, i, s;
    const n =
      (s =
        (i = (r = e.fields) == null ? void 0 : r[Fl].arrayValue) == null
          ? void 0
          : i.values) == null
        ? void 0
        : s.map((o) => Se(o.doubleValue));
    return new zt(n);
  }
  convertGeoPoint(e) {
    return new rn(Se(e.latitude), Se(e.longitude));
  }
  convertArray(e, n) {
    return (e.values || []).map((r) => this.convertValue(r, n));
  }
  convertServerTimestamp(e, n) {
    switch (n) {
      case "previous":
        const r = mu(e);
        return r == null ? null : this.convertValue(r, n);
      case "estimate":
        return this.convertTimestamp(Ro(e));
      default:
        return null;
    }
  }
  convertTimestamp(e) {
    const n = cr(e);
    return new fe(n.seconds, n.nanos);
  }
  convertDocumentKey(e, n) {
    const r = ue.fromString(e);
    se(Lw(r), 9688, { name: e });
    const i = new ko(r.get(1), r.get(3)),
      s = new H(r.popFirst(5));
    return (
      i.isEqual(n) ||
        In(
          `Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`,
        ),
      s
    );
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yT extends WN {
  constructor(e) {
    (super(), (this.firestore = e));
  }
  convertBytes(e) {
    return new Rt(e);
  }
  convertReference(e) {
    const n = this.convertDocumentKey(e, this.firestore._databaseId);
    return new Ce(this.firestore, null, n);
  }
}
function Vc() {
  return new Uf("serverTimestamp");
}
function HN(t) {
  return new jf("increment", t);
}
const Ry = "@firebase/firestore",
  ky = "4.12.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _T {
  constructor(e, n, r, i, s) {
    ((this._firestore = e),
      (this._userDataWriter = n),
      (this._key = r),
      (this._document = i),
      (this._converter = s));
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get ref() {
    return new Ce(this._firestore, this._converter, this._key);
  }
  exists() {
    return this._document !== null;
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const e = new qN(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          null,
        );
        return this._converter.fromFirestore(e);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  _fieldsProto() {
    var e;
    return (
      ((e = this._document) == null
        ? void 0
        : e.data.clone().value.mapValue.fields) ?? void 0
    );
  }
  get(e) {
    if (this._document) {
      const n = this._document.data.field(Yi("DocumentSnapshot.get", e));
      if (n !== null) return this._userDataWriter.convertValue(n);
    }
  }
}
class qN extends _T {
  data() {
    return super.data();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function GN(t) {
  if (t.limitType === "L" && t.explicitOrderBy.length === 0)
    throw new B(
      M.UNIMPLEMENTED,
      "limitToLast() queries require specifying at least one orderBy() clause",
    );
}
class zf {}
class $f extends zf {}
function KN(t, e, ...n) {
  let r = [];
  (e instanceof zf && r.push(e),
    (r = r.concat(n)),
    (function (s) {
      const o = s.filter((u) => u instanceof Hf).length,
        l = s.filter((u) => u instanceof Wf).length;
      if (o > 1 || (o > 0 && l > 0))
        throw new B(
          M.INVALID_ARGUMENT,
          "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.",
        );
    })(r));
  for (const i of r) t = i._apply(t);
  return t;
}
class Wf extends $f {
  constructor(e, n, r) {
    (super(),
      (this._field = e),
      (this._op = n),
      (this._value = r),
      (this.type = "where"));
  }
  static _create(e, n, r) {
    return new Wf(e, n, r);
  }
  _apply(e) {
    const n = this._parse(e);
    return (vT(e._query, n), new Tr(e.firestore, e.converter, Hh(e._query, n)));
  }
  _parse(e) {
    const n = Ff(e.firestore);
    return (function (s, o, l, u, h, f, p) {
      let m;
      if (h.isKeyField()) {
        if (f === "array-contains" || f === "array-contains-any")
          throw new B(
            M.INVALID_ARGUMENT,
            `Invalid Query. You can't perform '${f}' queries on documentId().`,
          );
        if (f === "in" || f === "not-in") {
          Ny(p, f);
          const N = [];
          for (const D of p) N.push(Py(u, s, D));
          m = { arrayValue: { values: N } };
        } else m = Py(u, s, p);
      } else
        ((f !== "in" && f !== "not-in" && f !== "array-contains-any") ||
          Ny(p, f),
          (m = zN(l, o, p, f === "in" || f === "not-in")));
      return Pe.create(h, f, m);
    })(
      e._query,
      "where",
      n,
      e.firestore._databaseId,
      this._field,
      this._op,
      this._value,
    );
  }
}
class Hf extends zf {
  constructor(e, n) {
    (super(), (this.type = e), (this._queryConstraints = n));
  }
  static _create(e, n) {
    return new Hf(e, n);
  }
  _parse(e) {
    const n = this._queryConstraints
      .map((r) => r._parse(e))
      .filter((r) => r.getFilters().length > 0);
    return n.length === 1 ? n[0] : Wt.create(n, this._getOperator());
  }
  _apply(e) {
    const n = this._parse(e);
    return n.getFilters().length === 0
      ? e
      : ((function (i, s) {
          let o = i;
          const l = s.getFlattenedFilters();
          for (const u of l) (vT(o, u), (o = Hh(o, u)));
        })(e._query, n),
        new Tr(e.firestore, e.converter, Hh(e._query, n)));
  }
  _getQueryConstraints() {
    return this._queryConstraints;
  }
  _getOperator() {
    return this.type === "and" ? "and" : "or";
  }
}
class qf extends $f {
  constructor(e, n) {
    (super(),
      (this._field = e),
      (this._direction = n),
      (this.type = "orderBy"));
  }
  static _create(e, n) {
    return new qf(e, n);
  }
  _apply(e) {
    const n = (function (i, s, o) {
      if (i.startAt !== null)
        throw new B(
          M.INVALID_ARGUMENT,
          "Invalid query. You must not call startAt() or startAfter() before calling orderBy().",
        );
      if (i.endAt !== null)
        throw new B(
          M.INVALID_ARGUMENT,
          "Invalid query. You must not call endAt() or endBefore() before calling orderBy().",
        );
      return new No(s, o);
    })(e._query, this._field, this._direction);
    return new Tr(e.firestore, e.converter, gk(e._query, n));
  }
}
function QN(t, e = "asc") {
  const n = e,
    r = Yi("orderBy", t);
  return qf._create(r, n);
}
class Gf extends $f {
  constructor(e, n, r) {
    (super(), (this.type = e), (this._limit = n), (this._limitType = r));
  }
  static _create(e, n, r) {
    return new Gf(e, n, r);
  }
  _apply(e) {
    return new Tr(
      e.firestore,
      e.converter,
      jl(e._query, this._limit, this._limitType),
    );
  }
}
function YN(t) {
  return (BR("limit", t), Gf._create("limit", t, "F"));
}
function Py(t, e, n) {
  if (typeof (n = Le(n)) == "string") {
    if (n === "")
      throw new B(
        M.INVALID_ARGUMENT,
        "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.",
      );
    if (!cw(e) && n.indexOf("/") !== -1)
      throw new B(
        M.INVALID_ARGUMENT,
        `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`,
      );
    const r = e.path.child(ue.fromString(n));
    if (!H.isDocumentKey(r))
      throw new B(
        M.INVALID_ARGUMENT,
        `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`,
      );
    return Wg(t, new H(r));
  }
  if (n instanceof Ce) return Wg(t, n._key);
  throw new B(
    M.INVALID_ARGUMENT,
    `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${du(n)}.`,
  );
}
function Ny(t, e) {
  if (!Array.isArray(t) || t.length === 0)
    throw new B(
      M.INVALID_ARGUMENT,
      `Invalid Query. A non-empty array is required for '${e.toString()}' filters.`,
    );
}
function vT(t, e) {
  const n = (function (i, s) {
    for (const o of i)
      for (const l of o.getFlattenedFilters())
        if (s.indexOf(l.op) >= 0) return l.op;
    return null;
  })(
    t.filters,
    (function (i) {
      switch (i) {
        case "!=":
          return ["!=", "not-in"];
        case "array-contains-any":
        case "in":
          return ["not-in"];
        case "not-in":
          return ["array-contains-any", "in", "not-in", "!="];
        default:
          return [];
      }
    })(e.op),
  );
  if (n !== null)
    throw n === e.op
      ? new B(
          M.INVALID_ARGUMENT,
          `Invalid query. You cannot use more than one '${e.op.toString()}' filter.`,
        )
      : new B(
          M.INVALID_ARGUMENT,
          `Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`,
        );
}
function JN(t, e, n) {
  let r;
  return (
    (r = t
      ? n && (n.merge || n.mergeFields)
        ? t.toFirestore(e, n)
        : t.toFirestore(e)
      : e),
    r
  );
}
class Ws {
  constructor(e, n) {
    ((this.hasPendingWrites = e), (this.fromCache = n));
  }
  isEqual(e) {
    return (
      this.hasPendingWrites === e.hasPendingWrites &&
      this.fromCache === e.fromCache
    );
  }
}
class jr extends _T {
  constructor(e, n, r, i, s, o) {
    (super(e, n, r, i, o),
      (this._firestore = e),
      (this._firestoreImpl = e),
      (this.metadata = s));
  }
  exists() {
    return super.exists();
  }
  data(e = {}) {
    if (this._document) {
      if (this._converter) {
        const n = new rl(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          null,
        );
        return this._converter.fromFirestore(n, e);
      }
      return this._userDataWriter.convertValue(
        this._document.data.value,
        e.serverTimestamps,
      );
    }
  }
  get(e, n = {}) {
    if (this._document) {
      const r = this._document.data.field(Yi("DocumentSnapshot.get", e));
      if (r !== null)
        return this._userDataWriter.convertValue(r, n.serverTimestamps);
    }
  }
  toJSON() {
    if (this.metadata.hasPendingWrites)
      throw new B(
        M.FAILED_PRECONDITION,
        "DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().",
      );
    const e = this._document,
      n = {};
    return (
      (n.type = jr._jsonSchemaVersion),
      (n.bundle = ""),
      (n.bundleSource = "DocumentSnapshot"),
      (n.bundleName = this._key.toString()),
      !e || !e.isValidDocument() || !e.isFoundDocument()
        ? n
        : (this._userDataWriter.convertObjectMap(
            e.data.value.mapValue.fields,
            "previous",
          ),
          (n.bundle = (this._firestore, this.ref.path, "NOT SUPPORTED")),
          n)
    );
  }
}
((jr._jsonSchemaVersion = "firestore/documentSnapshot/1.0"),
  (jr._jsonSchema = {
    type: Ne("string", jr._jsonSchemaVersion),
    bundleSource: Ne("string", "DocumentSnapshot"),
    bundleName: Ne("string"),
    bundle: Ne("string"),
  }));
class rl extends jr {
  data(e = {}) {
    return super.data(e);
  }
}
class Li {
  constructor(e, n, r, i) {
    ((this._firestore = e),
      (this._userDataWriter = n),
      (this._snapshot = i),
      (this.metadata = new Ws(i.hasPendingWrites, i.fromCache)),
      (this.query = r));
  }
  get docs() {
    const e = [];
    return (this.forEach((n) => e.push(n)), e);
  }
  get size() {
    return this._snapshot.docs.size;
  }
  get empty() {
    return this.size === 0;
  }
  forEach(e, n) {
    this._snapshot.docs.forEach((r) => {
      e.call(
        n,
        new rl(
          this._firestore,
          this._userDataWriter,
          r.key,
          r,
          new Ws(
            this._snapshot.mutatedKeys.has(r.key),
            this._snapshot.fromCache,
          ),
          this.query.converter,
        ),
      );
    });
  }
  docChanges(e = {}) {
    const n = !!e.includeMetadataChanges;
    if (n && this._snapshot.excludesMetadataChanges)
      throw new B(
        M.INVALID_ARGUMENT,
        "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().",
      );
    return (
      (this._cachedChanges &&
        this._cachedChangesIncludeMetadataChanges === n) ||
        ((this._cachedChanges = (function (i, s) {
          if (i._snapshot.oldDocs.isEmpty()) {
            let o = 0;
            return i._snapshot.docChanges.map((l) => {
              const u = new rl(
                i._firestore,
                i._userDataWriter,
                l.doc.key,
                l.doc,
                new Ws(
                  i._snapshot.mutatedKeys.has(l.doc.key),
                  i._snapshot.fromCache,
                ),
                i.query.converter,
              );
              return (
                l.doc,
                { type: "added", doc: u, oldIndex: -1, newIndex: o++ }
              );
            });
          }
          {
            let o = i._snapshot.oldDocs;
            return i._snapshot.docChanges
              .filter((l) => s || l.type !== 3)
              .map((l) => {
                const u = new rl(
                  i._firestore,
                  i._userDataWriter,
                  l.doc.key,
                  l.doc,
                  new Ws(
                    i._snapshot.mutatedKeys.has(l.doc.key),
                    i._snapshot.fromCache,
                  ),
                  i.query.converter,
                );
                let h = -1,
                  f = -1;
                return (
                  l.type !== 0 &&
                    ((h = o.indexOf(l.doc.key)), (o = o.delete(l.doc.key))),
                  l.type !== 1 &&
                    ((o = o.add(l.doc)), (f = o.indexOf(l.doc.key))),
                  { type: XN(l.type), doc: u, oldIndex: h, newIndex: f }
                );
              });
          }
        })(this, n)),
        (this._cachedChangesIncludeMetadataChanges = n)),
      this._cachedChanges
    );
  }
  toJSON() {
    if (this.metadata.hasPendingWrites)
      throw new B(
        M.FAILED_PRECONDITION,
        "QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().",
      );
    const e = {};
    ((e.type = Li._jsonSchemaVersion),
      (e.bundleSource = "QuerySnapshot"),
      (e.bundleName = cf.newId()),
      this._firestore._databaseId.database,
      this._firestore._databaseId.projectId);
    const n = [],
      r = [],
      i = [];
    return (
      this.docs.forEach((s) => {
        s._document !== null &&
          (n.push(s._document),
          r.push(
            this._userDataWriter.convertObjectMap(
              s._document.data.value.mapValue.fields,
              "previous",
            ),
          ),
          i.push(s.ref.path));
      }),
      (e.bundle =
        (this._firestore, this.query._query, e.bundleName, "NOT SUPPORTED")),
      e
    );
  }
}
function XN(t) {
  switch (t) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return G(61501, { type: t });
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ ((Li._jsonSchemaVersion = "firestore/querySnapshot/1.0"),
  (Li._jsonSchema = {
    type: Ne("string", Li._jsonSchemaVersion),
    bundleSource: Ne("string", "QuerySnapshot"),
    bundleName: Ne("string"),
    bundle: Ne("string"),
  }));
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ET(t) {
  t = Sn(t, Ce);
  const e = Sn(t.firestore, Jo),
    n = Lf(e);
  return RN(n, t._key).then((r) => tx(e, t, r));
}
function ZN(t) {
  t = Sn(t, Tr);
  const e = Sn(t.firestore, Jo),
    n = Lf(e),
    r = new yT(e);
  return (GN(t._query), kN(n, t._query).then((i) => new Li(e, r, t, i)));
}
function xy(t, e, n) {
  t = Sn(t, Ce);
  const r = Sn(t.firestore, Jo),
    i = JN(t.converter, e, n),
    s = Ff(r);
  return wT(r, [
    UN(s, "setDoc", t._key, i, t.converter !== null, n).toMutation(
      t._key,
      tn.none(),
    ),
  ]);
}
function ex(t, e, n, ...r) {
  t = Sn(t, Ce);
  const i = Sn(t.firestore, Jo),
    s = Ff(i);
  let o;
  return (
    (o =
      typeof (e = Le(e)) == "string" || e instanceof Mf
        ? BN(s, "updateDoc", t._key, e, n, r)
        : jN(s, "updateDoc", t._key, e)),
    wT(i, [o.toMutation(t._key, tn.exists(!0))])
  );
}
function wT(t, e) {
  const n = Lf(t);
  return PN(n, e);
}
function tx(t, e, n) {
  const r = n.docs.get(e._key),
    i = new yT(t);
  return new jr(
    t,
    i,
    e._key,
    r,
    new Ws(n.hasPendingWrites, n.fromCache),
    e.converter,
  );
}
(function (e, n = !0) {
  (PR(ts),
    $i(
      new Gr(
        "firestore",
        (r, { instanceIdentifier: i, options: s }) => {
          const o = r.getProvider("app").getImmediate(),
            l = new Jo(
              new DR(r.getProvider("auth-internal")),
              new LR(o, r.getProvider("app-check-internal")),
              ZR(o, i),
              o,
            );
          return ((s = { useFetchStreams: n, ...s }), l._setSettings(s), l);
        },
        "PUBLIC",
      ).setMultipleInstances(!0),
    ),
    ir(Ry, ky, e),
    ir(Ry, ky, "esm2020"));
})();
var nx = "firebase",
  rx = "12.10.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ ir(nx, rx, "app");
const ix = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
  },
  TT = tE(ix),
  ea = RR(TT),
  sx = new un(),
  Cu = ON(TT),
  Kf = async (t, e) => {
    const n = Of(Cu, "users", t.uid);
    (await ET(n)).exists()
      ? await xy(n, { lastActive: Vc() }, { merge: !0 })
      : await xy(n, {
          displayName: e || t.displayName || "Anonymous",
          email: t.email || "",
          wordsRecited: 0,
          createdAt: Vc(),
          lastActive: Vc(),
        });
  },
  ox = async (t, e, n) => {
    const r = await uC(ea, t, e);
    return (await dC(r.user, { displayName: n }), await Kf(r.user, n), r.user);
  },
  ax = async (t, e) => {
    const n = await cC(ea, t, e);
    return (await Kf(n.user), n.user);
  },
  lx = async () => {
    const t = await MC(ea, sx);
    return (await Kf(t.user), t.user);
  },
  ux = async () => {
    await gC(ea);
  },
  cx = (t) => mC(ea, t),
  IT = oe.createContext(null),
  Ru = () => {
    const t = oe.useContext(IT);
    if (!t) throw new Error("useAuth must be used within AuthProvider");
    return t;
  },
  hx = ({ children: t }) => {
    const [e, n] = oe.useState(null),
      [r, i] = oe.useState(!0);
    oe.useEffect(
      () =>
        cx((f) => {
          (n(f), i(!1));
        }),
      [],
    );
    const s = async (h, f) => {
        await ax(h, f);
      },
      o = async (h, f, p) => {
        await ox(h, f, p);
      },
      l = async () => {
        await lx();
      },
      u = async () => {
        await ux();
      };
    return C.jsx(IT.Provider, {
      value: {
        user: e,
        loading: r,
        login: s,
        register: o,
        loginWithGoogle: l,
        logout: u,
      },
      children: t,
    });
  },
  dx = async (t = 20) => {
    const e = KN(VN(Cu, "users"), QN("wordsRecited", "desc"), YN(t));
    return (await ZN(e)).docs.map((r, i) => {
      const s = r.data();
      return {
        rank: i + 1,
        uid: r.id,
        displayName: s.displayName || "Anonymous",
        wordsRecited: s.wordsRecited || 0,
      };
    });
  },
  fx = async (t, e = 1) => {
    const n = Of(Cu, "users", t);
    await ex(n, { wordsRecited: HN(e) });
  },
  px = async (t) => {
    var i, s;
    const e = Of(Cu, "users", t),
      n = await ET(e);
    if (!n.exists()) return null;
    const r = n.data();
    return {
      uid: t,
      displayName: r.displayName || "Anonymous",
      email: r.email || "",
      wordsRecited: r.wordsRecited || 0,
      createdAt:
        ((i = r.createdAt) == null ? void 0 : i.toDate()) || new Date(),
      lastActive:
        ((s = r.lastActive) == null ? void 0 : s.toDate()) || new Date(),
    };
  },
  mx = ({ onNavigate: t }) => {
    const { user: e, logout: n } = Ru(),
      [r, i] = oe.useState(0);
    if (
      (oe.useEffect(() => {
        e &&
          px(e.uid)
            .then((o) => {
              o && i(o.wordsRecited);
            })
            .catch(() => {});
      }, [e]),
      !e)
    )
      return C.jsx("div", {
        className: "user-profile-badge",
        children: C.jsx("button", {
          className: "sign-in-btn",
          onClick: () => t("auth"),
          children: "登录",
        }),
      });
    const s = (e.displayName || "U").charAt(0).toUpperCase();
    return C.jsxs("div", {
      className: "user-profile-badge",
      children: [
        C.jsx("div", { className: "user-avatar", children: s }),
        C.jsx("span", {
          className: "user-display-name",
          children: e.displayName || "用户",
        }),
        C.jsxs("span", { className: "user-words-count", children: ["📝 ", r] }),
        C.jsx("button", {
          className: "logout-btn",
          onClick: n,
          children: "退出",
        }),
      ],
    });
  },
  gx = ({
    books: t,
    currentBookIndex: e,
    activeSection: n,
    onSelectBook: r,
    onCreateBook: i,
    onRenameBook: s,
    onDeleteBook: o,
    onNavigate: l,
  }) => {
    const u = () => {
        const p = prompt("请输入词书名称：");
        p && i(p);
      },
      h = () => {
        const p = prompt("请输入新的词书名称：");
        p && s(e, p);
      },
      f = () => {
        confirm("确定要删除这本词书吗？") && o(e);
      };
    return C.jsxs("header", {
      children: [
        C.jsxs("div", {
          className: "header-main",
          children: [
            C.jsx("div", {
              className: "header-logo",
              children: C.jsx("h1", { children: "📚 单词大师" }),
            }),
            C.jsx("nav", {
              children: C.jsxs("ul", {
                children: [
                  C.jsx("li", {
                    children: C.jsx("a", {
                      href: "#flashcards",
                      className: n === "flashcards" ? "active" : "",
                      onClick: (p) => {
                        (p.preventDefault(), l("flashcards"));
                      },
                      children: "闪卡",
                    }),
                  }),
                  C.jsx("li", {
                    children: C.jsx("a", {
                      href: "#practice",
                      className: n === "practice" ? "active" : "",
                      onClick: (p) => {
                        (p.preventDefault(), l("practice"));
                      },
                      children: "练习",
                    }),
                  }),
                  C.jsx("li", {
                    children: C.jsx("a", {
                      href: "#word-list",
                      className: n === "word-list" ? "active" : "",
                      onClick: (p) => {
                        (p.preventDefault(), l("word-list"));
                      },
                      children: "单词本",
                    }),
                  }),
                  C.jsx("li", {
                    children: C.jsx("a", {
                      href: "#settings",
                      className: n === "settings" ? "active" : "",
                      onClick: (p) => {
                        (p.preventDefault(), l("settings"));
                      },
                      children: "设置",
                    }),
                  }),
                  C.jsx("li", {
                    children: C.jsx("a", {
                      href: "#leaderboard",
                      className: n === "leaderboard" ? "active" : "",
                      onClick: (p) => {
                        (p.preventDefault(), l("leaderboard"));
                      },
                      children: "排行榜",
                    }),
                  }),
                ],
              }),
            }),
            C.jsx(mx, { onNavigate: l }),
          ],
        }),
        C.jsx("div", {
          className: "book-bar",
          children: C.jsxs("div", {
            className: "book-management",
            children: [
              C.jsx("select", {
                id: "book-selector",
                value: e,
                onChange: (p) => r(parseInt(p.target.value)),
                children: t.map((p, m) =>
                  C.jsx("option", { value: m, children: p.name }, p.id),
                ),
              }),
              C.jsx("button", {
                id: "create-book-btn",
                onClick: u,
                children: "+ 创建词书",
              }),
              C.jsx("button", {
                id: "rename-book-btn",
                onClick: h,
                children: "✏️ 重命名",
              }),
              C.jsx("button", {
                id: "delete-book-btn",
                onClick: f,
                children: "🗑️ 删除",
              }),
            ],
          }),
        }),
      ],
    });
  },
  yx = ({
    currentBook: t,
    currentWordIndex: e,
    onNextWord: n,
    onPrevWord: r,
    onUpdateDifficulty: i,
    settings: s,
  }) => {
    const [o, l] = oe.useState(!1),
      u = t.words[e],
      h = () => {
        l(!o);
      },
      f = (p) => {
        if (s.soundEnabled) {
          const m = new SpeechSynthesisUtterance(p);
          speechSynthesis.speak(m);
        }
      };
    return u
      ? C.jsxs("div", {
          className: "flashcard-container",
          children: [
            C.jsxs("div", {
              className: "flashcard-counter",
              children: [e + 1, " / ", t.words.length],
            }),
            C.jsx("div", {
              className: `flashcard ${o ? "flipped" : ""}`,
              onClick: h,
              children: C.jsxs("div", {
                className: "flashcard-inner",
                children: [
                  C.jsxs("div", {
                    className: "front",
                    children: [
                      C.jsx("h2", { children: "单词" }),
                      C.jsx("p", { id: "word", children: u.word }),
                      C.jsx("button", {
                        className: "play-btn",
                        onClick: (p) => {
                          (p.stopPropagation(), f(u.word));
                        },
                        children: "🔊 播放发音",
                      }),
                    ],
                  }),
                  C.jsxs("div", {
                    className: "back",
                    children: [
                      C.jsx("h2", { children: "释义" }),
                      C.jsx("p", { id: "definition", children: u.definition }),
                      C.jsx("p", {
                        className: "translation",
                        children: u.translation,
                      }),
                      C.jsx("button", {
                        className: "play-btn",
                        onClick: (p) => {
                          (p.stopPropagation(), f(u.translation));
                        },
                        children: "🔊 播放翻译",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            C.jsxs("div", {
              className: "flashcard-buttons",
              children: [
                C.jsx("button", {
                  id: "prev-btn",
                  onClick: r,
                  children: "← 上一个",
                }),
                C.jsx("button", {
                  id: "flip-btn",
                  onClick: h,
                  children: "🔄 翻转",
                }),
                C.jsx("button", {
                  id: "next-btn",
                  onClick: n,
                  children: "下一个 →",
                }),
              ],
            }),
            C.jsxs("div", {
              className: "difficulty-buttons",
              children: [
                C.jsx("button", {
                  id: "easy-btn",
                  className: "difficulty easy",
                  onClick: () => i("easy"),
                  children: "简单",
                }),
                C.jsx("button", {
                  id: "medium-btn",
                  className: "difficulty medium",
                  onClick: () => i("medium"),
                  children: "中等",
                }),
                C.jsx("button", {
                  id: "hard-btn",
                  className: "difficulty hard",
                  onClick: () => i("hard"),
                  children: "困难",
                }),
              ],
            }),
          ],
        })
      : C.jsx("div", {
          className: "flashcard-container",
          children: C.jsxs("div", {
            className: "empty-list",
            children: [
              C.jsx("span", { className: "empty-list-icon", children: "📝" }),
              C.jsx("p", { children: "还没有单词，请先添加一些单词吧！" }),
            ],
          }),
        });
  },
  _x = ({
    currentBook: t,
    currentWordIndex: e,
    onNextWord: n,
    settings: r,
  }) => {
    const { user: i } = Ru(),
      [s, o] = oe.useState(1),
      [l, u] = oe.useState(""),
      [h, f] = oe.useState(""),
      [p, m] = oe.useState(""),
      I = t.words[e];
    (oe.useEffect(() => {
      (o(1), u(""), f(""), m(""));
    }, [e]),
      oe.useEffect(() => {
        (I &&
          r.soundEnabled &&
          setTimeout(() => {
            s === 1 ? N(I.word) : s === 2 && N(I.translation);
          }, 300),
          s === 3 && D(I.word));
      }, [s, I, r.soundEnabled]));
    const N = (O) => {
        if (r.soundEnabled) {
          const L = new SpeechSynthesisUtterance(O);
          speechSynthesis.speak(L);
        }
      },
      D = (O) => {
        r.soundEnabled &&
          O.split("").forEach((V, _) => {
            setTimeout(() => {
              const g = new SpeechSynthesisUtterance(V);
              speechSynthesis.speak(g);
            }, _ * 300);
          });
      },
      F = () => {
        s < 3 && o(s + 1);
      },
      S = () => {
        if (!I) return;
        const O = l.trim().toLowerCase(),
          L = I.word.toLowerCase();
        O === L
          ? (f("回答正确！"),
            m("correct"),
            i && fx(i.uid).catch(() => {}),
            setTimeout(() => {
              E();
            }, 1e3))
          : (f("回答错误，请再试一次！"), m("incorrect"));
      },
      E = () => {
        (o(1), u(""), f(""), m(""), n());
      };
    if (!I)
      return C.jsxs("div", {
        className: "practice-container",
        children: [
          C.jsx("h2", { children: "互动练习" }),
          C.jsx("div", {
            className: "practice-steps",
            children: C.jsxs("div", {
              className: "practice-step",
              children: [
                C.jsx("span", { className: "empty-list-icon", children: "🎯" }),
                C.jsx("h3", { children: "暂无单词" }),
                C.jsx("p", { children: "请先在词书中添加单词再开始练习" }),
              ],
            }),
          }),
        ],
      });
    const R = `${(s / 3) * 100}%`;
    return C.jsxs("div", {
      className: "practice-container",
      children: [
        C.jsx("h2", { children: "互动练习" }),
        C.jsxs("div", {
          className: "practice-progress",
          children: [
            C.jsx("div", {
              className: "practice-progress-bar",
              children: C.jsx("div", {
                className: "practice-progress-fill",
                style: { width: R },
              }),
            }),
            C.jsxs("span", {
              className: "practice-progress-label",
              children: ["第 ", s, " 步，共 3 步"],
            }),
          ],
        }),
        C.jsxs("div", {
          className: "practice-steps",
          children: [
            C.jsxs("div", {
              className: "practice-step",
              style: { display: s === 1 ? "flex" : "none" },
              children: [
                C.jsx("h3", { children: "第一步：听读" }),
                C.jsx("p", { id: "practice-word", children: I.word }),
                C.jsx("button", {
                  id: "play-word-btn",
                  onClick: () => N(I.word),
                  children: "🔊 播放单词",
                }),
                C.jsx("button", {
                  id: "next-to-step-2",
                  onClick: F,
                  children: "下一步 →",
                }),
              ],
            }),
            C.jsxs("div", {
              className: "practice-step",
              style: { display: s === 2 ? "flex" : "none" },
              children: [
                C.jsx("h3", { children: "第二步：翻译" }),
                C.jsx("p", {
                  id: "practice-translation",
                  children: I.translation,
                }),
                C.jsx("button", {
                  id: "play-translation-btn",
                  onClick: () => N(I.translation),
                  children: "🔊 播放翻译",
                }),
                C.jsx("button", {
                  id: "next-to-step-3",
                  onClick: F,
                  children: "下一步 →",
                }),
              ],
            }),
            C.jsxs("div", {
              className: "practice-step",
              style: { display: s === 3 ? "flex" : "none" },
              children: [
                C.jsx("h3", { children: "第三步：拼写" }),
                C.jsxs("p", {
                  id: "typing-hint",
                  children: ["请拼写单词：", I.word.charAt(0), "..."],
                }),
                C.jsx("input", {
                  type: "text",
                  id: "word-input",
                  placeholder: "在此输入单词",
                  value: l,
                  onChange: (O) => u(O.target.value),
                  onKeyDown: (O) => {
                    O.key === "Enter" && (O.preventDefault(), S());
                  },
                }),
                C.jsx("button", {
                  id: "check-word-btn",
                  onClick: S,
                  children: "✅ 检查答案",
                }),
                C.jsx("button", {
                  id: "play-letters-btn",
                  onClick: () => D(I.word),
                  children: "🔤 播放字母",
                }),
                h &&
                  C.jsx("p", {
                    id: "feedback",
                    className:
                      p === "correct"
                        ? "feedback-correct"
                        : p === "incorrect"
                          ? "feedback-incorrect"
                          : "",
                    children: h,
                  }),
                C.jsx("button", {
                  id: "next-word-btn",
                  onClick: E,
                  children: "下一个单词 →",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  vx = ({ currentBook: t, onAddWord: e, onDeleteWord: n, onEditWord: r }) => {
    const [i, s] = oe.useState(!1),
      [o, l] = oe.useState({
        word: "",
        definition: "",
        translation: "",
        difficulty: "medium",
      }),
      u = (m) => {
        if (
          (m.preventDefault(),
          o.word && o.definition && o.translation && o.difficulty)
        ) {
          const I = {
            id: Date.now(),
            word: o.word,
            definition: o.definition,
            translation: o.translation,
            difficulty: o.difficulty,
          };
          (e(I),
            l({
              word: "",
              definition: "",
              translation: "",
              difficulty: "medium",
            }),
            s(!1));
        }
      },
      h = (m) => {
        const I = prompt("请输入新单词：", m.word),
          N = prompt("请输入新释义：", m.definition),
          D = prompt("请输入新翻译：", m.translation),
          F = prompt("请输入新难度（easy/medium/hard）：", m.difficulty);
        I &&
          N &&
          D &&
          F &&
          r(m.id, {
            word: I.trim(),
            definition: N.trim(),
            translation: D.trim(),
            difficulty: F.toLowerCase(),
          });
      },
      f = (m) => {
        confirm("确定要删除这个单词吗？") && n(m);
      },
      p = () => {
        const m = document.createElement("input");
        ((m.type = "file"),
          (m.accept = ".txt"),
          (m.onchange = (I) => {
            var D;
            const N = (D = I.target.files) == null ? void 0 : D[0];
            if (N) {
              const F = new FileReader();
              ((F.onload = (S) => {
                var L;
                const R = ((L = S.target) == null ? void 0 : L.result).split(`
`);
                let O = 0;
                (R.forEach((V) => {
                  const _ = V.split("	");
                  if (_.length >= 3) {
                    const g = {
                      id: Date.now() + O,
                      word: _[0].trim(),
                      definition: _[1].trim(),
                      translation: _[2].trim(),
                      difficulty:
                        _.length > 3 ? _[3].trim().toLowerCase() : "medium",
                    };
                    (e(g), O++);
                  }
                }),
                  O > 0
                    ? alert(`成功导入 ${O} 个单词！`)
                    : alert(
                        "未找到有效单词。请使用制表符分隔格式：单词	释义	翻译	难度",
                      ));
              }),
                F.readAsText(N));
            }
          }),
          m.click());
      };
    return C.jsxs("div", {
      className: "word-list-container",
      children: [
        C.jsxs("div", {
          className: "word-list-header",
          children: [
            C.jsx("h2", { children: "单词列表" }),
            C.jsxs("div", {
              className: "word-list-actions",
              children: [
                C.jsx("button", {
                  id: "add-word-btn",
                  onClick: () => s(!0),
                  children: "+ 添加单词",
                }),
                C.jsx("button", {
                  id: "import-words-btn",
                  onClick: p,
                  children: "📥 导入单词",
                }),
              ],
            }),
          ],
        }),
        C.jsxs("div", {
          className: "word-list-content",
          children: [
            C.jsx("ul", {
              id: "words-container",
              children: t.words.map((m) =>
                C.jsxs(
                  "li",
                  {
                    children: [
                      C.jsxs("div", {
                        className: "word-info",
                        children: [
                          C.jsx("h3", { children: m.word }),
                          C.jsx("p", { children: m.definition }),
                          C.jsx("p", {
                            className: "translation",
                            children: m.translation,
                          }),
                          C.jsx("div", {
                            className: "difficulty-tag",
                            children: C.jsx("span", {
                              className: `difficulty-pill ${m.difficulty}`,
                              children: m.difficulty,
                            }),
                          }),
                        ],
                      }),
                      C.jsxs("div", {
                        className: "word-actions",
                        children: [
                          C.jsx("button", {
                            className: "edit-word-btn",
                            onClick: () => h(m),
                            children: "编辑",
                          }),
                          C.jsx("button", {
                            className: "delete-word-btn",
                            onClick: () => f(m.id),
                            children: "删除",
                          }),
                        ],
                      }),
                    ],
                  },
                  m.id,
                ),
              ),
            }),
            t.words.length === 0 &&
              C.jsxs("div", {
                className: "empty-list",
                children: [
                  C.jsx("span", {
                    className: "empty-list-icon",
                    children: "📖",
                  }),
                  C.jsx("p", { children: "这本词书还没有单词。" }),
                  C.jsx("p", { children: '点击"+ 添加单词"开始吧！' }),
                ],
              }),
          ],
        }),
        i &&
          C.jsx("div", {
            className: "modal show",
            children: C.jsxs("div", {
              className: "modal-content",
              children: [
                C.jsx("h3", { children: "添加新单词" }),
                C.jsxs("form", {
                  id: "add-word-form",
                  onSubmit: u,
                  children: [
                    C.jsxs("div", {
                      className: "form-group",
                      children: [
                        C.jsx("label", {
                          htmlFor: "new-word",
                          children: "单词：",
                        }),
                        C.jsx("input", {
                          type: "text",
                          id: "new-word",
                          value: o.word,
                          onChange: (m) => l({ ...o, word: m.target.value }),
                          required: !0,
                        }),
                      ],
                    }),
                    C.jsxs("div", {
                      className: "form-group",
                      children: [
                        C.jsx("label", {
                          htmlFor: "new-definition",
                          children: "释义：",
                        }),
                        C.jsx("textarea", {
                          id: "new-definition",
                          value: o.definition,
                          onChange: (m) =>
                            l({ ...o, definition: m.target.value }),
                          required: !0,
                        }),
                      ],
                    }),
                    C.jsxs("div", {
                      className: "form-group",
                      children: [
                        C.jsx("label", {
                          htmlFor: "new-translation",
                          children: "翻译：",
                        }),
                        C.jsx("input", {
                          type: "text",
                          id: "new-translation",
                          value: o.translation,
                          onChange: (m) =>
                            l({ ...o, translation: m.target.value }),
                          required: !0,
                        }),
                      ],
                    }),
                    C.jsxs("div", {
                      className: "form-group",
                      children: [
                        C.jsx("label", {
                          htmlFor: "new-difficulty",
                          children: "难度：",
                        }),
                        C.jsxs("select", {
                          id: "new-difficulty",
                          value: o.difficulty,
                          onChange: (m) =>
                            l({ ...o, difficulty: m.target.value }),
                          required: !0,
                          children: [
                            C.jsx("option", {
                              value: "easy",
                              children: "简单",
                            }),
                            C.jsx("option", {
                              value: "medium",
                              children: "中等",
                            }),
                            C.jsx("option", {
                              value: "hard",
                              children: "困难",
                            }),
                          ],
                        }),
                      ],
                    }),
                    C.jsxs("div", {
                      className: "form-buttons",
                      children: [
                        C.jsx("button", {
                          type: "button",
                          id: "cancel-add-word",
                          onClick: () => s(!1),
                          children: "取消",
                        }),
                        C.jsx("button", {
                          type: "submit",
                          children: "添加单词",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
  },
  Ex = ({ settings: t, onUpdateSettings: e }) => {
    const n = (s) => {
        e({ studyMode: s.target.value });
      },
      r = (s) => {
        e({ difficultyFilter: s.target.value });
      },
      i = (s) => {
        e({ soundEnabled: s.target.checked });
      };
    return C.jsxs("div", {
      className: "settings-container",
      children: [
        C.jsx("h2", { children: "⚙️ 设置" }),
        C.jsxs("div", {
          className: "settings-item",
          children: [
            C.jsx("label", { htmlFor: "study-mode", children: "学习模式" }),
            C.jsxs("select", {
              id: "study-mode",
              value: t.studyMode,
              onChange: n,
              children: [
                C.jsx("option", { value: "flashcards", children: "闪卡" }),
                C.jsx("option", { value: "quiz", children: "测验" }),
              ],
            }),
          ],
        }),
        C.jsxs("div", {
          className: "settings-item",
          children: [
            C.jsx("label", {
              htmlFor: "difficulty-filter",
              children: "难度筛选",
            }),
            C.jsxs("select", {
              id: "difficulty-filter",
              value: t.difficultyFilter,
              onChange: r,
              children: [
                C.jsx("option", { value: "all", children: "全部" }),
                C.jsx("option", { value: "easy", children: "简单" }),
                C.jsx("option", { value: "medium", children: "中等" }),
                C.jsx("option", { value: "hard", children: "困难" }),
              ],
            }),
          ],
        }),
        C.jsxs("div", {
          className: "settings-item",
          children: [
            C.jsx("label", { htmlFor: "sound-enabled", children: "声音" }),
            C.jsxs("label", {
              className: "toggle-switch",
              children: [
                C.jsx("input", {
                  type: "checkbox",
                  id: "sound-enabled",
                  checked: t.soundEnabled,
                  onChange: i,
                }),
                C.jsx("span", { className: "toggle-slider" }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  wx = ({ onClose: t }) => {
    Ru();
    const e = (n) => {
      alert("即将开放，敬请期待！");
    };
    return C.jsx("div", {
      className: "auth-container",
      children: C.jsxs("div", {
        className: "auth-card",
        children: [
          C.jsx("div", { className: "auth-icon", children: "👋" }),
          C.jsx("h2", { children: "登录 / 注册" }),
          C.jsxs("div", {
            className: "social-login-buttons",
            children: [
              C.jsxs("button", {
                className: "social-login-btn wechat-btn",
                onClick: () => e(),
                children: [
                  C.jsx("span", { className: "social-icon", children: "💬" }),
                  "微信登录",
                ],
              }),
              C.jsxs("button", {
                className: "social-login-btn qq-btn",
                onClick: () => e(),
                children: [
                  C.jsx("span", { className: "social-icon", children: "🐧" }),
                  "QQ登录",
                ],
              }),
              C.jsxs("button", {
                className: "social-login-btn alipay-btn",
                onClick: () => e(),
                children: [
                  C.jsx("span", { className: "social-icon", children: "💰" }),
                  "支付宝登录",
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Tx = () => {
    const { user: t } = Ru(),
      [e, n] = oe.useState([]),
      [r, i] = oe.useState(!0),
      [s, o] = oe.useState("");
    if (
      (oe.useEffect(() => {
        (async () => {
          try {
            const p = await dx();
            n(p);
          } catch (p) {
            const m =
              p instanceof Error ? p.message : "Failed to load leaderboard";
            o(m);
          } finally {
            i(!1);
          }
        })();
      }, []),
      r)
    )
      return C.jsx("div", {
        className: "leaderboard-container",
        children: C.jsx("p", { children: "加载排行榜中..." }),
      });
    if (s)
      return C.jsx("div", {
        className: "leaderboard-container",
        children: C.jsx("p", { className: "auth-error", children: s }),
      });
    const l = e.slice(0, 3),
      u = e.slice(3),
      h = l.length >= 3 ? [l[1], l[0], l[2]] : [];
    return C.jsxs("div", {
      className: "leaderboard-container",
      children: [
        C.jsx("h2", { children: "🏆 排行榜" }),
        e.length === 0
          ? C.jsxs("div", {
              className: "empty-list",
              children: [
                C.jsx("span", { className: "empty-list-icon", children: "🏅" }),
                C.jsx("p", { children: "还没有记录。开始练习来上榜吧！" }),
              ],
            })
          : C.jsxs(C.Fragment, {
              children: [
                h.length === 3 &&
                  C.jsx("div", {
                    className: "podium",
                    children: h.map((f, p) => {
                      const m = ["🥈", "🥇", "🥉"],
                        I = (f.displayName || "?").charAt(0).toUpperCase();
                      return C.jsxs(
                        "div",
                        {
                          className: "podium-item",
                          children: [
                            C.jsx("div", {
                              className: "podium-avatar",
                              children: I,
                            }),
                            C.jsx("div", {
                              className: "podium-name",
                              children: f.displayName,
                            }),
                            C.jsxs("div", {
                              className: "podium-score",
                              children: [f.wordsRecited, " 个单词"],
                            }),
                            C.jsx("div", {
                              className: "podium-block",
                              children: C.jsx("span", {
                                className: "podium-rank",
                                children: m[p],
                              }),
                            }),
                          ],
                        },
                        f.uid,
                      );
                    }),
                  }),
                C.jsxs("table", {
                  className: "leaderboard-table",
                  children: [
                    C.jsx("thead", {
                      children: C.jsxs("tr", {
                        children: [
                          C.jsx("th", { children: "排名" }),
                          C.jsx("th", { children: "用户" }),
                          C.jsx("th", { children: "背诵单词数" }),
                        ],
                      }),
                    }),
                    C.jsx("tbody", {
                      children: (h.length < 3 ? e : u).map((f) =>
                        C.jsxs(
                          "tr",
                          {
                            className:
                              (t == null ? void 0 : t.uid) === f.uid
                                ? "current-user-row"
                                : "",
                            children: [
                              C.jsx("td", {
                                className: "rank-cell",
                                children:
                                  f.rank <= 3
                                    ? ["🥇", "🥈", "🥉"][f.rank - 1]
                                    : f.rank,
                              }),
                              C.jsx("td", { children: f.displayName }),
                              C.jsx("td", { children: f.wordsRecited }),
                            ],
                          },
                          f.uid,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
      ],
    });
  },
  ST = {
    async getItem(t) {
      return new Promise((e) => {
        try {
          const n = localStorage.getItem(t);
          e(n);
        } catch (n) {
          (console.error("Error getting item from storage:", n), e(null));
        }
      });
    },
    async setItem(t, e) {
      return new Promise((n) => {
        try {
          (localStorage.setItem(t, e), n());
        } catch (r) {
          (console.error("Error setting item to storage:", r), n());
        }
      });
    },
    async removeItem(t) {
      return new Promise((e) => {
        try {
          (localStorage.removeItem(t), e());
        } catch (n) {
          (console.error("Error removing item from storage:", n), e());
        }
      });
    },
    async clear() {
      return new Promise((t) => {
        try {
          (localStorage.clear(), t());
        } catch (e) {
          (console.error("Error clearing storage:", e), t());
        }
      });
    },
  },
  Oc = async (t) => {
    try {
      console.log("Getting JSON item from storage:", t);
      const e = await ST.getItem(t);
      if ((console.log("Got JSON string:", e), e)) {
        const n = JSON.parse(e);
        return (console.log("Parsed JSON value:", n), n);
      }
      return null;
    } catch (e) {
      return (console.error("Error parsing JSON item:", e), null);
    }
  },
  Lc = async (t, e) => {
    try {
      console.log("Setting JSON item to storage:", t, e);
      const n = JSON.stringify(e);
      (console.log("Stringified JSON:", n),
        await ST.setItem(t, n),
        console.log("JSON item set successfully"));
    } catch (n) {
      console.error("Error stringifying JSON item:", n);
    }
  },
  ai = {
    state: "wordMasterState",
    books: "wordMasterBooks",
    settings: "wordMasterSettings",
  },
  Dy = { studyMode: "flashcards", difficultyFilter: "all", soundEnabled: !0 },
  Ix = [
    {
      id: 1,
      name: "默认词书",
      words: [
        {
          id: 1,
          word: "apple",
          definition: "a round fruit with red or green skin",
          translation: "苹果",
          difficulty: "easy",
        },
        {
          id: 2,
          word: "banana",
          definition: "a long curved fruit with yellow skin",
          translation: "香蕉",
          difficulty: "easy",
        },
        {
          id: 3,
          word: "computer",
          definition: "an electronic device for storing and processing data",
          translation: "电脑",
          difficulty: "medium",
        },
        {
          id: 4,
          word: "programming",
          definition: "the process of writing computer programs",
          translation: "编程",
          difficulty: "hard",
        },
        {
          id: 5,
          word: "algorithm",
          definition: "a set of rules to be followed in calculations",
          translation: "算法",
          difficulty: "hard",
        },
      ],
    },
  ],
  Mc = (t, e = 0, n = 0) => {
    var o, l;
    const r = t.length > 0 ? Math.min(Math.max(e, 0), t.length - 1) : 0,
      i =
        ((l = (o = t[r]) == null ? void 0 : o.words) == null
          ? void 0
          : l.length) ?? 0,
      s = i > 0 ? Math.min(Math.max(n, 0), i - 1) : 0;
    return { books: t, currentBookIndex: r, currentWordIndex: s };
  };
function Sx() {
  const [t, e] = oe.useState({
      books: [],
      currentBookIndex: 0,
      currentWordIndex: 0,
    }),
    [n, r] = oe.useState("flashcards"),
    [i, s] = oe.useState(Dy),
    [o, l] = oe.useState(!1);
  (oe.useEffect(() => {
    (async () => {
      var v;
      const V = await Oc(ai.state);
      if ((v = V == null ? void 0 : V.books) != null && v.length) {
        const T = Mc(V.books, V.currentBookIndex, V.currentWordIndex);
        (e(T), s(V.settings ?? Dy), l(!0));
        return;
      }
      const [_, g] = await Promise.all([Oc(ai.books), Oc(ai.settings)]);
      (_ != null && _.length ? e(Mc(_, 0, 0)) : e(Mc(Ix, 0, 0)),
        g && s(g),
        l(!0));
    })();
  }, []),
    oe.useEffect(() => {
      if (!o) return;
      (async () => {
        const V = {
          books: t.books,
          currentBookIndex: t.currentBookIndex,
          currentWordIndex: t.currentWordIndex,
          settings: i,
        };
        await Promise.all([
          Lc(ai.state, V),
          Lc(ai.books, t.books),
          Lc(ai.settings, i),
        ]);
      })();
    }, [t, i, o]));
  const u = () =>
      t.books[t.currentBookIndex] || { id: 0, name: "无词书", words: [] },
    h = (L) => {
      const V = { id: Date.now(), name: L.trim(), words: [] };
      e((_) => {
        const g = [..._.books, V];
        return {
          books: g,
          currentBookIndex: g.length - 1,
          currentWordIndex: 0,
        };
      });
    },
    f = (L) => {
      e((V) => ({ ...V, currentBookIndex: L, currentWordIndex: 0 }));
    },
    p = (L, V) => {
      e((_) => {
        const g = _.books.map((v, T) =>
          T === L ? { ...v, name: V.trim() } : v,
        );
        return { ..._, books: g };
      });
    },
    m = (L) => {
      e((V) => {
        if (V.books.length > 1) {
          const _ = V.books.filter((v, T) => T !== L);
          let g = V.currentBookIndex;
          return (
            g >= _.length ? (g = _.length - 1) : g > L && (g -= 1),
            { books: _, currentBookIndex: g, currentWordIndex: 0 }
          );
        } else return (alert("You must have at least one word book."), V);
      });
    },
    I = (L) => {
      e((V) => {
        const _ = V.books.map((g, v) =>
          v !== V.currentBookIndex ? g : { ...g, words: [...g.words, L] },
        );
        return { ...V, books: _ };
      });
    },
    N = (L) => {
      e((V) => {
        var T;
        const _ = V.books.map((A, k) =>
            k !== V.currentBookIndex
              ? A
              : { ...A, words: A.words.filter((w) => w.id !== L) },
          ),
          g = ((T = _[V.currentBookIndex]) == null ? void 0 : T.words) ?? [],
          v = g.length > 0 ? Math.min(V.currentWordIndex, g.length - 1) : 0;
        return { ...V, books: _, currentWordIndex: v };
      });
    },
    D = (L, V) => {
      e((_) => {
        const g = _.books.map((v, T) =>
          T !== _.currentBookIndex
            ? v
            : {
                ...v,
                words: v.words.map((A) => (A.id === L ? { ...A, ...V } : A)),
              },
        );
        return { ..._, books: g };
      });
    },
    F = (L) => {
      r(L);
    },
    S = () => {
      e((L) => {
        const V = L.books[L.currentBookIndex];
        if (!V) return L;
        const _ = V.words || [];
        return _.length > 0
          ? { ...L, currentWordIndex: (L.currentWordIndex + 1) % _.length }
          : L;
      });
    },
    E = () => {
      e((L) => {
        const V = L.books[L.currentBookIndex];
        if (!V) return L;
        const _ = V.words || [];
        return _.length > 0
          ? {
              ...L,
              currentWordIndex: (L.currentWordIndex - 1 + _.length) % _.length,
            }
          : L;
      });
    },
    R = (L) => {
      e((V) => {
        const _ = V.books[V.currentBookIndex];
        if (_ && V.currentWordIndex < _.words.length) {
          const g = [...V.books],
            v = g[V.currentBookIndex].words[V.currentWordIndex];
          return (
            (g[V.currentBookIndex].words[V.currentWordIndex] = {
              ...v,
              difficulty: L,
            }),
            { ...V, books: g }
          );
        }
        return V;
      });
    },
    O = (L) => {
      s({ ...i, ...L });
    };
  return C.jsxs("div", {
    className: "app",
    children: [
      C.jsx(gx, {
        books: t.books,
        currentBookIndex: t.currentBookIndex,
        onSelectBook: f,
        onCreateBook: h,
        onRenameBook: p,
        onDeleteBook: m,
        onNavigate: F,
        activeSection: n,
      }),
      C.jsxs("main", {
        children: [
          n === "flashcards" &&
            C.jsx(yx, {
              currentBook: u(),
              currentWordIndex: t.currentWordIndex,
              onNextWord: S,
              onPrevWord: E,
              onUpdateDifficulty: R,
              settings: i,
            }),
          n === "practice" &&
            C.jsx(_x, {
              currentBook: u(),
              currentWordIndex: t.currentWordIndex,
              onNextWord: S,
              settings: i,
            }),
          n === "word-list" &&
            C.jsx(vx, {
              currentBook: u(),
              onAddWord: I,
              onDeleteWord: N,
              onEditWord: D,
            }),
          n === "settings" && C.jsx(Ex, { settings: i, onUpdateSettings: O }),
          n === "leaderboard" && C.jsx(Tx, {}),
          n === "auth" && C.jsx(wx, { onClose: () => r("flashcards") }),
        ],
      }),
    ],
  });
}
function Ax() {
  return C.jsx(hx, { children: C.jsx(Sx, {}) });
}
bc.createRoot(document.getElementById("root")).render(
  C.jsx(gI.StrictMode, { children: C.jsx(Ax, {}) }),
);
