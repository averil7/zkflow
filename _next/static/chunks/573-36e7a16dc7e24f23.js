"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [573],
  {
    1138: (t, e, i) => {
      i.d(e, { s: () => s });
      var n = i(94601);
      function s(t) {
        return (0, n.G)(t) && "offsetHeight" in t;
      }
    },
    1406: (t, e, i) => {
      i.d(e, { Sz: () => a, ZZ: () => l, dg: () => o });
      var n = i(25505),
        s = i(75887),
        r = i(12266);
      let a = (0, n.A)(0.33, 1.53, 0.69, 0.99),
        o = (0, r.G)(a),
        l = (0, s.V)(o);
    },
    4132: (t, e, i) => {
      i.d(e, { h: () => c, q: () => d });
      var n = i(32766),
        s = i(27933);
      let r = new Set(),
        a = !1,
        o = !1,
        l = !1;
      function u() {
        if (o) {
          let t = Array.from(r).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          (e.forEach((t) => {
            let e = (0, n.W9)(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  t.getValue(e)?.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            }));
        }
        ((o = !1), (a = !1), r.forEach((t) => t.complete(l)), r.clear());
      }
      function h() {
        r.forEach((t) => {
          (t.readKeyframes(), t.needsMeasurement && (o = !0));
        });
      }
      function d() {
        ((l = !0), h(), u(), (l = !1));
      }
      class c {
        constructor(t, e, i, n, s, r = !1) {
          ((this.state = "pending"),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = s),
            (this.isAsync = r));
        }
        scheduleResolve() {
          ((this.state = "scheduled"),
            this.isAsync
              ? (r.add(this),
                a || ((a = !0), s.Gt.read(h), s.Gt.resolveKeyframes(u)))
              : (this.readKeyframes(), this.complete()));
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: n,
          } = this;
          if (null === t[0]) {
            let s = n?.get(),
              r = t[t.length - 1];
            if (void 0 !== s) t[0] = s;
            else if (i && e) {
              let n = i.readValue(e, r);
              null != n && (t[0] = n);
            }
            (void 0 === t[0] && (t[0] = r), n && void 0 === s && n.set(t[0]));
          }
          for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(t = !1) {
          ((this.state = "complete"),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
            r.delete(this));
        }
        cancel() {
          "scheduled" === this.state &&
            (r.delete(this), (this.state = "pending"));
        }
        resume() {
          "pending" === this.state && this.scheduleResolve();
        }
      }
    },
    4524: (t, e, i) => {
      i.d(e, { E: () => s });
      var n = i(12115);
      let s = i(24846).B ? n.useLayoutEffect : n.useEffect;
    },
    5469: (t, e, i) => {
      i.d(e, { K: () => s });
      var n = i(62537);
      function s(t, e, i) {
        let s = t.getProps();
        return (0, n.a)(s, e, void 0 !== i ? i : s.custom, t);
      }
    },
    5556: (t, e, i) => {
      i.d(e, { $: () => n, V: () => s });
      let n = () => {},
        s = () => {};
    },
    5772: (t, e, i) => {
      i.d(e, { default: () => s.a });
      var n = i(97651),
        s = i.n(n);
    },
    6900: (t, e, i) => {
      i.d(e, { OQ: () => u, bt: () => o });
      var n = i(73852),
        s = i(79537),
        r = i(37035),
        a = i(27933);
      let o = { current: void 0 };
      class l {
        constructor(t, e = {}) {
          ((this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t) => {
              let e = r.k.now();
              if (
                (this.updatedAt !== e && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  (this.events.change?.notify(this.current), this.dependents))
              )
                for (let t of this.dependents) t.dirty();
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner));
        }
        setCurrent(t) {
          ((this.current = t),
            (this.updatedAt = r.k.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = !isNaN(parseFloat(this.current))));
        }
        setPrevFrameValue(t = this.current) {
          ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new n.v());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                (i(),
                  a.Gt.read(() => {
                    this.events.change.getSize() || this.stop();
                  }));
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          ((this.passiveEffect = t), (this.stopPassiveEffect = e));
        }
        set(t) {
          this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t);
        }
        setWithVelocity(t, e, i) {
          (this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i));
        }
        jump(t, e = !0) {
          (this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
        }
        dirty() {
          this.events.change?.notify(this.current);
        }
        addDependent(t) {
          (this.dependents || (this.dependents = new Set()),
            this.dependents.add(t));
        }
        removeDependent(t) {
          this.dependents && this.dependents.delete(t);
        }
        get() {
          return (o.current && o.current.push(this), this.current);
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = r.k.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, s.f)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e,
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              ((this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify());
            }).then(() => {
              (this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation());
            })
          );
        }
        stop() {
          (this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation());
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          (this.dependents?.clear(),
            this.events.destroy?.notify(),
            this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
        }
      }
      function u(t, e) {
        return new l(t, e);
      }
    },
    8428: (t, e, i) => {
      i.d(e, { o: () => v });
      var n = i(94712),
        s = i(38621),
        r = i(78987),
        a = i(17964),
        o = i(45343);
      let l = 0.01,
        u = 2,
        h = 0.005,
        d = 0.5;
      var c = i(5556);
      function p(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let m = ["duration", "bounce"],
        f = ["stiffness", "damping", "mass"];
      function g(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function v(t = 0.3, e = 0.3) {
        let i,
          y =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: x, restDelta: b } = y,
          w = y.keyframes[0],
          P = y.keyframes[y.keyframes.length - 1],
          T = { done: !1, value: w },
          {
            stiffness: S,
            damping: A,
            mass: E,
            duration: M,
            velocity: C,
            isResolvedFromDuration: V,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!g(t, f) && g(t, m))
              if (t.visualDuration) {
                let i = (2 * Math.PI) / (1.2 * t.visualDuration),
                  s = i * i,
                  r = 2 * (0, n.q)(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
                e = { ...e, mass: 1, stiffness: s, damping: r };
              } else {
                let i = (function ({
                  duration: t = 800,
                  bounce: e = 0.3,
                  velocity: i = 0,
                  mass: r = 1,
                }) {
                  let a, o;
                  (0, c.$)(
                    t <= (0, s.f)(10),
                    "Spring duration must be 10 seconds or less",
                    "spring-duration-limit",
                  );
                  let l = 1 - e;
                  ((l = (0, n.q)(0.05, 1, l)),
                    (t = (0, n.q)(0.01, 10, (0, s.X)(t))),
                    l < 1
                      ? ((a = (e) => {
                          let n = e * l,
                            s = n * t;
                          return 0.001 - ((n - i) / p(e, l)) * Math.exp(-s);
                        }),
                        (o = (e) => {
                          let n = e * l * t,
                            s = Math.pow(l, 2) * Math.pow(e, 2) * t,
                            r = Math.exp(-n),
                            o = p(Math.pow(e, 2), l);
                          return (
                            ((n * i + i - s) *
                              r *
                              (-a(e) + 0.001 > 0 ? -1 : 1)) /
                            o
                          );
                        }))
                      : ((a = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                        (o = (e) => t * t * (i - e) * Math.exp(-e * t))));
                  let u = (function (t, e, i) {
                    let n = i;
                    for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                    return n;
                  })(a, o, 5 / t);
                  if (((t = (0, s.f)(t)), isNaN(u)))
                    return { stiffness: 100, damping: 10, duration: t };
                  {
                    let e = Math.pow(u, 2) * r;
                    return {
                      stiffness: e,
                      damping: 2 * l * Math.sqrt(r * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
              }
            return e;
          })({ ...y, velocity: -(0, s.X)(y.velocity || 0) }),
          k = C || 0,
          j = A / (2 * Math.sqrt(S * E)),
          D = P - w,
          R = (0, s.X)(Math.sqrt(S / E)),
          O = 5 > Math.abs(D);
        if ((x || (x = O ? l : u), b || (b = O ? h : d), j < 1)) {
          let t = p(R, j);
          i = (e) =>
            P -
            Math.exp(-j * R * e) *
              (((k + j * R * D) / t) * Math.sin(t * e) + D * Math.cos(t * e));
        } else if (1 === j)
          i = (t) => P - Math.exp(-R * t) * (D + (k + R * D) * t);
        else {
          let t = R * Math.sqrt(j * j - 1);
          i = (e) => {
            let i = Math.exp(-j * R * e),
              n = Math.min(t * e, 300);
            return (
              P -
              (i * ((k + j * R * D) * Math.sinh(n) + t * D * Math.cosh(n))) / t
            );
          };
        }
        let L = {
          calculatedDuration: (V && M) || null,
          next: (t) => {
            let e = i(t);
            if (V) T.done = t >= M;
            else {
              let n = 0 === t ? k : 0;
              j < 1 && (n = 0 === t ? (0, s.f)(k) : (0, o.Y)(i, t, e));
              let r = Math.abs(P - e) <= b;
              T.done = Math.abs(n) <= x && r;
            }
            return ((T.value = T.done ? P : e), T);
          },
          toString: () => {
            let t = Math.min((0, a.t)(L), a.Y),
              e = (0, r.K)((e) => L.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
          toTransition: () => {},
        };
        return L;
      }
      v.applyToOptions = (t) => {
        let e = (function (t, e = 100, i) {
          let n = i({ ...t, keyframes: [0, e] }),
            r = Math.min((0, a.t)(n), a.Y);
          return {
            type: "keyframes",
            ease: (t) => n.next(r * t).value / e,
            duration: (0, s.X)(r),
          };
        })(t, 100, v);
        return (
          (t.ease = e.ease),
          (t.duration = (0, s.f)(e.duration)),
          (t.type = "keyframes"),
          t
        );
      };
    },
    9247: (t, e, i) => {
      i.d(e, { $: () => n });
      let n = new Set([
        "width",
        "height",
        "top",
        "left",
        "right",
        "bottom",
        ...i(25952).U,
      ]);
    },
    9331: (t, e, i) => {
      i.d(e, { D: () => n });
      let n = (t) => Array.isArray(t) && "number" == typeof t[0];
    },
    11048: (t, e, i) => {
      i.d(e, {
        KN: () => r,
        gQ: () => u,
        px: () => a,
        uj: () => s,
        vh: () => o,
        vw: () => l,
      });
      let n = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        s = n("deg"),
        r = n("%"),
        a = n("px"),
        o = n("vh"),
        l = n("vw"),
        u = {
          ...r,
          parse: (t) => r.parse(t) / 100,
          transform: (t) => r.transform(100 * t),
        };
    },
    11698: (t, e, i) => {
      i.d(e, { Ib: () => c, ry: () => d, zs: () => h });
      let n = (t) => (180 * t) / Math.PI,
        s = (t) => a(n(Math.atan2(t[1], t[0]))),
        r = {
          x: 4,
          y: 5,
          translateX: 4,
          translateY: 5,
          scaleX: 0,
          scaleY: 3,
          scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
          rotate: s,
          rotateZ: s,
          skewX: (t) => n(Math.atan(t[1])),
          skewY: (t) => n(Math.atan(t[2])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
        },
        a = (t) => ((t %= 360) < 0 && (t += 360), t),
        o = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
        l = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
        u = {
          x: 12,
          y: 13,
          z: 14,
          translateX: 12,
          translateY: 13,
          translateZ: 14,
          scaleX: o,
          scaleY: l,
          scale: (t) => (o(t) + l(t)) / 2,
          rotateX: (t) => a(n(Math.atan2(t[6], t[5]))),
          rotateY: (t) => a(n(Math.atan2(-t[2], t[0]))),
          rotateZ: s,
          rotate: s,
          skewX: (t) => n(Math.atan(t[4])),
          skewY: (t) => n(Math.atan(t[1])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
        };
      function h(t) {
        return +!!t.includes("scale");
      }
      function d(t, e) {
        let i, n;
        if (!t || "none" === t) return h(e);
        let s = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (s) ((i = u), (n = s));
        else {
          let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          ((i = r), (n = e));
        }
        if (!n) return h(e);
        let a = i[e],
          o = n[1].split(",").map(p);
        return "function" == typeof a ? a(o) : o[a];
      }
      let c = (t, e) => {
        let { transform: i = "none" } = getComputedStyle(t);
        return d(i, e);
      };
      function p(t) {
        return parseFloat(t.trim());
      }
    },
    12266: (t, e, i) => {
      i.d(e, { G: () => n });
      let n = (t) => (e) => 1 - t(1 - e);
    },
    12590: (t, e) => {
      function i({
        widthInt: t,
        heightInt: e,
        blurWidth: i,
        blurHeight: n,
        blurDataURL: s,
        objectFit: r,
      }) {
        let a = i ? 40 * i : t,
          o = n ? 40 * n : e,
          l = a && o ? `viewBox='0 0 ${a} ${o}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${l ? "none" : "contain" === r ? "xMidYMid" : "cover" === r ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${s}'/%3E%3C/svg%3E`;
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }));
    },
    14405: (t, e, i) => {
      i.d(e, { s: () => y });
      var n = i(34017),
        s = i(94712),
        r = i(38621),
        a = i(37035),
        o = i(67026),
        l = i(86075),
        u = i(27933);
      let h = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: (t = !0) => u.Gt.update(e, t),
          stop: () => (0, u.WG)(e),
          now: () => (u.uv.isProcessing ? u.uv.timestamp : a.k.now()),
        };
      };
      var d = i(41720),
        c = i(69628),
        p = i(17964),
        m = i(47736),
        f = i(20754),
        g = i(40660);
      let v = (t) => t / 100;
      class y extends g.q {
        constructor(t) {
          (super(),
            (this.state = "idle"),
            (this.startTime = null),
            (this.isStopped = !1),
            (this.currentTime = 0),
            (this.holdTime = null),
            (this.playbackSpeed = 1),
            (this.stop = () => {
              let { motionValue: t } = this.options;
              (t && t.updatedAt !== a.k.now() && this.tick(a.k.now()),
                (this.isStopped = !0),
                "idle" !== this.state &&
                  (this.teardown(), this.options.onStop?.()));
            }),
            o.q.mainThread++,
            (this.options = t),
            this.initAnimation(),
            this.play(),
            !1 === t.autoplay && this.pause());
        }
        initAnimation() {
          let { options: t } = this;
          (0, f.E)(t);
          let {
              type: e = c.i,
              repeat: i = 0,
              repeatDelay: s = 0,
              repeatType: r,
              velocity: a = 0,
            } = t,
            { keyframes: o } = t,
            u = e || c.i;
          u !== c.i &&
            "number" != typeof o[0] &&
            ((this.mixKeyframes = (0, n.F)(v, (0, l.j)(o[0], o[1]))),
            (o = [0, 100]));
          let h = u({ ...t, keyframes: o });
          ("mirror" === r &&
            (this.mirroredGenerator = u({
              ...t,
              keyframes: [...o].reverse(),
              velocity: -a,
            })),
            null === h.calculatedDuration &&
              (h.calculatedDuration = (0, p.t)(h)));
          let { calculatedDuration: d } = h;
          ((this.calculatedDuration = d),
            (this.resolvedDuration = d + s),
            (this.totalDuration = this.resolvedDuration * (i + 1) - s),
            (this.generator = h));
        }
        updateTime(t) {
          let e = Math.round(t - this.startTime) * this.playbackSpeed;
          null !== this.holdTime
            ? (this.currentTime = this.holdTime)
            : (this.currentTime = e);
        }
        tick(t, e = !1) {
          let {
            generator: i,
            totalDuration: n,
            mixKeyframes: r,
            mirroredGenerator: a,
            resolvedDuration: o,
            calculatedDuration: l,
          } = this;
          if (null === this.startTime) return i.next(0);
          let {
            delay: u = 0,
            keyframes: h,
            repeat: c,
            repeatType: p,
            repeatDelay: f,
            type: g,
            onUpdate: v,
            finalKeyframe: y,
          } = this.options;
          (this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - n / this.speed, this.startTime)),
            e ? (this.currentTime = t) : this.updateTime(t));
          let x = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
            b = this.playbackSpeed >= 0 ? x < 0 : x > n;
          ((this.currentTime = Math.max(x, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = n));
          let w = this.currentTime,
            P = i;
          if (c) {
            let t = Math.min(this.currentTime, n) / o,
              e = Math.floor(t),
              i = t % 1;
            (!i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, c + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), f && (i -= f / o))
                  : "mirror" === p && (P = a)),
              (w = (0, s.q)(0, 1, i) * o));
          }
          let T = b ? { done: !1, value: h[0] } : P.next(w);
          r && (T.value = r(T.value));
          let { done: S } = T;
          b ||
            null === l ||
            (S =
              this.playbackSpeed >= 0
                ? this.currentTime >= n
                : this.currentTime <= 0);
          let A =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && S));
          return (
            A &&
              g !== d.B &&
              (T.value = (0, m.X)(h, this.options, y, this.speed)),
            v && v(T.value),
            A && this.finish(),
            T
          );
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
        get duration() {
          return (0, r.X)(this.calculatedDuration);
        }
        get iterationDuration() {
          let { delay: t = 0 } = this.options || {};
          return this.duration + (0, r.X)(t);
        }
        get time() {
          return (0, r.X)(this.currentTime);
        }
        set time(t) {
          ((t = (0, r.f)(t)),
            (this.currentTime = t),
            null === this.startTime ||
            null !== this.holdTime ||
            0 === this.playbackSpeed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.playbackSpeed),
            this.driver?.start(!1));
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          this.updateTime(a.k.now());
          let e = this.playbackSpeed !== t;
          ((this.playbackSpeed = t),
            e && (this.time = (0, r.X)(this.currentTime)));
        }
        play() {
          if (this.isStopped) return;
          let { driver: t = h, startTime: e } = this.options;
          (this.driver || (this.driver = t((t) => this.tick(t))),
            this.options.onPlay?.());
          let i = this.driver.now();
          ("finished" === this.state
            ? (this.updateFinished(), (this.startTime = i))
            : null !== this.holdTime
              ? (this.startTime = i - this.holdTime)
              : this.startTime || (this.startTime = e ?? i),
            "finished" === this.state &&
              this.speed < 0 &&
              (this.startTime += this.calculatedDuration),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start());
        }
        pause() {
          ((this.state = "paused"),
            this.updateTime(a.k.now()),
            (this.holdTime = this.currentTime));
        }
        complete() {
          ("running" !== this.state && this.play(),
            (this.state = "finished"),
            (this.holdTime = null));
        }
        finish() {
          (this.notifyFinished(),
            this.teardown(),
            (this.state = "finished"),
            this.options.onComplete?.());
        }
        cancel() {
          ((this.holdTime = null),
            (this.startTime = 0),
            this.tick(0),
            this.teardown(),
            this.options.onCancel?.());
        }
        teardown() {
          ((this.state = "idle"),
            this.stopDriver(),
            (this.startTime = this.holdTime = null),
            o.q.mainThread--);
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return ((this.startTime = 0), this.tick(t, !0));
        }
        attachTimeline(t) {
          return (
            this.options.allowFlatten &&
              ((this.options.type = "keyframes"),
              (this.options.ease = "linear"),
              this.initAnimation()),
            this.driver?.stop(),
            t.observe(this)
          );
        }
      }
    },
    15131: (t, e, i) => {
      i.d(e, { t: () => n });
      let n = (0, i(12115).createContext)(null);
    },
    15680: (t, e, i) => {
      i.d(e, { L: () => n });
      function n(t, e, i, s = 0, r = 1) {
        let a = Array.from(t)
            .sort((t, e) => t.sortNodePosition(e))
            .indexOf(e),
          o = t.size,
          l = (o - 1) * s;
        return "function" == typeof i ? i(a, o) : 1 === r ? a * s : l - a * s;
      }
    },
    17150: (t, e, i) => {
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }));
      let n = i(73623)._(i(12115)),
        s = i(55762),
        r = n.default.createContext(s.imageConfigDefault);
    },
    17964: (t, e, i) => {
      i.d(e, { Y: () => n, t: () => s });
      let n = 2e4;
      function s(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < n; ) ((e += 50), (i = t.next(e)));
        return e >= n ? 1 / 0 : e;
      }
    },
    18844: (t, e, i) => {
      i.d(e, { q: () => n });
      let n = (t, e, i) => {
        let n = e - t;
        return 0 === n ? 1 : (i - t) / n;
      };
    },
    18857: (t, e) => {
      function i(t, e) {
        let i = t || 75;
        return e?.qualities?.length
          ? e.qualities.reduce(
              (t, e) => (Math.abs(e - i) < Math.abs(t - i) ? e : t),
              0,
            )
          : i;
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "findClosestQuality", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }));
    },
    20754: (t, e, i) => {
      i.d(e, { E: () => o });
      var n = i(41720),
        s = i(69628),
        r = i(8428);
      let a = {
        decay: n.B,
        inertia: n.B,
        tween: s.i,
        keyframes: s.i,
        spring: r.o,
      };
      function o(t) {
        "string" == typeof t.type && (t.type = a[t.type]);
      }
    },
    21172: (t, e, i) => {
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }));
      let n = i(12115);
      function s(t, e) {
        let i = (0, n.useRef)(null),
          s = (0, n.useRef)(null);
        return (0, n.useCallback)(
          (n) => {
            if (null === n) {
              let t = i.current;
              t && ((i.current = null), t());
              let e = s.current;
              e && ((s.current = null), e());
            } else (t && (i.current = r(t, n)), e && (s.current = r(e, n)));
          },
          [t, e],
        );
      }
      function r(t, e) {
        if ("function" != typeof t)
          return (
            (t.current = e),
            () => {
              t.current = null;
            }
          );
        {
          let i = t(e);
          return "function" == typeof i ? i : () => t(null);
        }
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    21620: (t, e, i) => {
      i.d(e, { S: () => n });
      let n = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    },
    21649: (t, e, i) => {
      i.d(e, { G: () => h });
      var n = i(28153),
        s = i(72025),
        r = i(34017),
        a = i(5556),
        o = i(18844),
        l = i(94712),
        u = i(86075);
      function h(t, e, { clamp: i = !0, ease: d, mixer: c } = {}) {
        let p = t.length;
        if (
          ((0, a.V)(
            p === e.length,
            "Both input and output ranges must be the same length",
            "range-length",
          ),
          1 === p)
        )
          return () => e[0];
        if (2 === p && e[0] === e[1]) return () => e[1];
        let m = t[0] === t[1];
        t[0] > t[p - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let f = (function (t, e, i) {
            let a = [],
              o = i || n.W.mix || u.j,
              l = t.length - 1;
            for (let i = 0; i < l; i++) {
              let n = o(t[i], t[i + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[i] || s.l : e;
                n = (0, r.F)(t, n);
              }
              a.push(n);
            }
            return a;
          })(e, d, c),
          g = f.length,
          v = (i) => {
            if (m && i < t[0]) return e[0];
            let n = 0;
            if (g > 1) for (; n < t.length - 2 && !(i < t[n + 1]); n++);
            let s = (0, o.q)(t[n], t[n + 1], i);
            return f[n](s);
          };
        return i ? (e) => v((0, l.q)(t[0], t[p - 1], e)) : v;
      }
    },
    22185: (t, e, i) => {
      i.d(e, { _: () => m });
      var n = i(5469),
        s = i(75319),
        r = i(27933),
        a = i(9247),
        o = i(64124),
        l = i(99031),
        u = i(72252),
        h = i(37700);
      function d(t, e, { delay: i = 0, transitionOverride: n, type: c } = {}) {
        let {
          transition: p = t.getDefaultTransition(),
          transitionEnd: m,
          ...f
        } = e;
        n && (p = n);
        let g = [],
          v = c && t.animationState && t.animationState.getState()[c];
        for (let e in f) {
          let n = t.getValue(e, t.latestValues[e] ?? null),
            o = f[e];
          if (
            void 0 === o ||
            (v &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return ((e[i] = !1), n);
              })(v, e))
          )
            continue;
          let d = { delay: i, ...(0, s.r)(p || {}, e) },
            c = n.get();
          if (
            void 0 !== c &&
            !n.isAnimating &&
            !Array.isArray(o) &&
            o === c &&
            !d.velocity
          )
            continue;
          let m = !1;
          if (window.MotionHandoffAnimation) {
            let i = (0, u.P)(t);
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, r.Gt);
              null !== t && ((d.startTime = t), (m = !0));
            }
          }
          ((0, l.g)(t, e),
            n.start(
              (0, h.f)(
                e,
                n,
                o,
                t.shouldReduceMotion && a.$.has(e) ? { type: !1 } : d,
                t,
                m,
              ),
            ));
          let y = n.animation;
          y && g.push(y);
        }
        return (
          m &&
            Promise.all(g).then(() => {
              r.Gt.update(() => {
                m && (0, o.U)(t, m);
              });
            }),
          g
        );
      }
      var c = i(15680);
      function p(t, e, i = {}) {
        let s = (0, n.K)(
            t,
            e,
            "exit" === i.type ? t.presenceContext?.custom : void 0,
          ),
          { transition: r = t.getDefaultTransition() || {} } = s || {};
        i.transitionOverride && (r = i.transitionOverride);
        let a = s ? () => Promise.all(d(t, s, i)) : () => Promise.resolve(),
          o =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: s = 0,
                    staggerChildren: a,
                    staggerDirection: o,
                  } = r;
                  return (function (t, e, i = 0, n = 0, s = 0, r = 1, a) {
                    let o = [];
                    for (let l of t.variantChildren)
                      (l.notify("AnimationStart", e),
                        o.push(
                          p(l, e, {
                            ...a,
                            delay:
                              i +
                              ("function" == typeof n ? 0 : n) +
                              (0, c.L)(t.variantChildren, l, n, s, r),
                          }).then(() => l.notify("AnimationComplete", e)),
                        ));
                    return Promise.all(o);
                  })(t, e, n, s, a, o, i);
                }
              : () => Promise.resolve(),
          { when: l } = r;
        if (!l) return Promise.all([a(), o(i.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [a, o] : [o, a];
          return t().then(() => e());
        }
      }
      function m(t, e, i = {}) {
        let s;
        if ((t.notify("AnimationStart", e), Array.isArray(e)))
          s = Promise.all(e.map((e) => p(t, e, i)));
        else if ("string" == typeof e) s = p(t, e, i);
        else {
          let r = "function" == typeof e ? (0, n.K)(t, e, i.custom) : e;
          s = Promise.all(d(t, r, i));
        }
        return s.then(() => {
          t.notify("AnimationComplete", e);
        });
      }
    },
    24846: (t, e, i) => {
      i.d(e, { B: () => n });
      let n = "undefined" != typeof window;
    },
    24866: (t, e, i) => {
      i.d(e, { Q: () => n });
      let n = (0, i(12115).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    25505: (t, e, i) => {
      i.d(e, { A: () => r });
      var n = i(72025);
      let s = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function r(t, e, i, r) {
        return t === e && i === r
          ? n.l
          : (n) =>
              0 === n || 1 === n
                ? n
                : s(
                    (function (t, e, i, n, r) {
                      let a,
                        o,
                        l = 0;
                      do
                        (a = s((o = e + (i - e) / 2), n, r) - t) > 0
                          ? (i = o)
                          : (e = o);
                      while (Math.abs(a) > 1e-7 && ++l < 12);
                      return o;
                    })(n, 0, 1, t, i),
                    e,
                    r,
                  );
      }
    },
    25903: (t, e, i) => {
      i.d(e, { b: () => s });
      var n = i(1406);
      let s = (t) =>
        (t *= 2) < 1
          ? 0.5 * (0, n.dg)(t)
          : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
    },
    25952: (t, e, i) => {
      i.d(e, { U: () => n, f: () => s });
      let n = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        s = new Set(n);
    },
    27933: (t, e, i) => {
      i.d(e, { Gt: () => s, PP: () => o, WG: () => r, uv: () => a });
      var n = i(72025);
      let {
        schedule: s,
        cancel: r,
        state: a,
        steps: o,
      } = (0, i(57835).I)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : n.l,
        !0,
      );
    },
    27994: (t, e, i) => {
      i.d(e, { B: () => l });
      var n = i(94712),
        s = i(49637),
        r = i(71939),
        a = i(82163);
      let o = { ...s.ai, transform: (t) => Math.round((0, n.q)(0, 255, t)) },
        l = {
          test: (0, a.$)("rgb", "red"),
          parse: (0, a.q)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            o.transform(t) +
            ", " +
            o.transform(e) +
            ", " +
            o.transform(i) +
            ", " +
            (0, r.a)(s.X4.transform(n)) +
            ")",
        };
    },
    28153: (t, e, i) => {
      i.d(e, { W: () => n });
      let n = {};
    },
    28819: (t, e, i) => {
      i.d(e, { M: () => s });
      var n = i(12115);
      function s(t) {
        let e = (0, n.useRef)(null);
        return (null === e.current && (e.current = t()), e.current);
      }
    },
    30281: (t, e, i) => {
      i.d(e, { u: () => s });
      var n = i(27994);
      let s = {
        test: (0, i(82163).$)("#"),
        parse: function (t) {
          let e = "",
            i = "",
            n = "",
            s = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (i = t.substring(3, 5)),
                (n = t.substring(5, 7)),
                (s = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (i = t.substring(2, 3)),
                (n = t.substring(3, 4)),
                (s = t.substring(4, 5)),
                (e += e),
                (i += i),
                (n += n),
                (s += s)),
            {
              red: parseInt(e, 16),
              green: parseInt(i, 16),
              blue: parseInt(n, 16),
              alpha: s ? parseInt(s, 16) / 255 : 1,
            }
          );
        },
        transform: n.B.transform,
      };
    },
    31574: (t, e, i) => {
      i.d(e, { P: () => nf });
      var n,
        s = i(12115),
        r = i(25952),
        a = i(11698),
        o = i(39896);
      function l({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      var u = i(56260);
      function h(t) {
        return void 0 === t || 1 === t;
      }
      function d({ scale: t, scaleX: e, scaleY: i }) {
        return !h(t) || !h(e) || !h(i);
      }
      function c(t) {
        return (
          d(t) ||
          p(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function p(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function m(t, e, i, n, s) {
        return (void 0 !== s && (t = n + s * (t - n)), n + i * (t - n) + e);
      }
      function f(t, e = 0, i = 1, n, s) {
        ((t.min = m(t.min, e, i, n, s)), (t.max = m(t.max, e, i, n, s)));
      }
      function g(t, { x: e, y: i }) {
        (f(t.x, e.translate, e.scale, e.originPoint),
          f(t.y, i.translate, i.scale, i.originPoint));
      }
      function v(t, e) {
        ((t.min = t.min + e), (t.max = t.max + e));
      }
      function y(t, e, i, n, s = 0.5) {
        let r = (0, u.k)(t.min, t.max, s);
        f(t, e, i, r, n);
      }
      function x(t, e) {
        (y(t.x, e.x, e.scaleX, e.scale, e.originX),
          y(t.y, e.y, e.scaleY, e.scale, e.originY));
      }
      function b(t, e) {
        return l(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e),
        );
      }
      var w = i(9247),
        P = i(49637),
        T = i(11048);
      let S = (t) => (e) => e.test(t),
        A = [
          P.ai,
          T.px,
          T.KN,
          T.uj,
          T.vw,
          T.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        E = (t) => A.find(S(t));
      var M = i(5556);
      let C = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var V = i(4132),
        k = i(83399),
        j = i(21620);
      let D = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function R(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(j.S) || [];
        if (!n) return t;
        let s = i.replace(n, ""),
          r = +!!D.has(e);
        return (n !== i && (r *= 100), e + "(" + r + s + ")");
      }
      let O = /\b([a-z-]*)\(.*?\)/gu,
        L = {
          ...k.f,
          getAnimatableNone: (t) => {
            let e = t.match(O);
            return e ? e.map(R).join(" ") : t;
          },
        };
      var F = i(77054);
      let B = { ...P.ai, transform: Math.round },
        I = {
          rotate: T.uj,
          rotateX: T.uj,
          rotateY: T.uj,
          rotateZ: T.uj,
          scale: P.hs,
          scaleX: P.hs,
          scaleY: P.hs,
          scaleZ: P.hs,
          skew: T.uj,
          skewX: T.uj,
          skewY: T.uj,
          distance: T.px,
          translateX: T.px,
          translateY: T.px,
          translateZ: T.px,
          x: T.px,
          y: T.px,
          z: T.px,
          perspective: T.px,
          transformPerspective: T.px,
          opacity: P.X4,
          originX: T.gQ,
          originY: T.gQ,
          originZ: T.px,
        },
        _ = {
          borderWidth: T.px,
          borderTopWidth: T.px,
          borderRightWidth: T.px,
          borderBottomWidth: T.px,
          borderLeftWidth: T.px,
          borderRadius: T.px,
          radius: T.px,
          borderTopLeftRadius: T.px,
          borderTopRightRadius: T.px,
          borderBottomRightRadius: T.px,
          borderBottomLeftRadius: T.px,
          width: T.px,
          maxWidth: T.px,
          height: T.px,
          maxHeight: T.px,
          top: T.px,
          right: T.px,
          bottom: T.px,
          left: T.px,
          padding: T.px,
          paddingTop: T.px,
          paddingRight: T.px,
          paddingBottom: T.px,
          paddingLeft: T.px,
          margin: T.px,
          marginTop: T.px,
          marginRight: T.px,
          marginBottom: T.px,
          marginLeft: T.px,
          backgroundPositionX: T.px,
          backgroundPositionY: T.px,
          ...I,
          zIndex: B,
          fillOpacity: P.X4,
          strokeOpacity: P.X4,
          numOctaves: B,
        },
        U = {
          ..._,
          color: F.y,
          backgroundColor: F.y,
          outlineColor: F.y,
          fill: F.y,
          stroke: F.y,
          borderColor: F.y,
          borderTopColor: F.y,
          borderRightColor: F.y,
          borderBottomColor: F.y,
          borderLeftColor: F.y,
          filter: L,
          WebkitFilter: L,
        },
        $ = (t) => U[t];
      function N(t, e) {
        let i = $(t);
        return (
          i !== L && (i = k.f),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let W = new Set(["auto", "none", "0"]);
      var z = i(32766);
      class q extends V.h {
        constructor(t, e, i, n, s) {
          super(t, e, i, n, s, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            if ("string" == typeof n && ((n = n.trim()), (0, o.p)(n))) {
              let s = (function t(e, i, n = 1) {
                (0, M.V)(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
                  "max-css-var-depth",
                );
                let [s, r] = (function (t) {
                  let e = C.exec(t);
                  if (!e) return [,];
                  let [, i, n, s] = e;
                  return [`--${i ?? n}`, s];
                })(e);
                if (!s) return;
                let a = window.getComputedStyle(i).getPropertyValue(s);
                if (a) {
                  let t = a.trim();
                  return /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
                    ? parseFloat(t)
                    : t;
                }
                return (0, o.p)(r) ? t(r, i, n + 1) : r;
              })(n, e.current);
              (void 0 !== s && (t[i] = s),
                i === t.length - 1 && (this.finalKeyframe = n));
            }
          }
          if ((this.resolveNoneKeyframes(), !w.$.has(i) || 2 !== t.length))
            return;
          let [n, s] = t,
            r = E(n),
            a = E(s);
          if (r !== a)
            if ((0, z.E4)(r) && (0, z.E4)(a))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else z.Hr[i] && (this.needsMeasurement = !0);
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++)
            (null === t[e] ||
              (function (t) {
                if ("number" == typeof t) return 0 === t;
                if (null === t) return !0;
                return "none" === t || "0" === t || /^0[^.\s]+$/u.test(t);
              })(t[e])) &&
              i.push(e);
          i.length &&
            (function (t, e, i) {
              let n,
                s = 0;
              for (; s < t.length && !n; ) {
                let e = t[s];
                ("string" == typeof e &&
                  !W.has(e) &&
                  (0, k.V)(e).values.length &&
                  (n = t[s]),
                  s++);
              }
              if (n && i) for (let s of e) t[s] = N(i, n);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          ("height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = z.Hr[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current),
            )),
            (e[0] = this.measuredOrigin));
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(i, n).jump(n, !1);
        }
        measureEndState() {
          let { element: t, name: e, unresolvedKeyframes: i } = this;
          if (!t || !t.current) return;
          let n = t.getValue(e);
          n && n.jump(this.measuredOrigin, !1);
          let s = i.length - 1,
            r = i[s];
          ((i[s] = z.Hr[e](
            t.measureViewportBox(),
            window.getComputedStyle(t.current),
          )),
            null !== r &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = r),
            this.removedTransforms?.length &&
              this.removedTransforms.forEach(([e, i]) => {
                t.getValue(e).set(i);
              }),
            this.resolveNoneKeyframes());
        }
      }
      var G = i(51469),
        X = i(37035),
        K = i(27933),
        Y = i(6900);
      let H = [...A, F.y, k.f],
        { schedule: Q } = (0, i(57835).I)(queueMicrotask, !1);
      var Z = i(73852);
      let J = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        tt = {};
      for (let t in J) tt[t] = { isEnabled: (e) => J[t].some((t) => !!e[t]) };
      let te = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        ti = () => ({ x: te(), y: te() }),
        tn = () => ({ min: 0, max: 0 }),
        ts = () => ({ x: tn(), y: tn() });
      var tr = i(24846);
      let ta = { current: null },
        to = { current: !1 },
        tl = new WeakMap();
      function tu(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      function th(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      let td = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        tc = ["initial", ...td];
      function tp(t) {
        return tu(t.animate) || tc.some((e) => th(t[e]));
      }
      function tm(t) {
        return !!(tp(t) || t.variants);
      }
      var tf = i(62537);
      let tg = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ];
      class tv {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: s,
            visualState: r,
          },
          a = {},
        ) {
          ((this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = V.h),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection,
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = X.k.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t),
                K.Gt.render(this.render, !1, !0));
            }));
          const { latestValues: o, renderState: l } = r;
          ((this.latestValues = o),
            (this.baseTarget = { ...o }),
            (this.initialValues = e.initial ? { ...o } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = a),
            (this.blockInitialAnimation = !!s),
            (this.isControllingVariants = tp(e)),
            (this.isVariantNode = tm(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current)));
          const { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this,
          );
          for (const t in h) {
            const e = h[t];
            void 0 !== o[t] && (0, G.S)(e) && e.set(o[t]);
          }
        }
        mount(t) {
          ((this.current = t),
            tl.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            to.current ||
              (function () {
                if (((to.current = !0), tr.B))
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (ta.current = t.matches);
                    (t.addEventListener("change", e), e());
                  } else ta.current = !1;
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || ta.current)),
            this.parent?.addChild(this),
            this.update(this.props, this.presenceContext));
        }
        unmount() {
          for (let t in (this.projection && this.projection.unmount(),
          (0, K.WG)(this.notifyUpdate),
          (0, K.WG)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent?.removeChild(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        addChild(t) {
          (this.children.add(t),
            this.enteringChildren ?? (this.enteringChildren = new Set()),
            this.enteringChildren.add(t));
        }
        removeChild(t) {
          (this.children.delete(t),
            this.enteringChildren && this.enteringChildren.delete(t));
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let n = r.f.has(t);
          n && this.onBindTransform && this.onBindTransform();
          let s = e.on("change", (e) => {
            ((this.latestValues[t] = e),
              this.props.onUpdate && K.Gt.preRender(this.notifyUpdate),
              n && this.projection && (this.projection.isTransformDirty = !0),
              this.scheduleRender());
          });
          (window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              (s(), i && i(), e.owner && e.stop());
            }));
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in tt) {
            let e = tt[t];
            if (!e) continue;
            let { isEnabled: i, Feature: n } = e;
            if (
              (!this.features[t] &&
                n &&
                i(this.props) &&
                (this.features[t] = new n(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : ts();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          ((t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e));
          for (let e = 0; e < tg.length; e++) {
            let i = tg[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          ((this.prevMotionValues = (function (t, e, i) {
            for (let n in e) {
              let s = e[n],
                r = i[n];
              if ((0, G.S)(s)) t.addValue(n, s);
              else if ((0, G.S)(r)) t.addValue(n, (0, Y.OQ)(s, { owner: t }));
              else if (r !== s)
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  !0 === e.liveStyle ? e.jump(s) : e.hasAnimated || e.set(s);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, (0, Y.OQ)(void 0 !== e ? e : s, { owner: t }));
                }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues,
          )),
            this.handleChildMotionValue && this.handleChildMotionValue());
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
              ? this.parent.getClosestVariantNode()
              : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          (e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState));
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = (0, Y.OQ)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          let i =
            void 0 === this.latestValues[t] && this.current
              ? (this.getBaseTargetFromProps(this.props, t) ??
                this.readValueFromInstance(this.current, t, this.options))
              : this.latestValues[t];
          if (null != i) {
            let n, s;
            if (
              "string" == typeof i &&
              ((n = i),
              /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n) ||
                ((s = i), /^0[^.\s]+$/u.test(s)))
            )
              i = parseFloat(i);
            else {
              let n;
              ((n = i), !H.find(S(n)) && k.f.test(e) && (i = N(t, e)));
            }
            this.setBaseTarget(t, (0, G.S)(i) ? i.get() : i);
          }
          return (0, G.S)(i) ? i.get() : i;
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          let e,
            { initial: i } = this.props;
          if ("string" == typeof i || "object" == typeof i) {
            let n = (0, tf.a)(this.props, i, this.presenceContext?.custom);
            n && (e = n[t]);
          }
          if (i && void 0 !== e) return e;
          let n = this.getBaseTargetFromProps(this.props, t);
          return void 0 === n || (0, G.S)(n)
            ? void 0 !== this.initialValues[t] && void 0 === e
              ? void 0
              : this.baseTarget[t]
            : n;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new Z.v()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
        scheduleRenderMicrotask() {
          Q.render(this.render);
        }
      }
      class ty extends tv {
        constructor() {
          (super(...arguments), (this.KeyframeResolver = q));
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          (delete e[t], delete i[t]);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, G.S)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      let tx = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        tb = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        tw = r.U.length;
      function tP(t, e, i) {
        let { style: n, vars: s, transformOrigin: a } = t,
          l = !1,
          u = !1;
        for (let t in e) {
          let i = e[t];
          if (r.f.has(t)) {
            l = !0;
            continue;
          }
          if ((0, o.j)(t)) {
            s[t] = i;
            continue;
          }
          {
            let e = tx(i, _[t]);
            t.startsWith("origin") ? ((u = !0), (a[t] = e)) : (n[t] = e);
          }
        }
        if (
          (!e.transform &&
            (l || i
              ? (n.transform = (function (t, e, i) {
                  let n = "",
                    s = !0;
                  for (let a = 0; a < tw; a++) {
                    let o = r.U[a],
                      l = t[o];
                    if (void 0 === l) continue;
                    let u = !0;
                    if (
                      !(u =
                        "number" == typeof l
                          ? l === +!!o.startsWith("scale")
                          : 0 === parseFloat(l)) ||
                      i
                    ) {
                      let t = tx(l, _[o]);
                      if (!u) {
                        s = !1;
                        let e = tb[o] || o;
                        n += `${e}(${t}) `;
                      }
                      i && (e[o] = t);
                    }
                  }
                  return (
                    (n = n.trim()),
                    i ? (n = i(e, s ? "" : n)) : s && (n = "none"),
                    n
                  );
                })(e, t.transform, i))
              : n.transform && (n.transform = "none")),
          u)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = a;
          n.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      function tT(t, { style: e, vars: i }, n, s) {
        let r,
          a = t.style;
        for (r in e) a[r] = e[r];
        for (r in (s?.applyProjectionStyles(a, n), i)) a.setProperty(r, i[r]);
      }
      let tS = {};
      function tA(t, { layout: e, layoutId: i }) {
        return (
          r.f.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!tS[t] || "opacity" === t))
        );
      }
      function tE(t, e, i) {
        let { style: n } = t,
          s = {};
        for (let r in n)
          ((0, G.S)(n[r]) ||
            (e.style && (0, G.S)(e.style[r])) ||
            tA(r, t) ||
            i?.getValue(r)?.liveStyle !== void 0) &&
            (s[r] = n[r]);
        return s;
      }
      class tM extends ty {
        constructor() {
          (super(...arguments),
            (this.type = "html"),
            (this.renderInstance = tT));
        }
        readValueFromInstance(t, e) {
          if (r.f.has(e))
            return this.projection?.isProjecting
              ? (0, a.zs)(e)
              : (0, a.Ib)(t, e);
          {
            let i = window.getComputedStyle(t),
              n = ((0, o.j)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return b(t, e);
        }
        build(t, e, i) {
          tP(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return tE(t, e, i);
        }
      }
      var tC = i(57044);
      let tV = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        tk = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function tj(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: n,
          pathLength: s,
          pathSpacing: r = 1,
          pathOffset: a = 0,
          ...o
        },
        l,
        u,
        h,
      ) {
        if ((tP(t, o, u), l)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        ((t.attrs = t.style), (t.style = {}));
        let { attrs: d, style: c } = t;
        (d.transform && ((c.transform = d.transform), delete d.transform),
          (c.transform || d.transformOrigin) &&
            ((c.transformOrigin = d.transformOrigin ?? "50% 50%"),
            delete d.transformOrigin),
          c.transform &&
            ((c.transformBox = h?.transformBox ?? "fill-box"),
            delete d.transformBox),
          void 0 !== e && (d.x = e),
          void 0 !== i && (d.y = i),
          void 0 !== n && (d.scale = n),
          void 0 !== s &&
            (function (t, e, i = 1, n = 0, s = !0) {
              t.pathLength = 1;
              let r = s ? tV : tk;
              t[r.offset] = T.px.transform(-n);
              let a = T.px.transform(e),
                o = T.px.transform(i);
              t[r.array] = `${a} ${o}`;
            })(d, s, r, a, !1));
      }
      let tD = new Set([
          "baseFrequency",
          "diffuseConstant",
          "kernelMatrix",
          "kernelUnitLength",
          "keySplines",
          "keyTimes",
          "limitingConeAngle",
          "markerHeight",
          "markerWidth",
          "numOctaves",
          "targetX",
          "targetY",
          "surfaceScale",
          "specularConstant",
          "specularExponent",
          "stdDeviation",
          "tableValues",
          "viewBox",
          "gradientTransform",
          "pathLength",
          "startOffset",
          "textLength",
          "lengthAdjust",
        ]),
        tR = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function tO(t, e, i) {
        let n = tE(t, e, i);
        for (let i in t)
          ((0, G.S)(t[i]) || (0, G.S)(e[i])) &&
            (n[
              -1 !== r.U.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return n;
      }
      class tL extends ty {
        constructor() {
          (super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = ts));
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (r.f.has(e)) {
            let t = $(e);
            return (t && t.default) || 0;
          }
          return ((e = tD.has(e) ? e : (0, tC.I)(e)), t.getAttribute(e));
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return tO(t, e, i);
        }
        build(t, e, i) {
          tj(t, e, this.isSVGTag, i.transformTemplate, i.style);
        }
        renderInstance(t, e, i, n) {
          for (let i in (tT(t, e, void 0, n), e.attrs))
            t.setAttribute(tD.has(i) ? i : (0, tC.I)(i), e.attrs[i]);
        }
        mount(t) {
          ((this.isSVGTag = tR(t.tagName)), super.mount(t));
        }
      }
      let tF = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function tB(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (tF.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      var tI = i(95155),
        t_ = i(39551);
      let tU = (0, s.createContext)({ strict: !1 });
      var t$ = i(24866);
      let tN = (0, s.createContext)({});
      function tW(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let tz = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function tq(t, e, i) {
        for (let n in e) (0, G.S)(e[n]) || tA(n, i) || (t[n] = e[n]);
      }
      let tG = () => ({ ...tz(), attrs: {} }),
        tX = new Set([
          "animate",
          "exit",
          "variants",
          "initial",
          "style",
          "values",
          "variants",
          "transition",
          "transformTemplate",
          "custom",
          "inherit",
          "onBeforeLayoutMeasure",
          "onAnimationStart",
          "onAnimationComplete",
          "onUpdate",
          "onDragStart",
          "onDrag",
          "onDragEnd",
          "onMeasureDragConstraints",
          "onDirectionLock",
          "onDragTransitionEnd",
          "_dragX",
          "_dragY",
          "onHoverStart",
          "onHoverEnd",
          "onViewportEnter",
          "onViewportLeave",
          "globalTapTarget",
          "ignoreStrict",
          "viewport",
        ]);
      function tK(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          tX.has(t)
        );
      }
      let tY = (t) => !tK(t);
      try {
        ((n = require("@emotion/is-prop-valid").default),
          "function" == typeof n &&
            (tY = (t) => (t.startsWith("on") ? !tK(t) : n(t))));
      } catch {}
      var tH = i(15131),
        tQ = i(28819);
      function tZ(t) {
        return (0, G.S)(t) ? t.get() : t;
      }
      let tJ = (t) => (e, i) => {
          let n = (0, s.useContext)(tN),
            r = (0, s.useContext)(tH.t),
            a = () =>
              (function (
                { scrapeMotionValuesFromProps: t, createRenderState: e },
                i,
                n,
                s,
              ) {
                return {
                  latestValues: (function (t, e, i, n) {
                    let s = {},
                      r = n(t, {});
                    for (let t in r) s[t] = tZ(r[t]);
                    let { initial: a, animate: o } = t,
                      l = tp(t),
                      u = tm(t);
                    e &&
                      u &&
                      !l &&
                      !1 !== t.inherit &&
                      (void 0 === a && (a = e.initial),
                      void 0 === o && (o = e.animate));
                    let h = !!i && !1 === i.initial,
                      d = (h = h || !1 === a) ? o : a;
                    if (d && "boolean" != typeof d && !tu(d)) {
                      let e = Array.isArray(d) ? d : [d];
                      for (let i = 0; i < e.length; i++) {
                        let n = (0, tf.a)(t, e[i]);
                        if (n) {
                          let { transitionEnd: t, transition: e, ...i } = n;
                          for (let t in i) {
                            let e = i[t];
                            if (Array.isArray(e)) {
                              let t = h ? e.length - 1 : 0;
                              e = e[t];
                            }
                            null !== e && (s[t] = e);
                          }
                          for (let e in t) s[e] = t[e];
                        }
                      }
                    }
                    return s;
                  })(i, n, s, t),
                  renderState: e(),
                };
              })(t, e, n, r);
          return i ? a() : (0, tQ.M)(a);
        },
        t0 = tJ({ scrapeMotionValuesFromProps: tE, createRenderState: tz }),
        t1 = tJ({ scrapeMotionValuesFromProps: tO, createRenderState: tG }),
        t2 = Symbol.for("motionComponentSymbol");
      function t5(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      var t3 = i(88618);
      let t4 = (0, s.createContext)({});
      var t6 = i(4524);
      function t9(t, { forwardMotionProps: e = !1 } = {}, i, n) {
        i &&
          (function (t) {
            for (let e in t) tt[e] = { ...tt[e], ...t[e] };
          })(i);
        let r = tB(t) ? t1 : t0;
        function a(i, a) {
          var o;
          let l,
            u = {
              ...(0, s.useContext)(t$.Q),
              ...i,
              layoutId: (function ({ layoutId: t }) {
                let e = (0, s.useContext)(t_.L).id;
                return e && void 0 !== t ? e + "-" + t : t;
              })(i),
            },
            { isStatic: h } = u,
            d = (function (t) {
              let { initial: e, animate: i } = (function (t, e) {
                if (tp(t)) {
                  let { initial: e, animate: i } = t;
                  return {
                    initial: !1 === e || th(e) ? e : void 0,
                    animate: th(i) ? i : void 0,
                  };
                }
                return !1 !== t.inherit ? e : {};
              })(t, (0, s.useContext)(tN));
              return (0, s.useMemo)(
                () => ({ initial: e, animate: i }),
                [tW(e), tW(i)],
              );
            })(i),
            c = r(i, h);
          if (!h && tr.B) {
            (0, s.useContext)(tU).strict;
            let e = (function (t) {
              let { drag: e, layout: i } = tt;
              if (!e && !i) return {};
              let n = { ...e, ...i };
              return {
                MeasureLayout:
                  e?.isEnabled(t) || i?.isEnabled(t) ? n.MeasureLayout : void 0,
                ProjectionNode: n.ProjectionNode,
              };
            })(u);
            ((l = e.MeasureLayout),
              (d.visualElement = (function (t, e, i, n, r) {
                let { visualElement: a } = (0, s.useContext)(tN),
                  o = (0, s.useContext)(tU),
                  l = (0, s.useContext)(tH.t),
                  u = (0, s.useContext)(t$.Q).reducedMotion,
                  h = (0, s.useRef)(null);
                ((n = n || o.renderer),
                  !h.current &&
                    n &&
                    (h.current = n(t, {
                      visualState: e,
                      parent: a,
                      props: i,
                      presenceContext: l,
                      blockInitialAnimation: !!l && !1 === l.initial,
                      reducedMotionConfig: u,
                    })));
                let d = h.current,
                  c = (0, s.useContext)(t4);
                d &&
                  !d.projection &&
                  r &&
                  ("html" === d.type || "svg" === d.type) &&
                  (function (t, e, i, n) {
                    let {
                      layoutId: s,
                      layout: r,
                      drag: a,
                      dragConstraints: o,
                      layoutScroll: l,
                      layoutRoot: u,
                      layoutCrossfade: h,
                    } = e;
                    ((t.projection = new i(
                      t.latestValues,
                      e["data-framer-portal-id"]
                        ? void 0
                        : (function t(e) {
                            if (e)
                              return !1 !== e.options.allowProjection
                                ? e.projection
                                : t(e.parent);
                          })(t.parent),
                    )),
                      t.projection.setOptions({
                        layoutId: s,
                        layout: r,
                        alwaysMeasureLayout: !!a || (o && t5(o)),
                        visualElement: t,
                        animationType: "string" == typeof r ? r : "both",
                        initialPromotionConfig: n,
                        crossfade: h,
                        layoutScroll: l,
                        layoutRoot: u,
                      }));
                  })(h.current, i, r, c);
                let p = (0, s.useRef)(!1);
                (0, s.useInsertionEffect)(() => {
                  d && p.current && d.update(i, l);
                });
                let m = i[t3.n],
                  f = (0, s.useRef)(
                    !!m &&
                      !window.MotionHandoffIsComplete?.(m) &&
                      window.MotionHasOptimisedAnimation?.(m),
                  );
                return (
                  (0, t6.E)(() => {
                    d &&
                      ((p.current = !0),
                      (window.MotionIsMounted = !0),
                      d.updateFeatures(),
                      d.scheduleRenderMicrotask(),
                      f.current &&
                        d.animationState &&
                        d.animationState.animateChanges());
                  }),
                  (0, s.useEffect)(() => {
                    d &&
                      (!f.current &&
                        d.animationState &&
                        d.animationState.animateChanges(),
                      f.current &&
                        (queueMicrotask(() => {
                          window.MotionHandoffMarkAsComplete?.(m);
                        }),
                        (f.current = !1)),
                      (d.enteringChildren = void 0));
                  }),
                  d
                );
              })(t, c, u, n, e.ProjectionNode)));
          }
          return (0, tI.jsxs)(tN.Provider, {
            value: d,
            children: [
              l && d.visualElement
                ? (0, tI.jsx)(l, { visualElement: d.visualElement, ...u })
                : null,
              (function (t, e, i, { latestValues: n }, r, a = !1) {
                let o = (
                    tB(t)
                      ? function (t, e, i, n) {
                          let r = (0, s.useMemo)(() => {
                            let i = tG();
                            return (
                              tj(i, e, tR(n), t.transformTemplate, t.style),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            (tq(e, t.style, t),
                              (r.style = { ...e, ...r.style }));
                          }
                          return r;
                        }
                      : function (t, e) {
                          let i,
                            n,
                            r = {},
                            a =
                              ((i = t.style || {}),
                              tq((n = {}), i, t),
                              Object.assign(
                                n,
                                (function ({ transformTemplate: t }, e) {
                                  return (0, s.useMemo)(() => {
                                    let i = tz();
                                    return (
                                      tP(i, e, t),
                                      Object.assign({}, i.vars, i.style)
                                    );
                                  }, [e]);
                                })(t, e),
                              ),
                              n);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((r.draggable = !1),
                              (a.userSelect =
                                a.WebkitUserSelect =
                                a.WebkitTouchCallout =
                                  "none"),
                              (a.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (r.tabIndex = 0),
                            (r.style = a),
                            r
                          );
                        }
                  )(e, n, r, t),
                  l = (function (t, e, i) {
                    let n = {};
                    for (let s in t)
                      ("values" !== s || "object" != typeof t.values) &&
                        (tY(s) ||
                          (!0 === i && tK(s)) ||
                          (!e && !tK(s)) ||
                          (t.draggable && s.startsWith("onDrag"))) &&
                        (n[s] = t[s]);
                    return n;
                  })(e, "string" == typeof t, a),
                  u = t !== s.Fragment ? { ...l, ...o, ref: i } : {},
                  { children: h } = e,
                  d = (0, s.useMemo)(() => ((0, G.S)(h) ? h.get() : h), [h]);
                return (0, s.createElement)(t, { ...u, children: d });
              })(
                t,
                i,
                ((o = d.visualElement),
                (0, s.useCallback)(
                  (t) => {
                    (t && c.onMount && c.onMount(t),
                      o && (t ? o.mount(t) : o.unmount()),
                      a &&
                        ("function" == typeof a
                          ? a(t)
                          : t5(a) && (a.current = t)));
                  },
                  [o],
                )),
                c,
                h,
                e,
              ),
            ],
          });
        }
        a.displayName = `motion.${"string" == typeof t ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
        let o = (0, s.forwardRef)(a);
        return ((o[t2] = t), o);
      }
      var t7 = i(22185),
        t8 = i(15680),
        et = i(90516);
      function ee(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      let ei = tc.length;
      var en = i(5469);
      let es = [...td].reverse(),
        er = td.length;
      function ea(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function eo() {
        return {
          animate: ea(!0),
          whileInView: ea(),
          whileHover: ea(),
          whileTap: ea(),
          whileDrag: ea(),
          whileFocus: ea(),
          exit: ea(),
        };
      }
      class el {
        constructor(t) {
          ((this.isMounted = !1), (this.node = t));
        }
        update() {}
      }
      class eu extends el {
        constructor(t) {
          (super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (0, t7._)(t, e, i),
                      ),
                    ),
                  i = eo(),
                  n = !0,
                  s = (e) => (i, n) => {
                    let s = (0, en.K)(
                      t,
                      n,
                      "exit" === e ? t.presenceContext?.custom : void 0,
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...n } = s;
                      i = { ...i, ...n, ...e };
                    }
                    return i;
                  };
                function r(r) {
                  let { props: a } = t,
                    o =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let i = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (i.initial = e.props.initial),
                            i
                          );
                        }
                        let i = {};
                        for (let t = 0; t < ei; t++) {
                          let n = tc[t],
                            s = e.props[n];
                          (th(s) || !1 === s) && (i[n] = s);
                        }
                        return i;
                      })(t.parent) || {},
                    l = [],
                    u = new Set(),
                    h = {},
                    d = 1 / 0;
                  for (let e = 0; e < er; e++) {
                    var c, p;
                    let m = es[e],
                      f = i[m],
                      g = void 0 !== a[m] ? a[m] : o[m],
                      v = th(g),
                      y = m === r ? f.isActive : null;
                    !1 === y && (d = e);
                    let x = g === o[m] && g !== a[m] && v;
                    if (
                      (x && n && t.manuallyAnimateOnMount && (x = !1),
                      (f.protectedKeys = { ...h }),
                      (!f.isActive && null === y) ||
                        (!g && !f.prevProp) ||
                        tu(g) ||
                        "boolean" == typeof g)
                    )
                      continue;
                    let b =
                        ((c = f.prevProp),
                        "string" == typeof (p = g)
                          ? p !== c
                          : !!Array.isArray(p) && !ee(p, c)),
                      w =
                        b || (m === r && f.isActive && !x && v) || (e > d && v),
                      P = !1,
                      T = Array.isArray(g) ? g : [g],
                      S = T.reduce(s(m), {});
                    !1 === y && (S = {});
                    let { prevResolvedValues: A = {} } = f,
                      E = { ...A, ...S },
                      M = (e) => {
                        ((w = !0),
                          u.has(e) && ((P = !0), u.delete(e)),
                          (f.needsAnimating[e] = !0));
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in E) {
                      let e = S[t],
                        i = A[t];
                      if (!h.hasOwnProperty(t))
                        ((0, et.p)(e) && (0, et.p)(i) ? ee(e, i) : e === i)
                          ? void 0 !== e && u.has(t)
                            ? M(t)
                            : (f.protectedKeys[t] = !0)
                          : null != e
                            ? M(t)
                            : u.add(t);
                    }
                    ((f.prevProp = g),
                      (f.prevResolvedValues = S),
                      f.isActive && (h = { ...h, ...S }),
                      n && t.blockInitialAnimation && (w = !1));
                    let C = x && b,
                      V = !C || P;
                    w &&
                      V &&
                      l.push(
                        ...T.map((e) => {
                          let i = { type: m };
                          if (
                            "string" == typeof e &&
                            n &&
                            !C &&
                            t.manuallyAnimateOnMount &&
                            t.parent
                          ) {
                            let { parent: n } = t,
                              s = (0, en.K)(n, e);
                            if (n.enteringChildren && s) {
                              let { delayChildren: e } = s.transition || {};
                              i.delay = (0, t8.L)(n.enteringChildren, t, e);
                            }
                          }
                          return { animation: e, options: i };
                        }),
                      );
                  }
                  if (u.size) {
                    let e = {};
                    if ("boolean" != typeof a.initial) {
                      let i = (0, en.K)(
                        t,
                        Array.isArray(a.initial) ? a.initial[0] : a.initial,
                      );
                      i && i.transition && (e.transition = i.transition);
                    }
                    (u.forEach((i) => {
                      let n = t.getBaseTarget(i),
                        s = t.getValue(i);
                      (s && (s.liveStyle = !0), (e[i] = n ?? null));
                    }),
                      l.push({ animation: e }));
                  }
                  let m = !!l.length;
                  return (
                    n &&
                      (!1 === a.initial || a.initial === a.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (m = !1),
                    (n = !1),
                    m ? e(l) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: r,
                  setActive: function (e, n) {
                    if (i[e].isActive === n) return Promise.resolve();
                    (t.variantChildren?.forEach((t) =>
                      t.animationState?.setActive(e, n),
                    ),
                      (i[e].isActive = n));
                    let s = r(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    i = eo();
                  },
                };
              })(t)));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          tu(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          (this.node.animationState.reset(), this.unmountControls?.());
        }
      }
      let eh = 0;
      class ed extends el {
        constructor() {
          (super(...arguments), (this.id = eh++));
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let n = this.node.animationState.setActive("exit", !t);
          e &&
            !t &&
            n.then(() => {
              e(this.id);
            });
        }
        mount() {
          let { register: t, onExitComplete: e } =
            this.node.presenceContext || {};
          (e && e(this.id), t && (this.unmount = t(this.id)));
        }
        unmount() {}
      }
      var ec = i(72025);
      let ep = { x: !1, y: !1 };
      var em = i(37700);
      function ef(t, e, i, n = { passive: !0 }) {
        return (t.addEventListener(e, i, n), () => t.removeEventListener(e, i));
      }
      let eg = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function ev(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      function ey(t, e, i, n) {
        return ef(t, e, (t) => eg(t) && i(t, ev(t)), n);
      }
      function ex(t) {
        return t.max - t.min;
      }
      function eb(t, e, i, n = 0.5) {
        ((t.origin = n),
          (t.originPoint = (0, u.k)(e.min, e.max, t.origin)),
          (t.scale = ex(i) / ex(e)),
          (t.translate = (0, u.k)(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0));
      }
      function ew(t, e, i, n) {
        (eb(t.x, e.x, i.x, n ? n.originX : void 0),
          eb(t.y, e.y, i.y, n ? n.originY : void 0));
      }
      function eP(t, e, i) {
        ((t.min = i.min + e.min), (t.max = t.min + ex(e)));
      }
      function eT(t, e, i) {
        ((t.min = e.min - i.min), (t.max = t.min + ex(e)));
      }
      function eS(t, e, i) {
        (eT(t.x, e.x, i.x), eT(t.y, e.y, i.y));
      }
      function eA(t) {
        return [t("x"), t("y")];
      }
      let eE = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      var eM = i(99031),
        eC = i(34017),
        eV = i(38621);
      let ek = (t, e) => Math.abs(t - e);
      class ej {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: n = window,
            dragSnapToOrigin: s = !1,
            distanceThreshold: r = 3,
          } = {},
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let i = eO(this.lastMoveEventInfo, this.history),
                n = null !== this.startEvent,
                s =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(ek(t.x, e.x) ** 2 + ek(t.y, e.y) ** 2) >=
                    this.distanceThreshold);
              if (!n && !s) return;
              let { point: r } = i,
                { timestamp: a } = K.uv;
              this.history.push({ ...r, timestamp: a });
              let { onStart: o, onMove: l } = this.handlers;
              (n ||
                (o && o(this.lastMoveEvent, i),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, i));
            }),
            (this.handlePointerMove = (t, e) => {
              ((this.lastMoveEvent = t),
                (this.lastMoveEventInfo = eD(e, this.transformPagePoint)),
                K.Gt.update(this.updatePoint, !0));
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: n,
                resumeAnimation: s,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && s && s(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let r = eO(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : eD(e, this.transformPagePoint),
                this.history,
              );
              (this.startEvent && i && i(t, r), n && n(t, r));
            }),
            !eg(t))
          )
            return;
          ((this.dragSnapToOrigin = s),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.distanceThreshold = r),
            (this.contextWindow = n || window));
          const a = eD(ev(t), this.transformPagePoint),
            { point: o } = a,
            { timestamp: l } = K.uv;
          this.history = [{ ...o, timestamp: l }];
          const { onSessionStart: u } = e;
          (u && u(t, eO(a, this.history)),
            (this.removeListeners = (0, eC.F)(
              ey(this.contextWindow, "pointermove", this.handlePointerMove),
              ey(this.contextWindow, "pointerup", this.handlePointerUp),
              ey(this.contextWindow, "pointercancel", this.handlePointerUp),
            )));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          (this.removeListeners && this.removeListeners(),
            (0, K.WG)(this.updatePoint));
        }
      }
      function eD(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function eR(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function eO({ point: t }, e) {
        return {
          point: t,
          delta: eR(t, eL(e)),
          offset: eR(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              s = eL(t);
            for (
              ;
              i >= 0 &&
              ((n = t[i]), !(s.timestamp - n.timestamp > (0, eV.f)(0.1)));

            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let r = (0, eV.X)(s.timestamp - n.timestamp);
            if (0 === r) return { x: 0, y: 0 };
            let a = { x: (s.x - n.x) / r, y: (s.y - n.y) / r };
            return (a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a);
          })(e, 0.1),
        };
      }
      function eL(t) {
        return t[t.length - 1];
      }
      var eF = i(18844),
        eB = i(94712);
      function eI(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function e_(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]),
          { min: i, max: n }
        );
      }
      function eU(t, e, i) {
        return { min: e$(t, e), max: e$(t, i) };
      }
      function e$(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let eN = new WeakMap();
      class eW {
        constructor(t) {
          ((this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = ts()),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null),
            (this.visualElement = t));
        }
        start(t, { snapToCursor: e = !1, distanceThreshold: i } = {}) {
          let { presenceContext: n } = this.visualElement;
          if (n && !1 === n.isPresent) return;
          let s = (t) => {
              let { dragSnapToOrigin: i } = this.getProps();
              (i ? this.pauseAnimation() : this.stopAnimation(),
                e && this.snapToCursor(ev(t).point));
            },
            r = (t, e) => {
              let {
                drag: i,
                dragPropagation: n,
                onDragStart: s,
              } = this.getProps();
              if (
                i &&
                !n &&
                (this.openDragLock && this.openDragLock(),
                (this.openDragLock = (function (t) {
                  if ("x" === t || "y" === t)
                    if (ep[t]) return null;
                    else
                      return (
                        (ep[t] = !0),
                        () => {
                          ep[t] = !1;
                        }
                      );
                  return ep.x || ep.y
                    ? null
                    : ((ep.x = ep.y = !0),
                      () => {
                        ep.x = ep.y = !1;
                      });
                })(i)),
                !this.openDragLock)
              )
                return;
              ((this.latestPointerEvent = t),
                (this.latestPanInfo = e),
                (this.isDragging = !0),
                (this.currentDirection = null),
                this.resolveConstraints(),
                this.visualElement.projection &&
                  ((this.visualElement.projection.isAnimationBlocked = !0),
                  (this.visualElement.projection.target = void 0)),
                eA((t) => {
                  let e = this.getAxisMotionValue(t).get() || 0;
                  if (T.KN.test(e)) {
                    let { projection: i } = this.visualElement;
                    if (i && i.layout) {
                      let n = i.layout.layoutBox[t];
                      n && (e = ex(n) * (parseFloat(e) / 100));
                    }
                  }
                  this.originPoint[t] = e;
                }),
                s && K.Gt.postRender(() => s(t, e)),
                (0, eM.g)(this.visualElement, "transform"));
              let { animationState: r } = this.visualElement;
              r && r.setActive("whileDrag", !0);
            },
            a = (t, e) => {
              ((this.latestPointerEvent = t), (this.latestPanInfo = e));
              let {
                dragPropagation: i,
                dragDirectionLock: n,
                onDirectionLock: s,
                onDrag: r,
              } = this.getProps();
              if (!i && !this.openDragLock) return;
              let { offset: a } = e;
              if (n && null === this.currentDirection) {
                ((this.currentDirection = (function (t, e = 10) {
                  let i = null;
                  return (
                    Math.abs(t.y) > e
                      ? (i = "y")
                      : Math.abs(t.x) > e && (i = "x"),
                    i
                  );
                })(a)),
                  null !== this.currentDirection &&
                    s &&
                    s(this.currentDirection));
                return;
              }
              (this.updateAxis("x", e.point, a),
                this.updateAxis("y", e.point, a),
                this.visualElement.render(),
                r && r(t, e));
            },
            o = (t, e) => {
              ((this.latestPointerEvent = t),
                (this.latestPanInfo = e),
                this.stop(t, e),
                (this.latestPointerEvent = null),
                (this.latestPanInfo = null));
            },
            l = () =>
              eA(
                (t) =>
                  "paused" === this.getAnimationState(t) &&
                  this.getAxisMotionValue(t).animation?.play(),
              ),
            { dragSnapToOrigin: u } = this.getProps();
          this.panSession = new ej(
            t,
            {
              onSessionStart: s,
              onStart: r,
              onMove: a,
              onSessionEnd: o,
              resumeAnimation: l,
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: u,
              distanceThreshold: i,
              contextWindow: eE(this.visualElement),
            },
          );
        }
        stop(t, e) {
          let i = t || this.latestPointerEvent,
            n = e || this.latestPanInfo,
            s = this.isDragging;
          if ((this.cancel(), !s || !n || !i)) return;
          let { velocity: r } = n;
          this.startAnimation(r);
          let { onDragEnd: a } = this.getProps();
          a && K.Gt.postRender(() => a(i, n));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          (t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0));
          let { dragPropagation: i } = this.getProps();
          (!i &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            e && e.setActive("whileDrag", !1));
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !ez(t, n, this.currentDirection)) return;
          let s = this.getAxisMotionValue(t),
            r = this.originPoint[t] + i[t];
          (this.constraints &&
            this.constraints[t] &&
            (r = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? (0, u.k)(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? (0, u.k)(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(r, this.constraints[t], this.elastic[t])),
            s.set(r));
        }
        resolveConstraints() {
          let { dragConstraints: t, dragElastic: e } = this.getProps(),
            i =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : this.visualElement.projection?.layout,
            n = this.constraints;
          (t && t5(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && i
              ? (this.constraints = (function (
                  t,
                  { top: e, left: i, bottom: n, right: s },
                ) {
                  return { x: eI(t.x, i, s), y: eI(t.y, e, n) };
                })(i.layoutBox, t))
              : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: eU(t, "left", "right"), y: eU(t, "top", "bottom") }
              );
            })(e)),
            n !== this.constraints &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              eA((t) => {
                var e, n;
                let s;
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] =
                    ((e = i.layoutBox[t]),
                    (n = this.constraints[t]),
                    (s = {}),
                    void 0 !== n.min && (s.min = n.min - e.min),
                    void 0 !== n.max && (s.max = n.max - e.min),
                    s));
              }));
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !t5(e)) return !1;
          let n = e.current;
          (0, M.V)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
            "drag-constraints-ref",
          );
          let { projection: s } = this.visualElement;
          if (!s || !s.layout) return !1;
          let r = (function (t, e, i) {
              let n = b(t, i),
                { scroll: s } = e;
              return (s && (v(n.x, s.offset.x), v(n.y, s.offset.y)), n);
            })(n, s.root, this.visualElement.getTransformPagePoint()),
            a =
              ((t = s.layout.layoutBox), { x: e_(t.x, r.x), y: e_(t.y, r.y) });
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(a),
            );
            ((this.hasMutatedConstraints = !!t), t && (a = l(t)));
          }
          return a;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: s,
              dragSnapToOrigin: r,
              onDragTransitionEnd: a,
            } = this.getProps(),
            o = this.constraints || {};
          return Promise.all(
            eA((a) => {
              if (!ez(a, e, this.currentDirection)) return;
              let l = (o && o[a]) || {};
              r && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[a] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...l,
              };
              return this.startAxisValueAnimation(a, u);
            }),
          ).then(a);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (
            (0, eM.g)(this.visualElement, t),
            i.start((0, em.f)(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          eA((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          eA((t) => this.getAxisMotionValue(t).animation?.pause());
        }
        getAnimationState(t) {
          return this.getAxisMotionValue(t).animation?.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0,
            )
          );
        }
        snapToCursor(t) {
          eA((e) => {
            let { drag: i } = this.getProps();
            if (!ez(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              s = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: r } = n.layout.layoutBox[e];
              s.set(t[e] - (0, u.k)(i, r, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!t5(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          eA((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              var i, s;
              let r,
                a,
                o,
                l = e.get();
              n[t] =
                ((i = { min: l, max: l }),
                (s = this.constraints[t]),
                (r = 0.5),
                (a = ex(i)),
                (o = ex(s)) > a
                  ? (r = (0, eF.q)(s.min, s.max - a, i.min))
                  : a > o && (r = (0, eF.q)(i.min, i.max - o, s.min)),
                (0, eB.q)(0, 1, r));
            }
          });
          let { transformTemplate: s } = this.visualElement.getProps();
          ((this.visualElement.current.style.transform = s
            ? s({}, "")
            : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            eA((e) => {
              if (!ez(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: s, max: r } = this.constraints[e];
              i.set((0, u.k)(s, r, n[e]));
            }));
        }
        addListeners() {
          if (!this.visualElement.current) return;
          eN.set(this.visualElement, this);
          let t = ey(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              t5(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            n = i.addEventListener("measure", e);
          (i &&
            !i.layout &&
            (i.root && i.root.updateScroll(), i.updateLayout()),
            K.Gt.read(e));
          let s = ef(window, "resize", () =>
              this.scalePositionWithinConstraints(),
            ),
            r = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (eA((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              },
            );
          return () => {
            (s(), t(), n(), r && r());
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: s = !1,
              dragElastic: r = 0.35,
              dragMomentum: a = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: s,
            dragElastic: r,
            dragMomentum: a,
          };
        }
      }
      function ez(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class eq extends el {
        constructor(t) {
          (super(t),
            (this.removeGroupControls = ec.l),
            (this.removeListeners = ec.l),
            (this.controls = new eW(t)));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          (t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || ec.l));
        }
        unmount() {
          (this.removeGroupControls(), this.removeListeners());
        }
      }
      let eG = (t) => (e, i) => {
        t && K.Gt.postRender(() => t(e, i));
      };
      class eX extends el {
        constructor() {
          (super(...arguments), (this.removePointerDownListener = ec.l));
        }
        onPointerDown(t) {
          this.session = new ej(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: eE(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: eG(t),
            onStart: eG(e),
            onMove: i,
            onEnd: (t, e) => {
              (delete this.session, n && K.Gt.postRender(() => n(t, e)));
            },
          };
        }
        mount() {
          this.removePointerDownListener = ey(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t),
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          (this.removePointerDownListener(),
            this.session && this.session.end());
        }
      }
      var eK = i(79196);
      let eY = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function eH(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let eQ = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t)
              if (!T.px.test(t)) return t;
              else t = parseFloat(t);
            let i = eH(t, e.target.x),
              n = eH(t, e.target.y);
            return `${i}% ${n}%`;
          },
        },
        eZ = !1;
      class eJ extends s.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: s } = t;
          for (let t in e1)
            ((tS[t] = e1[t]), (0, o.j)(t) && (tS[t].isCSSVariable = !0));
          (s &&
            (e.group && e.group.add(s),
            i && i.register && n && i.register(s),
            eZ && s.root.didUpdate(),
            s.addEventListener("animationComplete", () => {
              this.safeToRemove();
            }),
            s.setOptions({
              ...s.options,
              onExitComplete: () => this.safeToRemove(),
            })),
            (eY.hasEverUpdated = !0));
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: s,
            } = this.props,
            { projection: r } = i;
          return (
            r &&
              ((r.isPresent = s),
              (eZ = !0),
              n || t.layoutDependency !== e || void 0 === e || t.isPresent !== s
                ? r.willUpdate()
                : this.safeToRemove(),
              t.isPresent !== s &&
                (s
                  ? r.promote()
                  : r.relegate() ||
                    K.Gt.postRender(() => {
                      let t = r.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            Q.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          ((eZ = !0),
            n &&
              (n.scheduleCheckAfterUnmount(),
              e && e.group && e.group.remove(n),
              i && i.deregister && i.deregister(n)));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function e0(t) {
        let [e, i] = (0, eK.xQ)(),
          n = (0, s.useContext)(t_.L);
        return (0, tI.jsx)(eJ, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, s.useContext)(t4),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let e1 = {
        borderRadius: {
          ...eQ,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: eQ,
        borderTopRightRadius: eQ,
        borderBottomLeftRadius: eQ,
        borderBottomRightRadius: eQ,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let n = k.f.parse(t);
            if (n.length > 5) return t;
            let s = k.f.createTransformer(t),
              r = +("number" != typeof n[0]),
              a = i.x.scale * e.x,
              o = i.y.scale * e.y;
            ((n[0 + r] /= a), (n[1 + r] /= o));
            let l = (0, u.k)(a, o, 0.5);
            return (
              "number" == typeof n[2 + r] && (n[2 + r] /= l),
              "number" == typeof n[3 + r] && (n[3 + r] /= l),
              s(n)
            );
          },
        },
      };
      var e2 = i(41342),
        e5 = i(94601);
      function e3(t) {
        return (0, e5.G)(t) && "ownerSVGElement" in t;
      }
      var e4 = i(75319),
        e6 = i(67026),
        e9 = i(72252),
        e7 = i(78170);
      let e8 = (t, e) => t.depth - e.depth;
      class it {
        constructor() {
          ((this.children = []), (this.isDirty = !1));
        }
        add(t) {
          ((0, e7.Kq)(this.children, t), (this.isDirty = !0));
        }
        remove(t) {
          ((0, e7.Ai)(this.children, t), (this.isDirty = !0));
        }
        forEach(t) {
          (this.isDirty && this.children.sort(e8),
            (this.isDirty = !1),
            this.children.forEach(t));
        }
      }
      var ie = i(89722);
      let ii = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        is = ii.length,
        ir = (t) => ("string" == typeof t ? parseFloat(t) : t),
        ia = (t) => "number" == typeof t || T.px.test(t);
      function io(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let il = ih(0, 0.5, ie.yT),
        iu = ih(0.5, 0.95, ec.l);
      function ih(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i((0, eF.q)(t, e, n)));
      }
      function id(t, e) {
        ((t.min = e.min), (t.max = e.max));
      }
      function ic(t, e) {
        (id(t.x, e.x), id(t.y, e.y));
      }
      function ip(t, e) {
        ((t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin));
      }
      function im(t, e, i, n, s) {
        return (
          (t -= e),
          (t = n + (1 / i) * (t - n)),
          void 0 !== s && (t = n + (1 / s) * (t - n)),
          t
        );
      }
      function ig(t, e, [i, n, s], r, a) {
        !(function (t, e = 0, i = 1, n = 0.5, s, r = t, a = t) {
          if (
            (T.KN.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, u.k)(a.min, a.max, e / 100) - a.min)),
            "number" != typeof e)
          )
            return;
          let o = (0, u.k)(r.min, r.max, n);
          (t === r && (o -= e),
            (t.min = im(t.min, e, i, o, s)),
            (t.max = im(t.max, e, i, o, s)));
        })(t, e[i], e[n], e[s], e.scale, r, a);
      }
      let iv = ["x", "scaleX", "originX"],
        iy = ["y", "scaleY", "originY"];
      function ix(t, e, i, n) {
        (ig(t.x, e, iv, i ? i.x : void 0, n ? n.x : void 0),
          ig(t.y, e, iy, i ? i.y : void 0, n ? n.y : void 0));
      }
      function ib(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function iw(t) {
        return ib(t.x) && ib(t.y);
      }
      function iP(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function iT(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function iS(t, e) {
        return iT(t.x, e.x) && iT(t.y, e.y);
      }
      function iA(t) {
        return ex(t.x) / ex(t.y);
      }
      function iE(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class iM {
        constructor() {
          this.members = [];
        }
        add(t) {
          ((0, e7.Kq)(this.members, t), t.scheduleRender());
        }
        remove(t) {
          if (
            ((0, e7.Ai)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e,
            i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            (i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
            let { crossfade: n } = t.options;
            !1 === n && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            (e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete());
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let iC = {
          nodes: 0,
          calculatedTargetDeltas: 0,
          calculatedProjections: 0,
        },
        iV = ["", "X", "Y", "Z"],
        ik = 0;
      function ij(t, e, i, n) {
        let { latestValues: s } = e;
        s[t] && ((i[t] = s[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      function iD({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: s,
      }) {
        return class {
          constructor(t = {}, i = e?.()) {
            ((this.id = ik++),
              (this.animationId = 0),
              (this.animationCommitId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                ((this.projectionUpdateScheduled = !1),
                  e2.Q.value &&
                    (iC.nodes =
                      iC.calculatedTargetDeltas =
                      iC.calculatedProjections =
                        0),
                  this.nodes.forEach(iL),
                  this.nodes.forEach(iN),
                  this.nodes.forEach(iW),
                  this.nodes.forEach(iF),
                  e2.Q.addProjectionMetrics && e2.Q.addProjectionMetrics(iC));
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0));
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new it());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new Z.v()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e) {
            if (this.instance) return;
            ((this.isSVG = e3(e) && !(e3(e) && "svg" === e.tagName)),
              (this.instance = e));
            let { layoutId: i, layout: n, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              this.root.hasTreeAnimated &&
                (n || i) &&
                (this.isLayoutDirty = !0),
              t)
            ) {
              let i,
                n = 0,
                s = () => (this.root.updateBlockedByResize = !1);
              (K.Gt.read(() => {
                n = window.innerWidth;
              }),
                t(e, () => {
                  let t = window.innerWidth;
                  if (t !== n) {
                    let e, r;
                    ((n = t),
                      (this.root.updateBlockedByResize = !0),
                      i && i(),
                      (e = X.k.now()),
                      (r = ({ timestamp: t }) => {
                        let i = t - e;
                        i >= 250 && ((0, K.WG)(r), s(i - 250));
                      }),
                      K.Gt.setup(r, !0),
                      (i = () => (0, K.WG)(r)),
                      eY.hasAnimatedSinceResize &&
                        ((eY.hasAnimatedSinceResize = !1),
                        this.nodes.forEach(i$)));
                  }
                }));
            }
            (i && this.root.registerSharedNode(i, this),
              !1 !== this.options.animate &&
                s &&
                (i || n) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeLayoutChanged: i,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      ((this.target = void 0), (this.relativeTarget = void 0));
                      return;
                    }
                    let r =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        iY,
                      {
                        onLayoutAnimationStart: a,
                        onLayoutAnimationComplete: o,
                      } = s.getProps(),
                      l = !this.targetLayout || !iS(this.targetLayout, n),
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      this.resumeFrom ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0));
                      let e = {
                        ...(0, e4.r)(r, "layout"),
                        onPlay: a,
                        onComplete: o,
                      };
                      ((s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e),
                        this.setAnimationOrigin(t, u));
                    } else
                      (e || i$(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete());
                    this.targetLayout = n;
                  },
                ));
          }
          unmount() {
            (this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this));
            let t = this.getStack();
            (t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              this.eventHandlers.clear(),
              (0, K.WG)(this.updateProjection));
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(iz),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let n = (0, e9.P)(i);
                  if (window.MotionHasOptimisedAnimation(n, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      n,
                      "transform",
                      K.Gt,
                      !(t || i),
                    );
                  }
                  let { parent: s } = e;
                  s && !s.hasCheckedOptimisedAppear && t(s);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              ((e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1));
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            ((this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate"));
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              (this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(iI));
              return;
            }
            if (this.animationId <= this.animationCommitId)
              return void this.nodes.forEach(i_);
            ((this.animationCommitId = this.animationId),
              this.isUpdating
                ? ((this.isUpdating = !1),
                  this.nodes.forEach(iU),
                  this.nodes.forEach(iR),
                  this.nodes.forEach(iO))
                : this.nodes.forEach(i_),
              this.clearAllSnapshots());
            let t = X.k.now();
            ((K.uv.delta = (0, eB.q)(0, 1e3 / 60, t - K.uv.timestamp)),
              (K.uv.timestamp = t),
              (K.uv.isProcessing = !0),
              K.PP.update.process(K.uv),
              K.PP.preRender.process(K.uv),
              K.PP.render.process(K.uv),
              (K.uv.isProcessing = !1));
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), Q.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            (this.nodes.forEach(iB), this.sharedNodes.forEach(iq));
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              K.Gt.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            K.Gt.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot &&
              this.instance &&
              ((this.snapshot = this.measure()),
              !this.snapshot ||
                ex(this.snapshot.measuredBox.x) ||
                ex(this.snapshot.measuredBox.y) ||
                (this.snapshot = void 0));
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            ((this.layout = this.measure(!1)),
              (this.layoutCorrected = ts()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox));
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0,
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e && this.instance)
            ) {
              let e = n(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!s) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !iw(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              r = n !== this.prevTransformTemplateValue;
            t &&
              this.instance &&
              (e || c(this.latestValues) || r) &&
              (s(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              iZ((e = n).x),
              iZ(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return ts();
            let e = t.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some(i0))) {
              let { scroll: t } = this.root;
              t && (v(e.x, t.offset.x), v(e.y, t.offset.y));
            }
            return e;
          }
          removeElementScroll(t) {
            let e = ts();
            if ((ic(e, t), this.scroll?.wasRoot)) return e;
            for (let i = 0; i < this.path.length; i++) {
              let n = this.path[i],
                { scroll: s, options: r } = n;
              n !== this.root &&
                s &&
                r.layoutScroll &&
                (s.wasRoot && ic(e, t), v(e.x, s.offset.x), v(e.y, s.offset.y));
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let i = ts();
            ic(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              (!e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                x(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                c(n.latestValues) && x(i, n.latestValues));
            }
            return (c(this.latestValues) && x(i, this.latestValues), i);
          }
          removeTransform(t) {
            let e = ts();
            ic(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !c(i.latestValues)) continue;
              d(i.latestValues) && i.updateSnapshot();
              let n = ts();
              (ic(n, i.measurePageBox()),
                ix(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n,
                ));
            }
            return (c(this.latestValues) && ix(e, this.latestValues), e);
          }
          setTargetDelta(t) {
            ((this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0));
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            ((this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1));
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== K.uv.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            let e = this.getLead();
            (this.isProjectionDirty ||
              (this.isProjectionDirty = e.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = e.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = e.isSharedProjectionDirty));
            let i = !!this.resumingFrom || this !== e;
            if (
              !(
                t ||
                (i && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                this.parent?.isProjectionDirty ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: n, layoutId: s } = this.options;
            if (this.layout && (n || s)) {
              if (
                ((this.resolvedRelativeTargetAt = K.uv.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = ts()),
                    (this.relativeTargetOrigin = ts()),
                    eS(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox,
                    ),
                    ic(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  (this.target ||
                    ((this.target = ts()), (this.targetWithTransforms = ts())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                ) {
                  var r, a, o;
                  (this.forceRelativeParentToResolveTarget(),
                    (r = this.target),
                    (a = this.relativeTarget),
                    (o = this.relativeParent.target),
                    eP(r.x, a.x, o.x),
                    eP(r.y, a.y, o.y));
                } else
                  this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox,
                          ))
                        : ic(this.target, this.layout.layoutBox),
                      g(this.target, this.targetDelta))
                    : ic(this.target, this.layout.layoutBox);
                if (this.attemptToResolveRelativeTarget) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = ts()),
                      (this.relativeTargetOrigin = ts()),
                      eS(this.relativeTargetOrigin, this.target, t.target),
                      ic(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                e2.Q.value && iC.calculatedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            if (
              !(
                !this.parent ||
                d(this.parent.latestValues) ||
                p(this.parent.latestValues)
              )
            )
              if (this.parent.isProjecting()) return this.parent;
              else return this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            let t = this.getLead(),
              e = !!this.resumingFrom || this !== t,
              i = !0;
            if (
              ((this.isProjectionDirty || this.parent?.isProjectionDirty) &&
                (i = !1),
              e &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (i = !1),
              this.resolvedRelativeTargetAt === K.uv.timestamp && (i = !1),
              i)
            )
              return;
            let { layout: n, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(n || s))
            )
              return;
            ic(this.layoutCorrected, this.layout.layoutBox);
            let r = this.treeScale.x,
              a = this.treeScale.y;
            (!(function (t, e, i, n = !1) {
              let s,
                r,
                a = i.length;
              if (a) {
                e.x = e.y = 1;
                for (let o = 0; o < a; o++) {
                  r = (s = i[o]).projectionDelta;
                  let { visualElement: a } = s.options;
                  (!a ||
                    !a.props.style ||
                    "contents" !== a.props.style.display) &&
                    (n &&
                      s.options.layoutScroll &&
                      s.scroll &&
                      s !== s.root &&
                      x(t, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
                    r && ((e.x *= r.x.scale), (e.y *= r.y.scale), g(t, r)),
                    n && c(s.latestValues) && x(t, s.latestValues));
                }
                (e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1));
              }
            })(this.layoutCorrected, this.treeScale, this.path, e),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((t.target = t.layout.layoutBox),
                (t.targetWithTransforms = ts())));
            let { target: o } = t;
            if (!o) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            (this.projectionDelta && this.prevProjectionDelta
              ? (ip(this.prevProjectionDelta.x, this.projectionDelta.x),
                ip(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              ew(
                this.projectionDelta,
                this.layoutCorrected,
                o,
                this.latestValues,
              ),
              (this.treeScale.x === r &&
                this.treeScale.y === a &&
                iE(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                iE(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", o)),
              e2.Q.value && iC.calculatedProjections++);
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if ((this.options.visualElement?.scheduleRender(), t)) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            ((this.prevProjectionDelta = ti()),
              (this.projectionDelta = ti()),
              (this.projectionDeltaWithTransform = ti()));
          }
          setAnimationOrigin(t, e = !1) {
            let i,
              n = this.snapshot,
              s = n ? n.latestValues : {},
              r = { ...this.latestValues },
              a = ti();
            ((this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e));
            let o = ts(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              h = this.getStack(),
              d = !h || h.members.length <= 1,
              c = !!(
                l &&
                !d &&
                !0 === this.options.crossfade &&
                !this.path.some(iK)
              );
            ((this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (iG(a.x, t.x, n),
                  iG(a.y, t.y, n),
                  this.setTargetDelta(a),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var h, p, m, f, g, v;
                  (eS(
                    o,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox,
                  ),
                    (m = this.relativeTarget),
                    (f = this.relativeTargetOrigin),
                    (g = o),
                    (v = n),
                    iX(m.x, f.x, g.x, v),
                    iX(m.y, f.y, g.y, v),
                    i &&
                      ((h = this.relativeTarget),
                      (p = i),
                      iP(h.x, p.x) && iP(h.y, p.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = ts()),
                    ic(i, this.relativeTarget));
                }
                (l &&
                  ((this.animationValues = r),
                  (function (t, e, i, n, s, r) {
                    s
                      ? ((t.opacity = (0, u.k)(0, i.opacity ?? 1, il(n))),
                        (t.opacityExit = (0, u.k)(e.opacity ?? 1, 0, iu(n))))
                      : r &&
                        (t.opacity = (0, u.k)(
                          e.opacity ?? 1,
                          i.opacity ?? 1,
                          n,
                        ));
                    for (let s = 0; s < is; s++) {
                      let r = `border${ii[s]}Radius`,
                        a = io(e, r),
                        o = io(i, r);
                      (void 0 !== a || void 0 !== o) &&
                        (a || (a = 0),
                        o || (o = 0),
                        0 === a || 0 === o || ia(a) === ia(o)
                          ? ((t[r] = Math.max((0, u.k)(ir(a), ir(o), n), 0)),
                            (T.KN.test(o) || T.KN.test(a)) && (t[r] += "%"))
                          : (t[r] = o));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = (0, u.k)(e.rotate || 0, i.rotate || 0, n));
                  })(r, s, this.latestValues, n, c, d)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n));
              }),
              this.mixTargetDelta(1e3 * !!this.options.layoutRoot));
          }
          startAnimation(t) {
            (this.notifyListeners("animationStart"),
              this.currentAnimation?.stop(),
              this.resumingFrom?.currentAnimation?.stop(),
              this.pendingAnimation &&
                ((0, K.WG)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = K.Gt.update(() => {
                var e, i, n;
                let s;
                ((eY.hasAnimatedSinceResize = !0),
                  e6.q.layout++,
                  this.motionValue || (this.motionValue = (0, Y.OQ)(0)),
                  (this.currentAnimation =
                    ((e = this.motionValue),
                    (i = [0, 1e3]),
                    (n = {
                      ...t,
                      velocity: 0,
                      isSync: !0,
                      onUpdate: (e) => {
                        (this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e));
                      },
                      onStop: () => {
                        e6.q.layout--;
                      },
                      onComplete: () => {
                        (e6.q.layout--,
                          t.onComplete && t.onComplete(),
                          this.completeAnimation());
                      },
                    }),
                    (s = (0, G.S)(e) ? e : (0, Y.OQ)(e)).start(
                      (0, em.f)("", s, i, n),
                    ),
                    s.animation)),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0));
              })));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            (t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete"));
          }
          finishAnimation() {
            (this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation());
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: n,
                latestValues: s,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                iJ(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox,
                )
              ) {
                i = this.target || ts();
                let e = ex(this.layout.layoutBox.x);
                ((i.x.min = t.target.x.min), (i.x.max = i.x.min + e));
                let n = ex(this.layout.layoutBox.y);
                ((i.y.min = t.target.y.min), (i.y.max = i.y.min + n));
              }
              (ic(e, i),
                x(e, s),
                ew(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  s,
                ));
            }
          }
          registerSharedNode(t, e) {
            (this.sharedNodes.has(t) || this.sharedNodes.set(t, new iM()),
              this.sharedNodes.get(t).add(e));
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            let { layoutId: t } = this.options;
            return (t && this.getStack()?.lead) || this;
          }
          getPrevLead() {
            let { layoutId: t } = this.options;
            return t ? this.getStack()?.prevLead : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let n = this.getStack();
            (n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e }));
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let n = {};
            i.z && ij("z", t, n, this.animationValues);
            for (let e = 0; e < iV.length; e++)
              (ij(`rotate${iV[e]}`, t, n, this.animationValues),
                ij(`skew${iV[e]}`, t, n, this.animationValues));
            for (let e in (t.render(), n))
              (t.setStaticValue(e, n[e]),
                this.animationValues && (this.animationValues[e] = n[e]));
            t.scheduleRender();
          }
          applyProjectionStyles(t, e) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
              t.visibility = "hidden";
              return;
            }
            let i = this.getTransformTemplate();
            if (this.needsReset) {
              ((this.needsReset = !1),
                (t.visibility = ""),
                (t.opacity = ""),
                (t.pointerEvents = tZ(e?.pointerEvents) || ""),
                (t.transform = i ? i(this.latestValues, "") : "none"));
              return;
            }
            let n = this.getLead();
            if (!this.projectionDelta || !this.layout || !n.target) {
              (this.options.layoutId &&
                ((t.opacity =
                  void 0 !== this.latestValues.opacity
                    ? this.latestValues.opacity
                    : 1),
                (t.pointerEvents = tZ(e?.pointerEvents) || "")),
                this.hasProjected &&
                  !c(this.latestValues) &&
                  ((t.transform = i ? i({}, "") : "none"),
                  (this.hasProjected = !1)));
              return;
            }
            t.visibility = "";
            let s = n.animationValues || n.latestValues;
            this.applyTransformsToTarget();
            let r = (function (t, e, i) {
              let n = "",
                s = t.x.translate / e.x,
                r = t.y.translate / e.y,
                a = i?.z || 0;
              if (
                ((s || r || a) && (n = `translate3d(${s}px, ${r}px, ${a}px) `),
                (1 !== e.x || 1 !== e.y) &&
                  (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                i)
              ) {
                let {
                  transformPerspective: t,
                  rotate: e,
                  rotateX: s,
                  rotateY: r,
                  skewX: a,
                  skewY: o,
                } = i;
                (t && (n = `perspective(${t}px) ${n}`),
                  e && (n += `rotate(${e}deg) `),
                  s && (n += `rotateX(${s}deg) `),
                  r && (n += `rotateY(${r}deg) `),
                  a && (n += `skewX(${a}deg) `),
                  o && (n += `skewY(${o}deg) `));
              }
              let o = t.x.scale * e.x,
                l = t.y.scale * e.y;
              return (
                (1 !== o || 1 !== l) && (n += `scale(${o}, ${l})`),
                n || "none"
              );
            })(this.projectionDeltaWithTransform, this.treeScale, s);
            (i && (r = i(s, r)), (t.transform = r));
            let { x: a, y: o } = this.projectionDelta;
            for (let e in ((t.transformOrigin = `${100 * a.origin}% ${100 * o.origin}% 0`),
            n.animationValues
              ? (t.opacity =
                  n === this
                    ? (s.opacity ?? this.latestValues.opacity ?? 1)
                    : this.preserveOpacity
                      ? this.latestValues.opacity
                      : s.opacityExit)
              : (t.opacity =
                  n === this
                    ? void 0 !== s.opacity
                      ? s.opacity
                      : ""
                    : void 0 !== s.opacityExit
                      ? s.opacityExit
                      : 0),
            tS)) {
              if (void 0 === s[e]) continue;
              let { correct: i, applyTo: a, isCSSVariable: o } = tS[e],
                l = "none" === r ? s[e] : i(s[e], n);
              if (a) {
                let e = a.length;
                for (let i = 0; i < e; i++) t[a[i]] = l;
              } else
                o
                  ? (this.options.visualElement.renderState.vars[e] = l)
                  : (t[e] = l);
            }
            this.options.layoutId &&
              (t.pointerEvents =
                n === this ? tZ(e?.pointerEvents) || "" : "none");
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            (this.root.nodes.forEach((t) => t.currentAnimation?.stop()),
              this.root.nodes.forEach(iI),
              this.root.sharedNodes.clear());
          }
        };
      }
      function iR(t) {
        t.updateLayout();
      }
      function iO(t) {
        let e = t.resumeFrom?.snapshot || t.snapshot;
        if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
          let { layoutBox: i, measuredBox: n } = t.layout,
            { animationType: s } = t.options,
            r = e.source !== t.layout.source;
          "size" === s
            ? eA((t) => {
                let n = r ? e.measuredBox[t] : e.layoutBox[t],
                  s = ex(n);
                ((n.min = i[t].min), (n.max = n.min + s));
              })
            : iJ(s, e.layoutBox, i) &&
              eA((n) => {
                let s = r ? e.measuredBox[n] : e.layoutBox[n],
                  a = ex(i[n]);
                ((s.max = s.min + a),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + a)));
              });
          let a = ti();
          ew(a, i, e.layoutBox);
          let o = ti();
          r
            ? ew(o, t.applyTransform(n, !0), e.measuredBox)
            : ew(o, i, e.layoutBox);
          let l = !iw(a),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: s, layout: r } = n;
              if (s && r) {
                let a = ts();
                eS(a, e.layoutBox, s.layoutBox);
                let o = ts();
                (eS(o, i, r.layoutBox),
                  iS(a, o) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = o),
                    (t.relativeTargetOrigin = a),
                    (t.relativeParent = n)));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: i,
            snapshot: e,
            delta: o,
            layoutDelta: a,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function iL(t) {
        (e2.Q.value && iC.nodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty)));
      }
      function iF(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function iB(t) {
        t.clearSnapshot();
      }
      function iI(t) {
        t.clearMeasurements();
      }
      function i_(t) {
        t.isLayoutDirty = !1;
      }
      function iU(t) {
        let { visualElement: e } = t.options;
        (e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform());
      }
      function i$(t) {
        (t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0));
      }
      function iN(t) {
        t.resolveTargetDelta();
      }
      function iW(t) {
        t.calcProjection();
      }
      function iz(t) {
        t.resetSkewAndRotation();
      }
      function iq(t) {
        t.removeLeadSnapshot();
      }
      function iG(t, e, i) {
        ((t.translate = (0, u.k)(e.translate, 0, i)),
          (t.scale = (0, u.k)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint));
      }
      function iX(t, e, i, n) {
        ((t.min = (0, u.k)(e.min, i.min, n)),
          (t.max = (0, u.k)(e.max, i.max, n)));
      }
      function iK(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let iY = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        iH = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        iQ = iH("applewebkit/") && !iH("chrome/") ? Math.round : ec.l;
      function iZ(t) {
        ((t.min = iQ(t.min)), (t.max = iQ(t.max)));
      }
      function iJ(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(iA(e) - iA(i))))
        );
      }
      function i0(t) {
        return t !== t.root && t.scroll?.wasRoot;
      }
      let i1 = iD({
          attachResizeListener: (t, e) => ef(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        i2 = { current: void 0 },
        i5 = iD({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!i2.current) {
              let t = new i1({});
              (t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (i2.current = t));
            }
            return i2.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      var i3 = i(58392);
      function i4(t, e) {
        let i = (0, i3.K)(t),
          n = new AbortController();
        return [i, { passive: !0, ...e, signal: n.signal }, () => n.abort()];
      }
      function i6(t) {
        return !("touch" === t.pointerType || ep.x || ep.y);
      }
      function i9(t, e, i) {
        let { props: n } = t;
        t.animationState &&
          n.whileHover &&
          t.animationState.setActive("whileHover", "Start" === i);
        let s = n["onHover" + i];
        s && K.Gt.postRender(() => s(e, ev(e)));
      }
      class i7 extends el {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [n, s, r] = i4(t, i),
                a = (t) => {
                  if (!i6(t)) return;
                  let { target: i } = t,
                    n = e(i, t);
                  if ("function" != typeof n || !i) return;
                  let r = (t) => {
                    i6(t) && (n(t), i.removeEventListener("pointerleave", r));
                  };
                  i.addEventListener("pointerleave", r, s);
                };
              return (
                n.forEach((t) => {
                  t.addEventListener("pointerenter", a, s);
                }),
                r
              );
            })(
              t,
              (t, e) => (
                i9(this.node, e, "Start"),
                (t) => i9(this.node, t, "End")
              ),
            ));
        }
        unmount() {}
      }
      class i8 extends el {
        constructor() {
          (super(...arguments), (this.isActive = !1));
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, eC.F)(
            ef(this.node.current, "focus", () => this.onFocus()),
            ef(this.node.current, "blur", () => this.onBlur()),
          );
        }
        unmount() {}
      }
      var nt = i(1138);
      let ne = (t, e) => !!e && (t === e || ne(t, e.parentElement)),
        ni = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        nn = new WeakSet();
      function ns(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function nr(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }),
        );
      }
      function na(t) {
        return eg(t) && !(ep.x || ep.y);
      }
      function no(t, e, i) {
        let { props: n } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled)
          return;
        t.animationState &&
          n.whileTap &&
          t.animationState.setActive("whileTap", "Start" === i);
        let s = n["onTap" + ("End" === i ? "" : i)];
        s && K.Gt.postRender(() => s(e, ev(e)));
      }
      class nl extends el {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [n, s, r] = i4(t, i),
                a = (t) => {
                  let n = t.currentTarget;
                  if (!na(t)) return;
                  nn.add(n);
                  let r = e(n, t),
                    a = (t, e) => {
                      (window.removeEventListener("pointerup", o),
                        window.removeEventListener("pointercancel", l),
                        nn.has(n) && nn.delete(n),
                        na(t) &&
                          "function" == typeof r &&
                          r(t, { success: e }));
                    },
                    o = (t) => {
                      a(
                        t,
                        n === window ||
                          n === document ||
                          i.useGlobalTarget ||
                          ne(n, t.target),
                      );
                    },
                    l = (t) => {
                      a(t, !1);
                    };
                  (window.addEventListener("pointerup", o, s),
                    window.addEventListener("pointercancel", l, s));
                };
              return (
                n.forEach((t) => {
                  ((i.useGlobalTarget ? window : t).addEventListener(
                    "pointerdown",
                    a,
                    s,
                  ),
                  (0, nt.s)(t)) &&
                    (t.addEventListener("focus", (t) =>
                      ((t, e) => {
                        let i = t.currentTarget;
                        if (!i) return;
                        let n = ns(() => {
                          if (nn.has(i)) return;
                          nr(i, "down");
                          let t = ns(() => {
                            nr(i, "up");
                          });
                          (i.addEventListener("keyup", t, e),
                            i.addEventListener(
                              "blur",
                              () => nr(i, "cancel"),
                              e,
                            ));
                        });
                        (i.addEventListener("keydown", n, e),
                          i.addEventListener(
                            "blur",
                            () => i.removeEventListener("keydown", n),
                            e,
                          ));
                      })(t, s),
                    ),
                    ni.has(t.tagName) ||
                      -1 !== t.tabIndex ||
                      t.hasAttribute("tabindex") ||
                      (t.tabIndex = 0));
                }),
                r
              );
            })(
              t,
              (t, e) => (
                no(this.node, e, "Start"),
                (t, { success: e }) => no(this.node, t, e ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget },
            ));
        }
        unmount() {}
      }
      let nu = new WeakMap(),
        nh = new WeakMap(),
        nd = (t) => {
          let e = nu.get(t.target);
          e && e(t);
        },
        nc = (t) => {
          t.forEach(nd);
        },
        np = { some: 0, all: 1 };
      class nm extends el {
        constructor() {
          (super(...arguments),
            (this.hasEnteredView = !1),
            (this.isInView = !1));
        }
        startObserver() {
          var t;
          let e;
          this.unmount();
          let { viewport: i = {} } = this.node.getProps(),
            { root: n, margin: s, amount: r = "some", once: a } = i,
            o = {
              root: n ? n.current : void 0,
              rootMargin: s,
              threshold: "number" == typeof r ? r : np[r],
            },
            l = (t) => {
              let { isIntersecting: e } = t;
              if (
                this.isInView === e ||
                ((this.isInView = e), a && !e && this.hasEnteredView)
              )
                return;
              (e && (this.hasEnteredView = !0),
                this.node.animationState &&
                  this.node.animationState.setActive("whileInView", e));
              let { onViewportEnter: i, onViewportLeave: n } =
                  this.node.getProps(),
                s = e ? i : n;
              s && s(t);
            };
          return (
            (t = this.node.current),
            (e = (function ({ root: t, ...e }) {
              let i = t || document;
              nh.has(i) || nh.set(i, {});
              let n = nh.get(i),
                s = JSON.stringify(e);
              return (
                n[s] ||
                  (n[s] = new IntersectionObserver(nc, { root: t, ...e })),
                n[s]
              );
            })(o)),
            nu.set(t, l),
            e.observe(t),
            () => {
              (nu.delete(t), e.unobserve(t));
            }
          );
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e),
          ) && this.startObserver();
        }
        unmount() {}
      }
      let nf = (function (t, e) {
        if ("undefined" == typeof Proxy) return t9;
        let i = new Map(),
          n = (i, n) => t9(i, n, t, e);
        return new Proxy((t, e) => n(t, e), {
          get: (s, r) =>
            "create" === r
              ? n
              : (i.has(r) || i.set(r, t9(r, void 0, t, e)), i.get(r)),
        });
      })(
        {
          animation: { Feature: eu },
          exit: { Feature: ed },
          inView: { Feature: nm },
          tap: { Feature: nl },
          focus: { Feature: i8 },
          hover: { Feature: i7 },
          pan: { Feature: eX },
          drag: { Feature: eq, ProjectionNode: i5, MeasureLayout: e0 },
          layout: { ProjectionNode: i5, MeasureLayout: e0 },
        },
        (t, e) =>
          tB(t) ? new tL(e) : new tM(e, { allowProjection: t !== s.Fragment }),
      );
    },
    32766: (t, e, i) => {
      i.d(e, { E4: () => o, Hr: () => d, W9: () => h });
      var n = i(11698),
        s = i(25952),
        r = i(49637),
        a = i(11048);
      let o = (t) => t === r.ai || t === a.px,
        l = new Set(["x", "y", "z"]),
        u = s.U.filter((t) => !l.has(t));
      function h(t) {
        let e = [];
        return (
          u.forEach((i) => {
            let n = t.getValue(i);
            void 0 !== n &&
              (e.push([i, n.get()]), n.set(+!!i.startsWith("scale")));
          }),
          e
        );
      }
      let d = {
        width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: (t, { transform: e }) => (0, n.ry)(e, "x"),
        y: (t, { transform: e }) => (0, n.ry)(e, "y"),
      };
      ((d.translateX = d.x), (d.translateY = d.y));
    },
    34017: (t, e, i) => {
      i.d(e, { F: () => s });
      let n = (t, e) => (i) => e(t(i)),
        s = (...t) => t.reduce(n);
    },
    36095: (t, e, i) => {
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }));
      let n = i(18857);
      function s({ config: t, src: e, width: i, quality: s }) {
        if (
          e.startsWith("/") &&
          e.includes("?") &&
          t.localPatterns?.length === 1 &&
          "**" === t.localPatterns[0].pathname &&
          "" === t.localPatterns[0].search
        )
          throw Object.defineProperty(
            Error(`Image with src "${e}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
            "__NEXT_ERROR_CODE",
            { value: "E871", enumerable: !1, configurable: !0 },
          );
        let r = (0, n.findClosestQuality)(s, t);
        return `${t.path}?url=${encodeURIComponent(e)}&w=${i}&q=${r}${(e.startsWith("/_next/static/media/"), "")}`;
      }
      s.__next_img_default = !0;
      let r = s;
    },
    37035: (t, e, i) => {
      let n;
      i.d(e, { k: () => o });
      var s = i(28153),
        r = i(27933);
      function a() {
        n = void 0;
      }
      let o = {
        now: () => (
          void 0 === n &&
            o.set(
              r.uv.isProcessing || s.W.useManualTiming
                ? r.uv.timestamp
                : performance.now(),
            ),
          n
        ),
        set: (t) => {
          ((n = t), queueMicrotask(a));
        },
      };
    },
    37700: (t, e, i) => {
      let n;
      i.d(e, { f: () => z });
      var s = i(75319);
      function r(t) {
        ((t.duration = 0), (t.type = "keyframes"));
      }
      var a = i(27933),
        o = i(14405),
        l = i(28153),
        u = i(72025),
        h = i(37035),
        d = i(47736),
        c = i(4132),
        p = i(38621),
        m = i(5556);
      function f(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      let g = f(() => void 0 !== window.ScrollTimeline);
      var v = i(40660),
        y = i(67026),
        x = i(41342),
        b = i(9331);
      let w = {},
        P =
          ((n = f(() => {
            try {
              document
                .createElement("div")
                .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
            } catch (t) {
              return !1;
            }
            return !0;
          })),
          () => w.linearEasing ?? n());
      var T = i(78987);
      let S = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        A = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: S([0, 0.65, 0.55, 1]),
          circOut: S([0.55, 0, 1, 0.45]),
          backIn: S([0.31, 0.01, 0.66, -0.59]),
          backOut: S([0.33, 1.53, 0.69, 0.99]),
        };
      function E(t) {
        return "function" == typeof t && "applyToOptions" in t;
      }
      class M extends v.q {
        constructor(t) {
          if ((super(), (this.finishedTime = null), (this.isStopped = !1), !t))
            return;
          const {
            element: e,
            name: i,
            keyframes: n,
            pseudoElement: s,
            allowFlatten: r = !1,
            finalKeyframe: a,
            onComplete: o,
          } = t;
          ((this.isPseudoElement = !!s),
            (this.allowFlatten = r),
            (this.options = t),
            (0, m.V)(
              "string" != typeof t.type,
              'Mini animate() doesn\'t support "type" as a string.',
              "mini-spring",
            ));
          const l = (function ({ type: t, ...e }) {
            return E(t) && P()
              ? t.applyToOptions(e)
              : (e.duration ?? (e.duration = 300),
                e.ease ?? (e.ease = "easeOut"),
                e);
          })(t);
          ((this.animation = (function (
            t,
            e,
            i,
            {
              delay: n = 0,
              duration: s = 300,
              repeat: r = 0,
              repeatType: a = "loop",
              ease: o = "easeOut",
              times: l,
            } = {},
            u,
          ) {
            let h = { [e]: i };
            l && (h.offset = l);
            let d = (function t(e, i) {
              if (e)
                return "function" == typeof e
                  ? P()
                    ? (0, T.K)(e, i)
                    : "ease-out"
                  : (0, b.D)(e)
                    ? S(e)
                    : Array.isArray(e)
                      ? e.map((e) => t(e, i) || A.easeOut)
                      : A[e];
            })(o, s);
            (Array.isArray(d) && (h.easing = d), x.Q.value && y.q.waapi++);
            let c = {
              delay: n,
              duration: s,
              easing: Array.isArray(d) ? "linear" : d,
              fill: "both",
              iterations: r + 1,
              direction: "reverse" === a ? "alternate" : "normal",
            };
            u && (c.pseudoElement = u);
            let p = t.animate(h, c);
            return (
              x.Q.value &&
                p.finished.finally(() => {
                  y.q.waapi--;
                }),
              p
            );
          })(e, i, n, l, s)),
            !1 === l.autoplay && this.animation.pause(),
            (this.animation.onfinish = () => {
              if (((this.finishedTime = this.time), !s)) {
                let t = (0, d.X)(n, this.options, a, this.speed);
                (this.updateMotionValue
                  ? this.updateMotionValue(t)
                  : i.startsWith("--")
                    ? e.style.setProperty(i, t)
                    : (e.style[i] = t),
                  this.animation.cancel());
              }
              (o?.(), this.notifyFinished());
            }));
        }
        play() {
          this.isStopped ||
            (this.animation.play(),
            "finished" === this.state && this.updateFinished());
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.finish?.();
        }
        cancel() {
          try {
            this.animation.cancel();
          } catch (t) {}
        }
        stop() {
          if (this.isStopped) return;
          this.isStopped = !0;
          let { state: t } = this;
          "idle" !== t &&
            "finished" !== t &&
            (this.updateMotionValue
              ? this.updateMotionValue()
              : this.commitStyles(),
            this.isPseudoElement || this.cancel());
        }
        commitStyles() {
          this.isPseudoElement || this.animation.commitStyles?.();
        }
        get duration() {
          let t = this.animation.effect?.getComputedTiming?.().duration || 0;
          return (0, p.X)(Number(t));
        }
        get iterationDuration() {
          let { delay: t = 0 } = this.options || {};
          return this.duration + (0, p.X)(t);
        }
        get time() {
          return (0, p.X)(Number(this.animation.currentTime) || 0);
        }
        set time(t) {
          ((this.finishedTime = null),
            (this.animation.currentTime = (0, p.f)(t)));
        }
        get speed() {
          return this.animation.playbackRate;
        }
        set speed(t) {
          (t < 0 && (this.finishedTime = null),
            (this.animation.playbackRate = t));
        }
        get state() {
          return null !== this.finishedTime
            ? "finished"
            : this.animation.playState;
        }
        get startTime() {
          return Number(this.animation.startTime);
        }
        set startTime(t) {
          this.animation.startTime = t;
        }
        attachTimeline({ timeline: t, observe: e }) {
          return (this.allowFlatten &&
            this.animation.effect?.updateTiming({ easing: "linear" }),
          (this.animation.onfinish = null),
          t && g())
            ? ((this.animation.timeline = t), u.l)
            : e(this);
        }
      }
      var C = i(20754),
        V = i(25903),
        k = i(1406),
        j = i(89722);
      let D = { anticipate: V.b, backInOut: k.ZZ, circInOut: j.tn };
      class R extends M {
        constructor(t) {
          (!(function (t) {
            "string" == typeof t.ease && t.ease in D && (t.ease = D[t.ease]);
          })(t),
            (0, C.E)(t),
            super(t),
            t.startTime && (this.startTime = t.startTime),
            (this.options = t));
        }
        updateMotionValue(t) {
          let {
            motionValue: e,
            onUpdate: i,
            onComplete: n,
            element: s,
            ...r
          } = this.options;
          if (!e) return;
          if (void 0 !== t) return void e.set(t);
          let a = new o.s({ ...r, autoplay: !1 }),
            l = (0, p.f)(this.finishedTime ?? this.time);
          (e.setWithVelocity(a.sample(l - 10).value, a.sample(l).value, 10),
            a.stop());
        }
      }
      var O = i(83399);
      let L = (t, e) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof t ||
            Array.isArray(t) ||
            ("string" == typeof t &&
              (O.f.test(t) || "0" === t) &&
              !t.startsWith("url("))
          ),
        F = new Set(["opacity", "clipPath", "filter", "transform"]),
        B = f(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
      class I extends v.q {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: n = 0,
          repeatDelay: s = 0,
          repeatType: r = "loop",
          keyframes: a,
          name: o,
          motionValue: l,
          element: u,
          ...d
        }) {
          (super(),
            (this.stop = () => {
              (this._animation &&
                (this._animation.stop(), this.stopTimeline?.()),
                this.keyframeResolver?.cancel());
            }),
            (this.createdAt = h.k.now()));
          const p = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: n,
              repeatDelay: s,
              repeatType: r,
              name: o,
              motionValue: l,
              element: u,
              ...d,
            },
            m = u?.KeyframeResolver || c.h;
          ((this.keyframeResolver = new m(
            a,
            (t, e, i) => this.onKeyframesResolved(t, e, p, !i),
            o,
            l,
            u,
          )),
            this.keyframeResolver?.scheduleResolve());
        }
        onKeyframesResolved(t, e, i, n) {
          this.keyframeResolver = void 0;
          let {
            name: s,
            type: a,
            velocity: c,
            delay: p,
            isHandoff: f,
            onUpdate: g,
          } = i;
          ((this.resolvedAt = h.k.now()),
            !(function (t, e, i, n) {
              let s = t[0];
              if (null === s) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let r = t[t.length - 1],
                a = L(s, e),
                o = L(r, e);
              return (
                (0, m.$)(
                  a === o,
                  `You are trying to animate ${e} from "${s}" to "${r}". "${a ? r : s}" is not an animatable value.`,
                  "value-not-animatable",
                ),
                !!a &&
                  !!o &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    (("spring" === i || E(i)) && n))
              );
            })(t, s, a, c) &&
              ((l.W.instantAnimations || !p) && g?.((0, d.X)(t, i, e)),
              (t[0] = t[t.length - 1]),
              r(i),
              (i.repeat = 0)));
          let v = {
              startTime: n
                ? this.resolvedAt && this.resolvedAt - this.createdAt > 40
                  ? this.resolvedAt
                  : this.createdAt
                : void 0,
              finalKeyframe: e,
              ...i,
              keyframes: t,
            },
            y =
              !f &&
              (function (t) {
                let {
                  motionValue: e,
                  name: i,
                  repeatDelay: n,
                  repeatType: s,
                  damping: r,
                  type: a,
                } = t;
                if (!(e?.owner?.current instanceof HTMLElement)) return !1;
                let { onUpdate: o, transformTemplate: l } = e.owner.getProps();
                return (
                  B() &&
                  i &&
                  F.has(i) &&
                  ("transform" !== i || !l) &&
                  !o &&
                  !n &&
                  "mirror" !== s &&
                  0 !== r &&
                  "inertia" !== a
                );
              })(v)
                ? new R({ ...v, element: v.motionValue.owner.current })
                : new o.s(v);
          (y.finished.then(() => this.notifyFinished()).catch(u.l),
            this.pendingTimeline &&
              ((this.stopTimeline = y.attachTimeline(this.pendingTimeline)),
              (this.pendingTimeline = void 0)),
            (this._animation = y));
        }
        get finished() {
          return this._animation ? this.animation.finished : this._finished;
        }
        then(t, e) {
          return this.finished.finally(t).then(() => {});
        }
        get animation() {
          return (
            this._animation || (this.keyframeResolver?.resume(), (0, c.q)()),
            this._animation
          );
        }
        get duration() {
          return this.animation.duration;
        }
        get iterationDuration() {
          return this.animation.iterationDuration;
        }
        get time() {
          return this.animation.time;
        }
        set time(t) {
          this.animation.time = t;
        }
        get speed() {
          return this.animation.speed;
        }
        get state() {
          return this.animation.state;
        }
        set speed(t) {
          this.animation.speed = t;
        }
        get startTime() {
          return this.animation.startTime;
        }
        attachTimeline(t) {
          return (
            this._animation
              ? (this.stopTimeline = this.animation.attachTimeline(t))
              : (this.pendingTimeline = t),
            () => this.stop()
          );
        }
        play() {
          this.animation.play();
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.complete();
        }
        cancel() {
          (this._animation && this.animation.cancel(),
            this.keyframeResolver?.cancel());
        }
      }
      let _ = (t) => null !== t;
      var U = i(25952);
      let $ = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        N = { type: "keyframes", duration: 0.8 },
        W = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        z =
          (t, e, i, n = {}, u, h) =>
          (d) => {
            let c = (0, s.r)(n, t) || {},
              m = c.delay || n.delay || 0,
              { elapsed: f = 0 } = n;
            f -= (0, p.f)(m);
            let g = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...c,
              delay: -f,
              onUpdate: (t) => {
                (e.set(t), c.onUpdate && c.onUpdate(t));
              },
              onComplete: () => {
                (d(), c.onComplete && c.onComplete());
              },
              name: t,
              motionValue: e,
              element: h ? void 0 : u,
            };
            (!(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: n,
              staggerDirection: s,
              repeat: r,
              repeatType: a,
              repeatDelay: o,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(c) &&
              Object.assign(
                g,
                ((t, { keyframes: e }) =>
                  e.length > 2
                    ? N
                    : U.f.has(t)
                      ? t.startsWith("scale")
                        ? {
                            type: "spring",
                            stiffness: 550,
                            damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30,
                            restSpeed: 10,
                          }
                        : $
                      : W)(t, g),
              ),
              g.duration && (g.duration = (0, p.f)(g.duration)),
              g.repeatDelay && (g.repeatDelay = (0, p.f)(g.repeatDelay)),
              void 0 !== g.from && (g.keyframes[0] = g.from));
            let v = !1;
            if (
              ((!1 !== g.type && (0 !== g.duration || g.repeatDelay)) ||
                (r(g), 0 === g.delay && (v = !0)),
              (l.W.instantAnimations || l.W.skipAnimations) &&
                ((v = !0), r(g), (g.delay = 0)),
              (g.allowFlatten = !c.type && !c.ease),
              v && !h && void 0 !== e.get())
            ) {
              let t = (function (t, { repeat: e, repeatType: i = "loop" }, n) {
                let s = t.filter(_),
                  r = e && "loop" !== i && e % 2 == 1 ? 0 : s.length - 1;
                return s[r];
              })(g.keyframes, c);
              if (void 0 !== t)
                return void a.Gt.update(() => {
                  (g.onUpdate(t), g.onComplete());
                });
            }
            return c.isSync ? new o.s(g) : new I(g);
          };
    },
    38437: (t, e, i) => {
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "Image", {
          enumerable: !0,
          get: function () {
            return b;
          },
        }));
      let n = i(73623),
        s = i(66388),
        r = i(95155),
        a = s._(i(12115)),
        o = n._(i(47650)),
        l = n._(i(46686)),
        u = i(95413),
        h = i(55762),
        d = i(17150);
      i(47284);
      let c = i(60751),
        p = n._(i(36095)),
        m = i(21172),
        f = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          qualities: [75],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function g(t, e, i, n, s, r, a) {
        let o = t?.src;
        t &&
          t["data-loaded-src"] !== o &&
          ((t["data-loaded-src"] = o),
          ("decode" in t ? t.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (t.parentElement && t.isConnected) {
                if (("empty" !== e && s(!0), i?.current)) {
                  let e = new Event("load");
                  Object.defineProperty(e, "target", {
                    writable: !1,
                    value: t,
                  });
                  let n = !1,
                    s = !1;
                  i.current({
                    ...e,
                    nativeEvent: e,
                    currentTarget: t,
                    target: t,
                    isDefaultPrevented: () => n,
                    isPropagationStopped: () => s,
                    persist: () => {},
                    preventDefault: () => {
                      ((n = !0), e.preventDefault());
                    },
                    stopPropagation: () => {
                      ((s = !0), e.stopPropagation());
                    },
                  });
                }
                n?.current && n.current(t);
              }
            }));
      }
      function v(t) {
        return a.use ? { fetchPriority: t } : { fetchpriority: t };
      }
      let y = (0, a.forwardRef)(
        (
          {
            src: t,
            srcSet: e,
            sizes: i,
            height: n,
            width: s,
            decoding: o,
            className: l,
            style: u,
            fetchPriority: h,
            placeholder: d,
            loading: c,
            unoptimized: p,
            fill: f,
            onLoadRef: y,
            onLoadingCompleteRef: x,
            setBlurComplete: b,
            setShowAltText: w,
            sizesInput: P,
            onLoad: T,
            onError: S,
            ...A
          },
          E,
        ) => {
          let M = (0, a.useCallback)(
              (t) => {
                t &&
                  (S && (t.src = t.src), t.complete && g(t, d, y, x, b, p, P));
              },
              [t, d, y, x, b, S, p, P],
            ),
            C = (0, m.useMergedRef)(E, M);
          return (0, r.jsx)("img", {
            ...A,
            ...v(h),
            loading: c,
            width: s,
            height: n,
            decoding: o,
            "data-nimg": f ? "fill" : "1",
            className: l,
            style: u,
            sizes: i,
            srcSet: e,
            src: t,
            ref: C,
            onLoad: (t) => {
              g(t.currentTarget, d, y, x, b, p, P);
            },
            onError: (t) => {
              (w(!0), "empty" !== d && b(!0), S && S(t));
            },
          });
        },
      );
      function x({ isAppRouter: t, imgAttributes: e }) {
        let i = {
          as: "image",
          imageSrcSet: e.srcSet,
          imageSizes: e.sizes,
          crossOrigin: e.crossOrigin,
          referrerPolicy: e.referrerPolicy,
          ...v(e.fetchPriority),
        };
        return t && o.default.preload
          ? (o.default.preload(e.src, i), null)
          : (0, r.jsx)(l.default, {
              children: (0, r.jsx)(
                "link",
                { rel: "preload", href: e.srcSet ? void 0 : e.src, ...i },
                "__nimg-" + e.src + e.srcSet + e.sizes,
              ),
            });
      }
      let b = (0, a.forwardRef)((t, e) => {
        let i = (0, a.useContext)(c.RouterContext),
          n = (0, a.useContext)(d.ImageConfigContext),
          s = (0, a.useMemo)(() => {
            let t = f || n || h.imageConfigDefault,
              e = [...t.deviceSizes, ...t.imageSizes].sort((t, e) => t - e),
              i = t.deviceSizes.sort((t, e) => t - e),
              s = t.qualities?.sort((t, e) => t - e);
            return {
              ...t,
              allSizes: e,
              deviceSizes: i,
              qualities: s,
              localPatterns: t.localPatterns,
            };
          }, [n]),
          { onLoad: o, onLoadingComplete: l } = t,
          m = (0, a.useRef)(o);
        (0, a.useEffect)(() => {
          m.current = o;
        }, [o]);
        let g = (0, a.useRef)(l);
        (0, a.useEffect)(() => {
          g.current = l;
        }, [l]);
        let [v, b] = (0, a.useState)(!1),
          [w, P] = (0, a.useState)(!1),
          { props: T, meta: S } = (0, u.getImgProps)(t, {
            defaultLoader: p.default,
            imgConf: s,
            blurComplete: v,
            showAltText: w,
          });
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(y, {
              ...T,
              unoptimized: S.unoptimized,
              placeholder: S.placeholder,
              fill: S.fill,
              onLoadRef: m,
              onLoadingCompleteRef: g,
              setBlurComplete: b,
              setShowAltText: P,
              sizesInput: t.sizes,
              ref: e,
            }),
            S.preload
              ? (0, r.jsx)(x, { isAppRouter: !i, imgAttributes: T })
              : null,
          ],
        });
      });
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    38621: (t, e, i) => {
      i.d(e, { X: () => s, f: () => n });
      let n = (t) => 1e3 * t,
        s = (t) => t / 1e3;
    },
    39551: (t, e, i) => {
      i.d(e, { L: () => n });
      let n = (0, i(12115).createContext)({});
    },
    39896: (t, e, i) => {
      i.d(e, { j: () => s, p: () => a });
      let n = (t) => (e) => "string" == typeof e && e.startsWith(t),
        s = n("--"),
        r = n("var(--"),
        a = (t) => !!r(t) && o.test(t.split("/*")[0].trim()),
        o =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    40660: (t, e, i) => {
      i.d(e, { q: () => n });
      class n {
        constructor() {
          this.updateFinished();
        }
        get finished() {
          return this._finished;
        }
        updateFinished() {
          this._finished = new Promise((t) => {
            this.resolve = t;
          });
        }
        notifyFinished() {
          this.resolve();
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
      }
    },
    41342: (t, e, i) => {
      i.d(e, { Q: () => n });
      let n = { value: null, addProjectionMetrics: null };
    },
    41720: (t, e, i) => {
      i.d(e, { B: () => r });
      var n = i(8428),
        s = i(45343);
      function r({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: r = 325,
        bounceDamping: a = 10,
        bounceStiffness: o = 500,
        modifyTarget: l,
        min: u,
        max: h,
        restDelta: d = 0.5,
        restSpeed: c,
      }) {
        let p,
          m,
          f = t[0],
          g = { done: !1, value: f },
          v = i * e,
          y = f + v,
          x = void 0 === l ? y : l(y);
        x !== y && (v = x - f);
        let b = (t) => -v * Math.exp(-t / r),
          w = (t) => x + b(t),
          P = (t) => {
            let e = b(t),
              i = w(t);
            ((g.done = Math.abs(e) <= d), (g.value = g.done ? x : i));
          },
          T = (t) => {
            let e;
            if (
              ((e = g.value),
              (void 0 !== u && e < u) || (void 0 !== h && e > h))
            ) {
              var i;
              ((p = t),
                (m = (0, n.o)({
                  keyframes: [
                    g.value,
                    ((i = g.value),
                    void 0 === u
                      ? h
                      : void 0 === h || Math.abs(u - i) < Math.abs(h - i)
                        ? u
                        : h),
                  ],
                  velocity: (0, s.Y)(w, t, g.value),
                  damping: a,
                  stiffness: o,
                  restDelta: d,
                  restSpeed: c,
                })));
            }
          };
        return (
          T(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (m || void 0 !== p || ((e = !0), P(t), T(t)),
              void 0 !== p && t >= p)
                ? m.next(t - p)
                : (e || P(t), g);
            },
          }
        );
      }
    },
    45343: (t, e, i) => {
      i.d(e, { Y: () => s });
      var n = i(79537);
      function s(t, e, i) {
        let s = Math.max(e - 5, 0);
        return (0, n.f)(i - t(s), e - s);
      }
    },
    46686: (t, e, i) => {
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = {
        default: function () {
          return f;
        },
        defaultHead: function () {
          return d;
        },
      };
      for (var s in n)
        Object.defineProperty(e, s, { enumerable: !0, get: n[s] });
      let r = i(73623),
        a = i(66388),
        o = i(95155),
        l = a._(i(12115)),
        u = r._(i(76899)),
        h = i(75368);
      function d() {
        return [
          (0, o.jsx)("meta", { charSet: "utf-8" }, "charset"),
          (0, o.jsx)(
            "meta",
            { name: "viewport", content: "width=device-width" },
            "viewport",
          ),
        ];
      }
      function c(t, e) {
        return "string" == typeof e || "number" == typeof e
          ? t
          : e.type === l.default.Fragment
            ? t.concat(
                l.default.Children.toArray(e.props.children).reduce(
                  (t, e) =>
                    "string" == typeof e || "number" == typeof e
                      ? t
                      : t.concat(e),
                  [],
                ),
              )
            : t.concat(e);
      }
      i(47284);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];
      function m(t) {
        let e, i, n, s;
        return t
          .reduce(c, [])
          .reverse()
          .concat(d().reverse())
          .filter(
            ((e = new Set()),
            (i = new Set()),
            (n = new Set()),
            (s = {}),
            (t) => {
              let r = !0,
                a = !1;
              if (t.key && "number" != typeof t.key && t.key.indexOf("$") > 0) {
                a = !0;
                let i = t.key.slice(t.key.indexOf("$") + 1);
                e.has(i) ? (r = !1) : e.add(i);
              }
              switch (t.type) {
                case "title":
                case "base":
                  i.has(t.type) ? (r = !1) : i.add(t.type);
                  break;
                case "meta":
                  for (let e = 0, i = p.length; e < i; e++) {
                    let i = p[e];
                    if (t.props.hasOwnProperty(i))
                      if ("charSet" === i) n.has(i) ? (r = !1) : n.add(i);
                      else {
                        let e = t.props[i],
                          n = s[i] || new Set();
                        ("name" !== i || !a) && n.has(e)
                          ? (r = !1)
                          : (n.add(e), (s[i] = n));
                      }
                  }
              }
              return r;
            }),
          )
          .reverse()
          .map((t, e) => {
            let i = t.key || e;
            return l.default.cloneElement(t, { key: i });
          });
      }
      let f = function ({ children: t }) {
        let e = (0, l.useContext)(h.HeadManagerContext);
        return (0, o.jsx)(u.default, {
          reduceComponentsToState: m,
          headManager: e,
          children: t,
        });
      };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    47736: (t, e, i) => {
      i.d(e, { X: () => s });
      let n = (t) => null !== t;
      function s(t, { repeat: e, repeatType: i = "loop" }, r, a = 1) {
        let o = t.filter(n),
          l = a < 0 || (e && "loop" !== i && e % 2 == 1) ? 0 : o.length - 1;
        return l && void 0 !== r ? r : o[l];
      }
    },
    49637: (t, e, i) => {
      i.d(e, { X4: () => r, ai: () => s, hs: () => a });
      var n = i(94712);
      let s = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        r = { ...s, transform: (t) => (0, n.q)(0, 1, t) },
        a = { ...s, default: 1 };
    },
    51469: (t, e, i) => {
      i.d(e, { S: () => n });
      let n = (t) => !!(t && t.getVelocity);
    },
    55762: (t, e) => {
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = {
        VALID_LOADERS: function () {
          return s;
        },
        imageConfigDefault: function () {
          return r;
        },
      };
      for (var n in i)
        Object.defineProperty(e, n, { enumerable: !0, get: i[n] });
      let s = ["default", "imgix", "cloudinary", "akamai", "custom"],
        r = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 14400,
          formats: ["image/webp"],
          maximumRedirects: 3,
          dangerouslyAllowLocalIP: !1,
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "attachment",
          localPatterns: void 0,
          remotePatterns: [],
          qualities: [75],
          unoptimized: !1,
        };
    },
    56260: (t, e, i) => {
      i.d(e, { k: () => n });
      let n = (t, e, i) => t + (e - t) * i;
    },
    57044: (t, e, i) => {
      i.d(e, { I: () => n });
      let n = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    57835: (t, e, i) => {
      i.d(e, { I: () => a });
      var n = i(28153);
      let s = [
        "setup",
        "read",
        "resolveKeyframes",
        "preUpdate",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      var r = i(41342);
      function a(t, e) {
        let i = !1,
          a = !0,
          o = { delta: 0, timestamp: 0, isProcessing: !1 },
          l = () => (i = !0),
          u = s.reduce(
            (t, i) => (
              (t[i] = (function (t, e) {
                let i = new Set(),
                  n = new Set(),
                  s = !1,
                  a = !1,
                  o = new WeakSet(),
                  l = { delta: 0, timestamp: 0, isProcessing: !1 },
                  u = 0;
                function h(e) {
                  (o.has(e) && (d.schedule(e), t()), u++, e(l));
                }
                let d = {
                  schedule: (t, e = !1, r = !1) => {
                    let a = r && s ? i : n;
                    return (e && o.add(t), a.has(t) || a.add(t), t);
                  },
                  cancel: (t) => {
                    (n.delete(t), o.delete(t));
                  },
                  process: (t) => {
                    if (((l = t), s)) {
                      a = !0;
                      return;
                    }
                    ((s = !0),
                      ([i, n] = [n, i]),
                      i.forEach(h),
                      e && r.Q.value && r.Q.value.frameloop[e].push(u),
                      (u = 0),
                      i.clear(),
                      (s = !1),
                      a && ((a = !1), d.process(t)));
                  },
                };
                return d;
              })(l, e ? i : void 0)),
              t
            ),
            {},
          ),
          {
            setup: h,
            read: d,
            resolveKeyframes: c,
            preUpdate: p,
            update: m,
            preRender: f,
            render: g,
            postRender: v,
          } = u,
          y = () => {
            let s = n.W.useManualTiming ? o.timestamp : performance.now();
            ((i = !1),
              n.W.useManualTiming ||
                (o.delta = a
                  ? 1e3 / 60
                  : Math.max(Math.min(s - o.timestamp, 40), 1)),
              (o.timestamp = s),
              (o.isProcessing = !0),
              h.process(o),
              d.process(o),
              c.process(o),
              p.process(o),
              m.process(o),
              f.process(o),
              g.process(o),
              v.process(o),
              (o.isProcessing = !1),
              i && e && ((a = !1), t(y)));
          };
        return {
          schedule: s.reduce((e, n) => {
            let s = u[n];
            return (
              (e[n] = (e, n = !1, r = !1) => (
                !i && ((i = !0), (a = !0), o.isProcessing || t(y)),
                s.schedule(e, n, r)
              )),
              e
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < s.length; e++) u[s[e]].cancel(t);
          },
          state: o,
          steps: u,
        };
      }
    },
    58392: (t, e, i) => {
      i.d(e, { K: () => n });
      function n(t, e, i) {
        if (t instanceof EventTarget) return [t];
        if ("string" == typeof t) {
          let n = document;
          e && (n = e.current);
          let s = i?.[t] ?? n.querySelectorAll(t);
          return s ? Array.from(s) : [];
        }
        return Array.from(t);
      }
    },
    60751: (t, e, i) => {
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "RouterContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }));
      let n = i(73623)._(i(12115)).default.createContext(null);
    },
    62537: (t, e, i) => {
      function n(t) {
        let e = [{}, {}];
        return (
          t?.values.forEach((t, i) => {
            ((e[0][i] = t.get()), (e[1][i] = t.getVelocity()));
          }),
          e
        );
      }
      function s(t, e, i, s) {
        if ("function" == typeof e) {
          let [r, a] = n(s);
          e = e(void 0 !== i ? i : t.custom, r, a);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [r, a] = n(s);
          e = e(void 0 !== i ? i : t.custom, r, a);
        }
        return e;
      }
      i.d(e, { a: () => s });
    },
    64124: (t, e, i) => {
      i.d(e, { U: () => a });
      var n = i(6900),
        s = i(90516),
        r = i(5469);
      function a(t, e) {
        let {
          transitionEnd: i = {},
          transition: a = {},
          ...o
        } = (0, r.K)(t, e) || {};
        for (let e in (o = { ...o, ...i })) {
          var l;
          let i = ((l = o[e]), (0, s.p)(l) ? l[l.length - 1] || 0 : l);
          t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0, n.OQ)(i));
        }
      }
    },
    67026: (t, e, i) => {
      i.d(e, { q: () => n });
      let n = { layout: 0, mainThread: 0, waapi: 0 };
    },
    69628: (t, e, i) => {
      i.d(e, { i: () => y });
      var n = i(25505);
      let s = (0, n.A)(0.42, 0, 1, 1),
        r = (0, n.A)(0, 0, 0.58, 1),
        a = (0, n.A)(0.42, 0, 0.58, 1);
      var o = i(5556),
        l = i(72025),
        u = i(25903),
        h = i(1406),
        d = i(89722),
        c = i(9331);
      let p = {
          linear: l.l,
          easeIn: s,
          easeInOut: a,
          easeOut: r,
          circIn: d.po,
          circInOut: d.tn,
          circOut: d.yT,
          backIn: h.dg,
          backInOut: h.ZZ,
          backOut: h.Sz,
          anticipate: u.b,
        },
        m = (t) => {
          if ((0, c.D)(t)) {
            (0, o.V)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values.",
              "cubic-bezier-length",
            );
            let [e, i, s, r] = t;
            return (0, n.A)(e, i, s, r);
          }
          return "string" == typeof t
            ? ((0, o.V)(
                void 0 !== p[t],
                `Invalid easing type '${t}'`,
                "invalid-easing-type",
              ),
              p[t])
            : t;
        };
      var f = i(21649),
        g = i(18844),
        v = i(56260);
      function y({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut",
      }) {
        var s;
        let r,
          o = Array.isArray(n) && "number" != typeof n[0] ? n.map(m) : m(n),
          l = { done: !1, value: e[0] },
          u =
            ((s =
              i && i.length === e.length
                ? i
                : (!(function (t, e) {
                    let i = t[t.length - 1];
                    for (let n = 1; n <= e; n++) {
                      let s = (0, g.q)(0, e, n);
                      t.push((0, v.k)(i, 1, s));
                    }
                  })((r = [0]), e.length - 1),
                  r)),
            s.map((e) => e * t)),
          h = (0, f.G)(u, e, {
            ease: Array.isArray(o)
              ? o
              : e.map(() => o || a).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((l.value = h(e)), (l.done = e >= t), l),
        };
      }
    },
    71939: (t, e, i) => {
      i.d(e, { a: () => n });
      let n = (t) => Math.round(1e5 * t) / 1e5;
    },
    72025: (t, e, i) => {
      i.d(e, { l: () => n });
      let n = (t) => t;
    },
    72252: (t, e, i) => {
      i.d(e, { P: () => s });
      var n = i(88618);
      function s(t) {
        return t.props[n.n];
      }
    },
    73852: (t, e, i) => {
      i.d(e, { v: () => s });
      var n = i(78170);
      class s {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, n.Kq)(this.subscriptions, t),
            () => (0, n.Ai)(this.subscriptions, t)
          );
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n)
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let s = 0; s < n; s++) {
                let n = this.subscriptions[s];
                n && n(t, e, i);
              }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    75319: (t, e, i) => {
      i.d(e, { r: () => n });
      function n(t, e) {
        return t?.[e] ?? t?.default ?? t;
      }
    },
    75887: (t, e, i) => {
      i.d(e, { V: () => n });
      let n = (t) => (e) =>
        e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    76899: (t, e, i) => {
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }));
      let n = i(12115),
        s = n.useLayoutEffect,
        r = n.useEffect;
      function a(t) {
        let { headManager: e, reduceComponentsToState: i } = t;
        function a() {
          if (e && e.mountedInstances) {
            let t = n.Children.toArray(
              Array.from(e.mountedInstances).filter(Boolean),
            );
            e.updateHead(i(t));
          }
        }
        return (
          s(
            () => (
              e?.mountedInstances?.add(t.children),
              () => {
                e?.mountedInstances?.delete(t.children);
              }
            ),
          ),
          s(
            () => (
              e && (e._pendingUpdate = a),
              () => {
                e && (e._pendingUpdate = a);
              }
            ),
          ),
          r(
            () => (
              e &&
                e._pendingUpdate &&
                (e._pendingUpdate(), (e._pendingUpdate = null)),
              () => {
                e &&
                  e._pendingUpdate &&
                  (e._pendingUpdate(), (e._pendingUpdate = null));
              }
            ),
          ),
          null
        );
      }
    },
    77054: (t, e, i) => {
      i.d(e, { y: () => a });
      var n = i(30281),
        s = i(88158),
        r = i(27994);
      let a = {
        test: (t) => r.B.test(t) || n.u.test(t) || s.V.test(t),
        parse: (t) =>
          r.B.test(t)
            ? r.B.parse(t)
            : s.V.test(t)
              ? s.V.parse(t)
              : n.u.parse(t),
        transform: (t) =>
          "string" == typeof t
            ? t
            : t.hasOwnProperty("red")
              ? r.B.transform(t)
              : s.V.transform(t),
        getAnimatableNone: (t) => {
          let e = a.parse(t);
          return ((e.alpha = 0), a.transform(e));
        },
      };
    },
    78170: (t, e, i) => {
      function n(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function s(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, { Ai: () => s, Kq: () => n });
    },
    78987: (t, e, i) => {
      i.d(e, { K: () => n });
      let n = (t, e, i = 10) => {
        let n = "",
          s = Math.max(Math.round(e / i), 2);
        for (let e = 0; e < s; e++)
          n += Math.round(1e4 * t(e / (s - 1))) / 1e4 + ", ";
        return `linear(${n.substring(0, n.length - 2)})`;
      };
    },
    79196: (t, e, i) => {
      i.d(e, { xQ: () => r });
      var n = i(12115),
        s = i(15131);
      function r(t = !0) {
        let e = (0, n.useContext)(s.t);
        if (null === e) return [!0, null];
        let { isPresent: i, onExitComplete: a, register: o } = e,
          l = (0, n.useId)();
        (0, n.useEffect)(() => {
          if (t) return o(l);
        }, [t]);
        let u = (0, n.useCallback)(() => t && a && a(l), [l, a, t]);
        return !i && a ? [!1, u] : [!0];
      }
    },
    79537: (t, e, i) => {
      i.d(e, { f: () => n });
      function n(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
    },
    82163: (t, e, i) => {
      i.d(e, { $: () => r, q: () => a });
      var n = i(21620);
      let s =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        r = (t, e) => (i) =>
          !!(
            ("string" == typeof i && s.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        a = (t, e, i) => (s) => {
          if ("string" != typeof s) return s;
          let [r, a, o, l] = s.match(n.S);
          return {
            [t]: parseFloat(r),
            [e]: parseFloat(a),
            [i]: parseFloat(o),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    83399: (t, e, i) => {
      i.d(e, { V: () => h, f: () => m });
      var n = i(77054);
      let s =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
      var r = i(21620),
        a = i(71939);
      let o = "number",
        l = "color",
        u =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function h(t) {
        let e = t.toString(),
          i = [],
          s = { color: [], number: [], var: [] },
          r = [],
          a = 0,
          h = e
            .replace(
              u,
              (t) => (
                n.y.test(t)
                  ? (s.color.push(a), r.push(l), i.push(n.y.parse(t)))
                  : t.startsWith("var(")
                    ? (s.var.push(a), r.push("var"), i.push(t))
                    : (s.number.push(a), r.push(o), i.push(parseFloat(t))),
                ++a,
                "${}"
              ),
            )
            .split("${}");
        return { values: i, split: h, indexes: s, types: r };
      }
      function d(t) {
        return h(t).values;
      }
      function c(t) {
        let { split: e, types: i } = h(t),
          s = e.length;
        return (t) => {
          let r = "";
          for (let u = 0; u < s; u++)
            if (((r += e[u]), void 0 !== t[u])) {
              let e = i[u];
              e === o
                ? (r += (0, a.a)(t[u]))
                : e === l
                  ? (r += n.y.transform(t[u]))
                  : (r += t[u]);
            }
          return r;
        };
      }
      let p = (t) =>
          "number" == typeof t ? 0 : n.y.test(t) ? n.y.getAnimatableNone(t) : t,
        m = {
          test: function (t) {
            return (
              isNaN(t) &&
              "string" == typeof t &&
              (t.match(r.S)?.length || 0) + (t.match(s)?.length || 0) > 0
            );
          },
          parse: d,
          createTransformer: c,
          getAnimatableNone: function (t) {
            let e = d(t);
            return c(t)(e.map(p));
          },
        };
    },
    86075: (t, e, i) => {
      i.d(e, { j: () => S });
      var n = i(34017),
        s = i(5556),
        r = i(39896),
        a = i(77054),
        o = i(83399),
        l = i(30281),
        u = i(88158);
      function h(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
            ? e
            : i < 2 / 3
              ? t + (e - t) * (2 / 3 - i) * 6
              : t;
      }
      var d = i(27994);
      function c(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      var p = i(56260);
      let m = (t, e, i) => {
          let n = t * t,
            s = i * (e * e - n) + n;
          return s < 0 ? 0 : Math.sqrt(s);
        },
        f = [l.u, d.B, u.V];
      function g(t) {
        let e = f.find((e) => e.test(t));
        if (
          ((0, s.$)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`,
            "color-not-animatable",
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === u.V &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              ((t /= 360), (i /= 100));
              let s = 0,
                r = 0,
                a = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  o = 2 * i - n;
                ((s = h(o, n, t + 1 / 3)),
                  (r = h(o, n, t)),
                  (a = h(o, n, t - 1 / 3)));
              } else s = r = a = i;
              return {
                red: Math.round(255 * s),
                green: Math.round(255 * r),
                blue: Math.round(255 * a),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let v = (t, e) => {
          let i = g(t),
            n = g(e);
          if (!i || !n) return c(t, e);
          let s = { ...i };
          return (t) => (
            (s.red = m(i.red, n.red, t)),
            (s.green = m(i.green, n.green, t)),
            (s.blue = m(i.blue, n.blue, t)),
            (s.alpha = (0, p.k)(i.alpha, n.alpha, t)),
            d.B.transform(s)
          );
        },
        y = new Set(["none", "hidden"]);
      function x(t, e) {
        return (i) => (0, p.k)(t, e, i);
      }
      function b(t) {
        return "number" == typeof t
          ? x
          : "string" == typeof t
            ? (0, r.p)(t)
              ? c
              : a.y.test(t)
                ? v
                : T
            : Array.isArray(t)
              ? w
              : "object" == typeof t
                ? a.y.test(t)
                  ? v
                  : P
                : c;
      }
      function w(t, e) {
        let i = [...t],
          n = i.length,
          s = t.map((t, i) => b(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = s[e](t);
          return i;
        };
      }
      function P(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let s in i)
          void 0 !== t[s] && void 0 !== e[s] && (n[s] = b(t[s])(t[s], e[s]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let T = (t, e) => {
        let i = o.f.createTransformer(e),
          r = (0, o.V)(t),
          a = (0, o.V)(e);
        if (
          !(
            r.indexes.var.length === a.indexes.var.length &&
            r.indexes.color.length === a.indexes.color.length &&
            r.indexes.number.length >= a.indexes.number.length
          )
        )
          return (
            (0, s.$)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
              "complex-values-different",
            ),
            c(t, e)
          );
        if ((y.has(t) && !a.values.length) || (y.has(e) && !r.values.length))
          return y.has(t) ? (i) => (i <= 0 ? t : e) : (i) => (i >= 1 ? e : t);
        return (0, n.F)(
          w(
            (function (t, e) {
              let i = [],
                n = { color: 0, var: 0, number: 0 };
              for (let s = 0; s < e.values.length; s++) {
                let r = e.types[s],
                  a = t.indexes[r][n[r]],
                  o = t.values[a] ?? 0;
                ((i[s] = o), n[r]++);
              }
              return i;
            })(r, a),
            a.values,
          ),
          i,
        );
      };
      function S(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? (0, p.k)(t, e, i)
          : b(t)(t, e);
      }
    },
    88158: (t, e, i) => {
      i.d(e, { V: () => o });
      var n = i(49637),
        s = i(11048),
        r = i(71939),
        a = i(82163);
      let o = {
        test: (0, a.$)("hsl", "hue"),
        parse: (0, a.q)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: i, alpha: a = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          s.KN.transform((0, r.a)(e)) +
          ", " +
          s.KN.transform((0, r.a)(i)) +
          ", " +
          (0, r.a)(n.X4.transform(a)) +
          ")",
      };
    },
    88618: (t, e, i) => {
      i.d(e, { n: () => n });
      let n = "data-" + (0, i(57044).I)("framerAppearId");
    },
    89722: (t, e, i) => {
      i.d(e, { po: () => r, tn: () => o, yT: () => a });
      var n = i(75887),
        s = i(12266);
      let r = (t) => 1 - Math.sin(Math.acos(t)),
        a = (0, s.G)(r),
        o = (0, n.V)(r);
    },
    90516: (t, e, i) => {
      i.d(e, { p: () => n });
      let n = (t) => Array.isArray(t);
    },
    94601: (t, e, i) => {
      i.d(e, { G: () => n });
      function n(t) {
        return "object" == typeof t && null !== t;
      }
    },
    94712: (t, e, i) => {
      i.d(e, { q: () => n });
      let n = (t, e, i) => (i > e ? e : i < t ? t : i);
    },
    95413: (t, e, i) => {
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImgProps", {
          enumerable: !0,
          get: function () {
            return l;
          },
        }),
        i(47284));
      let n = i(12590),
        s = i(55762),
        r = ["-moz-initial", "fill", "none", "scale-down", void 0];
      function a(t) {
        return void 0 !== t.default;
      }
      function o(t) {
        return void 0 === t
          ? t
          : "number" == typeof t
            ? Number.isFinite(t)
              ? t
              : NaN
            : "string" == typeof t && /^[0-9]+$/.test(t)
              ? parseInt(t, 10)
              : NaN;
      }
      function l(
        {
          src: t,
          sizes: e,
          unoptimized: i = !1,
          priority: l = !1,
          preload: u = !1,
          loading: h,
          className: d,
          quality: c,
          width: p,
          height: m,
          fill: f = !1,
          style: g,
          overrideSrc: v,
          onLoad: y,
          onLoadingComplete: x,
          placeholder: b = "empty",
          blurDataURL: w,
          fetchPriority: P,
          decoding: T = "async",
          layout: S,
          objectFit: A,
          objectPosition: E,
          lazyBoundary: M,
          lazyRoot: C,
          ...V
        },
        k,
      ) {
        var j;
        let D,
          R,
          O,
          { imgConf: L, showAltText: F, blurComplete: B, defaultLoader: I } = k,
          _ = L || s.imageConfigDefault;
        if ("allSizes" in _) D = _;
        else {
          let t = [..._.deviceSizes, ..._.imageSizes].sort((t, e) => t - e),
            e = _.deviceSizes.sort((t, e) => t - e),
            i = _.qualities?.sort((t, e) => t - e);
          D = { ..._, allSizes: t, deviceSizes: e, qualities: i };
        }
        if (void 0 === I)
          throw Object.defineProperty(
            Error(
              "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E163", enumerable: !1, configurable: !0 },
          );
        let U = V.loader || I;
        (delete V.loader, delete V.srcSet);
        let $ = "__next_img_default" in U;
        if ($) {
          if ("custom" === D.loader)
            throw Object.defineProperty(
              Error(`Image with src "${t}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
              "__NEXT_ERROR_CODE",
              { value: "E252", enumerable: !1, configurable: !0 },
            );
        } else {
          let t = U;
          U = (e) => {
            let { config: i, ...n } = e;
            return t(n);
          };
        }
        if (S) {
          "fill" === S && (f = !0);
          let t = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[S];
          t && (g = { ...g, ...t });
          let i = { responsive: "100vw", fill: "100vw" }[S];
          i && !e && (e = i);
        }
        let N = "",
          W = o(p),
          z = o(m);
        if ((j = t) && "object" == typeof j && (a(j) || void 0 !== j.src)) {
          let e = a(t) ? t.default : t;
          if (!e.src)
            throw Object.defineProperty(
              Error(
                `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(e)}`,
              ),
              "__NEXT_ERROR_CODE",
              { value: "E460", enumerable: !1, configurable: !0 },
            );
          if (!e.height || !e.width)
            throw Object.defineProperty(
              Error(
                `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(e)}`,
              ),
              "__NEXT_ERROR_CODE",
              { value: "E48", enumerable: !1, configurable: !0 },
            );
          if (
            ((R = e.blurWidth),
            (O = e.blurHeight),
            (w = w || e.blurDataURL),
            (N = e.src),
            !f)
          )
            if (W || z) {
              if (W && !z) {
                let t = W / e.width;
                z = Math.round(e.height * t);
              } else if (!W && z) {
                let t = z / e.height;
                W = Math.round(e.width * t);
              }
            } else ((W = e.width), (z = e.height));
        }
        let q = !l && !u && ("lazy" === h || void 0 === h);
        ((!(t = "string" == typeof t ? t : N) ||
          t.startsWith("data:") ||
          t.startsWith("blob:")) &&
          ((i = !0), (q = !1)),
          D.unoptimized && (i = !0),
          $ &&
            !D.dangerouslyAllowSVG &&
            t.split("?", 1)[0].endsWith(".svg") &&
            (i = !0));
        let G = o(c),
          X = Object.assign(
            f
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: A,
                  objectPosition: E,
                }
              : {},
            F ? {} : { color: "transparent" },
            g,
          ),
          K =
            B || "empty" === b
              ? null
              : "blur" === b
                ? `url("data:image/svg+xml;charset=utf-8,${(0, n.getImageBlurSvg)({ widthInt: W, heightInt: z, blurWidth: R, blurHeight: O, blurDataURL: w || "", objectFit: X.objectFit })}")`
                : `url("${b}")`,
          Y = r.includes(X.objectFit)
            ? "fill" === X.objectFit
              ? "100% 100%"
              : "cover"
            : X.objectFit,
          H = K
            ? {
                backgroundSize: Y,
                backgroundPosition: X.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: K,
              }
            : {},
          Q = (function ({
            config: t,
            src: e,
            unoptimized: i,
            width: n,
            quality: s,
            sizes: r,
            loader: a,
          }) {
            if (i) return { src: e, srcSet: void 0, sizes: void 0 };
            let { widths: o, kind: l } = (function (
                { deviceSizes: t, allSizes: e },
                i,
                n,
              ) {
                if (n) {
                  let i = /(^|\s)(1?\d?\d)vw/g,
                    s = [];
                  for (let t; (t = i.exec(n)); ) s.push(parseInt(t[2]));
                  if (s.length) {
                    let i = 0.01 * Math.min(...s);
                    return {
                      widths: e.filter((e) => e >= t[0] * i),
                      kind: "w",
                    };
                  }
                  return { widths: e, kind: "w" };
                }
                return "number" != typeof i
                  ? { widths: t, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [i, 2 * i].map(
                            (t) => e.find((e) => e >= t) || e[e.length - 1],
                          ),
                        ),
                      ],
                      kind: "x",
                    };
              })(t, n, r),
              u = o.length - 1;
            return {
              sizes: r || "w" !== l ? r : "100vw",
              srcSet: o
                .map(
                  (i, n) =>
                    `${a({ config: t, src: e, quality: s, width: i })} ${"w" === l ? i : n + 1}${l}`,
                )
                .join(", "),
              src: a({ config: t, src: e, quality: s, width: o[u] }),
            };
          })({
            config: D,
            src: t,
            unoptimized: i,
            width: W,
            quality: G,
            sizes: e,
            loader: U,
          }),
          Z = q ? "lazy" : h;
        return {
          props: {
            ...V,
            loading: Z,
            fetchPriority: P,
            width: W,
            height: z,
            decoding: T,
            className: d,
            style: { ...X, ...H },
            sizes: Q.sizes,
            srcSet: Q.srcSet,
            src: v || Q.src,
          },
          meta: { unoptimized: i, preload: u || l, placeholder: b, fill: f },
        };
      }
    },
    97651: (t, e, i) => {
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = {
        default: function () {
          return h;
        },
        getImageProps: function () {
          return u;
        },
      };
      for (var s in n)
        Object.defineProperty(e, s, { enumerable: !0, get: n[s] });
      let r = i(73623),
        a = i(95413),
        o = i(38437),
        l = r._(i(36095));
      function u(t) {
        let { props: e } = (0, a.getImgProps)(t, {
          defaultLoader: l.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            qualities: [75],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [t, i] of Object.entries(e)) void 0 === i && delete e[t];
        return { props: e };
      }
      let h = o.Image;
    },
    99031: (t, e, i) => {
      i.d(e, { g: () => r });
      var n = i(28153),
        s = i(51469);
      function r(t, e) {
        let i = t.getValue("willChange");
        if ((0, s.S)(i) && i.add) return i.add(e);
        if (!i && n.W.WillChange) {
          let i = new n.W.WillChange("auto");
          (t.addValue("willChange", i), i.add(e));
        }
      }
    },
  },
]);
