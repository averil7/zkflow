(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [177],
    {
      34180: (e, t, i) => {
        "use strict";
        i.d(t, { default: () => o });
        var a = i(95155),
          s = i(12115),
          n = i(80642),
          r = i(31574),
          l = i(5772);
        function d() {
          return (0, a.jsxs)("div", {
            className:
              "fixed inset-0 z-[9999] flex items-center justify-center bg-[#001114]",
            children: [
              (0, a.jsxs)(r.P.div, {
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.5, ease: "easeOut" },
                className: "relative flex items-center justify-center",
                children: [
                  (0, a.jsx)(r.P.div, {
                    className: "absolute rounded-full",
                    style: {
                      width: 160,
                      height: 160,
                      background:
                        "radial-gradient(circle, rgba(12,160,178,0.18) 0%, transparent 65%)",
                      filter: "blur(12px)",
                    },
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 0.5 },
                  }),
                  (0, a.jsx)(r.P.div, {
                    className: "absolute rounded-full border border-[#0CA0B2]/40",
                    style: { width: 120, height: 120 },
                    animate: { rotate: 360 },
                    transition: { repeat: 1 / 0, duration: 2.8, ease: "linear" },
                  }),
                  (0, a.jsx)(r.P.div, {
                    className: "absolute rounded-full border border-[#0CA0B2]/20",
                    style: { width: 92, height: 92 },
                    animate: { scale: [1, 1.05, 1] },
                    transition: {
                      repeat: 1 / 0,
                      duration: 1.6,
                      ease: "easeInOut",
                    },
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "relative rounded-full flex items-center justify-center",
                    style: {
                      width: 84,
                      height: 84,
                      background:
                        "linear-gradient(135deg, #0c5a66 0%, #107a8a 100%)",
                      boxShadow:
                        "0 0 24px rgba(12,160,178,0.5), inset 0 2px 8px rgba(255,255,255,0.1), inset 0 -2px 10px rgba(0,0,0,0.3)",
                    },
                    children: (0, a.jsx)(l.default, {
                      src: "/images/icons/ZKFile_Logo.png",
                      alt: "ZKFlow",
                      width: 44,
                      height: 44,
                      priority: !0,
                    }),
                  }),
                ],
              }),
              (0, a.jsx)("span", { className: "sr-only", children: "Loading" }),
            ],
          });
        }
        function o({ children: e }) {
          let [t, i] = (0, s.useState)(!0);
          return (
            (0, s.useEffect)(() => {
              let e,
                t = () => {
                  e = setTimeout(() => i(!1), 300);
                };
              "complete" === document.readyState
                ? t()
                : window.addEventListener("load", t);
              let a = setTimeout(() => i(!1), 1500);
              return () => {
                (window.removeEventListener("load", t),
                  clearTimeout(e),
                  clearTimeout(a));
              };
            }, []),
            (0, a.jsxs)("div", {
              className: "min-h-screen",
              children: [
                (0, a.jsx)(n.N, {
                  children:
                    t &&
                    (0, a.jsx)(
                      r.P.div,
                      {
                        initial: { opacity: 1 },
                        exit: { opacity: 0 },
                        transition: { duration: 0.35, ease: "easeOut" },
                        className: "fixed inset-0 z-[9999]",
                        children: (0, a.jsx)(d, {}),
                      },
                      "splash",
                    ),
                }),
                (0, a.jsx)(r.P.div, {
                  initial: { opacity: 0, y: 8 },
                  animate: { opacity: +!t, y: 8 * !!t },
                  transition: { duration: 0.35, ease: "easeOut" },
                  children: e,
                }),
              ],
            })
          );
        }
      },
      57317: (e, t, i) => {
        (Promise.resolve().then(i.t.bind(i, 66872, 23)),
          Promise.resolve().then(i.bind(i, 69520)),
          Promise.resolve().then(i.bind(i, 34180)));
      },
      61276: () => {},
      66872: () => {},
      69520: (e, t, i) => {
        "use strict";
        i.d(t, { Providers: () => u });
        var a = i(95155),
          s = i(48849),
          n = i(65284),
          r = i(70627),
          l = i(68061),
          d = i(80789),
          o = i(92401),
          c = i(12115);
        function u({ children: e }) {
          let t = (0, c.useMemo)(
              () =>
                "https://mainnet.helius-rpc.com?api-key=0e3ec6f4-ecc5-43fe-b6d5-af69f1c0e3fe",
              [],
            ),
            i = (0, c.useMemo)(() => [new l.c(), new d.d(), new o.G()], []);
          return (0, a.jsx)(s.S, {
            endpoint: t,
            children: (0, a.jsx)(n.r, {
              wallets: i,
              autoConnect: !0,
              children: (0, a.jsx)(r.I, { children: e }),
            }),
          });
        }
        i(98281);
      },
      89513: () => {},
    },
    (e) => {
      (e.O(0, [384, 956, 573, 869, 130, 441, 794, 358], () => e((e.s = 57317))),
        (_N_E = e.O()));
    },
  ]);
  