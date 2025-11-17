(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [355],
    {
      11544: (e, t, a) => {
        "use strict";
        function r(e) {
          let t = `${e}:zkfile-api-key-salt-v1`,
            a = new TextEncoder().encode(t),
            r = 0;
          for (let e = 0; e < a.length; e++)
            ((r = (r << 5) - r + a[e]), (r &= r));
          let s = Math.abs(r).toString(16).padStart(8, "0"),
            l = e.slice(0, 4),
            i = e.slice(-4);
          return `zkf_${l}_${s}_${i}`;
        }
        a.d(t, { XH: () => r });
      },
      24681: (e, t, a) => {
        "use strict";
        a.d(t, { s: () => r });
        class r {
          storeFileInfo(e) {
            let t = this.getAllFiles();
            (t.push(e), localStorage.setItem(this.FILES_KEY, JSON.stringify(t)));
          }
          getAllFiles() {
            let e = localStorage.getItem(this.FILES_KEY);
            return e ? JSON.parse(e) : [];
          }
          getFileByHash(e) {
            return this.getAllFiles().find((t) => t.fileHash === e) || null;
          }
          storeKeyInfo(e, t) {
            let a = this.getAllKeys();
            ((a[e] = t), localStorage.setItem(this.KEYS_KEY, JSON.stringify(a)));
          }
          getKeyInfo(e) {
            return this.getAllKeys()[e] || null;
          }
          getAllKeys() {
            let e = localStorage.getItem(this.KEYS_KEY);
            return e ? JSON.parse(e) : {};
          }
          deleteFile(e) {
            let t = this.getAllFiles().filter((t) => t.fileHash !== e);
            localStorage.setItem(this.FILES_KEY, JSON.stringify(t));
            let a = this.getAllKeys();
            (delete a[e], localStorage.setItem(this.KEYS_KEY, JSON.stringify(a)));
          }
          clearAll() {
            (localStorage.removeItem(this.FILES_KEY),
              localStorage.removeItem(this.KEYS_KEY));
          }
          constructor() {
            ((this.FILES_KEY = "zkfile_files"), (this.KEYS_KEY = "zkfile_keys"));
          }
        }
      },
      61276: () => {},
      76115: (e, t, a) => {
        "use strict";
        a.d(t, { L: () => l });
        var r = a(48070),
          s = a(3013);
        class l {
          async deriveKey(e, t) {
            let a = t || crypto.getRandomValues(new Uint8Array(16)),
              r = new TextEncoder().encode(e),
              s = await crypto.subtle.importKey("raw", r, "PBKDF2", !1, [
                "deriveBits",
                "deriveKey",
              ]);
            return {
              key: await crypto.subtle.deriveKey(
                { name: "PBKDF2", salt: a, iterations: 1e5, hash: "SHA-256" },
                s,
                { name: "AES-GCM", length: 256 },
                !0,
                ["encrypt", "decrypt"],
              ),
              salt: a,
            };
          }
          async encryptFile(e, t) {
            let { key: a, salt: l } = await this.deriveKey(t),
              i = crypto.getRandomValues(new Uint8Array(12)),
              n = await e.arrayBuffer(),
              o = await crypto.subtle.encrypt({ name: "AES-GCM", iv: i }, a, n),
              d = (0, r.sc)(new Uint8Array(o)),
              c = (0, s.My)(d);
            return {
              ciphertext: new Uint8Array(o),
              iv: i,
              salt: l,
              metadata: { filename: e.name, size: e.size, type: e.type, hash: c },
            };
          }
          async decryptFile(e, t) {
            let { key: a } = await this.deriveKey(t, e.salt);
            return new File(
              [
                await crypto.subtle.decrypt(
                  { name: "AES-GCM", iv: e.iv },
                  a,
                  e.ciphertext,
                ),
              ],
              e.metadata.filename,
              { type: e.metadata.type },
            );
          }
          async exportKey(e) {
            return btoa(
              String.fromCharCode(
                ...new Uint8Array(await crypto.subtle.exportKey("raw", e)),
              ),
            );
          }
          async verifyIntegrity(e) {
            let t = (0, r.sc)(e.ciphertext);
            return (0, s.My)(t) === e.metadata.hash;
          }
        }
      },
      89513: () => {},
      94099: (e, t, a) => {
        "use strict";
        a.d(t, { A: () => g });
        var r = a(95155),
          s = a(12115),
          l = a(85146),
          i = a(56843),
          n = a(32026),
          o = a(23226),
          d = a(73596),
          c = a(12505),
          x = a(5772),
          p = a(31574);
        function g() {
          let e,
            t,
            {
              publicKey: a,
              connected: g,
              disconnect: b,
              select: h,
              wallets: m,
              wallet: u,
            } = (0, l.v)(),
            { connection: v } = (0, i.w)(),
            [y, f] = (0, s.useState)(!1),
            [j, w] = (0, s.useState)(!1),
            [N, _] = (0, s.useState)(null),
            [C, S] = (0, s.useState)(!1),
            [A, k] = (0, s.useState)(!1),
            F = (0, s.useMemo)(
              () =>
                Array.from({ length: 8 }, (e, t) => ({
                  left: 100 * Math.random(),
                  top: 100 * Math.random(),
                  duration: 3 + 4 * Math.random(),
                  delay: 2 * Math.random(),
                })),
              [],
            ),
            E = (0, s.useCallback)(async () => {
              if (a)
                try {
                  let e = await v.getBalance(a);
                  _(e / d.Sr);
                } catch (e) {
                  (console.error("Error fetching balance:", e), _(0));
                }
            }, [a, v]);
          (0, s.useEffect)(() => {
            let e = !0;
            return (
              g &&
                a &&
                E().then(() => {
                  if (!e) return;
                }),
              () => {
                e = !1;
              }
            );
          }, [g, a, E]);
          let B = async (e) => {
            (h(e), f(!1));
          };
          return (0, r.jsxs)(r.Fragment, {
            children: [
              g
                ? (0, r.jsxs)("button", {
                    onClick: () => w(!0),
                    className:
                      "relative overflow-hidden h-[44px] px-5 inline-flex items-center justify-center gap-2 rounded-lg font-semibold text-[13px] uppercase tracking-[0.3px] transition-all duration-200 ease-out active:scale-[0.98] bg-[linear-gradient(180deg,#5FEFE5_0%,#22D6CF_55%,#0FBFC5_100%)] border border-[rgba(12,188,194,0.55)] text-white shadow-[0_8px_20px_rgba(2,10,18,0.45),0_2px_8px_rgba(12,188,194,0.25)] hover:bg-[linear-gradient(180deg,#8BF6ED_0%,#40E0D7_55%,#15C7C8_100%)] hover:shadow-[0_12px_28px_rgba(2,10,18,0.5),0_4px_12px_rgba(12,188,194,0.30)] hover:border-[rgba(119,233,221,0.65)] active:bg-[linear-gradient(180deg,#2ED1CC_0%,#15C0C6_55%,#0AA3AF_100%)] active:shadow-[0_6px_16px_rgba(2,10,18,0.55)] active:translate-y-[1px]",
                    children: [
                      (0, r.jsx)("span", {
                        className:
                          "absolute top-0 left-0 right-0 h-[55%] bg-gradient-to-b from-white/14 via-white/6 to-transparent rounded-t-xl pointer-events-none",
                      }),
                      (0, r.jsx)("span", {
                        className:
                          "absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-black/40 via-black/25 to-transparent rounded-b-xl pointer-events-none",
                      }),
                      (0, r.jsx)("span", {
                        className:
                          "absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 pointer-events-none",
                      }),
                      (0, r.jsxs)("span", {
                        className: "relative z-10 flex items-center gap-2",
                        children: [
                          (0, r.jsx)(c.lcY, {}),
                          (0, r.jsx)("span", {
                            children:
                              a &&
                              ((e = a.toBase58()),
                              `${e.slice(0, 4)}...${e.slice(-4)}`),
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, r.jsxs)("button", {
                    onClick: () => f(!0),
                    className:
                      "relative overflow-hidden h-[44px] px-5 inline-flex items-center justify-center gap-2 rounded-lg font-semibold text-[13px] uppercase tracking-[0.3px] transition-all duration-200 ease-out active:scale-[0.98] bg-[linear-gradient(180deg,#5FEFE5_0%,#22D6CF_55%,#0FBFC5_100%)] border border-[rgba(12,188,194,0.55)] text-white shadow-[0_8px_20px_rgba(2,10,18,0.45),0_2px_8px_rgba(12,188,194,0.25)] hover:bg-[linear-gradient(180deg,#8BF6ED_0%,#40E0D7_55%,#15C7C8_100%)] hover:shadow-[0_12px_28px_rgba(2,10,18,0.5),0_4px_12px_rgba(12,188,194,0.30)] hover:border-[rgba(119,233,221,0.65)] active:bg-[linear-gradient(180deg,#2ED1CC_0%,#15C0C6_55%,#0AA3AF_100%)] active:shadow-[0_6px_16px_rgba(2,10,18,0.55)] active:translate-y-[1px]",
                    children: [
                      (0, r.jsx)("span", {
                        className:
                          "absolute top-0 left-0 right-0 h-[55%] bg-gradient-to-b from-white/14 via-white/6 to-transparent rounded-t-xl pointer-events-none",
                      }),
                      (0, r.jsx)("span", {
                        className:
                          "absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-black/40 via-black/25 to-transparent rounded-b-xl pointer-events-none",
                      }),
                      (0, r.jsx)("span", {
                        className:
                          "absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10 pointer-events-none",
                      }),
                      (0, r.jsxs)("span", {
                        className: "relative z-10 flex items-center gap-2",
                        children: [
                          (0, r.jsx)(c.lcY, {}),
                          (0, r.jsx)("span", { children: "Connect Wallet" }),
                        ],
                      }),
                    ],
                  }),
              (0, r.jsx)(n.e, {
                appear: !0,
                show: y,
                as: s.Fragment,
                children: (0, r.jsxs)(o.lG, {
                  as: "div",
                  className: "relative z-50",
                  onClose: () => f(!1),
                  children: [
                    (0, r.jsx)(n.e.Child, {
                      as: s.Fragment,
                      enter: "ease-out duration-300",
                      enterFrom: "opacity-0",
                      enterTo: "opacity-100",
                      leave: "ease-in duration-200",
                      leaveFrom: "opacity-100",
                      leaveTo: "opacity-0",
                      children: (0, r.jsx)("div", {
                        className: "fixed inset-0 bg-black/60 backdrop-blur-sm",
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "fixed inset-0 overflow-y-auto",
                      children: (0, r.jsx)("div", {
                        className:
                          "flex min-h-full items-center justify-center p-4",
                        children: (0, r.jsx)(n.e.Child, {
                          as: s.Fragment,
                          enter: "ease-out duration-300",
                          enterFrom: "opacity-0 scale-95",
                          enterTo: "opacity-100 scale-100",
                          leave: "ease-in duration-200",
                          leaveFrom: "opacity-100 scale-100",
                          leaveTo: "opacity-0 scale-95",
                          children: (0, r.jsxs)(o.lG.Panel, {
                            className:
                              "w-full max-w-lg transform overflow-visible rounded-[28px] transition-all relative",
                            style: {
                              background:
                                "linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(15,17,19,1) 100%)",
                              boxShadow:
                                "0 0 0 1px rgba(12,188,194,0.25), 0 32px 96px rgba(0,0,0,0.9), 0 12px 48px rgba(12,188,194,0.2), inset 0 2px 0 rgba(255,255,255,0.03)",
                            },
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "absolute -inset-[1px] rounded-[28px] opacity-60 pointer-events-none",
                              }),
                              (0, r.jsx)("div", {
                                className:
                                  "absolute inset-0 rounded-[28px] backdrop-blur-2xl bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none",
                              }),
                              (0, r.jsx)("div", {
                                className:
                                  "absolute inset-0 overflow-hidden rounded-[28px] pointer-events-none",
                                children: F.map((e, t) =>
                                  (0, r.jsx)(
                                    "div",
                                    {
                                      className:
                                        "absolute w-1 h-1 bg-[#0CA0B2] rounded-full opacity-40",
                                      style: {
                                        left: `${e.left}%`,
                                        top: `${e.top}%`,
                                        animation: `float ${e.duration}s ease-in-out infinite`,
                                        animationDelay: `${e.delay}s`,
                                      },
                                    },
                                    t,
                                  ),
                                ),
                              }),
                              (0, r.jsxs)("div", {
                                className: "relative z-10 p-6",
                                children: [
                                  (0, r.jsxs)("div", {
                                    className:
                                      "flex items-center justify-between mb-8",
                                    children: [
                                      (0, r.jsxs)("div", {
                                        children: [
                                          (0, r.jsx)(o.lG.Title, {
                                            className:
                                              "text-[28px] font-bold text-white mb-1",
                                            style: {
                                              textShadow:
                                                "0 0 20px rgba(12,188,194,0.4), 0 2px 8px rgba(0,0,0,0.6)",
                                            },
                                            children: "Connect Wallet",
                                          }),
                                          (0, r.jsx)("p", {
                                            className:
                                              "text-[#0CA0B2] text-[13px] font-medium",
                                            children: "Select your provider",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)("button", {
                                        onClick: () => f(!1),
                                        className:
                                          "w-10 h-10 flex items-center justify-center rounded-xl text-gray-400 hover:text-white hover:bg-[#0CA0B2]/10 transition-all border border-transparent hover:border-[#0CA0B2]/30",
                                        children: (0, r.jsx)(c.QCr, {}),
                                      }),
                                    ],
                                  }),
                                  (0, r.jsx)("div", {
                                    className: "grid grid-cols-1 gap-4",
                                    children: m
                                      .filter(
                                        (e) =>
                                          "Installed" === e.readyState ||
                                          "Loadable" === e.readyState,
                                      )
                                      .map((e, t) =>
                                        (0, r.jsxs)(
                                          p.P.button,
                                          {
                                            initial: { opacity: 0, y: 20 },
                                            animate: { opacity: 1, y: 0 },
                                            transition: { delay: 0.1 * t },
                                            onClick: () => B(e.adapter.name),
                                            className:
                                              "group relative p-5 rounded-[18px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
                                            style: {
                                              background:
                                                "linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(5,8,10,0.8) 100%)",
                                              border:
                                                "1px solid rgba(12,188,194,0.2)",
                                              boxShadow:
                                                "0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                                            },
                                            children: [
                                              (0, r.jsx)("div", {
                                                className:
                                                  "absolute inset-0 rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                                style: {
                                                  background:
                                                    "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(12,188,194,0.15) 0%, transparent 50%)",
                                                },
                                              }),
                                              (0, r.jsx)("div", {
                                                className:
                                                  "absolute inset-0 rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                                style: {
                                                  background:
                                                    "linear-gradient(110deg, transparent 25%, rgba(95,239,229,0.1) 50%, transparent 75%)",
                                                  backgroundSize: "200% 100%",
                                                  animation:
                                                    "shimmer 2s infinite",
                                                },
                                              }),
                                              (0, r.jsxs)("div", {
                                                className:
                                                  "relative z-10 flex items-center gap-5",
                                                children: [
                                                  (0, r.jsxs)("div", {
                                                    className: "relative",
                                                    children: [
                                                      (0, r.jsx)("div", {
                                                        className:
                                                          "absolute inset-0 bg-[#0CA0B2] rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity",
                                                      }),
                                                      (0, r.jsx)("div", {
                                                        className:
                                                          "relative w-14 h-14 rounded-xl overflow-hidden border-2 border-[#0CA0B2]/30 group-hover:border-[#0CA0B2]/60 transition-all",
                                                        style: {
                                                          boxShadow:
                                                            "0 4px 12px rgba(12,188,194,0.2)",
                                                        },
                                                        children: (0, r.jsx)(
                                                          x.default,
                                                          {
                                                            src: e.adapter.icon,
                                                            alt: e.adapter.name,
                                                            width: 56,
                                                            height: 56,
                                                            className:
                                                              "object-cover",
                                                          },
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                    className: "flex-1 text-left",
                                                    children: [
                                                      (0, r.jsx)("p", {
                                                        className:
                                                          "text-white font-bold text-[17px] mb-1 group-hover:text-[#5FEFE5] transition-colors",
                                                        children: e.adapter.name,
                                                      }),
                                                      (0, r.jsxs)("div", {
                                                        className:
                                                          "flex items-center gap-2",
                                                        children: [
                                                          (0, r.jsx)("div", {
                                                            className:
                                                              "w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse",
                                                          }),
                                                          (0, r.jsx)("p", {
                                                            className:
                                                              "text-green-400 text-[12px] font-medium",
                                                            children:
                                                              "Installed" ===
                                                              e.readyState
                                                                ? "Detected"
                                                                : "Available",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, r.jsx)(c.X6T, {
                                                    className:
                                                      "text-[#0CA0B2] text-lg opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          },
                                          e.adapter.name,
                                        ),
                                      ),
                                  }),
                                  0 ===
                                    m.filter(
                                      (e) =>
                                        "Installed" === e.readyState ||
                                        "Loadable" === e.readyState,
                                    ).length &&
                                    (0, r.jsxs)("div", {
                                      className:
                                        "text-center py-16 px-6 rounded-[18px] border border-[#0CA0B2]/20",
                                      style: {
                                        background:
                                          "radial-gradient(circle at center, rgba(12,188,194,0.05) 0%, transparent 70%)",
                                      },
                                      children: [
                                        (0, r.jsx)("div", {
                                          className:
                                            "w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center relative",
                                          style: {
                                            background:
                                              "radial-gradient(circle, rgba(12,188,194,0.15) 0%, rgba(12,188,194,0.05) 100%)",
                                            boxShadow:
                                              "0 0 40px rgba(12,188,194,0.2), inset 0 0 20px rgba(12,188,194,0.1)",
                                          },
                                          children: (0, r.jsx)(c.lcY, {
                                            className: "text-[#0CA0B2] text-3xl",
                                          }),
                                        }),
                                        (0, r.jsx)("p", {
                                          className:
                                            "text-gray-300 text-[15px] font-medium mb-2",
                                          children: "No Wallet Detected",
                                        }),
                                        (0, r.jsx)("p", {
                                          className:
                                            "text-gray-500 text-[13px] leading-relaxed max-w-xs mx-auto",
                                          children:
                                            "Please install a Solana wallet extension to continue",
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, r.jsx)(n.e, {
                appear: !0,
                show: j,
                as: s.Fragment,
                children: (0, r.jsxs)(o.lG, {
                  as: "div",
                  className: "relative z-50",
                  onClose: () => w(!1),
                  children: [
                    (0, r.jsx)(n.e.Child, {
                      as: s.Fragment,
                      enter: "ease-out duration-300",
                      enterFrom: "opacity-0",
                      enterTo: "opacity-100",
                      leave: "ease-in duration-200",
                      leaveFrom: "opacity-100",
                      leaveTo: "opacity-0",
                      children: (0, r.jsx)("div", {
                        className: "fixed inset-0 bg-black/60 backdrop-blur-sm",
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "fixed inset-0 overflow-y-auto",
                      children: (0, r.jsx)("div", {
                        className:
                          "flex min-h-full items-center justify-center p-4",
                        children: (0, r.jsx)(n.e.Child, {
                          as: s.Fragment,
                          enter: "ease-out duration-300",
                          enterFrom: "opacity-0 scale-95",
                          enterTo: "opacity-100 scale-100",
                          leave: "ease-in duration-200",
                          leaveFrom: "opacity-100 scale-100",
                          leaveTo: "opacity-0 scale-95",
                          children: (0, r.jsxs)(o.lG.Panel, {
                            className:
                              "w-full max-w-md transform overflow-hidden rounded-[20px] border border-[#0CA0B2]/30 shadow-[0_20px_60px_rgba(2,10,18,0.6),0_8px_24px_rgba(12,188,194,0.2)] transition-all relative",
                            style: {
                              background:
                                "linear-gradient(180deg, rgba(12,25,30,0.95) 0%, rgba(8,18,22,0.95) 55%, rgba(12,25,30,0.9) 100%)",
                            },
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "absolute top-0 left-0 right-0 h-[1px]",
                                style: {
                                  background:
                                    "linear-gradient(90deg, transparent 0%, rgba(12,160,178,0.8) 50%, transparent 100%)",
                                  filter: "blur(0.5px)",
                                },
                              }),
                              (0, r.jsxs)("div", {
                                className: "pointer-events-none absolute inset-0",
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "absolute -top-16 -left-16 w-[180px] h-[180px] rounded-full",
                                    style: {
                                      background:
                                        "radial-gradient(circle, rgba(12,160,178,0.12) 0%, rgba(12,160,178,0) 60%)",
                                      filter: "blur(8px)",
                                    },
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "absolute -top-16 -right-16 w-[140px] h-[140px] rounded-full",
                                    style: {
                                      background:
                                        "radial-gradient(circle, rgba(12,160,178,0.08) 0%, rgba(12,160,178,0) 60%)",
                                      filter: "blur(10px)",
                                    },
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: "relative z-10 p-8",
                                children: [
                                  (0, r.jsxs)("div", {
                                    className:
                                      "flex items-center justify-between mb-6",
                                    children: [
                                      (0, r.jsx)(o.lG.Title, {
                                        className:
                                          "text-[24px] font-bold text-white",
                                        style: {
                                          textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                                        },
                                        children: "Wallet Info",
                                      }),
                                      (0, r.jsx)("button", {
                                        onClick: () => w(!1),
                                        className:
                                          "w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all",
                                        children: (0, r.jsx)(c.QCr, {}),
                                      }),
                                    ],
                                  }),
                                  u &&
                                    (0, r.jsxs)("div", {
                                      className:
                                        "flex items-center gap-4 mb-6 p-5 rounded-[12px] border border-[#0CA0B2]/20 relative overflow-hidden",
                                      style: {
                                        background:
                                          "linear-gradient(135deg, rgba(12,25,30,0.6) 0%, rgba(8,18,22,0.8) 100%)",
                                      },
                                      children: [
                                        (0, r.jsx)("div", {
                                          className:
                                            "w-14 h-14 rounded-lg overflow-hidden border border-white/10",
                                          children: (0, r.jsx)(x.default, {
                                            src: u.adapter.icon,
                                            alt: u.adapter.name,
                                            width: 56,
                                            height: 56,
                                            className: "object-cover",
                                          }),
                                        }),
                                        (0, r.jsxs)("div", {
                                          children: [
                                            (0, r.jsx)("p", {
                                              className:
                                                "text-white font-semibold text-[16px]",
                                              children: u.adapter.name,
                                            }),
                                            (0, r.jsxs)("div", {
                                              className:
                                                "flex items-center gap-1.5 mt-1",
                                              children: [
                                                (0, r.jsx)("div", {
                                                  className:
                                                    "w-2 h-2 rounded-full bg-green-500 animate-pulse",
                                                }),
                                                (0, r.jsx)("p", {
                                                  className:
                                                    "text-green-400 text-[12px] font-medium",
                                                  children: "Connected",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  (0, r.jsxs)("div", {
                                    className: "mb-6",
                                    children: [
                                      (0, r.jsx)("label", {
                                        className:
                                          "block text-[13px] text-gray-400 mb-3 font-medium",
                                        children: "Wallet Address",
                                      }),
                                      (0, r.jsxs)("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                          (0, r.jsx)("div", {
                                            className:
                                              "flex-1 px-4 py-3.5 rounded-[10px] border border-[#0CA0B2]/20",
                                            style: {
                                              background:
                                                "linear-gradient(135deg, rgba(12,25,30,0.4) 0%, rgba(8,18,22,0.6) 100%)",
                                            },
                                            children: (0, r.jsx)("p", {
                                              className:
                                                "text-white font-mono text-[13px] break-all",
                                              children: A
                                                ? a?.toBase58()
                                                : ((t = a?.toBase58() || ""),
                                                  "•".repeat(t.length)),
                                            }),
                                          }),
                                          (0, r.jsx)("button", {
                                            onClick: () => k(!A),
                                            className:
                                              "p-3.5 bg-[#0CA0B2]/10 border border-[#0CA0B2]/30 text-[#0CA0B2] rounded-[10px] hover:bg-[#0CA0B2]/20 hover:border-[#0CA0B2]/50 transition-all",
                                            title: A
                                              ? "Hide address"
                                              : "Show address",
                                            children: A
                                              ? (0, r.jsx)(c.mx3, {})
                                              : (0, r.jsx)(c.Ny1, {}),
                                          }),
                                          (0, r.jsx)("button", {
                                            onClick: () => {
                                              a &&
                                                (navigator.clipboard.writeText(
                                                  a.toBase58(),
                                                ),
                                                S(!0),
                                                setTimeout(() => S(!1), 2e3));
                                            },
                                            className:
                                              "p-3.5 bg-[#0CA0B2]/10 border border-[#0CA0B2]/30 text-[#0CA0B2] rounded-[10px] hover:bg-[#0CA0B2]/20 hover:border-[#0CA0B2]/50 transition-all",
                                            title: "Copy address",
                                            children: C
                                              ? (0, r.jsx)(c.CMH, {
                                                  className: "text-green-500",
                                                })
                                              : (0, r.jsx)(c.paH, {}),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("div", {
                                    className: "mb-6",
                                    children: [
                                      (0, r.jsx)("label", {
                                        className:
                                          "block text-[13px] text-gray-400 mb-3 font-medium",
                                        children: "SOL Balance",
                                      }),
                                      (0, r.jsx)("div", {
                                        className:
                                          "px-5 py-4 rounded-[10px] border border-[#0CA0B2]/20",
                                        style: {
                                          background:
                                            "linear-gradient(135deg, rgba(12,25,30,0.4) 0%, rgba(8,18,22,0.6) 100%)",
                                        },
                                        children: (0, r.jsx)("p", {
                                          className:
                                            "text-white font-bold text-[20px]",
                                          children:
                                            null !== N
                                              ? `${N.toFixed(4)} SOL`
                                              : (0, r.jsx)("span", {
                                                  className:
                                                    "text-gray-400 text-[16px] font-normal",
                                                  children: "Loading...",
                                                }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("div", {
                                    className: "flex gap-3",
                                    children: [
                                      (0, r.jsx)("button", {
                                        onClick: () => w(!1),
                                        className:
                                          "flex-1 px-5 py-3 bg-white/5 border border-white/10 text-white rounded-[10px] font-semibold hover:bg-white/10 hover:border-white/20 transition-all text-[13px] uppercase tracking-[0.3px]",
                                        children: "Close",
                                      }),
                                      (0, r.jsx)("button", {
                                        onClick: () => {
                                          (b(), w(!1));
                                        },
                                        className:
                                          "flex-1 px-5 py-3 bg-gradient-to-r from-red-500 to-red-600 border border-red-500/50 text-white rounded-[10px] font-semibold hover:from-red-600 hover:to-red-700 hover:shadow-[0_4px_12px_rgba(239,68,68,0.3)] transition-all text-[13px] uppercase tracking-[0.3px]",
                                        children: "Disconnect",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
      },
    },
  ]);
  