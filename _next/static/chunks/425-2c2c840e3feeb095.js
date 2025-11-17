"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [425],
  {
    10857: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = {
        DecodeError: function () {
          return g;
        },
        MiddlewareNotFoundError: function () {
          return O;
        },
        MissingStaticPage: function () {
          return v;
        },
        NormalizeError: function () {
          return m;
        },
        PageNotFoundError: function () {
          return b;
        },
        SP: function () {
          return h;
        },
        ST: function () {
          return y;
        },
        WEB_VITALS: function () {
          return o;
        },
        execOnce: function () {
          return a;
        },
        getDisplayName: function () {
          return s;
        },
        getLocationOrigin: function () {
          return l;
        },
        getURL: function () {
          return c;
        },
        isAbsoluteUrl: function () {
          return u;
        },
        isResSent: function () {
          return f;
        },
        loadGetInitialProps: function () {
          return d;
        },
        normalizeRepeatedSlashes: function () {
          return p;
        },
        stringifyError: function () {
          return P;
        },
      };
      for (var n in r)
        Object.defineProperty(t, n, { enumerable: !0, get: r[n] });
      let o = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function a(e) {
        let t,
          r = !1;
        return (...n) => (r || ((r = !0), (t = e(...n))), t);
      }
      let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        u = (e) => i.test(e);
      function l() {
        let { protocol: e, hostname: t, port: r } = window.location;
        return `${e}//${t}${r ? ":" + r : ""}`;
      }
      function c() {
        let { href: e } = window.location,
          t = l();
        return e.substring(t.length);
      }
      function s(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function f(e) {
        return e.finished || e.headersSent;
      }
      function p(e) {
        let t = e.split("?");
        return (
          t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (t[1] ? `?${t.slice(1).join("?")}` : "")
        );
      }
      async function d(e, t) {
        let r = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await d(t.Component, t.ctx) }
            : {};
        let n = await e.getInitialProps(t);
        if (r && f(r)) return n;
        if (!n)
          throw Object.defineProperty(
            Error(
              `"${s(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E394", enumerable: !1, configurable: !0 },
          );
        return n;
      }
      let h = "undefined" != typeof performance,
        y =
          h &&
          ["mark", "measure", "getEntriesByName"].every(
            (e) => "function" == typeof performance[e],
          );
      class g extends Error {}
      class m extends Error {}
      class b extends Error {
        constructor(e) {
          (super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = `Cannot find module for page: ${e}`));
        }
      }
      class v extends Error {
        constructor(e, t) {
          (super(),
            (this.message = `Failed to load static file for page: ${e} ${t}`));
        }
      }
      class O extends Error {
        constructor() {
          (super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module"));
        }
      }
      function P(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    13220: (e, t, r) => {
      r.d(t, { k5: () => s });
      var n = r(12115),
        o = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        a = n.createContext && n.createContext(o),
        i = ["attr", "size", "title"];
      function u() {
        return (u = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                var n, o, a;
                ((n = e),
                  (o = t),
                  (a = r[t]),
                  (o = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(o)) in n
                    ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[o] = a));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : l(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function s(e) {
        return (t) =>
          n.createElement(
            f,
            u({ attr: c({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map((t, r) =>
                  n.createElement(t.tag, c({ key: r }, t.attr), e(t.child)),
                )
              );
            })(e.child),
          );
      }
      function f(e) {
        var t = (t) => {
          var r,
            { attr: o, size: a, title: l } = e,
            s = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                o = (function (e, t) {
                  if (null == e) return {};
                  var r = {};
                  for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                      if (t.indexOf(n) >= 0) continue;
                      r[n] = e[n];
                    }
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                  ((r = a[n]),
                    !(t.indexOf(r) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (o[r] = e[r]));
              }
              return o;
            })(e, i),
            f = a || t.size || "1em";
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            n.createElement(
              "svg",
              u(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                o,
                s,
                {
                  className: r,
                  style: c(c({ color: e.color || t.color }, t.style), e.style),
                  height: f,
                  width: f,
                  xmlns: "http://www.w3.org/2000/svg",
                },
              ),
              l && n.createElement("title", null, l),
              e.children,
            )
          );
        };
        return void 0 !== a
          ? n.createElement(a.Consumer, null, (e) => t(e))
          : t(o);
      }
    },
    20091: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        formatUrl: function () {
          return u;
        },
        formatWithValidation: function () {
          return c;
        },
        urlObjectKeys: function () {
          return l;
        },
      };
      for (var o in n)
        Object.defineProperty(t, o, { enumerable: !0, get: n[o] });
      let a = r(66388)._(r(31393)),
        i = /https?|ftp|gopher|file/;
      function u(e) {
        let { auth: t, hostname: r } = e,
          n = e.protocol || "",
          o = e.pathname || "",
          u = e.hash || "",
          l = e.query || "",
          c = !1;
        ((t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (c = t + e.host)
            : r &&
              ((c = t + (~r.indexOf(":") ? `[${r}]` : r)),
              e.port && (c += ":" + e.port)),
          l &&
            "object" == typeof l &&
            (l = String(a.urlQueryToSearchParams(l))));
        let s = e.search || (l && `?${l}`) || "";
        return (
          n && !n.endsWith(":") && (n += ":"),
          e.slashes || ((!n || i.test(n)) && !1 !== c)
            ? ((c = "//" + (c || "")), o && "/" !== o[0] && (o = "/" + o))
            : c || (c = ""),
          u && "#" !== u[0] && (u = "#" + u),
          s && "?" !== s[0] && (s = "?" + s),
          (o = o.replace(/[?#]/g, encodeURIComponent)),
          (s = s.replace("#", "%23")),
          `${n}${c}${o}${s}${u}`
        );
      }
      let l = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function c(e) {
        return u(e);
      }
    },
    29842: (e, t) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "errorOnce", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }));
      let r = (e) => {};
    },
    31393: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = {
        assign: function () {
          return u;
        },
        searchParamsToUrlQuery: function () {
          return o;
        },
        urlQueryToSearchParams: function () {
          return i;
        },
      };
      for (var n in r)
        Object.defineProperty(t, n, { enumerable: !0, get: r[n] });
      function o(e) {
        let t = {};
        for (let [r, n] of e.entries()) {
          let e = t[r];
          void 0 === e
            ? (t[r] = n)
            : Array.isArray(e)
              ? e.push(n)
              : (t[r] = [e, n]);
        }
        return t;
      }
      function a(e) {
        return "string" == typeof e
          ? e
          : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
            ? ""
            : String(e);
      }
      function i(e) {
        let t = new URLSearchParams();
        for (let [r, n] of Object.entries(e))
          if (Array.isArray(n)) for (let e of n) t.append(r, a(e));
          else t.set(r, a(n));
        return t;
      }
      function u(e, ...t) {
        for (let r of t) {
          for (let t of r.keys()) e.delete(t);
          for (let [t, n] of r.entries()) e.append(t, n);
        }
        return e;
      }
    },
    69470: (e, t, r) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }));
      let n = r(10857),
        o = r(48512);
      function a(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, n.getLocationOrigin)(),
            r = new URL(e, t);
          return r.origin === t && (0, o.hasBasePath)(r.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    98500: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        default: function () {
          return m;
        },
        useLinkStatus: function () {
          return v;
        },
      };
      for (var o in n)
        Object.defineProperty(t, o, { enumerable: !0, get: n[o] });
      let a = r(66388),
        i = r(95155),
        u = a._(r(12115)),
        l = r(20091),
        c = r(22909),
        s = r(21172),
        f = r(10857),
        p = r(70127);
      r(47284);
      let d = r(24972),
        h = r(69470),
        y = r(57551);
      function g(e) {
        return "string" == typeof e ? e : (0, l.formatUrl)(e);
      }
      function m(e) {
        var t;
        let n,
          o,
          a,
          [l, m] = (0, u.useOptimistic)(d.IDLE_LINK_STATUS),
          v = (0, u.useRef)(null),
          {
            href: O,
            as: P,
            children: E,
            prefetch: j = null,
            passHref: _,
            replace: w,
            shallow: S,
            scroll: C,
            onClick: N,
            onMouseEnter: T,
            onTouchStart: k,
            legacyBehavior: x = !1,
            onNavigate: L,
            ref: R,
            unstable_dynamicOnHover: I,
            ...$
          } = e;
        ((n = E),
          x &&
            ("string" == typeof n || "number" == typeof n) &&
            (n = (0, i.jsx)("a", { children: n })));
        let A = u.default.useContext(c.AppRouterContext),
          U = !1 !== j,
          M =
            !1 !== j
              ? null === (t = j) || "auto" === t
                ? y.FetchStrategy.PPR
                : y.FetchStrategy.Full
              : y.FetchStrategy.PPR,
          { href: D, as: F } = u.default.useMemo(() => {
            let e = g(O);
            return { href: e, as: P ? g(P) : e };
          }, [O, P]);
        if (x) {
          if (n?.$$typeof === Symbol.for("react.lazy"))
            throw Object.defineProperty(
              Error(
                "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.",
              ),
              "__NEXT_ERROR_CODE",
              { value: "E863", enumerable: !1, configurable: !0 },
            );
          o = u.default.Children.only(n);
        }
        let z = x ? o && "object" == typeof o && o.ref : R,
          B = u.default.useCallback(
            (e) => (
              null !== A &&
                (v.current = (0, d.mountLinkInstance)(e, D, A, M, U, m)),
              () => {
                (v.current &&
                  ((0, d.unmountLinkForCurrentNavigation)(v.current),
                  (v.current = null)),
                  (0, d.unmountPrefetchableInstance)(e));
              }
            ),
            [U, D, A, M, m],
          ),
          K = {
            ref: (0, s.useMergedRef)(B, z),
            onClick(e) {
              (x || "function" != typeof N || N(e),
                x &&
                  o.props &&
                  "function" == typeof o.props.onClick &&
                  o.props.onClick(e),
                !A ||
                  e.defaultPrevented ||
                  (function (e, t, n, o, a, i, l) {
                    {
                      let c,
                        { nodeName: s } = e.currentTarget;
                      if (
                        ("A" === s.toUpperCase() &&
                          (((c = e.currentTarget.getAttribute("target")) &&
                            "_self" !== c) ||
                            e.metaKey ||
                            e.ctrlKey ||
                            e.shiftKey ||
                            e.altKey ||
                            (e.nativeEvent && 2 === e.nativeEvent.which))) ||
                        e.currentTarget.hasAttribute("download")
                      )
                        return;
                      if (!(0, h.isLocalURL)(t)) {
                        a && (e.preventDefault(), location.replace(t));
                        return;
                      }
                      if ((e.preventDefault(), l)) {
                        let e = !1;
                        if (
                          (l({
                            preventDefault: () => {
                              e = !0;
                            },
                          }),
                          e)
                        )
                          return;
                      }
                      let { dispatchNavigateAction: f } = r(70156);
                      u.default.startTransition(() => {
                        f(n || t, a ? "replace" : "push", i ?? !0, o.current);
                      });
                    }
                  })(e, D, F, v, w, C, L));
            },
            onMouseEnter(e) {
              (x || "function" != typeof T || T(e),
                x &&
                  o.props &&
                  "function" == typeof o.props.onMouseEnter &&
                  o.props.onMouseEnter(e),
                A && U && (0, d.onNavigationIntent)(e.currentTarget, !0 === I));
            },
            onTouchStart: function (e) {
              (x || "function" != typeof k || k(e),
                x &&
                  o.props &&
                  "function" == typeof o.props.onTouchStart &&
                  o.props.onTouchStart(e),
                A && U && (0, d.onNavigationIntent)(e.currentTarget, !0 === I));
            },
          };
        return (
          (0, f.isAbsoluteUrl)(F)
            ? (K.href = F)
            : (x && !_ && ("a" !== o.type || "href" in o.props)) ||
              (K.href = (0, p.addBasePath)(F)),
          (a = x
            ? u.default.cloneElement(o, K)
            : (0, i.jsx)("a", { ...$, ...K, children: n })),
          (0, i.jsx)(b.Provider, { value: l, children: a })
        );
      }
      r(29842);
      let b = (0, u.createContext)(d.IDLE_LINK_STATUS),
        v = () => (0, u.useContext)(b);
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
  },
]);
