"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [226],
  {
    3976: (e, t, n) => {
      n.d(t, { L: () => l });
      var r = n(12115),
        o = n(21919);
      function l() {
        let [e] = (0, r.useState)(o.e);
        return ((0, r.useEffect)(() => () => e.dispose(), [e]), e);
      }
    },
    14695: (e, t, n) => {
      n.d(t, { P: () => u, a: () => i });
      var r = n(12115),
        o = n(36667);
      let l = Symbol();
      function i(e, t = !0) {
        return Object.assign(e, { [l]: t });
      }
      function u(...e) {
        let t = (0, r.useRef)(e);
        (0, r.useEffect)(() => {
          t.current = e;
        }, [e]);
        let n = (0, o._)((e) => {
          for (let n of t.current)
            null != n && ("function" == typeof n ? n(e) : (n.current = e));
        });
        return e.every((e) => null == e || (null == e ? void 0 : e[l]))
          ? void 0
          : n;
      }
    },
    19887: (e, t, n) => {
      n.d(t, { _: () => i });
      var r = Object.defineProperty,
        o = (e, t, n) => {
          let o;
          return (
            (o = "symbol" != typeof t ? t + "" : t) in e
              ? r(e, o, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (e[o] = n),
            n
          );
        };
      class l {
        constructor() {
          (o(this, "current", this.detect()),
            o(this, "handoffState", "pending"),
            o(this, "currentId", 0));
        }
        set(e) {
          this.current !== e &&
            ((this.handoffState = "pending"),
            (this.currentId = 0),
            (this.current = e));
        }
        reset() {
          this.set(this.detect());
        }
        nextId() {
          return ++this.currentId;
        }
        get isServer() {
          return "server" === this.current;
        }
        get isClient() {
          return "client" === this.current;
        }
        detect() {
          return "undefined" == typeof window || "undefined" == typeof document
            ? "server"
            : "client";
        }
        handoff() {
          "pending" === this.handoffState && (this.handoffState = "complete");
        }
        get isHandoffComplete() {
          return "complete" === this.handoffState;
        }
      }
      let i = new l();
    },
    21919: (e, t, n) => {
      n.d(t, {
        e: () =>
          function e() {
            let t = [],
              n = {
                addEventListener: (e, t, r, o) => (
                  e.addEventListener(t, r, o),
                  n.add(() => e.removeEventListener(t, r, o))
                ),
                requestAnimationFrame(...e) {
                  let t = requestAnimationFrame(...e);
                  return n.add(() => cancelAnimationFrame(t));
                },
                nextFrame: (...e) =>
                  n.requestAnimationFrame(() => n.requestAnimationFrame(...e)),
                setTimeout(...e) {
                  let t = setTimeout(...e);
                  return n.add(() => clearTimeout(t));
                },
                microTask(...e) {
                  let t = { current: !0 };
                  return (
                    (0, r._)(() => {
                      t.current && e[0]();
                    }),
                    n.add(() => {
                      t.current = !1;
                    })
                  );
                },
                style(e, t, n) {
                  let r = e.style.getPropertyValue(t);
                  return (
                    Object.assign(e.style, { [t]: n }),
                    this.add(() => {
                      Object.assign(e.style, { [t]: r });
                    })
                  );
                },
                group(t) {
                  let n = e();
                  return (t(n), this.add(() => n.dispose()));
                },
                add: (e) => (
                  t.includes(e) || t.push(e),
                  () => {
                    let n = t.indexOf(e);
                    if (n >= 0) for (let e of t.splice(n, 1)) e();
                  }
                ),
                dispose() {
                  for (let e of t.splice(0)) e();
                },
              };
            return n;
          },
      });
      var r = n(38406);
    },
    23226: (e, t, n) => {
      let r, o, l, i, u, a, s, c, d, f, p, m, v, h;
      n.d(t, { lG: () => ti });
      var g,
        b,
        E,
        y,
        w,
        S = n(12115),
        F =
          (((r = F || {}).Space = " "),
          (r.Enter = "Enter"),
          (r.Escape = "Escape"),
          (r.Backspace = "Backspace"),
          (r.Delete = "Delete"),
          (r.ArrowLeft = "ArrowLeft"),
          (r.ArrowUp = "ArrowUp"),
          (r.ArrowRight = "ArrowRight"),
          (r.ArrowDown = "ArrowDown"),
          (r.Home = "Home"),
          (r.End = "End"),
          (r.PageUp = "PageUp"),
          (r.PageDown = "PageDown"),
          (r.Tab = "Tab"),
          r),
        P = n(90722);
      function C(e, t, n, r) {
        let o = (0, P.Y)(n);
        (0, S.useEffect)(() => {
          function n(e) {
            o.current(e);
          }
          return (
            (e = null != e ? e : window).addEventListener(t, n, r),
            () => e.removeEventListener(t, n, r)
          );
        }, [e, t, r]);
      }
      class O extends Map {
        constructor(e) {
          (super(), (this.factory = e));
        }
        get(e) {
          let t = super.get(e);
          return (void 0 === t && ((t = this.factory(e)), this.set(e, t)), t);
        }
      }
      var k = n(21919),
        T = n(19887),
        x = Object.defineProperty,
        A = (e, t, n) => {
          if (!t.has(e)) throw TypeError("Cannot " + n);
        },
        _ = (e, t, n) => (
          A(e, t, "read from private field"),
          n ? n.call(e) : t.get(e)
        ),
        R = (e, t, n) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, n);
        },
        N = (e, t, n, r) => (
          A(e, t, "write to private field"),
          r ? r.call(e, n) : t.set(e, n),
          n
        );
      class L {
        constructor(e) {
          (R(this, E, {}),
            R(this, y, new O(() => new Set())),
            R(this, w, new Set()),
            ((e, t, n) => {
              let r;
              return (r = "symbol" != typeof t ? t + "" : t) in e
                ? x(e, r, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n,
                  })
                : (e[r] = n);
            })(this, "disposables", (0, k.e)()),
            N(this, E, e),
            T._.isServer &&
              this.disposables.microTask(() => {
                this.dispose();
              }));
        }
        dispose() {
          this.disposables.dispose();
        }
        get state() {
          return _(this, E);
        }
        subscribe(e, t) {
          if (T._.isServer) return () => {};
          let n = { selector: e, callback: t, current: e(_(this, E)) };
          return (
            _(this, w).add(n),
            this.disposables.add(() => {
              _(this, w).delete(n);
            })
          );
        }
        on(e, t) {
          return T._.isServer
            ? () => {}
            : (_(this, y).get(e).add(t),
              this.disposables.add(() => {
                _(this, y).get(e).delete(t);
              }));
        }
        send(e) {
          let t = this.reduce(_(this, E), e);
          if (t !== _(this, E)) {
            for (let e of (N(this, E, t), _(this, w))) {
              let t = e.selector(_(this, E));
              D(e.current, t) || ((e.current = t), e.callback(t));
            }
            for (let t of _(this, y).get(e.type)) t(_(this, E), e);
          }
        }
      }
      function D(e, t) {
        return (
          !!Object.is(e, t) ||
          ("object" == typeof e &&
            null !== e &&
            "object" == typeof t &&
            null !== t &&
            (Array.isArray(e) && Array.isArray(t)
              ? e.length === t.length &&
                M(e[Symbol.iterator](), t[Symbol.iterator]())
              : (e instanceof Map && t instanceof Map) ||
                  (e instanceof Set && t instanceof Set)
                ? e.size === t.size && M(e.entries(), t.entries())
                : !!(j(e) && j(t)) &&
                  M(
                    Object.entries(e)[Symbol.iterator](),
                    Object.entries(t)[Symbol.iterator](),
                  )))
        );
      }
      function M(e, t) {
        for (;;) {
          let n = e.next(),
            r = t.next();
          if (n.done && r.done) return !0;
          if (n.done || r.done || !Object.is(n.value, r.value)) return !1;
        }
      }
      function j(e) {
        if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
        let t = Object.getPrototypeOf(e);
        return null === t || null === Object.getPrototypeOf(t);
      }
      ((E = new WeakMap()), (y = new WeakMap()), (w = new WeakMap()));
      var I = n(84465),
        U = Object.defineProperty,
        Y = (e, t, n) => {
          let r;
          return (
            (r = "symbol" != typeof t ? t + "" : t) in e
              ? U(e, r, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (e[r] = n),
            n
          );
        },
        H =
          (((o = H || {})[(o.Push = 0)] = "Push"), (o[(o.Pop = 1)] = "Pop"), o);
      let $ = {
        0(e, t) {
          let n = t.id,
            r = e.stack,
            o = e.stack.indexOf(n);
          if (-1 !== o) {
            let t = e.stack.slice();
            return (t.splice(o, 1), t.push(n), (r = t), { ...e, stack: r });
          }
          return { ...e, stack: [...e.stack, n] };
        },
        1(e, t) {
          let n = t.id,
            r = e.stack.indexOf(n);
          if (-1 === r) return e;
          let o = e.stack.slice();
          return (o.splice(r, 1), { ...e, stack: o });
        },
      };
      class W extends L {
        constructor() {
          (super(...arguments),
            Y(this, "actions", {
              push: (e) => this.send({ type: 0, id: e }),
              pop: (e) => this.send({ type: 1, id: e }),
            }),
            Y(this, "selectors", {
              isTop: (e, t) => e.stack[e.stack.length - 1] === t,
              inStack: (e, t) => e.stack.includes(t),
            }));
        }
        static new() {
          return new W({ stack: [] });
        }
        reduce(e, t) {
          return (0, I.Y)(t.type, $, e, t);
        }
      }
      let X = new O(() => W.new());
      var V = n(30789),
        K = n(36667);
      function B(e, t, n = D) {
        return (0, V.useSyncExternalStoreWithSelector)(
          (0, K._)((t) => e.subscribe(q, t)),
          (0, K._)(() => e.state),
          (0, K._)(() => e.state),
          (0, K._)(t),
          n,
        );
      }
      function q(e) {
        return e;
      }
      var G = n(35409);
      function z(e, t) {
        let n = (0, S.useId)(),
          r = X.get(t),
          [o, l] = B(
            r,
            (0, S.useCallback)(
              (e) => [r.selectors.isTop(e, n), r.selectors.inStack(e, n)],
              [r, n],
            ),
          );
        return (
          (0, G.s)(() => {
            if (e) return (r.actions.push(n), () => r.actions.pop(n));
          }, [r, e, n]),
          !!e && (!l || o)
        );
      }
      function Z(e) {
        var t;
        return T._.isServer
          ? null
          : null == e
            ? document
            : null != (t = null == e ? void 0 : e.ownerDocument)
              ? t
              : document;
      }
      function J(e) {
        var t, n;
        return T._.isServer
          ? null
          : null == e
            ? document
            : null !=
                (n =
                  null == (t = null == e ? void 0 : e.getRootNode)
                    ? void 0
                    : t.call(e))
              ? n
              : document;
      }
      function Q(e) {
        var t, n;
        return null != (n = null == (t = J(e)) ? void 0 : t.activeElement)
          ? n
          : null;
      }
      let ee = new Map(),
        et = new Map();
      function en(e) {
        var t;
        let n = null != (t = et.get(e)) ? t : 0;
        return (
          et.set(e, n + 1),
          0 !== n ||
            (ee.set(e, {
              "aria-hidden": e.getAttribute("aria-hidden"),
              inert: e.inert,
            }),
            e.setAttribute("aria-hidden", "true"),
            (e.inert = !0)),
          () =>
            (function (e) {
              var t;
              let n = null != (t = et.get(e)) ? t : 1;
              if ((1 === n ? et.delete(e) : et.set(e, n - 1), 1 !== n)) return;
              let r = ee.get(e);
              r &&
                (null === r["aria-hidden"]
                  ? e.removeAttribute("aria-hidden")
                  : e.setAttribute("aria-hidden", r["aria-hidden"]),
                (e.inert = r.inert),
                ee.delete(e));
            })(e)
        );
      }
      function er(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          "nodeType" in e &&
          "tagName" in e
        );
      }
      function eo(e) {
        return er(e) && "accessKey" in e;
      }
      function el(e) {
        return er(e) && "tabIndex" in e;
      }
      let ei = [
          "[contentEditable=true]",
          "[tabindex]",
          "a[href]",
          "area[href]",
          "button:not([disabled])",
          "iframe",
          "input:not([disabled])",
          "select:not([disabled])",
          "details>summary",
          "textarea:not([disabled])",
        ]
          .map((e) => `${e}:not([tabindex='-1'])`)
          .join(","),
        eu = ["[data-autofocus]"]
          .map((e) => `${e}:not([tabindex='-1'])`)
          .join(",");
      var ea =
          (((l = ea || {})[(l.First = 1)] = "First"),
          (l[(l.Previous = 2)] = "Previous"),
          (l[(l.Next = 4)] = "Next"),
          (l[(l.Last = 8)] = "Last"),
          (l[(l.WrapAround = 16)] = "WrapAround"),
          (l[(l.NoScroll = 32)] = "NoScroll"),
          (l[(l.AutoFocus = 64)] = "AutoFocus"),
          l),
        es =
          (((i = es || {})[(i.Error = 0)] = "Error"),
          (i[(i.Overflow = 1)] = "Overflow"),
          (i[(i.Success = 2)] = "Success"),
          (i[(i.Underflow = 3)] = "Underflow"),
          i),
        ec =
          (((u = ec || {})[(u.Previous = -1)] = "Previous"),
          (u[(u.Next = 1)] = "Next"),
          u),
        ed =
          (((a = ed || {})[(a.Strict = 0)] = "Strict"),
          (a[(a.Loose = 1)] = "Loose"),
          a),
        ef =
          (((s = ef || {})[(s.Keyboard = 0)] = "Keyboard"),
          (s[(s.Mouse = 1)] = "Mouse"),
          s);
      function ep(e) {
        null == e || e.focus({ preventScroll: !0 });
      }
      function em(
        e,
        t,
        { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {},
      ) {
        var l, i, u;
        let a = Array.isArray(e) ? (e.length > 0 ? J(e[0]) : document) : J(e),
          s = Array.isArray(e)
            ? n
              ? (function (e, t = (e) => e) {
                  return e.slice().sort((e, n) => {
                    let r = t(e),
                      o = t(n);
                    if (null === r || null === o) return 0;
                    let l = r.compareDocumentPosition(o);
                    return l & Node.DOCUMENT_POSITION_FOLLOWING
                      ? -1
                      : l & Node.DOCUMENT_POSITION_PRECEDING
                        ? 1
                        : 0;
                  });
                })(e)
              : e
            : 64 & t
              ? (function (e = document.body) {
                  return null == e
                    ? []
                    : Array.from(e.querySelectorAll(eu)).sort((e, t) =>
                        Math.sign(
                          (e.tabIndex || Number.MAX_SAFE_INTEGER) -
                            (t.tabIndex || Number.MAX_SAFE_INTEGER),
                        ),
                      );
                })(e)
              : (function (e = document.body) {
                  return null == e
                    ? []
                    : Array.from(e.querySelectorAll(ei)).sort((e, t) =>
                        Math.sign(
                          (e.tabIndex || Number.MAX_SAFE_INTEGER) -
                            (t.tabIndex || Number.MAX_SAFE_INTEGER),
                        ),
                      );
                })(e);
        (o.length > 0 &&
          s.length > 1 &&
          (s = s.filter(
            (e) =>
              !o.some((t) =>
                null != t && "current" in t
                  ? (null == t ? void 0 : t.current) === e
                  : t === e,
              ),
          )),
          (r = null != r ? r : null == a ? void 0 : a.activeElement));
        let c = (() => {
            if (5 & t) return 1;
            if (10 & t) return -1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
            );
          })(),
          d = (() => {
            if (1 & t) return 0;
            if (2 & t) return Math.max(0, s.indexOf(r)) - 1;
            if (4 & t) return Math.max(0, s.indexOf(r)) + 1;
            if (8 & t) return s.length - 1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
            );
          })(),
          f = 32 & t ? { preventScroll: !0 } : {},
          p = 0,
          m = s.length,
          v;
        do {
          if (p >= m || p + m <= 0) return 0;
          let e = d + p;
          if (16 & t) e = (e + m) % m;
          else {
            if (e < 0) return 3;
            if (e >= m) return 1;
          }
          (null == (v = s[e]) || v.focus(f), (p += c));
        } while (v !== Q(v));
        return (
          6 & t &&
            null !=
              (u =
                null == (i = null == (l = v) ? void 0 : l.matches)
                  ? void 0
                  : i.call(l, "textarea,input")) &&
            u &&
            v.select(),
          2
        );
      }
      function ev() {
        return (
          /iPhone/gi.test(window.navigator.platform) ||
          (/Mac/gi.test(window.navigator.platform) &&
            window.navigator.maxTouchPoints > 0)
        );
      }
      function eh() {
        return ev() || /Android/gi.test(window.navigator.userAgent);
      }
      function eg(e, t, n, r) {
        let o = (0, P.Y)(n);
        (0, S.useEffect)(() => {
          if (e)
            return (
              document.addEventListener(t, n, r),
              () => document.removeEventListener(t, n, r)
            );
          function n(e) {
            o.current(e);
          }
        }, [e, t, r]);
      }
      function eb(e, t, n, r) {
        let o = (0, P.Y)(n);
        (0, S.useEffect)(() => {
          if (e)
            return (
              window.addEventListener(t, n, r),
              () => window.removeEventListener(t, n, r)
            );
          function n(e) {
            o.current(e);
          }
        }, [e, t, r]);
      }
      function eE(...e) {
        return (0, S.useMemo)(() => Z(...e), [...e]);
      }
      "undefined" != typeof window &&
        "undefined" != typeof document &&
        (document.addEventListener(
          "keydown",
          (e) => {
            e.metaKey ||
              e.altKey ||
              e.ctrlKey ||
              (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0,
        ),
        document.addEventListener(
          "click",
          (e) => {
            1 === e.detail
              ? delete document.documentElement.dataset.headlessuiFocusVisible
              : 0 === e.detail &&
                (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0,
        ));
      var ey = n(82728),
        ew =
          (((c = ew || {})[(c.None = 1)] = "None"),
          (c[(c.Focusable = 2)] = "Focusable"),
          (c[(c.Hidden = 4)] = "Hidden"),
          c);
      let eS = (0, ey.FX)(function (e, t) {
          var n;
          let { features: r = 1, ...o } = e,
            l = {
              ref: t,
              "aria-hidden":
                (2 & r) == 2 || (null != (n = o["aria-hidden"]) ? n : void 0),
              hidden: (4 & r) == 4 || void 0,
              style: {
                position: "fixed",
                top: 1,
                left: 1,
                width: 1,
                height: 0,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                borderWidth: "0",
                ...((4 & r) == 4 && (2 & r) != 2 && { display: "none" }),
              },
            };
          return (0, ey.Ci)()({
            ourProps: l,
            theirProps: o,
            slot: {},
            defaultTag: "span",
            name: "Hidden",
          });
        }),
        eF = (0, S.createContext)(null);
      function eP({ children: e, node: t }) {
        let [n, r] = (0, S.useState)(null),
          o = eC(null != t ? t : n);
        return S.createElement(
          eF.Provider,
          { value: o },
          e,
          null === o &&
            S.createElement(eS, {
              features: ew.Hidden,
              ref: (e) => {
                var t, n;
                if (e) {
                  for (let o of null !=
                  (n =
                    null == (t = Z(e))
                      ? void 0
                      : t.querySelectorAll("html > *, body > *"))
                    ? n
                    : [])
                    if (
                      o !== document.body &&
                      o !== document.head &&
                      er(o) &&
                      null != o &&
                      o.contains(e)
                    ) {
                      r(o);
                      break;
                    }
                }
              },
            }),
        );
      }
      function eC(e = null) {
        var t;
        return null != (t = (0, S.useContext)(eF)) ? t : e;
      }
      function eO(e) {
        let t = {};
        for (let n of e) Object.assign(t, n(t));
        return t;
      }
      let ek =
        ((g = () => new Map()),
        (b = {
          PUSH(e, t) {
            var n;
            let r =
              null != (n = this.get(e))
                ? n
                : {
                    doc: e,
                    count: 0,
                    d: (0, k.e)(),
                    meta: new Set(),
                    computedMeta: {},
                  };
            return (
              r.count++,
              r.meta.add(t),
              (r.computedMeta = eO(r.meta)),
              this.set(e, r),
              this
            );
          },
          POP(e, t) {
            let n = this.get(e);
            return (
              n && (n.count--, n.meta.delete(t), (n.computedMeta = eO(n.meta))),
              this
            );
          },
          SCROLL_PREVENT(e) {
            let t,
              n = { doc: e.doc, d: e.d, meta: () => e.computedMeta },
              r = [
                ev()
                  ? {
                      before({ doc: e, d: t, meta: n }) {
                        function r(e) {
                          for (let t of n().containers)
                            for (let n of t()) if (n.contains(e)) return !0;
                          return !1;
                        }
                        t.microTask(() => {
                          var n;
                          if (
                            "auto" !==
                            window.getComputedStyle(e.documentElement)
                              .scrollBehavior
                          ) {
                            let n = (0, k.e)();
                            (n.style(
                              e.documentElement,
                              "scrollBehavior",
                              "auto",
                            ),
                              t.add(() => t.microTask(() => n.dispose())));
                          }
                          let o =
                              null != (n = window.scrollY)
                                ? n
                                : window.pageYOffset,
                            l = null;
                          (t.addEventListener(
                            e,
                            "click",
                            (t) => {
                              if (el(t.target))
                                try {
                                  let n = t.target.closest("a");
                                  if (!n) return;
                                  let { hash: o } = new URL(n.href),
                                    i = e.querySelector(o);
                                  el(i) && !r(i) && (l = i);
                                } catch {}
                            },
                            !0,
                          ),
                            t.group((n) => {
                              t.addEventListener(e, "touchstart", (e) => {
                                var t;
                                if (
                                  (n.dispose(),
                                  el(e.target) &&
                                    er((t = e.target)) &&
                                    "style" in t)
                                )
                                  if (r(e.target)) {
                                    let t = e.target;
                                    for (
                                      ;
                                      t.parentElement && r(t.parentElement);

                                    )
                                      t = t.parentElement;
                                    n.style(t, "overscrollBehavior", "contain");
                                  } else
                                    n.style(e.target, "touchAction", "none");
                              });
                            }),
                            t.addEventListener(
                              e,
                              "touchmove",
                              (e) => {
                                if (el(e.target)) {
                                  var t;
                                  if (
                                    !(
                                      eo((t = e.target)) &&
                                      "INPUT" === t.nodeName
                                    )
                                  )
                                    if (r(e.target)) {
                                      let t = e.target;
                                      for (
                                        ;
                                        t.parentElement &&
                                        "" !== t.dataset.headlessuiPortal &&
                                        !(
                                          t.scrollHeight > t.clientHeight ||
                                          t.scrollWidth > t.clientWidth
                                        );

                                      )
                                        t = t.parentElement;
                                      "" === t.dataset.headlessuiPortal &&
                                        e.preventDefault();
                                    } else e.preventDefault();
                                }
                              },
                              { passive: !1 },
                            ),
                            t.add(() => {
                              var e;
                              (o !==
                                (null != (e = window.scrollY)
                                  ? e
                                  : window.pageYOffset) &&
                                window.scrollTo(0, o),
                                l &&
                                  l.isConnected &&
                                  (l.scrollIntoView({ block: "nearest" }),
                                  (l = null)));
                            }));
                        });
                      },
                    }
                  : {},
                {
                  before({ doc: e }) {
                    var n;
                    let r = e.documentElement;
                    t = Math.max(
                      0,
                      (null != (n = e.defaultView) ? n : window).innerWidth -
                        r.clientWidth,
                    );
                  },
                  after({ doc: e, d: n }) {
                    let r = e.documentElement,
                      o = Math.max(0, r.clientWidth - r.offsetWidth),
                      l = Math.max(0, t - o);
                    n.style(r, "paddingRight", `${l}px`);
                  },
                },
                {
                  before({ doc: e, d: t }) {
                    t.style(e.documentElement, "overflow", "hidden");
                  },
                },
              ];
            (r.forEach(({ before: e }) => (null == e ? void 0 : e(n))),
              r.forEach(({ after: e }) => (null == e ? void 0 : e(n))));
          },
          SCROLL_ALLOW({ d: e }) {
            e.dispose();
          },
          TEARDOWN({ doc: e }) {
            this.delete(e);
          },
        }),
        (d = g()),
        (f = new Set()),
        {
          getSnapshot: () => d,
          subscribe: (e) => (f.add(e), () => f.delete(e)),
          dispatch(e, ...t) {
            let n = b[e].call(d, ...t);
            n && ((d = n), f.forEach((e) => e()));
          },
        });
      ek.subscribe(() => {
        let e = ek.getSnapshot(),
          t = new Map();
        for (let [n] of e) t.set(n, n.documentElement.style.overflow);
        for (let n of e.values()) {
          let e = "hidden" === t.get(n.doc),
            r = 0 !== n.count;
          (((r && !e) || (!r && e)) &&
            ek.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
            0 === n.count && ek.dispatch("TEARDOWN", n));
        }
      });
      var eT = n(38659);
      function ex(e) {
        return (0, S.useMemo)(() => e, Object.values(e));
      }
      var eA = n(14695);
      let e_ = (0, S.createContext)(() => {});
      function eR({ value: e, children: t }) {
        return S.createElement(e_.Provider, { value: e }, t);
      }
      var eN = n(27579);
      let eL = (0, S.createContext)(!1);
      function eD(e) {
        return S.createElement(eL.Provider, { value: e.force }, e.children);
      }
      let eM = (0, S.createContext)(void 0),
        ej = (0, S.createContext)(null);
      ej.displayName = "DescriptionContext";
      let eI = Object.assign(
        (0, ey.FX)(function (e, t) {
          let n = (0, S.useId)(),
            r = (0, S.useContext)(eM),
            { id: o = `headlessui-description-${n}`, ...l } = e,
            i = (function e() {
              let t = (0, S.useContext)(ej);
              if (null === t) {
                let t = Error(
                  "You used a <Description /> component, but it is not inside a relevant parent.",
                );
                throw (
                  Error.captureStackTrace && Error.captureStackTrace(t, e),
                  t
                );
              }
              return t;
            })(),
            u = (0, eA.P)(t);
          (0, G.s)(() => i.register(o), [o, i.register]);
          let a = ex({ ...i.slot, disabled: r || !1 }),
            s = { ref: u, ...i.props, id: o };
          return (0, ey.Ci)()({
            ourProps: s,
            theirProps: l,
            slot: a,
            defaultTag: "p",
            name: i.name || "Description",
          });
        }),
        {},
      );
      var eU = n(3976),
        eY = n(23912),
        eH = n(38406);
      function e$(e) {
        let t = (0, K._)(e),
          n = (0, S.useRef)(!1);
        (0, S.useEffect)(
          () => (
            (n.current = !1),
            () => {
              ((n.current = !0),
                (0, eH._)(() => {
                  n.current && t();
                }));
            }
          ),
          [t],
        );
      }
      var eW =
        (((p = eW || {})[(p.Forwards = 0)] = "Forwards"),
        (p[(p.Backwards = 1)] = "Backwards"),
        p);
      function eX(e, t) {
        let n = (0, S.useRef)([]),
          r = (0, K._)(e);
        (0, S.useEffect)(() => {
          let e = [...n.current];
          for (let [o, l] of t.entries())
            if (n.current[o] !== l) {
              let o = r(t, e);
              return ((n.current = t), o);
            }
        }, [r, ...t]);
      }
      let eV = [];
      function eK() {
        "loading" !== document.readyState &&
          ((() => {
            function e(e) {
              if (
                !el(e.target) ||
                e.target === document.body ||
                eV[0] === e.target
              )
                return;
              let t = e.target;
              ((t = t.closest(ei)),
                eV.unshift(null != t ? t : e.target),
                (eV = eV.filter((e) => null != e && e.isConnected)).splice(10));
            }
            (window.addEventListener("click", e, { capture: !0 }),
              window.addEventListener("mousedown", e, { capture: !0 }),
              window.addEventListener("focus", e, { capture: !0 }),
              document.body.addEventListener("click", e, { capture: !0 }),
              document.body.addEventListener("mousedown", e, { capture: !0 }),
              document.body.addEventListener("focus", e, { capture: !0 }));
          })(),
          document.removeEventListener("DOMContentLoaded", eK));
      }
      function eB(e) {
        if (!e) return new Set();
        if ("function" == typeof e) return new Set(e());
        let t = new Set();
        for (let n of e.current) er(n.current) && t.add(n.current);
        return t;
      }
      "undefined" != typeof window &&
        "undefined" != typeof document &&
        (document.addEventListener("DOMContentLoaded", eK), eK());
      var eq =
        (((m = eq || {})[(m.None = 0)] = "None"),
        (m[(m.InitialFocus = 1)] = "InitialFocus"),
        (m[(m.TabLock = 2)] = "TabLock"),
        (m[(m.FocusLock = 4)] = "FocusLock"),
        (m[(m.RestoreFocus = 8)] = "RestoreFocus"),
        (m[(m.AutoFocus = 16)] = "AutoFocus"),
        m);
      let eG = Object.assign(
        (0, ey.FX)(function (e, t) {
          let n,
            r = (0, S.useRef)(null),
            o = (0, eA.P)(r, t),
            {
              initialFocus: l,
              initialFocusFallback: i,
              containers: u,
              features: a = 15,
              ...s
            } = e;
          (0, eT.g)() || (a = 0);
          let c = eE(r.current);
          !(function (e, { ownerDocument: t }) {
            let n = !!(8 & e),
              r = (function (e = !0) {
                let t = (0, S.useRef)(eV.slice());
                return (
                  eX(
                    ([e], [n]) => {
                      (!0 === n &&
                        !1 === e &&
                        (0, eH._)(() => {
                          t.current.splice(0);
                        }),
                        !1 === n && !0 === e && (t.current = eV.slice()));
                    },
                    [e, eV, t],
                  ),
                  (0, K._)(() => {
                    var e;
                    return null !=
                      (e = t.current.find((e) => null != e && e.isConnected))
                      ? e
                      : null;
                  })
                );
              })(n);
            (eX(() => {
              var e;
              n || (Q((e = null == t ? void 0 : t.body)) === e && ep(r()));
            }, [n]),
              e$(() => {
                n && ep(r());
              }));
          })(a, { ownerDocument: c });
          let d = (function (
            e,
            {
              ownerDocument: t,
              container: n,
              initialFocus: r,
              initialFocusFallback: o,
            },
          ) {
            let l = (0, S.useRef)(null),
              i = z(!!(1 & e), "focus-trap#initial-focus"),
              u = (0, eY.a)();
            return (
              eX(() => {
                if (0 === e) return;
                if (!i) {
                  null != o && o.current && ep(o.current);
                  return;
                }
                let a = n.current;
                a &&
                  (0, eH._)(() => {
                    if (!u.current) return;
                    let n = null == t ? void 0 : t.activeElement;
                    if (null != r && r.current) {
                      if ((null == r ? void 0 : r.current) === n) {
                        l.current = n;
                        return;
                      }
                    } else if (a.contains(n)) {
                      l.current = n;
                      return;
                    }
                    if (null != r && r.current) ep(r.current);
                    else {
                      if (16 & e) {
                        if (em(a, ea.First | ea.AutoFocus) !== es.Error) return;
                      } else if (em(a, ea.First) !== es.Error) return;
                      if (
                        null != o &&
                        o.current &&
                        (ep(o.current),
                        (null == t ? void 0 : t.activeElement) === o.current)
                      )
                        return;
                      console.warn(
                        "There are no focusable elements inside the <FocusTrap />",
                      );
                    }
                    l.current = null == t ? void 0 : t.activeElement;
                  });
              }, [o, i, e]),
              l
            );
          })(a, {
            ownerDocument: c,
            container: r,
            initialFocus: l,
            initialFocusFallback: i,
          });
          !(function (
            e,
            {
              ownerDocument: t,
              container: n,
              containers: r,
              previousActiveElement: o,
            },
          ) {
            let l = (0, eY.a)(),
              i = !!(4 & e);
            C(
              null == t ? void 0 : t.defaultView,
              "focus",
              (e) => {
                if (!i || !l.current) return;
                let t = eB(r);
                eo(n.current) && t.add(n.current);
                let u = o.current;
                if (!u) return;
                let a = e.target;
                eo(a)
                  ? ez(t, a)
                    ? ((o.current = a), ep(a))
                    : (e.preventDefault(), e.stopPropagation(), ep(u))
                  : ep(o.current);
              },
              !0,
            );
          })(a, {
            ownerDocument: c,
            container: r,
            containers: u,
            previousActiveElement: d,
          });
          let f =
              ((n = (0, S.useRef)(0)),
              eb(
                !0,
                "keydown",
                (e) => {
                  "Tab" === e.key && (n.current = +!!e.shiftKey);
                },
                !0,
              ),
              n),
            p = (0, K._)((e) => {
              if (!eo(r.current)) return;
              let t = r.current;
              (0, I.Y)(f.current, {
                [eW.Forwards]: () => {
                  em(t, ea.First, { skipElements: [e.relatedTarget, i] });
                },
                [eW.Backwards]: () => {
                  em(t, ea.Last, { skipElements: [e.relatedTarget, i] });
                },
              });
            }),
            m = z(!!(2 & a), "focus-trap#tab-lock"),
            v = (0, eU.L)(),
            h = (0, S.useRef)(!1),
            g = (0, ey.Ci)();
          return S.createElement(
            S.Fragment,
            null,
            m &&
              S.createElement(eS, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: p,
                features: ew.Focusable,
              }),
            g({
              ourProps: {
                ref: o,
                onKeyDown(e) {
                  "Tab" == e.key &&
                    ((h.current = !0),
                    v.requestAnimationFrame(() => {
                      h.current = !1;
                    }));
                },
                onBlur(e) {
                  if (!(4 & a)) return;
                  let t = eB(u);
                  eo(r.current) && t.add(r.current);
                  let n = e.relatedTarget;
                  el(n) &&
                    "true" !== n.dataset.headlessuiFocusGuard &&
                    (ez(t, n) ||
                      (h.current
                        ? em(
                            r.current,
                            (0, I.Y)(f.current, {
                              [eW.Forwards]: () => ea.Next,
                              [eW.Backwards]: () => ea.Previous,
                            }) | ea.WrapAround,
                            { relativeTo: e.target },
                          )
                        : el(e.target) && ep(e.target)));
                },
              },
              theirProps: s,
              defaultTag: "div",
              name: "FocusTrap",
            }),
            m &&
              S.createElement(eS, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: p,
                features: ew.Focusable,
              }),
          );
        }),
        { features: eq },
      );
      function ez(e, t) {
        for (let n of e) if (n.contains(t)) return !0;
        return !1;
      }
      var eZ = n(47650);
      let eJ = S.Fragment,
        eQ = (0, ey.FX)(function (e, t) {
          let { ownerDocument: n = null, ...r } = e,
            o = (0, S.useRef)(null),
            l = (0, eA.P)(
              (0, eA.a)((e) => {
                o.current = e;
              }),
              t,
            ),
            i = eE(o.current),
            u = (function (e) {
              let t = (0, S.useContext)(eL),
                n = (0, S.useContext)(e1),
                [r, o] = (0, S.useState)(() => {
                  var r;
                  if (!t && null !== n)
                    return null != (r = n.current) ? r : null;
                  if (T._.isServer) return null;
                  let o =
                    null == e
                      ? void 0
                      : e.getElementById("headlessui-portal-root");
                  if (o) return o;
                  if (null === e) return null;
                  let l = e.createElement("div");
                  return (
                    l.setAttribute("id", "headlessui-portal-root"),
                    e.body.appendChild(l)
                  );
                });
              return (
                (0, S.useEffect)(() => {
                  null !== r &&
                    ((null != e && e.body.contains(r)) ||
                      null == e ||
                      e.body.appendChild(r));
                }, [r, e]),
                (0, S.useEffect)(() => {
                  t || (null !== n && o(n.current));
                }, [n, o, t]),
                r
              );
            })(null != n ? n : i),
            a = (0, S.useContext)(e2),
            s = (0, eU.L)(),
            c = (0, ey.Ci)();
          return (
            e$(() => {
              var e;
              u &&
                u.childNodes.length <= 0 &&
                (null == (e = u.parentElement) || e.removeChild(u));
            }),
            u
              ? (0, eZ.createPortal)(
                  S.createElement(
                    "div",
                    {
                      "data-headlessui-portal": "",
                      ref: (e) => {
                        (s.dispose(), a && e && s.add(a.register(e)));
                      },
                    },
                    c({
                      ourProps: { ref: l },
                      theirProps: r,
                      slot: {},
                      defaultTag: eJ,
                      name: "Portal",
                    }),
                  ),
                  u,
                )
              : null
          );
        }),
        e0 = S.Fragment,
        e1 = (0, S.createContext)(null),
        e2 = (0, S.createContext)(null),
        e4 = (0, ey.FX)(function (e, t) {
          let n = (0, eA.P)(t),
            { enabled: r = !0, ownerDocument: o, ...l } = e,
            i = (0, ey.Ci)();
          return r
            ? S.createElement(eQ, { ...l, ownerDocument: o, ref: n })
            : i({
                ourProps: { ref: n },
                theirProps: l,
                slot: {},
                defaultTag: eJ,
                name: "Portal",
              });
        }),
        e9 = (0, ey.FX)(function (e, t) {
          let { target: n, ...r } = e,
            o = { ref: (0, eA.P)(t) },
            l = (0, ey.Ci)();
          return S.createElement(
            e1.Provider,
            { value: n },
            l({
              ourProps: o,
              theirProps: r,
              defaultTag: e0,
              name: "Popover.Group",
            }),
          );
        }),
        e3 = Object.assign(e4, { Group: e9 });
      var e6 = n(32026),
        e5 =
          (((v = e5 || {})[(v.Open = 0)] = "Open"),
          (v[(v.Closed = 1)] = "Closed"),
          v),
        e8 = (((h = e8 || {})[(h.SetTitleId = 0)] = "SetTitleId"), h);
      let e7 = {
          0: (e, t) => (e.titleId === t.id ? e : { ...e, titleId: t.id }),
        },
        te = (0, S.createContext)(null);
      function tt(e) {
        let t = (0, S.useContext)(te);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Dialog /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, tt), t);
        }
        return t;
      }
      function tn(e, t) {
        return (0, I.Y)(t.type, e7, e, t);
      }
      te.displayName = "DialogContext";
      let tr = (0, ey.FX)(function (e, t) {
          let n,
            r,
            o,
            l,
            i,
            u,
            a,
            s,
            c,
            d,
            f = (0, S.useId)(),
            {
              id: p = `headlessui-dialog-${f}`,
              open: m,
              onClose: v,
              initialFocus: h,
              role: g = "dialog",
              autoFocus: b = !0,
              __demoMode: E = !1,
              unmount: y = !1,
              ...w
            } = e,
            O = (0, S.useRef)(!1);
          g =
            "dialog" === g || "alertdialog" === g
              ? g
              : (O.current ||
                  ((O.current = !0),
                  console.warn(
                    `Invalid role [${g}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`,
                  )),
                "dialog");
          let T = (0, eN.O_)();
          void 0 === m && null !== T && (m = (T & eN.Uw.Open) === eN.Uw.Open);
          let x = (0, S.useRef)(null),
            A = (0, eA.P)(x, t),
            _ = eE(x.current),
            R = +!m,
            [N, L] = (0, S.useReducer)(tn, {
              titleId: null,
              descriptionId: null,
              panelRef: (0, S.createRef)(),
            }),
            D = (0, K._)(() => v(!1)),
            M = (0, K._)((e) => L({ type: 0, id: e })),
            j = !!(0, eT.g)() && 0 === R,
            [U, Y] =
              ((n = (0, S.useContext)(e2)),
              (r = (0, S.useRef)([])),
              (o = (0, K._)(
                (e) => (r.current.push(e), n && n.register(e), () => l(e)),
              )),
              (l = (0, K._)((e) => {
                let t = r.current.indexOf(e);
                (-1 !== t && r.current.splice(t, 1), n && n.unregister(e));
              })),
              (i = (0, S.useMemo)(
                () => ({ register: o, unregister: l, portals: r }),
                [o, l, r],
              )),
              [
                r,
                (0, S.useMemo)(
                  () =>
                    function ({ children: e }) {
                      return S.createElement(e2.Provider, { value: i }, e);
                    },
                  [i],
                ),
              ]),
            H = eC(),
            { resolveContainers: $ } = (function ({
              defaultContainers: e = [],
              portals: t,
              mainTreeNode: n,
            } = {}) {
              let r = (0, K._)(() => {
                var r, o;
                let l = Z(n),
                  i = [];
                for (let t of e)
                  null !== t &&
                    (er(t)
                      ? i.push(t)
                      : "current" in t && er(t.current) && i.push(t.current));
                if (null != t && t.current) for (let e of t.current) i.push(e);
                for (let e of null !=
                (r =
                  null == l ? void 0 : l.querySelectorAll("html > *, body > *"))
                  ? r
                  : [])
                  e !== document.body &&
                    e !== document.head &&
                    er(e) &&
                    "headlessui-portal-root" !== e.id &&
                    ((n &&
                      (e.contains(n) ||
                        e.contains(
                          null == (o = null == n ? void 0 : n.getRootNode())
                            ? void 0
                            : o.host,
                        ))) ||
                      i.some((t) => e.contains(t)) ||
                      i.push(e));
                return i;
              });
              return {
                resolveContainers: r,
                contains: (0, K._)((e) => r().some((t) => t.contains(e))),
              };
            })({
              mainTreeNode: H,
              portals: U,
              defaultContainers: [
                {
                  get current() {
                    var W;
                    return null != (W = N.panelRef.current) ? W : x.current;
                  },
                },
              ],
            }),
            V = null !== T && (T & eN.Uw.Closing) === eN.Uw.Closing;
          !(function (e, { allowed: t, disallowed: n } = {}) {
            let r = z(e, "inert-others");
            (0, G.s)(() => {
              var e, o;
              if (!r) return;
              let l = (0, k.e)();
              for (let t of null != (e = null == n ? void 0 : n()) ? e : [])
                t && l.add(en(t));
              let i = null != (o = null == t ? void 0 : t()) ? o : [];
              for (let e of i) {
                if (!e) continue;
                let t = Z(e);
                if (!t) continue;
                let n = e.parentElement;
                for (; n && n !== t.body; ) {
                  for (let e of n.children)
                    i.some((t) => e.contains(t)) || l.add(en(e));
                  n = n.parentElement;
                }
              }
              return l.dispose;
            }, [r, t, n]);
          })(!E && !V && j, {
            allowed: (0, K._)(() => {
              var e, t;
              return [
                null !=
                (t =
                  null == (e = x.current)
                    ? void 0
                    : e.closest("[data-headlessui-portal]"))
                  ? t
                  : null,
              ];
            }),
            disallowed: (0, K._)(() => {
              var e;
              return [
                null !=
                (e =
                  null == H
                    ? void 0
                    : H.closest("body > *:not(#headlessui-portal-root)"))
                  ? e
                  : null,
              ];
            }),
          });
          let q = X.get(null);
          (0, G.s)(() => {
            if (j) return (q.actions.push(p), () => q.actions.pop(p));
          }, [q, p, j]);
          let J = B(
            q,
            (0, S.useCallback)((e) => q.selectors.isTop(e, p), [q, p]),
          );
          ((u = (0, P.Y)((e) => {
            (e.preventDefault(), D());
          })),
            (a = (0, S.useCallback)(
              function (e, t) {
                if (e.defaultPrevented) return;
                let n = t(e);
                if (
                  null !== n &&
                  n.getRootNode().contains(n) &&
                  n.isConnected
                ) {
                  for (let t of (function e(t) {
                    return "function" == typeof t
                      ? e(t())
                      : Array.isArray(t) || t instanceof Set
                        ? t
                        : [t];
                  })($))
                    if (
                      null !== t &&
                      (t.contains(n) ||
                        (e.composed && e.composedPath().includes(t)))
                    )
                      return;
                  return (
                    (function (e, t = 0) {
                      var n;
                      return (
                        e !== (null == (n = Z(e)) ? void 0 : n.body) &&
                        (0, I.Y)(t, {
                          0: () => e.matches(ei),
                          1() {
                            let t = e;
                            for (; null !== t; ) {
                              if (t.matches(ei)) return !0;
                              t = t.parentElement;
                            }
                            return !1;
                          },
                        })
                      );
                    })(n, ed.Loose) ||
                      -1 === n.tabIndex ||
                      e.preventDefault(),
                    u.current(e, n)
                  );
                }
              },
              [u, $],
            )),
            (s = (0, S.useRef)(null)),
            eg(
              J,
              "pointerdown",
              (e) => {
                var t, n;
                eh() ||
                  (s.current =
                    (null ==
                    (n = null == (t = e.composedPath) ? void 0 : t.call(e))
                      ? void 0
                      : n[0]) || e.target);
              },
              !0,
            ),
            eg(
              J,
              "pointerup",
              (e) => {
                if (eh() || !s.current) return;
                let t = s.current;
                return ((s.current = null), a(e, () => t));
              },
              !0,
            ),
            (c = (0, S.useRef)({ x: 0, y: 0 })),
            eg(
              J,
              "touchstart",
              (e) => {
                ((c.current.x = e.touches[0].clientX),
                  (c.current.y = e.touches[0].clientY));
              },
              !0,
            ),
            eg(
              J,
              "touchend",
              (e) => {
                let t = {
                  x: e.changedTouches[0].clientX,
                  y: e.changedTouches[0].clientY,
                };
                if (
                  !(
                    Math.abs(t.x - c.current.x) >= 30 ||
                    Math.abs(t.y - c.current.y) >= 30
                  )
                )
                  return a(e, () => (el(e.target) ? e.target : null));
              },
              !0,
            ),
            eb(
              J,
              "blur",
              (e) =>
                a(e, () => {
                  var e;
                  return eo((e = window.document.activeElement)) &&
                    "IFRAME" === e.nodeName
                    ? window.document.activeElement
                    : null;
                }),
              !0,
            ),
            (function (
              e,
              t = "undefined" != typeof document ? document.defaultView : null,
              n,
            ) {
              let r = z(e, "escape");
              C(t, "keydown", (e) => {
                r && (e.defaultPrevented || (e.key === F.Escape && n(e)));
              });
            })(J, null == _ ? void 0 : _.defaultView, (e) => {
              (e.preventDefault(),
                e.stopPropagation(),
                document.activeElement &&
                  "blur" in document.activeElement &&
                  "function" == typeof document.activeElement.blur &&
                  document.activeElement.blur(),
                D());
            }),
            (function (e, t, n = () => [document.body]) {
              !(function (e, t, n = () => ({ containers: [] })) {
                let r = (0, S.useSyncExternalStore)(
                    ek.subscribe,
                    ek.getSnapshot,
                    ek.getSnapshot,
                  ),
                  o = t ? r.get(t) : void 0;
                (o && o.count,
                  (0, G.s)(() => {
                    if (!(!t || !e))
                      return (
                        ek.dispatch("PUSH", t, n),
                        () => ek.dispatch("POP", t, n)
                      );
                  }, [e, t]));
              })(z(e, "scroll-lock"), t, (e) => {
                var t;
                return {
                  containers: [...(null != (t = e.containers) ? t : []), n],
                };
              });
            })(!E && !V && j, _, $),
            (d = (0, P.Y)((e) => {
              let t = e.getBoundingClientRect();
              0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && D();
            })),
            (0, S.useEffect)(() => {
              if (!j) return;
              let e = null === x ? null : eo(x) ? x : x.current;
              if (!e) return;
              let t = (0, k.e)();
              if ("undefined" != typeof ResizeObserver) {
                let n = new ResizeObserver(() => d.current(e));
                (n.observe(e), t.add(() => n.disconnect()));
              }
              if ("undefined" != typeof IntersectionObserver) {
                let n = new IntersectionObserver(() => d.current(e));
                (n.observe(e), t.add(() => n.disconnect()));
              }
              return () => t.dispose();
            }, [x, d, j]));
          let [Q, ee] = (function () {
              let [e, t] = (0, S.useState)([]);
              return [
                e.length > 0 ? e.join(" ") : void 0,
                (0, S.useMemo)(
                  () =>
                    function (e) {
                      let n = (0, K._)(
                          (e) => (
                            t((t) => [...t, e]),
                            () =>
                              t((t) => {
                                let n = t.slice(),
                                  r = n.indexOf(e);
                                return (-1 !== r && n.splice(r, 1), n);
                              })
                          ),
                        ),
                        r = (0, S.useMemo)(
                          () => ({
                            register: n,
                            slot: e.slot,
                            name: e.name,
                            props: e.props,
                            value: e.value,
                          }),
                          [n, e.slot, e.name, e.props, e.value],
                        );
                      return S.createElement(
                        ej.Provider,
                        { value: r },
                        e.children,
                      );
                    },
                  [t],
                ),
              ];
            })(),
            et = (0, S.useMemo)(
              () => [
                { dialogState: R, close: D, setTitleId: M, unmount: y },
                N,
              ],
              [R, D, M, y, N],
            ),
            eu = ex({ open: 0 === R }),
            ea = {
              ref: A,
              id: p,
              role: g,
              tabIndex: -1,
              "aria-modal": E ? void 0 : 0 === R || void 0,
              "aria-labelledby": N.titleId,
              "aria-describedby": Q,
              unmount: y,
            },
            es = !(function () {
              var e;
              let [t] = (0, S.useState)(() =>
                  "undefined" != typeof window &&
                  "function" == typeof window.matchMedia
                    ? window.matchMedia("(pointer: coarse)")
                    : null,
                ),
                [n, r] = (0, S.useState)(
                  null != (e = null == t ? void 0 : t.matches) && e,
                );
              return (
                (0, G.s)(() => {
                  if (t)
                    return (
                      t.addEventListener("change", e),
                      () => t.removeEventListener("change", e)
                    );
                  function e(e) {
                    r(e.matches);
                  }
                }, [t]),
                n
              );
            })(),
            ec = eq.None;
          j &&
            !E &&
            ((ec |= eq.RestoreFocus),
            (ec |= eq.TabLock),
            b && (ec |= eq.AutoFocus),
            es && (ec |= eq.InitialFocus));
          let ef = (0, ey.Ci)();
          return S.createElement(
            eN.$x,
            null,
            S.createElement(
              eD,
              { force: !0 },
              S.createElement(
                e3,
                null,
                S.createElement(
                  te.Provider,
                  { value: et },
                  S.createElement(
                    e9,
                    { target: x },
                    S.createElement(
                      eD,
                      { force: !1 },
                      S.createElement(
                        ee,
                        { slot: eu },
                        S.createElement(
                          Y,
                          null,
                          S.createElement(
                            eG,
                            {
                              initialFocus: h,
                              initialFocusFallback: x,
                              containers: $,
                              features: ec,
                            },
                            S.createElement(
                              eR,
                              { value: D },
                              ef({
                                ourProps: ea,
                                theirProps: w,
                                slot: eu,
                                defaultTag: to,
                                features: tl,
                                visible: 0 === R,
                                name: "Dialog",
                              }),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          );
        }),
        to = "div",
        tl = ey.Ac.RenderStrategy | ey.Ac.Static,
        ti = Object.assign(
          (0, ey.FX)(function (e, t) {
            let { transition: n = !1, open: r, ...o } = e,
              l = (0, eN.O_)(),
              i = e.hasOwnProperty("open") || null !== l,
              u = e.hasOwnProperty("onClose");
            if (!i && !u)
              throw Error(
                "You have to provide an `open` and an `onClose` prop to the `Dialog` component.",
              );
            if (!i)
              throw Error(
                "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.",
              );
            if (!u)
              throw Error(
                "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.",
              );
            if (!l && "boolean" != typeof e.open)
              throw Error(
                `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`,
              );
            if ("function" != typeof e.onClose)
              throw Error(
                `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`,
              );
            return (void 0 !== r || n) && !o.static
              ? S.createElement(
                  eP,
                  null,
                  S.createElement(
                    e6.e,
                    { show: r, transition: n, unmount: o.unmount },
                    S.createElement(tr, { ref: t, ...o }),
                  ),
                )
              : S.createElement(
                  eP,
                  null,
                  S.createElement(tr, { ref: t, open: r, ...o }),
                );
          }),
          {
            Panel: (0, ey.FX)(function (e, t) {
              let n = (0, S.useId)(),
                {
                  id: r = `headlessui-dialog-panel-${n}`,
                  transition: o = !1,
                  ...l
                } = e,
                [{ dialogState: i, unmount: u }, a] = tt("Dialog.Panel"),
                s = (0, eA.P)(t, a.panelRef),
                c = ex({ open: 0 === i }),
                d = (0, K._)((e) => {
                  e.stopPropagation();
                }),
                f = o ? e6._ : S.Fragment,
                p = (0, ey.Ci)();
              return S.createElement(
                f,
                { ...(o ? { unmount: u } : {}) },
                p({
                  ourProps: { ref: s, id: r, onClick: d },
                  theirProps: l,
                  slot: c,
                  defaultTag: "div",
                  name: "Dialog.Panel",
                }),
              );
            }),
            Title:
              ((0, ey.FX)(function (e, t) {
                let { transition: n = !1, ...r } = e,
                  [{ dialogState: o, unmount: l }] = tt("Dialog.Backdrop"),
                  i = ex({ open: 0 === o }),
                  u = n ? e6._ : S.Fragment,
                  a = (0, ey.Ci)();
                return S.createElement(
                  u,
                  { ...(n ? { unmount: l } : {}) },
                  a({
                    ourProps: { ref: t, "aria-hidden": !0 },
                    theirProps: r,
                    slot: i,
                    defaultTag: "div",
                    name: "Dialog.Backdrop",
                  }),
                );
              }),
              (0, ey.FX)(function (e, t) {
                let n = (0, S.useId)(),
                  { id: r = `headlessui-dialog-title-${n}`, ...o } = e,
                  [{ dialogState: l, setTitleId: i }] = tt("Dialog.Title"),
                  u = (0, eA.P)(t);
                (0, S.useEffect)(() => (i(r), () => i(null)), [r, i]);
                let a = ex({ open: 0 === l });
                return (0, ey.Ci)()({
                  ourProps: { ref: u, id: r },
                  theirProps: o,
                  slot: a,
                  defaultTag: "h2",
                  name: "Dialog.Title",
                });
              })),
            Description: eI,
          },
        );
    },
    23912: (e, t, n) => {
      n.d(t, { a: () => l });
      var r = n(12115),
        o = n(35409);
      function l() {
        let e = (0, r.useRef)(!1);
        return (
          (0, o.s)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            [],
          ),
          e
        );
      }
    },
    27579: (e, t, n) => {
      let r;
      n.d(t, { $x: () => s, El: () => a, O_: () => u, Uw: () => i });
      var o = n(12115);
      let l = (0, o.createContext)(null);
      l.displayName = "OpenClosedContext";
      var i =
        (((r = i || {})[(r.Open = 1)] = "Open"),
        (r[(r.Closed = 2)] = "Closed"),
        (r[(r.Closing = 4)] = "Closing"),
        (r[(r.Opening = 8)] = "Opening"),
        r);
      function u() {
        return (0, o.useContext)(l);
      }
      function a({ value: e, children: t }) {
        return o.createElement(l.Provider, { value: e }, t);
      }
      function s({ children: e }) {
        return o.createElement(l.Provider, { value: null }, e);
      }
    },
    30789: (e, t, n) => {
      e.exports = n(89043);
    },
    32026: (e, t, n) => {
      let r, o;
      n.d(t, { e: () => N, _: () => R });
      var l,
        i,
        u = n(12115),
        a = n(3976),
        s = n(36667),
        c = n(23912),
        d = n(35409),
        f = n(90722),
        p = n(38659),
        m = n(14695),
        v = n(21919),
        h = n(87358);
      void 0 !== h &&
        "undefined" != typeof globalThis &&
        "undefined" != typeof Element &&
        (null == (l = null == h ? void 0 : h.env) ? void 0 : l.NODE_ENV) ===
          "test" &&
        void 0 ===
          (null == (i = null == Element ? void 0 : Element.prototype)
            ? void 0
            : i.getAnimations) &&
        (Element.prototype.getAnimations = function () {
          return (
            console.warn(
              [
                "Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.",
                "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.",
                "",
                "Example usage:",
                "```js",
                "import { mockAnimationsApi } from 'jsdom-testing-mocks'",
                "mockAnimationsApi()",
                "```",
              ].join(`
`),
            ),
            []
          );
        });
      var g =
          (((r = g || {})[(r.None = 0)] = "None"),
          (r[(r.Closed = 1)] = "Closed"),
          (r[(r.Enter = 2)] = "Enter"),
          (r[(r.Leave = 4)] = "Leave"),
          r),
        b = n(27579),
        E = n(54429),
        y = n(84465),
        w = n(82728);
      function S(e) {
        var t;
        return (
          !!(
            e.enter ||
            e.enterFrom ||
            e.enterTo ||
            e.leave ||
            e.leaveFrom ||
            e.leaveTo
          ) ||
          !(0, w.zv)(null != (t = e.as) ? t : T) ||
          1 === u.Children.count(e.children)
        );
      }
      let F = (0, u.createContext)(null);
      F.displayName = "TransitionContext";
      var P = (((o = P || {}).Visible = "visible"), (o.Hidden = "hidden"), o);
      let C = (0, u.createContext)(null);
      function O(e) {
        return "children" in e
          ? O(e.children)
          : e.current
              .filter(({ el: e }) => null !== e.current)
              .filter(({ state: e }) => "visible" === e).length > 0;
      }
      function k(e, t) {
        let n = (0, f.Y)(e),
          r = (0, u.useRef)([]),
          o = (0, c.a)(),
          l = (0, a.L)(),
          i = (0, s._)((e, t = w.mK.Hidden) => {
            let i = r.current.findIndex(({ el: t }) => t === e);
            -1 !== i &&
              ((0, y.Y)(t, {
                [w.mK.Unmount]() {
                  r.current.splice(i, 1);
                },
                [w.mK.Hidden]() {
                  r.current[i].state = "hidden";
                },
              }),
              l.microTask(() => {
                var e;
                !O(r) && o.current && (null == (e = n.current) || e.call(n));
              }));
          }),
          d = (0, s._)((e) => {
            let t = r.current.find(({ el: t }) => t === e);
            return (
              t
                ? "visible" !== t.state && (t.state = "visible")
                : r.current.push({ el: e, state: "visible" }),
              () => i(e, w.mK.Unmount)
            );
          }),
          p = (0, u.useRef)([]),
          m = (0, u.useRef)(Promise.resolve()),
          v = (0, u.useRef)({ enter: [], leave: [] }),
          h = (0, s._)((e, n, r) => {
            (p.current.splice(0),
              t &&
                (t.chains.current[n] = t.chains.current[n].filter(
                  ([t]) => t !== e,
                )),
              null == t ||
                t.chains.current[n].push([
                  e,
                  new Promise((e) => {
                    p.current.push(e);
                  }),
                ]),
              null == t ||
                t.chains.current[n].push([
                  e,
                  new Promise((e) => {
                    Promise.all(v.current[n].map(([e, t]) => t)).then(() =>
                      e(),
                    );
                  }),
                ]),
              "enter" === n
                ? (m.current = m.current
                    .then(() => (null == t ? void 0 : t.wait.current))
                    .then(() => r(n)))
                : r(n));
          }),
          g = (0, s._)((e, t, n) => {
            Promise.all(v.current[t].splice(0).map(([e, t]) => t))
              .then(() => {
                var e;
                null == (e = p.current.shift()) || e();
              })
              .then(() => n(t));
          });
        return (0, u.useMemo)(
          () => ({
            children: r,
            register: d,
            unregister: i,
            onStart: h,
            onStop: g,
            wait: m,
            chains: v,
          }),
          [d, i, r, h, g, v, m],
        );
      }
      C.displayName = "NestingContext";
      let T = u.Fragment,
        x = w.Ac.RenderStrategy,
        A = (0, w.FX)(function (e, t) {
          let { show: n, appear: r = !1, unmount: o = !0, ...l } = e,
            i = (0, u.useRef)(null),
            a = S(e),
            c = (0, m.P)(...(a ? [i, t] : null === t ? [] : [t]));
          (0, p.g)();
          let f = (0, b.O_)();
          if (
            (void 0 === n && null !== f && (n = (f & b.Uw.Open) === b.Uw.Open),
            void 0 === n)
          )
            throw Error(
              "A <Transition /> is used but it is missing a `show={true | false}` prop.",
            );
          let [v, h] = (0, u.useState)(n ? "visible" : "hidden"),
            g = k(() => {
              n || h("hidden");
            }),
            [E, y] = (0, u.useState)(!0),
            P = (0, u.useRef)([n]);
          (0, d.s)(() => {
            !1 !== E &&
              P.current[P.current.length - 1] !== n &&
              (P.current.push(n), y(!1));
          }, [P, n]);
          let T = (0, u.useMemo)(
            () => ({ show: n, appear: r, initial: E }),
            [n, r, E],
          );
          (0, d.s)(() => {
            n ? h("visible") : O(g) || null === i.current || h("hidden");
          }, [n, g]);
          let A = { unmount: o },
            R = (0, s._)(() => {
              var t;
              (E && y(!1), null == (t = e.beforeEnter) || t.call(e));
            }),
            N = (0, s._)(() => {
              var t;
              (E && y(!1), null == (t = e.beforeLeave) || t.call(e));
            }),
            L = (0, w.Ci)();
          return u.createElement(
            C.Provider,
            { value: g },
            u.createElement(
              F.Provider,
              { value: T },
              L({
                ourProps: {
                  ...A,
                  as: u.Fragment,
                  children: u.createElement(_, {
                    ref: c,
                    ...A,
                    ...l,
                    beforeEnter: R,
                    beforeLeave: N,
                  }),
                },
                theirProps: {},
                defaultTag: u.Fragment,
                features: x,
                visible: "visible" === v,
                name: "Transition",
              }),
            ),
          );
        }),
        _ = (0, w.FX)(function (e, t) {
          var n, r;
          let {
              transition: o = !0,
              beforeEnter: l,
              afterEnter: i,
              beforeLeave: c,
              afterLeave: f,
              enter: h,
              enterFrom: g,
              enterTo: P,
              entered: A,
              leave: _,
              leaveFrom: R,
              leaveTo: N,
              ...L
            } = e,
            [D, M] = (0, u.useState)(null),
            j = (0, u.useRef)(null),
            I = S(e),
            U = (0, m.P)(...(I ? [j, t, M] : null === t ? [] : [t])),
            Y = null == (n = L.unmount) || n ? w.mK.Unmount : w.mK.Hidden,
            {
              show: H,
              appear: $,
              initial: W,
            } = (function () {
              let e = (0, u.useContext)(F);
              if (null === e)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
                );
              return e;
            })(),
            [X, V] = (0, u.useState)(H ? "visible" : "hidden"),
            K = (function () {
              let e = (0, u.useContext)(C);
              if (null === e)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
                );
              return e;
            })(),
            { register: B, unregister: q } = K;
          ((0, d.s)(() => B(j), [B, j]),
            (0, d.s)(() => {
              if (Y === w.mK.Hidden && j.current)
                return H && "visible" !== X
                  ? void V("visible")
                  : (0, y.Y)(X, { hidden: () => q(j), visible: () => B(j) });
            }, [X, j, B, q, H, Y]));
          let G = (0, p.g)();
          (0, d.s)(() => {
            if (I && G && "visible" === X && null === j.current)
              throw Error(
                "Did you forget to passthrough the `ref` to the actual DOM node?",
              );
          }, [j, X, G, I]);
          let z = W && !$,
            Z = $ && H && W,
            J = (0, u.useRef)(!1),
            Q = k(() => {
              J.current || (V("hidden"), q(j));
            }, K),
            ee = (0, s._)((e) => {
              ((J.current = !0),
                Q.onStart(j, e ? "enter" : "leave", (e) => {
                  "enter" === e
                    ? null == l || l()
                    : "leave" === e && (null == c || c());
                }));
            }),
            et = (0, s._)((e) => {
              let t = e ? "enter" : "leave";
              ((J.current = !1),
                Q.onStop(j, t, (e) => {
                  "enter" === e
                    ? null == i || i()
                    : "leave" === e && (null == f || f());
                }),
                "leave" !== t || O(Q) || (V("hidden"), q(j)));
            });
          (0, u.useEffect)(() => {
            (I && o) || (ee(H), et(H));
          }, [H, I, o]);
          let [, en] = (function (e, t, n, r) {
              let [o, l] = (0, u.useState)(n),
                {
                  hasFlag: i,
                  addFlag: s,
                  removeFlag: c,
                } = (function (e = 0) {
                  let [t, n] = (0, u.useState)(e),
                    r = (0, u.useCallback)((e) => n(e), []),
                    o = (0, u.useCallback)((e) => n((t) => t | e), []),
                    l = (0, u.useCallback)((e) => (t & e) === e, [t]);
                  return {
                    flags: t,
                    setFlag: r,
                    addFlag: o,
                    hasFlag: l,
                    removeFlag: (0, u.useCallback)((e) => n((t) => t & ~e), []),
                    toggleFlag: (0, u.useCallback)((e) => n((t) => t ^ e), []),
                  };
                })(e && o ? 3 : 0),
                f = (0, u.useRef)(!1),
                p = (0, u.useRef)(!1),
                m = (0, a.L)();
              return (
                (0, d.s)(() => {
                  var o;
                  if (e) {
                    if ((n && l(!0), !t)) {
                      n && s(3);
                      return;
                    }
                    return (
                      null == (o = null == r ? void 0 : r.start) ||
                        o.call(r, n),
                      (function (
                        e,
                        { prepare: t, run: n, done: r, inFlight: o },
                      ) {
                        let l = (0, v.e)();
                        return (
                          (function (e, { inFlight: t, prepare: n }) {
                            if (null != t && t.current) return n();
                            let r = e.style.transition;
                            ((e.style.transition = "none"),
                              n(),
                              e.offsetHeight,
                              (e.style.transition = r));
                          })(e, { prepare: t, inFlight: o }),
                          l.nextFrame(() => {
                            (n(),
                              l.requestAnimationFrame(() => {
                                l.add(
                                  (function (e, t) {
                                    var n, r;
                                    let o = (0, v.e)();
                                    if (!e) return o.dispose;
                                    let l = !1;
                                    o.add(() => {
                                      l = !0;
                                    });
                                    let i =
                                      null !=
                                      (r =
                                        null == (n = e.getAnimations)
                                          ? void 0
                                          : n
                                              .call(e)
                                              .filter(
                                                (e) =>
                                                  e instanceof CSSTransition,
                                              ))
                                        ? r
                                        : [];
                                    return (
                                      0 === i.length
                                        ? t()
                                        : Promise.allSettled(
                                            i.map((e) => e.finished),
                                          ).then(() => {
                                            l || t();
                                          }),
                                      o.dispose
                                    );
                                  })(e, r),
                                );
                              }));
                          }),
                          l.dispose
                        );
                      })(t, {
                        inFlight: f,
                        prepare() {
                          (p.current
                            ? (p.current = !1)
                            : (p.current = f.current),
                            (f.current = !0),
                            p.current || (n ? (s(3), c(4)) : (s(4), c(2))));
                        },
                        run() {
                          p.current
                            ? n
                              ? (c(3), s(4))
                              : (c(4), s(3))
                            : n
                              ? c(1)
                              : s(1);
                        },
                        done() {
                          var e, o, i, u;
                          (p.current &&
                            (null !=
                            (u =
                              null == (i = (o = t).getAnimations)
                                ? void 0
                                : i.call(o))
                              ? u
                              : []
                            ).some(
                              (e) =>
                                e instanceof CSSTransition &&
                                "finished" !== e.playState,
                            )) ||
                            ((f.current = !1),
                            c(7),
                            n || l(!1),
                            null == (e = null == r ? void 0 : r.end) ||
                              e.call(r, n));
                        },
                      })
                    );
                  }
                }, [e, n, t, m]),
                e
                  ? [
                      o,
                      {
                        closed: i(1),
                        enter: i(2),
                        leave: i(4),
                        transition: i(2) || i(4),
                      },
                    ]
                  : [
                      n,
                      {
                        closed: void 0,
                        enter: void 0,
                        leave: void 0,
                        transition: void 0,
                      },
                    ]
              );
            })(!(!o || !I || !G || z), D, H, { start: ee, end: et }),
            er = (0, w.oE)({
              ref: U,
              className:
                (null ==
                (r = (0, E.x)(
                  L.className,
                  Z && h,
                  Z && g,
                  en.enter && h,
                  en.enter && en.closed && g,
                  en.enter && !en.closed && P,
                  en.leave && _,
                  en.leave && !en.closed && R,
                  en.leave && en.closed && N,
                  !en.transition && H && A,
                ))
                  ? void 0
                  : r.trim()) || void 0,
              ...(function (e) {
                let t = {};
                for (let n in e) !0 === e[n] && (t[`data-${n}`] = "");
                return t;
              })(en),
            }),
            eo = 0;
          ("visible" === X && (eo |= b.Uw.Open),
            "hidden" === X && (eo |= b.Uw.Closed),
            H && "hidden" === X && (eo |= b.Uw.Opening),
            H || "visible" !== X || (eo |= b.Uw.Closing));
          let el = (0, w.Ci)();
          return u.createElement(
            C.Provider,
            { value: Q },
            u.createElement(
              b.El,
              { value: eo },
              el({
                ourProps: er,
                theirProps: L,
                defaultTag: T,
                features: x,
                visible: "visible" === X,
                name: "Transition.Child",
              }),
            ),
          );
        }),
        R = (0, w.FX)(function (e, t) {
          let n = null !== (0, u.useContext)(F),
            r = null !== (0, b.O_)();
          return u.createElement(
            u.Fragment,
            null,
            !n && r
              ? u.createElement(A, { ref: t, ...e })
              : u.createElement(_, { ref: t, ...e }),
          );
        }),
        N = Object.assign(A, { Child: R, Root: A });
    },
    35409: (e, t, n) => {
      n.d(t, { s: () => l });
      var r = n(12115),
        o = n(19887);
      let l = (e, t) => {
        o._.isServer ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t);
      };
    },
    36667: (e, t, n) => {
      n.d(t, { _: () => l });
      var r = n(12115),
        o = n(90722);
      let l = function (e) {
        let t = (0, o.Y)(e);
        return r.useCallback((...e) => t.current(...e), [t]);
      };
    },
    38406: (e, t, n) => {
      n.d(t, { _: () => r });
      function r(e) {
        "function" == typeof queueMicrotask
          ? queueMicrotask(e)
          : Promise.resolve()
              .then(e)
              .catch((e) =>
                setTimeout(() => {
                  throw e;
                }),
              );
      }
    },
    38659: (e, t, n) => {
      n.d(t, { g: () => i });
      var r,
        o = n(12115),
        l = n(19887);
      function i() {
        let e,
          t =
            ((e = "undefined" == typeof document),
            (0, (r || (r = n.t(o, 2))).useSyncExternalStore)(
              () => () => {},
              () => !1,
              () => !e,
            )),
          [i, u] = o.useState(l._.isHandoffComplete);
        return (
          i && !1 === l._.isHandoffComplete && u(!1),
          o.useEffect(() => {
            !0 !== i && u(!0);
          }, [i]),
          o.useEffect(() => l._.handoff(), []),
          !t && i
        );
      }
    },
    54429: (e, t, n) => {
      n.d(t, { x: () => r });
      function r(...e) {
        return Array.from(
          new Set(e.flatMap((e) => ("string" == typeof e ? e.split(" ") : []))),
        )
          .filter(Boolean)
          .join(" ");
      }
    },
    82728: (e, t, n) => {
      let r, o;
      n.d(t, {
        Ac: () => a,
        Ci: () => c,
        FX: () => m,
        mK: () => s,
        oE: () => v,
        zv: () => g,
      });
      var l = n(12115),
        i = n(54429),
        u = n(84465),
        a =
          (((r = a || {})[(r.None = 0)] = "None"),
          (r[(r.RenderStrategy = 1)] = "RenderStrategy"),
          (r[(r.Static = 2)] = "Static"),
          r),
        s =
          (((o = s || {})[(o.Unmount = 0)] = "Unmount"),
          (o[(o.Hidden = 1)] = "Hidden"),
          o);
      function c() {
        let e,
          t,
          n =
            ((e = (0, l.useRef)([])),
            (t = (0, l.useCallback)((t) => {
              for (let n of e.current)
                null != n && ("function" == typeof n ? n(t) : (n.current = t));
            }, [])),
            (...n) => {
              if (!n.every((e) => null == e)) return ((e.current = n), t);
            });
        return (0, l.useCallback)(
          (e) =>
            (function ({
              ourProps: e,
              theirProps: t,
              slot: n,
              defaultTag: r,
              features: o,
              visible: l = !0,
              name: i,
              mergeRefs: a,
            }) {
              a = null != a ? a : f;
              let s = p(t, e);
              if (l) return d(s, n, r, i, a);
              let c = null != o ? o : 0;
              if (2 & c) {
                let { static: e = !1, ...t } = s;
                if (e) return d(t, n, r, i, a);
              }
              if (1 & c) {
                let { unmount: e = !0, ...t } = s;
                return (0, u.Y)(+!e, {
                  0: () => null,
                  1: () =>
                    d(
                      { ...t, hidden: !0, style: { display: "none" } },
                      n,
                      r,
                      i,
                      a,
                    ),
                });
              }
              return d(s, n, r, i, a);
            })({ mergeRefs: n, ...e }),
          [n],
        );
      }
      function d(e, t = {}, n, r, o) {
        let {
            as: u = n,
            children: a,
            refName: s = "ref",
            ...c
          } = h(e, ["unmount", "static"]),
          f = void 0 !== e.ref ? { [s]: e.ref } : {},
          m = "function" == typeof a ? a(t) : a;
        ("className" in c &&
          c.className &&
          "function" == typeof c.className &&
          (c.className = c.className(t)),
          c["aria-labelledby"] &&
            c["aria-labelledby"] === c.id &&
            (c["aria-labelledby"] = void 0));
        let b = {};
        if (t) {
          let e = !1,
            n = [];
          for (let [r, o] of Object.entries(t))
            ("boolean" == typeof o && (e = !0),
              !0 === o &&
                n.push(r.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`)));
          if (e)
            for (let e of ((b["data-headlessui-state"] = n.join(" ")), n))
              b[`data-${e}`] = "";
        }
        if (
          g(u) &&
          (Object.keys(v(c)).length > 0 || Object.keys(v(b)).length > 0)
        )
          if (
            !(0, l.isValidElement)(m) ||
            (Array.isArray(m) && m.length > 1) ||
            g(m.type)
          ) {
            if (Object.keys(v(c)).length > 0)
              throw Error(
                [
                  'Passing props on "Fragment"!',
                  "",
                  `The current component <${r} /> is rendering a "Fragment".`,
                  "However we need to passthrough the following props:",
                  Object.keys(v(c))
                    .concat(Object.keys(v(b)))
                    .map((e) => `  - ${e}`).join(`
`),
                  "",
                  "You can apply a few solutions:",
                  [
                    'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                    "Render a single element as the child so that we can forward the props onto that element.",
                  ].map((e) => `  - ${e}`).join(`
`),
                ].join(`
`),
              );
          } else {
            var E;
            let e = m.props,
              t = null == e ? void 0 : e.className,
              n =
                "function" == typeof t
                  ? (...e) => (0, i.x)(t(...e), c.className)
                  : (0, i.x)(t, c.className),
              r = p(m.props, v(h(c, ["ref"])));
            for (let e in b) e in r && delete b[e];
            return (0, l.cloneElement)(
              m,
              Object.assign(
                {},
                r,
                b,
                f,
                {
                  ref: o(
                    ((E = m),
                    l.version.split(".")[0] >= "19" ? E.props.ref : E.ref),
                    f.ref,
                  ),
                },
                n ? { className: n } : {},
              ),
            );
          }
        return (0, l.createElement)(
          u,
          Object.assign({}, h(c, ["ref"]), !g(u) && f, !g(u) && b),
          m,
        );
      }
      function f(...e) {
        return e.every((e) => null == e)
          ? void 0
          : (t) => {
              for (let n of e)
                null != n && ("function" == typeof n ? n(t) : (n.current = t));
            };
      }
      function p(...e) {
        if (0 === e.length) return {};
        if (1 === e.length) return e[0];
        let t = {},
          n = {};
        for (let r of e)
          for (let e in r)
            e.startsWith("on") && "function" == typeof r[e]
              ? (null != n[e] || (n[e] = []), n[e].push(r[e]))
              : (t[e] = r[e]);
        if (t.disabled || t["aria-disabled"])
          for (let e in n)
            /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(e) &&
              (n[e] = [
                (e) => {
                  var t;
                  return null == (t = null == e ? void 0 : e.preventDefault)
                    ? void 0
                    : t.call(e);
                },
              ]);
        for (let e in n)
          Object.assign(t, {
            [e](t, ...r) {
              for (let o of n[e]) {
                if (
                  (t instanceof Event ||
                    (null == t ? void 0 : t.nativeEvent) instanceof Event) &&
                  t.defaultPrevented
                )
                  return;
                o(t, ...r);
              }
            },
          });
        return t;
      }
      function m(e) {
        var t;
        return Object.assign((0, l.forwardRef)(e), {
          displayName: null != (t = e.displayName) ? t : e.name,
        });
      }
      function v(e) {
        let t = Object.assign({}, e);
        for (let e in t) void 0 === t[e] && delete t[e];
        return t;
      }
      function h(e, t = []) {
        let n = Object.assign({}, e);
        for (let e of t) e in n && delete n[e];
        return n;
      }
      function g(e) {
        return e === l.Fragment || e === Symbol.for("react.fragment");
      }
    },
    84465: (e, t, n) => {
      n.d(t, { Y: () => r });
      function r(e, t, ...n) {
        if (e in t) {
          let r = t[e];
          return "function" == typeof r ? r(...n) : r;
        }
        let o = Error(
          `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
            t,
          )
            .map((e) => `"${e}"`)
            .join(", ")}.`,
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(o, r), o);
      }
    },
    89043: (e, t, n) => {
      var r = n(12115),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        l = r.useSyncExternalStore,
        i = r.useRef,
        u = r.useEffect,
        a = r.useMemo,
        s = r.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, n, r, c) {
        var d = i(null);
        if (null === d.current) {
          var f = { hasValue: !1, value: null };
          d.current = f;
        } else f = d.current;
        var p = l(
          e,
          (d = a(
            function () {
              function e(e) {
                if (!u) {
                  if (
                    ((u = !0), (l = e), (e = r(e)), void 0 !== c && f.hasValue)
                  ) {
                    var t = f.value;
                    if (c(t, e)) return (i = t);
                  }
                  return (i = e);
                }
                if (((t = i), o(l, e))) return t;
                var n = r(e);
                return void 0 !== c && c(t, n)
                  ? ((l = e), t)
                  : ((l = e), (i = n));
              }
              var l,
                i,
                u = !1,
                a = void 0 === n ? null : n;
              return [
                function () {
                  return e(t());
                },
                null === a
                  ? void 0
                  : function () {
                      return e(a());
                    },
              ];
            },
            [t, n, r, c],
          ))[0],
          d[1],
        );
        return (
          u(
            function () {
              ((f.hasValue = !0), (f.value = p));
            },
            [p],
          ),
          s(p),
          p
        );
      };
    },
    90722: (e, t, n) => {
      n.d(t, { Y: () => l });
      var r = n(12115),
        o = n(35409);
      function l(e) {
        let t = (0, r.useRef)(e);
        return (
          (0, o.s)(() => {
            t.current = e;
          }, [e]),
          t
        );
      }
    },
  },
]);
