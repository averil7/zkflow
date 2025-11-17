(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    3534: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => l });
      var s = a(95155),
        r = a(68598),
        i = a(31574),
        n = a(922),
        o = a(12115);
      function l() {
        let e = (0, r.s)(),
          [t, a] = (0, n.Wx)({ triggerOnce: !1, threshold: 0.3 });
        (0, o.useEffect)(() => {
          a ? e.start("visible") : e.start("hidden");
        }, [e, a]);
        let l = "Your Private Data Layer. Prove Without Revealing.".split(" "),
          d = {
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 100 },
            },
          },
          c = {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delay: 0.1 * l.length + 0.5, duration: 0.8 },
            },
          };
        return (0, s.jsx)("section", {
          className: "relative bg-[#001114] pt-[60px] px-8",
          children: (0, s.jsxs)(i.P.div, {
            ref: t,
            variants: {
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.1 } },
            },
            initial: "hidden",
            animate: e,
            className: "max-w-[900px] mx-auto text-center",
            children: [
              (0, s.jsx)(i.P.h2, {
                variants: {
                  hidden: { opacity: 1 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                },
                initial: "hidden",
                animate: e,
                className:
                  "text-[42px] font-extrabold text-[#e8edf5] leading-[1.2] mb-6",
                style: {
                  textShadow:
                    "0 2px 8px rgba(0,0,0,0.3), 0 0 20px rgba(12,160,178,0.08)",
                  textRendering: "optimizeLegibility",
                },
                children: l.map((e, t) =>
                  (0, s.jsx)(
                    i.P.span,
                    {
                      variants: d,
                      style: { display: "inline-block", marginRight: "0.25em" },
                      children: e,
                    },
                    t,
                  ),
                ),
              }),
              (0, s.jsx)(i.P.p, {
                variants: c,
                initial: "hidden",
                animate: e,
                className:
                  "text-[16px] text-[#a8b4c8] max-w-[600px] mx-auto leading-[1.6] mb-8 font-medium",
                style: { textShadow: "0 1px 3px rgba(0,0,0,0.2)" },
                children:
                  "ZKFlow is a sovereign data conduit: store, share, and verify—without ever surrendering control. Backed by hardened cloud infrastructure and protected by cryptography you hold.",
              }),
            ],
          }),
        });
      }
    },
    14545: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => g });
      var s = a(95155),
        r = a(68469),
        i = a(5772),
        n = a(98500),
        o = a.n(n),
        l = a(42021),
        d = a(68598),
        c = a(61792),
        x = a(31574),
        p = a(12115),
        u = a(81687);
      function g() {
        let { token: e } = (0, u.E)(),
          t = (0, p.useRef)(null),
          a = (0, p.useRef)(null),
          n = (0, d.s)(),
          g = (0, c.W)(a, { amount: 0.3 });
        ((0, p.useEffect)(() => {
          let e = (e) => {
              if (!t.current) return;
              let a = t.current.getBoundingClientRect(),
                s = e.clientX - a.left,
                r = e.clientY - a.top;
              (t.current.style.setProperty("--mouse-x", `${s}px`),
                t.current.style.setProperty("--mouse-y", `${r}px`));
            },
            a = t.current;
          return (
            a?.addEventListener("mousemove", e),
            () => {
              a?.removeEventListener("mousemove", e);
            }
          );
        }, []),
          (0, p.useEffect)(() => {
            g ? n.start("visible") : n.start("hidden");
          }, [g, n]));
        let h = {
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
        };
        return (0, s.jsxs)("section", {
          ref: t,
          className:
            "relative min-h-screen flex items-center justify-center overflow-hidden pt-[56px] pb-10 sm:pb-0 bg-black bg-center bg-cover bg-no-repeat group",
          style: { backgroundImage: "url(/images/bg/bg_home.png)" },
          children: [
            (0, s.jsxs)("div", {
              className:
                "absolute top-0 left-0 w-full h-1/2 pointer-events-none",
              children: [
                (0, s.jsx)("div", {
                  className: "absolute inset-0",
                  style: {
                    backgroundImage:
                      "radial-gradient(circle at center, rgba(12, 160, 178, 0.2) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                    maskImage:
                      "linear-gradient(to bottom, black 20%, transparent 100%)",
                  },
                }),
                (0, s.jsx)("div", {
                  className:
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  style: {
                    backgroundImage:
                      "radial-gradient(circle at center, rgba(14, 200, 217, 0.8) 1px, transparent 2px)",
                    backgroundSize: "20px 20px",
                    maskImage:
                      "radial-gradient(100px circle at var(--mouse-x) var(--mouse-y), black 0%, transparent 75%)",
                  },
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: "hidden",
              children: (0, s.jsxs)("svg", {
                className: "absolute inset-0 w-full h-full",
                viewBox: "0 0 1440 1024",
                preserveAspectRatio: "xMidYMid slice",
                shapeRendering: "geometricPrecision",
                children: [
                  (0, s.jsxs)("defs", {
                    children: [
                      (0, s.jsxs)("linearGradient", {
                        id: "wave1Grad",
                        x1: "0%",
                        y1: "0%",
                        x2: "0%",
                        y2: "100%",
                        children: [
                          (0, s.jsx)("stop", {
                            offset: "0%",
                            stopColor: "#0CBCC2",
                            stopOpacity: "0.05",
                          }),
                          (0, s.jsx)("stop", {
                            offset: "100%",
                            stopColor: "#77E9DD",
                            stopOpacity: "0.08",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("linearGradient", {
                        id: "wave2Grad",
                        x1: "0%",
                        y1: "0%",
                        x2: "0%",
                        y2: "100%",
                        children: [
                          (0, s.jsx)("stop", {
                            offset: "0%",
                            stopColor: "#0CBCC2",
                            stopOpacity: "0.0",
                          }),
                          (0, s.jsx)("stop", {
                            offset: "100%",
                            stopColor: "#77E9DD",
                            stopOpacity: "0.0",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("linearGradient", {
                        id: "wave3Grad",
                        x1: "0%",
                        y1: "0%",
                        x2: "0%",
                        y2: "100%",
                        children: [
                          (0, s.jsx)("stop", {
                            offset: "0%",
                            stopColor: "#0f3a5e",
                            stopOpacity: "0.25",
                          }),
                          (0, s.jsx)("stop", {
                            offset: "100%",
                            stopColor: "#09121f",
                            stopOpacity: "0.06",
                          }),
                        ],
                      }),
                      (0, s.jsx)("filter", {
                        id: "subtleGlow",
                        x: "-50%",
                        y: "-50%",
                        width: "200%",
                        height: "200%",
                        children: (0, s.jsx)("feGaussianBlur", {
                          in: "SourceGraphic",
                          stdDeviation: "3",
                        }),
                      }),
                      (0, s.jsxs)("linearGradient", {
                        id: "edgeGrad",
                        x1: "0%",
                        y1: "0%",
                        x2: "0%",
                        y2: "100%",
                        children: [
                          (0, s.jsx)("stop", {
                            offset: "0%",
                            stopColor: "#bfe7ff",
                            stopOpacity: "0.95",
                          }),
                          (0, s.jsx)("stop", {
                            offset: "100%",
                            stopColor: "#65b7ff",
                            stopOpacity: "0.0",
                          }),
                        ],
                      }),
                      (0, s.jsx)("filter", {
                        id: "edgeGlow",
                        x: "-200%",
                        y: "-200%",
                        width: "400%",
                        height: "400%",
                        children: (0, s.jsx)("feGaussianBlur", {
                          stdDeviation: "4",
                          result: "b",
                        }),
                      }),
                      (0, s.jsxs)("filter", {
                        id: "downGlow",
                        x: "-200%",
                        y: "-200%",
                        width: "400%",
                        height: "400%",
                        children: [
                          (0, s.jsx)("feGaussianBlur", {
                            in: "SourceGraphic",
                            stdDeviation: "5",
                            result: "blur",
                          }),
                          (0, s.jsx)("feOffset", {
                            in: "blur",
                            dy: "4",
                            result: "shift",
                          }),
                          (0, s.jsx)("feMerge", {
                            children: (0, s.jsx)("feMergeNode", {
                              in: "shift",
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("filter", {
                        id: "upGlow",
                        x: "-200%",
                        y: "-200%",
                        width: "400%",
                        height: "400%",
                        children: [
                          (0, s.jsx)("feGaussianBlur", {
                            in: "SourceGraphic",
                            stdDeviation: "3",
                            result: "blur",
                          }),
                          (0, s.jsx)("feOffset", {
                            in: "blur",
                            dy: "-3",
                            result: "shift",
                          }),
                          (0, s.jsx)("feMerge", {
                            children: (0, s.jsx)("feMergeNode", {
                              in: "shift",
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsx)("filter", {
                        id: "thinGlow",
                        x: "-200%",
                        y: "-200%",
                        width: "400%",
                        height: "400%",
                        children: (0, s.jsx)("feGaussianBlur", {
                          stdDeviation: "2",
                          result: "b",
                        }),
                      }),
                      (0, s.jsxs)("linearGradient", {
                        id: "edgeXGrad",
                        x1: "0",
                        y1: "0",
                        x2: "1440",
                        y2: "0",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                          (0, s.jsx)("stop", {
                            offset: "0%",
                            stopColor: "#bfe7ff",
                            stopOpacity: "0",
                          }),
                          (0, s.jsx)("stop", {
                            offset: "50%",
                            stopColor: "#e8f6ff",
                            stopOpacity: "1",
                          }),
                          (0, s.jsx)("stop", {
                            offset: "100%",
                            stopColor: "#bfe7ff",
                            stopOpacity: "0",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("linearGradient", {
                        id: "edgeBrightXGrad",
                        x1: "0",
                        y1: "0",
                        x2: "1440",
                        y2: "0",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                          (0, s.jsx)("stop", {
                            offset: "0%",
                            stopColor: "#ffffff",
                            stopOpacity: "0",
                          }),
                          (0, s.jsx)("stop", {
                            offset: "50%",
                            stopColor: "#ffffff",
                            stopOpacity: "1",
                          }),
                          (0, s.jsx)("stop", {
                            offset: "100%",
                            stopColor: "#ffffff",
                            stopOpacity: "0",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("linearGradient", {
                        id: "underXGrad",
                        x1: "0",
                        y1: "0",
                        x2: "1440",
                        y2: "0",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                          (0, s.jsx)("stop", {
                            offset: "0%",
                            stopColor: "#bfe7ff",
                            stopOpacity: "0",
                          }),
                          (0, s.jsx)("stop", {
                            offset: "50%",
                            stopColor: "#bfe7ff",
                            stopOpacity: "1",
                          }),
                          (0, s.jsx)("stop", {
                            offset: "100%",
                            stopColor: "#bfe7ff",
                            stopOpacity: "0",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("linearGradient", {
                        id: "shadeXGrad",
                        x1: "0",
                        y1: "0",
                        x2: "1440",
                        y2: "0",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                          (0, s.jsx)("stop", {
                            offset: "0%",
                            stopColor: "#000",
                            stopOpacity: "0",
                          }),
                          (0, s.jsx)("stop", {
                            offset: "50%",
                            stopColor: "#000814",
                            stopOpacity: "0.14",
                          }),
                          (0, s.jsx)("stop", {
                            offset: "100%",
                            stopColor: "#000",
                            stopOpacity: "0",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("linearGradient", {
                        id: "centerMaskGrad",
                        x1: "0",
                        y1: "0",
                        x2: "1440",
                        y2: "0",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                          (0, s.jsx)("stop", {
                            offset: "0%",
                            stopColor: "#000",
                            stopOpacity: "0",
                          }),
                          (0, s.jsx)("stop", {
                            offset: "50%",
                            stopColor: "#fff",
                            stopOpacity: "1",
                          }),
                          (0, s.jsx)("stop", {
                            offset: "100%",
                            stopColor: "#000",
                            stopOpacity: "0",
                          }),
                        ],
                      }),
                      (0, s.jsx)("mask", {
                        id: "centerMask",
                        children: (0, s.jsx)("rect", {
                          x: "0",
                          y: "0",
                          width: "1440",
                          height: "1024",
                          fill: "url(#centerMaskGrad)",
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsxs)("g", {
                    className:
                      "origin-center [transform-box:view-box] -skew-x-[0deg] translate-y-[-56px] sm:translate-y-[-76px] md:translate-y-[-104px] lg:translate-y-[-102px] xl:translate-y-[-160px] 2xl:translate-y-[-180px] scale-y-[1.35] sm:scale-y-[1.48] md:scale-y-[1.60] lg:scale-y-[1.72] xl:scale-y-[1.84] 2xl:scale-y-[1.96]",
                    children: [
                      (0, s.jsx)("path", {
                        d: "M-20,560 C360,700 1080,700 1460,560 L1460,1024 L-20,1024 Z",
                        fill: "url(#wave1Grad)",
                      }),
                      (0, s.jsx)("path", {
                        d: "M-20,560 C360,700 1080,700 1460,560",
                        fill: "none",
                        stroke: "url(#edgeXGrad)",
                        strokeWidth: "9",
                        strokeLinecap: "round",
                        style: { mixBlendMode: "screen" },
                        filter: "url(#edgeGlow)",
                        opacity: "0.9",
                        mask: "url(#centerMask)",
                      }),
                      (0, s.jsx)("path", {
                        d: "M-20,560 C360,700 1080,700 1460,560",
                        fill: "none",
                        stroke: "url(#edgeBrightXGrad)",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        style: { mixBlendMode: "screen" },
                        filter: "url(#thinGlow)",
                        opacity: "1",
                        mask: "url(#centerMask)",
                      }),
                      (0, s.jsx)("path", {
                        d: "M-20,560 C360,700 1080,700 1460,560",
                        fill: "none",
                        stroke: "url(#shadeXGrad)",
                        strokeWidth: "16",
                        strokeLinecap: "round",
                        style: { mixBlendMode: "multiply" },
                        filter: "url(#upGlow)",
                        opacity: "0.14",
                        mask: "url(#centerMask)",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("g", {
                    className:
                      "origin-center [transform-box:view-box] -skew-x-[0deg] translate-y-[-96px] sm:translate-y-[-120px] md:translate-y-[-150px] lg:translate-y-[-284px] xl:translate-y-[-216px] 2xl:translate-y-[-524px] scale-y-[1.48] sm:scale-y-[1.62] md:scale-y-[1.78] lg:scale-y-[1.94] xl:scale-y-[2.08] 2xl:scale-y-[2.22]",
                    children: [
                      (0, s.jsx)("path", {
                        d: "M-20,780 C360,920 1080,920 1460,780 L1460,1024 L-20,1024 Z",
                        fill: "url(#wave2Grad)",
                      }),
                      (0, s.jsx)("path", {
                        d: "M-20,780 C360,920 1080,920 1460,780",
                        fill: "none",
                        stroke: "url(#edgeXGrad)",
                        strokeWidth: "10",
                        strokeLinecap: "round",
                        style: { mixBlendMode: "screen" },
                        filter: "url(#edgeGlow)",
                        opacity: "0.9",
                        mask: "url(#centerMask)",
                      }),
                      (0, s.jsx)("path", {
                        d: "M-20,780 C360,920 1080,920 1460,780",
                        fill: "none",
                        stroke: "url(#edgeBrightXGrad)",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        style: { mixBlendMode: "screen" },
                        filter: "url(#thinGlow)",
                        opacity: "0.9",
                        mask: "url(#centerMask)",
                      }),
                      (0, s.jsx)("path", {
                        d: "M-20,780 C360,920 1080,920 1460,780",
                        fill: "none",
                        stroke: "url(#shadeXGrad)",
                        strokeWidth: "18",
                        strokeLinecap: "round",
                        style: { mixBlendMode: "multiply" },
                        filter: "url(#upGlow)",
                        opacity: "0.14",
                        mask: "url(#centerMask)",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("g", {
                    className:
                      "origin-center [transform-box:view-box] -skew-x-[6deg] translate-y-[-64px] sm:translate-y-[-86px] md:translate-y-[-112px] lg:translate-y-[-140px] xl:translate-y-[-170px] 2xl:translate-y-[-200px] scale-y-[1.32] sm:scale-y-[1.46] md:scale-y-[1.60] lg:scale-y-[1.76] xl:scale-y-[1.90] 2xl:scale-y-[2.04]",
                    children: [
                      (0, s.jsx)("path", {
                        d: "M-20,980 C360,1040 1080,1040 1460,980 L1460,1024 L-20,1024 Z",
                        fill: "url(#wave3Grad)",
                      }),
                      (0, s.jsx)("path", {
                        d: "M-20,980 C360,1040 1080,1040 1460,980",
                        fill: "none",
                        stroke: "url(#edgeXGrad)",
                        strokeWidth: "10",
                        strokeLinecap: "round",
                        style: { mixBlendMode: "screen" },
                        filter: "url(#edgeGlow)",
                        opacity: "0.85",
                        mask: "url(#centerMask)",
                      }),
                      (0, s.jsx)("path", {
                        d: "M-20,980 C360,1040 1080,1040 1460,980",
                        fill: "none",
                        stroke: "url(#edgeBrightXGrad)",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        style: { mixBlendMode: "screen" },
                        filter: "url(#thinGlow)",
                        opacity: "0.9",
                        mask: "url(#centerMask)",
                      }),
                      (0, s.jsx)("path", {
                        d: "M-20,980 C360,1040 1080,1040 1460,980",
                        fill: "none",
                        stroke: "url(#underXGrad)",
                        strokeWidth: "44",
                        strokeLinecap: "round",
                        style: { mixBlendMode: "screen" },
                        filter: "url(#downGlow)",
                        opacity: "0.22",
                        mask: "url(#centerMask)",
                      }),
                      (0, s.jsx)("path", {
                        d: "M-20,980 C360,1040 1080,1040 1460,980",
                        fill: "none",
                        stroke: "url(#shadeXGrad)",
                        strokeWidth: "20",
                        strokeLinecap: "round",
                        style: { mixBlendMode: "multiply" },
                        filter: "url(#upGlow)",
                        opacity: "0.12",
                        mask: "url(#centerMask)",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, s.jsxs)(x.P.div, {
              ref: a,
              className:
                "relative z-10 max-w-[900px] mx-auto px-6 sm:px-8 text-center",
              variants: {
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              },
              initial: "hidden",
              animate: n,
              children: [
                (0, s.jsxs)(x.P.div, {
                  className: "flex items-center justify-center gap-4 mb-6",
                  variants: h,
                  children: [
                    (0, s.jsx)(i.default, {
                      src: "/images/icons/ZKFile_Logo.png",
                      alt: "ZKFlow logo",
                      width: 32,
                      height: 32,
                      className: "rounded-[6px]",
                      priority: !0,
                    }),
                    (0, s.jsx)("span", {
                      className:
                        "text-[#e8edf5] font-semibold text-[22px] sm:text-[28px] md:text-[38px] tracking-tight",
                      children: "ZKFlow",
                    }),
                  ],
                }),
                (0, s.jsx)(x.P.h1, {
                  className:
                    "text-[28px] sm:text-[40px] md:text-[52px] font-extrabold text-[#e8edf5] leading-[1.15] mb-6 sm:mb-8 tracking-tight max-w-[16ch] sm:max-w-[22ch] md:max-w-none mx-auto",
                  style: {
                    textShadow:
                      "0 2px 8px rgba(0,0,0,0.3), 0 0 20px rgba(12,160,178,0.08)",
                    textRendering: "optimizeLegibility",
                  },
                  variants: h,
                  children:
                    "The Data Lake for a Sovereign Web, Powered by ZKFlow.",
                }),
                (0, s.jsx)(x.P.p, {
                  className:
                    "text-[14px] sm:text-[16px] text-white/70 max-w-[580px] mx-auto leading-[1.6] mb-6 sm:mb-8 font-thin",
                  style: { textShadow: "0 1px 3px rgba(0,0,0,0.2)" },
                  variants: h,
                  children:
                    "ZKFlow is your private data layer. Store, share, and verify data on Solana with cryptographic guarantees, without ever surrendering control.",
                }),
                (0, s.jsxs)(x.P.div, {
                  className:
                    "grid grid-cols-2 gap-3 w-full max-w-[520px] mx-auto sm:flex sm:flex-row sm:justify-center sm:gap-4",
                  variants: h,
                  children: [
                    e.contractAddress
                      ? (0, s.jsx)(o(), {
                          href: "/upload",
                          children: (0, s.jsxs)(r.A, {
                            children: [
                              (0, s.jsx)(s.Fragment, {
                                children: (0, s.jsx)(l.hUl, {
                                  className: "font-bold mr-1",
                                  size: 20,
                                }),
                              }),
                              "LAUNCH APP",
                            ],
                          }),
                        })
                      : (0, s.jsxs)("div", {
                          className: "relative w-full sm:w-auto",
                          children: [
                            (0, s.jsxs)(r.A, {
                              disabled: !0,
                              className: "opacity-50 cursor-not-allowed w-full",
                              children: [
                                (0, s.jsx)(s.Fragment, {
                                  children: (0, s.jsx)(l.hUl, {
                                    className: "font-bold mr-1",
                                    size: 20,
                                  }),
                                }),
                                "LAUNCH APP",
                              ],
                            }),
                            (0, s.jsx)("span", {
                              className:
                                "absolute -top-2 -right-2 bg-gradient-to-r from-[#0DA9BB] to-[#14c4d9] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg animate-pulse",
                              children: "SOON",
                            }),
                          ],
                        }),
                    (0, s.jsx)(r.A, {
                      variant: "outline",
                      href: "https://x.com/zkflowai",
                      className: "normal-case w-full sm:w-auto",
                      "aria-label": "Follow us on X",
                      children: (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(l.TCj, {}), "Follow Us"],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    16097: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => d });
      var s = a(95155),
        r = a(35137),
        i = a(68598),
        n = a(31574),
        o = a(922),
        l = a(12115);
      function d() {
        let e = (0, i.s)(),
          [t, a] = (0, o.Wx)({ triggerOnce: !1, threshold: 0.1 });
        (0, l.useEffect)(() => {
          a ? e.start("visible") : e.start("hidden");
        }, [e, a]);
        let d = {
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
          },
          c = [
            {
              icon: (0, s.jsx)(r.pcC, { size: 24 }),
              title: "Verifiable Credentials",
              description:
                "Prove attributes or status via ZKFlow-proofs on Solana, without revealing the underlying sensitive data that grants them.",
            },
            {
              icon: (0, s.jsx)(r.Pum, { size: 24 }),
              title: "Sovereign Data Sharing",
              description:
                "Share confidential documents with granular, time-locked, and revocable access control, audited on-chain.",
            },
            {
              icon: (0, s.jsx)(r.Hbo, { size: 24 }),
              title: "Confidential AI Datasets",
              description:
                "Store and manage proprietary AI training datasets with absolute confidentiality. Control access and maintain a competitive edge.",
            },
            {
              icon: (0, s.jsx)(r.ARf, { size: 24 }),
              title: "Private Data Monetization",
              description:
                "Monetize insights from your data without exposing it. Consumers verify aggregate properties via ZKFlow-proofs, with transactions settled on Solana.",
            },
          ];
        return (0, s.jsx)("section", {
          id: "use-cases",
          className: "relative bg-[#001114] pt-12 pb-[120px] px-8",
          children: (0, s.jsxs)(n.P.div, {
            ref: t,
            variants: {
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            },
            initial: "hidden",
            animate: e,
            className: "max-w-[1200px] mx-auto",
            children: [
              (0, s.jsx)(n.P.h2, {
                variants: d,
                className:
                  "text-[50px] font-semibold text-[#e8edf5] text-center mb-12",
                children: "Use Cases",
              }),
              (0, s.jsx)("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                children: c.map((e, t) =>
                  (0, s.jsxs)(
                    n.P.div,
                    {
                      variants: d,
                      className:
                        "group relative rounded-xl p-8 border border-[#0CA0B2]/20 bg-transparent overflow-hidden transition-all duration-300 hover:border-[#0CA0B2]/40",
                      style: { boxShadow: "0 4px 20px rgba(0,0,0,0.3)" },
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "absolute inset-0 z-[-1] bg-gradient-to-b from-[#0D1520]/80 to-[#0D1520]/90 transition-all duration-300 group-hover:from-[#0D1520]/90 group-hover:to-[#0D1520]/95",
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-24 bg-gradient-to-b from-[#0CA0B2]/20 to-transparent opacity-50 transition-all duration-300 group-hover:opacity-100",
                          style: { filter: "blur(20px)" },
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "flex items-center justify-center w-12 h-12 rounded-full bg-[#0CA0B2]/10 border border-[#0CA0B2]/30 mb-6 transition-all duration-300 group-hover:bg-[#0CA0B2]/20 group-hover:border-[#0CA0B2]/50",
                          children: (0, s.jsx)("div", {
                            className:
                              "text-[#0CA0B2] transition-all duration-300 group-hover:text-[#14c4d9]",
                            children: e.icon,
                          }),
                        }),
                        (0, s.jsx)("h3", {
                          className: "text-lg font-semibold text-white mb-3",
                          children: e.title,
                        }),
                        (0, s.jsx)("p", {
                          className: "text-sm text-gray-400 leading-relaxed",
                          children: e.description,
                        }),
                      ],
                    },
                    t,
                  ),
                ),
              }),
            ],
          }),
        });
      }
    },
    51415: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => x });
      var s = a(95155),
        r = a(12505),
        i = a(33282),
        n = a(14754),
        o = a(68598),
        l = a(31574),
        d = a(922),
        c = a(12115);
      function x() {
        let e = (0, o.s)(),
          [t, a] = (0, d.Wx)({ triggerOnce: !1, threshold: 0.2 });
        (0, c.useEffect)(() => {
          a ? e.start("visible") : e.start("hidden");
        }, [e, a]);
        let x = [
          { name: "Docker", logo: (0, s.jsx)(r.q_t, { size: "44" }) },
          { name: "Kubernetes", logo: (0, s.jsx)(i.tev, { size: "40" }) },
          { name: "HashiCorp", logo: (0, s.jsx)(i.ygU, { size: "36" }) },
          { name: "AWS", logo: (0, s.jsx)(r.x0_, { size: "44" }) },
          { name: "Azure", logo: (0, s.jsx)(n.g24, { size: "40" }) },
          { name: "Google Cloud", logo: (0, s.jsx)(i.lpS, { size: "40" }) },
          { name: "Cloudflare", logo: (0, s.jsx)(i.yTU, { size: "48" }) },
          { name: "Datadog", logo: (0, s.jsx)(i.Nuh, { size: "44" }) },
        ];
        return (0, s.jsx)("section", {
          id: "workflows",
          className: "relative bg-[#001114] py-[80px] px-8",
          children: (0, s.jsxs)(l.P.div, {
            ref: t,
            variants: {
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
            },
            initial: "hidden",
            animate: e,
            className: "max-w-[1200px] mx-auto",
            children: [
              (0, s.jsx)(l.P.h2, {
                variants: {
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.8 } },
                },
                className:
                  "text-[50px] font-semibold text-[#e8edf5] text-center mb-16",
                style: {
                  textShadow:
                    "0 2px 8px rgba(0,0,0,0.3), 0 0 16px rgba(61,101,194,0.08)",
                  textRendering: "optimizeLegibility",
                },
                children: "Infrastructure & Workflows",
              }),
              (0, s.jsxs)(l.P.div, {
                variants: {
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      delay: 0.2,
                    },
                  },
                },
                className: "relative rounded-[8px] border overflow-hidden",
                style: {
                  borderColor: "rgba(12,160,178,0.35)",
                  background:
                    "linear-gradient(180deg, rgba(12,25,30,0.55) 0%, rgba(8,18,22,0.65) 100%)",
                  boxShadow:
                    "0 6px 20px rgba(8,18,22,0.35), inset 0 0 0 1px rgba(255,255,255,0.03)",
                },
                children: [
                  (0, s.jsxs)("div", {
                    className: "pointer-events-none absolute inset-0",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "absolute -top-20 -left-20 w-[220px] h-[220px] rounded-full",
                        style: {
                          background:
                            "radial-gradient(circle, rgba(12,160,178,0.10) 0%, rgba(12,160,178,0) 60%)",
                          filter: "blur(6px)",
                        },
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "absolute -top-20 -right-20 w-[180px] h-[180px] rounded-full",
                        style: {
                          background:
                            "radial-gradient(circle, rgba(12,160,178,0.08) 0%, rgba(12,160,178,0) 60%)",
                          filter: "blur(8px)",
                        },
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "relative grid grid-cols-4 divide-x divide-y divide-[rgba(12,160,178,0.25)]",
                    children: x.map((e, t) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          className:
                            "group relative h-[96px] flex flex-col items-center justify-center gap-2 text-[#dfe7f5] transition-all duration-300 hover:text-white cursor-pointer overflow-hidden",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-95 group-hover:scale-100",
                              style: {
                                backgroundImage:
                                  "radial-gradient(circle at center, rgba(14, 200, 217, 0.25) 0%, transparent 40%), repeating-conic-gradient(rgba(14, 200, 217, 0.15) 0% 25%, transparent 25% 50%)",
                                backgroundSize: "100% 100%, 16px 16px",
                                maskImage:
                                  "radial-gradient(circle at center, white 10%, transparent 80%)",
                              },
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "absolute inset-0 z-0 bg-[rgba(12,160,178,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "relative z-10 flex flex-col items-center justify-center gap-2",
                              children: [
                                e.logo,
                                (0, s.jsx)("span", {
                                  className:
                                    "text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300",
                                  children: e.name,
                                }),
                              ],
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    54851: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => v });
      var s = a(95155),
        r = a(5772),
        i = a(68469),
        n = a(42021),
        o = a(68598),
        l = a(31574),
        d = a(922),
        c = a(12115),
        x = a(81687),
        p = a(39401);
      function u({
        value: e,
        decimals: t = 0,
        prefix: a = "",
        suffix: r = "",
        className: i = "",
        duration: n = 1,
      }) {
        let [o, d] = (0, c.useState)(e),
          x = (0, c.useRef)(e),
          u = (0, p.z)(e, { damping: 30, stiffness: 100, duration: 1e3 * n });
        return (
          (0, c.useEffect)(() => {
            x.current !== e && (u.set(e), (x.current = e));
            let t = u.on("change", (e) => {
              d(e);
            });
            return () => t();
          }, [e, u]),
          (0, s.jsxs)(l.P.span, {
            className: i,
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.3 },
            children: [
              a,
              t > 0 ? o.toFixed(t) : Math.round(o).toLocaleString("en-US"),
              r,
            ],
          })
        );
      }
      function g({ value: e, className: t = "" }) {
        return (0, s.jsx)(u, {
          value: e,
          decimals: e < 0.01 ? 8 : e < 1 ? 6 : 2,
          prefix: "$",
          className: t,
        });
      }
      function h({ value: e, className: t = "" }) {
        return (0, s.jsx)(l.P.span, {
          className: t,
          initial: { opacity: 0, y: -10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3 },
          children:
            e >= 1e9
              ? `$${(e / 1e9).toFixed(2)}B`
              : e >= 1e6
                ? `$${(e / 1e6).toFixed(2)}M`
                : e >= 1e3
                  ? `$${(e / 1e3).toFixed(2)}K`
                  : `$${e.toFixed(2)}`,
        });
      }
      function m({ value: e, className: t = "" }) {
        return (0, s.jsx)(u, { value: e, decimals: 0, className: t });
      }
      var f = a(12505);
      function b() {
        let { stats: e, isLoading: t } = (function () {
          let {
              token: e,
              stats: t,
              isLoading: a,
              setStats: s,
              setLoading: r,
              setError: i,
            } = (0, x.E)(),
            n = (0, c.useRef)(null),
            o = (0, c.useRef)(null),
            l = (0, c.useCallback)(async () => {
              if (!e.contractAddress) return void s(null);
              (o.current && o.current.abort(),
                (o.current = new AbortController()));
              try {
                (r(!0), i(null));
                let t = await fetch(
                  `/api/token/stats?address=${e.contractAddress}&chain=sol`,
                  { signal: o.current.signal },
                );
                if (!t.ok) throw Error(`Failed to fetch stats: ${t.status}`);
                let a = await t.json();
                s(a);
              } catch (e) {
                e instanceof Error &&
                  "AbortError" !== e.name &&
                  (console.error("Error fetching token stats:", e),
                  i(e.message));
              } finally {
                r(!1);
              }
            }, [e.contractAddress, s, r, i]);
          return (
            (0, c.useEffect)(
              () => (
                e.contractAddress
                  ? (l(), (n.current = setInterval(l, 5e3)))
                  : s(null),
                () => {
                  (n.current && clearInterval(n.current),
                    o.current && o.current.abort());
                }
              ),
              [e.contractAddress, l, s],
            ),
            { stats: t, isLoading: a, refetch: l }
          );
        })();
        return e || t
          ? (0, s.jsx)(l.P.div, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              className: "w-full max-w-4xl mx-auto",
              children: (0, s.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                children: [
                  (0, s.jsx)(y, {
                    icon: (0, s.jsx)(f.cEG, { className: "text-[#0DA9BB]" }),
                    label: "Price",
                    value:
                      t || !e
                        ? (0, s.jsx)("span", {
                            className: "text-gray-500",
                            children: "Loading...",
                          })
                        : (0, s.jsx)(g, {
                            value: e.price,
                            className: "text-white",
                          }),
                    isLoading: t,
                  }),
                  (0, s.jsx)(y, {
                    icon: (0, s.jsx)(f.YYR, { className: "text-[#0DA9BB]" }),
                    label: "Market Cap",
                    value:
                      t || !e
                        ? (0, s.jsx)("span", {
                            className: "text-gray-500",
                            children: "Loading...",
                          })
                        : (0, s.jsx)(h, {
                            value: e.marketCap,
                            className: "text-white",
                          }),
                    isLoading: t,
                  }),
                  (0, s.jsx)(y, {
                    icon: (0, s.jsx)(f.YXz, { className: "text-[#0DA9BB]" }),
                    label: "Holders",
                    value:
                      t || !e
                        ? (0, s.jsx)("span", {
                            className: "text-gray-500",
                            children: "Loading...",
                          })
                        : (0, s.jsx)(m, {
                            value: e.holders,
                            className: "text-white",
                          }),
                    isLoading: t,
                  }),
                ],
              }),
            })
          : null;
      }
      function y({ icon: e, label: t, value: a, isLoading: r }) {
        return (0, s.jsxs)(l.P.div, {
          className:
            "group relative overflow-hidden bg-gradient-to-br from-[#001a1f] via-[#001114] to-[#000a0d] border border-[#0DA9BB]/30 rounded-2xl p-5 hover:border-[#0DA9BB]/60 transition-all duration-300 shadow-lg hover:shadow-[#0DA9BB]/20",
          whileHover: { scale: 1.03, y: -2 },
          transition: { type: "spring", stiffness: 400, damping: 20 },
          children: [
            (0, s.jsx)("div", {
              className:
                "absolute inset-0 bg-gradient-to-br from-[#0DA9BB]/10 via-transparent to-[#14c4d9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
            }),
            (0, s.jsx)(l.P.div, {
              className:
                "absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent",
              animate: { x: ["-100%", "100%"] },
              transition: {
                duration: 3,
                repeat: 1 / 0,
                ease: "linear",
                repeatDelay: 5,
              },
            }),
            (0, s.jsx)("div", {
              className:
                "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0DA9BB] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300",
            }),
            (0, s.jsxs)("div", {
              className: "relative z-10",
              children: [
                (0, s.jsxs)("div", {
                  className: "flex items-center justify-between mb-4",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, s.jsx)(l.P.div, {
                          className:
                            "p-2.5 bg-gradient-to-br from-[#0DA9BB]/20 to-[#0DA9BB]/5 rounded-lg border border-[#0DA9BB]/20 group-hover:border-[#0DA9BB]/40 transition-colors duration-300",
                          whileHover: { rotate: [0, -10, 10, -10, 0] },
                          transition: { duration: 0.5 },
                          children: (0, s.jsx)("div", {
                            className: "text-lg",
                            children: e,
                          }),
                        }),
                        (0, s.jsx)("span", {
                          className:
                            "text-gray-400 text-xs font-semibold uppercase tracking-wider",
                          children: t,
                        }),
                      ],
                    }),
                    !r &&
                      (0, s.jsxs)("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                          (0, s.jsx)(l.P.div, {
                            className: "w-1.5 h-1.5 bg-[#0DA9BB] rounded-full",
                            animate: {
                              opacity: [1, 0.3, 1],
                              scale: [1, 1.2, 1],
                            },
                            transition: {
                              duration: 2,
                              repeat: 1 / 0,
                              ease: "easeInOut",
                            },
                          }),
                          (0, s.jsx)("span", {
                            className:
                              "text-[10px] text-[#0DA9BB]/70 font-medium",
                            children: "LIVE",
                          }),
                        ],
                      }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "min-h-[40px] flex items-center",
                  children: r
                    ? (0, s.jsx)("div", {
                        className: "w-full",
                        children: (0, s.jsx)("div", {
                          className:
                            "h-9 w-full bg-gradient-to-r from-[#0DA9BB]/10 via-[#0DA9BB]/20 to-[#0DA9BB]/10 rounded-lg animate-pulse",
                        }),
                      })
                    : (0, s.jsx)("div", {
                        className:
                          "text-2xl lg:text-3xl font-bold text-white break-all leading-tight",
                        children: a,
                      }),
                }),
              ],
            }),
            r &&
              (0, s.jsx)(l.P.div, {
                className:
                  "absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-[#0DA9BB]/40 to-transparent",
                animate: { x: ["-100%", "100%"] },
                transition: { duration: 1.5, repeat: 1 / 0, ease: "linear" },
              }),
            (0, s.jsx)("div", {
              className:
                "absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#0DA9BB]/20 group-hover:border-[#0DA9BB]/60 transition-colors duration-300",
            }),
            (0, s.jsx)("div", {
              className:
                "absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#0DA9BB]/20 group-hover:border-[#0DA9BB]/60 transition-colors duration-300",
            }),
          ],
        });
      }
      function v() {
        let { contractAddress: e } = (0, x.E)((e) => e.token),
          t = (0, o.s)(),
          [a, p] = (0, d.Wx)({ triggerOnce: !1, threshold: 0.2 });
        return (
          (0, c.useEffect)(() => {
            p ? t.start("visible") : t.start("hidden");
          }, [t, p]),
          (0, s.jsx)("section", {
            id: "about",
            className: "relative bg-[#001114] py-12 sm:py-16 px-6 sm:px-8",
            children: (0, s.jsx)("div", {
              className: "max-w-[1200px] mx-auto",
              children: (0, s.jsxs)(l.P.div, {
                ref: a,
                variants: {
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
                  },
                },
                initial: "hidden",
                animate: t,
                className:
                  "relative rounded-[24px] overflow-hidden border border-[#0CA0B2]/30 p-4 sm:p-6",
                style: {
                  background:
                    "linear-gradient(135deg, rgba(12,25,30,0.8) 0%, rgba(12,160,178,0.15) 100%)",
                  backdropFilter: "blur(10px)",
                  minHeight: "240px",
                },
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "absolute bottom-0 right-0 w-1/2 h-full pointer-events-none hidden sm:block",
                    style: {
                      backgroundImage:
                        "radial-gradient(circle at 100% 100%, rgba(14, 200, 217, 0.15) 0%, transparent 40%), repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(14, 200, 217, 0.05) 10px, rgba(14, 200, 217, 0.05) 12px)",
                      maskImage:
                        "linear-gradient(to top, black 0%, transparent 100%)",
                    },
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "flex flex-col md:flex-row items-center h-full gap-6 sm:gap-8 px-6 md:px-0 py-6 md:py-0",
                    children: [
                      (0, s.jsxs)(l.P.div, {
                        className:
                          "w-full md:w-[65%] px-6 md:pl-12 md:pr-8 py-6 md:py-8 order-2 md:order-1",
                        variants: {
                          hidden: { x: -50, opacity: 0 },
                          visible: {
                            x: 0,
                            opacity: 1,
                            transition: { type: "spring", stiffness: 50 },
                          },
                        },
                        children: [
                          (0, s.jsx)("h2", {
                            className:
                              "text-[22px] sm:text-[26px] md:text-[28px] font-bold text-white mb-4 leading-[1.3] text-center md:text-left",
                            style: { textShadow: "0 2px 12px rgba(0,0,0,0.5)" },
                            children:
                              "A Sovereign Data Conduit on Solana for Humans, AIs, and Enterprises",
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "text-[14px] sm:text-[15px] text-gray-400 mb-6 leading-[1.6] max-w-[580px] text-center md:text-left mx-auto md:mx-0",
                            children:
                              "ZKFlow provides a sovereign data layer on Solana, enabling users to store, share, and verify data with cryptographic guarantees. With client-side encryption and on-chain audit trails, you retain full control of your digital assets.",
                          }),
                          e &&
                            (0, s.jsx)("div", {
                              className: "mb-6",
                              children: (0, s.jsx)(b, {}),
                            }),
                          (0, s.jsxs)("div", {
                            className:
                              "flex items-center gap-4 justify-center md:justify-start",
                            children: [
                              e
                                ? (0, s.jsxs)(i.A, {
                                    href: "/upload",
                                    children: [
                                      (0, s.jsx)(s.Fragment, {
                                        children: (0, s.jsx)(n.hUl, {
                                          className: "font-bold",
                                          size: 20,
                                        }),
                                      }),
                                      "LAUNCH APP",
                                    ],
                                  })
                                : (0, s.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                      (0, s.jsxs)(i.A, {
                                        disabled: !0,
                                        className:
                                          "opacity-50 cursor-not-allowed",
                                        children: [
                                          (0, s.jsx)(s.Fragment, {
                                            children: (0, s.jsx)(n.hUl, {
                                              className: "font-bold",
                                              size: 20,
                                            }),
                                          }),
                                          "LAUNCH APP",
                                        ],
                                      }),
                                      (0, s.jsx)("span", {
                                        className:
                                          "absolute -top-2 -right-2 bg-gradient-to-r from-[#0DA9BB] to-[#14c4d9] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg animate-pulse",
                                        children: "SOON",
                                      }),
                                    ],
                                  }),
                              e &&
                                (0, s.jsx)("a", {
                                  href: `https://pump.fun/coin/${e}`,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "px-7 py-3 bg-transparent border border-[#0CA0B2]/50 text-white text-[13px] font-semibold rounded-[8px] transition-all duration-200 hover:bg-[#0CA0B2]/20 focus:outline-none focus:ring-2 focus:ring-[#14c4d9] w-auto text-center",
                                  children: "BUY $ZKFLOW",
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)(l.P.div, {
                        className:
                          "w-full md:w-[35%] flex items-center justify-center mb-6 md:mb-0 order-1 md:order-2",
                        variants: {
                          hidden: { scale: 0.5, rotate: -15, opacity: 0 },
                          visible: {
                            scale: 1,
                            rotate: 0,
                            opacity: 1,
                            transition: {
                              type: "spring",
                              stiffness: 80,
                              damping: 10,
                            },
                          },
                        },
                        children: (0, s.jsxs)("div", {
                          className: "relative",
                          children: [
                            (0, s.jsx)("div", {
                              className: "absolute inset-0 rounded-full",
                              style: {
                                width: "clamp(120px, 40vw, 180px)",
                                height: "clamp(120px, 40vw, 180px)",
                                background:
                                  "radial-gradient(circle, rgba(12,160,178,0.2) 0%, transparent 70%)",
                                filter: "blur(20px)",
                                transform: "translate(-20px, -20px)",
                              },
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "relative rounded-full flex items-center justify-center",
                              style: {
                                width: "clamp(110px, 36vw, 140px)",
                                height: "clamp(110px, 36vw, 140px)",
                                background:
                                  "linear-gradient(135deg, #083a42 0%, #0c5a66 50%, #083a42 100%)",
                                boxShadow:
                                  "0 0 40px rgba(12,160,178,0.4), inset 0 2px 10px rgba(255,255,255,0.1), inset 0 -2px 10px rgba(0,0,0,0.3)",
                                border: "3px solid rgba(12,160,178,0.3)",
                              },
                              children: (0, s.jsx)("div", {
                                className:
                                  "rounded-full flex items-center justify-center",
                                style: {
                                  width: "clamp(70px, 24vw, 90px)",
                                  height: "clamp(70px, 24vw, 90px)",
                                  background:
                                    "linear-gradient(135deg, #0c5a66 0%, #107a8a 100%)",
                                  boxShadow: "inset 0 2px 8px rgba(0,0,0,0.4)",
                                },
                                children: (0, s.jsx)(r.default, {
                                  src: "/images/icons/ZKFile_Logo.png",
                                  alt: "ZKFlow logo",
                                  width: 50,
                                  height: 50,
                                  className: "rounded-[4px]",
                                  priority: !0,
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      }
    },
    56615: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => u });
      var s = a(95155),
        r = a(81750);
      a(53255);
      var i = a(68598),
        n = a(31574),
        o = a(922),
        l = a(12115);
      let d = {
          background: "#0D1520",
          color: "white",
          border: "1px solid #0CA0B2",
          borderRadius: "6px",
          padding: "10px 15px",
        },
        c = {
          background: "#0CA0B2",
          color: "white",
          border: "none",
          borderRadius: "6px",
          padding: "10px 15px",
        },
        x = [
          {
            id: "1",
            type: "input",
            data: { label: "User Drops File" },
            position: { x: 0, y: 200 },
            style: c,
          },
          {
            id: "2",
            data: { label: "Client-Side AES-256 Encryption" },
            position: { x: 200, y: 100 },
            style: d,
          },
          {
            id: "3",
            data: { label: "ZKFlow-Proof Generation (e.g., Schema Validation)" },
            position: { x: 200, y: 300 },
            style: d,
          },
          {
            id: "4",
            data: {
              label: "Solana: Smart Access Control & Proof Verification",
            },
            position: { x: 450, y: 200 },
            style: d,
          },
          {
            id: "5",
            data: { label: "On-Chain Audit Trail" },
            position: { x: 450, y: 350 },
            style: d,
          },
          {
            id: "6",
            data: { label: "Store Encrypted Data in Cloud Vault (IPFS)" },
            position: { x: 700, y: 200 },
            style: d,
          },
          {
            id: "7",
            type: "output",
            data: { label: "Shareable, Permissioned Link" },
            position: { x: 900, y: 200 },
            style: c,
          },
        ],
        p = [
          {
            id: "e1-2",
            source: "1",
            target: "2",
            animated: !0,
            style: { stroke: "#0CA0B2" },
          },
          {
            id: "e1-3",
            source: "1",
            target: "3",
            animated: !0,
            style: { stroke: "#0CA0B2" },
          },
          {
            id: "e2-4",
            source: "2",
            target: "4",
            animated: !0,
            style: { stroke: "#0CA0B2" },
          },
          {
            id: "e3-4",
            source: "3",
            target: "4",
            animated: !0,
            style: { stroke: "#0CA0B2" },
          },
          {
            id: "e4-5",
            source: "4",
            target: "5",
            animated: !0,
            style: { stroke: "#0CA0B2" },
          },
          {
            id: "e4-6",
            source: "4",
            target: "6",
            animated: !0,
            style: { stroke: "#0CA0B2" },
          },
          {
            id: "e6-7",
            source: "6",
            target: "7",
            animated: !0,
            style: { stroke: "#0CA0B2" },
          },
        ];
      function u() {
        let e = (0, i.s)(),
          [t, a] = (0, o.Wx)({ triggerOnce: !1, threshold: 0.2 });
        (0, l.useEffect)(() => {
          a ? e.start("visible") : e.start("hidden");
        }, [e, a]);
        let d = `
    .react-flow__controls-button {
      background-color: #03161A !important;
      border-bottom: 1px solid #0b2a30 !important;
    }
    .react-flow__controls-button svg {
      fill: #196877 !important;
    }
    .react-flow__attribution {
      background: rgba(13, 21, 32, 0.5) !important;
    }
  `;
        return (0, s.jsxs)("section", {
          className: "relative bg-[#001114] pt-5 pb-20 px-8",
          children: [
            (0, s.jsx)("style", { children: d }),
            (0, s.jsx)(n.P.div, {
              ref: t,
              variants: {
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
              },
              initial: "hidden",
              animate: e,
              className: "max-w-[1200px] mx-auto",
              children: (0, s.jsx)(n.P.div, {
                variants: {
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      delay: 0.2,
                    },
                  },
                },
                style: {
                  height: 500,
                  borderRadius: "8px",
                  background: "#001114",
                },
                children: (0, s.jsxs)(r.Gc, {
                  nodes: x,
                  edges: p,
                  fitView: !0,
                  attributionPosition: "bottom-right",
                  nodesDraggable: !1,
                  nodesConnectable: !1,
                  elementsSelectable: !1,
                  className: "zk-flow",
                  children: [
                    (0, s.jsx)(r.VS, {
                      color: "#0CA0B2",
                      variant: r._5.Dots,
                      gap: 16,
                      size: 0.5,
                    }),
                    (0, s.jsx)(r.H2, {}),
                  ],
                }),
              }),
            }),
          ],
        });
      }
    },
    68649: (e, t, a) => {
      (Promise.resolve().then(a.bind(a, 16097)),
        Promise.resolve().then(a.bind(a, 83562)),
        Promise.resolve().then(a.bind(a, 54851)),
        Promise.resolve().then(a.bind(a, 3534)),
        Promise.resolve().then(a.bind(a, 51415)),
        Promise.resolve().then(a.bind(a, 7853)),
        Promise.resolve().then(a.bind(a, 14545)),
        Promise.resolve().then(a.bind(a, 95727)),
        Promise.resolve().then(a.bind(a, 56615)),
        Promise.resolve().then(a.bind(a, 82660)));
    },
    82660: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => c });
      var s = a(95155),
        r = a(42021),
        i = a(68469),
        n = a(68598),
        o = a(31574),
        l = a(922),
        d = a(12115);
      function c() {
        let e = (0, n.s)(),
          [t, a] = (0, l.Wx)({ triggerOnce: !1, threshold: 0.3 });
        (0, d.useEffect)(() => {
          a ? e.start("visible") : e.start("hidden");
        }, [e, a]);
        let c = {
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
        };
        return (0, s.jsxs)("section", {
          className:
            "relative overflow-hidden bg-[#001114] py-[160px] md:py-[200px] px-6 sm:px-10",
          style: {},
          children: [
            (0, s.jsx)("div", {
              className: "absolute inset-0 pointer-events-none hidden",
            }),
            (0, s.jsx)("div", {
              className: "relative z-10 max-w-[960px] mx-auto",
              children: (0, s.jsxs)("div", {
                className:
                  "relative z-10 overflow-visible text-center [isolation:isolate]",
                style: {
                  borderColor: "transparent",
                  background: "transparent",
                },
                children: [
                  (0, s.jsxs)("div", {
                    className: "pointer-events-none absolute inset-0 -z-10",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "absolute -top-44 left-1/2 -translate-x-1/2 w-[1100px] h-[760px] rounded-[50%]",
                        style: {
                          background:
                            "radial-gradient(55% 60% at 50% 40%, rgba(120,220,255,0.75) 0%, rgba(120,220,255,0.38) 30%, rgba(120,220,255,0.14) 55%, rgba(0,0,0,0) 72%)",
                          filter: "blur(46px)",
                        },
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "absolute -top-14 left-1/2 -translate-x-1/2 w-[520px] h-[340px] rounded-[50%]",
                        style: {
                          background:
                            "radial-gradient(52% 60% at 50% 40%, rgba(255,255,255,0.9) 0%, rgba(170,235,255,0.75) 24%, rgba(120,220,255,0.35) 48%, rgba(0,0,0,0) 75%)",
                          filter: "blur(64px)",
                        },
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "absolute top-8 -right-44 w-[880px] h-[600px] rounded-[50%]",
                        style: {
                          background:
                            "radial-gradient(60% 60% at 50% 50%, rgba(30,70,255,0.78) 0%, rgba(30,70,255,0.36) 35%, rgba(0,0,0,0) 72%)",
                          filter: "blur(52px)",
                        },
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "absolute top-24 -left-56 w-[620px] h-[480px] rounded-[50%]",
                        style: {
                          background:
                            "radial-gradient(60% 60% at 50% 50%, rgba(60,180,255,0.28) 0%, rgba(60,180,255,0.12) 40%, rgba(0,0,0,0) 75%)",
                          filter: "blur(38px)",
                        },
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[-48px] w-[68%] h-[200px] rounded-[50%] -z-10",
                    style: {
                      background:
                        "radial-gradient(60% 100% at 50% 0%, rgba(88,150,255,0.5) 0%, rgba(88,150,255,0.15) 42%, rgba(0,0,0,0) 78%)",
                    },
                  }),
                  (0, s.jsxs)(o.P.div, {
                    ref: t,
                    variants: {
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.2 },
                      },
                    },
                    initial: "hidden",
                    animate: e,
                    className: "relative z-20 px-6 sm:px-10 py-10 md:py-14",
                    children: [
                      (0, s.jsx)("div", {
                        className: "mb-8 hidden",
                        children: (0, s.jsxs)("div", {
                          className:
                            "relative w-[56px] h-[56px] rounded-[12px] flex items-center justify-center",
                          style: {
                            background:
                              "linear-gradient(180deg, #9fbaf5 0%, #4a6fb5 100%)",
                            boxShadow:
                              "0 6px 24px rgba(88,130,200,0.35), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.2)",
                          },
                          children: [
                            (0, s.jsx)("div", {
                              className: "absolute inset-0 rounded-[12px]",
                              style: {
                                background:
                                  "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 55%)",
                              },
                            }),
                            (0, s.jsx)("svg", {
                              width: "26",
                              height: "26",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              className: "relative text-white",
                              children: (0, s.jsx)("path", {
                                d: "M6 9h12M6 13h12M6 17h8",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, s.jsxs)(o.P.h2, {
                        variants: c,
                        className:
                          "relative z-30 text-white font-semibold leading-[1.03] tracking-[-0.015em] mb-5 text-[48px] sm:text-[60px] md:text-[72px] lg:text-[78px]",
                        style: { textShadow: "0 2px 8px rgba(0,0,0,0.25)" },
                        children: [
                          "ZKFlow: The Data Lake,",
                          (0, s.jsx)("br", { className: "hidden sm:block" }),
                          "Sovereign Data on Solana.",
                        ],
                      }),
                      (0, s.jsx)(o.P.p, {
                        variants: c,
                        className:
                          "relative z-30 text-[16px] md:text-[18px] text-white leading-[1.7] max-w-[700px] mx-auto mb-10",
                        children:
                          "Have questions or want to stay updated? Follow our social media channels for the latest news and announcements.",
                      }),
                      (0, s.jsx)(o.P.div, {
                        variants: c,
                        children: (0, s.jsx)(i.A, {
                          variant: "outline",
                          href: "https://x.com/zkflowai",
                          className: "normal-case",
                          "aria-label": "Follow us on X",
                          children: (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(r.TCj, {}), "Follow Us"],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    83562: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => l });
      var s = a(95155),
        r = a(33282),
        i = a(30821),
        n = a(12505),
        o = a(31574);
      function l() {
        let e = [
            {
              category: "TECHNOLOGY",
              title: "A Sovereign Data Layer on Solana",
              description:
                "ZKFlow empowers you to own and control your data. With client-side encryption and on-chain audit trails, your digital assets remain yours, forever.",
              cta: "Learn about Data Sovereignty",
              icon: r.NS0,
            },
            {
              category: "SECURITY",
              title: "ZKFlow-Powered Verification for Trustless Interactions",
              description:
                "Leverage Zero-Knowledge Proofs to verify data without revealing it. Ideal for confidential AI datasets, private credentials, and trustless interactions.",
              cta: "Explore ZKFlow Use Cases",
              icon: i.GA1,
            },
            {
              category: "INTEGRATION",
              title: "Natively Integrated with the Solana Ecosystem",
              description:
                "Designed for speed and scalability, ZKFlow seamlessly integrates with dApps, DePIN, and AI services on Solana, providing a fast, private data layer.",
              cta: "See the Ecosystem",
              icon: n.bei,
            },
          ],
          t = {
            hidden: { y: 20, opacity: 0, scale: 0.98 },
            visible: {
              y: 0,
              opacity: 1,
              scale: 1,
              transition: { duration: 0.45 },
            },
          };
        return (0, s.jsx)("section", {
          className: "relative bg-[#001114] py-[80px] px-8",
          children: (0, s.jsx)("div", {
            className: "max-w-[1200px] mx-auto",
            children: (0, s.jsx)(o.P.div, {
              className: "grid grid-cols-1 md:grid-cols-3 gap-[30px]",
              variants: {
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
              },
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: !1, amount: 0.2 },
              children: e.map((e, a) =>
                (0, s.jsxs)(
                  o.P.div,
                  {
                    variants: t,
                    className:
                      "relative rounded-[16px] border border-[#0CA0B2]/30 transition-all duration-300 cursor-pointer group overflow-hidden hover:border-[#0CA0B2]/80",
                    style: {
                      background:
                        "linear-gradient(180deg, rgba(12,25,30,0.9) 0%, rgba(8,18,22,0.9) 55%, rgba(12,25,30,0.75) 100%)",
                    },
                    children: [
                      (0, s.jsxs)("div", {
                        className: "pointer-events-none absolute inset-0",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "absolute -top-24 -left-24 w-[260px] h-[260px] rounded-full",
                            style: {
                              background:
                                "radial-gradient(circle, rgba(12,160,178,0.10) 0%, rgba(12,160,178,0) 60%)",
                              filter: "blur(6px)",
                            },
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "absolute -top-24 -right-24 w-[200px] h-[200px] rounded-full",
                            style: {
                              background:
                                "radial-gradient(circle, rgba(12,160,178,0.08) 0%, rgba(12,160,178,0) 60%)",
                              filter: "blur(8px)",
                            },
                          }),
                          (0, s.jsx)(e.icon, {
                            className:
                              "absolute top-6 right-6 text-8xl text-[#0DA9BB]/10 opacity-0 transform-gpu scale-75 -rotate-12 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 transition-all duration-300 ease-in-out",
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "absolute bottom-0 left-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out",
                            style: {
                              background:
                                "radial-gradient(circle at 0 100%, rgba(14, 200, 217, 0.15) 0%, transparent 50%)",
                            },
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "relative z-10 p-6 flex flex-col h-full",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "text-[10px] text-[#0CA0B2]/80 uppercase font-medium mb-4 tracking-wider",
                            children: e.category,
                          }),
                          (0, s.jsx)("h3", {
                            className:
                              "text-[18px] font-semibold text-[#e8edf5] mb-4 leading-[1.4] flex-grow",
                            children: e.title,
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "text-[14px] text-gray-400 mb-6 leading-[1.6]",
                            children: e.description,
                          }),
                        ],
                      }),
                    ],
                  },
                  a,
                ),
              ),
            }),
          }),
        });
      }
    },
  },
  (e) => {
    (e.O(
      0,
      [
        574, 711, 362, 446, 603, 949, 204, 844, 862, 573, 425, 396, 371, 441,
        794, 358,
      ],
      () => e((e.s = 68649)),
    ),
      (_N_E = e.O()));
  },
]);
