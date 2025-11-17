(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [638],
    {
      69723: (e, t, a) => {
        Promise.resolve().then(a.bind(a, 96631));
      },
      96631: (e, t, a) => {
        "use strict";
        (a.r(t), a.d(t, { default: () => b }));
        var r = a(95155),
          i = a(12115),
          s = a(85146),
          l = a(94099),
          o = a(24681),
          n = a(76115),
          d = a(49304).Buffer;
        class c {
          constructor(e, t) {
            ((this.apiKey = e), (this.uploadBy = t));
          }
          async fetchFiles() {
            try {
              let e = await fetch("/api/files", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${this.apiKey}`,
                  "X-Upload-By": this.uploadBy,
                },
              });
              if (!e.ok) {
                let t = await e.json();
                throw Error(t.error || "Failed to fetch files");
              }
              let t = await e.json();
              if (t.encrypted) {
                let e = d.from(t.data, "base64").toString("utf-8");
                return JSON.parse(e);
              }
              return [];
            } catch (e) {
              throw (console.error("Fetch files error:", e), e);
            }
          }
          async downloadFile(e, t) {
            try {
              let t = await fetch(`/api/files/${e}/download`, {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${this.apiKey}`,
                  "X-Upload-By": this.uploadBy,
                },
              });
              if (!t.ok) throw Error("Failed to download file");
              return await t.blob();
            } catch (e) {
              throw (console.error("Download file error:", e), e);
            }
          }
        }
        var p = a(11544),
          x = a(12505),
          m = a(31574),
          h = a(80642),
          f = a(98500),
          u = a.n(f),
          g = a(5772);
        function b() {
          let { publicKey: e, connected: t } = (0, s.v)(),
            [a, d] = (0, i.useState)([]),
            [f, b] = (0, i.useState)([]),
            [v, y] = (0, i.useState)(!1),
            [w, j] = (0, i.useState)(null),
            [N, k] = (0, i.useState)(""),
            [C, B] = (0, i.useState)(null),
            [_, A] = (0, i.useState)(null),
            [z, S] = (0, i.useState)(""),
            [F, W] = (0, i.useState)(!1),
            [E, P] = (0, i.useState)(null),
            [D, L] = (0, i.useState)({
              show: !1,
              title: "",
              message: "",
              type: "info",
            }),
            K = (e, t, a = "info") => {
              L({ show: !0, title: e, message: t, type: a });
            },
            I = () => {
              L({ show: !1, title: "", message: "", type: "info" });
            };
          (0, i.useEffect)(() => {
            t && e && (U(), $());
          }, [t, e]);
          let U = () => {
              d(new o.s().getAllFiles().filter((t) => t.owner === e?.toBase58()));
            },
            $ = async () => {
              if (e) {
                y(!0);
                try {
                  let t = e.toBase58(),
                    a = (0, p.XH)(t),
                    r = (function (e) {
                      let t = `${e}:zkfile-wallet-hash-salt-v1`,
                        a = new TextEncoder().encode(t),
                        r = 0x811c9dc5;
                      for (let e = 0; e < a.length; e++)
                        ((r ^= a[e]), (r = Math.imul(r, 0x1000193)));
                      let i = (r >>> 0).toString(16).padStart(8, "0"),
                        s = 0x84222325;
                      for (let e = a.length - 1; e >= 0; e--)
                        ((s ^= a[e]), (s = Math.imul(s, 0x1000193)));
                      let l = (s >>> 0).toString(16).padStart(8, "0"),
                        o = ((r ^ s) >>> 0)
                          .toString(16)
                          .padStart(8, "0")
                          .slice(0, 4);
                      return `${i}${l}${o}`.toUpperCase();
                    })(t),
                    i = new c(a, r),
                    s = await i.fetchFiles();
                  b(s);
                } catch (e) {
                } finally {
                  y(!1);
                }
              }
            },
            M = async () => {
              if (!_ || !z)
                return void K(
                  "Secret Key Required",
                  "Please enter your secret key to decrypt the file.",
                  "error",
                );
              if (
                z !==
                (() => {
                  if (!e) return "";
                  let t = e.toBase58(),
                    a = new TextEncoder().encode(t + "ZKFile-Encryption-Salt-v1"),
                    r = 0;
                  for (let e = 0; e < a.length; e++)
                    ((r = (r << 5) - r + a[e]), (r &= r));
                  let i = Math.abs(r).toString(36).toUpperCase();
                  return `ZK${i}#${t.slice(0, 6)}${t.slice(-6)}`;
                })()
              )
                return void K(
                  "Invalid Secret Key",
                  "The secret key you entered is incorrect. Please try again.",
                  "error",
                );
              W(!0);
              try {
                let e = await fetch(_.signed_url);
                if (!e.ok)
                  throw Error(`Failed to download file: ${e.statusText}`);
                let t = await e.blob(),
                  a = await t.arrayBuffer(),
                  r = new Uint8Array(a);
                if (r.length < 28)
                  throw Error(
                    `Invalid encrypted file format. File too small (${r.length} bytes). Expected at least 28 bytes (IV + Salt). This file may have been uploaded with an older version. Please re-upload the file.`,
                  );
                let i = new n.L(),
                  s = r.slice(0, 12),
                  l = r.slice(12, 28),
                  o = r.slice(28),
                  d = _.file_type,
                  c = (e, t) => {
                    let a = e.replace(/\.enc$/, "");
                    if (a.includes("___")) {
                      let e = a.split("___");
                      if (e.length >= 2) return e.slice(1).join("___");
                    }
                    let r =
                      {
                        "image/jpeg": "jpg",
                        "image/jpg": "jpg",
                        "image/png": "png",
                        "image/gif": "gif",
                        "image/webp": "webp",
                        "image/svg+xml": "svg",
                        "video/mp4": "mp4",
                        "video/webm": "webm",
                        "video/quicktime": "mov",
                        "audio/mpeg": "mp3",
                        "audio/wav": "wav",
                        "audio/ogg": "ogg",
                        "application/pdf": "pdf",
                        "application/zip": "zip",
                        "application/x-rar-compressed": "rar",
                        "text/plain": "txt",
                        "text/html": "html",
                        "text/css": "css",
                        "text/javascript": "js",
                        "application/json": "json",
                        "application/xml": "xml",
                      }[t] ||
                      t.split("/")[1] ||
                      "file";
                    return `Decrypted_File.${r}`;
                  },
                  p = c(_.file_name, d),
                  x = {
                    ciphertext: o,
                    iv: s,
                    salt: l,
                    metadata: {
                      filename: p,
                      size: _.file_size,
                      type: _.file_type,
                      hash: _.id,
                    },
                  };
                console.log("\uD83D\uDD13 Starting decryption...");
                let m = await i.decryptFile(x, z);
                if (
                  (console.log("✅ Decryption successful!"),
                  "application/octet-stream" === d || !d)
                ) {
                  let e = await m.arrayBuffer(),
                    t = ((e, t) => {
                      let a = Array.from(e.slice(0, 12))
                        .map((e) => e.toString(16).padStart(2, "0"))
                        .join("");
                      if (a.startsWith("89504e47")) return "image/png";
                      if (a.startsWith("ffd8ff")) return "image/jpeg";
                      if (a.startsWith("47494638")) return "image/gif";
                      if (a.startsWith("424d")) return "image/bmp";
                      if (a.startsWith("52494646") && a.includes("57454250"))
                        return "image/webp";
                      if (a.startsWith("3c737667") || a.startsWith("3c3f786d"))
                        return "image/svg+xml";
                      if (a.startsWith("25504446")) return "application/pdf";
                      if (a.startsWith("504b0304"))
                        return t.endsWith(".docx")
                          ? "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          : t.endsWith(".xlsx")
                            ? "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                            : t.endsWith(".pptx")
                              ? "application/vnd.openxmlformats-officedocument.presentationml.presentation"
                              : "application/zip";
                      if (a.startsWith("d0cf11e0")) return "application/msword";
                      if (a.startsWith("7b5c7274")) return "application/rtf";
                      if (a.startsWith("526172211a07"))
                        return "application/x-rar-compressed";
                      if (a.startsWith("1f8b")) return "application/gzip";
                      if (a.startsWith("425a68")) return "application/x-bzip2";
                      if (a.startsWith("377abcaf271c"))
                        return "application/x-7z-compressed";
                      if (a.startsWith("494433") || a.startsWith("fffb"))
                        return "audio/mpeg";
                      if (a.startsWith("52494646") && a.includes("57415645"))
                        return "audio/wav";
                      if (a.startsWith("4f676753")) return "audio/ogg";
                      if (a.startsWith("664c6143")) return "audio/flac";
                      if (a.startsWith("4d546864")) return "audio/midi";
                      if (
                        a.startsWith("000000") &&
                        (a.includes("66747970") || a.includes("6d646174"))
                      )
                        return "video/mp4";
                      if (a.startsWith("1a45dfa3")) return "video/webm";
                      if (a.startsWith("52494646") && a.includes("41564920"))
                        return "video/x-msvideo";
                      if (a.startsWith("464c56")) return "video/x-flv";
                      if (a.startsWith("3026b275")) return "video/x-ms-wmv";
                      let r = t.split(".").pop()?.toLowerCase(),
                        i = {
                          txt: "text/plain",
                          html: "text/html",
                          htm: "text/html",
                          css: "text/css",
                          js: "text/javascript",
                          jsx: "text/javascript",
                          ts: "text/typescript",
                          tsx: "text/typescript",
                          json: "application/json",
                          xml: "application/xml",
                          csv: "text/csv",
                          md: "text/markdown",
                          yaml: "text/yaml",
                          yml: "text/yaml",
                          log: "text/plain",
                          png: "image/png",
                          jpg: "image/jpeg",
                          jpeg: "image/jpeg",
                          gif: "image/gif",
                          bmp: "image/bmp",
                          webp: "image/webp",
                          svg: "image/svg+xml",
                          ico: "image/x-icon",
                          tiff: "image/tiff",
                          tif: "image/tiff",
                          heic: "image/heic",
                          heif: "image/heif",
                          pdf: "application/pdf",
                          doc: "application/msword",
                          docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                          xls: "application/vnd.ms-excel",
                          xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                          ppt: "application/vnd.ms-powerpoint",
                          pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                          odt: "application/vnd.oasis.opendocument.text",
                          ods: "application/vnd.oasis.opendocument.spreadsheet",
                          odp: "application/vnd.oasis.opendocument.presentation",
                          rtf: "application/rtf",
                          zip: "application/zip",
                          rar: "application/x-rar-compressed",
                          tar: "application/x-tar",
                          gz: "application/gzip",
                          bz2: "application/x-bzip2",
                          "7z": "application/x-7z-compressed",
                          mp3: "audio/mpeg",
                          wav: "audio/wav",
                          ogg: "audio/ogg",
                          flac: "audio/flac",
                          m4a: "audio/mp4",
                          aac: "audio/aac",
                          wma: "audio/x-ms-wma",
                          midi: "audio/midi",
                          mid: "audio/midi",
                          mp4: "video/mp4",
                          webm: "video/webm",
                          avi: "video/x-msvideo",
                          mov: "video/quicktime",
                          wmv: "video/x-ms-wmv",
                          flv: "video/x-flv",
                          mkv: "video/x-matroska",
                          m4v: "video/x-m4v",
                          mpg: "video/mpeg",
                          mpeg: "video/mpeg",
                          py: "text/x-python",
                          java: "text/x-java",
                          c: "text/x-c",
                          cpp: "text/x-c++",
                          h: "text/x-c",
                          hpp: "text/x-c++",
                          php: "text/x-php",
                          rb: "text/x-ruby",
                          go: "text/x-go",
                          rs: "text/x-rust",
                          swift: "text/x-swift",
                          kt: "text/x-kotlin",
                          sh: "text/x-shellscript",
                          bash: "text/x-shellscript",
                          sql: "application/sql",
                          apk: "application/vnd.android.package-archive",
                          exe: "application/x-msdownload",
                          dll: "application/x-msdownload",
                          dmg: "application/x-apple-diskimage",
                          iso: "application/x-iso9660-image",
                          torrent: "application/x-bittorrent",
                        };
                      return r && i[r] ? i[r] : "application/octet-stream";
                    })(new Uint8Array(e), m.name);
                  if ("application/octet-stream" !== t) {
                    d = t;
                    let a = c(_.file_name, t);
                    m = new File([e], a, { type: t });
                  }
                }
                let h = URL.createObjectURL(m);
                (P({
                  blob: m,
                  url: h,
                  fileInfo: { ..._, file_name: m.name, file_type: m.type },
                }),
                  A(null),
                  S(""));
              } catch (t) {
                let e = "Failed to decrypt file.";
                (t instanceof Error &&
                  (e = t.message.includes("Invalid encrypted file format")
                    ? t.message
                    : "OperationError" === t.name
                      ? "Decryption failed! This could mean:\n\n1. The file was uploaded with an older version (before the fix)\n2. The password is incorrect\n3. The file is corrupted\n\nSolution: Please re-upload the file with the current version."
                      : `Error: ${t.message}`),
                  K("Decryption Failed", e, "error"));
              } finally {
                W(!1);
              }
            },
            T = (e) =>
              e < 1024
                ? e + " B"
                : e < 1048576
                  ? (e / 1024).toFixed(2) + " KB"
                  : (e / 1048576).toFixed(2) + " MB";
          return (0, r.jsxs)("div", {
            className: "min-h-screen bg-[#001114] pt-[56px]",
            children: [
              (0, r.jsx)("nav", {
                className:
                  "fixed top-0 left-0 right-0 z-50 bg-[#001114]/80 backdrop-blur-lg h-[56px] border-b border-[#0DA9BB]/20",
                children: (0, r.jsxs)("div", {
                  className:
                    "max-w-[1400px] mx-auto px-4 sm:px-8 h-full flex items-center justify-between",
                  children: [
                    (0, r.jsxs)(u(), {
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
              (0, r.jsxs)("div", {
                className: "container mx-auto px-4 py-16 max-w-6xl",
                children: [
                  (0, r.jsxs)(m.P.div, {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5 },
                    children: [
                      (0, r.jsx)("div", {
                        className: "mb-8 sm:mb-12",
                        children: (0, r.jsxs)("div", {
                          className:
                            "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-4",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "flex items-center gap-3 sm:gap-4",
                              children: [
                                (0, r.jsx)(g.default, {
                                  src: "/images/icons/ZKFile_Logo.png",
                                  alt: "ZKFlow logo",
                                  width: 48,
                                  height: 48,
                                  className: "rounded-[8px] flex-shrink-0",
                                }),
                                (0, r.jsxs)("div", {
                                  className: "flex-1 min-w-0",
                                  children: [
                                    (0, r.jsx)("h1", {
                                      className:
                                        "text-[32px] sm:text-[40px] lg:text-5xl font-bold text-white mb-1 sm:mb-2",
                                      style: {
                                        textShadow:
                                          "0 2px 8px rgba(0,0,0,0.3), 0 0 20px rgba(12,160,178,0.08)",
                                      },
                                      children: "My ZKFlow",
                                    }),
                                    (0, r.jsx)("p", {
                                      className:
                                        "text-gray-400 text-[13px] sm:text-[15px] leading-relaxed max-w-2xl",
                                      children:
                                        "Military-grade AES-256-GCM encryption • Zero-Knowledge architecture • Your keys, your data, absolute privacy",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, r.jsxs)(u(), {
                              href: "/upload",
                              className:
                                "group/upload relative px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-br from-[#0CA0B2] via-[#0EC8D9] to-[#0CA0B2] text-white rounded-xl font-semibold hover:shadow-[0_8px_32px_rgba(12,160,178,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700 flex-shrink-0 w-full sm:w-auto",
                              children: [
                                (0, r.jsx)("span", {
                                  className:
                                    "absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover/upload:opacity-100 transition-opacity duration-300",
                                }),
                                (0, r.jsx)("span", {
                                  className:
                                    "absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20 group-hover/upload:ring-white/40 transition-all",
                                }),
                                (0, r.jsx)(x.HVe, {
                                  className:
                                    "relative z-10 text-base sm:text-lg group-hover/upload:-translate-y-0.5 transition-transform duration-300",
                                }),
                                (0, r.jsx)("span", {
                                  className:
                                    "relative z-10 font-bold text-base sm:text-lg whitespace-nowrap",
                                  children: "Upload ZKFlow",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      t
                        ? v
                          ? (0, r.jsx)("div", {
                              className:
                                "relative rounded-[20px] border border-[#0CA0B2]/30 p-16 text-center overflow-hidden",
                              style: {
                                background:
                                  "linear-gradient(180deg, rgba(12,25,30,0.9) 0%, rgba(8,18,22,0.9) 55%, rgba(12,25,30,0.75) 100%)",
                              },
                              children: (0, r.jsxs)("div", {
                                className: "relative z-10",
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "w-16 h-16 mx-auto mb-6 border-4 border-[#0CA0B2]/30 border-t-[#0CA0B2] rounded-full animate-spin",
                                  }),
                                  (0, r.jsx)("h2", {
                                    className:
                                      "text-2xl font-bold text-white mb-2",
                                    children: "Loading Files...",
                                  }),
                                  (0, r.jsx)("p", {
                                    className: "text-gray-400",
                                    children:
                                      "Fetching your encrypted files from storage",
                                  }),
                                ],
                              }),
                            })
                          : 0 === f.length && 0 === a.length
                            ? (0, r.jsxs)("div", {
                                className:
                                  "relative rounded-[20px] border border-[#0CA0B2]/30 p-16 text-center overflow-hidden",
                                style: {
                                  background:
                                    "linear-gradient(180deg, rgba(12,25,30,0.9) 0%, rgba(8,18,22,0.9) 55%, rgba(12,25,30,0.75) 100%)",
                                },
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "absolute inset-0 pointer-events-none",
                                    children: (0, r.jsx)("div", {
                                      className:
                                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full",
                                      style: {
                                        background:
                                          "radial-gradient(circle, rgba(12,160,178,0.1) 0%, rgba(12,160,178,0) 70%)",
                                        filter: "blur(40px)",
                                      },
                                    }),
                                  }),
                                  (0, r.jsxs)("div", {
                                    className: "relative z-10",
                                    children: [
                                      (0, r.jsx)("div", {
                                        className:
                                          "w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#0CA0B2]/20 to-[#0CA0B2]/5 border border-[#0CA0B2]/30 flex items-center justify-center",
                                        children: (0, r.jsx)(x.Gp9, {
                                          className: "text-4xl text-[#0DA9BB]",
                                        }),
                                      }),
                                      (0, r.jsx)("h2", {
                                        className:
                                          "text-3xl font-bold text-white mb-4",
                                        children: "No ZKFlow Yet",
                                      }),
                                      (0, r.jsx)("p", {
                                        className:
                                          "text-gray-400 text-lg mb-8 max-w-md mx-auto",
                                        children:
                                          "Upload your first ZKFlow to get started with secure storage",
                                      }),
                                      (0, r.jsxs)(u(), {
                                        href: "/upload",
                                        className:
                                          "group/cta relative inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-br from-[#0CA0B2] via-[#0EC8D9] to-[#0CA0B2] text-white rounded-xl font-bold text-lg hover:shadow-[0_12px_40px_rgba(12,160,178,0.7)] hover:scale-110 transition-all duration-300 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700",
                                        children: [
                                          (0, r.jsx)("span", {
                                            className:
                                              "absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300",
                                          }),
                                          (0, r.jsx)("span", {
                                            className:
                                              "absolute inset-0 rounded-xl ring-2 ring-inset ring-white/20 group-hover/cta:ring-white/50 transition-all",
                                          }),
                                          (0, r.jsx)(x.HVe, {
                                            className:
                                              "relative z-10 group-hover/cta:-translate-y-1 group-hover/cta:scale-110 transition-transform duration-300",
                                          }),
                                          (0, r.jsx)("span", {
                                            className: "relative z-10",
                                            children: "Upload Your First ZKFlow",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            : (0, r.jsx)(r.Fragment, {
                                children:
                                  f.length > 0 &&
                                  (0, r.jsxs)("div", {
                                    className: "mb-12",
                                    children: [
                                      (0, r.jsxs)("h2", {
                                        className:
                                          "text-2xl font-bold text-white mb-6 flex items-center gap-3",
                                        children: [
                                          (0, r.jsx)(x.SMR, {
                                            className: "text-[#0CA0B2]",
                                          }),
                                          "Storage Files (",
                                          f.length,
                                          ")",
                                        ],
                                      }),
                                      (0, r.jsx)("div", {
                                        className: "space-y-4",
                                        children: f.map((e, t) => {
                                          let a = "Encrypted File.zkf";
                                          return (0, r.jsxs)(
                                            m.P.div,
                                            {
                                              initial: { opacity: 0, y: 20 },
                                              animate: { opacity: 1, y: 0 },
                                              transition: { delay: 0.05 * t },
                                              className:
                                                "group relative rounded-xl border border-[#0CA0B2]/20 p-6 bg-gradient-to-br from-[#0c191e]/90 to-[#081216]/90 hover:border-[#0CA0B2]/60 transition-all duration-300 overflow-hidden hover:shadow-[0_8px_32px_rgba(12,160,178,0.2)]",
                                              children: [
                                                (0, r.jsxs)("div", {
                                                  className:
                                                    "pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                                  children: [
                                                    (0, r.jsx)("div", {
                                                      className:
                                                        "absolute -top-20 -left-20 w-40 h-40 rounded-full",
                                                      style: {
                                                        background:
                                                          "radial-gradient(circle, rgba(12,160,178,0.3) 0%, rgba(12,160,178,0) 70%)",
                                                        filter: "blur(20px)",
                                                      },
                                                    }),
                                                    (0, r.jsx)("div", {
                                                      className:
                                                        "absolute -bottom-20 -right-20 w-40 h-40 rounded-full",
                                                      style: {
                                                        background:
                                                          "radial-gradient(circle, rgba(14,200,217,0.25) 0%, rgba(14,200,217,0) 70%)",
                                                        filter: "blur(20px)",
                                                      },
                                                    }),
                                                    (0, r.jsx)(m.P.div, {
                                                      className:
                                                        "absolute inset-0",
                                                      style: {
                                                        backgroundImage:
                                                          "linear-gradient(rgba(12,160,178,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(12,160,178,0.1) 1px, transparent 1px)",
                                                        backgroundSize:
                                                          "20px 20px",
                                                        maskImage:
                                                          "radial-gradient(ellipse at center, black 20%, transparent 80%)",
                                                      },
                                                      animate: {
                                                        backgroundPosition: [
                                                          "0px 0px",
                                                          "20px 20px",
                                                        ],
                                                      },
                                                      transition: {
                                                        duration: 3,
                                                        repeat: 1 / 0,
                                                        ease: "linear",
                                                      },
                                                    }),
                                                    (0, r.jsx)(m.P.div, {
                                                      className:
                                                        "absolute inset-0",
                                                      style: {
                                                        background:
                                                          "linear-gradient(90deg, transparent 0%, rgba(12,160,178,0.3) 50%, transparent 100%)",
                                                      },
                                                      animate: {
                                                        x: ["-100%", "200%"],
                                                      },
                                                      transition: {
                                                        duration: 2,
                                                        repeat: 1 / 0,
                                                        ease: "linear",
                                                      },
                                                    }),
                                                  ],
                                                }),
                                                (0, r.jsx)(m.P.div, {
                                                  className:
                                                    "absolute top-4 right-4 opacity-0 group-hover:opacity-100",
                                                  initial: {
                                                    scale: 0,
                                                    rotate: -180,
                                                  },
                                                  whileHover: {
                                                    scale: 1,
                                                    rotate: 0,
                                                  },
                                                  transition: {
                                                    duration: 0.5,
                                                    ease: "backOut",
                                                  },
                                                  children: (0, r.jsx)(m.P.div, {
                                                    animate: {
                                                      scale: [1, 1.2, 1],
                                                    },
                                                    transition: {
                                                      duration: 2,
                                                      repeat: 1 / 0,
                                                      ease: "easeInOut",
                                                    },
                                                    children: (0, r.jsxs)("div", {
                                                      className: "relative",
                                                      children: [
                                                        (0, r.jsx)("div", {
                                                          className:
                                                            "absolute inset-0 bg-[#0CA0B2]/30 blur-xl rounded-full",
                                                        }),
                                                        (0, r.jsx)(x.SMR, {
                                                          className:
                                                            "relative text-4xl text-[#0CA0B2] drop-shadow-[0_0_10px_rgba(12,160,178,0.8)]",
                                                        }),
                                                      ],
                                                    }),
                                                  }),
                                                }),
                                                (0, r.jsxs)("div", {
                                                  className:
                                                    "relative z-10 flex items-center justify-between gap-4",
                                                  children: [
                                                    (0, r.jsxs)("div", {
                                                      className:
                                                        "flex items-center gap-4 min-w-0 flex-1",
                                                      children: [
                                                        (0, r.jsx)("div", {
                                                          className:
                                                            "w-12 h-12 rounded-lg bg-[#0CA0B2]/10 border border-[#0CA0B2]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0CA0B2]/20 group-hover:border-[#0CA0B2]/50 transition-all duration-300",
                                                          children: (0, r.jsx)(
                                                            x.Gp9,
                                                            {
                                                              className:
                                                                "text-[#0CA0B2] text-xl group-hover:scale-110 transition-transform duration-300",
                                                            },
                                                          ),
                                                        }),
                                                        (0, r.jsxs)("div", {
                                                          className:
                                                            "min-w-0 flex-1",
                                                          children: [
                                                            (0, r.jsx)("h3", {
                                                              className:
                                                                "text-white font-semibold text-lg truncate group-hover:text-[#5FEFE5] transition-colors duration-300",
                                                              title: a,
                                                              children: a,
                                                            }),
                                                            (0, r.jsxs)("p", {
                                                              className:
                                                                "text-gray-400 text-sm",
                                                              children: [
                                                                T(e.file_size),
                                                                " •",
                                                                " ",
                                                                new Date(
                                                                  e.created_at,
                                                                ).toLocaleDateString(),
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    (0, r.jsxs)("button", {
                                                      onClick: () => A(e),
                                                      className:
                                                        "group/btn relative px-5 py-3 bg-gradient-to-br from-[#0CA0B2]/20 via-[#0EC8D9]/15 to-[#0CA0B2]/20 hover:from-[#0CA0B2] hover:via-[#0EC8D9] hover:to-[#0CA0B2] text-[#0CA0B2] hover:text-white rounded-xl font-bold transition-all duration-300 flex items-center gap-2.5 hover:scale-105 hover:shadow-[0_8px_24px_rgba(12,160,178,0.6)] flex-shrink-0 whitespace-nowrap border border-[#0CA0B2]/30 hover:border-[#0CA0B2]/60 overflow-hidden",
                                                      children: [
                                                        (0, r.jsx)("span", {
                                                          className:
                                                            "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700",
                                                        }),
                                                        (0, r.jsx)("span", {
                                                          className:
                                                            "absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300",
                                                        }),
                                                        (0, r.jsx)(x.pXu, {
                                                          className:
                                                            "relative z-10 group-hover/btn:rotate-12 transition-transform duration-300",
                                                        }),
                                                        (0, r.jsx)("span", {
                                                          className:
                                                            "relative z-10 font-semibold",
                                                          children:
                                                            "Unlock & Preview",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            e.id,
                                          );
                                        }),
                                      }),
                                    ],
                                  }),
                              })
                        : (0, r.jsxs)("div", {
                            className:
                              "relative rounded-[20px] border border-[#0CA0B2]/30 p-16 text-center overflow-hidden",
                            style: {
                              background:
                                "linear-gradient(180deg, rgba(12,25,30,0.9) 0%, rgba(8,18,22,0.9) 55%, rgba(12,25,30,0.75) 100%)",
                            },
                            children: [
                              (0, r.jsx)("div", {
                                className: "absolute inset-0 pointer-events-none",
                                children: (0, r.jsx)("div", {
                                  className:
                                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full",
                                  style: {
                                    background:
                                      "radial-gradient(circle, rgba(12,160,178,0.1) 0%, rgba(12,160,178,0) 70%)",
                                    filter: "blur(40px)",
                                  },
                                }),
                              }),
                              (0, r.jsxs)("div", {
                                className: "relative z-10",
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#0CA0B2]/20 to-[#0CA0B2]/5 border border-[#0CA0B2]/30 flex items-center justify-center",
                                    children: (0, r.jsx)(x.JhU, {
                                      className: "text-4xl text-[#0DA9BB]",
                                    }),
                                  }),
                                  (0, r.jsx)("h2", {
                                    className:
                                      "text-3xl font-bold text-white mb-4",
                                    children: "Connect Your Wallet",
                                  }),
                                  (0, r.jsx)("p", {
                                    className:
                                      "text-gray-400 text-lg mb-8 max-w-md mx-auto",
                                    children:
                                      "Connect your Solana wallet to access your encrypted files",
                                  }),
                                  (0, r.jsx)(l.A, {}),
                                ],
                              }),
                            ],
                          }),
                    ],
                  }),
                  (0, r.jsx)(h.N, {
                    children:
                      _ &&
                      (0, r.jsx)(m.P.div, {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        className:
                          "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm",
                        onClick: () => {
                          (A(null), S(""));
                        },
                        children: (0, r.jsxs)(m.P.div, {
                          initial: { scale: 0.9, y: 20 },
                          animate: { scale: 1, y: 0 },
                          exit: { scale: 0.9, y: 20 },
                          onClick: (e) => e.stopPropagation(),
                          className:
                            "relative w-full max-w-md rounded-2xl border border-[#0CA0B2]/30 p-8 overflow-hidden",
                          style: {
                            background:
                              "linear-gradient(180deg, rgba(12,25,30,0.95) 0%, rgba(8,18,22,0.95) 100%)",
                          },
                          children: [
                            (0, r.jsx)("div", {
                              className: "absolute inset-0 pointer-events-none",
                              children: (0, r.jsx)("div", {
                                className:
                                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full",
                                style: {
                                  background:
                                    "radial-gradient(circle, rgba(12,160,178,0.15) 0%, rgba(12,160,178,0) 70%)",
                                  filter: "blur(40px)",
                                },
                              }),
                            }),
                            (0, r.jsxs)("div", {
                              className: "relative z-10",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#0CA0B2]/20 to-[#0CA0B2]/5 border border-[#0CA0B2]/30 flex items-center justify-center",
                                  children: (0, r.jsx)(x.pXu, {
                                    className: "text-3xl text-[#0CA0B2]",
                                  }),
                                }),
                                (0, r.jsx)("h2", {
                                  className:
                                    "text-2xl font-bold text-white mb-2 text-center",
                                  children: "Enter Secret Key",
                                }),
                                (0, r.jsxs)("p", {
                                  className: "text-gray-400 text-center mb-6",
                                  children: [
                                    "File:",
                                    " ",
                                    (0, r.jsx)("span", {
                                      className: "text-white font-semibold",
                                      children: "Encrypted File.zkf",
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("div", {
                                  className: "mb-6",
                                  children: (0, r.jsx)("input", {
                                    type: "password",
                                    value: z,
                                    onChange: (e) => S(e.target.value),
                                    placeholder: "Enter your secret key",
                                    onKeyPress: (e) =>
                                      "Enter" === e.key && z && M(),
                                    className:
                                      "w-full px-5 py-3.5 bg-black/40 border border-[#0CA0B2]/30 rounded-xl text-white placeholder-gray-500 font-mono text-sm focus:outline-none focus:border-[#0CA0B2] focus:shadow-[0_0_20px_rgba(12,160,178,0.2)] transition-all",
                                    autoFocus: !0,
                                  }),
                                }),
                                (0, r.jsxs)("div", {
                                  className: "flex gap-3",
                                  children: [
                                    (0, r.jsx)("button", {
                                      onClick: () => {
                                        (A(null), S(""));
                                      },
                                      className:
                                        "flex-1 px-6 py-3 bg-gray-600/20 hover:bg-gray-600/30 text-gray-300 rounded-xl font-semibold transition-all border border-gray-600/30",
                                      children: "Cancel",
                                    }),
                                    (0, r.jsx)("button", {
                                      onClick: M,
                                      disabled: !z || F,
                                      className:
                                        "flex-1 px-6 py-3 bg-gradient-to-br from-[#0CA0B2] via-[#0EC8D9] to-[#0CA0B2] text-white rounded-xl font-bold hover:shadow-[0_8px_32px_rgba(12,160,178,0.6)] hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2",
                                      children: F
                                        ? (0, r.jsxs)(r.Fragment, {
                                            children: [
                                              (0, r.jsx)("div", {
                                                className:
                                                  "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin",
                                              }),
                                              (0, r.jsx)("span", {
                                                children: "Decrypting...",
                                              }),
                                            ],
                                          })
                                        : (0, r.jsxs)(r.Fragment, {
                                            children: [
                                              (0, r.jsx)(x.pXu, {}),
                                              (0, r.jsx)("span", {
                                                children: "Reveal",
                                              }),
                                            ],
                                          }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                  }),
                  (0, r.jsx)(h.N, {
                    children:
                      E &&
                      (0, r.jsx)(m.P.div, {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        className:
                          "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm",
                        onClick: () => {
                          (URL.revokeObjectURL(E.url), P(null));
                        },
                        children: (0, r.jsxs)(m.P.div, {
                          initial: { scale: 0.9, y: 20 },
                          animate: { scale: 1, y: 0 },
                          exit: { scale: 0.9, y: 20 },
                          onClick: (e) => e.stopPropagation(),
                          className:
                            "relative w-full max-w-4xl max-h-[90vh] rounded-2xl border border-[#0CA0B2]/30 overflow-hidden",
                          style: {
                            background:
                              "linear-gradient(180deg, rgba(12,25,30,0.98) 0%, rgba(8,18,22,0.98) 100%)",
                          },
                          children: [
                            (0, r.jsx)("div", {
                              className: "border-b border-[#0CA0B2]/20 p-6",
                              children: (0, r.jsx)("div", {
                                className:
                                  "flex items-start justify-between gap-4",
                                children: (0, r.jsxs)("div", {
                                  className: "flex-1",
                                  children: [
                                    (0, r.jsx)("h2", {
                                      className:
                                        "text-2xl font-bold text-white mb-2",
                                      children: E.fileInfo.file_name,
                                    }),
                                    (0, r.jsxs)("div", {
                                      className:
                                        "flex flex-wrap gap-4 text-sm text-gray-400",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            (0, r.jsx)("span", {
                                              className: "text-gray-500",
                                              children: "Size:",
                                            }),
                                            (0, r.jsx)("span", {
                                              className: "text-white",
                                              children: T(E.fileInfo.file_size),
                                            }),
                                          ],
                                        }),
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            (0, r.jsx)("span", {
                                              className: "text-gray-500",
                                              children: "Type:",
                                            }),
                                            (0, r.jsx)("span", {
                                              className: "text-white",
                                              children: E.fileInfo.file_type,
                                            }),
                                          ],
                                        }),
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            (0, r.jsx)("span", {
                                              className: "text-gray-500",
                                              children: "Uploaded:",
                                            }),
                                            (0, r.jsx)("span", {
                                              className: "text-white",
                                              children: new Date(
                                                E.fileInfo.created_at,
                                              ).toLocaleString(),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "p-6 overflow-auto max-h-[calc(90vh-200px)]",
                              children: E.fileInfo.file_type.startsWith("image/")
                                ? (0, r.jsx)("img", {
                                    src: E.url,
                                    alt: E.fileInfo.file_name,
                                    className: "max-w-full h-auto rounded-lg",
                                  })
                                : E.fileInfo.file_type.startsWith("video/")
                                  ? (0, r.jsx)("video", {
                                      src: E.url,
                                      controls: !0,
                                      className: "max-w-full h-auto rounded-lg",
                                    })
                                  : E.fileInfo.file_type.startsWith("audio/")
                                    ? (0, r.jsx)("audio", {
                                        src: E.url,
                                        controls: !0,
                                        className: "w-full",
                                      })
                                    : "application/pdf" === E.fileInfo.file_type
                                      ? (0, r.jsx)("iframe", {
                                          src: E.url,
                                          className:
                                            "w-full h-[600px] rounded-lg",
                                          title: "PDF Preview",
                                        })
                                      : (0, r.jsxs)("div", {
                                          className: "text-center py-12",
                                          children: [
                                            (0, r.jsx)(x.Gp9, {
                                              className:
                                                "text-6xl text-[#0CA0B2]/30 mx-auto mb-4",
                                            }),
                                            (0, r.jsx)("p", {
                                              className:
                                                "text-gray-400 text-lg mb-2",
                                              children:
                                                "Preview not available for this file type",
                                            }),
                                            (0, r.jsx)("p", {
                                              className: "text-gray-500 text-sm",
                                              children:
                                                "Click the download button below to save the file",
                                            }),
                                          ],
                                        }),
                            }),
                            (0, r.jsx)("div", {
                              className: "border-t border-[#0CA0B2]/20 p-6",
                              children: (0, r.jsxs)("div", {
                                className: "flex gap-3 justify-end",
                                children: [
                                  (0, r.jsx)("button", {
                                    onClick: () => {
                                      (URL.revokeObjectURL(E.url), P(null));
                                    },
                                    className:
                                      "px-6 py-3 bg-gray-600/20 hover:bg-gray-600/30 text-gray-300 rounded-xl font-semibold transition-all border border-gray-600/30",
                                    children: "Close",
                                  }),
                                  (0, r.jsxs)("a", {
                                    href: E.url,
                                    download: E.fileInfo.file_name,
                                    className:
                                      "inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-green-500 via-green-600 to-green-500 text-white rounded-xl font-bold hover:shadow-[0_8px_32px_rgba(34,197,94,0.6)] hover:scale-105 transition-all duration-300",
                                    children: [(0, r.jsx)(x.WCW, {}), "Download"],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                  }),
                  (0, r.jsx)(h.N, {
                    children:
                      D.show &&
                      (0, r.jsx)(m.P.div, {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        className:
                          "fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm",
                        onClick: I,
                        children: (0, r.jsxs)(m.P.div, {
                          initial: { scale: 0.9, opacity: 0, y: 20 },
                          animate: { scale: 1, opacity: 1, y: 0 },
                          exit: { scale: 0.9, opacity: 0, y: 20 },
                          onClick: (e) => e.stopPropagation(),
                          className:
                            "relative w-full max-w-md rounded-2xl border border-[#0CA0B2]/30 p-8 overflow-hidden",
                          style: {
                            background:
                              "linear-gradient(180deg, rgba(12,25,30,0.98) 0%, rgba(8,18,22,0.98) 100%)",
                          },
                          children: [
                            (0, r.jsx)("div", {
                              className: "pointer-events-none absolute inset-0",
                              children: (0, r.jsx)("div", {
                                className:
                                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full",
                                style: {
                                  background:
                                    "error" === D.type
                                      ? "radial-gradient(circle, rgba(239,68,68,0.2) 0%, rgba(239,68,68,0) 70%)"
                                      : "success" === D.type
                                        ? "radial-gradient(circle, rgba(34,197,94,0.2) 0%, rgba(34,197,94,0) 70%)"
                                        : "radial-gradient(circle, rgba(12,160,178,0.2) 0%, rgba(12,160,178,0) 70%)",
                                  filter: "blur(40px)",
                                },
                              }),
                            }),
                            (0, r.jsxs)("div", {
                              className: "relative z-10",
                              children: [
                                (0, r.jsx)("div", {
                                  className: "flex justify-center mb-4",
                                  children:
                                    "error" === D.type
                                      ? (0, r.jsx)("div", {
                                          className:
                                            "w-16 h-16 rounded-full bg-red-500/20 border-2 border-red-500/50 flex items-center justify-center",
                                          children: (0, r.jsx)("svg", {
                                            className: "w-8 h-8 text-red-500",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: (0, r.jsx)("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              strokeWidth: 2,
                                              d: "M6 18L18 6M6 6l12 12",
                                            }),
                                          }),
                                        })
                                      : "success" === D.type
                                        ? (0, r.jsx)("div", {
                                            className:
                                              "w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-500/50 flex items-center justify-center",
                                            children: (0, r.jsx)("svg", {
                                              className: "w-8 h-8 text-green-500",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              stroke: "currentColor",
                                              children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M5 13l4 4L19 7",
                                              }),
                                            }),
                                          })
                                        : (0, r.jsx)("div", {
                                            className:
                                              "w-16 h-16 rounded-full bg-[#0CA0B2]/20 border-2 border-[#0CA0B2]/50 flex items-center justify-center",
                                            children: (0, r.jsx)("svg", {
                                              className: "w-8 h-8 text-[#0CA0B2]",
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              stroke: "currentColor",
                                              children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                              }),
                                            }),
                                          }),
                                }),
                                (0, r.jsx)("h3", {
                                  className:
                                    "text-xl font-bold text-white text-center mb-3",
                                  children: D.title,
                                }),
                                (0, r.jsx)("p", {
                                  className:
                                    "text-gray-400 text-center mb-6 whitespace-pre-line",
                                  children: D.message,
                                }),
                                (0, r.jsx)("button", {
                                  onClick: I,
                                  className: `w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${"error" === D.type ? "bg-gradient-to-br from-red-500 via-red-600 to-red-500 text-white hover:shadow-[0_8px_32px_rgba(239,68,68,0.6)]" : "success" === D.type ? "bg-gradient-to-br from-green-500 via-green-600 to-green-500 text-white hover:shadow-[0_8px_32px_rgba(34,197,94,0.6)]" : "bg-gradient-to-br from-[#0CA0B2] via-[#0EC8D9] to-[#0CA0B2] text-white hover:shadow-[0_8px_32px_rgba(12,160,178,0.6)]"}`,
                                  children: "OK",
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
          });
        }
      },
    },
    (e) => {
      (e.O(0, [711, 956, 573, 869, 425, 226, 355, 441, 794, 358], () =>
        e((e.s = 69723)),
      ),
        (_N_E = e.O()));
    },
  ]);
  