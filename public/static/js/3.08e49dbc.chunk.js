(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [3],
  {
    128: function (e, t, n) {
      "use strict";
      var a = n(11),
        r = n(0),
        c = n(48),
        i = (n(129), n(1));
      t.a = function (e) {
        var t = Object(r.useState)(),
          n = Object(a.a)(t, 2),
          s = n[0],
          o = n[1],
          u = Object(r.useState)(),
          l = Object(a.a)(u, 2),
          d = l[0],
          b = l[1],
          p = Object(r.useState)(!1),
          j = Object(a.a)(p, 2),
          f = j[0],
          v = j[1],
          O = Object(r.useRef)();
        Object(r.useEffect)(
          function () {
            if (s) {
              var e = new FileReader();
              (e.onload = function () {
                b(e.result);
              }),
                e.readAsDataURL(s);
            }
          },
          [s]
        );
        return Object(i.jsxs)("div", {
          className: "form-control",
          children: [
            Object(i.jsx)("input", {
              id: e.id,
              ref: O,
              style: { display: "none" },
              type: "file",
              accept: ".jpg,.png,.jpeg",
              onChange: function (t) {
                var n,
                  a = f;
                t.target.files && 1 === t.target.files.length
                  ? ((n = t.target.files[0]), o(n), v(!0), (a = !0))
                  : (v(!1), (a = !1)),
                  e.onInput(e.id, n, a);
              },
            }),
            Object(i.jsxs)("div", {
              className: "image-upload ".concat(e.center && "center"),
              children: [
                Object(i.jsxs)("div", {
                  className: "image-upload__preview",
                  children: [
                    d && Object(i.jsx)("img", { src: d, alt: "Preview" }),
                    !d &&
                      Object(i.jsx)("p", { children: "Please pick an image." }),
                  ],
                }),
                Object(i.jsx)(c.a, {
                  type: "button",
                  onClick: function () {
                    O.current.click();
                  },
                  children: "PICK IMAGE",
                }),
              ],
            }),
            !f && Object(i.jsx)("p", { children: e.errorText }),
          ],
        });
      };
    },
    129: function (e, t, n) {},
    318: function (e, t, n) {},
    321: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(52),
        r = n(53),
        c = n.n(r),
        i = n(54),
        s = n(11),
        o = n(0),
        u = n(94),
        l = n(55),
        d = n(12),
        b = n(48),
        p = n(95),
        j = n(66),
        f = n(17),
        v = n(57),
        O = n(128),
        h = n(63),
        m = (n(318), n(1));
      t.default = function (e) {
        var t = e.history,
          n = Object(o.useContext)(d.a),
          r = (n.isLoggedIn, n.login),
          x = Object(o.useState)(!0),
          y = Object(s.a)(x, 2),
          g = y[0],
          k = y[1],
          w = Object(l.a)(),
          C = w.isLoading,
          I = w.error,
          N = w.sendRequest,
          E = w.clearError,
          T = Object(u.a)(
            {
              email: { value: "", isValid: !1 },
              password: { value: "", isValid: !1 },
            },
            !1
          ),
          V = Object(s.a)(T, 3),
          S = V[0],
          A = V[1],
          P = V[2],
          R = (function () {
            var e = Object(i.a)(
              c.a.mark(function e(n) {
                var a, i, s, o;
                return c.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((n.preventDefault(), !g)) {
                            e.next = 16;
                            break;
                          }
                          return (
                            (e.prev = 2),
                            (a = {
                              email: S.inputs.email.value,
                              password: S.inputs.password.value,
                            }),
                            (e.next = 6),
                            N(
                              "".concat(
                                "https://traveller-shubhamwebdesign.herokuapp.com/api",
                                "/users/login"
                              ),
                              "post",
                              a
                            )
                          );
                        case 6:
                          (i = e.sent),
                            console.log(i),
                            r(t, i.userId, i.token),
                            (e.next = 14);
                          break;
                        case 11:
                          (e.prev = 11),
                            (e.t0 = e.catch(2)),
                            console.error(e.t0);
                        case 14:
                          e.next = 31;
                          break;
                        case 16:
                          return (
                            (s = new FormData()).append(
                              "email",
                              S.inputs.email.value
                            ),
                            s.append("name", S.inputs.name.value),
                            s.append("password", S.inputs.password.value),
                            s.append("image", S.inputs.image.value),
                            (e.prev = 21),
                            (e.next = 24),
                            N(
                              "".concat(
                                "https://traveller-shubhamwebdesign.herokuapp.com/api",
                                "/users/signup"
                              ),
                              "post",
                              s
                            )
                          );
                        case 24:
                          (o = e.sent), r(t, o.userId, o.token), (e.next = 31);
                          break;
                        case 28:
                          (e.prev = 28),
                            (e.t1 = e.catch(21)),
                            console.error(e.t1);
                        case 31:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [
                    [2, 11],
                    [21, 28],
                  ]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return Object(m.jsxs)(o.Fragment, {
          children: [
            Object(m.jsx)(v.a, { error: I, onClear: E }),
            Object(m.jsxs)(j.a, {
              className: "authentication",
              children: [
                C && Object(m.jsx)(f.a, { asOverlay: !0 }),
                Object(m.jsx)("h2", {
                  children: g ? "Login Required!!" : "Signup Required!!",
                }),
                Object(m.jsx)("hr", {}),
                Object(m.jsxs)("form", {
                  onSubmit: R,
                  children: [
                    !g &&
                      Object(m.jsx)(p.a, {
                        type: "text",
                        element: "input",
                        id: "name",
                        name: "name",
                        label: "Name",
                        onInput: A,
                        validators: [Object(h.c)()],
                        errorText: "Please Enter A Name",
                      }),
                    Object(m.jsx)(p.a, {
                      id: "email",
                      element: "input",
                      type: "email",
                      label: "Email",
                      validators: [Object(h.a)()],
                      errorText: "Please Enter A Valid Email Address",
                      onInput: A,
                    }),
                    Object(m.jsx)(p.a, {
                      id: "password",
                      element: "input",
                      type: "password",
                      label: "Password",
                      validators: [Object(h.b)(10)],
                      errorText:
                        "Please Enter A Valid Password (atleast 10 characters)",
                      onInput: A,
                    }),
                    !g &&
                      Object(m.jsx)(O.a, {
                        center: !0,
                        id: "image",
                        onInput: A,
                        errorText: "Please Provide An Image",
                      }),
                    Object(m.jsxs)(b.a, {
                      type: "submit",
                      disabled: !S.isValid,
                      children: [" ", g ? "Login" : "Register", " "],
                    }),
                    Object(m.jsx)(b.a, {
                      type: "button",
                      inverse: !0,
                      onClick: function (e) {
                        g
                          ? P(
                              Object(a.a)(
                                Object(a.a)({}, S.inputs),
                                {},
                                {
                                  name: { value: "", isValid: !0 },
                                  image: { value: null, isValid: !0 },
                                }
                              ),
                              !0
                            )
                          : P(
                              Object(a.a)(
                                Object(a.a)({}, S.inputs),
                                {},
                                { name: void 0, image: void 0 }
                              ),
                              S.inputs.email.isValid &&
                                S.inputs.password.isValid
                            ),
                          k(function (e) {
                            return !e;
                          });
                      },
                      children: g ? "SWITCH TO SIGNUP" : "SWITCH TO LOGIN",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    48: function (e, t, n) {
      "use strict";
      n(0);
      var a = n(8),
        r = (n(61), n(1));
      t.a = function (e) {
        return e.href
          ? Object(r.jsx)("a", {
              className: "button button--"
                .concat(e.size || "default", " ")
                .concat(e.inverse && "button--inverse", " ")
                .concat(e.danger && "button--danger"),
              href: e.href,
              children: e.children,
            })
          : e.to
          ? Object(r.jsx)(a.b, {
              to: e.to,
              exact: e.exact,
              className: "button button--"
                .concat(e.size || "default", " ")
                .concat(e.inverse && "button--inverse", " ")
                .concat(e.danger && "button--danger"),
              children: e.children,
            })
          : Object(r.jsx)("button", {
              className: "button button--"
                .concat(e.size || "default", " ")
                .concat(e.inverse && "button--inverse", " ")
                .concat(e.danger && "button--danger"),
              type: e.type,
              onClick: e.onClick,
              disabled: e.disabled,
              children: e.children,
            });
      };
    },
    55: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var a = n(53),
        r = n.n(a),
        c = n(54),
        i = n(11),
        s = n(0),
        o = n(71),
        u = n.n(o),
        l = (n(72), n(12)),
        d = function () {
          var e = Object(s.useContext)(l.a).token,
            t = Object(s.useState)(!1),
            n = Object(i.a)(t, 2),
            a = n[0],
            o = n[1],
            d = Object(s.useState)(""),
            b = Object(i.a)(d, 2),
            p = b[0],
            j = b[1],
            f = {
              headers: {
                "Content-Type": "application/json",
                "x-auth-token": e,
              },
            },
            v = { headers: { "x-auth-token": e } };
          return {
            isLoading: a,
            error: p,
            sendRequest: Object(s.useCallback)(
              (function () {
                var e = Object(c.a)(
                  r.a.mark(function e(t, n) {
                    var a,
                      c,
                      i = arguments;
                    return r.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((a =
                                  i.length > 2 && void 0 !== i[2]
                                    ? i[2]
                                    : null),
                                o(!0),
                                (e.prev = 2),
                                "post" !== n)
                              ) {
                                e.next = 9;
                                break;
                              }
                              return (e.next = 6), u.a.post(t, a, f);
                            case 6:
                              (c = e.sent), (e.next = 29);
                              break;
                            case 9:
                              if ("get" !== n) {
                                e.next = 15;
                                break;
                              }
                              return (e.next = 12), u.a.get(t);
                            case 12:
                              (c = e.sent), (e.next = 29);
                              break;
                            case 15:
                              if ("patch" !== n) {
                                e.next = 21;
                                break;
                              }
                              return (e.next = 18), u.a.patch(t, a, f);
                            case 18:
                              (c = e.sent), (e.next = 29);
                              break;
                            case 21:
                              if ("delete" !== n) {
                                e.next = 28;
                                break;
                              }
                              return (e.next = 24), u.a.delete(t, v);
                            case 24:
                              (c = e.sent), console.log(c), (e.next = 29);
                              break;
                            case 28:
                              console.log("no request match");
                            case 29:
                              return o(!1), e.abrupt("return", c.data);
                            case 33:
                              throw (
                                ((e.prev = 33),
                                (e.t0 = e.catch(2)),
                                console.error(e.t0.response.data),
                                o(!1),
                                j(e.t0.response.data.message),
                                e.t0.response.data)
                              );
                            case 39:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[2, 33]]
                    );
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              []
            ),
            clearError: function () {
              j(null);
            },
          };
        };
    },
    56: function (e, t, n) {
      "use strict";
      var a = n(52),
        r = n(0),
        c = n(43),
        i = n(9),
        s = n.n(i),
        o = n(18),
        u = (n(60), n(1)),
        l = function (e) {
          var t = e.className,
            n = e.style,
            a = e.headerClass,
            r = e.header,
            c = e.onSubmit,
            i = e.contentClass,
            o = e.footerClass,
            l = e.footer,
            d = e.children,
            b = Object(u.jsxs)("div", {
              className: "modal ".concat(t),
              style: { style: n },
              children: [
                Object(u.jsx)("header", {
                  className: "modal__header ".concat(a),
                  children: Object(u.jsxs)("h2", { children: [" ", r, " "] }),
                }),
                Object(u.jsxs)("form", {
                  onSubmit:
                    c ||
                    function (e) {
                      return e.preventDefault();
                    },
                  children: [
                    Object(u.jsx)("div", {
                      className: "modal__content ".concat(i),
                      children: d,
                    }),
                    Object(u.jsx)("footer", {
                      className: "modal__footer ".concat(o),
                      children: l,
                    }),
                  ],
                }),
              ],
            });
          return s.a.createPortal(b, document.getElementById("modal-hook"));
        };
      t.a = function (e) {
        return Object(u.jsxs)(r.Fragment, {
          children: [
            e.show && Object(u.jsx)(o.a, { onClick: e.onCancel }),
            Object(u.jsx)(c.a, {
              in: e.show,
              mountOnEnter: !0,
              unmountOnExit: !0,
              timeout: 200,
              classNames: "modal",
              children: Object(u.jsx)(l, Object(a.a)({}, e)),
            }),
          ],
        });
      };
    },
    57: function (e, t, n) {
      "use strict";
      n(0);
      var a = n(56),
        r = n(48),
        c = n(1);
      t.a = function (e) {
        return Object(c.jsx)(a.a, {
          onCancel: e.onClear,
          header: "An Error Occurred!",
          show: !!e.error,
          footer: Object(c.jsx)(r.a, { onClick: e.onClear, children: "Okay" }),
          children: Object(c.jsx)("p", { children: e.error }),
        });
      };
    },
    60: function (e, t, n) {},
    61: function (e, t, n) {},
    63: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return o;
      }),
        n.d(t, "b", function () {
          return u;
        }),
        n.d(t, "a", function () {
          return l;
        }),
        n.d(t, "d", function () {
          return d;
        });
      var a = n(19);
      var r = "REQUIRE",
        c = "MINLENGTH",
        i = "MAXLENGTH",
        s = "EMAIL",
        o = function () {
          return { type: r };
        },
        u = function (e) {
          return { type: c, val: e };
        },
        l = function () {
          return { type: s };
        },
        d = function (e, t) {
          var n,
            o = !0,
            u = (function (e, t) {
              var n;
              if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                if (
                  Array.isArray(e) ||
                  (n = Object(a.a)(e)) ||
                  (t && e && "number" === typeof e.length)
                ) {
                  n && (e = n);
                  var r = 0,
                    c = function () {};
                  return {
                    s: c,
                    n: function () {
                      return r >= e.length
                        ? { done: !0 }
                        : { done: !1, value: e[r++] };
                    },
                    e: function (e) {
                      throw e;
                    },
                    f: c,
                  };
                }
                throw new TypeError(
                  "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              }
              var i,
                s = !0,
                o = !1;
              return {
                s: function () {
                  n = e[Symbol.iterator]();
                },
                n: function () {
                  var e = n.next();
                  return (s = e.done), e;
                },
                e: function (e) {
                  (o = !0), (i = e);
                },
                f: function () {
                  try {
                    s || null == n.return || n.return();
                  } finally {
                    if (o) throw i;
                  }
                },
              };
            })(t);
          try {
            for (u.s(); !(n = u.n()).done; ) {
              var l = n.value;
              l.type === r && (o = o && e.trim().length > 0),
                l.type === c && (o = o && e.trim().length >= l.val),
                l.type === i && (o = o && e.trim().length <= l.val),
                "MIN" === l.type && (o = o && +e >= l.val),
                "MAX" === l.type && (o = o && +e <= l.val),
                l.type === s && (o = o && /^\S+@\S+\.\S+$/.test(e));
            }
          } catch (d) {
            u.e(d);
          } finally {
            u.f();
          }
          return o;
        };
    },
    66: function (e, t, n) {
      "use strict";
      n(0), n(93);
      var a = n(1);
      t.a = function (e) {
        return Object(a.jsx)("div", {
          className: "card ".concat(e.className),
          style: e.style,
          children: e.children,
        });
      };
    },
    76: function (e, t) {},
    77: function (e, t) {},
    80: function (e, t) {},
    81: function (e, t) {},
    83: function (e, t) {},
    84: function (e, t) {},
    85: function (e, t) {},
    86: function (e, t) {},
    87: function (e, t) {},
    89: function (e, t) {},
    91: function (e, t) {},
    92: function (e, t) {},
    93: function (e, t, n) {},
    94: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var a = n(11),
        r = n(105),
        c = n(52),
        i = n(0),
        s = function (e, t) {
          switch (t.type) {
            case "INPUT_CHANGE":
              var n = !0;
              for (var a in e.inputs)
                e.inputs[a] &&
                  (n =
                    a === t.inputId
                      ? n && t.isValid
                      : n && e.inputs[a].isValid);
              return Object(c.a)(
                Object(c.a)({}, e),
                {},
                {
                  inputs: Object(c.a)(
                    Object(c.a)({}, e.inputs),
                    {},
                    Object(r.a)({}, t.inputId, {
                      value: t.value,
                      isValid: t.isValid,
                    })
                  ),
                  isValid: n,
                }
              );
            case "SET_DATA":
              return { inputs: t.inputs, isValid: t.formIsValid };
            default:
              return e;
          }
        },
        o = function (e, t) {
          var n = Object(i.useReducer)(s, { inputs: e, isValid: t }),
            r = Object(a.a)(n, 2),
            c = r[0],
            o = r[1];
          return [
            c,
            Object(i.useCallback)(function (e, t, n) {
              o({ type: "INPUT_CHANGE", value: t, isValid: n, inputId: e });
            }, []),
            Object(i.useCallback)(function (e, t) {
              o({ type: "SET_DATA", inputs: e, formIsValid: t });
            }, []),
          ];
        };
    },
    95: function (e, t, n) {
      "use strict";
      var a = n(11),
        r = n(52),
        c = n(0),
        i = n(63),
        s = (n(96), n(1)),
        o = function (e, t) {
          switch (t.type) {
            case "CHANGE":
              return Object(r.a)(
                Object(r.a)({}, e),
                {},
                { value: t.val, isValid: Object(i.d)(t.val, t.validators) }
              );
            case "TOUCH":
              return Object(r.a)(Object(r.a)({}, e), {}, { isTouched: !0 });
            default:
              return e;
          }
        };
      t.a = function (e) {
        var t = Object(c.useReducer)(o, {
            value: e.value || "",
            isTouched: !1,
            isValid: e.isValid || !1,
          }),
          n = Object(a.a)(t, 2),
          r = n[0],
          i = n[1],
          u = e.id,
          l = e.onInput,
          d = r.value,
          b = r.isValid;
        Object(c.useEffect)(
          function () {
            l(u, d, b);
          },
          [u, d, b, l]
        );
        var p = function (t) {
            i({
              type: "CHANGE",
              val: t.target.value,
              validators: e.validators,
            });
          },
          j = function () {
            i({ type: "TOUCH" });
          },
          f =
            "input" === e.element
              ? Object(s.jsx)("input", {
                  id: e.id,
                  type: e.type,
                  placeholder: e.placeholder,
                  onChange: p,
                  onBlur: j,
                  value: r.value,
                })
              : Object(s.jsx)("textarea", {
                  id: e.id,
                  rows: e.rows || 3,
                  onChange: p,
                  onBlur: j,
                  value: r.value,
                });
        return Object(s.jsxs)("div", {
          className: "form-control ".concat(
            !r.isValid && r.isTouched && "form-control--invalid"
          ),
          children: [
            Object(s.jsx)("label", { htmlFor: e.id, children: e.label }),
            f,
            !r.isValid &&
              r.isTouched &&
              Object(s.jsx)("p", { children: e.errorText }),
          ],
        });
      };
    },
    96: function (e, t, n) {},
  },
]);
//# sourceMappingURL=3.08e49dbc.chunk.js.map
