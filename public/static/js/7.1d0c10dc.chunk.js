(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [7],
  {
    130: function (e, t, n) {},
    320: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "UpdatePlace", function () {
          return O;
        });
      var a = n(53),
        r = n.n(a),
        c = n(54),
        i = n(11),
        o = n(0),
        s = n(2),
        u = n(94),
        l = n(12),
        d = n(55),
        f = n(63),
        p = n(95),
        b = n(48),
        j = n(17),
        v = n(57),
        h = (n(130), n(1)),
        O = function (e) {
          var t = e.match,
            n = Object(o.useContext)(l.a).userId,
            a = Object(d.a)(),
            O = a.isLoading,
            m = a.error,
            x = a.sendRequest,
            y = a.clearError,
            k = Object(o.useState)(null),
            g = Object(i.a)(k, 2),
            C = g[0],
            V = g[1],
            N = t.params.placeId,
            E = Object(u.a)(
              {
                title: { value: "", isValid: !1 },
                description: { value: "", isValid: !1 },
              },
              !1
            ),
            T = Object(i.a)(E, 3),
            w = T[0],
            I = T[1],
            S = T[2];
          Object(o.useEffect)(
            function () {
              try {
                (function () {
                  var e = Object(c.a)(
                    r.a.mark(function e() {
                      var t;
                      return r.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                x(
                                  ""
                                    .concat(
                                      "https://traveller-shubhamwebdesign.herokuapp.com/api",
                                      "/places/"
                                    )
                                    .concat(N),
                                  "get"
                                )
                              );
                            case 2:
                              (t = e.sent), V(t);
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()();
              } catch (e) {}
            },
            [x]
          ),
            Object(o.useEffect)(
              function () {
                C &&
                  S(
                    {
                      title: { value: C.title, isValid: !0 },
                      description: { value: C.description, isValid: !0 },
                    },
                    !0
                  );
              },
              [C]
            );
          var A = Object(s.g)(),
            _ = (function () {
              var e = Object(c.a)(
                r.a.mark(function e(t) {
                  var a;
                  return r.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              (e.prev = 1),
                              (a = {
                                title: w.inputs.title.value,
                                description: w.inputs.description.value,
                              }),
                              (e.next = 5),
                              x(
                                ""
                                  .concat(
                                    "https://traveller-shubhamwebdesign.herokuapp.com/api",
                                    "/places/"
                                  )
                                  .concat(N),
                                "patch",
                                a
                              )
                            );
                          case 5:
                            e.sent && A.push("/".concat(n, "/places")),
                              (e.next = 11);
                            break;
                          case 9:
                            (e.prev = 9), (e.t0 = e.catch(1));
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 9]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return (
            console.log(w.isValid),
            O
              ? Object(h.jsx)("div", {
                  className: "center",
                  children: Object(h.jsx)(j.a, { asOverlay: !0 }),
                })
              : Object(h.jsxs)(o.Fragment, {
                  children: [
                    Object(h.jsx)(v.a, { error: m, onClear: y }),
                    !O &&
                      "" !== w.inputs.title.value &&
                      Object(h.jsxs)("form", {
                        className: "place-form",
                        onSubmit: _,
                        children: [
                          Object(h.jsx)(p.a, {
                            type: "text",
                            element: "input",
                            id: "title",
                            placeholder: "Title",
                            label: "Title",
                            validators: [Object(f.c)()],
                            errorText: "Please enter a valid title",
                            onInput: I,
                            value: w.inputs.title.value,
                            valid: w.inputs.title.isValid,
                          }),
                          Object(h.jsx)(p.a, {
                            element: "textarea",
                            id: "description",
                            placeholder: "Description",
                            label: "Description",
                            validators: [Object(f.c)(5)],
                            errorText:
                              "Please enter a valid description (minimum 5 characters)",
                            onInput: I,
                            value: w.inputs.description.value,
                            valid: w.inputs.description.isValid,
                          }),
                          Object(h.jsx)(b.a, {
                            type: "submit",
                            disabled: w.isValid,
                            children: "Update Place",
                          }),
                        ],
                      }),
                  ],
                })
          );
        };
      t.default = O;
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
        o = n(0),
        s = n(71),
        u = n.n(s),
        l = (n(72), n(12)),
        d = function () {
          var e = Object(o.useContext)(l.a).token,
            t = Object(o.useState)(!1),
            n = Object(i.a)(t, 2),
            a = n[0],
            s = n[1],
            d = Object(o.useState)(""),
            f = Object(i.a)(d, 2),
            p = f[0],
            b = f[1],
            j = {
              headers: {
                "Content-Type": "application/json",
                "x-auth-token": e,
              },
            },
            v = { headers: { "x-auth-token": e } };
          return {
            isLoading: a,
            error: p,
            sendRequest: Object(o.useCallback)(
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
                                s(!0),
                                (e.prev = 2),
                                "post" !== n)
                              ) {
                                e.next = 9;
                                break;
                              }
                              return (e.next = 6), u.a.post(t, a, j);
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
                              return (e.next = 18), u.a.patch(t, a, j);
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
                              return s(!1), e.abrupt("return", c.data);
                            case 33:
                              throw (
                                ((e.prev = 33),
                                (e.t0 = e.catch(2)),
                                console.error(e.t0.response.data),
                                s(!1),
                                b(e.t0.response.data.message),
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
              b(null);
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
        o = n.n(i),
        s = n(18),
        u = (n(60), n(1)),
        l = function (e) {
          var t = e.className,
            n = e.style,
            a = e.headerClass,
            r = e.header,
            c = e.onSubmit,
            i = e.contentClass,
            s = e.footerClass,
            l = e.footer,
            d = e.children,
            f = Object(u.jsxs)("div", {
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
                      className: "modal__footer ".concat(s),
                      children: l,
                    }),
                  ],
                }),
              ],
            });
          return o.a.createPortal(f, document.getElementById("modal-hook"));
        };
      t.a = function (e) {
        return Object(u.jsxs)(r.Fragment, {
          children: [
            e.show && Object(u.jsx)(s.a, { onClick: e.onCancel }),
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
        return s;
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
        o = "EMAIL",
        s = function () {
          return { type: r };
        },
        u = function (e) {
          return { type: c, val: e };
        },
        l = function () {
          return { type: o };
        },
        d = function (e, t) {
          var n,
            s = !0,
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
                o = !0,
                s = !1;
              return {
                s: function () {
                  n = e[Symbol.iterator]();
                },
                n: function () {
                  var e = n.next();
                  return (o = e.done), e;
                },
                e: function (e) {
                  (s = !0), (i = e);
                },
                f: function () {
                  try {
                    o || null == n.return || n.return();
                  } finally {
                    if (s) throw i;
                  }
                },
              };
            })(t);
          try {
            for (u.s(); !(n = u.n()).done; ) {
              var l = n.value;
              l.type === r && (s = s && e.trim().length > 0),
                l.type === c && (s = s && e.trim().length >= l.val),
                l.type === i && (s = s && e.trim().length <= l.val),
                "MIN" === l.type && (s = s && +e >= l.val),
                "MAX" === l.type && (s = s && +e <= l.val),
                l.type === o && (s = s && /^\S+@\S+\.\S+$/.test(e));
            }
          } catch (d) {
            u.e(d);
          } finally {
            u.f();
          }
          return s;
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
    94: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var a = n(11),
        r = n(105),
        c = n(52),
        i = n(0),
        o = function (e, t) {
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
        s = function (e, t) {
          var n = Object(i.useReducer)(o, { inputs: e, isValid: t }),
            r = Object(a.a)(n, 2),
            c = r[0],
            s = r[1];
          return [
            c,
            Object(i.useCallback)(function (e, t, n) {
              s({ type: "INPUT_CHANGE", value: t, isValid: n, inputId: e });
            }, []),
            Object(i.useCallback)(function (e, t) {
              s({ type: "SET_DATA", inputs: e, formIsValid: t });
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
        o = (n(96), n(1)),
        s = function (e, t) {
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
        var t = Object(c.useReducer)(s, {
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
          f = r.isValid;
        Object(c.useEffect)(
          function () {
            l(u, d, f);
          },
          [u, d, f, l]
        );
        var p = function (t) {
            i({
              type: "CHANGE",
              val: t.target.value,
              validators: e.validators,
            });
          },
          b = function () {
            i({ type: "TOUCH" });
          },
          j =
            "input" === e.element
              ? Object(o.jsx)("input", {
                  id: e.id,
                  type: e.type,
                  placeholder: e.placeholder,
                  onChange: p,
                  onBlur: b,
                  value: r.value,
                })
              : Object(o.jsx)("textarea", {
                  id: e.id,
                  rows: e.rows || 3,
                  onChange: p,
                  onBlur: b,
                  value: r.value,
                });
        return Object(o.jsxs)("div", {
          className: "form-control ".concat(
            !r.isValid && r.isTouched && "form-control--invalid"
          ),
          children: [
            Object(o.jsx)("label", { htmlFor: e.id, children: e.label }),
            j,
            !r.isValid &&
              r.isTouched &&
              Object(o.jsx)("p", { children: e.errorText }),
          ],
        });
      };
    },
    96: function (e, t, n) {},
  },
]);
//# sourceMappingURL=7.1d0c10dc.chunk.js.map
