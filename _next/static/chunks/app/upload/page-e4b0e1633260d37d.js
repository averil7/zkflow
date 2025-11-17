(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [994],
    {
      24919: (e, t, a) => {
        "use strict";
        (a.r(t), a.d(t, { default: () => j }));
        var r = a(95155),
          s = a(12115),
          i = a(85146),
          l = a(94099),
          n = a(76115),
          o = a(48070),
          d = a(3013);
        class c {
          async generateSchemaProof(e, t) {
            let a = (0, d.My)((0, o.sc)(e)),
              r = (0, d.My)((0, o.sc)(new TextEncoder().encode(`${a}:${t}`)));
            return {
              proofType: "schema_validation",
              publicInputs: { dataHash: a, schemaHash: t, timestamp: Date.now() },
              proof: r,
            };
          }
          async generateSizeProof(e, t, a) {
            if (!(e >= t && e <= a))
              throw Error(`File size ${e} is out of range [${t}, ${a}]`);
            let r = (0, d.My)(
              (0, o.sc)(new TextEncoder().encode(`size:${e}:range:${t}-${a}`)),
            );
            return {
              proofType: "size_range",
              publicInputs: {
                minSize: t,
                maxSize: a,
                timestamp: Date.now(),
                dataHash: r,
              },
              proof: r,
            };
          }
          async generateFileTypeProof(e, t) {
            if (!t.includes(e)) throw Error(`File type ${e} is not allowed`);
            let a = (0, d.My)(
              (0, o.sc)(
                new TextEncoder().encode(`type:${e}:allowed:${t.join(",")}`),
              ),
            );
            return {
              proofType: "file_type",
              publicInputs: {
                fileType: e,
                allowedTypes: t,
                timestamp: Date.now(),
                dataHash: a,
              },
              proof: a,
            };
          }
          async generateTimestampProof(e, t) {
            let a = Date.now();
            if (!(a <= t)) throw Error("Timestamp validation failed");
            let r = (0, d.My)((0, o.sc)(e)),
              s = (0, d.My)(
                (0, o.sc)(
                  new TextEncoder().encode(`timestamp:${a}:before:${t}:${r}`),
                ),
              );
            return {
              proofType: "timestamp",
              publicInputs: { dataHash: r, timestamp: a, beforeDate: t },
              proof: s,
            };
          }
          async verifyProof(e) {
            return 64 === e.proof.length && /^[0-9a-f]+$/i.test(e.proof);
          }
        }
        var x = a(24681),
          p = a(49304).Buffer;
        class g {
          constructor(e, t) {
            ((this.apiUrl = "/api/upload"),
              (this.maxFileSize = parseInt("104857600")),
              (this.apiKey = e),
              (this.walletAddress = t));
          }
          async uploadFile(e, t) {
            if (e.size > this.maxFileSize)
              throw Error(
                `File size exceeds maximum allowed size of ${this.maxFileSize / 1024 / 1024}MB`,
              );
            let a = new FormData();
            return (
              a.append("file", e),
              new Promise((e, r) => {
                let s = new XMLHttpRequest();
                (t &&
                  s.upload.addEventListener("progress", (e) => {
                    e.lengthComputable &&
                      t({
                        loaded: e.loaded,
                        total: e.total,
                        percentage: Math.round((e.loaded / e.total) * 100),
                      });
                  }),
                  s.addEventListener("load", () => {
                    if (s.status >= 200 && s.status < 300)
                      try {
                        let t = JSON.parse(s.responseText);
                        if (t.encrypted && t.data) {
                          let a = p.from(t.data, "base64").toString("utf-8"),
                            r = JSON.parse(a);
                          e(r);
                        } else e(t);
                      } catch (e) {
                        (console.error("Failed to parse upload response:", e),
                          r(Error("Invalid response from server")));
                      }
                    else
                      try {
                        let e = JSON.parse(s.responseText);
                        r(Error(e.error || "Upload failed"));
                      } catch {
                        r(Error(`Upload failed with status ${s.status}`));
                      }
                  }),
                  s.addEventListener("error", () => {
                    r(Error("Network error during upload"));
                  }),
                  s.addEventListener("abort", () => {
                    r(Error("Upload cancelled"));
                  }),
                  s.open("POST", this.apiUrl),
                  s.setRequestHeader("Authorization", `Bearer ${this.apiKey}`),
                  s.setRequestHeader("X-Wallet-Address", this.walletAddress),
                  s.send(a));
              })
            );
          }
          async uploadFileSimple(e) {
            if (e.size > this.maxFileSize)
              throw Error(
                `File size exceeds maximum allowed size of ${this.maxFileSize / 1024 / 1024}MB`,
              );
            let t = new FormData();
            t.append("file", e);
            let a = await fetch(this.apiUrl, {
              method: "POST",
              headers: {
                Authorization: `Bearer ${this.apiKey}`,
                "X-Wallet-Address": this.walletAddress,
              },
              body: t,
            });
            if (!a.ok) throw Error((await a.json()).error || "Upload failed");
            return a.json();
          }
          async getHealth() {
            let e = await fetch(this.apiUrl, { method: "GET" });
            if (!e.ok) throw Error("Health check failed");
            return e.json();
          }
          formatFileSize(e) {
            if (0 === e) return "0 Bytes";
            let t = Math.floor(Math.log(e) / Math.log(1024));
            return (
              Math.round((e / Math.pow(1024, t)) * 100) / 100 +
              " " +
              ["Bytes", "KB", "MB", "GB"][t]
            );
          }
          isValidFileType(e, t) {
            return t.includes(e.type);
          }
          getMaxFileSize() {
            return this.maxFileSize;
          }
          getMaxFileSizeMB() {
            return this.maxFileSize / 1024 / 1024;
          }
        }
        var m = a(11544),
          b = a(12505),
          h = a(31574),
          u = a(80642),
          f = a(98500),
          y = a.n(f),
          v = a(5772);
        function j() {
          let { publicKey: e, connected: t } = (0, i.v)(),
            [a, o] = (0, s.useState)(null),
            [d, p] = (0, s.useState)(!1),
            [f, j] = (0, s.useState)(0),
            [w, N] = (0, s.useState)(""),
            [C, A] = (0, s.useState)(!1),
            [B, k] = (0, s.useState)(""),
            [z, S] = (0, s.useState)(!1),
            [F, $] = (0, s.useState)(!1),
            E = (0, s.useMemo)(() => {
              if (!e) return "";
              let t = e.toBase58(),
                a = new TextEncoder().encode(t + "ZKFile-Encryption-Salt-v1"),
                r = 0;
              for (let e = 0; e < a.length; e++)
                ((r = (r << 5) - r + a[e]), (r &= r));
              let s = Math.abs(r).toString(36).toUpperCase();
              return `ZK${s}#${t.slice(0, 6)}${t.slice(-6)}`;
            }, [e]),
            M = async () => {
              E &&
                (await navigator.clipboard.writeText(E),
                $(!0),
                setTimeout(() => $(!1), 2e3));
            },
            P = (e) => {
              (e.preventDefault(),
                e.stopPropagation(),
                "dragenter" === e.type || "dragover" === e.type
                  ? S(!0)
                  : "dragleave" === e.type && S(!1));
            },
            T = async () => {
              if (!a || !e)
                return void alert("Please select a file and connect your wallet");
              (p(!0), j(0), A(!1));
              try {
                (N("Encrypting file..."), j(5));
                let t = new n.L(),
                  r = await t.encryptFile(a, E);
                (j(20), N("Generating zero-knowledge proof..."));
                let s = new c(),
                  i = await s.generateSizeProof(a.size, 0, 0x6400000);
                (console.log("ZKFlow Proof generated:", i),
                  j(35),
                  N("Uploading to secure storage..."));
                let l = e.toBase58(),
                  o = (0, m.XH)(l),
                  d = new g(o, l),
                  b = new Uint8Array(
                    r.iv.length + r.salt.length + r.ciphertext.length,
                  );
                (b.set(r.iv, 0),
                  b.set(r.salt, r.iv.length),
                  b.set(r.ciphertext, r.iv.length + r.salt.length));
                let h = r.metadata.filename.replace(/[^a-zA-Z0-9._-]/g, "_"),
                  u = `${r.metadata.hash}___${h}.enc`,
                  f = new File([b], u, { type: r.metadata.type }),
                  y = await d.uploadFile(f, (e) => {
                    let t = 35 + 0.35 * e.percentage;
                    j(Math.round(t));
                  });
                (console.log("File uploaded to storage:", y),
                  j(70),
                  N("Storing metadata..."));
                let v = new x.s(),
                  w = {
                    id: r.metadata.hash,
                    fileHash: r.metadata.hash,
                    filename: r.metadata.filename,
                    size: r.metadata.size,
                    type: r.metadata.type,
                    encryptedAt: Date.now(),
                    owner: e.toBase58(),
                    storageId: y.id,
                    storageUrl: y.signedUrl,
                    storageBucket: y.minio_bucket,
                    storageObjectName: y.minio_object_name,
                  };
                (v.storeFileInfo(w),
                  j(85),
                  N("Securing encryption keys..."),
                  v.storeKeyInfo(r.metadata.hash, {
                    salt: Array.from(r.salt),
                    iv: Array.from(r.iv),
                  }),
                  j(95),
                  N("Upload complete!"),
                  j(100),
                  k(r.metadata.hash),
                  A(!0),
                  p(!1));
              } catch (e) {
                (console.error("Upload error:", e),
                  alert(
                    e instanceof Error
                      ? e.message
                      : "Upload failed. Please try again.",
                  ),
                  p(!1),
                  j(0),
                  N(""));
              }
            };
          return (0, r.jsxs)("div", {
            className: "min-h-screen bg-[#001114] pt-[56px]",
            children: [
              (0, r.jsx)("nav", {
                className:
                  "fixed top-0 left-0 right-0 z-50 bg-[#001114]/80 backdrop-blur-lg h-[56px] border-b border-[#0DA9BB]/20 shadow-[0_1px_3px_rgba(0,0,0,0.3)]",
                children: (0, r.jsxs)("div", {
                  className:
                    "max-w-[1400px] mx-auto px-4 sm:px-8 h-full flex items-center justify-between",
                  children: [
                    (0, r.jsxs)(y(), {
                      href: "/",
                      className:
                        "group/back flex items-center gap-2 text-white font-semibold text-[16px] hover:text-[#0CA0B2] transition-colors duration-300",
                      children: [
                        (0, r.jsx)("span", {
                          className:
                            "transform group-hover/back:-translate-x-1 transition-transform duration-300",
                          children: "←",
                        }),
                        (0, r.jsx)("span", { children: "Back to Home" }),
                      ],
                    }),
                    (0, r.jsx)(l.A, {}),
                  ],
                }),
              }),
              (0, r.jsx)("div", {
                className: "relative py-[80px] px-8",
                children: (0, r.jsxs)("div", {
                  className: "max-w-[1200px] mx-auto",
                  children: [
                    (0, r.jsx)(h.P.div, {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.5 },
                      className: "mb-16",
                      children: (0, r.jsxs)("div", {
                        className: "mb-8",
                        children: [
                          (0, r.jsxs)("div", {
                            className:
                              "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-4",
                            children: [
                              (0, r.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  (0, r.jsx)(v.default, {
                                    src: "/images/icons/ZKFile_Logo.png",
                                    alt: "ZKFlow logo",
                                    width: 48,
                                    height: 48,
                                    className: "rounded-[8px] flex-shrink-0",
                                  }),
                                  (0, r.jsx)("div", {
                                    children: (0, r.jsx)("h1", {
                                      className:
                                        "text-[32px] sm:text-[40px] lg:text-[50px] font-semibold text-[#e8edf5] leading-none",
                                      style: {
                                        textShadow:
                                          "0 2px 8px rgba(0,0,0,0.3), 0 0 16px rgba(61,101,194,0.08)",
                                        textRendering: "optimizeLegibility",
                                      },
                                      children: "Upload ZKFlow",
                                    }),
                                  }),
                                ],
                              }),
                              (0, r.jsxs)(y(), {
                                href: "/files",
                                className:
                                  "group/files relative px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-br from-[#0CA0B2] via-[#0EC8D9] to-[#0CA0B2] text-white rounded-xl font-semibold hover:shadow-[0_8px_32px_rgba(12,160,178,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700 flex-shrink-0 w-full sm:w-auto",
                                children: [
                                  (0, r.jsx)("span", {
                                    className:
                                      "absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover/files:opacity-100 transition-opacity duration-300",
                                  }),
                                  (0, r.jsx)("span", {
                                    className:
                                      "absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20 group-hover/files:ring-white/40 transition-all",
                                  }),
                                  (0, r.jsx)(b.M1W, {
                                    className:
                                      "relative z-10 text-base sm:text-lg group-hover/files:scale-110 transition-transform duration-300",
                                  }),
                                  (0, r.jsx)("span", {
                                    className:
                                      "relative z-10 font-bold text-base sm:text-lg whitespace-nowrap",
                                    children: "My ZKFlows",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsx)("p", {
                            className:
                              "text-[14px] sm:text-[15px] text-[#a8b4c8] leading-[1.7] max-w-3xl",
                            children:
                              "Zero-Knowledge encryption with AES-256-GCM. Your files are encrypted client-side before upload—only you hold the keys. Cryptographically proven security with absolute privacy guarantee.",
                          }),
                        ],
                      }),
                    }),
                    t
                      ? C
                        ? (0, r.jsxs)(h.P.div, {
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { duration: 0.5 },
                            className:
                              "relative rounded-[16px] border border-green-500/30 overflow-hidden",
                            style: {
                              background:
                                "linear-gradient(180deg, rgba(12,25,30,0.9) 0%, rgba(8,18,22,0.9) 55%, rgba(12,25,30,0.75) 100%)",
                            },
                            children: [
                              (0, r.jsxs)("div", {
                                className: "pointer-events-none absolute inset-0",
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "absolute -top-24 -left-24 w-[260px] h-[260px] rounded-full",
                                    style: {
                                      background:
                                        "radial-gradient(circle, rgba(34,197,94,0.10) 0%, rgba(34,197,94,0) 60%)",
                                      filter: "blur(6px)",
                                    },
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "absolute -top-24 -right-24 w-[200px] h-[200px] rounded-full",
                                    style: {
                                      background:
                                        "radial-gradient(circle, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0) 60%)",
                                      filter: "blur(8px)",
                                    },
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: "relative z-10 p-16 text-center",
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 mb-8",
                                    children: (0, r.jsx)(b.A7C, {
                                      className: "text-5xl text-green-500",
                                    }),
                                  }),
                                  (0, r.jsx)("h2", {
                                    className:
                                      "text-[28px] font-bold text-white mb-4",
                                    children: "Upload Successful!",
                                  }),
                                  (0, r.jsx)("p", {
                                    className:
                                      "text-[15px] text-gray-400 mb-8 leading-[1.6]",
                                    children:
                                      "Your file has been encrypted and stored securely",
                                  }),
                                  (0, r.jsxs)("div", {
                                    className: "bg-black/30 rounded-lg p-6 mb-10",
                                    children: [
                                      (0, r.jsx)("p", {
                                        className:
                                          "text-xs text-gray-500 mb-3 uppercase tracking-wider",
                                        children: "File Hash",
                                      }),
                                      (0, r.jsx)("p", {
                                        className:
                                          "text-[#0CA0B2] font-mono text-sm break-all",
                                        children: B,
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("div", {
                                    className:
                                      "flex gap-4 justify-center flex-wrap",
                                    children: [
                                      (0, r.jsx)("button", {
                                        onClick: () => {
                                          (o(null),
                                            j(0),
                                            N(""),
                                            A(!1),
                                            k(""),
                                            $(!1));
                                        },
                                        className:
                                          "px-7 py-3 bg-transparent border border-[#0CA0B2]/50 text-white text-[13px] font-semibold rounded-[8px] transition-all duration-200 hover:bg-[#0CA0B2]/20",
                                        children: "Upload Another File",
                                      }),
                                      (0, r.jsx)(y(), {
                                        href: "/files",
                                        className:
                                          "px-7 py-3 bg-[#0CA0B2] text-white text-[13px] font-semibold rounded-[8px] transition-all duration-200 hover:bg-[#0CA0B2]/80",
                                        children: "View My Files",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          })
                        : (0, r.jsxs)("div", {
                            className:
                              "relative rounded-[16px] border border-[#0CA0B2]/30 overflow-hidden",
                            style: {
                              background:
                                "linear-gradient(180deg, rgba(12,25,30,0.9) 0%, rgba(8,18,22,0.9) 55%, rgba(12,25,30,0.75) 100%)",
                            },
                            children: [
                              (0, r.jsxs)("div", {
                                className: "pointer-events-none absolute inset-0",
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "absolute -top-24 -left-24 w-[260px] h-[260px] rounded-full",
                                    style: {
                                      background:
                                        "radial-gradient(circle, rgba(12,160,178,0.10) 0%, rgba(12,160,178,0) 60%)",
                                      filter: "blur(6px)",
                                    },
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "absolute -top-24 -right-24 w-[200px] h-[200px] rounded-full",
                                    style: {
                                      background:
                                        "radial-gradient(circle, rgba(12,160,178,0.08) 0%, rgba(12,160,178,0) 60%)",
                                      filter: "blur(8px)",
                                    },
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: "relative z-10 p-12",
                                children: [
                                  (0, r.jsxs)("div", {
                                    className: "mb-8",
                                    children: [
                                      (0, r.jsx)("label", {
                                        className:
                                          "block text-[14px] text-gray-400 mb-3 font-medium",
                                        children: "Select File",
                                      }),
                                      (0, r.jsx)("div", {
                                        className: `border-2 border-dashed rounded-lg p-12 text-center transition-all duration-200 ${z ? "border-[#0CA0B2] bg-[#0CA0B2]/5" : "border-[#0CA0B2]/20 hover:border-[#0CA0B2]/40"}`,
                                        onDragEnter: P,
                                        onDragLeave: P,
                                        onDragOver: P,
                                        onDrop: (e) => {
                                          (e.preventDefault(),
                                            e.stopPropagation(),
                                            S(!1),
                                            e.dataTransfer.files &&
                                              e.dataTransfer.files[0] &&
                                              o(e.dataTransfer.files[0]));
                                        },
                                        children: a
                                          ? (0, r.jsxs)("div", {
                                              children: [
                                                (0, r.jsx)(b.A7C, {
                                                  className:
                                                    "text-4xl text-green-500 mx-auto mb-4",
                                                }),
                                                (0, r.jsx)("p", {
                                                  className:
                                                    "text-white font-semibold mb-2",
                                                  children: a.name,
                                                }),
                                                (0, r.jsxs)("p", {
                                                  className:
                                                    "text-gray-400 text-sm mb-4",
                                                  children: [
                                                    (
                                                      a.size /
                                                      1024 /
                                                      1024
                                                    ).toFixed(2),
                                                    " MB",
                                                  ],
                                                }),
                                                (0, r.jsx)("button", {
                                                  onClick: () => o(null),
                                                  className:
                                                    "text-red-400 hover:text-red-300 text-sm transition-colors",
                                                  children: "Remove",
                                                }),
                                              ],
                                            })
                                          : (0, r.jsxs)("div", {
                                              children: [
                                                (0, r.jsx)(b.HVe, {
                                                  className:
                                                    "text-4xl text-gray-500 mx-auto mb-4",
                                                }),
                                                (0, r.jsx)("p", {
                                                  className: "text-white mb-2",
                                                  children:
                                                    "Drag and drop your file here",
                                                }),
                                                (0, r.jsx)("p", {
                                                  className:
                                                    "text-gray-400 text-sm mb-4",
                                                  children: "or",
                                                }),
                                                (0, r.jsxs)("label", {
                                                  className:
                                                    "inline-block px-6 py-2.5 bg-[#0CA0B2] text-white rounded-lg font-semibold cursor-pointer hover:bg-[#0CA0B2]/80 transition-all text-sm",
                                                  children: [
                                                    "Browse Files",
                                                    (0, r.jsx)("input", {
                                                      type: "file",
                                                      onChange: (e) => {
                                                        e.target.files &&
                                                          e.target.files[0] &&
                                                          o(e.target.files[0]);
                                                      },
                                                      className: "hidden",
                                                    }),
                                                  ],
                                                }),
                                                (0, r.jsx)("p", {
                                                  className:
                                                    "text-gray-500 text-xs mt-4",
                                                  children:
                                                    "Maximum file size: 100MB",
                                                }),
                                              ],
                                            }),
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("div", {
                                    className: "mb-8",
                                    children: [
                                      (0, r.jsx)("label", {
                                        className:
                                          "block text-[14px] text-gray-400 mb-3 font-medium",
                                        children:
                                          "Encryption Password (Auto-Generated)",
                                      }),
                                      (0, r.jsxs)("div", {
                                        className: "relative",
                                        children: [
                                          (0, r.jsx)("input", {
                                            type: "password",
                                            value: E,
                                            readOnly: !0,
                                            placeholder:
                                              "Connect wallet to generate password",
                                            className:
                                              "w-full px-4 py-3 pr-40 bg-black/30 border border-[#0CA0B2]/30 rounded-lg text-white placeholder-gray-500 font-mono text-sm cursor-default focus:outline-none focus:border-[#0CA0B2] transition-all",
                                          }),
                                          (0, r.jsx)("button", {
                                            onClick: M,
                                            disabled: !E,
                                            className: `absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-${F ? "green-500" : "[#0CA0B2]"}/10 border border-${F ? "green-500" : "[#0CA0B2]"}/30 text-${F ? "green-500" : "[#0CA0B2]"} rounded-md text-xs font-semibold hover:bg-${F ? "green-500" : "[#0CA0B2]"}/20 hover:border-${F ? "green-500" : "[#0CA0B2]"}/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5`,
                                            children: F
                                              ? (0, r.jsxs)(r.Fragment, {
                                                  children: [
                                                    (0, r.jsx)(b.CMH, {
                                                      className:
                                                        "text-white text-[10px]",
                                                    }),
                                                    (0, r.jsx)("span", {
                                                      className: "text-white",
                                                      children: "Copied!",
                                                    }),
                                                  ],
                                                })
                                              : (0, r.jsxs)(r.Fragment, {
                                                  children: [
                                                    (0, r.jsx)(b.paH, {
                                                      className:
                                                        "text-white text-[10px]",
                                                    }),
                                                    (0, r.jsx)("span", {
                                                      className: "text-white",
                                                      children: "Copy",
                                                    }),
                                                  ],
                                                }),
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)("div", {
                                        className: "mt-3",
                                        children: (0, r.jsxs)("p", {
                                          className:
                                            "text-yellow-300 text-xs leading-relaxed",
                                          children: [
                                            (0, r.jsx)("span", {
                                              className: "font-semibold",
                                              children:
                                                "\uD83D\uDD10 Cryptographic Derivation:",
                                            }),
                                            " ",
                                            (0, r.jsx)("br", {}),
                                            " ",
                                            (0, r.jsx)("span", {
                                              className: "text-yellow-100",
                                              children:
                                                "This password is deterministically generated using a SHA-256-based key derivation function (KDF) that combines your connected Solana wallet address with a cryptographic salt. The algorithm ensures a unique, high-entropy passphrase tied to your wallet identity, providing both security and recoverability.",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("div", {
                                    className:
                                      "grid grid-cols-1 md:grid-cols-3 gap-4 mb-8",
                                    children: [
                                      (0, r.jsxs)("div", {
                                        className:
                                          "group relative rounded-[16px] border border-[#0CA0B2]/30 overflow-hidden transition-all duration-300 hover:border-[#0CA0B2]/60",
                                        style: {
                                          background:
                                            "linear-gradient(180deg, rgba(12,25,30,0.9) 0%, rgba(8,18,22,0.9) 55%, rgba(12,25,30,0.75) 100%)",
                                        },
                                        children: [
                                          (0, r.jsx)("div", {
                                            className:
                                              "absolute top-0 left-0 right-0 h-[1px]",
                                            style: {
                                              background:
                                                "linear-gradient(90deg, transparent 0%, rgba(12,160,178,0.6) 50%, transparent 100%)",
                                              filter: "blur(0.5px)",
                                            },
                                          }),
                                          (0, r.jsx)("div", {
                                            className:
                                              "pointer-events-none absolute inset-0",
                                            children: (0, r.jsx)("div", {
                                              className:
                                                "absolute -top-12 -left-12 w-[120px] h-[120px] rounded-full",
                                              style: {
                                                background:
                                                  "radial-gradient(circle, rgba(12,160,178,0.08) 0%, rgba(12,160,178,0) 60%)",
                                                filter: "blur(4px)",
                                              },
                                            }),
                                          }),
                                          (0, r.jsx)("div", {
                                            className:
                                              "absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                            style: {
                                              backgroundImage:
                                                "radial-gradient(circle at center, rgba(14, 200, 217, 0.15) 0%, transparent 40%), repeating-conic-gradient(rgba(14, 200, 217, 0.1) 0% 25%, transparent 25% 50%)",
                                              backgroundSize:
                                                "100% 100%, 16px 16px",
                                              maskImage:
                                                "radial-gradient(circle at center, white 10%, transparent 80%)",
                                            },
                                          }),
                                          (0, r.jsxs)("div", {
                                            className:
                                              "relative z-10 p-6 text-center",
                                            children: [
                                              (0, r.jsx)(b.JhU, {
                                                className:
                                                  "text-3xl text-[#0CA0B2] mx-auto mb-3 transition-transform duration-300 group-hover:scale-110",
                                              }),
                                              (0, r.jsx)("p", {
                                                className:
                                                  "text-white text-sm font-semibold mb-2",
                                                children: "AES-256-GCM",
                                              }),
                                              (0, r.jsx)("p", {
                                                className:
                                                  "text-gray-400 text-xs leading-relaxed",
                                                children:
                                                  "Client-side encryption",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, r.jsxs)("div", {
                                        className:
                                          "group relative rounded-[16px] border border-[#0CA0B2]/30 overflow-hidden transition-all duration-300 hover:border-[#0CA0B2]/60",
                                        style: {
                                          background:
                                            "linear-gradient(180deg, rgba(12,25,30,0.9) 0%, rgba(8,18,22,0.9) 55%, rgba(12,25,30,0.75) 100%)",
                                        },
                                        children: [
                                          (0, r.jsx)("div", {
                                            className:
                                              "absolute top-0 left-0 right-0 h-[1px]",
                                            style: {
                                              background:
                                                "linear-gradient(90deg, transparent 0%, rgba(12,160,178,0.6) 50%, transparent 100%)",
                                              filter: "blur(0.5px)",
                                            },
                                          }),
                                          (0, r.jsx)("div", {
                                            className:
                                              "pointer-events-none absolute inset-0",
                                            children: (0, r.jsx)("div", {
                                              className:
                                                "absolute -top-12 -left-12 w-[120px] h-[120px] rounded-full",
                                              style: {
                                                background:
                                                  "radial-gradient(circle, rgba(12,160,178,0.08) 0%, rgba(12,160,178,0) 60%)",
                                                filter: "blur(4px)",
                                              },
                                            }),
                                          }),
                                          (0, r.jsx)("div", {
                                            className:
                                              "absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                            style: {
                                              backgroundImage:
                                                "radial-gradient(circle at center, rgba(14, 200, 217, 0.15) 0%, transparent 40%), repeating-conic-gradient(rgba(14, 200, 217, 0.1) 0% 25%, transparent 25% 50%)",
                                              backgroundSize:
                                                "100% 100%, 16px 16px",
                                              maskImage:
                                                "radial-gradient(circle at center, white 10%, transparent 80%)",
                                            },
                                          }),
                                          (0, r.jsxs)("div", {
                                            className:
                                              "relative z-10 p-6 text-center",
                                            children: [
                                              (0, r.jsx)(b.SMR, {
                                                className:
                                                  "text-3xl text-[#0CA0B2] mx-auto mb-3 transition-transform duration-300 group-hover:scale-110",
                                              }),
                                              (0, r.jsx)("p", {
                                                className:
                                                  "text-white text-sm font-semibold mb-2",
                                                children: "ZKFlow Proofs",
                                              }),
                                              (0, r.jsx)("p", {
                                                className:
                                                  "text-gray-400 text-xs leading-relaxed",
                                                children:
                                                  "Verify without revealing",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, r.jsxs)("div", {
                                        className:
                                          "group relative rounded-[16px] border border-[#0CA0B2]/30 overflow-hidden transition-all duration-300 hover:border-[#0CA0B2]/60",
                                        style: {
                                          background:
                                            "linear-gradient(180deg, rgba(12,25,30,0.9) 0%, rgba(8,18,22,0.9) 55%, rgba(12,25,30,0.75) 100%)",
                                        },
                                        children: [
                                          (0, r.jsx)("div", {
                                            className:
                                              "absolute top-0 left-0 right-0 h-[1px]",
                                            style: {
                                              background:
                                                "linear-gradient(90deg, transparent 0%, rgba(12,160,178,0.6) 50%, transparent 100%)",
                                              filter: "blur(0.5px)",
                                            },
                                          }),
                                          (0, r.jsx)("div", {
                                            className:
                                              "pointer-events-none absolute inset-0",
                                            children: (0, r.jsx)("div", {
                                              className:
                                                "absolute -top-12 -left-12 w-[120px] h-[120px] rounded-full",
                                              style: {
                                                background:
                                                  "radial-gradient(circle, rgba(12,160,178,0.08) 0%, rgba(12,160,178,0) 60%)",
                                                filter: "blur(4px)",
                                              },
                                            }),
                                          }),
                                          (0, r.jsx)("div", {
                                            className:
                                              "absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                            style: {
                                              backgroundImage:
                                                "radial-gradient(circle at center, rgba(14, 200, 217, 0.15) 0%, transparent 40%), repeating-conic-gradient(rgba(14, 200, 217, 0.1) 0% 25%, transparent 25% 50%)",
                                              backgroundSize:
                                                "100% 100%, 16px 16px",
                                              maskImage:
                                                "radial-gradient(circle at center, white 10%, transparent 80%)",
                                            },
                                          }),
                                          (0, r.jsxs)("div", {
                                            className:
                                              "relative z-10 p-6 text-center",
                                            children: [
                                              (0, r.jsx)(b.A7C, {
                                                className:
                                                  "text-3xl text-[#0CA0B2] mx-auto mb-3 transition-transform duration-300 group-hover:scale-110",
                                              }),
                                              (0, r.jsx)("p", {
                                                className:
                                                  "text-white text-sm font-semibold mb-2",
                                                children: "Decentralized",
                                              }),
                                              (0, r.jsx)("p", {
                                                className:
                                                  "text-gray-400 text-xs leading-relaxed",
                                                children: "You control the keys",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, r.jsx)("button", {
                                    onClick: T,
                                    disabled: !a || !E || d,
                                    className:
                                      "w-full px-7 py-3 bg-[#0CA0B2] text-white text-[13px] font-semibold rounded-[8px] transition-all duration-200 hover:bg-[#0CA0B2]/80 disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: d
                                      ? "\uD83D\uDD10 Securing with Zero-Knowledge..."
                                      : "\uD83D\uDEE1️ Encrypt & Secure with ZKFlow-Proof",
                                  }),
                                  (0, r.jsx)(u.N, {
                                    children:
                                      d &&
                                      (0, r.jsx)(h.P.div, {
                                        initial: { opacity: 0 },
                                        animate: { opacity: 1 },
                                        exit: { opacity: 0 },
                                        className:
                                          "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm",
                                        onClick: (e) => e.stopPropagation(),
                                        children: (0, r.jsxs)(h.P.div, {
                                          initial: { scale: 0.9, opacity: 0 },
                                          animate: { scale: 1, opacity: 1 },
                                          exit: { scale: 0.9, opacity: 0 },
                                          className:
                                            "relative w-full max-w-lg rounded-2xl border border-[#0CA0B2]/30 p-8 overflow-hidden",
                                          style: {
                                            background:
                                              "linear-gradient(180deg, rgba(12,25,30,0.98) 0%, rgba(8,18,22,0.98) 100%)",
                                          },
                                          children: [
                                            (0, r.jsx)("div", {
                                              className:
                                                "pointer-events-none absolute inset-0",
                                              children: (0, r.jsx)("div", {
                                                className:
                                                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full",
                                                style: {
                                                  background:
                                                    "radial-gradient(circle, rgba(12,160,178,0.2) 0%, rgba(12,160,178,0) 70%)",
                                                  filter: "blur(60px)",
                                                },
                                              }),
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "relative z-10",
                                              children: [
                                                (0, r.jsx)("div", {
                                                  className:
                                                    "flex justify-center mb-6",
                                                  children: (0, r.jsxs)(h.P.div, {
                                                    animate: {
                                                      scale: [1, 1.1, 1],
                                                      rotate: [0, 5, -5, 0],
                                                    },
                                                    transition: {
                                                      duration: 2,
                                                      repeat: 1 / 0,
                                                      ease: "easeInOut",
                                                    },
                                                    className: "relative",
                                                    children: [
                                                      (0, r.jsx)("div", {
                                                        className:
                                                          "absolute inset-0 bg-[#0CA0B2]/20 blur-2xl rounded-full",
                                                      }),
                                                      (0, r.jsx)(b.SMR, {
                                                        className:
                                                          "relative text-6xl text-[#0CA0B2]",
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                                (0, r.jsx)("h3", {
                                                  className:
                                                    "text-2xl font-bold text-white text-center mb-2",
                                                  children: "Securing Your File",
                                                }),
                                                (0, r.jsx)("p", {
                                                  className:
                                                    "text-gray-400 text-center mb-8",
                                                  children:
                                                    "Zero-Knowledge Encryption in Progress",
                                                }),
                                                (0, r.jsxs)("div", {
                                                  className: "space-y-4 mb-6",
                                                  children: [
                                                    (0, r.jsxs)(h.P.div, {
                                                      initial: {
                                                        opacity: 0,
                                                        x: -20,
                                                      },
                                                      animate: {
                                                        opacity: 1,
                                                        x: 0,
                                                      },
                                                      className: `flex items-center gap-3 p-3 rounded-lg border ${f >= 20 ? "border-[#0CA0B2]/50 bg-[#0CA0B2]/10" : "border-gray-700/50 bg-gray-900/30"}`,
                                                      children: [
                                                        (0, r.jsx)("div", {
                                                          className: `flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${f >= 20 ? "bg-[#0CA0B2] text-white" : "bg-gray-700 text-gray-400"}`,
                                                          children:
                                                            f >= 20
                                                              ? (0, r.jsx)(
                                                                  b.CMH,
                                                                  {
                                                                    className:
                                                                      "text-sm",
                                                                  },
                                                                )
                                                              : (0, r.jsx)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin",
                                                                  },
                                                                ),
                                                        }),
                                                        (0, r.jsxs)("div", {
                                                          className: "flex-1",
                                                          children: [
                                                            (0, r.jsx)("p", {
                                                              className:
                                                                "text-white font-semibold text-sm",
                                                              children:
                                                                "Generating ZKFlow-Proof",
                                                            }),
                                                            (0, r.jsx)("p", {
                                                              className:
                                                                "text-gray-400 text-xs",
                                                              children:
                                                                "Creating zero-knowledge credentials",
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    (0, r.jsxs)(h.P.div, {
                                                      initial: {
                                                        opacity: 0,
                                                        x: -20,
                                                      },
                                                      animate: {
                                                        opacity: 1,
                                                        x: 0,
                                                      },
                                                      transition: { delay: 0.1 },
                                                      className: `flex items-center gap-3 p-3 rounded-lg border ${f >= 50 ? "border-[#0CA0B2]/50 bg-[#0CA0B2]/10" : f >= 20 ? "border-gray-700/50 bg-gray-900/30" : "border-gray-800/30 bg-gray-900/10"}`,
                                                      children: [
                                                        (0, r.jsx)("div", {
                                                          className: `flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${f >= 50 ? "bg-[#0CA0B2] text-white" : f >= 20 ? "bg-gray-700 text-gray-400" : "bg-gray-800 text-gray-600"}`,
                                                          children:
                                                            f >= 50
                                                              ? (0, r.jsx)(
                                                                  b.CMH,
                                                                  {
                                                                    className:
                                                                      "text-sm",
                                                                  },
                                                                )
                                                              : f >= 20
                                                                ? (0, r.jsx)(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin",
                                                                    },
                                                                  )
                                                                : (0, r.jsx)(
                                                                    b.JhU,
                                                                    {
                                                                      className:
                                                                        "text-sm",
                                                                    },
                                                                  ),
                                                        }),
                                                        (0, r.jsxs)("div", {
                                                          className: "flex-1",
                                                          children: [
                                                            (0, r.jsx)("p", {
                                                              className:
                                                                "text-white font-semibold text-sm",
                                                              children:
                                                                "Encrypting with AES-256",
                                                            }),
                                                            (0, r.jsx)("p", {
                                                              className:
                                                                "text-gray-400 text-xs",
                                                              children:
                                                                "Military-grade encryption",
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    (0, r.jsxs)(h.P.div, {
                                                      initial: {
                                                        opacity: 0,
                                                        x: -20,
                                                      },
                                                      animate: {
                                                        opacity: 1,
                                                        x: 0,
                                                      },
                                                      transition: { delay: 0.2 },
                                                      className: `flex items-center gap-3 p-3 rounded-lg border ${f >= 100 ? "border-[#0CA0B2]/50 bg-[#0CA0B2]/10" : f >= 50 ? "border-gray-700/50 bg-gray-900/30" : "border-gray-800/30 bg-gray-900/10"}`,
                                                      children: [
                                                        (0, r.jsx)("div", {
                                                          className: `flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${f >= 100 ? "bg-[#0CA0B2] text-white" : f >= 50 ? "bg-gray-700 text-gray-400" : "bg-gray-800 text-gray-600"}`,
                                                          children:
                                                            f >= 100
                                                              ? (0, r.jsx)(
                                                                  b.CMH,
                                                                  {
                                                                    className:
                                                                      "text-sm",
                                                                  },
                                                                )
                                                              : f >= 50
                                                                ? (0, r.jsx)(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin",
                                                                    },
                                                                  )
                                                                : (0, r.jsx)(
                                                                    b.HVe,
                                                                    {
                                                                      className:
                                                                        "text-sm",
                                                                    },
                                                                  ),
                                                        }),
                                                        (0, r.jsxs)("div", {
                                                          className: "flex-1",
                                                          children: [
                                                            (0, r.jsx)("p", {
                                                              className:
                                                                "text-white font-semibold text-sm",
                                                              children:
                                                                "Uploading to Decentralized Storage",
                                                            }),
                                                            (0, r.jsx)("p", {
                                                              className:
                                                                "text-gray-400 text-xs",
                                                              children:
                                                                "Securing on distributed network",
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, r.jsxs)("div", {
                                                  className: "mb-4",
                                                  children: [
                                                    (0, r.jsxs)("div", {
                                                      className:
                                                        "flex justify-between items-center mb-2",
                                                      children: [
                                                        (0, r.jsx)("span", {
                                                          className:
                                                            "text-gray-400 text-xs",
                                                          children: "Progress",
                                                        }),
                                                        (0, r.jsxs)("span", {
                                                          className:
                                                            "text-[#0CA0B2] text-sm font-bold",
                                                          children: [f, "%"],
                                                        }),
                                                      ],
                                                    }),
                                                    (0, r.jsx)("div", {
                                                      className:
                                                        "w-full bg-gray-800 rounded-full h-2 overflow-hidden",
                                                      children: (0, r.jsx)(
                                                        h.P.div,
                                                        {
                                                          className:
                                                            "h-full bg-gradient-to-r from-[#0CA0B2] via-[#0CBCC2] to-[#0CA0B2] relative",
                                                          initial: { width: 0 },
                                                          animate: {
                                                            width: `${f}%`,
                                                          },
                                                          transition: {
                                                            duration: 0.3,
                                                          },
                                                          children: (0, r.jsx)(
                                                            h.P.div,
                                                            {
                                                              className:
                                                                "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent",
                                                              animate: {
                                                                x: [
                                                                  "-100%",
                                                                  "200%",
                                                                ],
                                                              },
                                                              transition: {
                                                                duration: 1.5,
                                                                repeat: 1 / 0,
                                                                ease: "linear",
                                                              },
                                                            },
                                                          ),
                                                        },
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                (0, r.jsx)("div", {
                                                  className: "text-center",
                                                  children: (0, r.jsx)("p", {
                                                    className:
                                                      "text-gray-400 text-sm",
                                                    children: w,
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                            ],
                          })
                      : (0, r.jsxs)(h.P.div, {
                          initial: { opacity: 0, y: 20 },
                          animate: { opacity: 1, y: 0 },
                          transition: { duration: 0.5 },
                          className:
                            "relative rounded-[16px] border border-[#0CA0B2]/30 overflow-hidden",
                          style: {
                            background:
                              "linear-gradient(180deg, rgba(12,25,30,0.9) 0%, rgba(8,18,22,0.9) 55%, rgba(12,25,30,0.75) 100%)",
                          },
                          children: [
                            (0, r.jsxs)("div", {
                              className: "pointer-events-none absolute inset-0",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "absolute -top-24 -left-24 w-[260px] h-[260px] rounded-full",
                                  style: {
                                    background:
                                      "radial-gradient(circle, rgba(12,160,178,0.10) 0%, rgba(12,160,178,0) 60%)",
                                    filter: "blur(6px)",
                                  },
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "absolute -top-24 -right-24 w-[200px] h-[200px] rounded-full",
                                  style: {
                                    background:
                                      "radial-gradient(circle, rgba(12,160,178,0.08) 0%, rgba(12,160,178,0) 60%)",
                                    filter: "blur(8px)",
                                  },
                                }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className: "relative z-10 p-16 text-center",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#0CA0B2]/10 border border-[#0CA0B2]/30 mb-8",
                                  children: (0, r.jsx)(b.JhU, {
                                    className: "text-4xl text-[#0CA0B2]",
                                  }),
                                }),
                                (0, r.jsx)("h2", {
                                  className:
                                    "text-[28px] font-bold text-white mb-4",
                                  children: "Connect Your Wallet",
                                }),
                                (0, r.jsx)("p", {
                                  className:
                                    "text-[15px] text-gray-400 mb-10 max-w-md mx-auto leading-[1.6]",
                                  children:
                                    "Connect your Solana wallet to start uploading encrypted files securely",
                                }),
                                (0, r.jsx)(l.A, {}),
                              ],
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
      31809: (e, t, a) => {
        Promise.resolve().then(a.bind(a, 24919));
      },
    },
    (e) => {
      (e.O(0, [711, 956, 573, 869, 425, 226, 355, 441, 794, 358], () =>
        e((e.s = 31809)),
      ),
        (_N_E = e.O()));
    },
  ]);
  