(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [130],
    {
      549: (e, t) => {
        function n(e) {
          if (("number" == typeof e && (e = e.toString()), "string" != typeof e))
            throw Error("Color should be defined as hex string");
          let t = e.slice().replace("#", "").split("");
          if (t.length < 3 || 5 === t.length || t.length > 8)
            throw Error("Invalid hex color: " + e);
          ((3 === t.length || 4 === t.length) &&
            (t = Array.prototype.concat.apply(
              [],
              t.map(function (e) {
                return [e, e];
              }),
            )),
            6 === t.length && t.push("F", "F"));
          let n = parseInt(t.join(""), 16);
          return {
            r: (n >> 24) & 255,
            g: (n >> 16) & 255,
            b: (n >> 8) & 255,
            a: 255 & n,
            hex: "#" + t.slice(0, 6).join(""),
          };
        }
        ((t.getOptions = function (e) {
          (e || (e = {}), e.color || (e.color = {}));
          let t =
              void 0 === e.margin || null === e.margin || e.margin < 0
                ? 4
                : e.margin,
            r = e.width && e.width >= 21 ? e.width : void 0,
            i = e.scale || 4;
          return {
            width: r,
            scale: r ? 4 : i,
            margin: t,
            color: {
              dark: n(e.color.dark || "#000000ff"),
              light: n(e.color.light || "#ffffffff"),
            },
            type: e.type,
            rendererOpts: e.rendererOpts || {},
          };
        }),
          (t.getScale = function (e, t) {
            return t.width && t.width >= e + 2 * t.margin
              ? t.width / (e + 2 * t.margin)
              : t.scale;
          }),
          (t.getImageWidth = function (e, n) {
            let r = t.getScale(e, n);
            return Math.floor((e + 2 * n.margin) * r);
          }),
          (t.qrToImageData = function (e, n, r) {
            let i = n.modules.size,
              a = n.modules.data,
              o = t.getScale(i, r),
              s = Math.floor((i + 2 * r.margin) * o),
              l = r.margin * o,
              c = [r.color.light, r.color.dark];
            for (let t = 0; t < s; t++)
              for (let n = 0; n < s; n++) {
                let u = (t * s + n) * 4,
                  d = r.color.light;
                (t >= l &&
                  n >= l &&
                  t < s - l &&
                  n < s - l &&
                  (d =
                    c[
                      +!!a[Math.floor((t - l) / o) * i + Math.floor((n - l) / o)]
                    ]),
                  (e[u++] = d.r),
                  (e[u++] = d.g),
                  (e[u++] = d.b),
                  (e[u] = d.a));
              }
          }));
      },
      768: (e, t, n) => {
        let r = n(62690),
          i = n(32338),
          a = n(88120),
          o = n(83215);
        function s(e, t, n, a, o) {
          let s = [].slice.call(arguments, 1),
            l = s.length,
            c = "function" == typeof s[l - 1];
          if (!c && !r()) throw Error("Callback required as last argument");
          if (c) {
            if (l < 2) throw Error("Too few arguments provided");
            2 === l
              ? ((o = n), (n = t), (t = a = void 0))
              : 3 === l &&
                (t.getContext && void 0 === o
                  ? ((o = a), (a = void 0))
                  : ((o = a), (a = n), (n = t), (t = void 0)));
          } else {
            if (l < 1) throw Error("Too few arguments provided");
            return (
              1 === l
                ? ((n = t), (t = a = void 0))
                : 2 !== l || t.getContext || ((a = n), (n = t), (t = void 0)),
              new Promise(function (r, o) {
                try {
                  let o = i.create(n, a);
                  r(e(o, t, a));
                } catch (e) {
                  o(e);
                }
              })
            );
          }
          try {
            let r = i.create(n, a);
            o(null, e(r, t, a));
          } catch (e) {
            o(e);
          }
        }
        ((t.create = i.create),
          (t.toCanvas = s.bind(null, a.render)),
          (t.toDataURL = s.bind(null, a.renderToDataURL)),
          (t.toString = s.bind(null, function (e, t, n) {
            return o.render(e, n);
          })));
      },
      8452: (e, t) => {
        let n = new Uint8Array(512),
          r = new Uint8Array(256),
          i = 1;
        for (let e = 0; e < 255; e++)
          ((n[e] = i), (r[i] = e), 256 & (i <<= 1) && (i ^= 285));
        for (let e = 255; e < 512; e++) n[e] = n[e - 255];
        ((t.log = function (e) {
          if (e < 1) throw Error("log(" + e + ")");
          return r[e];
        }),
          (t.exp = function (e) {
            return n[e];
          }),
          (t.mul = function (e, t) {
            return 0 === e || 0 === t ? 0 : n[r[e] + r[t]];
          }));
      },
      19995: (e) => {
        "use strict";
        var t = {
          single_source_shortest_paths: function (e, n, r) {
            var i,
              a,
              o,
              s,
              l,
              c,
              u,
              d = {},
              h = {};
            h[n] = 0;
            var f = t.PriorityQueue.make();
            for (f.push(n, 0); !f.empty(); )
              for (o in ((a = (i = f.pop()).value),
              (s = i.cost),
              (l = e[a] || {})))
                l.hasOwnProperty(o) &&
                  ((c = s + l[o]),
                  (u = h[o]),
                  (void 0 === h[o] || u > c) &&
                    ((h[o] = c), f.push(o, c), (d[o] = a)));
            if (void 0 !== r && void 0 === h[r])
              throw Error("Could not find a path from " + n + " to " + r + ".");
            return d;
          },
          extract_shortest_path_from_predecessor_list: function (e, t) {
            for (var n = [], r = t; r; ) (n.push(r), e[r], (r = e[r]));
            return (n.reverse(), n);
          },
          find_path: function (e, n, r) {
            var i = t.single_source_shortest_paths(e, n, r);
            return t.extract_shortest_path_from_predecessor_list(i, r);
          },
          PriorityQueue: {
            make: function (e) {
              var n,
                r = t.PriorityQueue,
                i = {};
              for (n in ((e = e || {}), r)) r.hasOwnProperty(n) && (i[n] = r[n]);
              return (
                (i.queue = []),
                (i.sorter = e.sorter || r.default_sorter),
                i
              );
            },
            default_sorter: function (e, t) {
              return e.cost - t.cost;
            },
            push: function (e, t) {
              (this.queue.push({ value: e, cost: t }),
                this.queue.sort(this.sorter));
            },
            pop: function () {
              return this.queue.shift();
            },
            empty: function () {
              return 0 === this.queue.length;
            },
          },
        };
        e.exports = t;
      },
      21246: (e, t, n) => {
        "use strict";
        n.d(t, { R: () => r });
        let r = "solana:signAndSendTransaction";
      },
      23613: (e, t, n) => {
        "use strict";
        n.d(t, { q: () => r });
        let r = "solana:signTransaction";
      },
      24311: (e, t, n) => {
        "use strict";
        n.d(t, { CE: () => r, g4: () => o, re: () => a, sE: () => i });
        let r = "solana:mainnet",
          i = "solana:devnet",
          a = "solana:testnet",
          o = "solana:localnet";
      },
      28678: (e, t, n) => {
        "use strict";
        n.d(t, { F: () => r });
        let r = "solana:signMessage";
      },
      29514: (e, t, n) => {
        let r = n(30567),
          i = [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
            " ",
            "$",
            "%",
            "*",
            "+",
            "-",
            ".",
            "/",
            ":",
          ];
        function a(e) {
          ((this.mode = r.ALPHANUMERIC), (this.data = e));
        }
        ((a.getBitsLength = function (e) {
          return 11 * Math.floor(e / 2) + (e % 2) * 6;
        }),
          (a.prototype.getLength = function () {
            return this.data.length;
          }),
          (a.prototype.getBitsLength = function () {
            return a.getBitsLength(this.data.length);
          }),
          (a.prototype.write = function (e) {
            let t;
            for (t = 0; t + 2 <= this.data.length; t += 2) {
              let n = 45 * i.indexOf(this.data[t]);
              ((n += i.indexOf(this.data[t + 1])), e.put(n, 11));
            }
            this.data.length % 2 && e.put(i.indexOf(this.data[t]), 6);
          }),
          (e.exports = a));
      },
      30567: (e, t, n) => {
        let r = n(64717),
          i = n(74963);
        ((t.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
          (t.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
          (t.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
          (t.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
          (t.MIXED = { bit: -1 }),
          (t.getCharCountIndicator = function (e, t) {
            if (!e.ccBits) throw Error("Invalid mode: " + e);
            if (!r.isValid(t)) throw Error("Invalid version: " + t);
            return t >= 1 && t < 10
              ? e.ccBits[0]
              : t < 27
                ? e.ccBits[1]
                : e.ccBits[2];
          }),
          (t.getBestModeForData = function (e) {
            return i.testNumeric(e)
              ? t.NUMERIC
              : i.testAlphanumeric(e)
                ? t.ALPHANUMERIC
                : i.testKanji(e)
                  ? t.KANJI
                  : t.BYTE;
          }),
          (t.toString = function (e) {
            if (e && e.id) return e.id;
            throw Error("Invalid mode");
          }),
          (t.isValid = function (e) {
            return e && e.bit && e.ccBits;
          }),
          (t.from = function (e, n) {
            if (t.isValid(e)) return e;
            try {
              if ("string" != typeof e) throw Error("Param is not a string");
              switch (e.toLowerCase()) {
                case "numeric":
                  return t.NUMERIC;
                case "alphanumeric":
                  return t.ALPHANUMERIC;
                case "kanji":
                  return t.KANJI;
                case "byte":
                  return t.BYTE;
                default:
                  throw Error("Unknown mode: " + e);
              }
            } catch (e) {
              return n;
            }
          }));
      },
      31140: (e, t, n) => {
        let r = n(66513),
          i = n(34817),
          a = n(43738),
          o = n(30567),
          s = n(64717),
          l = r.getBCHDigit(7973);
        function c(e, t) {
          return o.getCharCountIndicator(e, t) + 4;
        }
        ((t.from = function (e, t) {
          return s.isValid(e) ? parseInt(e, 10) : t;
        }),
          (t.getCapacity = function (e, t, n) {
            if (!s.isValid(e)) throw Error("Invalid QR Code version");
            void 0 === n && (n = o.BYTE);
            let a =
              (r.getSymbolTotalCodewords(e) - i.getTotalCodewordsCount(e, t)) * 8;
            if (n === o.MIXED) return a;
            let l = a - c(n, e);
            switch (n) {
              case o.NUMERIC:
                return Math.floor((l / 10) * 3);
              case o.ALPHANUMERIC:
                return Math.floor((l / 11) * 2);
              case o.KANJI:
                return Math.floor(l / 13);
              case o.BYTE:
              default:
                return Math.floor(l / 8);
            }
          }),
          (t.getBestVersionForData = function (e, n) {
            let r,
              i = a.from(n, a.M);
            if (Array.isArray(e)) {
              if (e.length > 1) {
                for (let n = 1; n <= 40; n++)
                  if (
                    (function (e, t) {
                      let n = 0;
                      return (
                        e.forEach(function (e) {
                          let r = c(e.mode, t);
                          n += r + e.getBitsLength();
                        }),
                        n
                      );
                    })(e, n) <= t.getCapacity(n, i, o.MIXED)
                  )
                    return n;
                return;
              }
              if (0 === e.length) return 1;
              r = e[0];
            } else r = e;
            return (function (e, n, r) {
              for (let i = 1; i <= 40; i++)
                if (n <= t.getCapacity(i, r, e)) return i;
            })(r.mode, r.getLength(), i);
          }),
          (t.getEncodedBits = function (e) {
            if (!s.isValid(e) || e < 7) throw Error("Invalid QR Code version");
            let t = e << 12;
            for (; r.getBCHDigit(t) - l >= 0; )
              t ^= 7973 << (r.getBCHDigit(t) - l);
            return (e << 12) | t;
          }));
      },
      32338: (e, t, n) => {
        let r = n(66513),
          i = n(43738),
          a = n(37808),
          o = n(61975),
          s = n(65086),
          l = n(85291),
          c = n(53415),
          u = n(34817),
          d = n(54439),
          h = n(31140),
          f = n(53938),
          w = n(30567),
          g = n(70706);
        function p(e, t, n) {
          let r,
            i,
            a = e.size,
            o = f.getEncodedBits(t, n);
          for (r = 0; r < 15; r++)
            ((i = ((o >> r) & 1) == 1),
              r < 6
                ? e.set(r, 8, i, !0)
                : r < 8
                  ? e.set(r + 1, 8, i, !0)
                  : e.set(a - 15 + r, 8, i, !0),
              r < 8
                ? e.set(8, a - r - 1, i, !0)
                : r < 9
                  ? e.set(8, 15 - r - 1 + 1, i, !0)
                  : e.set(8, 15 - r - 1, i, !0));
          e.set(a - 8, 8, 1, !0);
        }
        t.create = function (e, t) {
          let n, f;
          if (void 0 === e || "" === e) throw Error("No input text");
          let m = i.M;
          return (
            void 0 !== t &&
              ((m = i.from(t.errorCorrectionLevel, i.M)),
              (n = h.from(t.version)),
              (f = c.from(t.maskPattern)),
              t.toSJISFunc && r.setToSJISFunction(t.toSJISFunc)),
            (function (e, t, n, i) {
              let f;
              if (Array.isArray(e)) f = g.fromArray(e);
              else if ("string" == typeof e) {
                let r = t;
                if (!r) {
                  let t = g.rawSplit(e);
                  r = h.getBestVersionForData(t, n);
                }
                f = g.fromString(e, r || 40);
              } else throw Error("Invalid data");
              let m = h.getBestVersionForData(f, n);
              if (!m)
                throw Error(
                  "The amount of data is too big to be stored in a QR Code",
                );
              if (t) {
                if (t < m)
                  throw Error(
                    "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                      m +
                      ".\n",
                  );
              } else t = m;
              let y = (function (e, t, n) {
                  let i = new a();
                  n.forEach(function (t) {
                    (i.put(t.mode.bit, 4),
                      i.put(t.getLength(), w.getCharCountIndicator(t.mode, e)),
                      t.write(i));
                  });
                  let o =
                    (r.getSymbolTotalCodewords(e) -
                      u.getTotalCodewordsCount(e, t)) *
                    8;
                  for (
                    i.getLengthInBits() + 4 <= o && i.put(0, 4);
                    i.getLengthInBits() % 8 != 0;
  
                  )
                    i.putBit(0);
                  let s = (o - i.getLengthInBits()) / 8;
                  for (let e = 0; e < s; e++) i.put(e % 2 ? 17 : 236, 8);
                  return (function (e, t, n) {
                    let i,
                      a,
                      o = r.getSymbolTotalCodewords(t),
                      s = o - u.getTotalCodewordsCount(t, n),
                      l = u.getBlocksCount(t, n),
                      c = o % l,
                      h = l - c,
                      f = Math.floor(o / l),
                      w = Math.floor(s / l),
                      g = w + 1,
                      p = f - w,
                      m = new d(p),
                      y = 0,
                      M = Array(l),
                      E = Array(l),
                      v = 0,
                      I = new Uint8Array(e.buffer);
                    for (let e = 0; e < l; e++) {
                      let t = e < h ? w : g;
                      ((M[e] = I.slice(y, y + t)),
                        (E[e] = m.encode(M[e])),
                        (y += t),
                        (v = Math.max(v, t)));
                    }
                    let N = new Uint8Array(o),
                      L = 0;
                    for (i = 0; i < v; i++)
                      for (a = 0; a < l; a++)
                        i < M[a].length && (N[L++] = M[a][i]);
                    for (i = 0; i < p; i++)
                      for (a = 0; a < l; a++) N[L++] = E[a][i];
                    return N;
                  })(i, e, t);
                })(t, n, f),
                M = new o(r.getSymbolSize(t));
              !(function (e, t) {
                let n = e.size,
                  r = l.getPositions(t);
                for (let t = 0; t < r.length; t++) {
                  let i = r[t][0],
                    a = r[t][1];
                  for (let t = -1; t <= 7; t++)
                    if (!(i + t <= -1) && !(n <= i + t))
                      for (let r = -1; r <= 7; r++)
                        a + r <= -1 ||
                          n <= a + r ||
                          ((t >= 0 && t <= 6 && (0 === r || 6 === r)) ||
                          (r >= 0 && r <= 6 && (0 === t || 6 === t)) ||
                          (t >= 2 && t <= 4 && r >= 2 && r <= 4)
                            ? e.set(i + t, a + r, !0, !0)
                            : e.set(i + t, a + r, !1, !0));
                }
              })(M, t);
              let E = M.size;
              for (let e = 8; e < E - 8; e++) {
                let t = e % 2 == 0;
                (M.set(e, 6, t, !0), M.set(6, e, t, !0));
              }
              return (
                !(function (e, t) {
                  let n = s.getPositions(t);
                  for (let t = 0; t < n.length; t++) {
                    let r = n[t][0],
                      i = n[t][1];
                    for (let t = -2; t <= 2; t++)
                      for (let n = -2; n <= 2; n++)
                        -2 === t ||
                        2 === t ||
                        -2 === n ||
                        2 === n ||
                        (0 === t && 0 === n)
                          ? e.set(r + t, i + n, !0, !0)
                          : e.set(r + t, i + n, !1, !0);
                  }
                })(M, t),
                p(M, n, 0),
                t >= 7 &&
                  (function (e, t) {
                    let n,
                      r,
                      i,
                      a = e.size,
                      o = h.getEncodedBits(t);
                    for (let t = 0; t < 18; t++)
                      ((n = Math.floor(t / 3)),
                        (r = (t % 3) + a - 8 - 3),
                        (i = ((o >> t) & 1) == 1),
                        e.set(n, r, i, !0),
                        e.set(r, n, i, !0));
                  })(M, t),
                !(function (e, t) {
                  let n = e.size,
                    r = -1,
                    i = n - 1,
                    a = 7,
                    o = 0;
                  for (let s = n - 1; s > 0; s -= 2)
                    for (6 === s && s--; ; ) {
                      for (let n = 0; n < 2; n++)
                        if (!e.isReserved(i, s - n)) {
                          let r = !1;
                          (o < t.length && (r = ((t[o] >>> a) & 1) == 1),
                            e.set(i, s - n, r),
                            -1 == --a && (o++, (a = 7)));
                        }
                      if ((i += r) < 0 || n <= i) {
                        ((i -= r), (r = -r));
                        break;
                      }
                    }
                })(M, y),
                isNaN(i) && (i = c.getBestMask(M, p.bind(null, M, n))),
                c.applyMask(i, M),
                p(M, n, i),
                {
                  modules: M,
                  version: t,
                  errorCorrectionLevel: n,
                  maskPattern: i,
                  segments: f,
                }
              );
            })(e, n, m, f)
          );
        };
      },
      34817: (e, t, n) => {
        let r = n(43738),
          i = [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4,
            4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8,
            10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6,
            11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23,
            25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12,
            23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29,
            40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51,
            60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74,
            24, 47, 65, 77, 25, 49, 68, 81,
          ],
          a = [
            7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48,
            72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110,
            160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308,
            104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280,
            408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650,
            224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504,
            750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952,
            1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140,
            1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350,
            1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590,
            1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
            2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
          ];
        ((t.getBlocksCount = function (e, t) {
          switch (t) {
            case r.L:
              return i[(e - 1) * 4 + 0];
            case r.M:
              return i[(e - 1) * 4 + 1];
            case r.Q:
              return i[(e - 1) * 4 + 2];
            case r.H:
              return i[(e - 1) * 4 + 3];
            default:
              return;
          }
        }),
          (t.getTotalCodewordsCount = function (e, t) {
            switch (t) {
              case r.L:
                return a[(e - 1) * 4 + 0];
              case r.M:
                return a[(e - 1) * 4 + 1];
              case r.Q:
                return a[(e - 1) * 4 + 2];
              case r.H:
                return a[(e - 1) * 4 + 3];
              default:
                return;
            }
          }));
      },
      37808: (e) => {
        function t() {
          ((this.buffer = []), (this.length = 0));
        }
        ((t.prototype = {
          get: function (e) {
            let t = Math.floor(e / 8);
            return ((this.buffer[t] >>> (7 - (e % 8))) & 1) == 1;
          },
          put: function (e, t) {
            for (let n = 0; n < t; n++)
              this.putBit(((e >>> (t - n - 1)) & 1) == 1);
          },
          getLengthInBits: function () {
            return this.length;
          },
          putBit: function (e) {
            let t = Math.floor(this.length / 8);
            (this.buffer.length <= t && this.buffer.push(0),
              e && (this.buffer[t] |= 128 >>> this.length % 8),
              this.length++);
          },
        }),
          (e.exports = t));
      },
      43738: (e, t) => {
        ((t.L = { bit: 1 }),
          (t.M = { bit: 0 }),
          (t.Q = { bit: 3 }),
          (t.H = { bit: 2 }),
          (t.isValid = function (e) {
            return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4;
          }),
          (t.from = function (e, n) {
            if (t.isValid(e)) return e;
            try {
              if ("string" != typeof e) throw Error("Param is not a string");
              switch (e.toLowerCase()) {
                case "l":
                case "low":
                  return t.L;
                case "m":
                case "medium":
                  return t.M;
                case "q":
                case "quartile":
                  return t.Q;
                case "h":
                case "high":
                  return t.H;
                default:
                  throw Error("Unknown EC Level: " + e);
              }
            } catch (e) {
              return n;
            }
          }));
      },
      46166: (e, t, n) => {
        let r = n(8452);
        ((t.mul = function (e, t) {
          let n = new Uint8Array(e.length + t.length - 1);
          for (let i = 0; i < e.length; i++)
            for (let a = 0; a < t.length; a++) n[i + a] ^= r.mul(e[i], t[a]);
          return n;
        }),
          (t.mod = function (e, t) {
            let n = new Uint8Array(e);
            for (; n.length - t.length >= 0; ) {
              let e = n[0];
              for (let i = 0; i < t.length; i++) n[i] ^= r.mul(t[i], e);
              let i = 0;
              for (; i < n.length && 0 === n[i]; ) i++;
              n = n.slice(i);
            }
            return n;
          }),
          (t.generateECPolynomial = function (e) {
            let n = new Uint8Array([1]);
            for (let i = 0; i < e; i++)
              n = t.mul(n, new Uint8Array([1, r.exp(i)]));
            return n;
          }));
      },
      47814: (e, t, n) => {
        e.exports = n(63985)(
          "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        );
      },
      48153: (e, t, n) => {
        "use strict";
        n.d(t, { Br: () => c, Ce: () => s, Ok: () => i, qG: () => l });
        var r,
          i,
          a = n(4154),
          o = n(53585);
        (((r = i || (i = {})).Installed = "Installed"),
          (r.NotDetected = "NotDetected"),
          (r.Loadable = "Loadable"),
          (r.Unsupported = "Unsupported"));
        class s extends a.A {
          get connected() {
            return !!this.publicKey;
          }
          async autoConnect() {
            await this.connect();
          }
          async prepareTransaction(e, t, n = {}) {
            let r = this.publicKey;
            if (!r) throw new o.kW();
            return (
              (e.feePayer = e.feePayer || r),
              (e.recentBlockhash =
                e.recentBlockhash ||
                (
                  await t.getLatestBlockhash({
                    commitment: n.preflightCommitment,
                    minContextSlot: n.minContextSlot,
                  })
                ).blockhash),
              e
            );
          }
        }
        function l(e) {
          if ("undefined" == typeof window || "undefined" == typeof document)
            return;
          let t = [];
          function n() {
            if (e()) for (let e of t) e();
          }
          let r = setInterval(n, 1e3);
          (t.push(() => clearInterval(r)),
            "loading" === document.readyState &&
              (document.addEventListener("DOMContentLoaded", n, { once: !0 }),
              t.push(() => document.removeEventListener("DOMContentLoaded", n))),
            "complete" !== document.readyState &&
              (window.addEventListener("load", n, { once: !0 }),
              t.push(() => window.removeEventListener("load", n))),
            n());
        }
        function c() {
          if (!navigator) return !1;
          let e = navigator.userAgent.toLowerCase(),
            t = e.includes("iphone") || e.includes("ipad"),
            n = e.includes("safari");
          return t && n;
        }
      },
      48849: (e, t, n) => {
        "use strict";
        n.d(t, { S: () => o });
        var r = n(73596),
          i = n(12115),
          a = n(56843);
        let o = ({
          children: e,
          endpoint: t,
          config: n = { commitment: "confirmed" },
        }) => {
          let o = (0, i.useMemo)(() => new r.Ng(t, n), [t, n]);
          return i.createElement(a.E.Provider, { value: { connection: o } }, e);
        };
      },
      53415: (e, t) => {
        t.Patterns = {
          PATTERN000: 0,
          PATTERN001: 1,
          PATTERN010: 2,
          PATTERN011: 3,
          PATTERN100: 4,
          PATTERN101: 5,
          PATTERN110: 6,
          PATTERN111: 7,
        };
        ((t.isValid = function (e) {
          return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7;
        }),
          (t.from = function (e) {
            return t.isValid(e) ? parseInt(e, 10) : void 0;
          }),
          (t.getPenaltyN1 = function (e) {
            let t = e.size,
              n = 0,
              r = 0,
              i = 0,
              a = null,
              o = null;
            for (let s = 0; s < t; s++) {
              ((r = i = 0), (a = o = null));
              for (let l = 0; l < t; l++) {
                let t = e.get(s, l);
                (t === a ? r++ : (r >= 5 && (n += 3 + (r - 5)), (a = t), (r = 1)),
                  (t = e.get(l, s)) === o
                    ? i++
                    : (i >= 5 && (n += 3 + (i - 5)), (o = t), (i = 1)));
              }
              (r >= 5 && (n += 3 + (r - 5)), i >= 5 && (n += 3 + (i - 5)));
            }
            return n;
          }),
          (t.getPenaltyN2 = function (e) {
            let t = e.size,
              n = 0;
            for (let r = 0; r < t - 1; r++)
              for (let i = 0; i < t - 1; i++) {
                let t =
                  e.get(r, i) +
                  e.get(r, i + 1) +
                  e.get(r + 1, i) +
                  e.get(r + 1, i + 1);
                (4 === t || 0 === t) && n++;
              }
            return 3 * n;
          }),
          (t.getPenaltyN3 = function (e) {
            let t = e.size,
              n = 0,
              r = 0,
              i = 0;
            for (let a = 0; a < t; a++) {
              r = i = 0;
              for (let o = 0; o < t; o++)
                ((r = ((r << 1) & 2047) | e.get(a, o)),
                  o >= 10 && (1488 === r || 93 === r) && n++,
                  (i = ((i << 1) & 2047) | e.get(o, a)),
                  o >= 10 && (1488 === i || 93 === i) && n++);
            }
            return 40 * n;
          }),
          (t.getPenaltyN4 = function (e) {
            let t = 0,
              n = e.data.length;
            for (let r = 0; r < n; r++) t += e.data[r];
            return 10 * Math.abs(Math.ceil((100 * t) / n / 5) - 10);
          }),
          (t.applyMask = function (e, n) {
            let r = n.size;
            for (let i = 0; i < r; i++)
              for (let a = 0; a < r; a++)
                n.isReserved(a, i) ||
                  n.xor(
                    a,
                    i,
                    (function (e, n, r) {
                      switch (e) {
                        case t.Patterns.PATTERN000:
                          return (n + r) % 2 == 0;
                        case t.Patterns.PATTERN001:
                          return n % 2 == 0;
                        case t.Patterns.PATTERN010:
                          return r % 3 == 0;
                        case t.Patterns.PATTERN011:
                          return (n + r) % 3 == 0;
                        case t.Patterns.PATTERN100:
                          return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
                        case t.Patterns.PATTERN101:
                          return ((n * r) % 2) + ((n * r) % 3) == 0;
                        case t.Patterns.PATTERN110:
                          return (((n * r) % 2) + ((n * r) % 3)) % 2 == 0;
                        case t.Patterns.PATTERN111:
                          return (((n * r) % 3) + ((n + r) % 2)) % 2 == 0;
                        default:
                          throw Error("bad maskPattern:" + e);
                      }
                    })(e, a, i),
                  );
          }),
          (t.getBestMask = function (e, n) {
            let r = Object.keys(t.Patterns).length,
              i = 0,
              a = 1 / 0;
            for (let o = 0; o < r; o++) {
              (n(o), t.applyMask(o, e));
              let r =
                t.getPenaltyN1(e) +
                t.getPenaltyN2(e) +
                t.getPenaltyN3(e) +
                t.getPenaltyN4(e);
              (t.applyMask(o, e), r < a && ((a = r), (i = o)));
            }
            return i;
          }));
      },
      53585: (e, t, n) => {
        "use strict";
        n.d(t, {
          AE: () => i,
          Ez: () => o,
          K3: () => g,
          Kd: () => d,
          PQ: () => l,
          Sz: () => a,
          UF: () => f,
          Y6: () => s,
          Y8: () => c,
          fk: () => u,
          kW: () => h,
          m7: () => r,
          o7: () => p,
          z4: () => w,
        });
        class r extends Error {
          constructor(e, t) {
            (super(e), (this.error = t));
          }
        }
        class i extends r {
          constructor() {
            (super(...arguments), (this.name = "WalletNotReadyError"));
          }
        }
        class a extends r {
          constructor() {
            (super(...arguments), (this.name = "WalletLoadError"));
          }
        }
        class o extends r {
          constructor() {
            (super(...arguments), (this.name = "WalletConfigError"));
          }
        }
        class s extends r {
          constructor() {
            (super(...arguments), (this.name = "WalletConnectionError"));
          }
        }
        class l extends r {
          constructor() {
            (super(...arguments), (this.name = "WalletDisconnectedError"));
          }
        }
        class c extends r {
          constructor() {
            (super(...arguments), (this.name = "WalletDisconnectionError"));
          }
        }
        class u extends r {
          constructor() {
            (super(...arguments), (this.name = "WalletAccountError"));
          }
        }
        class d extends r {
          constructor() {
            (super(...arguments), (this.name = "WalletPublicKeyError"));
          }
        }
        class h extends r {
          constructor() {
            (super(...arguments), (this.name = "WalletNotConnectedError"));
          }
        }
        class f extends r {
          constructor() {
            (super(...arguments), (this.name = "WalletSendTransactionError"));
          }
        }
        class w extends r {
          constructor() {
            (super(...arguments), (this.name = "WalletSignTransactionError"));
          }
        }
        class g extends r {
          constructor() {
            (super(...arguments), (this.name = "WalletSignMessageError"));
          }
        }
        class p extends r {
          constructor() {
            (super(...arguments), (this.name = "WalletSignInError"));
          }
        }
      },
      53938: (e, t, n) => {
        let r = n(66513),
          i = r.getBCHDigit(1335);
        t.getEncodedBits = function (e, t) {
          let n = (e.bit << 3) | t,
            a = n << 10;
          for (; r.getBCHDigit(a) - i >= 0; ) a ^= 1335 << (r.getBCHDigit(a) - i);
          return ((n << 10) | a) ^ 21522;
        };
      },
      54439: (e, t, n) => {
        let r = n(46166);
        function i(e) {
          ((this.genPoly = void 0),
            (this.degree = e),
            this.degree && this.initialize(this.degree));
        }
        ((i.prototype.initialize = function (e) {
          ((this.degree = e),
            (this.genPoly = r.generateECPolynomial(this.degree)));
        }),
          (i.prototype.encode = function (e) {
            if (!this.genPoly) throw Error("Encoder not initialized");
            let t = new Uint8Array(e.length + this.degree);
            t.set(e);
            let n = r.mod(t, this.genPoly),
              i = this.degree - n.length;
            if (i > 0) {
              let e = new Uint8Array(this.degree);
              return (e.set(n, i), e);
            }
            return n;
          }),
          (e.exports = i));
      },
      61194: (e, t, n) => {
        "use strict";
        function r(e) {
          return "version" in e;
        }
        n.d(t, { Y: () => r });
      },
      61975: (e) => {
        function t(e) {
          if (!e || e < 1)
            throw Error("BitMatrix size must be defined and greater than 0");
          ((this.size = e),
            (this.data = new Uint8Array(e * e)),
            (this.reservedBit = new Uint8Array(e * e)));
        }
        ((t.prototype.set = function (e, t, n, r) {
          let i = e * this.size + t;
          ((this.data[i] = n), r && (this.reservedBit[i] = !0));
        }),
          (t.prototype.get = function (e, t) {
            return this.data[e * this.size + t];
          }),
          (t.prototype.xor = function (e, t, n) {
            this.data[e * this.size + t] ^= n;
          }),
          (t.prototype.isReserved = function (e, t) {
            return this.reservedBit[e * this.size + t];
          }),
          (e.exports = t));
      },
      62690: (e) => {
        e.exports = function () {
          return (
            "function" == typeof Promise &&
            Promise.prototype &&
            Promise.prototype.then
          );
        };
      },
      62717: (e, t, n) => {
        "use strict";
        n.d(t, { u: () => r });
        let r = "standard:connect";
      },
      62856: (e, t, n) => {
        "use strict";
        n.d(t, { j: () => r });
        let r = "standard:events";
      },
      63985: (e) => {
        "use strict";
        e.exports = function (e) {
          if (e.length >= 255) throw TypeError("Alphabet too long");
          for (var t = new Uint8Array(256), n = 0; n < t.length; n++) t[n] = 255;
          for (var r = 0; r < e.length; r++) {
            var i = e.charAt(r),
              a = i.charCodeAt(0);
            if (255 !== t[a]) throw TypeError(i + " is ambiguous");
            t[a] = r;
          }
          var o = e.length,
            s = e.charAt(0),
            l = Math.log(o) / Math.log(256),
            c = Math.log(256) / Math.log(o);
          function u(e) {
            if ("string" != typeof e) throw TypeError("Expected String");
            if (0 === e.length) return new Uint8Array();
            for (var n = 0, r = 0, i = 0; e[n] === s; ) (r++, n++);
            for (
              var a = ((e.length - n) * l + 1) >>> 0, c = new Uint8Array(a);
              e[n];
  
            ) {
              var u = e.charCodeAt(n);
              if (u > 255) return;
              var d = t[u];
              if (255 === d) return;
              for (var h = 0, f = a - 1; (0 !== d || h < i) && -1 !== f; f--, h++)
                ((d += (o * c[f]) >>> 0),
                  (c[f] = d % 256 >>> 0),
                  (d = (d / 256) >>> 0));
              if (0 !== d) throw Error("Non-zero carry");
              ((i = h), n++);
            }
            for (var w = a - i; w !== a && 0 === c[w]; ) w++;
            for (var g = new Uint8Array(r + (a - w)), p = r; w !== a; )
              g[p++] = c[w++];
            return g;
          }
          return {
            encode: function (t) {
              if (
                (t instanceof Uint8Array ||
                  (ArrayBuffer.isView(t)
                    ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                    : Array.isArray(t) && (t = Uint8Array.from(t))),
                !(t instanceof Uint8Array))
              )
                throw TypeError("Expected Uint8Array");
              if (0 === t.length) return "";
              for (var n = 0, r = 0, i = 0, a = t.length; i !== a && 0 === t[i]; )
                (i++, n++);
              for (
                var l = ((a - i) * c + 1) >>> 0, u = new Uint8Array(l);
                i !== a;
  
              ) {
                for (
                  var d = t[i], h = 0, f = l - 1;
                  (0 !== d || h < r) && -1 !== f;
                  f--, h++
                )
                  ((d += (256 * u[f]) >>> 0),
                    (u[f] = d % o >>> 0),
                    (d = (d / o) >>> 0));
                if (0 !== d) throw Error("Non-zero carry");
                ((r = h), i++);
              }
              for (var w = l - r; w !== l && 0 === u[w]; ) w++;
              for (var g = s.repeat(n); w < l; ++w) g += e.charAt(u[w]);
              return g;
            },
            decodeUnsafe: u,
            decode: function (e) {
              var t = u(e);
              if (t) return t;
              throw Error("Non-base" + o + " character");
            },
          };
        };
      },
      64717: (e, t) => {
        t.isValid = function (e) {
          return !isNaN(e) && e >= 1 && e <= 40;
        };
      },
      65086: (e, t, n) => {
        let r = n(66513).getSymbolSize;
        ((t.getRowColCoords = function (e) {
          if (1 === e) return [];
          let t = Math.floor(e / 7) + 2,
            n = r(e),
            i = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)),
            a = [n - 7];
          for (let e = 1; e < t - 1; e++) a[e] = a[e - 1] - i;
          return (a.push(6), a.reverse());
        }),
          (t.getPositions = function (e) {
            let n = [],
              r = t.getRowColCoords(e),
              i = r.length;
            for (let e = 0; e < i; e++)
              for (let t = 0; t < i; t++)
                (0 !== e || 0 !== t) &&
                  (0 !== e || t !== i - 1) &&
                  (e !== i - 1 || 0 !== t) &&
                  n.push([r[e], r[t]]);
            return n;
          }));
      },
      65284: (e, t, n) => {
        "use strict";
        let r, i, a, o;
        n.d(t, { r: () => tK });
        var s,
          l,
          c,
          u,
          d,
          h,
          f,
          w,
          g,
          p,
          m,
          y,
          M,
          E,
          v,
          I,
          N,
          L,
          j,
          b,
          T,
          A,
          S,
          D,
          z,
          C,
          x,
          k,
          O,
          _,
          U,
          W,
          P,
          R,
          B,
          Y,
          Q,
          Z,
          K,
          F,
          H,
          G,
          V,
          q,
          J,
          $,
          X,
          ee,
          et,
          en,
          er,
          ei,
          ea,
          eo,
          es,
          el,
          ec,
          eu,
          ed,
          eh,
          ef,
          ew,
          eg,
          ep,
          em,
          ey,
          eM,
          eE,
          ev,
          eI,
          eN,
          eL,
          ej,
          eb,
          eT,
          eA,
          eS = n(95576),
          eD = n(48153),
          ez = n(53585),
          eC = n(73596);
        let ex = "solana:signIn";
        var ek = n(28678),
          eO = n(21246),
          e_ = n(23613);
        n(768);
        let eU = `(?:\\nURI: (?<uri>[^\\n]+))?(?:\\nVersion: (?<version>[^\\n]+))?(?:\\nChain ID: (?<chainId>[^\\n]+))?(?:\\nNonce: (?<nonce>[^\\n]+))?(?:\\nIssued At: (?<issuedAt>[^\\n]+))?(?:\\nExpiration Time: (?<expirationTime>[^\\n]+))?(?:\\nNot Before: (?<notBefore>[^\\n]+))?(?:\\nRequest ID: (?<requestId>[^\\n]+))?(?:\\nResources:(?<resources>(?:\\n- [^\\n]+)*))?`;
        RegExp(
          `^(?<domain>[^\\n]+?) wants you to sign in with your Solana account:\\n(?<address>[^\\n]+)(?:\\n|$)(?:\\n(?<statement>[\\S\\s]*?)(?:\\n|$))??${eU}\\n*$`,
        );
        let eW = "ERROR_FORBIDDEN_WALLET_BASE_URL";
        class eP extends Error {
          constructor(...e) {
            const [t, n, r] = e;
            (super(n),
              (this.code = t),
              (this.data = r),
              (this.name = "SolanaMobileWalletAdapterError"));
          }
        }
        class eR extends Error {
          constructor(...e) {
            const [t, n, r, i] = e;
            (super(r),
              (this.code = n),
              (this.data = i),
              (this.jsonRpcMessageId = t),
              (this.name = "SolanaMobileWalletAdapterProtocolError"));
          }
        }
        function eB(e, t, n, r) {
          return new (n || (n = Promise))(function (i, a) {
            function o(e) {
              try {
                l(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function s(e) {
              try {
                l(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value) instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })
                  ).then(o, s);
            }
            l((r = r.apply(e, t || [])).next());
          });
        }
        function eY(e, t) {
          let n = window.btoa(String.fromCharCode.call(null, ...e));
          return t
            ? n.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
            : n;
        }
        function eQ(e) {
          return new Uint8Array(
            window
              .atob(e)
              .split("")
              .map((e) => e.charCodeAt(0)),
          );
        }
        function eZ(e, t) {
          return eB(this, void 0, void 0, function* () {
            let n = yield crypto.subtle.exportKey("raw", e),
              r = yield crypto.subtle.sign(
                { hash: "SHA-256", name: "ECDSA" },
                t,
                n,
              ),
              i = new Uint8Array(n.byteLength + r.byteLength);
            return (
              i.set(new Uint8Array(n), 0),
              i.set(new Uint8Array(r), n.byteLength),
              i
            );
          });
        }
        let eK = "solana:cloneAuthorization";
        function eF(e, t) {
          return eB(this, void 0, void 0, function* () {
            let n = e.slice(0, 4),
              i = e.slice(4, 16),
              a = e.slice(16),
              o = yield crypto.subtle.decrypt(eH(n, i), t, a);
            return (void 0 === r && (r = new TextDecoder("utf-8")), r).decode(o);
          });
        }
        function eH(e, t) {
          return { additionalData: e, iv: t, name: "AES-GCM", tagLength: 128 };
        }
        function eG() {
          return eB(this, void 0, void 0, function* () {
            return yield crypto.subtle.generateKey(
              { name: "ECDH", namedCurve: "P-256" },
              !1,
              ["deriveKey", "deriveBits"],
            );
          });
        }
        function eV(e) {
          if (e < 49152 || e > 65535)
            throw new eP(
              "ERROR_ASSOCIATION_PORT_OUT_OF_RANGE",
              `Association port number must be between 49152 and 65535. ${e} given.`,
              { port: e },
            );
          return e;
        }
        function eq(e) {
          return e.replace(/(^\/+|\/+$)/g, "").split("/");
        }
        let eJ = null,
          e$ = [150, 150, 200, 500, 500, 750, 750, 1e3];
        function eX(e) {
          return new DataView(e).getUint32(0, !1);
        }
        var e0 = n(62717),
          e1 = n(65483),
          e4 = n(62856),
          e2 = n(47814),
          e5 = n(24311);
        function e3(e, t, n, r) {
          return new (n || (n = Promise))(function (i, a) {
            function o(e) {
              try {
                l(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function s(e) {
              try {
                l(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value) instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })
                  ).then(o, s);
            }
            l((r = r.apply(e, t || [])).next());
          });
        }
        function e6(e, t, n, r) {
          if ("a" === n && !r)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
        }
        function e8(e, t, n, r, i) {
          if ("m" === r) throw TypeError("Private method is not writable");
          if ("a" === r && !i)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it",
            );
          return ("a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n);
        }
        let e7 = `
  <div class="mobile-wallet-adapter-embedded-modal-container" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div data-modal-close style="position: absolute; width: 100%; height: 100%;"></div>
      <div class="mobile-wallet-adapter-embedded-modal-card">
          <div>
              <button data-modal-close class="mobile-wallet-adapter-embedded-modal-close">
                  <svg width="14" height="14">
                      <path d="M 6.7125,8.3036995 1.9082,13.108199 c -0.2113,0.2112 -0.4765,0.3168 -0.7957,0.3168 -0.3192,0 -0.5844,-0.1056 -0.7958,-0.3168 C 0.1056,12.896899 0,12.631699 0,12.312499 c 0,-0.3192 0.1056,-0.5844 0.3167,-0.7958 L 5.1212,6.7124995 0.3167,1.9082 C 0.1056,1.6969 0,1.4317 0,1.1125 0,0.7933 0.1056,0.5281 0.3167,0.3167 0.5281,0.1056 0.7933,0 1.1125,0 1.4317,0 1.6969,0.1056 1.9082,0.3167 L 6.7125,5.1212 11.5167,0.3167 C 11.7281,0.1056 11.9933,0 12.3125,0 c 0.3192,0 0.5844,0.1056 0.7957,0.3167 0.2112,0.2114 0.3168,0.4766 0.3168,0.7958 0,0.3192 -0.1056,0.5844 -0.3168,0.7957 L 8.3037001,6.7124995 13.1082,11.516699 c 0.2112,0.2114 0.3168,0.4766 0.3168,0.7958 0,0.3192 -0.1056,0.5844 -0.3168,0.7957 -0.2113,0.2112 -0.4765,0.3168 -0.7957,0.3168 -0.3192,0 -0.5844,-0.1056 -0.7958,-0.3168 z" />
                  </svg>
              </button>
          </div>
          <div class="mobile-wallet-adapter-embedded-modal-content"></div>
      </div>
  </div>
  `,
          e9 = `
  .mobile-wallet-adapter-embedded-modal-container {
      display: flex; /* Use flexbox to center content */
      justify-content: center; /* Center horizontally */
      align-items: center; /* Center vertically */
      position: fixed; /* Stay in place */
      z-index: 1; /* Sit on top */
      left: 0;
      top: 0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
      overflow-y: auto; /* enable scrolling */
  }
  
  .mobile-wallet-adapter-embedded-modal-card {
      display: flex;
      flex-direction: column;
      margin: auto 20px;
      max-width: 780px;
      padding: 20px;
      border-radius: 24px;
      background: #ffffff;
      font-family: "Inter Tight", "PT Sans", Calibri, sans-serif;
      transform: translateY(-200%);
      animation: slide-in 0.5s forwards;
  }
  
  @keyframes slide-in {
      100% { transform: translateY(0%); }
  }
  
  .mobile-wallet-adapter-embedded-modal-close {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      cursor: pointer;
      background: #e4e9e9;
      border: none;
      border-radius: 50%;
  }
  
  .mobile-wallet-adapter-embedded-modal-close:focus-visible {
      outline-color: red;
  }
  
  .mobile-wallet-adapter-embedded-modal-close svg {
      fill: #546266;
      transition: fill 200ms ease 0s;
  }
  
  .mobile-wallet-adapter-embedded-modal-close:hover svg {
      fill: #fff;
  }
  `,
          te = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
  `;
        class tt {
          constructor() {
            (l.add(this),
              c.set(this, null),
              u.set(this, {}),
              d.set(this, !1),
              (this.dom = null),
              (this.open = () => {
                (console.debug("Modal open"),
                  e6(this, l, "m", f).call(this),
                  e6(this, c, "f") && (e6(this, c, "f").style.display = "flex"));
              }),
              (this.close = (e) => {
                var t;
                (console.debug("Modal close"),
                  e6(this, l, "m", w).call(this),
                  e6(this, c, "f") && (e6(this, c, "f").style.display = "none"),
                  null == (t = e6(this, u, "f").close) || t.forEach((t) => t(e)));
              }),
              g.set(this, (e) => {
                "Escape" === e.key && this.close(e);
              }),
              (this.init = this.init.bind(this)),
              e8(
                this,
                c,
                document.getElementById("mobile-wallet-adapter-embedded-root-ui"),
                "f",
              ));
          }
          init() {
            return e3(this, void 0, void 0, function* () {
              (console.log("Injecting modal"), e6(this, l, "m", h).call(this));
            });
          }
          addEventListener(e, t) {
            var n;
            return (
              (null == (n = e6(this, u, "f")[e]) ? void 0 : n.push(t)) ||
                (e6(this, u, "f")[e] = [t]),
              () => this.removeEventListener(e, t)
            );
          }
          removeEventListener(e, t) {
            var n;
            e6(this, u, "f")[e] =
              null == (n = e6(this, u, "f")[e])
                ? void 0
                : n.filter((e) => t !== e);
          }
        }
        function tn(e) {
          return window.btoa(String.fromCharCode.call(null, ...e));
        }
        function tr(e) {
          return new Uint8Array(
            window
              .atob(e)
              .split("")
              .map((e) => e.charCodeAt(0)),
          );
        }
        ((c = new WeakMap()),
          (u = new WeakMap()),
          (d = new WeakMap()),
          (g = new WeakMap()),
          (l = new WeakSet()),
          (h = function () {
            if (
              document.getElementById("mobile-wallet-adapter-embedded-root-ui")
            ) {
              e6(this, c, "f") ||
                e8(
                  this,
                  c,
                  document.getElementById(
                    "mobile-wallet-adapter-embedded-root-ui",
                  ),
                  "f",
                );
              return;
            }
            (e8(this, c, document.createElement("div"), "f"),
              (e6(this, c, "f").id = "mobile-wallet-adapter-embedded-root-ui"),
              (e6(this, c, "f").innerHTML = e7),
              (e6(this, c, "f").style.display = "none"));
            let e = e6(this, c, "f").querySelector(
              ".mobile-wallet-adapter-embedded-modal-content",
            );
            e && (e.innerHTML = this.contentHtml);
            let t = document.createElement("style");
            ((t.id = "mobile-wallet-adapter-embedded-modal-styles"),
              (t.textContent = e9 + this.contentStyles));
            let n = document.createElement("div");
            ((n.innerHTML = te),
              (this.dom = n.attachShadow({ mode: "closed" })),
              this.dom.appendChild(t),
              this.dom.appendChild(e6(this, c, "f")),
              document.body.appendChild(n));
          }),
          (f = function () {
            !e6(this, c, "f") ||
              e6(this, d, "f") ||
              ([
                ...e6(this, c, "f").querySelectorAll("[data-modal-close]"),
              ].forEach((e) =>
                null == e ? void 0 : e.addEventListener("click", this.close),
              ),
              window.addEventListener("load", this.close),
              document.addEventListener("keydown", e6(this, g, "f")),
              e8(this, d, !0, "f"));
          }),
          (w = function () {
            !e6(this, d, "f") ||
              (window.removeEventListener("load", this.close),
              document.removeEventListener("keydown", e6(this, g, "f")),
              e6(this, c, "f") &&
                ([
                  ...e6(this, c, "f").querySelectorAll("[data-modal-close]"),
                ].forEach((e) =>
                  null == e ? void 0 : e.removeEventListener("click", this.close),
                ),
                e8(this, d, !1, "f")));
          }));
        let ti = "Mobile Wallet Adapter",
          ta = [eO.R, e_.q, ek.F, ex];
        class to {
          constructor(e) {
            (p.add(this),
              m.set(this, {}),
              y.set(this, "1.0.0"),
              M.set(this, ti),
              E.set(this, "https://solanamobile.com/wallets"),
              v.set(
                this,
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03IDIuNUgxN0MxNy44Mjg0IDIuNSAxOC41IDMuMTcxNTcgMTguNSA0VjIwQzE4LjUgMjAuODI4NCAxNy44Mjg0IDIxLjUgMTcgMjEuNUg3QzYuMTcxNTcgMjEuNSA1LjUgMjAuODI4NCA1LjUgMjBWNEM1LjUgMy4xNzE1NyA2LjE3MTU3IDIuNSA3IDIuNVpNMyA0QzMgMS43OTA4NiA0Ljc5MDg2IDAgNyAwSDE3QzE5LjIwOTEgMCAyMSAxLjc5MDg2IDIxIDRWMjBDMjEgMjIuMjA5MSAxOS4yMDkxIDI0IDE3IDI0SDdDNC43OTA4NiAyNCAzIDIyLjIwOTEgMyAyMFY0Wk0xMSA0LjYxNTM4QzEwLjQ0NzcgNC42MTUzOCAxMCA1LjA2MzEgMTAgNS42MTUzOFY2LjM4NDYyQzEwIDYuOTM2OSAxMC40NDc3IDcuMzg0NjIgMTEgNy4zODQ2MkgxM0MxMy41NTIzIDcuMzg0NjIgMTQgNi45MzY5IDE0IDYuMzg0NjJWNS42MTUzOEMxNCA1LjA2MzEgMTMuNTUyMyA0LjYxNTM4IDEzIDQuNjE1MzhIMTFaIiBmaWxsPSIjRENCOEZGIi8+Cjwvc3ZnPgo=",
              ),
              I.set(this, void 0),
              N.set(this, void 0),
              L.set(this, void 0),
              j.set(this, !1),
              b.set(this, 0),
              T.set(this, []),
              A.set(this, void 0),
              S.set(this, void 0),
              D.set(this, void 0),
              z.set(this, (e, t) => {
                var n;
                return (
                  (null == (n = e6(this, m, "f")[e]) ? void 0 : n.push(t)) ||
                    (e6(this, m, "f")[e] = [t]),
                  () => e6(this, p, "m", x).call(this, e, t)
                );
              }),
              k.set(this, ({ silent: e } = {}) =>
                e3(this, void 0, void 0, function* () {
                  if (e6(this, j, "f") || this.connected)
                    return { accounts: this.accounts };
                  e8(this, j, !0, "f");
                  try {
                    if (e) {
                      let e = yield e6(this, L, "f").get();
                      if (!e) return { accounts: this.accounts };
                      (yield e6(this, U, "f").call(this, e.capabilities),
                        yield e6(this, _, "f").call(this, e));
                    } else yield e6(this, O, "f").call(this);
                  } catch (e) {
                    throw Error(
                      (e instanceof Error && e.message) || "Unknown error",
                    );
                  } finally {
                    e8(this, j, !1, "f");
                  }
                  return { accounts: this.accounts };
                }),
              ),
              O.set(this, (e) =>
                e3(this, void 0, void 0, function* () {
                  try {
                    let t = yield e6(this, L, "f").get();
                    if (t) return (e6(this, _, "f").call(this, t), t);
                    let n = yield e6(this, A, "f").select(e6(this, T, "f"));
                    return yield e6(this, R, "f").call(this, (t) =>
                      e3(this, void 0, void 0, function* () {
                        let [r, i] = yield Promise.all([
                            t.getCapabilities(),
                            t.authorize({
                              chain: n,
                              identity: e6(this, I, "f"),
                              sign_in_payload: e,
                            }),
                          ]),
                          a = e6(this, Y, "f").call(this, i.accounts),
                          o = Object.assign(Object.assign({}, i), {
                            accounts: a,
                            chain: n,
                            capabilities: r,
                          });
                        return (
                          Promise.all([
                            e6(this, U, "f").call(this, r),
                            e6(this, L, "f").set(o),
                            e6(this, _, "f").call(this, o),
                          ]),
                          o
                        );
                      }),
                    );
                  } catch (e) {
                    throw Error(
                      (e instanceof Error && e.message) || "Unknown error",
                    );
                  }
                }),
              ),
              _.set(this, (e) =>
                e3(this, void 0, void 0, function* () {
                  var t;
                  let n =
                    null == e6(this, N, "f") ||
                    (null == (t = e6(this, N, "f"))
                      ? void 0
                      : t.accounts.length) !== e.accounts.length ||
                    e6(this, N, "f").accounts.some(
                      (t, n) => t.address !== e.accounts[n].address,
                    );
                  (e8(this, N, e, "f"),
                    n &&
                      e6(this, p, "m", C).call(this, "change", {
                        accounts: this.accounts,
                      }));
                }),
              ),
              U.set(this, (e) =>
                e3(this, void 0, void 0, function* () {
                  let t = e.features.includes("solana:signTransactions"),
                    n = e.supports_sign_and_send_transactions,
                    r =
                      eO.R in this.features !== n || e_.q in this.features !== t;
                  (e8(
                    this,
                    S,
                    Object.assign(
                      Object.assign(
                        {},
                        (n || (!n && !t)) && {
                          [eO.R]: {
                            version: "1.0.0",
                            supportedTransactionVersions: ["legacy", 0],
                            signAndSendTransaction: e6(this, K, "f"),
                          },
                        },
                      ),
                      t && {
                        [e_.q]: {
                          version: "1.0.0",
                          supportedTransactionVersions: ["legacy", 0],
                          signTransaction: e6(this, F, "f"),
                        },
                      },
                    ),
                    "f",
                  ),
                    r &&
                      e6(this, p, "m", C).call(this, "change", {
                        features: this.features,
                      }));
                }),
              ),
              W.set(this, (e, t, n) =>
                e3(this, void 0, void 0, function* () {
                  var r, i;
                  try {
                    let [a, o] = yield Promise.all([
                        null !=
                        (i =
                          null == (r = e6(this, N, "f"))
                            ? void 0
                            : r.capabilities)
                          ? i
                          : yield e.getCapabilities(),
                        e.authorize({
                          auth_token: t,
                          identity: e6(this, I, "f"),
                          chain: n,
                        }),
                      ]),
                      s = e6(this, Y, "f").call(this, o.accounts),
                      l = Object.assign(Object.assign({}, o), {
                        accounts: s,
                        chain: n,
                        capabilities: a,
                      });
                    Promise.all([
                      e6(this, L, "f").set(l),
                      e6(this, _, "f").call(this, l),
                    ]);
                  } catch (e) {
                    throw (
                      e6(this, P, "f").call(this),
                      Error((e instanceof Error && e.message) || "Unknown error")
                    );
                  }
                }),
              ),
              P.set(this, () =>
                e3(this, void 0, void 0, function* () {
                  var e;
                  (e6(this, L, "f").clear(),
                    e8(this, j, !1, "f"),
                    e8(this, b, ((e = e6(this, b, "f")), ++e), "f"),
                    e8(this, N, void 0, "f"),
                    e6(this, p, "m", C).call(this, "change", {
                      accounts: this.accounts,
                    }));
                }),
              ),
              R.set(this, (e) =>
                e3(this, void 0, void 0, function* () {
                  var t;
                  let n =
                      null == (t = e6(this, N, "f")) ? void 0 : t.wallet_uri_base,
                    r = e6(this, b, "f");
                  try {
                    return yield (function (e, t) {
                      return eB(this, void 0, void 0, function* () {
                        let n, r;
                        if (
                          "undefined" == typeof window ||
                          !0 !== window.isSecureContext
                        )
                          throw new eP(
                            "ERROR_SECURE_CONTEXT_REQUIRED",
                            "The mobile wallet adapter protocol must be used in a secure context (`https`).",
                          );
                        let i = yield (function () {
                            return eB(this, void 0, void 0, function* () {
                              return yield crypto.subtle.generateKey(
                                { name: "ECDSA", namedCurve: "P-256" },
                                !1,
                                ["sign"],
                              );
                            });
                          })(),
                          a = yield (function (e, t) {
                            return eB(this, void 0, void 0, function* () {
                              let n = eV(
                                  49152 + Math.floor(16384 * Math.random()),
                                ),
                                r = yield (function (e, t, n, r = ["v1"]) {
                                  return eB(this, void 0, void 0, function* () {
                                    let i = eV(t),
                                      a = (function (e) {
                                        let t = "",
                                          n = new Uint8Array(e),
                                          r = n.byteLength;
                                        for (let e = 0; e < r; e++)
                                          t += String.fromCharCode(n[e]);
                                        return window.btoa(t);
                                      })(yield crypto.subtle.exportKey("raw", e)),
                                      o = (function (e, t) {
                                        let n = null;
                                        if (t) {
                                          try {
                                            n = new URL(t);
                                          } catch (e) {}
                                          if (
                                            (null == n ? void 0 : n.protocol) !==
                                            "https:"
                                          )
                                            throw new eP(
                                              eW,
                                              "Base URLs supplied by wallets must be valid `https` URLs",
                                            );
                                        }
                                        return (
                                          n || (n = new URL("solana-wallet:/")),
                                          new URL(
                                            e.startsWith("/")
                                              ? e
                                              : [
                                                  ...eq(n.pathname),
                                                  ...eq(e),
                                                ].join("/"),
                                            n,
                                          )
                                        );
                                      })("v1/associate/local", n);
                                    return (
                                      o.searchParams.set(
                                        "association",
                                        a.replace(
                                          /[/+=]/g,
                                          (e) =>
                                            ({ "/": "_", "+": "-", "=": "." })[e],
                                        ),
                                      ),
                                      o.searchParams.set("port", `${i}`),
                                      r.forEach((e) => {
                                        o.searchParams.set("v", e);
                                      }),
                                      o
                                    );
                                  });
                                })(e, n, t);
                              return (
                                yield (function (e) {
                                  return eB(this, void 0, void 0, function* () {
                                    if ("https:" === e.protocol)
                                      window.location.assign(e);
                                    else
                                      try {
                                        switch (
                                          1 *
                                          (-1 ===
                                            navigator.userAgent.indexOf(
                                              "Firefox/",
                                            ))
                                        ) {
                                          case 0:
                                            (null == eJ &&
                                              (((eJ =
                                                document.createElement(
                                                  "iframe",
                                                )).style.display = "none"),
                                              document.body.appendChild(eJ)),
                                              (eJ.contentWindow.location.href =
                                                e.toString()));
                                            break;
                                          case 1: {
                                            let t = new Promise((e, t) => {
                                              function n() {
                                                (clearTimeout(i),
                                                  window.removeEventListener(
                                                    "blur",
                                                    r,
                                                  ));
                                              }
                                              function r() {
                                                (n(), e());
                                              }
                                              window.addEventListener("blur", r);
                                              let i = setTimeout(() => {
                                                (n(), t());
                                              }, 3e3);
                                            });
                                            (window.location.assign(e), yield t);
                                          }
                                        }
                                      } catch (e) {
                                        throw new eP(
                                          "ERROR_WALLET_NOT_FOUND",
                                          "Found no installed wallet that supports the mobile wallet protocol.",
                                        );
                                      }
                                  });
                                })(r),
                                n
                              );
                            });
                          })(i.publicKey, null == t ? void 0 : t.baseUri),
                          o = `ws://localhost:${a}/solana-wallet`,
                          s =
                            ((r = [...e$]),
                            () => (r.length > 1 ? r.shift() : r[0])),
                          l = 1,
                          c = 0,
                          u = { __type: "disconnected" };
                        return new Promise((t, r) => {
                          let a,
                            d,
                            h,
                            f = {},
                            w = () =>
                              eB(this, void 0, void 0, function* () {
                                if ("connecting" !== u.__type)
                                  return void console.warn(
                                    `Expected adapter state to be \`connecting\` at the moment the websocket opens. Got \`${u.__type}\`.`,
                                  );
                                a.removeEventListener("open", w);
                                let { associationKeypair: e } = u,
                                  t = yield eG();
                                (a.send(yield eZ(t.publicKey, e.privateKey)),
                                  (u = {
                                    __type: "hello_req_sent",
                                    associationPublicKey: e.publicKey,
                                    ecdhPrivateKey: t.privateKey,
                                  }));
                              }),
                            g = (e) => {
                              (e.wasClean
                                ? (u = { __type: "disconnected" })
                                : r(
                                    new eP(
                                      "ERROR_SESSION_CLOSED",
                                      `The wallet session dropped unexpectedly (${e.code}: ${e.reason}).`,
                                      { closeEvent: e },
                                    ),
                                  ),
                                d());
                            },
                            p = (e) =>
                              eB(this, void 0, void 0, function* () {
                                (d(),
                                  Date.now() - n >= 3e4
                                    ? r(
                                        new eP(
                                          "ERROR_SESSION_TIMEOUT",
                                          `Failed to connect to the wallet websocket at ${o}.`,
                                        ),
                                      )
                                    : (yield new Promise((e) => {
                                        let t = s();
                                        h = window.setTimeout(e, t);
                                      }),
                                      y()));
                              }),
                            m = (n) =>
                              eB(this, void 0, void 0, function* () {
                                let o = yield n.data.arrayBuffer();
                                switch (u.__type) {
                                  case "connecting":
                                    if (0 !== o.byteLength)
                                      throw Error(
                                        "Encountered unexpected message while connecting",
                                      );
                                    let s = yield eG();
                                    (a.send(yield eZ(s.publicKey, i.privateKey)),
                                      (u = {
                                        __type: "hello_req_sent",
                                        associationPublicKey: i.publicKey,
                                        ecdhPrivateKey: s.privateKey,
                                      }));
                                    break;
                                  case "connected":
                                    try {
                                      let e = o.slice(0, 4),
                                        t = eX(e);
                                      if (t !== c + 1)
                                        throw Error(
                                          "Encrypted message has invalid sequence number",
                                        );
                                      c = t;
                                      let n = yield (function (e, t) {
                                          return eB(
                                            this,
                                            void 0,
                                            void 0,
                                            function* () {
                                              let n = JSON.parse(yield eF(e, t));
                                              if (
                                                Object.hasOwnProperty.call(
                                                  n,
                                                  "error",
                                                )
                                              )
                                                throw new eR(
                                                  n.id,
                                                  n.error.code,
                                                  n.error.message,
                                                );
                                              return n;
                                            },
                                          );
                                        })(o, u.sharedSecret),
                                        r = f[n.id];
                                      (delete f[n.id], r.resolve(n.result));
                                    } catch (e) {
                                      if (e instanceof eR) {
                                        let t = f[e.jsonRpcMessageId];
                                        (delete f[e.jsonRpcMessageId],
                                          t.reject(e));
                                      } else throw e;
                                    }
                                    break;
                                  case "hello_req_sent": {
                                    var h, w;
                                    if (0 === o.byteLength) {
                                      let e = yield eG();
                                      (a.send(
                                        yield eZ(e.publicKey, i.privateKey),
                                      ),
                                        (u = {
                                          __type: "hello_req_sent",
                                          associationPublicKey: i.publicKey,
                                          ecdhPrivateKey: e.privateKey,
                                        }));
                                      break;
                                    }
                                    let n = yield (function (e, t, n) {
                                        return eB(
                                          this,
                                          void 0,
                                          void 0,
                                          function* () {
                                            let [r, i] = yield Promise.all([
                                                crypto.subtle.exportKey("raw", t),
                                                crypto.subtle.importKey(
                                                  "raw",
                                                  e.slice(0, 65),
                                                  {
                                                    name: "ECDH",
                                                    namedCurve: "P-256",
                                                  },
                                                  !1,
                                                  [],
                                                ),
                                              ]),
                                              a = yield crypto.subtle.deriveBits(
                                                { name: "ECDH", public: i },
                                                n,
                                                256,
                                              ),
                                              o = yield crypto.subtle.importKey(
                                                "raw",
                                                a,
                                                "HKDF",
                                                !1,
                                                ["deriveKey"],
                                              );
                                            return yield crypto.subtle.deriveKey(
                                              {
                                                name: "HKDF",
                                                hash: "SHA-256",
                                                salt: new Uint8Array(r),
                                                info: new Uint8Array(),
                                              },
                                              o,
                                              { name: "AES-GCM", length: 128 },
                                              !1,
                                              ["encrypt", "decrypt"],
                                            );
                                          },
                                        );
                                      })(
                                        o,
                                        u.associationPublicKey,
                                        u.ecdhPrivateKey,
                                      ),
                                      s = o.slice(65),
                                      g =
                                        0 !== s.byteLength
                                          ? yield eB(
                                              this,
                                              void 0,
                                              void 0,
                                              function* () {
                                                let e = eX(s.slice(0, 4));
                                                if (e !== c + 1)
                                                  throw Error(
                                                    "Encrypted message has invalid sequence number",
                                                  );
                                                return (
                                                  (c = e),
                                                  (function (e, t) {
                                                    return eB(
                                                      this,
                                                      void 0,
                                                      void 0,
                                                      function* () {
                                                        let n = JSON.parse(
                                                            yield eF(e, t),
                                                          ),
                                                          r = "legacy";
                                                        if (
                                                          Object.hasOwnProperty.call(
                                                            n,
                                                            "v",
                                                          )
                                                        )
                                                          switch (n.v) {
                                                            case 1:
                                                            case "1":
                                                            case "v1":
                                                              r = "v1";
                                                              break;
                                                            case "legacy":
                                                              r = "legacy";
                                                              break;
                                                            default:
                                                              throw new eP(
                                                                "ERROR_INVALID_PROTOCOL_VERSION",
                                                                `Unknown/unsupported protocol version: ${n.v}`,
                                                              );
                                                          }
                                                        return {
                                                          protocol_version: r,
                                                        };
                                                      },
                                                    );
                                                  })(s, n)
                                                );
                                              },
                                            )
                                          : { protocol_version: "legacy" };
                                    u = {
                                      __type: "connected",
                                      sharedSecret: n,
                                      sessionProperties: g,
                                    };
                                    let p =
                                      ((h = g.protocol_version),
                                      (w = (e, t) =>
                                        eB(this, void 0, void 0, function* () {
                                          let r = l++;
                                          return (
                                            a.send(
                                              yield (function (e, t) {
                                                return eB(
                                                  this,
                                                  void 0,
                                                  void 0,
                                                  function* () {
                                                    let n = JSON.stringify(e);
                                                    return (function (e, t, n) {
                                                      return eB(
                                                        this,
                                                        void 0,
                                                        void 0,
                                                        function* () {
                                                          let r = (function (e) {
                                                              if (
                                                                e >= 0x100000000
                                                              )
                                                                throw Error(
                                                                  "Outbound sequence number overflow. The maximum sequence number is 32-bytes.",
                                                                );
                                                              let t =
                                                                new ArrayBuffer(
                                                                  4,
                                                                );
                                                              return (
                                                                new DataView(
                                                                  t,
                                                                ).setUint32(
                                                                  0,
                                                                  e,
                                                                  !1,
                                                                ),
                                                                new Uint8Array(t)
                                                              );
                                                            })(t),
                                                            i = new Uint8Array(
                                                              12,
                                                            );
                                                          crypto.getRandomValues(
                                                            i,
                                                          );
                                                          let a =
                                                              yield crypto.subtle.encrypt(
                                                                eH(r, i),
                                                                n,
                                                                new TextEncoder().encode(
                                                                  e,
                                                                ),
                                                              ),
                                                            o = new Uint8Array(
                                                              r.byteLength +
                                                                i.byteLength +
                                                                a.byteLength,
                                                            );
                                                          return (
                                                            o.set(
                                                              new Uint8Array(r),
                                                              0,
                                                            ),
                                                            o.set(
                                                              new Uint8Array(i),
                                                              r.byteLength,
                                                            ),
                                                            o.set(
                                                              new Uint8Array(a),
                                                              r.byteLength +
                                                                i.byteLength,
                                                            ),
                                                            o
                                                          );
                                                        },
                                                      );
                                                    })(n, e.id, t);
                                                  },
                                                );
                                              })(
                                                {
                                                  id: r,
                                                  jsonrpc: "2.0",
                                                  method: e,
                                                  params: null != t ? t : {},
                                                },
                                                n,
                                              ),
                                            ),
                                            new Promise((t, n) => {
                                              f[r] = {
                                                resolve(r) {
                                                  switch (e) {
                                                    case "authorize":
                                                    case "reauthorize": {
                                                      let { wallet_uri_base: e } =
                                                        r;
                                                      if (null != e)
                                                        try {
                                                          let t;
                                                          try {
                                                            t = new URL(e);
                                                          } catch (e) {
                                                            throw new eP(
                                                              eW,
                                                              "Invalid base URL supplied by wallet",
                                                            );
                                                          }
                                                          if (
                                                            "https:" !==
                                                            t.protocol
                                                          )
                                                            throw new eP(
                                                              eW,
                                                              "Base URLs supplied by wallets must be valid `https` URLs",
                                                            );
                                                        } catch (e) {
                                                          n(e);
                                                          return;
                                                        }
                                                    }
                                                  }
                                                  t(r);
                                                },
                                                reject: n,
                                              };
                                            })
                                          );
                                        })),
                                      new Proxy(
                                        {},
                                        {
                                          get: (e, t) =>
                                            "then" === t
                                              ? null
                                              : (null == e[t] &&
                                                  (e[t] = function (e) {
                                                    return eB(
                                                      this,
                                                      void 0,
                                                      void 0,
                                                      function* () {
                                                        let {
                                                            method: n,
                                                            params: r,
                                                          } = (function (
                                                            e,
                                                            t,
                                                            n,
                                                          ) {
                                                            let r = t,
                                                              i = e
                                                                .toString()
                                                                .replace(
                                                                  /[A-Z]/g,
                                                                  (e) =>
                                                                    `_${e.toLowerCase()}`,
                                                                )
                                                                .toLowerCase();
                                                            switch (e) {
                                                              case "authorize": {
                                                                let { chain: e } =
                                                                  r;
                                                                if (
                                                                  "legacy" === n
                                                                ) {
                                                                  switch (e) {
                                                                    case "solana:testnet":
                                                                      e =
                                                                        "testnet";
                                                                      break;
                                                                    case "solana:devnet":
                                                                      e =
                                                                        "devnet";
                                                                      break;
                                                                    case "solana:mainnet":
                                                                      e =
                                                                        "mainnet-beta";
                                                                      break;
                                                                    default:
                                                                      e =
                                                                        r.cluster;
                                                                  }
                                                                  r.cluster = e;
                                                                } else {
                                                                  switch (e) {
                                                                    case "testnet":
                                                                    case "devnet":
                                                                      e = `solana:${e}`;
                                                                      break;
                                                                    case "mainnet-beta":
                                                                      e =
                                                                        "solana:mainnet";
                                                                  }
                                                                  r.chain = e;
                                                                }
                                                              }
                                                              case "reauthorize": {
                                                                let {
                                                                  auth_token: e,
                                                                  identity: t,
                                                                } = r;
                                                                e &&
                                                                  ("legacy" === n
                                                                    ? ((i =
                                                                        "reauthorize"),
                                                                      (r = {
                                                                        auth_token:
                                                                          e,
                                                                        identity:
                                                                          t,
                                                                      }))
                                                                    : (i =
                                                                        "authorize"));
                                                              }
                                                            }
                                                            return {
                                                              method: i,
                                                              params: r,
                                                            };
                                                          })(t, e, h),
                                                          i = yield w(n, r);
                                                        return (
                                                          "authorize" === n &&
                                                            r.sign_in_payload &&
                                                            !i.sign_in_result &&
                                                            (i.sign_in_result =
                                                              yield (function (
                                                                e,
                                                                t,
                                                                n,
                                                              ) {
                                                                var r;
                                                                return eB(
                                                                  this,
                                                                  void 0,
                                                                  void 0,
                                                                  function* () {
                                                                    var i,
                                                                      a,
                                                                      o,
                                                                      s;
                                                                    let l =
                                                                        null !=
                                                                        (r =
                                                                          e.domain)
                                                                          ? r
                                                                          : window
                                                                              .location
                                                                              .host,
                                                                      c =
                                                                        t
                                                                          .accounts[0]
                                                                          .address,
                                                                      u = ((s =
                                                                        (function (
                                                                          e,
                                                                        ) {
                                                                          let t = `${e.domain} wants you to sign in with your Solana account:
  `;
                                                                          ((t += `${e.address}`),
                                                                            e.statement &&
                                                                              (t += `
  
  ${e.statement}`));
                                                                          let n =
                                                                            [];
                                                                          if (
                                                                            (e.uri &&
                                                                              n.push(
                                                                                `URI: ${e.uri}`,
                                                                              ),
                                                                            e.version &&
                                                                              n.push(
                                                                                `Version: ${e.version}`,
                                                                              ),
                                                                            e.chainId &&
                                                                              n.push(
                                                                                `Chain ID: ${e.chainId}`,
                                                                              ),
                                                                            e.nonce &&
                                                                              n.push(
                                                                                `Nonce: ${e.nonce}`,
                                                                              ),
                                                                            e.issuedAt &&
                                                                              n.push(
                                                                                `Issued At: ${e.issuedAt}`,
                                                                              ),
                                                                            e.expirationTime &&
                                                                              n.push(
                                                                                `Expiration Time: ${e.expirationTime}`,
                                                                              ),
                                                                            e.notBefore &&
                                                                              n.push(
                                                                                `Not Before: ${e.notBefore}`,
                                                                              ),
                                                                            e.requestId &&
                                                                              n.push(
                                                                                `Request ID: ${e.requestId}`,
                                                                              ),
                                                                            e.resources)
                                                                          )
                                                                            for (let t of (n.push(
                                                                              "Resources:",
                                                                            ),
                                                                            e.resources))
                                                                              n.push(
                                                                                `- ${t}`,
                                                                              );
                                                                          return (
                                                                            n.length &&
                                                                              (t += `
  
  ${n.join("\n")}`),
                                                                            t
                                                                          );
                                                                        })(
                                                                          Object.assign(
                                                                            Object.assign(
                                                                              {},
                                                                              e,
                                                                            ),
                                                                            {
                                                                              domain:
                                                                                l,
                                                                              address:
                                                                                ((i =
                                                                                  eQ(
                                                                                    c,
                                                                                  )),
                                                                                ((a =
                                                                                  "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),
                                                                                Object.freeze(
                                                                                  {
                                                                                    ...(o =
                                                                                      {
                                                                                        read(
                                                                                          e,
                                                                                          t,
                                                                                        ) {
                                                                                          let n =
                                                                                            0 ===
                                                                                            t
                                                                                              ? e
                                                                                              : e.slice(
                                                                                                  t,
                                                                                                );
                                                                                          if (
                                                                                            0 ===
                                                                                            n.length
                                                                                          )
                                                                                            return [
                                                                                              "",
                                                                                              0,
                                                                                            ];
                                                                                          let r =
                                                                                            n.findIndex(
                                                                                              (
                                                                                                e,
                                                                                              ) =>
                                                                                                0 !==
                                                                                                e,
                                                                                            );
                                                                                          r =
                                                                                            -1 ===
                                                                                            r
                                                                                              ? n.length
                                                                                              : r;
                                                                                          let i =
                                                                                            a[0].repeat(
                                                                                              r,
                                                                                            );
                                                                                          return r ===
                                                                                            n.length
                                                                                            ? [
                                                                                                i,
                                                                                                e.length,
                                                                                              ]
                                                                                            : [
                                                                                                i +
                                                                                                  (function (
                                                                                                    e,
                                                                                                    t,
                                                                                                  ) {
                                                                                                    let n =
                                                                                                        BigInt(
                                                                                                          t.length,
                                                                                                        ),
                                                                                                      r =
                                                                                                        [];
                                                                                                    for (
                                                                                                      ;
                                                                                                      e >
                                                                                                      0n;
  
                                                                                                    )
                                                                                                      (r.unshift(
                                                                                                        t[
                                                                                                          Number(
                                                                                                            e %
                                                                                                              n,
                                                                                                          )
                                                                                                        ],
                                                                                                      ),
                                                                                                        (e /=
                                                                                                          n));
                                                                                                    return r.join(
                                                                                                      "",
                                                                                                    );
                                                                                                  })(
                                                                                                    n
                                                                                                      .slice(
                                                                                                        r,
                                                                                                      )
                                                                                                      .reduce(
                                                                                                        (
                                                                                                          e,
                                                                                                          t,
                                                                                                        ) =>
                                                                                                          256n *
                                                                                                            e +
                                                                                                          BigInt(
                                                                                                            t,
                                                                                                          ),
                                                                                                        0n,
                                                                                                      ),
                                                                                                    a,
                                                                                                  ),
                                                                                                e.length,
                                                                                              ];
                                                                                        },
                                                                                      }),
                                                                                    decode:
                                                                                      (
                                                                                        e,
                                                                                        t = 0,
                                                                                      ) =>
                                                                                        o.read(
                                                                                          e,
                                                                                          t,
                                                                                        )[0],
                                                                                  },
                                                                                )).decode(
                                                                                  i,
                                                                                )),
                                                                            },
                                                                          ),
                                                                        )),
                                                                      window.btoa(
                                                                        s,
                                                                      ))
                                                                        .replace(
                                                                          /\+/g,
                                                                          "-",
                                                                        )
                                                                        .replace(
                                                                          /\//g,
                                                                          "_",
                                                                        )
                                                                        .replace(
                                                                          /=+$/,
                                                                          "",
                                                                        ),
                                                                      d = eQ(
                                                                        (yield n(
                                                                          "sign_messages",
                                                                          {
                                                                            addresses:
                                                                              [c],
                                                                            payloads:
                                                                              [u],
                                                                          },
                                                                        ))
                                                                          .signed_payloads[0],
                                                                      ),
                                                                      h = eY(
                                                                        d.slice(
                                                                          0,
                                                                          d.length -
                                                                            64,
                                                                        ),
                                                                      ),
                                                                      f = eY(
                                                                        d.slice(
                                                                          d.length -
                                                                            64,
                                                                        ),
                                                                      );
                                                                    return {
                                                                      address: c,
                                                                      signed_message:
                                                                        0 ==
                                                                        h.length
                                                                          ? u
                                                                          : h,
                                                                      signature:
                                                                        f,
                                                                    };
                                                                  },
                                                                );
                                                              })(
                                                                r.sign_in_payload,
                                                                i,
                                                                w,
                                                              )),
                                                          (function (e, t, n) {
                                                            if (
                                                              "getCapabilities" ===
                                                              e
                                                            )
                                                              switch (n) {
                                                                case "legacy": {
                                                                  let e = [
                                                                    "solana:signTransactions",
                                                                  ];
                                                                  return (
                                                                    !0 ===
                                                                      t.supports_clone_authorization &&
                                                                      e.push(eK),
                                                                    Object.assign(
                                                                      Object.assign(
                                                                        {},
                                                                        t,
                                                                      ),
                                                                      {
                                                                        features:
                                                                          e,
                                                                      },
                                                                    )
                                                                  );
                                                                }
                                                                case "v1":
                                                                  return Object.assign(
                                                                    Object.assign(
                                                                      {},
                                                                      t,
                                                                    ),
                                                                    {
                                                                      supports_sign_and_send_transactions:
                                                                        !0,
                                                                      supports_clone_authorization:
                                                                        t.features.includes(
                                                                          eK,
                                                                        ),
                                                                    },
                                                                  );
                                                              }
                                                            return t;
                                                          })(t, i, h)
                                                        );
                                                      },
                                                    );
                                                  }),
                                                e[t]),
                                          defineProperty: () => !1,
                                          deleteProperty: () => !1,
                                        },
                                      ));
                                    try {
                                      t(yield e(p));
                                    } catch (e) {
                                      r(e);
                                    } finally {
                                      (d(), a.close());
                                    }
                                  }
                                }
                              }),
                            y = () => {
                              (d && d(),
                                (u = {
                                  __type: "connecting",
                                  associationKeypair: i,
                                }),
                                void 0 === n && (n = Date.now()),
                                (a = new WebSocket(o, [
                                  "com.solana.mobilewalletadapter.v1",
                                ])).addEventListener("open", w),
                                a.addEventListener("close", g),
                                a.addEventListener("error", p),
                                a.addEventListener("message", m),
                                (d = () => {
                                  (window.clearTimeout(h),
                                    a.removeEventListener("open", w),
                                    a.removeEventListener("close", g),
                                    a.removeEventListener("error", p),
                                    a.removeEventListener("message", m));
                                }));
                            };
                          y();
                        });
                      });
                    })(e, n ? { baseUri: n } : void 0);
                  } catch (e) {
                    throw (
                      e6(this, b, "f") !== r && (yield new Promise(() => {})),
                      e instanceof Error &&
                        "SolanaMobileWalletAdapterError" === e.name &&
                        "ERROR_WALLET_NOT_FOUND" === e.code &&
                        (yield e6(this, D, "f").call(this, this)),
                      e
                    );
                  }
                }),
              ),
              B.set(this, () => {
                if (!e6(this, N, "f")) throw Error("Wallet not connected");
                return {
                  authToken: e6(this, N, "f").auth_token,
                  chain: e6(this, N, "f").chain,
                };
              }),
              Y.set(this, (e) =>
                e.map((e) => {
                  var t, n;
                  let r = tr(e.address);
                  return {
                    address: e2.encode(r),
                    publicKey: r,
                    label: e.label,
                    icon: e.icon,
                    chains: null != (t = e.chains) ? t : e6(this, T, "f"),
                    features: null != (n = e.features) ? n : ta,
                  };
                }),
              ),
              Q.set(this, (e) =>
                e3(this, void 0, void 0, function* () {
                  let { authToken: t, chain: n } = e6(this, B, "f").call(this);
                  try {
                    let r = e.map((e) => tn(e));
                    return yield e6(this, R, "f").call(this, (e) =>
                      e3(this, void 0, void 0, function* () {
                        return (
                          yield e6(this, W, "f").call(this, e, t, n),
                          (yield e.signTransactions({
                            payloads: r,
                          })).signed_payloads.map(tr)
                        );
                      }),
                    );
                  } catch (e) {
                    throw Error(
                      (e instanceof Error && e.message) || "Unknown error",
                    );
                  }
                }),
              ),
              Z.set(this, (e, t) =>
                e3(this, void 0, void 0, function* () {
                  let { authToken: n, chain: r } = e6(this, B, "f").call(this);
                  try {
                    return yield e6(this, R, "f").call(this, (i) =>
                      e3(this, void 0, void 0, function* () {
                        let [a, o] = yield Promise.all([
                          i.getCapabilities(),
                          e6(this, W, "f").call(this, i, n, r),
                        ]);
                        if (a.supports_sign_and_send_transactions) {
                          let n = tn(e);
                          return (yield i.signAndSendTransactions(
                            Object.assign(Object.assign({}, t), {
                              payloads: [n],
                            }),
                          )).signatures.map(tr)[0];
                        }
                        throw Error(
                          "connected wallet does not support signAndSendTransaction",
                        );
                      }),
                    );
                  } catch (e) {
                    throw Error(
                      (e instanceof Error && e.message) || "Unknown error",
                    );
                  }
                }),
              ),
              K.set(this, (...e) =>
                e3(this, void 0, void 0, function* () {
                  let t = [];
                  for (let n of e) {
                    let e = yield e6(this, Z, "f").call(
                      this,
                      n.transaction,
                      n.options,
                    );
                    t.push({ signature: e });
                  }
                  return t;
                }),
              ),
              F.set(this, (...e) =>
                e3(this, void 0, void 0, function* () {
                  return (yield e6(this, Q, "f").call(
                    this,
                    e.map(({ transaction: e }) => e),
                  )).map((e) => ({ signedTransaction: e }));
                }),
              ),
              H.set(this, (...e) =>
                e3(this, void 0, void 0, function* () {
                  let { authToken: t, chain: n } = e6(this, B, "f").call(this),
                    r = e.map(({ account: e }) => tn(e.publicKey)),
                    i = e.map(({ message: e }) => tn(e));
                  try {
                    return yield e6(this, R, "f").call(this, (e) =>
                      e3(this, void 0, void 0, function* () {
                        return (
                          yield e6(this, W, "f").call(this, e, t, n),
                          (yield e.signMessages({
                            addresses: r,
                            payloads: i,
                          })).signed_payloads
                            .map(tr)
                            .map((e) => ({
                              signedMessage: e,
                              signature: e.slice(-64),
                            }))
                        );
                      }),
                    );
                  } catch (e) {
                    throw Error(
                      (e instanceof Error && e.message) || "Unknown error",
                    );
                  }
                }),
              ),
              G.set(this, (...e) =>
                e3(this, void 0, void 0, function* () {
                  let t = [];
                  if (!(e.length > 1))
                    return [yield e6(this, V, "f").call(this, e[0])];
                  for (let n of e) t.push(yield e6(this, V, "f").call(this, n));
                  return t;
                }),
              ),
              V.set(this, (e) =>
                e3(this, void 0, void 0, function* () {
                  var t, n, r;
                  e8(this, j, !0, "f");
                  try {
                    let i = yield e6(this, O, "f").call(
                      this,
                      Object.assign(Object.assign({}, e), {
                        domain:
                          null != (t = null == e ? void 0 : e.domain)
                            ? t
                            : window.location.host,
                      }),
                    );
                    if (!i.sign_in_result)
                      throw Error(
                        "Sign in failed, no sign in result returned by wallet",
                      );
                    let a = i.sign_in_result.address,
                      o = i.accounts.find((e) => e.address == a);
                    return {
                      account: Object.assign(
                        Object.assign(
                          {},
                          null != o ? o : { address: e2.encode(tr(a)) },
                        ),
                        {
                          publicKey: tr(a),
                          chains:
                            null != (n = null == o ? void 0 : o.chains)
                              ? n
                              : e6(this, T, "f"),
                          features:
                            null != (r = null == o ? void 0 : o.features)
                              ? r
                              : i.capabilities.features,
                        },
                      ),
                      signedMessage: tr(i.sign_in_result.signed_message),
                      signature: tr(i.sign_in_result.signature),
                    };
                  } catch (e) {
                    throw Error(
                      (e instanceof Error && e.message) || "Unknown error",
                    );
                  } finally {
                    e8(this, j, !1, "f");
                  }
                }),
              ),
              e8(this, L, e.authorizationCache, "f"),
              e8(this, I, e.appIdentity, "f"),
              e8(this, T, e.chains, "f"),
              e8(this, A, e.chainSelector, "f"),
              e8(this, D, e.onWalletNotFound, "f"),
              e8(
                this,
                S,
                {
                  [eO.R]: {
                    version: "1.0.0",
                    supportedTransactionVersions: ["legacy", 0],
                    signAndSendTransaction: e6(this, K, "f"),
                  },
                  [e_.q]: {
                    version: "1.0.0",
                    supportedTransactionVersions: ["legacy", 0],
                    signTransaction: e6(this, F, "f"),
                  },
                },
                "f",
              ));
          }
          get version() {
            return e6(this, y, "f");
          }
          get name() {
            return e6(this, M, "f");
          }
          get url() {
            return e6(this, E, "f");
          }
          get icon() {
            return e6(this, v, "f");
          }
          get chains() {
            return e6(this, T, "f");
          }
          get features() {
            return Object.assign(
              {
                [e0.u]: { version: "1.0.0", connect: e6(this, k, "f") },
                [e1.w]: { version: "1.0.0", disconnect: e6(this, P, "f") },
                [e4.j]: { version: "1.0.0", on: e6(this, z, "f") },
                [ek.F]: { version: "1.0.0", signMessage: e6(this, H, "f") },
                [ex]: { version: "1.0.0", signIn: e6(this, G, "f") },
              },
              e6(this, S, "f"),
            );
          }
          get accounts() {
            var e, t;
            return null !=
              (t = null == (e = e6(this, N, "f")) ? void 0 : e.accounts)
              ? t
              : [];
          }
          get connected() {
            return !!e6(this, N, "f");
          }
          get isAuthorized() {
            return !!e6(this, N, "f");
          }
          get currentAuthorization() {
            return e6(this, N, "f");
          }
          get cachedAuthorizationResult() {
            return e6(this, L, "f").get();
          }
        }
        ((m = new WeakMap()),
          (y = new WeakMap()),
          (M = new WeakMap()),
          (E = new WeakMap()),
          (v = new WeakMap()),
          (I = new WeakMap()),
          (N = new WeakMap()),
          (L = new WeakMap()),
          (j = new WeakMap()),
          (b = new WeakMap()),
          (T = new WeakMap()),
          (A = new WeakMap()),
          (S = new WeakMap()),
          (D = new WeakMap()),
          (z = new WeakMap()),
          (k = new WeakMap()),
          (O = new WeakMap()),
          (_ = new WeakMap()),
          (U = new WeakMap()),
          (W = new WeakMap()),
          (P = new WeakMap()),
          (R = new WeakMap()),
          (B = new WeakMap()),
          (Y = new WeakMap()),
          (Q = new WeakMap()),
          (Z = new WeakMap()),
          (K = new WeakMap()),
          (F = new WeakMap()),
          (H = new WeakMap()),
          (G = new WeakMap()),
          (V = new WeakMap()),
          (p = new WeakSet()),
          (C = function (e, ...t) {
            var n;
            null == (n = e6(this, m, "f")[e]) ||
              n.forEach((e) => e.apply(null, t));
          }),
          (x = function (e, t) {
            var n;
            e6(this, m, "f")[e] =
              null == (n = e6(this, m, "f")[e])
                ? void 0
                : n.filter((e) => t !== e);
          }),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakSet());
        (Event, new WeakMap());
        class ts extends tt {
          constructor() {
            (super(...arguments),
              (this.contentStyles = tc),
              (this.contentHtml = tl));
          }
          initWithError(e) {
            (super.init(), this.populateError(e));
          }
          populateError(e) {
            var t, n;
            let r =
                null == (t = this.dom)
                  ? void 0
                  : t.getElementById("mobile-wallet-adapter-error-message"),
              i =
                null == (n = this.dom)
                  ? void 0
                  : n.getElementById("mobile-wallet-adapter-error-action");
            if (r) {
              if ("SolanaMobileWalletAdapterError" === e.name)
                switch (e.code) {
                  case "ERROR_WALLET_NOT_FOUND":
                    ((r.innerHTML =
                      "To use mobile wallet adapter, you must have a compatible mobile wallet application installed on your device."),
                      i &&
                        i.addEventListener("click", () => {
                          window.location.href =
                            "https://solanamobile.com/wallets";
                        }));
                    return;
                  case "ERROR_BROWSER_NOT_SUPPORTED":
                    ((r.innerHTML =
                      "This browser appears to be incompatible with mobile wallet adapter. Open this page in a compatible mobile browser app and try again."),
                      i && (i.style.display = "none"));
                    return;
                }
              r.innerHTML = `An unexpected error occurred: ${e.message}`;
            } else console.log("Failed to locate error dialog element");
          }
        }
        let tl = `
  <svg class="mobile-wallet-adapter-embedded-modal-error-icon" xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#000000"><path d="M 280,-80 Q 197,-80 138.5,-138.5 80,-197 80,-280 80,-363 138.5,-421.5 197,-480 280,-480 q 83,0 141.5,58.5 58.5,58.5 58.5,141.5 0,83 -58.5,141.5 Q 363,-80 280,-80 Z M 824,-120 568,-376 Q 556,-389 542.5,-402.5 529,-416 516,-428 q 38,-24 61,-64 23,-40 23,-88 0,-75 -52.5,-127.5 Q 495,-760 420,-760 345,-760 292.5,-707.5 240,-655 240,-580 q 0,6 0.5,11.5 0.5,5.5 1.5,11.5 -18,2 -39.5,8 -21.5,6 -38.5,14 -2,-11 -3,-22 -1,-11 -1,-23 0,-109 75.5,-184.5 Q 311,-840 420,-840 q 109,0 184.5,75.5 75.5,75.5 75.5,184.5 0,43 -13.5,81.5 Q 653,-460 629,-428 l 251,252 z m -615,-61 71,-71 70,71 29,-28 -71,-71 71,-71 -28,-28 -71,71 -71,-71 -28,28 71,71 -71,71 z"/></svg>
  <div class="mobile-wallet-adapter-embedded-modal-title">We can't find a wallet.</div>
  <div id="mobile-wallet-adapter-error-message" class="mobile-wallet-adapter-embedded-modal-subtitle"></div>
  <div>
      <button data-error-action id="mobile-wallet-adapter-error-action" class="mobile-wallet-adapter-embedded-modal-error-action">
          Find a wallet
      </button>
  </div>
  `,
          tc = `
  .mobile-wallet-adapter-embedded-modal-content {
      text-align: center;
  }
  
  .mobile-wallet-adapter-embedded-modal-error-icon {
      margin-top: 24px;
  }
  
  .mobile-wallet-adapter-embedded-modal-title {
      margin: 18px 100px auto 100px;
      color: #000000;
      font-size: 2.75em;
      font-weight: 600;
  }
  
  .mobile-wallet-adapter-embedded-modal-subtitle {
      margin: 30px 60px 40px 60px;
      color: #000000;
      font-size: 1.25em;
      font-weight: 400;
  }
  
  .mobile-wallet-adapter-embedded-modal-error-action {
      display: block;
      width: 100%;
      height: 56px;
      /*margin-top: 40px;*/
      font-size: 1.25em;
      /*line-height: 24px;*/
      /*letter-spacing: -1%;*/
      background: #000000;
      color: #FFFFFF;
      border-radius: 18px;
  }
  
  /* Smaller screens */
  @media all and (max-width: 600px) {
      .mobile-wallet-adapter-embedded-modal-title {
          font-size: 1.5em;
          margin-right: 12px;
          margin-left: 12px;
      }
      .mobile-wallet-adapter-embedded-modal-subtitle {
          margin-right: 12px;
          margin-left: 12px;
      }
  }
  `,
          tu = "SolanaMobileWalletAdapterDefaultAuthorizationCache";
        function td(e, t, n, r) {
          return new (n || (n = Promise))(function (i, a) {
            function o(e) {
              try {
                l(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function s(e) {
              try {
                l(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value) instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })
                  ).then(o, s);
            }
            l((r = r.apply(e, t || [])).next());
          });
        }
        function th(e, t, n, r) {
          if ("a" === n && !r)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
        }
        function tf(e, t, n, r, i) {
          if ("m" === r) throw TypeError("Private method is not writable");
          if ("a" === r && !i)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it",
            );
          return ("a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n);
        }
        let tw = "standard:connect";
        function tg(e) {
          return window.btoa(String.fromCharCode.call(null, ...e));
        }
        function tp(e) {
          switch (e) {
            case "mainnet-beta":
              return "solana:mainnet";
            case "testnet":
              return "solana:testnet";
            case "devnet":
              return "solana:devnet";
            default:
              return e;
          }
        }
        class tm extends eS.Xl {
          constructor(e, t) {
            (super(),
              q.add(this),
              (this.supportedTransactionVersions = new Set(["legacy", 0])),
              J.set(this, void 0),
              $.set(this, !1),
              X.set(
                this,
                "undefined" != typeof window &&
                  window.isSecureContext &&
                  "undefined" != typeof document &&
                  /android/i.test(navigator.userAgent)
                  ? eD.Ok.Loadable
                  : eD.Ok.Unsupported,
              ),
              ee.set(this, void 0),
              et.set(this, void 0),
              en.set(this, void 0),
              er.set(this, (e) =>
                td(this, void 0, void 0, function* () {
                  if (e.accounts && e.accounts.length > 0) {
                    th(this, q, "m", ea).call(this);
                    let t = yield th(this, ee, "f").call(this, e.accounts);
                    t !== th(this, et, "f") &&
                      (tf(this, et, t, "f"),
                      tf(this, en, void 0, "f"),
                      this.emit("connect", this.publicKey));
                  }
                }),
              ),
              tf(
                this,
                ee,
                (e) =>
                  td(this, void 0, void 0, function* () {
                    var n;
                    let r = yield t.addressSelector.select(
                      e.map(({ publicKey: e }) => tg(e)),
                    );
                    return null != (n = e.find(({ publicKey: e }) => tg(e) === r))
                      ? n
                      : e[0];
                  }),
                "f",
              ),
              tf(this, J, e, "f"),
              th(this, J, "f").features["standard:events"].on(
                "change",
                th(this, er, "f"),
              ),
              (this.name = th(this, J, "f").name),
              (this.icon = th(this, J, "f").icon),
              (this.url = th(this, J, "f").url));
          }
          get publicKey() {
            var e;
            if (!th(this, en, "f") && th(this, et, "f"))
              try {
                tf(this, en, new eC.J3(th(this, et, "f").publicKey), "f");
              } catch (e) {
                throw new ez.Kd(
                  (e instanceof Error && (null == e ? void 0 : e.message)) ||
                    "Unknown error",
                  e,
                );
              }
            return null != (e = th(this, en, "f")) ? e : null;
          }
          get connected() {
            return th(this, J, "f").connected;
          }
          get connecting() {
            return th(this, $, "f");
          }
          get readyState() {
            return th(this, X, "f");
          }
          autoConnect_DO_NOT_USE_OR_YOU_WILL_BE_FIRED() {
            return td(this, void 0, void 0, function* () {
              return yield this.autoConnect();
            });
          }
          autoConnect() {
            return td(this, void 0, void 0, function* () {
              th(this, q, "m", ei).call(this, !0);
            });
          }
          connect() {
            return td(this, void 0, void 0, function* () {
              th(this, q, "m", ei).call(this);
            });
          }
          performAuthorization(e) {
            return td(this, void 0, void 0, function* () {
              try {
                let t = yield th(this, J, "f").cachedAuthorizationResult;
                if (t)
                  return (
                    yield th(this, J, "f").features[tw].connect({ silent: !0 }),
                    t
                  );
                return (
                  e
                    ? yield th(this, J, "f").features[ex].signIn(e)
                    : yield th(this, J, "f").features[tw].connect(),
                  yield yield th(this, J, "f").cachedAuthorizationResult
                );
              } catch (e) {
                throw new ez.Y6(
                  (e instanceof Error && e.message) || "Unknown error",
                  e,
                );
              }
            });
          }
          disconnect() {
            return td(this, void 0, void 0, function* () {
              return yield th(this, q, "m", el).call(this, () =>
                td(this, void 0, void 0, function* () {
                  (tf(this, $, !1, "f"),
                    tf(this, en, void 0, "f"),
                    tf(this, et, void 0, "f"),
                    yield th(this, J, "f").features[
                      "standard:disconnect"
                    ].disconnect(),
                    this.emit("disconnect"));
                }),
              );
            });
          }
          signIn(e) {
            return td(this, void 0, void 0, function* () {
              return th(this, q, "m", el).call(this, () =>
                td(this, void 0, void 0, function* () {
                  var t;
                  if (
                    th(this, X, "f") !== eD.Ok.Installed &&
                    th(this, X, "f") !== eD.Ok.Loadable
                  )
                    throw new ez.AE();
                  tf(this, $, !0, "f");
                  try {
                    let n = yield th(this, J, "f").features[ex].signIn(
                      Object.assign(Object.assign({}, e), {
                        domain:
                          null != (t = null == e ? void 0 : e.domain)
                            ? t
                            : window.location.host,
                      }),
                    );
                    if (n.length > 0) return n[0];
                    throw Error(
                      "Sign in failed, no sign in result returned by wallet",
                    );
                  } catch (e) {
                    throw new ez.Y6(
                      (e instanceof Error && e.message) || "Unknown error",
                      e,
                    );
                  } finally {
                    tf(this, $, !1, "f");
                  }
                }),
              );
            });
          }
          signMessage(e) {
            return td(this, void 0, void 0, function* () {
              return yield th(this, q, "m", el).call(this, () =>
                td(this, void 0, void 0, function* () {
                  let t = th(this, q, "m", eo).call(this);
                  try {
                    return (yield th(this, J, "f").features[ek.F].signMessage({
                      account: t,
                      message: e,
                    }))[0].signature;
                  } catch (e) {
                    throw new ez.K3(null == e ? void 0 : e.message, e);
                  }
                }),
              );
            });
          }
          sendTransaction(e, t, n) {
            return td(this, void 0, void 0, function* () {
              return yield th(this, q, "m", el).call(this, () =>
                td(this, void 0, void 0, function* () {
                  let r = th(this, q, "m", eo).call(this);
                  try {
                    if (eO.R in th(this, J, "f").features) {
                      let t = tp(th(this, J, "f").currentAuthorization.chain),
                        [i] = (yield th(this, J, "f").features[
                          eO.R
                        ].signAndSendTransaction({
                          account: r,
                          transaction: e.serialize(),
                          chain: t,
                          options: n
                            ? {
                                skipPreflight: n.skipPreflight,
                                maxRetries: n.maxRetries,
                              }
                            : void 0,
                        })).map((e) => tg(e.signature));
                      return i;
                    }
                    {
                      let [r] = yield th(this, q, "m", es).call(this, [e]);
                      if ("version" in r) return yield t.sendTransaction(r);
                      {
                        let e = r.serialize();
                        return yield t.sendRawTransaction(
                          e,
                          Object.assign(Object.assign({}, n), {
                            preflightCommitment: (function () {
                              let e, r;
                              switch (t.commitment) {
                                case "confirmed":
                                case "finalized":
                                case "processed":
                                  e = t.commitment;
                                  break;
                                default:
                                  e = "finalized";
                              }
                              switch (
                                null == n ? void 0 : n.preflightCommitment
                              ) {
                                case "confirmed":
                                case "finalized":
                                case "processed":
                                  r = n.preflightCommitment;
                                  break;
                                case void 0:
                                  r = e;
                                  break;
                                default:
                                  r = "finalized";
                              }
                              let i =
                                  "finalized" === r ? 2 : +("confirmed" === r),
                                a = "finalized" === e ? 2 : +("confirmed" === e);
                              return i < a ? r : e;
                            })(),
                          }),
                        );
                      }
                    }
                  } catch (e) {
                    throw new ez.UF(null == e ? void 0 : e.message, e);
                  }
                }),
              );
            });
          }
          signTransaction(e) {
            return td(this, void 0, void 0, function* () {
              return yield th(this, q, "m", el).call(this, () =>
                td(this, void 0, void 0, function* () {
                  let [t] = yield th(this, q, "m", es).call(this, [e]);
                  return t;
                }),
              );
            });
          }
          signAllTransactions(e) {
            return td(this, void 0, void 0, function* () {
              return yield th(this, q, "m", el).call(this, () =>
                td(this, void 0, void 0, function* () {
                  return yield th(this, q, "m", es).call(this, e);
                }),
              );
            });
          }
        }
        ((J = new WeakMap()),
          ($ = new WeakMap()),
          (X = new WeakMap()),
          (ee = new WeakMap()),
          (et = new WeakMap()),
          (en = new WeakMap()),
          (er = new WeakMap()),
          (q = new WeakSet()),
          (ei = function (e = !1) {
            return td(this, void 0, void 0, function* () {
              if (!this.connecting && !this.connected)
                return yield th(this, q, "m", el).call(this, () =>
                  td(this, void 0, void 0, function* () {
                    if (
                      th(this, X, "f") !== eD.Ok.Installed &&
                      th(this, X, "f") !== eD.Ok.Loadable
                    )
                      throw new ez.AE();
                    tf(this, $, !0, "f");
                    try {
                      yield th(this, J, "f").features[tw].connect({ silent: e });
                    } catch (e) {
                      throw new ez.Y6(
                        (e instanceof Error && e.message) || "Unknown error",
                        e,
                      );
                    } finally {
                      tf(this, $, !1, "f");
                    }
                  }),
                );
            });
          }),
          (ea = function () {
            th(this, X, "f") !== eD.Ok.Installed &&
              this.emit("readyStateChange", tf(this, X, eD.Ok.Installed, "f"));
          }),
          (eo = function () {
            if (!th(this, J, "f").isAuthorized || !th(this, et, "f"))
              throw new ez.kW();
            return th(this, et, "f");
          }),
          (es = function (e) {
            return td(this, void 0, void 0, function* () {
              let t = th(this, q, "m", eo).call(this);
              try {
                if (e_.q in th(this, J, "f").features)
                  return th(this, J, "f")
                    .features[e_.q].signTransaction(
                      ...e.map((e) => ({
                        account: t,
                        transaction: e.serialize(),
                      })),
                    )
                    .then((e) =>
                      e.map((e) => {
                        let t = e.signedTransaction,
                          n = t[0],
                          r = eC.B2.deserializeMessageVersion(
                            t.slice(64 * n + 1, t.length),
                          );
                        return "legacy" === r
                          ? eC.ZX.from(t)
                          : eC.Kt.deserialize(t);
                      }),
                    );
                throw Error(
                  "Connected wallet does not support signing transactions",
                );
              } catch (e) {
                throw new ez.z4(null == e ? void 0 : e.message, e);
              }
            });
          }),
          (el = function (e) {
            return td(this, void 0, void 0, function* () {
              try {
                return yield e();
              } catch (e) {
                throw (this.emit("error", e), e);
              }
            });
          }));
        class ty extends tm {
          constructor(e) {
            var t;
            const n = tp(null != (t = e.chain) ? t : e.cluster);
            super(
              new to({
                appIdentity: e.appIdentity,
                authorizationCache: {
                  set: e.authorizationResultCache.set,
                  get: () =>
                    td(this, void 0, void 0, function* () {
                      return yield e.authorizationResultCache.get();
                    }),
                  clear: e.authorizationResultCache.clear,
                },
                chains: [n],
                chainSelector: {
                  select(e) {
                    return e3(this, void 0, void 0, function* () {
                      return 1 === e.length
                        ? e[0]
                        : e.includes(e5.CE)
                          ? e5.CE
                          : e[0];
                    });
                  },
                },
                onWalletNotFound: () =>
                  td(this, void 0, void 0, function* () {
                    e.onWalletNotFound(this);
                  }),
              }),
              { addressSelector: e.addressSelector, chain: n },
            );
          }
        }
        class tM extends ty {}
        function tE(e) {
          return td(this, void 0, void 0, function* () {
            return (function () {
              return e3(this, void 0, void 0, function* () {
                if ("undefined" != typeof window) {
                  let e = window.navigator.userAgent.toLowerCase(),
                    t = new ts();
                  (e.includes("wv")
                    ? t.initWithError({
                        name: "SolanaMobileWalletAdapterError",
                        code: "ERROR_BROWSER_NOT_SUPPORTED",
                        message: "",
                      })
                    : t.initWithError({
                        name: "SolanaMobileWalletAdapterError",
                        code: "ERROR_WALLET_NOT_FOUND",
                        message: "",
                      }),
                    t.open());
                }
              });
            })();
          });
        }
        let tv = function (e) {
          return (
            e0.u in e.features &&
            e4.j in e.features &&
            (eO.R in e.features || e_.q in e.features)
          );
        };
        var tI = n(61194);
        function tN(e) {
          switch (e) {
            case "processed":
            case "confirmed":
            case "finalized":
            case void 0:
              return e;
            case "recent":
              return "processed";
            case "single":
            case "singleGossip":
              return "confirmed";
            case "max":
            case "root":
              return "finalized";
            default:
              return;
          }
        }
        (new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap(),
          new WeakMap());
        let tL = (function (e) {
          if (e.length >= 255) throw TypeError("Alphabet too long");
          let t = new Uint8Array(256);
          for (let e = 0; e < t.length; e++) t[e] = 255;
          for (let n = 0; n < e.length; n++) {
            let r = e.charAt(n),
              i = r.charCodeAt(0);
            if (255 !== t[i]) throw TypeError(r + " is ambiguous");
            t[i] = n;
          }
          let n = e.length,
            r = e.charAt(0),
            i = Math.log(n) / Math.log(256),
            a = Math.log(256) / Math.log(n);
          function o(e) {
            if ("string" != typeof e) throw TypeError("Expected String");
            if (0 === e.length) return new Uint8Array();
            let a = 0,
              o = 0,
              s = 0;
            for (; e[a] === r; ) (o++, a++);
            let l = ((e.length - a) * i + 1) >>> 0,
              c = new Uint8Array(l);
            for (; a < e.length; ) {
              let r = e.charCodeAt(a);
              if (r > 255) return;
              let i = t[r];
              if (255 === i) return;
              let o = 0;
              for (let e = l - 1; (0 !== i || o < s) && -1 !== e; e--, o++)
                ((i += (n * c[e]) >>> 0),
                  (c[e] = i % 256 >>> 0),
                  (i = (i / 256) >>> 0));
              if (0 !== i) throw Error("Non-zero carry");
              ((s = o), a++);
            }
            let u = l - s;
            for (; u !== l && 0 === c[u]; ) u++;
            let d = new Uint8Array(o + (l - u)),
              h = o;
            for (; u !== l; ) d[h++] = c[u++];
            return d;
          }
          return {
            encode: function (t) {
              if (
                (t instanceof Uint8Array ||
                  (ArrayBuffer.isView(t)
                    ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                    : Array.isArray(t) && (t = Uint8Array.from(t))),
                !(t instanceof Uint8Array))
              )
                throw TypeError("Expected Uint8Array");
              if (0 === t.length) return "";
              let i = 0,
                o = 0,
                s = 0,
                l = t.length;
              for (; s !== l && 0 === t[s]; ) (s++, i++);
              let c = ((l - s) * a + 1) >>> 0,
                u = new Uint8Array(c);
              for (; s !== l; ) {
                let e = t[s],
                  r = 0;
                for (let t = c - 1; (0 !== e || r < o) && -1 !== t; t--, r++)
                  ((e += (256 * u[t]) >>> 0),
                    (u[t] = e % n >>> 0),
                    (e = (e / n) >>> 0));
                if (0 !== e) throw Error("Non-zero carry");
                ((o = r), s++);
              }
              let d = c - o;
              for (; d !== c && 0 === u[d]; ) d++;
              let h = r.repeat(i);
              for (; d < c; ++d) h += e.charAt(u[d]);
              return h;
            },
            decodeUnsafe: o,
            decode: function (e) {
              let t = o(e);
              if (t) return t;
              throw Error("Non-base" + n + " character");
            },
          };
        })("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
        var tj = function (e, t, n, r) {
            if ("a" === n && !r)
              throw TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
              throw TypeError(
                "Cannot read private member from an object whose class did not declare it",
              );
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
          },
          tb = function (e, t, n, r, i) {
            if ("m" === r) throw TypeError("Private method is not writable");
            if ("a" === r && !i)
              throw TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw TypeError(
                "Cannot write private member to an object whose class did not declare it",
              );
            return (
              "a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n),
              n
            );
          };
        class tT extends eD.Ce {
          get name() {
            return tj(this, ep, "f").name;
          }
          get url() {
            return "https://github.com/solana-labs/wallet-standard";
          }
          get icon() {
            return tj(this, ep, "f").icon;
          }
          get readyState() {
            return tj(this, em, "f");
          }
          get publicKey() {
            return tj(this, ed, "f");
          }
          get connecting() {
            return tj(this, eh, "f");
          }
          get supportedTransactionVersions() {
            return tj(this, eg, "f");
          }
          get wallet() {
            return tj(this, ep, "f");
          }
          get standard() {
            return !0;
          }
          constructor({ wallet: e }) {
            (super(),
              ec.add(this),
              eu.set(this, void 0),
              ed.set(this, void 0),
              eh.set(this, void 0),
              ef.set(this, void 0),
              ew.set(this, void 0),
              eg.set(this, void 0),
              ep.set(this, void 0),
              em.set(
                this,
                "undefined" == typeof window || "undefined" == typeof document
                  ? eD.Ok.Unsupported
                  : eD.Ok.Installed,
              ),
              eI.set(this, (e) => {
                if ("accounts" in e) {
                  let e = tj(this, ep, "f").accounts[0];
                  tj(this, eu, "f") &&
                    !tj(this, ef, "f") &&
                    e !== tj(this, eu, "f") &&
                    (e
                      ? tj(this, ec, "m", eM).call(this, e)
                      : (this.emit("error", new ez.PQ()),
                        tj(this, ec, "m", eE).call(this)));
                }
                "features" in e && tj(this, ec, "m", ev).call(this);
              }),
              tb(this, ep, e, "f"),
              tb(this, eu, null, "f"),
              tb(this, ed, null, "f"),
              tb(this, eh, !1, "f"),
              tb(this, ef, !1, "f"),
              tb(
                this,
                ew,
                tj(this, ep, "f").features[e4.j].on("change", tj(this, eI, "f")),
                "f",
              ),
              tj(this, ec, "m", ev).call(this));
          }
          destroy() {
            (tb(this, eu, null, "f"),
              tb(this, ed, null, "f"),
              tb(this, eh, !1, "f"),
              tb(this, ef, !1, "f"));
            let e = tj(this, ew, "f");
            e && (tb(this, ew, null, "f"), e());
          }
          async autoConnect() {
            return tj(this, ec, "m", ey).call(this, { silent: !0 });
          }
          async connect() {
            return tj(this, ec, "m", ey).call(this);
          }
          async disconnect() {
            if (e1.w in tj(this, ep, "f").features)
              try {
                (tb(this, ef, !0, "f"),
                  await tj(this, ep, "f").features[e1.w].disconnect());
              } catch (e) {
                this.emit("error", new ez.Y8(e?.message, e));
              } finally {
                tb(this, ef, !1, "f");
              }
            tj(this, ec, "m", eE).call(this);
          }
          async sendTransaction(e, t, n = {}) {
            try {
              var r;
              let i,
                a = tj(this, eu, "f");
              if (!a) throw new ez.kW();
              if (eO.R in tj(this, ep, "f").features)
                if (a.features.includes(eO.R)) i = eO.R;
                else if (
                  e_.q in tj(this, ep, "f").features &&
                  a.features.includes(e_.q)
                )
                  i = e_.q;
                else throw new ez.fk();
              else if (e_.q in tj(this, ep, "f").features) {
                if (!a.features.includes(e_.q)) throw new ez.fk();
                i = e_.q;
              } else throw new ez.Ez();
              let o = (r = t.rpcEndpoint).includes(
                "https://api.mainnet-beta.solana.com",
              )
                ? e5.CE
                : /\bdevnet\b/i.test(r)
                  ? e5.sE
                  : /\btestnet\b/i.test(r)
                    ? e5.re
                    : /\blocalhost\b/i.test(r) || /\b127\.0\.0\.1\b/.test(r)
                      ? e5.g4
                      : e5.CE;
              if (!a.chains.includes(o)) throw new ez.UF();
              try {
                let r,
                  { signers: s, ...l } = n;
                if (
                  ((0, tI.Y)(e)
                    ? (s?.length && e.sign(s), (r = e.serialize()))
                    : ((e = await this.prepareTransaction(e, t, l)),
                      s?.length && e.partialSign(...s),
                      (r = new Uint8Array(
                        e.serialize({
                          requireAllSignatures: !1,
                          verifySignatures: !1,
                        }),
                      ))),
                  i === eO.R)
                ) {
                  let [e] = await tj(this, ep, "f").features[
                    eO.R
                  ].signAndSendTransaction({
                    account: a,
                    chain: o,
                    transaction: r,
                    options: {
                      preflightCommitment: tN(
                        l.preflightCommitment || t.commitment,
                      ),
                      skipPreflight: l.skipPreflight,
                      maxRetries: l.maxRetries,
                      minContextSlot: l.minContextSlot,
                    },
                  });
                  return tL.encode(e.signature);
                }
                {
                  let [e] = await tj(this, ep, "f").features[
                    e_.q
                  ].signTransaction({
                    account: a,
                    chain: o,
                    transaction: r,
                    options: {
                      preflightCommitment: tN(
                        l.preflightCommitment || t.commitment,
                      ),
                      minContextSlot: l.minContextSlot,
                    },
                  });
                  return await t.sendRawTransaction(e.signedTransaction, {
                    ...l,
                    preflightCommitment: tN(
                      l.preflightCommitment || t.commitment,
                    ),
                  });
                }
              } catch (e) {
                if (e instanceof ez.m7) throw e;
                throw new ez.UF(e?.message, e);
              }
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }
        }
        ((eu = new WeakMap()),
          (ed = new WeakMap()),
          (eh = new WeakMap()),
          (ef = new WeakMap()),
          (ew = new WeakMap()),
          (eg = new WeakMap()),
          (ep = new WeakMap()),
          (em = new WeakMap()),
          (eI = new WeakMap()),
          (ec = new WeakSet()),
          (ey = async function (e) {
            try {
              if (this.connected || this.connecting) return;
              if (tj(this, em, "f") !== eD.Ok.Installed) throw new ez.AE();
              if ((tb(this, eh, !0, "f"), !tj(this, ep, "f").accounts.length))
                try {
                  await tj(this, ep, "f").features[e0.u].connect(e);
                } catch (e) {
                  throw new ez.Y6(e?.message, e);
                }
              let t = tj(this, ep, "f").accounts[0];
              if (!t) throw new ez.fk();
              tj(this, ec, "m", eM).call(this, t);
            } catch (e) {
              throw (this.emit("error", e), e);
            } finally {
              tb(this, eh, !1, "f");
            }
          }),
          (eM = function (e) {
            let t;
            try {
              t = new eC.J3(e.address);
            } catch (e) {
              throw new ez.Kd(e?.message, e);
            }
            (tb(this, eu, e, "f"),
              tb(this, ed, t, "f"),
              tj(this, ec, "m", ev).call(this),
              this.emit("connect", t));
          }),
          (eE = function () {
            (tb(this, eu, null, "f"),
              tb(this, ed, null, "f"),
              tj(this, ec, "m", ev).call(this),
              this.emit("disconnect"));
          }),
          (ev = function () {
            let e =
              eO.R in tj(this, ep, "f").features
                ? tj(this, ep, "f").features[eO.R].supportedTransactionVersions
                : tj(this, ep, "f").features[e_.q].supportedTransactionVersions;
            (tb(
              this,
              eg,
              !(function (e, t) {
                if (e === t) return !0;
                let n = e.length;
                if (n !== t.length) return !1;
                for (let r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
                return !0;
              })(e, ["legacy"])
                ? new Set(e)
                : null,
              "f",
            ),
              e_.q in tj(this, ep, "f").features &&
              tj(this, eu, "f")?.features.includes(e_.q)
                ? ((this.signTransaction = tj(this, ec, "m", eN)),
                  (this.signAllTransactions = tj(this, ec, "m", eL)))
                : (delete this.signTransaction, delete this.signAllTransactions),
              ek.F in tj(this, ep, "f").features &&
              tj(this, eu, "f")?.features.includes(ek.F)
                ? (this.signMessage = tj(this, ec, "m", ej))
                : delete this.signMessage,
              ex in tj(this, ep, "f").features
                ? (this.signIn = tj(this, ec, "m", eb))
                : delete this.signIn);
          }),
          (eN = async function (e) {
            try {
              let t = tj(this, eu, "f");
              if (!t) throw new ez.kW();
              if (!(e_.q in tj(this, ep, "f").features)) throw new ez.Ez();
              if (!t.features.includes(e_.q)) throw new ez.fk();
              try {
                let n = (
                  await tj(this, ep, "f").features[e_.q].signTransaction({
                    account: t,
                    transaction: (0, tI.Y)(e)
                      ? e.serialize()
                      : new Uint8Array(
                          e.serialize({
                            requireAllSignatures: !1,
                            verifySignatures: !1,
                          }),
                        ),
                  })
                )[0].signedTransaction;
                return (0, tI.Y)(e) ? eC.Kt.deserialize(n) : eC.ZX.from(n);
              } catch (e) {
                if (e instanceof ez.m7) throw e;
                throw new ez.z4(e?.message, e);
              }
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }),
          (eL = async function (e) {
            try {
              let t = tj(this, eu, "f");
              if (!t) throw new ez.kW();
              if (!(e_.q in tj(this, ep, "f").features)) throw new ez.Ez();
              if (!t.features.includes(e_.q)) throw new ez.fk();
              try {
                let n = await tj(this, ep, "f").features[e_.q].signTransaction(
                  ...e.map((e) => ({
                    account: t,
                    transaction: (0, tI.Y)(e)
                      ? e.serialize()
                      : new Uint8Array(
                          e.serialize({
                            requireAllSignatures: !1,
                            verifySignatures: !1,
                          }),
                        ),
                  })),
                );
                return e.map((e, t) => {
                  let r = n[t].signedTransaction;
                  return (0, tI.Y)(e) ? eC.Kt.deserialize(r) : eC.ZX.from(r);
                });
              } catch (e) {
                throw new ez.z4(e?.message, e);
              }
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }),
          (ej = async function (e) {
            try {
              let t = tj(this, eu, "f");
              if (!t) throw new ez.kW();
              if (!(ek.F in tj(this, ep, "f").features)) throw new ez.Ez();
              if (!t.features.includes(ek.F)) throw new ez.fk();
              try {
                return (
                  await tj(this, ep, "f").features[ek.F].signMessage({
                    account: t,
                    message: e,
                  })
                )[0].signature;
              } catch (e) {
                throw new ez.K3(e?.message, e);
              }
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }),
          (eb = async function (e = {}) {
            try {
              let t;
              if (!(ex in tj(this, ep, "f").features)) throw new ez.Ez();
              try {
                [t] = await tj(this, ep, "f").features[ex].signIn(e);
              } catch (e) {
                throw new ez.o7(e?.message, e);
              }
              if (!t) throw new ez.o7();
              return (tj(this, ec, "m", eM).call(this, t.account), t);
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }));
        var tA = function (e, t, n, r) {
            if ("a" === n && !r)
              throw TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
              throw TypeError(
                "Cannot read private member from an object whose class did not declare it",
              );
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
          },
          tS = function (e, t, n, r, i) {
            if ("m" === r) throw TypeError("Private method is not writable");
            if ("a" === r && !i)
              throw TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw TypeError(
                "Cannot write private member to an object whose class did not declare it",
              );
            return (
              "a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n),
              n
            );
          };
        let tD = new Set(),
          tz = {};
        function tC(...e) {
          return (e = e.filter((e) => !tD.has(e))).length
            ? (e.forEach((e) => {
                ((i = void 0), tD.add(e));
              }),
              tz.register?.forEach((t) => tO(() => t(...e))),
              function () {
                (e.forEach((e) => {
                  ((i = void 0), tD.delete(e));
                }),
                  tz.unregister?.forEach((t) => tO(() => t(...e))));
              })
            : () => {};
        }
        function tx() {
          return (i || (i = [...tD]), i);
        }
        function tk(e, t) {
          return (
            tz[e]?.push(t) || (tz[e] = [t]),
            function () {
              tz[e] = tz[e]?.filter((e) => t !== e);
            }
          );
        }
        function tO(e) {
          try {
            e();
          } catch (e) {
            console.error(e);
          }
        }
        class t_ extends Event {
          get detail() {
            return tA(this, eT, "f");
          }
          get type() {
            return "wallet-standard:app-ready";
          }
          constructor(e) {
            (super("wallet-standard:app-ready", {
              bubbles: !1,
              cancelable: !1,
              composed: !1,
            }),
              eT.set(this, void 0),
              tS(this, eT, e, "f"));
          }
          preventDefault() {
            throw Error("preventDefault cannot be called");
          }
          stopImmediatePropagation() {
            throw Error("stopImmediatePropagation cannot be called");
          }
          stopPropagation() {
            throw Error("stopPropagation cannot be called");
          }
        }
        eT = new WeakMap();
        var tU = n(12115);
        function tW(e) {
          let t = (0, tU.useRef)(void 0);
          return (
            void 0 === t.current && (t.current = { value: e() }),
            t.current.value
          );
        }
        function tP(e) {
          return e.filter(tv).map((e) => new tT({ wallet: e }));
        }
        (((s = eA || (eA = {}))[(s.DESKTOP_WEB = 0)] = "DESKTOP_WEB"),
          (s[(s.MOBILE_WEB = 1)] = "MOBILE_WEB"));
        var tR = n(56843);
        class tB extends ez.m7 {
          constructor() {
            (super(...arguments), (this.name = "WalletNotSelectedError"));
          }
        }
        var tY = n(85146);
        function tQ({
          children: e,
          wallets: t,
          adapter: n,
          isUnloadingRef: r,
          onAutoConnectRequest: i,
          onConnectError: a,
          onError: o,
          onSelectWallet: s,
        }) {
          let l = (0, tU.useRef)(!1),
            [c, u] = (0, tU.useState)(!1),
            d = (0, tU.useRef)(!1),
            [h, f] = (0, tU.useState)(!1),
            [w, g] = (0, tU.useState)(() => n?.publicKey ?? null),
            [p, m] = (0, tU.useState)(() => n?.connected ?? !1),
            y = (0, tU.useRef)(o);
          (0, tU.useEffect)(
            () => (
              (y.current = o),
              () => {
                y.current = void 0;
              }
            ),
            [o],
          );
          let M = (0, tU.useRef)(
              (e, t) => (
                !r.current &&
                  (y.current
                    ? y.current(e, t)
                    : (console.error(e, t),
                      e instanceof ez.AE &&
                        "undefined" != typeof window &&
                        t &&
                        window.open(t.url, "_blank"))),
                e
              ),
            ),
            [E, v] = (0, tU.useState)(() =>
              t
                .map((e) => ({ adapter: e, readyState: e.readyState }))
                .filter(({ readyState: e }) => e !== eD.Ok.Unsupported),
            );
          (0, tU.useEffect)(() => {
            function e(e) {
              v((t) => {
                let n = t.findIndex(({ adapter: e }) => e === this);
                if (-1 === n) return t;
                let { adapter: r } = t[n];
                return [
                  ...t.slice(0, n),
                  { adapter: r, readyState: e },
                  ...t.slice(n + 1),
                ].filter(({ readyState: e }) => e !== eD.Ok.Unsupported);
              });
            }
            return (
              v((e) =>
                t
                  .map((t, n) => {
                    let r = e[n];
                    return r && r.adapter === t && r.readyState === t.readyState
                      ? r
                      : { adapter: t, readyState: t.readyState };
                  })
                  .filter(({ readyState: e }) => e !== eD.Ok.Unsupported),
              ),
              t.forEach((t) => t.on("readyStateChange", e, t)),
              () => {
                t.forEach((t) => t.off("readyStateChange", e, t));
              }
            );
          }, [n, t]);
          let I = (0, tU.useMemo)(
            () => E.find((e) => e.adapter === n) ?? null,
            [n, E],
          );
          (0, tU.useEffect)(() => {
            if (!n) return;
            let e = (e) => {
                (g(e), (l.current = !1), u(!1), m(!0), (d.current = !1), f(!1));
              },
              t = () => {
                r.current ||
                  (g(null),
                  (l.current = !1),
                  u(!1),
                  m(!1),
                  (d.current = !1),
                  f(!1));
              },
              i = (e) => {
                M.current(e, n);
              };
            return (
              n.on("connect", e),
              n.on("disconnect", t),
              n.on("error", i),
              () => {
                (n.off("connect", e),
                  n.off("disconnect", t),
                  n.off("error", i),
                  t());
              }
            );
          }, [n, r]);
          let N = (0, tU.useRef)(!1);
          ((0, tU.useEffect)(
            () => () => {
              N.current = !1;
            },
            [n],
          ),
            (0, tU.useEffect)(() => {
              N.current ||
                l.current ||
                p ||
                !i ||
                (I?.readyState !== eD.Ok.Installed &&
                  I?.readyState !== eD.Ok.Loadable) ||
                ((l.current = !0),
                u(!0),
                (N.current = !0),
                (async function () {
                  try {
                    await i();
                  } catch {
                    a();
                  } finally {
                    (u(!1), (l.current = !1));
                  }
                })());
            }, [p, i, a, I]));
          let L = (0, tU.useCallback)(
              async (e, t, r) => {
                if (!n) throw M.current(new tB());
                if (!p) throw M.current(new ez.kW(), n);
                return await n.sendTransaction(e, t, r);
              },
              [n, p],
            ),
            j = (0, tU.useMemo)(
              () =>
                n && "signTransaction" in n
                  ? async (e) => {
                      if (!p) throw M.current(new ez.kW(), n);
                      return await n.signTransaction(e);
                    }
                  : void 0,
              [n, p],
            ),
            b = (0, tU.useMemo)(
              () =>
                n && "signAllTransactions" in n
                  ? async (e) => {
                      if (!p) throw M.current(new ez.kW(), n);
                      return await n.signAllTransactions(e);
                    }
                  : void 0,
              [n, p],
            ),
            T = (0, tU.useMemo)(
              () =>
                n && "signMessage" in n
                  ? async (e) => {
                      if (!p) throw M.current(new ez.kW(), n);
                      return await n.signMessage(e);
                    }
                  : void 0,
              [n, p],
            ),
            A = (0, tU.useMemo)(
              () =>
                n && "signIn" in n ? async (e) => await n.signIn(e) : void 0,
              [n],
            ),
            S = (0, tU.useCallback)(async () => {
              if (l.current || d.current || I?.adapter.connected) return;
              if (!I) throw M.current(new tB());
              let { adapter: e, readyState: t } = I;
              if (t !== eD.Ok.Installed && t !== eD.Ok.Loadable)
                throw M.current(new ez.AE(), e);
              ((l.current = !0), u(!0));
              try {
                await e.connect();
              } catch (e) {
                throw (a(), e);
              } finally {
                (u(!1), (l.current = !1));
              }
            }, [a, I]),
            D = (0, tU.useCallback)(async () => {
              if (!d.current && n) {
                ((d.current = !0), f(!0));
                try {
                  await n.disconnect();
                } finally {
                  (f(!1), (d.current = !1));
                }
              }
            }, [n]);
          return tU.createElement(
            tY.b.Provider,
            {
              value: {
                autoConnect: !!i,
                wallets: E,
                wallet: I,
                publicKey: w,
                connected: p,
                connecting: c,
                disconnecting: h,
                select: s,
                connect: S,
                disconnect: D,
                sendTransaction: L,
                signTransaction: j,
                signAllTransactions: b,
                signMessage: T,
                signIn: A,
              },
            },
            e,
          );
        }
        function tZ(e) {
          return (
            (function ({ adapters: e, userAgentString: t }) {
              return e.some(
                (e) => e.name !== ti && e.readyState === eD.Ok.Installed,
              )
                ? eA.DESKTOP_WEB
                : t &&
                    /android/i.test(t) &&
                    !/(WebView|Version\/.+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+)|; wv\).+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+))/i.test(
                      t,
                    )
                  ? eA.MOBILE_WEB
                  : eA.DESKTOP_WEB;
            })({
              adapters: e,
              userAgentString:
                (void 0 === a && (a = globalThis.navigator?.userAgent ?? null),
                a),
            }) === eA.MOBILE_WEB
          );
        }
        function tK({
          children: e,
          wallets: t,
          autoConnect: n,
          localStorageKey: r = "walletName",
          onError: i,
        }) {
          let a,
            s,
            l,
            { connection: c } = (0, tR.w)(),
            u = (function (e) {
              var t;
              let n,
                r = tW(() => new Set()),
                { get: i, on: a } = tW(() =>
                  (function () {
                    if (
                      o ||
                      ((o = (function () {
                        if (
                          o ||
                          ((o = Object.freeze({ register: tC, get: tx, on: tk })),
                          "undefined" == typeof window)
                        )
                          return o;
                        let e = Object.freeze({ register: tC });
                        try {
                          window.addEventListener(
                            "wallet-standard:register-wallet",
                            ({ detail: t }) => t(e),
                          );
                        } catch (e) {
                          console.error(
                            "wallet-standard:register-wallet event listener could not be added\n",
                            e,
                          );
                        }
                        try {
                          window.dispatchEvent(new t_(e));
                        } catch (e) {
                          console.error(
                            "wallet-standard:app-ready event could not be dispatched\n",
                            e,
                          );
                        }
                        return o;
                      })()),
                      "undefined" == typeof window)
                    )
                      return o;
                    let e = window.navigator.wallets || [];
                    if (!Array.isArray(e))
                      return (
                        console.error("window.navigator.wallets is not an array"),
                        o
                      );
                    let { register: t } = o,
                      n = (...e) =>
                        e.forEach((e) => tO(() => e({ register: t })));
                    try {
                      Object.defineProperty(window.navigator, "wallets", {
                        value: Object.freeze({ push: n }),
                      });
                    } catch (e) {
                      return (
                        console.error(
                          "window.navigator.wallets could not be set",
                        ),
                        o
                      );
                    }
                    return (n(...e), o);
                  })(),
                ),
                [s, l] = (0, tU.useState)(() => tP(i()));
              (0, tU.useEffect)(() => {
                let e = [
                  a("register", (...e) => l((t) => [...t, ...tP(e)])),
                  a("unregister", (...e) =>
                    l((t) => t.filter((t) => e.some((e) => e === t.wallet))),
                  ),
                ];
                return () => e.forEach((e) => e());
              }, [a]);
              let c =
                ((t = s),
                (n = (0, tU.useRef)(void 0)),
                (0, tU.useEffect)(() => {
                  n.current = t;
                }),
                n.current);
              return (
                (0, tU.useEffect)(() => {
                  if (!c) return;
                  let e = new Set(s);
                  new Set(c.filter((t) => !e.has(t))).forEach((e) => e.destroy());
                }, [c, s]),
                (0, tU.useEffect)(() => () => s.forEach((e) => e.destroy()), []),
                (0, tU.useMemo)(
                  () => [
                    ...s,
                    ...e.filter(
                      ({ name: e }) =>
                        !s.some((t) => t.name === e) ||
                        (r.has(e) ||
                          (r.add(e),
                          console.warn(
                            `${e} was registered as a Standard Wallet. The Wallet Adapter for ${e} can be removed from your app.`,
                          )),
                        !1),
                    ),
                  ],
                  [s, e, r],
                )
              );
            })(t),
            d = (0, tU.useMemo)(() => {
              var e;
              if (!tZ(u)) return null;
              let t = u.find((e) => e.name === ti);
              return t
                ? t
                : new tM({
                    addressSelector: {
                      select(e) {
                        return td(this, void 0, void 0, function* () {
                          return e[0];
                        });
                      },
                    },
                    appIdentity: {
                      uri: (function () {
                        let e = globalThis.location;
                        if (e) return `${e.protocol}//${e.host}`;
                      })(),
                    },
                    authorizationResultCache: (function () {
                      let e;
                      try {
                        e = window.localStorage;
                      } catch (e) {}
                      return {
                        clear() {
                          return e3(this, void 0, void 0, function* () {
                            if (e)
                              try {
                                e.removeItem(tu);
                              } catch (e) {}
                          });
                        },
                        get() {
                          return e3(this, void 0, void 0, function* () {
                            if (e)
                              try {
                                let t = JSON.parse(e.getItem(tu));
                                if (!t || !t.accounts) return t || void 0;
                                {
                                  let e = t.accounts.map((e) =>
                                    Object.assign(Object.assign({}, e), {
                                      publicKey:
                                        "publicKey" in e
                                          ? new Uint8Array(
                                              Object.values(e.publicKey),
                                            )
                                          : e2.decode(e.address),
                                    }),
                                  );
                                  return Object.assign(Object.assign({}, t), {
                                    accounts: e,
                                  });
                                }
                              } catch (e) {}
                          });
                        },
                        set(t) {
                          return e3(this, void 0, void 0, function* () {
                            if (e)
                              try {
                                e.setItem(tu, JSON.stringify(t));
                              } catch (e) {}
                          });
                        },
                      };
                    })(),
                    cluster: (e = c?.rpcEndpoint)
                      ? /devnet/i.test(e)
                        ? "devnet"
                        : /testnet/i.test(e)
                          ? "testnet"
                          : "mainnet-beta"
                      : "mainnet-beta",
                    onWalletNotFound: tE,
                  });
            }, [u, c?.rpcEndpoint]),
            h = (0, tU.useMemo)(
              () => (null == d || -1 !== u.indexOf(d) ? u : [d, ...u]),
              [u, d],
            ),
            [f, w] =
              ((s = (a = (0, tU.useState)(() => {
                try {
                  let e = localStorage.getItem(r);
                  if (e) return JSON.parse(e);
                } catch (e) {
                  "undefined" != typeof window && console.error(e);
                }
                return null;
              }))[0]),
              (l = (0, tU.useRef)(!0)),
              (0, tU.useEffect)(() => {
                if (l.current) {
                  l.current = !1;
                  return;
                }
                try {
                  null === s
                    ? localStorage.removeItem(r)
                    : localStorage.setItem(r, JSON.stringify(s));
                } catch (e) {
                  "undefined" != typeof window && console.error(e);
                }
              }, [s, r]),
              a),
            g = (0, tU.useMemo)(
              () => h.find((e) => e.name === f) ?? null,
              [h, f],
            ),
            p = (0, tU.useCallback)(
              (e) => {
                f !== e && (g && g.name !== ti && g.disconnect(), w(e));
              },
              [g, w, f],
            );
          (0, tU.useEffect)(() => {
            if (g)
              return (
                g.on("disconnect", e),
                () => {
                  g.off("disconnect", e);
                }
              );
            function e() {
              M.current || w(null);
            }
          }, [g, u, w, f]);
          let m = (0, tU.useRef)(!1),
            y = (0, tU.useMemo)(() => {
              if (n && g)
                return async () => {
                  (!0 === n || (await n(g))) &&
                    (m.current ? await g.connect() : await g.autoConnect());
                };
            }, [n, g]),
            M = (0, tU.useRef)(!1);
          (0, tU.useEffect)(() => {
            if (f === ti && tZ(u)) {
              M.current = !1;
              return;
            }
            function e() {
              M.current = !0;
            }
            return (
              window.addEventListener("beforeunload", e),
              () => {
                window.removeEventListener("beforeunload", e);
              }
            );
          }, [u, f]);
          let E = (0, tU.useCallback)(() => {
              g && p(null);
            }, [g, p]),
            v = (0, tU.useCallback)(
              (e) => {
                ((m.current = !0), p(e));
              },
              [p],
            );
          return tU.createElement(
            tQ,
            {
              wallets: h,
              adapter: g,
              isUnloadingRef: M,
              onAutoConnectRequest: y,
              onConnectError: E,
              onError: i,
              onSelectWallet: v,
            },
            e,
          );
        }
      },
      65483: (e, t, n) => {
        "use strict";
        n.d(t, { w: () => r });
        let r = "standard:disconnect";
      },
      66513: (e, t) => {
        let n,
          r = [
            0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581,
            655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706,
            1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196,
            3362, 3532, 3706,
          ];
        ((t.getSymbolSize = function (e) {
          if (!e) throw Error('"version" cannot be null or undefined');
          if (e < 1 || e > 40)
            throw Error('"version" should be in range from 1 to 40');
          return 4 * e + 17;
        }),
          (t.getSymbolTotalCodewords = function (e) {
            return r[e];
          }),
          (t.getBCHDigit = function (e) {
            let t = 0;
            for (; 0 !== e; ) (t++, (e >>>= 1));
            return t;
          }),
          (t.setToSJISFunction = function (e) {
            if ("function" != typeof e)
              throw Error('"toSJISFunc" is not a valid function.');
            n = e;
          }),
          (t.isKanjiModeEnabled = function () {
            return void 0 !== n;
          }),
          (t.toSJIS = function (e) {
            return n(e);
          }));
      },
      68061: (e, t, n) => {
        "use strict";
        n.d(t, { c: () => l });
        var r = n(95576),
          i = n(48153),
          a = n(53585),
          o = n(61194),
          s = n(73596);
        class l extends r.DE {
          constructor(e = {}) {
            (super(),
              (this.name = "Phantom"),
              (this.url = "https://phantom.app"),
              (this.icon =
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiB2aWV3Qm94PSIwIDAgMTA4IDEwOCIgZmlsbD0ibm9uZSI+CjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiByeD0iMjYiIGZpbGw9IiNBQjlGRjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ni41MjY3IDY5LjkyMjlDNDIuMDA1NCA3Ni44NTA5IDM0LjQyOTIgODUuNjE4MiAyNC4zNDggODUuNjE4MkMxOS41ODI0IDg1LjYxODIgMTUgODMuNjU2MyAxNSA3NS4xMzQyQzE1IDUzLjQzMDUgNDQuNjMyNiAxOS44MzI3IDcyLjEyNjggMTkuODMyN0M4Ny43NjggMTkuODMyNyA5NCAzMC42ODQ2IDk0IDQzLjAwNzlDOTQgNTguODI1OCA4My43MzU1IDc2LjkxMjIgNzMuNTMyMSA3Ni45MTIyQzcwLjI5MzkgNzYuOTEyMiA2OC43MDUzIDc1LjEzNDIgNjguNzA1MyA3Mi4zMTRDNjguNzA1MyA3MS41NzgzIDY4LjgyNzUgNzAuNzgxMiA2OS4wNzE5IDY5LjkyMjlDNjUuNTg5MyA3NS44Njk5IDU4Ljg2ODUgODEuMzg3OCA1Mi41NzU0IDgxLjM4NzhDNDcuOTkzIDgxLjM4NzggNDUuNjcxMyA3OC41MDYzIDQ1LjY3MTMgNzQuNDU5OEM0NS42NzEzIDcyLjk4ODQgNDUuOTc2OCA3MS40NTU2IDQ2LjUyNjcgNjkuOTIyOVpNODMuNjc2MSA0Mi41Nzk0QzgzLjY3NjEgNDYuMTcwNCA4MS41NTc1IDQ3Ljk2NTggNzkuMTg3NSA0Ny45NjU4Qzc2Ljc4MTYgNDcuOTY1OCA3NC42OTg5IDQ2LjE3MDQgNzQuNjk4OSA0Mi41Nzk0Qzc0LjY5ODkgMzguOTg4NSA3Ni43ODE2IDM3LjE5MzEgNzkuMTg3NSAzNy4xOTMxQzgxLjU1NzUgMzcuMTkzMSA4My42NzYxIDM4Ljk4ODUgODMuNjc2MSA0Mi41Nzk0Wk03MC4yMTAzIDQyLjU3OTVDNzAuMjEwMyA0Ni4xNzA0IDY4LjA5MTYgNDcuOTY1OCA2NS43MjE2IDQ3Ljk2NThDNjMuMzE1NyA0Ny45NjU4IDYxLjIzMyA0Ni4xNzA0IDYxLjIzMyA0Mi41Nzk1QzYxLjIzMyAzOC45ODg1IDYzLjMxNTcgMzcuMTkzMSA2NS43MjE2IDM3LjE5MzFDNjguMDkxNiAzNy4xOTMxIDcwLjIxMDMgMzguOTg4NSA3MC4yMTAzIDQyLjU3OTVaIiBmaWxsPSIjRkZGREY4Ii8+Cjwvc3ZnPg=="),
              (this.supportedTransactionVersions = new Set(["legacy", 0])),
              (this._readyState =
                "undefined" == typeof window || "undefined" == typeof document
                  ? i.Ok.Unsupported
                  : i.Ok.NotDetected),
              (this._disconnected = () => {
                let e = this._wallet;
                e &&
                  (e.off("disconnect", this._disconnected),
                  e.off("accountChanged", this._accountChanged),
                  (this._wallet = null),
                  (this._publicKey = null),
                  this.emit("error", new a.PQ()),
                  this.emit("disconnect"));
              }),
              (this._accountChanged = (e) => {
                let t = this._publicKey;
                if (t) {
                  try {
                    e = new s.J3(e.toBytes());
                  } catch (e) {
                    this.emit("error", new a.Kd(e?.message, e));
                    return;
                  }
                  t.equals(e) || ((this._publicKey = e), this.emit("connect", e));
                }
              }),
              (this._connecting = !1),
              (this._wallet = null),
              (this._publicKey = null),
              this._readyState !== i.Ok.Unsupported &&
                ((0, i.Br)()
                  ? ((this._readyState = i.Ok.Loadable),
                    this.emit("readyStateChange", this._readyState))
                  : (0, i.qG)(
                      () =>
                        !!(
                          window.phantom?.solana?.isPhantom ||
                          window.solana?.isPhantom
                        ) &&
                        ((this._readyState = i.Ok.Installed),
                        this.emit("readyStateChange", this._readyState),
                        !0),
                    )));
          }
          get publicKey() {
            return this._publicKey;
          }
          get connecting() {
            return this._connecting;
          }
          get readyState() {
            return this._readyState;
          }
          async autoConnect() {
            this.readyState === i.Ok.Installed && (await this.connect());
          }
          async connect() {
            try {
              let e;
              if (this.connected || this.connecting) return;
              if (this.readyState === i.Ok.Loadable) {
                let e = encodeURIComponent(window.location.href),
                  t = encodeURIComponent(window.location.origin);
                window.location.href = `https://phantom.app/ul/browse/${e}?ref=${t}`;
                return;
              }
              if (this.readyState !== i.Ok.Installed) throw new a.AE();
              this._connecting = !0;
              let t = window.phantom?.solana || window.solana;
              if (!t.isConnected)
                try {
                  await t.connect();
                } catch (e) {
                  throw new a.Y6(e?.message, e);
                }
              if (!t.publicKey) throw new a.fk();
              try {
                e = new s.J3(t.publicKey.toBytes());
              } catch (e) {
                throw new a.Kd(e?.message, e);
              }
              (t.on("disconnect", this._disconnected),
                t.on("accountChanged", this._accountChanged),
                (this._wallet = t),
                (this._publicKey = e),
                this.emit("connect", e));
            } catch (e) {
              throw (this.emit("error", e), e);
            } finally {
              this._connecting = !1;
            }
          }
          async disconnect() {
            let e = this._wallet;
            if (e) {
              (e.off("disconnect", this._disconnected),
                e.off("accountChanged", this._accountChanged),
                (this._wallet = null),
                (this._publicKey = null));
              try {
                await e.disconnect();
              } catch (e) {
                this.emit("error", new a.Y8(e?.message, e));
              }
            }
            this.emit("disconnect");
          }
          async sendTransaction(e, t, n = {}) {
            try {
              let r = this._wallet;
              if (!r) throw new a.kW();
              try {
                let { signers: i, ...a } = n;
                ((0, o.Y)(e)
                  ? i?.length && e.sign(i)
                  : ((e = await this.prepareTransaction(e, t, a)),
                    i?.length && e.partialSign(...i)),
                  (a.preflightCommitment =
                    a.preflightCommitment || t.commitment));
                let { signature: s } = await r.signAndSendTransaction(e, a);
                return s;
              } catch (e) {
                if (e instanceof a.m7) throw e;
                throw new a.UF(e?.message, e);
              }
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }
          async signTransaction(e) {
            try {
              let t = this._wallet;
              if (!t) throw new a.kW();
              try {
                return (await t.signTransaction(e)) || e;
              } catch (e) {
                throw new a.z4(e?.message, e);
              }
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }
          async signAllTransactions(e) {
            try {
              let t = this._wallet;
              if (!t) throw new a.kW();
              try {
                return (await t.signAllTransactions(e)) || e;
              } catch (e) {
                throw new a.z4(e?.message, e);
              }
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }
          async signMessage(e) {
            try {
              let t = this._wallet;
              if (!t) throw new a.kW();
              try {
                let { signature: n } = await t.signMessage(e);
                return n;
              } catch (e) {
                throw new a.K3(e?.message, e);
              }
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }
        }
      },
      70627: (e, t, n) => {
        "use strict";
        n.d(t, { I: () => p });
        var r = n(12115);
        let i = {
          setVisible(e) {
            console.error(a("call", "setVisible"));
          },
          visible: !1,
        };
        function a(e, t) {
          return `You have tried to  ${e} "${t}" on a WalletModalContext without providing one. Make sure to render a WalletModalProvider as an ancestor of the component that uses WalletModalContext`;
        }
        Object.defineProperty(i, "visible", {
          get: () => (console.error(a("read", "visible")), !1),
        });
        let o = (0, r.createContext)(i);
        var s = n(48153),
          l = n(85146),
          c = n(47650);
        let u = ({ id: e, children: t, expanded: n = !1 }) => {
            let i = (0, r.useRef)(null),
              a = (0, r.useRef)(!0);
            return (
              (0, r.useLayoutEffect)(() => {
                if (n) {
                  let e;
                  (e = i.current) &&
                    requestAnimationFrame(() => {
                      e.style.height = e.scrollHeight + "px";
                    });
                } else {
                  let e;
                  (e = i.current) &&
                    requestAnimationFrame(() => {
                      ((e.style.height = e.offsetHeight + "px"),
                        (e.style.overflow = "hidden"),
                        requestAnimationFrame(() => {
                          e.style.height = "0";
                        }));
                    });
                }
              }, [n]),
              (0, r.useLayoutEffect)(() => {
                let e = i.current;
                if (e)
                  return (
                    a.current && (t(), (a.current = !1)),
                    e.addEventListener("transitionend", r),
                    () => e.removeEventListener("transitionend", r)
                  );
                function t() {
                  e &&
                    ((e.style.overflow = n ? "initial" : "hidden"),
                    n && (e.style.height = "auto"));
                }
                function r(n) {
                  e && n.target === e && "height" === n.propertyName && t();
                }
              }, [n]),
              r.createElement(
                "div",
                {
                  className: "wallet-adapter-collapse",
                  id: e,
                  ref: i,
                  role: "region",
                  style: {
                    height: 0,
                    transition: a.current ? void 0 : "height 250ms ease-out",
                  },
                },
                t,
              )
            );
          },
          d = (e) =>
            r.createElement(
              "button",
              {
                className: `wallet-adapter-button ${e.className || ""}`,
                disabled: e.disabled,
                style: e.style,
                onClick: e.onClick,
                tabIndex: e.tabIndex || 0,
                type: "button",
              },
              e.startIcon &&
                r.createElement(
                  "i",
                  { className: "wallet-adapter-button-start-icon" },
                  e.startIcon,
                ),
              e.children,
              e.endIcon &&
                r.createElement(
                  "i",
                  { className: "wallet-adapter-button-end-icon" },
                  e.endIcon,
                ),
            ),
          h = ({ wallet: e, ...t }) =>
            e &&
            r.createElement("img", {
              src: e.adapter.icon,
              alt: `${e.adapter.name} icon`,
              ...t,
            }),
          f = ({ handleClick: e, tabIndex: t, wallet: n }) =>
            r.createElement(
              "li",
              null,
              r.createElement(
                d,
                {
                  onClick: e,
                  startIcon: r.createElement(h, { wallet: n }),
                  tabIndex: t,
                },
                n.adapter.name,
                n.readyState === s.Ok.Installed &&
                  r.createElement("span", null, "Detected"),
              ),
            ),
          w = () =>
            r.createElement(
              "svg",
              {
                width: "97",
                height: "96",
                viewBox: "0 0 97 96",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              r.createElement("circle", {
                cx: "48.5",
                cy: "48",
                r: "48",
                fill: "url(#paint0_linear_880_5115)",
                fillOpacity: "0.1",
              }),
              r.createElement("circle", {
                cx: "48.5",
                cy: "48",
                r: "47",
                stroke: "url(#paint1_linear_880_5115)",
                strokeOpacity: "0.4",
                strokeWidth: "2",
              }),
              r.createElement(
                "g",
                { clipPath: "url(#clip0_880_5115)" },
                r.createElement("path", {
                  d: "M65.5769 28.1523H31.4231C27.6057 28.1523 24.5 31.258 24.5 35.0754V60.9215C24.5 64.7389 27.6057 67.8446 31.4231 67.8446H65.5769C69.3943 67.8446 72.5 64.7389 72.5 60.9215V35.0754C72.5 31.258 69.3943 28.1523 65.5769 28.1523ZM69.7308 52.1523H59.5769C57.2865 52.1523 55.4231 50.289 55.4231 47.9985C55.4231 45.708 57.2864 43.8446 59.5769 43.8446H69.7308V52.1523ZM69.7308 41.0754H59.5769C55.7595 41.0754 52.6539 44.1811 52.6539 47.9985C52.6539 51.8159 55.7595 54.9215 59.5769 54.9215H69.7308V60.9215C69.7308 63.2119 67.8674 65.0754 65.5769 65.0754H31.4231C29.1327 65.0754 27.2692 63.212 27.2692 60.9215V35.0754C27.2692 32.785 29.1326 30.9215 31.4231 30.9215H65.5769C67.8673 30.9215 69.7308 32.7849 69.7308 35.0754V41.0754Z",
                  fill: "url(#paint2_linear_880_5115)",
                }),
                r.createElement("path", {
                  d: "M61.4231 46.6172H59.577C58.8123 46.6172 58.1924 47.2371 58.1924 48.0018C58.1924 48.7665 58.8123 49.3863 59.577 49.3863H61.4231C62.1878 49.3863 62.8077 48.7664 62.8077 48.0018C62.8077 47.2371 62.1878 46.6172 61.4231 46.6172Z",
                  fill: "url(#paint3_linear_880_5115)",
                }),
              ),
              r.createElement(
                "defs",
                null,
                r.createElement(
                  "linearGradient",
                  {
                    id: "paint0_linear_880_5115",
                    x1: "3.41664",
                    y1: "98.0933",
                    x2: "103.05",
                    y2: "8.42498",
                    gradientUnits: "userSpaceOnUse",
                  },
                  r.createElement("stop", { stopColor: "#9945FF" }),
                  r.createElement("stop", {
                    offset: "0.14",
                    stopColor: "#8A53F4",
                  }),
                  r.createElement("stop", {
                    offset: "0.42",
                    stopColor: "#6377D6",
                  }),
                  r.createElement("stop", {
                    offset: "0.79",
                    stopColor: "#24B0A7",
                  }),
                  r.createElement("stop", {
                    offset: "0.99",
                    stopColor: "#00D18C",
                  }),
                  r.createElement("stop", { offset: "1", stopColor: "#00D18C" }),
                ),
                r.createElement(
                  "linearGradient",
                  {
                    id: "paint1_linear_880_5115",
                    x1: "3.41664",
                    y1: "98.0933",
                    x2: "103.05",
                    y2: "8.42498",
                    gradientUnits: "userSpaceOnUse",
                  },
                  r.createElement("stop", { stopColor: "#9945FF" }),
                  r.createElement("stop", {
                    offset: "0.14",
                    stopColor: "#8A53F4",
                  }),
                  r.createElement("stop", {
                    offset: "0.42",
                    stopColor: "#6377D6",
                  }),
                  r.createElement("stop", {
                    offset: "0.79",
                    stopColor: "#24B0A7",
                  }),
                  r.createElement("stop", {
                    offset: "0.99",
                    stopColor: "#00D18C",
                  }),
                  r.createElement("stop", { offset: "1", stopColor: "#00D18C" }),
                ),
                r.createElement(
                  "linearGradient",
                  {
                    id: "paint2_linear_880_5115",
                    x1: "25.9583",
                    y1: "68.7101",
                    x2: "67.2337",
                    y2: "23.7879",
                    gradientUnits: "userSpaceOnUse",
                  },
                  r.createElement("stop", { stopColor: "#9945FF" }),
                  r.createElement("stop", {
                    offset: "0.14",
                    stopColor: "#8A53F4",
                  }),
                  r.createElement("stop", {
                    offset: "0.42",
                    stopColor: "#6377D6",
                  }),
                  r.createElement("stop", {
                    offset: "0.79",
                    stopColor: "#24B0A7",
                  }),
                  r.createElement("stop", {
                    offset: "0.99",
                    stopColor: "#00D18C",
                  }),
                  r.createElement("stop", { offset: "1", stopColor: "#00D18C" }),
                ),
                r.createElement(
                  "linearGradient",
                  {
                    id: "paint3_linear_880_5115",
                    x1: "58.3326",
                    y1: "49.4467",
                    x2: "61.0002",
                    y2: "45.4453",
                    gradientUnits: "userSpaceOnUse",
                  },
                  r.createElement("stop", { stopColor: "#9945FF" }),
                  r.createElement("stop", {
                    offset: "0.14",
                    stopColor: "#8A53F4",
                  }),
                  r.createElement("stop", {
                    offset: "0.42",
                    stopColor: "#6377D6",
                  }),
                  r.createElement("stop", {
                    offset: "0.79",
                    stopColor: "#24B0A7",
                  }),
                  r.createElement("stop", {
                    offset: "0.99",
                    stopColor: "#00D18C",
                  }),
                  r.createElement("stop", { offset: "1", stopColor: "#00D18C" }),
                ),
                r.createElement(
                  "clipPath",
                  { id: "clip0_880_5115" },
                  r.createElement("rect", {
                    width: "48",
                    height: "48",
                    fill: "white",
                    transform: "translate(24.5 24)",
                  }),
                ),
              ),
            ),
          g = ({ className: e = "", container: t = "body" }) => {
            let n = (0, r.useRef)(null),
              { wallets: i, select: a } = (0, l.v)(),
              { setVisible: d } = (0, r.useContext)(o),
              [h, g] = (0, r.useState)(!1),
              [p, m] = (0, r.useState)(!1),
              [y, M] = (0, r.useState)(null),
              [E, v] = (0, r.useMemo)(() => {
                let e = [],
                  t = [];
                for (let n of i)
                  n.readyState === s.Ok.Installed ? e.push(n) : t.push(n);
                return e.length ? [e, t] : [t, []];
              }, [i]),
              I = (0, r.useCallback)(() => {
                (m(!1), setTimeout(() => d(!1), 150));
              }, [d]),
              N = (0, r.useCallback)(
                (e) => {
                  (e.preventDefault(), I());
                },
                [I],
              ),
              L = (0, r.useCallback)(
                (e, t) => {
                  (a(t), N(e));
                },
                [a, N],
              ),
              j = (0, r.useCallback)(() => g(!h), [h]),
              b = (0, r.useCallback)(
                (e) => {
                  let t = n.current;
                  if (!t) return;
                  let r = t.querySelectorAll("button"),
                    i = r[0],
                    a = r[r.length - 1];
                  e.shiftKey
                    ? document.activeElement === i &&
                      (a.focus(), e.preventDefault())
                    : document.activeElement === a &&
                      (i.focus(), e.preventDefault());
                },
                [n],
              );
            return (
              (0, r.useLayoutEffect)(() => {
                let e = (e) => {
                    "Escape" === e.key ? I() : "Tab" === e.key && b(e);
                  },
                  { overflow: t } = window.getComputedStyle(document.body);
                return (
                  setTimeout(() => m(!0), 0),
                  (document.body.style.overflow = "hidden"),
                  window.addEventListener("keydown", e, !1),
                  () => {
                    ((document.body.style.overflow = t),
                      window.removeEventListener("keydown", e, !1));
                  }
                );
              }, [I, b]),
              (0, r.useLayoutEffect)(() => M(document.querySelector(t)), [t]),
              y &&
                (0, c.createPortal)(
                  r.createElement(
                    "div",
                    {
                      "aria-labelledby": "wallet-adapter-modal-title",
                      "aria-modal": "true",
                      className: `wallet-adapter-modal ${p && "wallet-adapter-modal-fade-in"} ${e}`,
                      ref: n,
                      role: "dialog",
                    },
                    r.createElement(
                      "div",
                      { className: "wallet-adapter-modal-container" },
                      r.createElement(
                        "div",
                        { className: "wallet-adapter-modal-wrapper" },
                        r.createElement(
                          "button",
                          {
                            onClick: N,
                            className: "wallet-adapter-modal-button-close",
                          },
                          r.createElement(
                            "svg",
                            { width: "14", height: "14" },
                            r.createElement("path", {
                              d: "M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z",
                            }),
                          ),
                        ),
                        E.length
                          ? r.createElement(
                              r.Fragment,
                              null,
                              r.createElement(
                                "h1",
                                { className: "wallet-adapter-modal-title" },
                                "Connect a wallet on Solana to continue",
                              ),
                              r.createElement(
                                "ul",
                                { className: "wallet-adapter-modal-list" },
                                E.map((e) =>
                                  r.createElement(f, {
                                    key: e.adapter.name,
                                    handleClick: (t) => L(t, e.adapter.name),
                                    wallet: e,
                                  }),
                                ),
                                v.length
                                  ? r.createElement(
                                      u,
                                      {
                                        expanded: h,
                                        id: "wallet-adapter-modal-collapse",
                                      },
                                      v.map((e) =>
                                        r.createElement(f, {
                                          key: e.adapter.name,
                                          handleClick: (t) =>
                                            L(t, e.adapter.name),
                                          tabIndex: h ? 0 : -1,
                                          wallet: e,
                                        }),
                                      ),
                                    )
                                  : null,
                              ),
                              v.length
                                ? r.createElement(
                                    "button",
                                    {
                                      className: "wallet-adapter-modal-list-more",
                                      onClick: j,
                                      tabIndex: 0,
                                    },
                                    r.createElement(
                                      "span",
                                      null,
                                      h ? "Less " : "More ",
                                      "options",
                                    ),
                                    r.createElement(
                                      "svg",
                                      {
                                        width: "13",
                                        height: "7",
                                        viewBox: "0 0 13 7",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: `${h ? "wallet-adapter-modal-list-more-icon-rotate" : ""}`,
                                      },
                                      r.createElement("path", {
                                        d: "M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z",
                                      }),
                                    ),
                                  )
                                : null,
                            )
                          : r.createElement(
                              r.Fragment,
                              null,
                              r.createElement(
                                "h1",
                                { className: "wallet-adapter-modal-title" },
                                "You'll need a wallet on Solana to continue",
                              ),
                              r.createElement(
                                "div",
                                { className: "wallet-adapter-modal-middle" },
                                r.createElement(w, null),
                              ),
                              v.length
                                ? r.createElement(
                                    r.Fragment,
                                    null,
                                    r.createElement(
                                      "button",
                                      {
                                        className:
                                          "wallet-adapter-modal-list-more",
                                        onClick: j,
                                        tabIndex: 0,
                                      },
                                      r.createElement(
                                        "span",
                                        null,
                                        h
                                          ? "Hide "
                                          : "Already have a wallet? View ",
                                        "options",
                                      ),
                                      r.createElement(
                                        "svg",
                                        {
                                          width: "13",
                                          height: "7",
                                          viewBox: "0 0 13 7",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          className: `${h ? "wallet-adapter-modal-list-more-icon-rotate" : ""}`,
                                        },
                                        r.createElement("path", {
                                          d: "M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z",
                                        }),
                                      ),
                                    ),
                                    r.createElement(
                                      u,
                                      {
                                        expanded: h,
                                        id: "wallet-adapter-modal-collapse",
                                      },
                                      r.createElement(
                                        "ul",
                                        {
                                          className: "wallet-adapter-modal-list",
                                        },
                                        v.map((e) =>
                                          r.createElement(f, {
                                            key: e.adapter.name,
                                            handleClick: (t) =>
                                              L(t, e.adapter.name),
                                            tabIndex: h ? 0 : -1,
                                            wallet: e,
                                          }),
                                        ),
                                      ),
                                    ),
                                  )
                                : null,
                            ),
                      ),
                    ),
                    r.createElement("div", {
                      className: "wallet-adapter-modal-overlay",
                      onMouseDown: N,
                    }),
                  ),
                  y,
                )
            );
          },
          p = ({ children: e, ...t }) => {
            let [n, i] = (0, r.useState)(!1);
            return r.createElement(
              o.Provider,
              { value: { visible: n, setVisible: i } },
              e,
              n && r.createElement(g, { ...t }),
            );
          };
      },
      70706: (e, t, n) => {
        let r = n(30567),
          i = n(77570),
          a = n(29514),
          o = n(82425),
          s = n(85410),
          l = n(74963),
          c = n(66513),
          u = n(19995);
        function d(e) {
          return unescape(encodeURIComponent(e)).length;
        }
        function h(e, t, n) {
          let r,
            i = [];
          for (; null !== (r = e.exec(n)); )
            i.push({ data: r[0], index: r.index, mode: t, length: r[0].length });
          return i;
        }
        function f(e) {
          let t,
            n,
            i = h(l.NUMERIC, r.NUMERIC, e),
            a = h(l.ALPHANUMERIC, r.ALPHANUMERIC, e);
          return (
            c.isKanjiModeEnabled()
              ? ((t = h(l.BYTE, r.BYTE, e)), (n = h(l.KANJI, r.KANJI, e)))
              : ((t = h(l.BYTE_KANJI, r.BYTE, e)), (n = [])),
            i
              .concat(a, t, n)
              .sort(function (e, t) {
                return e.index - t.index;
              })
              .map(function (e) {
                return { data: e.data, mode: e.mode, length: e.length };
              })
          );
        }
        function w(e, t) {
          switch (t) {
            case r.NUMERIC:
              return i.getBitsLength(e);
            case r.ALPHANUMERIC:
              return a.getBitsLength(e);
            case r.KANJI:
              return s.getBitsLength(e);
            case r.BYTE:
              return o.getBitsLength(e);
          }
        }
        function g(e, t) {
          let n,
            l = r.getBestModeForData(e);
          if ((n = r.from(t, l)) !== r.BYTE && n.bit < l.bit)
            throw Error(
              '"' +
                e +
                '" cannot be encoded with mode ' +
                r.toString(n) +
                ".\n Suggested mode is: " +
                r.toString(l),
            );
          switch ((n === r.KANJI && !c.isKanjiModeEnabled() && (n = r.BYTE), n)) {
            case r.NUMERIC:
              return new i(e);
            case r.ALPHANUMERIC:
              return new a(e);
            case r.KANJI:
              return new s(e);
            case r.BYTE:
              return new o(e);
          }
        }
        ((t.fromArray = function (e) {
          return e.reduce(function (e, t) {
            return (
              "string" == typeof t
                ? e.push(g(t, null))
                : t.data && e.push(g(t.data, t.mode)),
              e
            );
          }, []);
        }),
          (t.fromString = function (e, n) {
            let i = (function (e, t) {
                let n = {},
                  i = { start: {} },
                  a = ["start"];
                for (let o = 0; o < e.length; o++) {
                  let s = e[o],
                    l = [];
                  for (let e = 0; e < s.length; e++) {
                    let c = s[e],
                      u = "" + o + e;
                    (l.push(u), (n[u] = { node: c, lastCount: 0 }), (i[u] = {}));
                    for (let e = 0; e < a.length; e++) {
                      let o = a[e];
                      n[o] && n[o].node.mode === c.mode
                        ? ((i[o][u] =
                            w(n[o].lastCount + c.length, c.mode) -
                            w(n[o].lastCount, c.mode)),
                          (n[o].lastCount += c.length))
                        : (n[o] && (n[o].lastCount = c.length),
                          (i[o][u] =
                            w(c.length, c.mode) +
                            4 +
                            r.getCharCountIndicator(c.mode, t)));
                    }
                  }
                  a = l;
                }
                for (let e = 0; e < a.length; e++) i[a[e]].end = 0;
                return { map: i, table: n };
              })(
                (function (e) {
                  let t = [];
                  for (let n = 0; n < e.length; n++) {
                    let i = e[n];
                    switch (i.mode) {
                      case r.NUMERIC:
                        t.push([
                          i,
                          {
                            data: i.data,
                            mode: r.ALPHANUMERIC,
                            length: i.length,
                          },
                          { data: i.data, mode: r.BYTE, length: i.length },
                        ]);
                        break;
                      case r.ALPHANUMERIC:
                        t.push([
                          i,
                          { data: i.data, mode: r.BYTE, length: i.length },
                        ]);
                        break;
                      case r.KANJI:
                        t.push([
                          i,
                          { data: i.data, mode: r.BYTE, length: d(i.data) },
                        ]);
                        break;
                      case r.BYTE:
                        t.push([
                          { data: i.data, mode: r.BYTE, length: d(i.data) },
                        ]);
                    }
                  }
                  return t;
                })(f(e, c.isKanjiModeEnabled())),
                n,
              ),
              a = u.find_path(i.map, "start", "end"),
              o = [];
            for (let e = 1; e < a.length - 1; e++) o.push(i.table[a[e]].node);
            return t.fromArray(
              o.reduce(function (e, t) {
                let n = e.length - 1 >= 0 ? e[e.length - 1] : null;
                return (
                  n && n.mode === t.mode
                    ? (e[e.length - 1].data += t.data)
                    : e.push(t),
                  e
                );
              }, []),
            );
          }),
          (t.rawSplit = function (e) {
            return t.fromArray(f(e, c.isKanjiModeEnabled()));
          }));
      },
      74963: (e, t) => {
        let n = "[0-9]+",
          r =
            "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
          i =
            "(?:(?![A-Z0-9 $%*+\\-./:]|" +
            (r = r.replace(/u/g, "\\u")) +
            ")(?:.|[\r\n]))+";
        ((t.KANJI = RegExp(r, "g")),
          (t.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
          (t.BYTE = RegExp(i, "g")),
          (t.NUMERIC = RegExp(n, "g")),
          (t.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g")));
        let a = RegExp("^" + r + "$"),
          o = RegExp("^" + n + "$"),
          s = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
        ((t.testKanji = function (e) {
          return a.test(e);
        }),
          (t.testNumeric = function (e) {
            return o.test(e);
          }),
          (t.testAlphanumeric = function (e) {
            return s.test(e);
          }));
      },
      77570: (e, t, n) => {
        let r = n(30567);
        function i(e) {
          ((this.mode = r.NUMERIC), (this.data = e.toString()));
        }
        ((i.getBitsLength = function (e) {
          return 10 * Math.floor(e / 3) + (e % 3 ? (e % 3) * 3 + 1 : 0);
        }),
          (i.prototype.getLength = function () {
            return this.data.length;
          }),
          (i.prototype.getBitsLength = function () {
            return i.getBitsLength(this.data.length);
          }),
          (i.prototype.write = function (e) {
            let t, n;
            for (t = 0; t + 3 <= this.data.length; t += 3)
              ((n = parseInt(this.data.substr(t, 3), 10)), e.put(n, 10));
            let r = this.data.length - t;
            r > 0 &&
              ((n = parseInt(this.data.substr(t), 10)), e.put(n, 3 * r + 1));
          }),
          (e.exports = i));
      },
      80789: (e, t, n) => {
        "use strict";
        n.d(t, { d: () => W });
        var r,
          i,
          a,
          o,
          s,
          l,
          c,
          u,
          d,
          h,
          f,
          w,
          g,
          p,
          m,
          y = n(95576),
          M = n(48153),
          E = n(53585),
          v = n(61194),
          I = n(73596),
          N = function (e, t, n, r) {
            if ("a" === n && !r)
              throw TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
              throw TypeError(
                "Cannot read private member from an object whose class did not declare it",
              );
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
          },
          L = function (e, t, n, r, i) {
            if ("m" === r) throw TypeError("Private method is not writable");
            if ("a" === r && !i)
              throw TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw TypeError(
                "Cannot write private member to an object whose class did not declare it",
              );
            return (
              "a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n),
              n
            );
          };
        class j extends Event {
          get detail() {
            return N(this, r, "f");
          }
          get type() {
            return "wallet-standard:register-wallet";
          }
          constructor(e) {
            (super("wallet-standard:register-wallet", {
              bubbles: !1,
              cancelable: !1,
              composed: !1,
            }),
              r.set(this, void 0),
              L(this, r, e, "f"));
          }
          preventDefault() {
            throw Error("preventDefault cannot be called");
          }
          stopImmediatePropagation() {
            throw Error("stopImmediatePropagation cannot be called");
          }
          stopPropagation() {
            throw Error("stopPropagation cannot be called");
          }
        }
        r = new WeakMap();
        var b = n(24311),
          T = n(21246),
          A = n(23613),
          S = n(28678),
          D = n(62717),
          z = n(65483),
          C = n(62856),
          x = function (e, t, n, r) {
            if ("a" === n && !r)
              throw TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
              throw TypeError(
                "Cannot read private member from an object whose class did not declare it",
              );
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
          },
          k = function (e, t, n, r, i) {
            if ("m" === r) throw TypeError("Private method is not writable");
            if ("a" === r && !i)
              throw TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw TypeError(
                "Cannot write private member to an object whose class did not declare it",
              );
            return (
              "a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n),
              n
            );
          };
        class O {
          constructor() {
            (i.add(this),
              a.set(this, {}),
              o.set(this, "1.0.0"),
              s.set(this, "MetaMask"),
              l.set(
                this,
                "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMxIiB2aWV3Qm94PSIwIDAgMzEgMzEiIHdpZHRoPSIzMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjIwLjI1IiB4Mj0iMjYuNTcxIiB5MT0iMjcuMTczIiB5Mj0iMTkuODU4Ij48c3RvcCBvZmZzZXQ9Ii4wOCIgc3RvcC1jb2xvcj0iIzk5NDVmZiIvPjxzdG9wIG9mZnNldD0iLjMiIHN0b3AtY29sb3I9IiM4NzUyZjMiLz48c3RvcCBvZmZzZXQ9Ii41IiBzdG9wLWNvbG9yPSIjNTQ5N2Q1Ii8+PHN0b3Agb2Zmc2V0PSIuNiIgc3RvcC1jb2xvcj0iIzQzYjRjYSIvPjxzdG9wIG9mZnNldD0iLjcyIiBzdG9wLWNvbG9yPSIjMjhlMGI5Ii8+PHN0b3Agb2Zmc2V0PSIuOTciIHN0b3AtY29sb3I9IiMxOWZiOWIiLz48L2xpbmVhckdyYWRpZW50PjxnIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iLjA5NCI+PHBhdGggZD0ibTI2LjEwOSAzLjY0My05LjM2OSA2Ljk1OSAxLjczMy00LjEwNSA3LjYzNy0yLjg1M3oiIGZpbGw9IiNlMjc2MWIiIHN0cm9rZT0iI2UyNzYxYiIvPjxnIGZpbGw9IiNlNDc2MWIiIHN0cm9rZT0iI2U0NzYxYiI+PHBhdGggZD0ibTQuNDgxIDMuNjQzIDkuMjk0IDcuMDI0LTEuNjQ4LTQuMTcxem0xOC4yNTggMTYuMTMtMi40OTUgMy44MjMgNS4zMzkgMS40NjkgMS41MzUtNS4yMDctNC4zNzgtLjA4NXptLTE5LjI0Ny4wODUgMS41MjUgNS4yMDcgNS4zMzktMS40NjktMi40OTUtMy44MjN6Ii8+PHBhdGggZD0ibTEwLjA1NSAxMy4zMTMtMS40ODggMi4yNTEgNS4zMDEuMjM1LS4xODgtNS42OTd6bTEwLjQ4IDAtMy42NzItMy4yNzctLjEyMiA1Ljc2MyA1LjI5Mi0uMjM1LTEuNDk3LTIuMjUxem0tMTAuMTc4IDEwLjI4MyAzLjE4My0xLjU1NC0yLjc0OS0yLjE0Ny0uNDMzIDMuNzAxem02LjY5NS0xLjU1NCAzLjE5MiAxLjU1NC0uNDQzLTMuNzAxeiIvPjwvZz48cGF0aCBkPSJtMjAuMjQ0IDIzLjU5Ni0zLjE5Mi0xLjU1NC4yNTQgMi4wODEtLjAyOC44NzZ6bS05Ljg4NyAwIDIuOTY2IDEuNDAzLS4wMTktLjg3Ni4yMzUtMi4wODEtMy4xODMgMS41NTR6IiBmaWxsPSIjZDdjMWIzIiBzdHJva2U9IiNkN2MxYjMiLz48cGF0aCBkPSJtMTMuMzY5IDE4LjUyMS0yLjY1NS0uNzgxIDEuODc0LS44NTd6bTMuODUxIDAgLjc4MS0xLjYzOCAxLjg4My44NTctMi42NjUuNzgxeiIgZmlsbD0iIzIzMzQ0NyIgc3Ryb2tlPSIjMjMzNDQ3Ii8+PHBhdGggZD0ibTEwLjM1NyAyMy41OTYuNDUyLTMuODIzLTIuOTQ3LjA4NXptOS40MzUtMy44MjMuNDUyIDMuODIzIDIuNDk1LTMuNzM4em0yLjI0MS00LjIwOS01LjI5Mi4yMzUuNDkgMi43MjEuNzgyLTEuNjM4IDEuODgzLjg1N3ptLTExLjMxOCAyLjE3NSAxLjg4My0uODU3Ljc3MiAxLjYzOC40OTktMi43MjEtNS4zMDEtLjIzNXoiIGZpbGw9IiNjZDYxMTYiIHN0cm9rZT0iI2NkNjExNiIvPjxwYXRoIGQ9Im04LjU2NyAxNS41NjQgMi4yMjIgNC4zMzEtLjA3NS0yLjE1NnptMTEuMzI4IDIuMTc1LS4wOTQgMi4xNTYgMi4yMzItNC4zMzEtMi4xMzcgMi4xNzV6bS02LjAyNi0xLjk0LS40OTkgMi43MjEuNjIxIDMuMjExLjE0MS00LjIyOC0uMjY0LTEuNzA0em0yLjg3MiAwLS4yNTQgMS42OTUuMTEzIDQuMjM3LjYzMS0zLjIxMXoiIGZpbGw9IiNlNDc1MWYiIHN0cm9rZT0iI2U0NzUxZiIvPjxwYXRoIGQ9Im0xNy4yMyAxOC41Mi0uNjMxIDMuMjExLjQ1Mi4zMTEgMi43NS0yLjE0Ny4wOTQtMi4xNTZ6bS02LjUxNi0uNzgxLjA3NSAyLjE1NiAyLjc1IDIuMTQ3LjQ1Mi0uMzExLS42MjItMy4yMTF6IiBmaWxsPSIjZjY4NTFiIiBzdHJva2U9IiNmNjg1MWIiLz48cGF0aCBkPSJtMTcuMjc3IDI0Ljk5OS4wMjgtLjg3Ni0uMjM1LS4yMDdoLTMuNTVsLS4yMTcuMjA3LjAxOS44NzYtMi45NjYtMS40MDMgMS4wMzYuODQ4IDIuMSAxLjQ1OWgzLjYwNmwyLjEwOS0xLjQ1OSAxLjAzNi0uODQ4eiIgZmlsbD0iI2MwYWQ5ZSIgc3Ryb2tlPSIjYzBhZDllIi8+PHBhdGggZD0ibTE3LjA1MSAyMi4wNDItLjQ1Mi0uMzExaC0yLjYwOGwtLjQ1Mi4zMTEtLjIzNSAyLjA4MS4yMTctLjIwN2gzLjU1bC4yMzUuMjA3LS4yNTQtMi4wODF6IiBmaWxsPSIjMTYxNjE2IiBzdHJva2U9IiMxNjE2MTYiLz48cGF0aCBkPSJtMjYuNTA1IDExLjA1My44LTMuODQyLTEuMTk2LTMuNTY5LTkuMDU4IDYuNzIzIDMuNDg0IDIuOTQ3IDQuOTI1IDEuNDQxIDEuMDkyLTEuMjcxLS40NzEtLjMzOS43NTMtLjY4Ny0uNTg0LS40NTIuNzUzLS41NzQtLjQ5OS0uMzc3em0tMjMuMjExLTMuODQxLjggMy44NDItLjUwOC4zNzcuNzUzLjU3NC0uNTc0LjQ1Mi43NTMuNjg3LS40NzEuMzM5IDEuMDgzIDEuMjcxIDQuOTI1LTEuNDQxIDMuNDg0LTIuOTQ3LTkuMDU5LTYuNzIzeiIgZmlsbD0iIzc2M2QxNiIgc3Ryb2tlPSIjNzYzZDE2Ii8+PHBhdGggZD0ibTI1LjQ2IDE0Ljc1NC00LjkyNS0xLjQ0MSAxLjQ5NyAyLjI1MS0yLjIzMiA0LjMzMSAyLjkzOC0uMDM4aDQuMzc4bC0xLjY1Ny01LjEwNHptLTE1LjQwNS0xLjQ0MS00LjkyNSAxLjQ0MS0xLjYzOCA1LjEwNGg0LjM2OWwyLjkyOC4wMzgtMi4yMjItNC4zMzEgMS40ODgtMi4yNTF6bTYuNjg1IDIuNDg2LjMxMS01LjQzMyAxLjQzMS0zLjg3aC02LjM1NmwxLjQxMyAzLjg3LjMyOSA1LjQzMy4xMTMgMS43MTQuMDA5IDQuMjE5aDIuNjFsLjAxOS00LjIxOS4xMjItMS43MTR6IiBmaWxsPSIjZjY4NTFiIiBzdHJva2U9IiNmNjg1MWIiLz48L2c+PGNpcmNsZSBjeD0iMjMuNSIgY3k9IjIzLjUiIGZpbGw9IiMwMDAiIHI9IjYuNSIvPjxwYXRoIGQ9Im0yNy40NzMgMjUuNTQ1LTEuMzEgMS4zNjhjLS4wMjkuMDMtLjA2My4wNTMtLjEwMS4wN2EuMzEuMzEgMCAwIDEgLS4xMjEuMDI0aC02LjIwOWMtLjAzIDAtLjA1OS0uMDA4LS4wODMtLjAyNGEuMTUuMTUgMCAwIDEgLS4wNTYtLjA2NWMtLjAxMi0uMDI2LS4wMTUtLjA1Ni0uMDEtLjA4NHMuMDE4LS4wNTUuMDM5LS4wNzZsMS4zMTEtMS4zNjhjLjAyOC0uMDMuMDYzLS4wNTMuMTAxLS4wNjlhLjMxLjMxIDAgMCAxIC4xMjEtLjAyNWg2LjIwOGMuMDMgMCAuMDU5LjAwOC4wODMuMDI0YS4xNS4xNSAwIDAgMSAuMDU2LjA2NWMuMDEyLjAyNi4wMTUuMDU2LjAxLjA4NHMtLjAxOC4wNTUtLjAzOS4wNzZ6bS0xLjMxLTIuNzU2Yy0uMDI5LS4wMy0uMDYzLS4wNTMtLjEwMS0uMDdhLjMxLjMxIDAgMCAwIC0uMTIxLS4wMjRoLTYuMjA5Yy0uMDMgMC0uMDU5LjAwOC0uMDgzLjAyNHMtLjA0NC4wMzgtLjA1Ni4wNjUtLjAxNS4wNTYtLjAxLjA4NC4wMTguMDU1LjAzOS4wNzZsMS4zMTEgMS4zNjhjLjAyOC4wMy4wNjMuMDUzLjEwMS4wNjlhLjMxLjMxIDAgMCAwIC4xMjEuMDI1aDYuMjA4Yy4wMyAwIC4wNTktLjAwOC4wODMtLjAyNGEuMTUuMTUgMCAwIDAgLjA1Ni0uMDY1Yy4wMTItLjAyNi4wMTUtLjA1Ni4wMS0uMDg0cy0uMDE4LS4wNTUtLjAzOS0uMDc2em0tNi40MzEtLjk4M2g2LjIwOWEuMzEuMzEgMCAwIDAgLjEyMS0uMDI0Yy4wMzgtLjAxNi4wNzMtLjA0LjEwMS0uMDdsMS4zMS0xLjM2OGMuMDItLjAyMS4wMzQtLjA0Ny4wMzktLjA3NnMuMDAxLS4wNTgtLjAxLS4wODRhLjE1LjE1IDAgMCAwIC0uMDU2LS4wNjVjLS4wMjUtLjAxNi0uMDU0LS4wMjQtLjA4My0uMDI0aC02LjIwOGEuMzEuMzEgMCAwIDAgLS4xMjEuMDI1Yy0uMDM4LjAxNi0uMDcyLjA0LS4xMDEuMDY5bC0xLjMxIDEuMzY4Yy0uMDIuMDIxLS4wMzQuMDQ3LS4wMzkuMDc2cy0uMDAxLjA1OC4wMS4wODQuMDMxLjA0OS4wNTYuMDY1LjA1NC4wMjQuMDgzLjAyNHoiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=",
              ),
              c.set(this, null),
              u.set(
                this,
                (e, t) => (
                  x(this, a, "f")[e]?.push(t) || (x(this, a, "f")[e] = [t]),
                  () => x(this, i, "m", h).call(this, e, t)
                ),
              ),
              f.set(this, async () => {
                if (!x(this, c, "f")) {
                  let e;
                  try {
                    e = (await n.e(243).then(n.bind(n, 37243))).default;
                  } catch (e) {
                    throw Error("Unable to load Solflare MetaMask SDK");
                  }
                  (k(this, c, new e(), "f"),
                    x(this, c, "f").on("standard_change", (e) =>
                      x(this, i, "m", d).call(this, "change", e),
                    ));
                }
                return (
                  this.accounts.length || (await x(this, c, "f").connect()),
                  { accounts: this.accounts }
                );
              }),
              w.set(this, async () => {
                x(this, c, "f") && (await x(this, c, "f").disconnect());
              }),
              g.set(this, async (...e) => {
                if (!x(this, c, "f")) throw new E.kW();
                return await x(this, c, "f").standardSignAndSendTransaction(...e);
              }),
              p.set(this, async (...e) => {
                if (!x(this, c, "f")) throw new E.kW();
                return await x(this, c, "f").standardSignTransaction(...e);
              }),
              m.set(this, async (...e) => {
                if (!x(this, c, "f")) throw new E.kW();
                return await x(this, c, "f").standardSignMessage(...e);
              }));
          }
          get version() {
            return x(this, o, "f");
          }
          get name() {
            return x(this, s, "f");
          }
          get icon() {
            return x(this, l, "f");
          }
          get chains() {
            return [b.CE, b.sE, b.re];
          }
          get features() {
            return {
              [D.u]: { version: "1.0.0", connect: x(this, f, "f") },
              [z.w]: { version: "1.0.0", disconnect: x(this, w, "f") },
              [C.j]: { version: "1.0.0", on: x(this, u, "f") },
              [T.R]: {
                version: "1.0.0",
                supportedTransactionVersions: ["legacy", 0],
                signAndSendTransaction: x(this, g, "f"),
              },
              [A.q]: {
                version: "1.0.0",
                supportedTransactionVersions: ["legacy", 0],
                signTransaction: x(this, p, "f"),
              },
              [S.F]: { version: "1.0.0", signMessage: x(this, m, "f") },
            };
          }
          get accounts() {
            return x(this, c, "f") ? x(this, c, "f").standardAccounts : [];
          }
        }
        ((a = new WeakMap()),
          (o = new WeakMap()),
          (s = new WeakMap()),
          (l = new WeakMap()),
          (c = new WeakMap()),
          (u = new WeakMap()),
          (f = new WeakMap()),
          (w = new WeakMap()),
          (g = new WeakMap()),
          (p = new WeakMap()),
          (m = new WeakMap()),
          (i = new WeakSet()),
          (d = function (e, ...t) {
            x(this, a, "f")[e]?.forEach((e) => e.apply(null, t));
          }),
          (h = function (e, t) {
            x(this, a, "f")[e] = x(this, a, "f")[e]?.filter((e) => t !== e);
          }));
        let _ = !1;
        async function U() {
          let e = "solflare-detect-metamask";
          function t() {
            window.postMessage(
              {
                target: "metamask-contentscript",
                data: {
                  name: "metamask-provider",
                  data: { id: e, jsonrpc: "2.0", method: "wallet_getSnaps" },
                },
              },
              window.location.origin,
            );
          }
          function n(r) {
            let i = r.data;
            i?.target === "metamask-inpage" &&
              i.data?.name === "metamask-provider" &&
              (i.data.data?.id === e
                ? (window.removeEventListener("message", n),
                  i.data.data.error ||
                    (function () {
                      if (!_) {
                        var e = new O();
                        let t = ({ register: t }) => t(e);
                        try {
                          window.dispatchEvent(new j(t));
                        } catch (e) {
                          console.error(
                            "wallet-standard:register-wallet event could not be dispatched\n",
                            e,
                          );
                        }
                        try {
                          window.addEventListener(
                            "wallet-standard:app-ready",
                            ({ detail: e }) => t(e),
                          );
                        } catch (e) {
                          console.error(
                            "wallet-standard:app-ready event listener could not be added\n",
                            e,
                          );
                        }
                        _ = !0;
                      }
                    })())
                : t());
          }
          (window.addEventListener("message", n),
            window.setTimeout(
              () => window.removeEventListener("message", n),
              5e3,
            ),
            t());
        }
        class W extends y.DE {
          constructor(e = {}) {
            (super(),
              (this.name = "Solflare"),
              (this.url = "https://solflare.com"),
              (this.icon =
                "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJTIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA1MCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMwMjA1MGE7c3Ryb2tlOiNmZmVmNDY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOi41cHg7fS5jbHMtMntmaWxsOiNmZmVmNDY7fTwvc3R5bGU+PC9kZWZzPjxyZWN0IGNsYXNzPSJjbHMtMiIgeD0iMCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiByeD0iMTIiIHJ5PSIxMiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI0LjIzLDI2LjQybDIuNDYtMi4zOCw0LjU5LDEuNWMzLjAxLDEsNC41MSwyLjg0LDQuNTEsNS40MywwLDEuOTYtLjc1LDMuMjYtMi4yNSw0LjkzbC0uNDYuNS4xNy0xLjE3Yy42Ny00LjI2LS41OC02LjA5LTQuNzItNy40M2wtNC4zLTEuMzhoMFpNMTguMDUsMTEuODVsMTIuNTIsNC4xNy0yLjcxLDIuNTktNi41MS0yLjE3Yy0yLjI1LS43NS0zLjAxLTEuOTYtMy4zLTQuNTF2LS4wOGgwWk0xNy4zLDMzLjA2bDIuODQtMi43MSw1LjM0LDEuNzVjMi44LjkyLDMuNzYsMi4xMywzLjQ2LDUuMThsLTExLjY1LTQuMjJoMFpNMTMuNzEsMjAuOTVjMC0uNzkuNDItMS41NCwxLjEzLTIuMTcuNzUsMS4wOSwyLjA1LDIuMDUsNC4wOSwyLjcxbDQuNDIsMS40Ni0yLjQ2LDIuMzgtNC4zNC0xLjQyYy0yLS42Ny0yLjg0LTEuNjctMi44NC0yLjk2TTI2LjgyLDQyLjg3YzkuMTgtNi4wOSwxNC4xMS0xMC4yMywxNC4xMS0xNS4zMiwwLTMuMzgtMi01LjI2LTYuNDMtNi43MmwtMy4zNC0xLjEzLDkuMTQtOC43Ny0xLjg0LTEuOTYtMi43MSwyLjM4LTEyLjgxLTQuMjJjLTMuOTcsMS4yOS04Ljk3LDUuMDktOC45Nyw4Ljg5LDAsLjQyLjA0LjgzLjE3LDEuMjktMy4zLDEuODgtNC42MywzLjYzLTQuNjMsNS44LDAsMi4wNSwxLjA5LDQuMDksNC41NSw1LjIybDIuNzUuOTItOS41Miw5LjE0LDEuODQsMS45NiwyLjk2LTIuNzEsMTQuNzMsNS4yMmgwWiIvPjwvc3ZnPg=="),
              (this.supportedTransactionVersions = new Set(["legacy", 0])),
              (this._readyState =
                "undefined" == typeof window || "undefined" == typeof document
                  ? M.Ok.Unsupported
                  : M.Ok.Loadable),
              (this._disconnected = () => {
                let e = this._wallet;
                e &&
                  (e.off("disconnect", this._disconnected),
                  (this._wallet = null),
                  (this._publicKey = null),
                  this.emit("error", new E.PQ()),
                  this.emit("disconnect"));
              }),
              (this._accountChanged = (e) => {
                if (!e) return;
                let t = this._publicKey;
                if (t) {
                  try {
                    e = new I.J3(e.toBytes());
                  } catch (e) {
                    this.emit("error", new E.Kd(e?.message, e));
                    return;
                  }
                  t.equals(e) || ((this._publicKey = e), this.emit("connect", e));
                }
              }),
              (this._connecting = !1),
              (this._publicKey = null),
              (this._wallet = null),
              (this._config = e),
              this._readyState !== M.Ok.Unsupported &&
                ((0, M.qG)(
                  () =>
                    (!!window.solflare?.isSolflare || !!window.SolflareApp) &&
                    ((this._readyState = M.Ok.Installed),
                    this.emit("readyStateChange", this._readyState),
                    !0),
                ),
                U()));
          }
          get publicKey() {
            return this._publicKey;
          }
          get connecting() {
            return this._connecting;
          }
          get connected() {
            return !!this._wallet?.connected;
          }
          get readyState() {
            return this._readyState;
          }
          async autoConnect() {
            (this.readyState === M.Ok.Loadable && (0, M.Br)()) ||
              (await this.connect());
          }
          async connect() {
            try {
              let e, t, r;
              if (this.connected || this.connecting) return;
              if (
                this._readyState !== M.Ok.Loadable &&
                this._readyState !== M.Ok.Installed
              )
                throw new E.AE();
              if (this.readyState === M.Ok.Loadable && (0, M.Br)()) {
                let e = encodeURIComponent(window.location.href),
                  t = encodeURIComponent(window.location.origin);
                window.location.href = `https://solflare.com/ul/v1/browse/${e}?ref=${t}`;
                return;
              }
              try {
                e = (await n.e(917).then(n.bind(n, 48917))).default;
              } catch (e) {
                throw new E.Sz(e?.message, e);
              }
              try {
                t = new e({ network: this._config.network });
              } catch (e) {
                throw new E.Ez(e?.message, e);
              }
              if (((this._connecting = !0), !t.connected))
                try {
                  await t.connect();
                } catch (e) {
                  throw new E.Y6(e?.message, e);
                }
              if (!t.publicKey) throw new E.Y6();
              try {
                r = new I.J3(t.publicKey.toBytes());
              } catch (e) {
                throw new E.Kd(e?.message, e);
              }
              (t.on("disconnect", this._disconnected),
                t.on("accountChanged", this._accountChanged),
                (this._wallet = t),
                (this._publicKey = r),
                this.emit("connect", r));
            } catch (e) {
              throw (this.emit("error", e), e);
            } finally {
              this._connecting = !1;
            }
          }
          async disconnect() {
            let e = this._wallet;
            if (e) {
              (e.off("disconnect", this._disconnected),
                e.off("accountChanged", this._accountChanged),
                (this._wallet = null),
                (this._publicKey = null));
              try {
                await e.disconnect();
              } catch (e) {
                this.emit("error", new E.Y8(e?.message, e));
              }
            }
            this.emit("disconnect");
          }
          async sendTransaction(e, t, n = {}) {
            try {
              let r = this._wallet;
              if (!r) throw new E.kW();
              try {
                let { signers: i, ...a } = n;
                return (
                  (0, v.Y)(e)
                    ? i?.length && e.sign(i)
                    : ((e = await this.prepareTransaction(e, t, a)),
                      i?.length && e.partialSign(...i)),
                  (a.preflightCommitment = a.preflightCommitment || t.commitment),
                  await r.signAndSendTransaction(e, a)
                );
              } catch (e) {
                if (e instanceof E.m7) throw e;
                throw new E.UF(e?.message, e);
              }
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }
          async signTransaction(e) {
            try {
              let t = this._wallet;
              if (!t) throw new E.kW();
              try {
                return (await t.signTransaction(e)) || e;
              } catch (e) {
                throw new E.z4(e?.message, e);
              }
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }
          async signAllTransactions(e) {
            try {
              let t = this._wallet;
              if (!t) throw new E.kW();
              try {
                return (await t.signAllTransactions(e)) || e;
              } catch (e) {
                throw new E.z4(e?.message, e);
              }
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }
          async signMessage(e) {
            try {
              let t = this._wallet;
              if (!t) throw new E.kW();
              try {
                return await t.signMessage(e, "utf8");
              } catch (e) {
                throw new E.K3(e?.message, e);
              }
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }
        }
      },
      82425: (e, t, n) => {
        let r = n(30567);
        function i(e) {
          ((this.mode = r.BYTE),
            "string" == typeof e
              ? (this.data = new TextEncoder().encode(e))
              : (this.data = new Uint8Array(e)));
        }
        ((i.getBitsLength = function (e) {
          return 8 * e;
        }),
          (i.prototype.getLength = function () {
            return this.data.length;
          }),
          (i.prototype.getBitsLength = function () {
            return i.getBitsLength(this.data.length);
          }),
          (i.prototype.write = function (e) {
            for (let t = 0, n = this.data.length; t < n; t++)
              e.put(this.data[t], 8);
          }),
          (e.exports = i));
      },
      83215: (e, t, n) => {
        let r = n(549);
        function i(e, t) {
          let n = e.a / 255,
            r = t + '="' + e.hex + '"';
          return n < 1
            ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"'
            : r;
        }
        function a(e, t, n) {
          let r = e + t;
          return (void 0 !== n && (r += " " + n), r);
        }
        t.render = function (e, t, n) {
          let o = r.getOptions(t),
            s = e.modules.size,
            l = e.modules.data,
            c = s + 2 * o.margin,
            u = o.color.light.a
              ? "<path " +
                i(o.color.light, "fill") +
                ' d="M0 0h' +
                c +
                "v" +
                c +
                'H0z"/>'
              : "",
            d =
              "<path " +
              i(o.color.dark, "stroke") +
              ' d="' +
              (function (e, t, n) {
                let r = "",
                  i = 0,
                  o = !1,
                  s = 0;
                for (let l = 0; l < e.length; l++) {
                  let c = Math.floor(l % t),
                    u = Math.floor(l / t);
                  (c || o || (o = !0),
                    e[l]
                      ? (s++,
                        (l > 0 && c > 0 && e[l - 1]) ||
                          ((r += o ? a("M", c + n, 0.5 + u + n) : a("m", i, 0)),
                          (i = 0),
                          (o = !1)),
                        (c + 1 < t && e[l + 1]) || ((r += a("h", s)), (s = 0)))
                      : i++);
                }
                return r;
              })(l, s, o.margin) +
              '"/>',
            h =
              '<svg xmlns="http://www.w3.org/2000/svg" ' +
              (o.width
                ? 'width="' + o.width + '" height="' + o.width + '" '
                : "") +
              ('viewBox="0 0 ' + c + " ") +
              c +
              '" shape-rendering="crispEdges">' +
              u +
              d +
              "</svg>\n";
          return ("function" == typeof n && n(null, h), h);
        };
      },
      85291: (e, t, n) => {
        let r = n(66513).getSymbolSize;
        t.getPositions = function (e) {
          let t = r(e);
          return [
            [0, 0],
            [t - 7, 0],
            [0, t - 7],
          ];
        };
      },
      85410: (e, t, n) => {
        let r = n(30567),
          i = n(66513);
        function a(e) {
          ((this.mode = r.KANJI), (this.data = e));
        }
        ((a.getBitsLength = function (e) {
          return 13 * e;
        }),
          (a.prototype.getLength = function () {
            return this.data.length;
          }),
          (a.prototype.getBitsLength = function () {
            return a.getBitsLength(this.data.length);
          }),
          (a.prototype.write = function (e) {
            let t;
            for (t = 0; t < this.data.length; t++) {
              let n = i.toSJIS(this.data[t]);
              if (n >= 33088 && n <= 40956) n -= 33088;
              else if (n >= 57408 && n <= 60351) n -= 49472;
              else
                throw Error(
                  "Invalid SJIS character: " +
                    this.data[t] +
                    "\nMake sure your charset is UTF-8",
                );
              ((n = ((n >>> 8) & 255) * 192 + (255 & n)), e.put(n, 13));
            }
          }),
          (e.exports = a));
      },
      88120: (e, t, n) => {
        let r = n(549);
        ((t.render = function (e, t, n) {
          var i;
          let a = n,
            o = t;
          (void 0 !== a || (t && t.getContext) || ((a = t), (t = void 0)),
            t ||
              (o = (function () {
                try {
                  return document.createElement("canvas");
                } catch (e) {
                  throw Error("You need to specify a canvas element");
                }
              })()),
            (a = r.getOptions(a)));
          let s = r.getImageWidth(e.modules.size, a),
            l = o.getContext("2d"),
            c = l.createImageData(s, s);
          return (
            r.qrToImageData(c.data, e, a),
            (i = o),
            l.clearRect(0, 0, i.width, i.height),
            i.style || (i.style = {}),
            (i.height = s),
            (i.width = s),
            (i.style.height = s + "px"),
            (i.style.width = s + "px"),
            l.putImageData(c, 0, 0),
            o
          );
        }),
          (t.renderToDataURL = function (e, n, r) {
            let i = r;
            (void 0 !== i || (n && n.getContext) || ((i = n), (n = void 0)),
              i || (i = {}));
            let a = t.render(e, n, i),
              o = i.type || "image/png",
              s = i.rendererOpts || {};
            return a.toDataURL(o, s.quality);
          }));
      },
      92401: (e, t, n) => {
        "use strict";
        n.d(t, { G: () => s });
        var r = n(95576),
          i = n(48153),
          a = n(53585),
          o = n(73596);
        class s extends r.DE {
          constructor(
            { params: e = { showTorusButton: !1 } } = {
              params: { showTorusButton: !1 },
            },
          ) {
            (super(),
              (this.name = "Torus"),
              (this.url = "https://tor.us"),
              (this.icon =
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMyAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYuNSIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzAzNjRGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjIxODYgOS40OTIxOUMxMC40NTM5IDkuNDkyMTkgOS44MzM5OCAxMC4xMTIxIDkuODMzOTggMTAuODc2OFYxMi40ODk4QzkuODMzOTggMTMuMjU0NSAxMC40NTM5IDEzLjg3NDQgMTEuMjE4NiAxMy44NzQ0SDEzLjY2ODRWMjIuODk3NkMxMy42Njg0IDIzLjY2MjMgMTQuMjg4MyAyNC4yODIyIDE1LjA1MyAyNC4yODIySDE2LjY2NkMxNy40MzA3IDI0LjI4MjIgMTguMDUwNiAyMy42NjIzIDE4LjA1MDYgMjIuODk3NlYxMi41MDE1QzE4LjA1MDYgMTIuNDk3NiAxOC4wNTA2IDEyLjQ5MzcgMTguMDUwNiAxMi40ODk4VjEwLjg3NjhDMTguMDUwNiAxMC4xMTIxIDE3LjQzMDcgOS40OTIxOSAxNi42NjYgOS40OTIxOUgxNS4wNTNIMTEuMjE4NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMS4zMzc2IDEzLjg3NDRDMjIuNTQ3NyAxMy44NzQ0IDIzLjUyODcgMTIuODkzNCAyMy41Mjg3IDExLjY4MzNDMjMuNTI4NyAxMC40NzMyIDIyLjU0NzcgOS40OTIxOSAyMS4zMzc2IDkuNDkyMTlDMjAuMTI3NSA5LjQ5MjE5IDE5LjE0NjUgMTAuNDczMiAxOS4xNDY1IDExLjY4MzNDMTkuMTQ2NSAxMi44OTM0IDIwLjEyNzUgMTMuODc0NCAyMS4zMzc2IDEzLjg3NDRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"),
              (this.supportedTransactionVersions = null),
              (this._readyState =
                "undefined" == typeof window || "undefined" == typeof document
                  ? i.Ok.Unsupported
                  : i.Ok.Loadable),
              (this._connecting = !1),
              (this._wallet = null),
              (this._publicKey = null),
              (this._params = e));
          }
          get publicKey() {
            return this._publicKey;
          }
          get connecting() {
            return this._connecting;
          }
          get connected() {
            return !!this._wallet?.isLoggedIn;
          }
          get readyState() {
            return this._readyState;
          }
          async connect() {
            try {
              let e, t, r, s;
              if (this.connected || this.connecting) return;
              if (this._readyState !== i.Ok.Loadable) throw new a.AE();
              this._connecting = !0;
              try {
                e = (
                  await Promise.all([n.e(268), n.e(173), n.e(890)]).then(
                    n.bind(n, 37782),
                  )
                ).default;
              } catch (e) {
                throw new a.Sz(e?.message, e);
              }
              try {
                t = window.torus || new e();
              } catch (e) {
                throw new a.Ez(e?.message, e);
              }
              if (!t.isInitialized)
                try {
                  await t.init(this._params);
                } catch (e) {
                  throw new a.Y6(e?.message, e);
                }
              try {
                r = await t.login();
              } catch (e) {
                throw new a.fk(e?.message, e);
              }
              try {
                s = new o.J3(r[0]);
              } catch (e) {
                throw new a.Kd(e?.message, e);
              }
              ((this._wallet = t),
                (this._publicKey = s),
                this.emit("connect", s));
            } catch (e) {
              throw (this.emit("error", e), e);
            } finally {
              this._connecting = !1;
            }
          }
          async disconnect() {
            let e = this._wallet;
            if (e) {
              ((this._wallet = null), (this._publicKey = null));
              try {
                e.isLoggedIn && (await e.cleanUp());
              } catch (e) {
                this.emit("error", new a.Y8(e?.message, e));
              }
            }
            this.emit("disconnect");
          }
          async sendTransaction(e, t, n = {}) {
            try {
              let r = this._wallet;
              if (!r) throw new a.kW();
              try {
                let { signers: i, ...a } = n;
                ((e = await this.prepareTransaction(e, t, a)),
                  i?.length && e.partialSign(...i),
                  (a.preflightCommitment =
                    a.preflightCommitment || t.commitment));
                let { signature: o } = await r.signAndSendTransaction(e, a);
                return o;
              } catch (e) {
                if (e instanceof a.m7) throw e;
                throw new a.UF(e?.message, e);
              }
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }
          async signTransaction(e) {
            try {
              let t = this._wallet;
              if (!t) throw new a.kW();
              try {
                return (await t.signTransaction(e)) || e;
              } catch (e) {
                throw new a.z4(e?.message, e);
              }
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }
          async signAllTransactions(e) {
            try {
              let t = this._wallet;
              if (!t) throw new a.kW();
              try {
                return (await t.signAllTransactions(e)) || e;
              } catch (e) {
                throw new a.z4(e?.message, e);
              }
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }
          async signMessage(e) {
            try {
              let t = this._wallet;
              if (!t) throw new a.kW();
              try {
                return await t.signMessage(e);
              } catch (e) {
                throw new a.K3(e?.message, e);
              }
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          }
        }
      },
      95576: (e, t, n) => {
        "use strict";
        n.d(t, { DE: () => s, Xl: () => l });
        var r = n(48153),
          i = n(53585),
          a = n(61194);
        class o extends r.Ce {
          async sendTransaction(e, t, n = {}) {
            let r = !0;
            try {
              if ((0, a.Y)(e)) {
                if (!this.supportedTransactionVersions)
                  throw new i.UF(
                    "Sending versioned transactions isn't supported by this wallet",
                  );
                if (!this.supportedTransactionVersions.has(e.version))
                  throw new i.UF(
                    `Sending transaction version ${e.version} isn't supported by this wallet`,
                  );
                try {
                  let r = (e = await this.signTransaction(e)).serialize();
                  return await t.sendRawTransaction(r, n);
                } catch (e) {
                  if (e instanceof i.z4) throw ((r = !1), e);
                  throw new i.UF(e?.message, e);
                }
              }
              try {
                let { signers: r, ...i } = n;
                ((e = await this.prepareTransaction(e, t, i)),
                  r?.length && e.partialSign(...r));
                let a = (e = await this.signTransaction(e)).serialize();
                return await t.sendRawTransaction(a, i);
              } catch (e) {
                if (e instanceof i.z4) throw ((r = !1), e);
                throw new i.UF(e?.message, e);
              }
            } catch (e) {
              throw (r && this.emit("error", e), e);
            }
          }
          async signAllTransactions(e) {
            for (let t of e)
              if ((0, a.Y)(t)) {
                if (!this.supportedTransactionVersions)
                  throw new i.z4(
                    "Signing versioned transactions isn't supported by this wallet",
                  );
                if (!this.supportedTransactionVersions.has(t.version))
                  throw new i.z4(
                    `Signing transaction version ${t.version} isn't supported by this wallet`,
                  );
              }
            let t = [];
            for (let n of e) t.push(await this.signTransaction(n));
            return t;
          }
        }
        class s extends o {}
        class l extends s {}
      },
      98281: () => {},
    },
  ]);
  