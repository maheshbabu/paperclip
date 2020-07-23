(window.webpackJsonp = window.webpackJsonp || []).push([
  [18],
  {
    120: function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n(0),
        i = n.n(r),
        a = n(175),
        o = n(196),
        s = n(156);
      t.default = function(e) {
        const { metadata: t, items: n } = e,
          { allTagsPath: r, name: c, count: l } = t;
        return i.a.createElement(
          a.a,
          { title: `Posts tagged "${c}"`, description: `Blog | Tagged "${c}"` },
          i.a.createElement(
            "div",
            { className: "container margin-vert--lg" },
            i.a.createElement(
              "div",
              { className: "row" },
              i.a.createElement(
                "main",
                { className: "col col--8 col--offset-2" },
                i.a.createElement(
                  "h1",
                  null,
                  l,
                  " ",
                  (function(e, t) {
                    return e > 1 ? t + "s" : t;
                  })(l, "post"),
                  ' tagged with "',
                  c,
                  '"'
                ),
                i.a.createElement(s.a, { href: r }, "View All Tags"),
                i.a.createElement(
                  "div",
                  { className: "margin-vert--xl" },
                  n.map(({ content: e }) =>
                    i.a.createElement(
                      o.a,
                      {
                        key: e.metadata.permalink,
                        frontMatter: e.frontMatter,
                        metadata: e.metadata,
                        truncated: !0
                      },
                      i.a.createElement(e, null)
                    )
                  )
                )
              )
            )
          )
        );
      };
    },
    144: function(e, t, n) {
      e.exports = n(177);
    },
    152: function(e, t, n) {
      "use strict";
      n.r(t);
      n(157), n(158);
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.paperclipSourceGlobPattern = exports.stripFileProtocol = void 0);
      var r = n(145);
      (exports.stripFileProtocol = function(e) {
        return e.includes("file://") ? r.fileURLToPath(e) : e;
      }),
        (exports.paperclipSourceGlobPattern = function(e) {
          return "." === e ? "**/*.pc" : e + "/**/*.pc";
        });
    },
    153: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LOGIC_TAG_NAME = t.AS_ATTR_NAME = t.FRAGMENT_TAG_NAME = t.PREVIEW_ATTR_NAME = t.COMPONENT_ATTR_NAME = t.EXPORT_TAG_NAME = t.DEFAULT_PART_ID = t.PC_CONFIG_FILE_NAME = void 0),
        (t.PC_CONFIG_FILE_NAME = "paperclip.config.json"),
        (t.DEFAULT_PART_ID = "default"),
        (t.EXPORT_TAG_NAME = "export"),
        (t.COMPONENT_ATTR_NAME = "component"),
        (t.PREVIEW_ATTR_NAME = "preview"),
        (t.FRAGMENT_TAG_NAME = "fragment"),
        (t.AS_ATTR_NAME = "as"),
        (t.LOGIC_TAG_NAME = "logic");
    },
    154: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return l;
      });
      var r = n(146),
        i = n(92),
        a = n(145),
        o = n(144);
      const s = e => t => (n, i) => {
          const s = t.realpathSync(new a.URL(n)),
            l = r.dirname(s),
            u = Object(o.findPCConfigUrl)(t)(n);
          if (!u) return [];
          const d = new a.URL(u),
            p = JSON.parse(t.readFileSync(d, "utf8"));
          return e(p, r.dirname(a.fileURLToPath(d)))
            .filter(e => e !== s)
            .map(e => {
              if (i) {
                const t = c(u, p, e, l);
                if (!r.isAbsolute(t)) return t;
                let n = r.relative(l, t);
                return "." !== n.charAt(0) && (n = "./" + n), n;
              }
              return a.pathToFileURL(e).href;
            })
            .map(e => e.replace(/\\/g, "/"));
        },
        c =
          (s((e, t) =>
            i.sync(Object(o.paperclipSourceGlobPattern)(e.sourceDirectory), {
              cwd: t,
              realpath: !0
            })
          ),
          s((e, t) => {
            const n = "+(jpg|jpeg|png|gif|svg)",
              r = e.sourceDirectory;
            return "." === r
              ? i.sync("**/*." + n, { cwd: t, realpath: !0 })
              : i.sync(`${r}/**/*.${n}`, { cwd: t, realpath: !0 });
          }),
          (e, t, n, i) => {
            const o = r.dirname(a.fileURLToPath(e)),
              s = r.join(o, t.sourceDirectory) + "/";
            if (0 === n.indexOf(s)) {
              const e = n.replace(s, ""),
                t = r.join(s, e.split("/")[0]) + "/";
              if (!i || -1 === i.indexOf(t)) return e;
            }
            return n;
          }),
        l = () => {};
    },
    155: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ATTR_ALIASES = t.preventDefault = void 0),
        (t.preventDefault = function(e) {
          return e.stopPropagation(), e.preventDefault(), !1;
        }),
        (t.ATTR_ALIASES = { className: "class" });
    },
    161: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return m;
      });
      var r = n(200),
        i = n.n(r),
        a = (n(201), n(157), n(158), n(159)),
        o = (n(151), n(202), n(172), n(92)),
        s = n(146),
        c = n(145),
        l = n(144),
        u = n(154),
        d = function(e, t, n, r) {
          return new (n || (n = Promise))(function(i, a) {
            function o(e) {
              try {
                c(r.next(e));
              } catch (t) {
                a(t);
              }
            }
            function s(e) {
              try {
                c(r.throw(e));
              } catch (t) {
                a(t);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function(e) {
                        e(t);
                      })).then(o, s);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        p = function(e) {
          return e ? (e.Ok ? e.Ok : { error: e.Err }) : e;
        },
        f = (function() {
          function e(e, t, n) {
            var r = this;
            void 0 === t && (t = {}),
              void 0 === n && (n = u.a),
              (this._createNativeEngine = e),
              (this._options = t),
              (this._onCrash = n),
              (this._listeners = []),
              (this._rendered = {}),
              (this._onEngineEvent = function(e) {
                if (e.kind === l.EngineEventKind.Evaluated) {
                  var t = (r._rendered[e.uri] = Object.assign(
                    Object.assign({}, e.data),
                    { importedSheets: r.getImportedSheets(e) }
                  ));
                  r._dispatch({
                    kind: l.EngineEventKind.Loaded,
                    uri: e.uri,
                    data: t
                  });
                } else if (e.kind === l.EngineEventKind.Diffed) {
                  for (
                    var n,
                      i = r._rendered[e.uri],
                      o = (r._rendered[e.uri] = Object.assign(
                        Object.assign({}, i),
                        {
                          imports: e.data.imports,
                          exports: e.data.exports,
                          importedSheets: r.getImportedSheets(e),
                          allDependencies: e.data.allDependencies,
                          sheet: e.data.sheet || i.sheet,
                          preview: Object(l.patchVirtNode)(
                            i.preview,
                            e.data.mutations
                          )
                        }
                      )),
                      s = [],
                      c = Object(a.a)(i.importedSheets);
                    !(n = c()).done;

                  ) {
                    var u = n.value.uri;
                    o.allDependencies.includes(u) || s.push(u);
                  }
                  for (
                    var d, p = [], f = Object(a.a)(e.data.allDependencies);
                    !(d = f()).done;

                  ) {
                    var m = d.value;
                    !i.allDependencies.includes(m) &&
                      r._rendered[m] &&
                      p.push({ uri: m, sheet: r._rendered[m].sheet });
                  }
                  (p.length || s.length) &&
                    r._dispatch({
                      uri: e.uri,
                      kind: l.EngineEventKind.ChangedSheets,
                      data: {
                        newSheets: p,
                        removedSheetUris: s,
                        allDependencies: e.data.allDependencies
                      }
                    });
                }
              }),
              (this._tryCatch = function(e) {
                try {
                  return e();
                } catch (t) {
                  return r._onCrash(t), null;
                }
              }),
              (this._dispatch = function(e) {
                for (var t, n = Object(a.a)(r._listeners); !(t = n()).done; ) {
                  (0, t.value)(e);
                }
              }),
              (this._io = Object.assign(
                {
                  readFile: function(e) {
                    return o.readFileSync(new URL(e), "utf8");
                  },
                  fileExists: function(e) {
                    try {
                      var t = new URL(e);
                      return h(t) && o.lstatSync(t).isFile();
                    } catch (n) {
                      return console.error(n), !1;
                    }
                  },
                  resolveFile: Object(l.resolveImportUri)(o)
                },
                t.io
              ));
          }
          var t = e.prototype;
          return (
            (t.$$load = function() {
              return d(
                this,
                void 0,
                void 0,
                i.a.mark(function e() {
                  var t;
                  return i.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = this._io),
                              (e.next = 3),
                              this._createNativeEngine(
                                t.readFile,
                                t.fileExists,
                                t.resolveFile
                              )
                            );
                          case 3:
                            return (
                              (this._native = e.sent),
                              this._native.add_listener(this._dispatch),
                              this.onEvent(this._onEngineEvent),
                              e.abrupt("return", this)
                            );
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
            }),
            (t.onEvent = function(e) {
              var t = this;
              if (null == e) throw new Error("listener cannot be undefined");
              return (
                this._listeners.push(e),
                function() {
                  var n = t._listeners.indexOf(e);
                  -1 !== n && t._listeners.splice(n, 1);
                }
              );
            }),
            (t.parseFile = function(e) {
              return p(this._native.parse_file(e));
            }),
            (t.getLoadedAst = function(e) {
              var t = this;
              return this._tryCatch(function() {
                return t._native.get_loaded_ast(e);
              });
            }),
            (t.parseContent = function(e) {
              var t = this;
              return this._tryCatch(function() {
                return p(t._native.parse_content(e));
              });
            }),
            (t.updateVirtualFileContent = function(e, t) {
              var n = this;
              return this._tryCatch(function() {
                return p(n._native.update_virtual_file_content(e, t));
              });
            }),
            (t.getLoadedData = function(e) {
              return this._rendered[e];
            }),
            (t._waitForLoadedData = function(e) {
              return this._rendered[e]
                ? Promise.resolve(this._rendered[e])
                : this._waitForLoadedData2(e);
            }),
            (t._waitForLoadedData2 = function(e) {
              var t = this;
              return new Promise(function(n) {
                var r = t.onEvent(function(t) {
                  t.uri === e &&
                    t.kind === l.EngineEventKind.Loaded &&
                    (r(), n(t.data));
                });
              });
            }),
            (t.getImportedSheets = function(e) {
              for (
                var t, n = e.data.allDependencies, r = [], i = Object(a.a)(n);
                !(t = i()).done;

              ) {
                var o = t.value,
                  s = this._rendered[o];
                s
                  ? r.push({ uri: o, sheet: s.sheet })
                  : console.error(
                      "data not loaded, this shouldn't happen \ud83d\ude2c."
                    );
              }
              return r;
            }),
            (t.run = function(e) {
              return d(
                this,
                void 0,
                void 0,
                i.a.mark(function t() {
                  var n,
                    r = this;
                  return i.a.wrap(
                    function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              !(n = this._tryCatch(function() {
                                return p(r._native.run(e));
                              })) ||
                              !n.error
                            ) {
                              t.next = 3;
                              break;
                            }
                            return t.abrupt("return", Promise.reject(n.error));
                          case 3:
                            return t.abrupt(
                              "return",
                              this._waitForLoadedData(e)
                            );
                          case 4:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              );
            }),
            e
          );
        })(),
        m = function(e) {
          return function(t, n) {
            return d(
              void 0,
              void 0,
              void 0,
              i.a.mark(function r() {
                return i.a.wrap(function(r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (r.next = 2), new f(e, t, n).$$load();
                      case 2:
                        return r.abrupt("return", r.sent);
                      case 3:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            );
          };
        },
        h = function(e) {
          var t = c.fileURLToPath(e),
            n = s.dirname(t),
            r = s.basename(t);
          return o.readdirSync(n).includes(r);
        };
    },
    162: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VirtualNodeKind = void 0),
        (function(e) {
          (e.Element = "Element"),
            (e.Text = "Text"),
            (e.Fragment = "Fragment"),
            (e.StyleElement = "StyleElement");
        })(t.VirtualNodeKind || (t.VirtualNodeKind = {}));
    },
    163: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.StatementKind = void 0),
        (function(e) {
          (e.Node = "Node"),
            (e.Reference = "Reference"),
            (e.Array = "Array"),
            (e.Object = "Object"),
            (e.String = "String"),
            (e.Number = "Number"),
            (e.Boolean = "Boolean");
        })(t.StatementKind || (t.StatementKind = {}));
    },
    164: function(e, t, n) {
      "use strict";
      n.r(t);
      var r, i, a;
      n(147);
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.getSelectorClassNames = exports.traverseStyleExpression = exports.isIncludeDeclarationPart = exports.isStyleDeclaration = exports.isRule = exports.traverseSheet = exports.getRuleClassNames = exports.getSheetClassNames = exports.StyleDeclarationKind = exports.SelectorKind = exports.RuleKind = void 0),
        (function(e) {
          (e.Style = "Style"),
            (e.Charset = "Charset"),
            (e.Namespace = "Namespace"),
            (e.FontFace = "FontFace"),
            (e.Media = "Media"),
            (e.Mixin = "Mixin"),
            (e.Export = "Export"),
            (e.Supports = "Supports"),
            (e.Page = "Page"),
            (e.Document = "Document"),
            (e.Keyframes = "Keyframes");
        })((r = exports.RuleKind || (exports.RuleKind = {}))),
        (function(e) {
          (e.Group = "Group"),
            (e.Combo = "Combo"),
            (e.Descendent = "Descendent"),
            (e.PseudoElement = "PseudoElement"),
            (e.PseudoParamElement = "PseudoParamElement"),
            (e.Not = "Not"),
            (e.Child = "Child"),
            (e.Adjacent = "Adjacent"),
            (e.Sibling = "Sibling"),
            (e.Id = "Id"),
            (e.Element = "Element"),
            (e.Attribute = "Attribute"),
            (e.Class = "Class"),
            (e.AllSelector = "AllSelector");
        })((i = exports.SelectorKind || (exports.SelectorKind = {}))),
        (function(e) {
          (e.KeyValue = "KeyValue"), (e.Include = "Include");
        })(
          (a =
            exports.StyleDeclarationKind || (exports.StyleDeclarationKind = {}))
        ),
        (exports.getSheetClassNames = function(e, t) {
          return void 0 === t && (t = []), o(e.rules, t);
        });
      var o = function(e, t) {
        void 0 === t && (t = []);
        for (var n = 0, r = e; n < r.length; n++) {
          var i = r[n];
          exports.getRuleClassNames(i, t);
        }
        return t;
      };
      (exports.getRuleClassNames = function(e, t) {
        switch ((void 0 === t && (t = []), e.kind)) {
          case r.Media:
            o(e.rules, t);
            break;
          case r.Style:
            exports.getSelectorClassNames(e.selector, t);
        }
        return t;
      }),
        (exports.traverseSheet = function(e, t) {
          return s(e.rules, t);
        });
      var s = function(e, t) {
        for (var n = 0, r = e; n < r.length; n++) {
          var i = r[n];
          if (!exports.traverseStyleExpression(i, t)) return !1;
        }
        return !0;
      };
      (exports.isRule = function(e) {
        return null != r[e.kind];
      }),
        (exports.isStyleDeclaration = function(e) {
          return null != a[e.declarationKind];
        }),
        (exports.isIncludeDeclarationPart = function(e) {
          return null != e.name;
        }),
        (exports.traverseStyleExpression = function(e, t) {
          if (!1 === t(e)) return !1;
          if (exports.isRule(e))
            switch (e.kind) {
              case r.Media:
              case r.Export:
                return s(e.rules, t);
              case r.Style:
                return s(e.declarations, t) && s(e.children, t);
              case r.Mixin:
                return s(e.declarations, t);
            }
          else if (exports.isStyleDeclaration(e))
            switch (e.declarationKind) {
              case a.Include:
                for (var n = 0, i = e.mixins; n < i.length; n++)
                  for (var o = 0, c = i[n].parts; o < c.length; o++) {
                    var l = c[o];
                    if (!exports.traverseStyleExpression(l, t)) return !1;
                  }
                return !0;
            }
          return !0;
        }),
        (exports.getSelectorClassNames = function(e, t) {
          switch ((void 0 === t && (t = []), e.kind)) {
            case i.Combo:
            case i.Group:
              for (var n = 0, r = e.selectors; n < r.length; n++) {
                var a = r[n];
                exports.getSelectorClassNames(a, t);
              }
              break;
            case i.Descendent:
              exports.getSelectorClassNames(e.parent, t),
                exports.getSelectorClassNames(e.descendent, t);
              break;
            case i.PseudoElement:
            case i.PseudoParamElement:
              exports.getSelectorClassNames(e.target, t);
              break;
            case i.Not:
              exports.getSelectorClassNames(e.selector, t);
              break;
            case i.Child:
              exports.getSelectorClassNames(e.parent, t),
                exports.getSelectorClassNames(e.child, t);
              break;
            case i.Adjacent:
              exports.getSelectorClassNames(e.selector, t),
                exports.getSelectorClassNames(e.nextSiblingSelector, t);
              break;
            case i.Sibling:
              exports.getSelectorClassNames(e.selector, t),
                exports.getSelectorClassNames(e.siblingSelector, t);
              break;
            case i.Class:
              t.push(e.className);
          }
          return t;
        });
    },
    165: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.findPCConfigUrl = t.resolveImportFile = t.resolveImportUri = void 0);
      var r = n(146),
        i = n(145),
        a = n(152),
        o = n(153);
      (t.resolveImportUri = function(e) {
        return function(n, r) {
          return t.resolveImportFile(e)(n, r);
        };
      }),
        (t.resolveImportFile = function(e) {
          return function(t, n) {
            try {
              if (/\w+:\/\//.test(n)) return n;
              if ("." !== n.charAt(0)) {
                var r = s(e)(t, n);
                if (!r) throw new Error("module " + n + " not found");
                return r;
              }
              return i.resolve(t, n);
            } catch (a) {
              return null;
            }
          };
        });
      var s = function(e) {
        return function(n, o) {
          var s = t.findPCConfigUrl(e)(n);
          if (!s) return null;
          var c = new URL(s),
            l = JSON.parse(e.readFileSync(c, "utf8")),
            u = r.dirname(a.stripFileProtocol(s)),
            d = i.pathToFileURL(r.normalize(r.join(u, l.sourceDirectory, o)));
          return e.existsSync(d)
            ? i.pathToFileURL(e.realpathSync(d)).href
            : null;
        };
      };
      t.findPCConfigUrl = function(e) {
        return function(t) {
          var n = a.stripFileProtocol(t);
          do {
            var s = i.pathToFileURL(r.join(n, o.PC_CONFIG_FILE_NAME));
            if (e.existsSync(s)) return s.href;
            n = r.dirname(n);
          } while ("/" !== n && "." !== n && !/^\w+:\\$/.test(n));
          return null;
        };
      };
    },
    166: function(e, t, n) {
      "use strict";
      n.r(t);
      n(149), n(171), n(147);
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.stringifyCSSSheet = void 0);
      var r = n(146),
        i = n(145);
      exports.stringifyCSSSheet = function(e, t, n) {
        return e.rules
          .map(function(e) {
            return a(e, t, n);
          })
          .join("\n");
      };
      var a = function(e, t, n) {
          switch (e.kind) {
            case "Style":
              return u(e, t, n);
            case "Page":
            case "Supports":
            case "Media":
              return o(e, t, n);
            case "FontFace":
              return l(e, t, n);
            case "Keyframes":
              return s(e, t);
          }
        },
        o = function(e, t, n) {
          return (
            "@" +
            e.name +
            " " +
            e.condition_text +
            " {\n    " +
            e.rules
              .map(function(e) {
                return u(e, t, n);
              })
              .join("\n") +
            "\n  }"
          );
        },
        s = function(e, t, n) {
          return (
            "@keyframes " +
            e.name +
            " {\n    " +
            e.rules
              .map(function(e) {
                return c(e, t);
              })
              .join("\n") +
            "\n  }"
          );
        },
        c = function(e, t, n) {
          return (
            e.key +
            " {\n    " +
            e.style
              .map(function(e) {
                return d(e, t, n);
              })
              .join("\n") +
            "\n  }"
          );
        },
        l = function(e, t, n) {
          return (
            "@font-face {\n    " +
            e.style
              .map(function(e) {
                return d(e, t, n);
              })
              .join("\n") +
            "\n  }"
          );
        },
        u = function(e, t, n) {
          return (
            e.selector_text +
            " {\n    " +
            e.style
              .map(function(e) {
                return d(e, t, n);
              })
              .join("\n") +
            "\n  }"
          );
        },
        d = function(e, t, n) {
          var a = e.name,
            o = e.value;
          if (o) {
            if (n)
              for (
                var s = o.match(/(file:\/\/.*?)(?=['")])/g) || [],
                  c = i.fileURLToPath(n),
                  l = 0,
                  u = s;
                l < u.length;
                l++
              ) {
                var d = u[l],
                  p = i.fileURLToPath(d),
                  f = r.relative(r.dirname(c), p);
                "." !== f.charAt(0) && (f = "./" + f), (o = o.replace(d, f));
              }
            t && (o = o.replace(/file:/, t));
          }
          return a + ":" + o + ";";
        };
    },
    167: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ActionKind = void 0),
        (function(e) {
          (e.ReplaceNode = "ReplaceNode"),
            (e.InsertChild = "InsertChild"),
            (e.DeleteChild = "DeleteChild"),
            (e.SetAttribute = "SetAttribute"),
            (e.SourceChanged = "SourceChanged"),
            (e.SourceUriChanged = "SourceUriChanged"),
            (e.SetText = "SetText"),
            (e.RemoveAttribute = "RemoveAttribute");
        })(t.ActionKind || (t.ActionKind = {}));
    },
    168: function(e, t, n) {
      "use strict";
      var r;
      n(12), n(55), n(172), n(159), n(147), n(151), n(144);
      !(function(e) {
        (e[(e.Shape = 0)] = "Shape"),
          (e[(e.Array = 1)] = "Array"),
          (e[(e.Any = 2)] = "Any");
      })(r || (r = {}));
      var i = function(e, t) {
        return (
          void 0 === e && (e = {}),
          void 0 === t && (t = !1),
          { kind: r.Shape, fromSpread: t, properties: e }
        );
      };
      r.Any, i({}, !0);
    },
    169: function(e, t, n) {
      "use strict";
      n.r(t);
      n(149);
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.createNativeStyleFromSheet = exports.createNativeNode = exports.getNativeNodePath = void 0);
      var r = n(174),
        i = n(144),
        a = n(155),
        o = new r.Html5Entities();
      (exports.getNativeNodePath = function(e, t) {
        for (var n = [], r = t; r.parentNode !== e; )
          n.unshift(Array.prototype.indexOf.call(r.parentNode.childNodes, r)),
            (r = r.parentNode);
        return n;
      }),
        (exports.createNativeNode = function(e, t, n, r) {
          if (!e) return t.createTextNode("");
          try {
            switch (e.kind) {
              case "Text":
                return s(e, t);
              case "Element":
                return c(e, t, n, r);
              case "StyleElement":
                return exports.createNativeStyleFromSheet(e.sheet, t, n);
              case "Fragment":
                return l(e, t, n);
            }
          } catch (i) {
            return t.createTextNode(String(i.stack));
          }
        }),
        (exports.createNativeStyleFromSheet = function(e, t, n) {
          var r = t.createElement("style");
          return (r.textContent = i.stringifyCSSSheet(e, n)), r;
        });
      var s = function(e, t) {
          return t.createTextNode(o.decode(e.value));
        },
        c = function(e, t, n, r) {
          var i =
              "svg" === e.tagName
                ? document.createElementNS("http://www.w3.org/2000/svg", "svg")
                : r
                ? t.createElementNS(r, e.tagName)
                : t.createElement(e.tagName),
            o = "svg" === e.tagName ? "http://www.w3.org/2000/svg" : r;
          for (var s in e.attributes) {
            var c = e.attributes[s];
            "src" === s && n && (c = c.replace("file:", n));
            var l = a.ATTR_ALIASES[s] || s;
            i.setAttribute(l, c);
          }
          for (var u = 0, d = e.children; u < d.length; u++) {
            var p = d[u];
            i.appendChild(exports.createNativeNode(p, t, n, o));
          }
          return (
            "a" === e.tagName &&
              ((i.onclick = a.preventDefault),
              (i.onmouseup = a.preventDefault),
              (i.onmousedown = a.preventDefault)),
            i
          );
        },
        l = function(e, t, n) {
          for (
            var r = t.createDocumentFragment(), i = 0, a = e.children;
            i < a.length;
            i++
          ) {
            var o = a[i];
            r.appendChild(exports.createNativeNode(o, t, n, r.namespaceURI));
          }
          return r;
        };
    },
    176: function(e, t, n) {
      "use strict";
      var r = n(161);
      n.d(t, "createEngine", function() {
        return r.a;
      });
      n(168), n(144), n(154);
    },
    177: function(e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function(e, t, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function() {
                      return t[n];
                    }
                  });
              }
            : function(e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        i =
          (this && this.__exportStar) ||
          function(e, t) {
            for (var n in e)
              "default" === n || t.hasOwnProperty(n) || r(t, e, n);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        i(n(178), t),
        i(n(162), t),
        i(n(179), t),
        i(n(163), t),
        i(n(166), t),
        i(n(164), t),
        i(n(180), t),
        i(n(181), t),
        i(n(153), t),
        i(n(182), t),
        i(n(183), t),
        i(n(167), t),
        i(n(165), t),
        i(n(184), t),
        i(n(185), t),
        i(n(186), t),
        i(n(187), t),
        i(n(152), t),
        i(n(188), t);
    },
    178: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GraphErrorInfoType = t.ParseErrorKind = t.EngineErrorKind = t.EngineEventKind = void 0),
        (function(e) {
          (e.Loading = "Loading"),
            (e.Loaded = "Loaded"),
            (e.Updating = "Updating"),
            (e.Evaluated = "Evaluated"),
            (e.Error = "Error"),
            (e.NodeParsed = "NodeParsed"),
            (e.Diffed = "Diffed"),
            (e.ChangedSheets = "ChangedSheets");
        })(t.EngineEventKind || (t.EngineEventKind = {})),
        (function(e) {
          (e.Graph = "Graph"), (e.Runtime = "Runtime");
        })(t.EngineErrorKind || (t.EngineErrorKind = {})),
        (function(e) {
          e.EndOfFile = "EndOfFile";
        })(t.ParseErrorKind || (t.ParseErrorKind = {})),
        (function(e) {
          (e.Syntax = "Syntax"),
            (e.IncludeNotFound = "IncludeNotFound"),
            (e.NotFound = "NotFound");
        })(t.GraphErrorInfoType || (t.GraphErrorInfoType = {}));
    },
    179: function(e, t, n) {
      "use strict";
      n.r(t);
      n(147), n(150), n(203);
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.getNestedReferences = exports.getCompletionItems = exports.traverseExpression = exports.isAttributeValue = exports.isAttribute = exports.isNode = exports.getMixins = exports.isComponentInstance = exports.flattenNodes = exports.hasAttribute = exports.getLogicElement = exports.getDefaultPart = exports.getPartIds = exports.getParts = exports.getVisibleChildNodes = exports.isVisibleNode = exports.isVisibleElement = exports.getStyleElements = exports.getAttributeStringValue = exports.getAttributeValue = exports.getAttribute = exports.getMetaValue = exports.findByNamespace = exports.getChildrenByTagName = exports.getStyleScopeId = exports.getChildren = exports.getImportById = exports.getImportIds = exports.getRelativeFilePath = exports.getImports = exports.DynamicStringAttributeValuePartKind = exports.AttributeValueKind = exports.AttributeKind = exports.NodeKind = void 0);
      var r,
        i,
        a,
        o = n(163),
        s = n(164),
        c = n(204),
        l = n(165),
        u = n(146),
        d = n(153);
      !(function(e) {
        (e.Fragment = "Fragment"),
          (e.Text = "Text"),
          (e.Element = "Element"),
          (e.StyleElement = "StyleElement"),
          (e.Slot = "Slot");
      })((r = exports.NodeKind || (exports.NodeKind = {}))),
        (function(e) {
          (e.ShorthandAttribute = "ShorthandAttribute"),
            (e.KeyValueAttribute = "KeyValueAttribute"),
            (e.SpreadAttribute = "SpreadAttribute"),
            (e.PropertyBoundAttribute = "PropertyBoundAttribute");
        })((i = exports.AttributeKind || (exports.AttributeKind = {}))),
        (function(e) {
          (e.DyanmicString = "DyanmicString"),
            (e.String = "String"),
            (e.Slot = "Slot");
        })(
          (a = exports.AttributeValueKind || (exports.AttributeValueKind = {}))
        ),
        (function(e) {
          (e.Literal = "Literal"),
            (e.ClassNamePierce = "ClassNamePierce"),
            (e.Slot = "Slot");
        })(
          exports.DynamicStringAttributeValuePartKind ||
            (exports.DynamicStringAttributeValuePartKind = {})
        );
      (exports.getImports = function(e) {
        return exports.getChildrenByTagName("import", e).filter(function(e) {
          return exports.hasAttribute("src", e);
        });
      }),
        (exports.getRelativeFilePath = function(e) {
          return function(t, n) {
            var r = l.resolveImportFile(e)(t, n),
              i = u.relative(u.dirname(t), r);
            return "." !== i.charAt(0) && (i = "./" + i), i;
          };
        }),
        (exports.getImportIds = function(e) {
          return exports
            .getImports(e)
            .map(function(e) {
              return exports.getAttributeStringValue(d.AS_ATTR_NAME, e);
            })
            .filter(Boolean);
        }),
        (exports.getImportById = function(e, t) {
          return exports.getImports(t).find(function(t) {
            return exports.getAttributeStringValue(d.AS_ATTR_NAME, t) === e;
          });
        }),
        (exports.getChildren = function(e) {
          return e.kind === r.Element || e.kind === r.Fragment
            ? e.children
            : [];
        }),
        (exports.getStyleScopeId = function(e) {
          return c(e);
        }),
        (exports.getChildrenByTagName = function(e, t) {
          return exports.getChildren(t).filter(function(t) {
            return t.kind === r.Element && t.tagName === e;
          });
        }),
        (exports.findByNamespace = function(e, t, n) {
          void 0 === n && (n = []),
            t.kind === r.Element && t.tagName.split(".")[0] === e && n.push(t);
          for (var i = 0, a = exports.getChildren(t); i < a.length; i++) {
            var o = a[i];
            exports.findByNamespace(e, o, n);
          }
          return n;
        }),
        (exports.getMetaValue = function(e, t) {
          var n = exports.getChildrenByTagName("meta", t).find(function(t) {
            return (
              exports.hasAttribute("src", t) &&
              exports.getAttributeStringValue("name", t) === e
            );
          });
          return n && exports.getAttributeStringValue("content", n);
        }),
        (exports.getAttribute = function(e, t) {
          return t.attributes.find(function(t) {
            return t.kind === i.KeyValueAttribute && t.name === e;
          });
        }),
        (exports.getAttributeValue = function(e, t) {
          var n = exports.getAttribute(e, t);
          return n && n.value;
        }),
        (exports.getAttributeStringValue = function(e, t) {
          var n = exports.getAttributeValue(e, t);
          return n && n.attrValueKind === a.String && n.value;
        }),
        (exports.getStyleElements = function(e) {
          return exports.getChildren(e).filter(function(e) {
            return e.kind === r.StyleElement;
          });
        }),
        (exports.isVisibleElement = function(e) {
          return !/^(import|logic|meta|style|part|preview)$/.test(e.tagName);
        }),
        (exports.isVisibleNode = function(e) {
          return (
            e.kind === r.Text ||
            e.kind === r.Fragment ||
            e.kind === r.Slot ||
            (e.kind === r.Element && exports.isVisibleElement(e))
          );
        }),
        (exports.getVisibleChildNodes = function(e) {
          return exports.getChildren(e).filter(exports.isVisibleNode);
        }),
        (exports.getParts = function(e) {
          return exports.getChildren(e).filter(function(e) {
            return (
              e.kind === r.Element &&
              exports.hasAttribute("component", e) &&
              exports.hasAttribute(d.AS_ATTR_NAME, e)
            );
          });
        }),
        (exports.getPartIds = function(e) {
          return exports
            .getParts(e)
            .map(function(e) {
              return exports.getAttributeStringValue(d.AS_ATTR_NAME, e);
            })
            .filter(Boolean);
        }),
        (exports.getDefaultPart = function(e) {
          return exports.getParts(e).find(function(e) {
            return (
              exports.getAttributeStringValue(d.AS_ATTR_NAME, e) ===
              d.DEFAULT_PART_ID
            );
          });
        }),
        (exports.getLogicElement = function(e) {
          return exports.getChildren(e).find(function(e) {
            return e.kind === r.Element && e.tagName === d.LOGIC_TAG_NAME;
          });
        }),
        (exports.hasAttribute = function(e, t) {
          return null != exports.getAttribute(e, t);
        }),
        (exports.flattenNodes = function(e, t) {
          if ((void 0 === t && (t = []), t.push(e), e.kind === r.Element))
            for (var n = 0, s = e.attributes; n < s.length; n++) {
              var c = s[n];
              c.kind === i.KeyValueAttribute &&
                c.value &&
                c.value.attrValueKind === a.Slot &&
                c.value.script.jsKind === o.StatementKind.Node &&
                exports.flattenNodes(c.value.script, t);
            }
          for (var l = 0, u = exports.getChildren(e); l < u.length; l++) {
            var d = u[l];
            exports.flattenNodes(d, t);
          }
          return t;
        }),
        (exports.isComponentInstance = function(e, t) {
          return (
            e.kind === r.Element &&
            -1 !== t.indexOf(e.tagName.split(".").shift())
          );
        });
      (exports.getMixins = function(e) {
        for (
          var t = exports.getStyleElements(e), n = {}, r = 0, i = t;
          r < i.length;
          r++
        ) {
          var a = i[r];
          s.traverseSheet(a.sheet, function(e) {
            e &&
              s.isRule(e) &&
              e.kind === s.RuleKind.Mixin &&
              (n[e.name.value] = e);
          });
        }
        return n;
      }),
        (exports.isNode = function(e) {
          return null != r[e.kind];
        }),
        (exports.isAttribute = function(e) {
          return null != i[e.kind];
        }),
        (exports.isAttributeValue = function(e) {
          return null != a[e.attrValueKind];
        }),
        (exports.traverseExpression = function(e, t) {
          if (!1 === t(e)) return !1;
          if (exports.isNode(e))
            switch (e.kind) {
              case r.Element:
                return p(e.attributes, t) && p(e.children, t);
              case r.Fragment:
                return p(e.children, t);
              case r.StyleElement:
                return s.traverseSheet(e.sheet, t);
            }
          return !0;
        }),
        (exports.getCompletionItems = function(e, t) {
          exports.traverseExpression(e, function(e) {
            e.location || console.error("ERRRR", e);
          });
        });
      var p = function(e, t) {
        for (var n = 0, r = e; n < r.length; n++) {
          var i = r[n];
          if (!exports.traverseExpression(i, t)) return !1;
        }
        return !0;
      };
      exports.getNestedReferences = function(e, t) {
        if ((void 0 === t && (t = []), e.kind === r.Slot))
          !(function(e, t) {
            void 0 === t && (t = []),
              e.jsKind === o.StatementKind.Reference && t.push([e, null]);
          })(e.script, t);
        else {
          if (e.kind === r.Element)
            for (var n = 0, s = e.attributes; n < s.length; n++) {
              var c = s[n];
              c.kind == i.KeyValueAttribute &&
              c.value &&
              c.value.attrValueKind === a.Slot
                ? c.value.script.jsKind === o.StatementKind.Node
                  ? exports.getNestedReferences(c.value.script, t)
                  : c.value.script.jsKind === o.StatementKind.Reference &&
                    t.push([c.value.script, c.name])
                : c.kind === i.ShorthandAttribute &&
                  c.reference.jsKind === o.StatementKind.Reference
                ? t.push([c.reference, c.reference[0]])
                : c.kind === i.SpreadAttribute &&
                  c.script.jsKind === o.StatementKind.Reference &&
                  t.push([c.script, c.script[0]]);
            }
          for (var l = 0, u = exports.getChildren(e); l < u.length; l++) {
            var p = u[l];
            (p.kind === r.Element &&
              exports.hasAttribute(d.PREVIEW_ATTR_NAME, p)) ||
              exports.getNestedReferences(p, t);
          }
        }
        return t;
      };
    },
    180: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    181: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    182: function(e, t, n) {
      "use strict";
      n.r(t);
      n(150);
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.getPrettyMessage = void 0),
        (exports.getPrettyMessage = function(e, t, n) {
          var i = e.location,
            a = "";
          (a += "Error: " + e.message + "\n"), (a += "In " + n + ":\n");
          var o = r(t, i.start, i.end),
            s = o.lineStart;
          o.lines;
          return (a += "L" + s + " " + t.substr(i.start, i.end));
        });
      var r = function(e, t, n) {
        for (
          var r = e.split("\n"), i = -1, a = -1, o = 0, s = 0, c = r.length;
          s < c;
          s++
        ) {
          (o += r[s].length),
            -1 === i && o >= t && (i = s),
            -1 !== i && -1 === a && o <= n && (a = s);
        }
        return { lineStart: i, lines: r.slice(i, a + 1) };
      };
    },
    183: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DependencyContentKind = void 0),
        (function(e) {
          (e.Node = "Node"), (e.Stylsheet = "Stylesheet");
        })(t.DependencyContentKind || (t.DependencyContentKind = {}));
    },
    184: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.stringifyVirtualNode = void 0);
      var r = n(166),
        i = new (n(205).Html5Entities)();
      t.stringifyVirtualNode = function(e) {
        switch (e.kind) {
          case "Fragment":
            return a(e);
          case "Element":
            var t = "<" + e.tagName;
            for (var n in e.attributes) {
              var o = e.attributes[n];
              t += o ? " " + n + '="' + o + '"' : " " + n;
            }
            return (t += ">" + a(e) + "</" + e.tagName + ">");
          case "StyleElement":
            return "<style>" + r.stringifyCSSSheet(e.sheet, null) + "</style>";
          case "Text":
            return i.decode(e.value);
          default:
            throw new Error("can't handle " + e.kind);
        }
      };
      var a = function(e) {
        return e.children.map(t.stringifyVirtualNode).join("");
      };
    },
    185: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VirtRuleKind = void 0),
        (function(e) {
          (e.Style = "Style"), (e.Media = "Media");
        })(t.VirtRuleKind || (t.VirtRuleKind = {}));
    },
    186: function(e, t, n) {
      "use strict";
      n.r(t);
      n(147), n(151);
      var r = function() {
          return (r =
            Object.assign ||
            function(e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        i = function() {
          for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
          var r = Array(e),
            i = 0;
          for (t = 0; t < n; t++)
            for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++)
              r[i] = a[o];
          return r;
        };
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.getVirtTarget = exports.patchVirtNode = void 0);
      var a = n(167),
        o = n(162);
      (exports.patchVirtNode = function(e, t) {
        for (var n = 0, i = t; n < i.length; n++) {
          var o = i[n],
            c = exports.getVirtTarget(e, o.nodePath),
            l = o.action;
          switch (l.kind) {
            case a.ActionKind.DeleteChild:
              (u = c.children.concat()).splice(l.index, 1),
                (c = r(r({}, c), { children: u }));
              break;
            case a.ActionKind.InsertChild:
              var u;
              (u = c.children.concat()).splice(l.index, 0, l.child),
                (c = r(r({}, c), { children: u }));
              break;
            case a.ActionKind.ReplaceNode:
              c = l.replacement;
              break;
            case a.ActionKind.RemoveAttribute:
              ((d = r({}, c.attributes))[l.name] = void 0),
                (c = r(r({}, c), { attributes: d }));
              break;
            case a.ActionKind.SetAttribute:
              var d;
              ((d = r({}, c.attributes))[l.name] = l.value),
                (c = r(r({}, c), { attributes: d }));
              break;
            case a.ActionKind.SetText:
              c = r(r({}, c), { value: l.value });
              break;
            case a.ActionKind.SourceChanged:
          }
          e = s(e, o.nodePath, c);
        }
        return e;
      }),
        (exports.getVirtTarget = function(e, t) {
          return t.reduce(function(e, t) {
            return e.children[t];
          }, e);
        });
      var s = function e(t, n, a, s) {
        return (
          void 0 === s && (s = 0),
          s === n.length ||
          t.kind === o.VirtualNodeKind.Text ||
          t.kind === o.VirtualNodeKind.StyleElement
            ? a
            : r(r({}, t), {
                children: i(
                  t.children.slice(0, n[s]),
                  [e(t.children[n[s]], n, a, s + 1)],
                  t.children.slice(n[s] + 1)
                )
              })
        );
      };
    },
    187: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    188: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PaperclipSourceWatcher = t.ChangeKind = void 0);
      var r,
        i = n(92),
        a = n(146),
        o = n(145),
        s = n(173),
        c = n(152);
      !(function(e) {
        (e[(e.Removed = 0)] = "Removed"),
          (e[(e.Added = 1)] = "Added"),
          (e[(e.Changed = 2)] = "Changed");
      })((r = t.ChangeKind || (t.ChangeKind = {})));
      var l = { add: r.Added, unlink: r.Removed, change: r.Changed },
        u = (function() {
          function e(e, t) {
            (this.config = e),
              (this.cwd = t),
              (this._em = new s.EventEmitter()),
              this._init();
          }
          return (
            (e.prototype.onChange = function(e) {
              var t = this;
              return (
                this._em.on("change", e),
                function() {
                  return t._em.off("change", e);
                }
              );
            }),
            (e.prototype.dispose = function() {
              this._watcher.close();
            }),
            (e.prototype._init = function() {
              var e = this;
              (this._watcher = i.watch(
                c.paperclipSourceGlobPattern(this.config.sourceDirectory),
                { cwd: this.cwd, ignoreInitial: !0 }
              )).on("all", function(t, n) {
                var r = "/" !== n.charAt(0) ? a.join(e.cwd, n) : n,
                  i = l[t];
                i && e._em.emit("change", i, o.pathToFileURL(r).href);
              });
            }),
            e
          );
        })();
      t.PaperclipSourceWatcher = u;
    },
    189: function(e, t, n) {
      e.exports = n(190);
    },
    190: function(e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function(e, t, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function() {
                      return t[n];
                    }
                  });
              }
            : function(e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        i =
          (this && this.__exportStar) ||
          function(e, t) {
            for (var n in e)
              "default" === n || t.hasOwnProperty(n) || r(t, e, n);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), i(n(191), t);
    },
    191: function(e, t, n) {
      "use strict";
      n.r(t);
      n(151), n(157), n(158);
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.Renderer = void 0);
      var r,
        i = n(169),
        a = n(145),
        o = n(144),
        s = n(173),
        c = n(155),
        l = n(192);
      !(function(e) {
        (e.META_CLICK = "META_CLICK"),
          (e.ERROR_BANNER_CLICK = "ERROR_BANNER_CLICK");
      })(r || (r = {}));
      var u = (function() {
        function e(e, t, n) {
          var a = this;
          void 0 === n && (n = document),
            (this.protocol = e),
            (this.targetUri = t),
            (this._domFactory = n),
            (this._dependencies = []),
            (this.onMetaClick = function(e) {
              a._em.addListener(r.META_CLICK, e);
            }),
            (this.onErrorBannerClick = function(e) {
              a._em.addListener(r.ERROR_BANNER_CLICK, e);
            }),
            (this.initialize = function(e) {
              var t = e.sheet,
                n = e.preview,
                r = e.importedSheets;
              d(a._stage),
                d(a._mainStyleContainer),
                d(a._importedStylesContainer),
                (a._virtualRootNode = n);
              var o = i.createNativeNode(n, a._domFactory, a.protocol, null);
              (a._dependencies = r.map(function(e) {
                return e.uri;
              })),
                a._addSheets(r);
              var s = i.createNativeStyleFromSheet(
                t,
                a._domFactory,
                a.protocol
              );
              a._mainStyleContainer.appendChild(s), a._stage.appendChild(o);
            }),
            (this._onErrorBannerClick = function(e) {
              a._clearErrors(), a._em.emit(r.ERROR_BANNER_CLICK, e);
            }),
            (this.handleEngineEvent = function(e) {
              switch ((a._clearErrors(), e.kind)) {
                case o.EngineEventKind.Error:
                  a.handleError(e);
                  break;
                case o.EngineEventKind.ChangedSheets:
                  e.uri === a.targetUri &&
                    ((a._dependencies = e.data.allDependencies),
                    a._addSheets(e.data.newSheets),
                    a._removeSheets(e.data.removedSheetUris));
                  break;
                case o.EngineEventKind.Loaded:
                  e.uri === a.targetUri &&
                    ((a._dependencies = e.data.allDependencies),
                    a.initialize(e.data));
                  break;
                case o.EngineEventKind.Evaluated:
                  if (e.uri === a.targetUri)
                    a._dependencies = e.data.allDependencies;
                  else if (a._dependencies.includes(e.uri)) {
                    (s = a._importedStyles[e.uri]) && s.remove();
                    var t = (a._importedStyles[
                      e.uri
                    ] = i.createNativeStyleFromSheet(
                      e.data.sheet,
                      a._domFactory,
                      a.protocol
                    ));
                    a._importedStylesContainer.appendChild(t);
                  }
                  break;
                case o.EngineEventKind.Diffed:
                  if (e.uri === a.targetUri) {
                    if (
                      (l.patchNativeNode(
                        a._stage,
                        e.data.mutations,
                        a._domFactory,
                        a.protocol
                      ),
                      (a._virtualRootNode = o.patchVirtNode(
                        a._virtualRootNode,
                        e.data.mutations
                      )),
                      e.data.sheet)
                    ) {
                      d(a._mainStyleContainer);
                      var n = i.createNativeStyleFromSheet(
                        e.data.sheet,
                        a._domFactory,
                        a.protocol
                      );
                      a._mainStyleContainer.appendChild(n);
                    }
                    for (var r in a._importedStyles) {
                      if (!e.data.allDependencies.includes(r))
                        (n = a._importedStyles[r]).remove(),
                          delete a._importedStyles[r];
                    }
                  } else if (e.data.sheet) {
                    var s;
                    (s = a._importedStyles[e.uri]) && s.remove();
                    var c = (a._importedStyles[
                      e.uri
                    ] = i.createNativeStyleFromSheet(
                      e.data.sheet,
                      a._domFactory,
                      a.protocol
                    ));
                    a._importedStylesContainer.appendChild(c);
                  }
              }
            }),
            (this._onStageMouseDown = function(e) {
              e.preventDefault(), e.stopImmediatePropagation();
              var t = e.target;
              if (1 === t.nodeType && e.metaKey) {
                var n = i.getNativeNodePath(a.mount, t),
                  s = o.getVirtTarget(a._virtualRootNode, n);
                s && a._em.emit(r.META_CLICK, s);
              }
            }),
            (this._onStageMouseOver = function(e) {
              var t = e.target,
                n = t.ownerDocument.defaultView;
              if (1 === t.nodeType && e.metaKey) {
                a.mount.style.cursor = "pointer";
                var r = t.getBoundingClientRect();
                Object.assign(a._hoverOverlay.style, {
                  display: "block",
                  left: n.document.body.scrollLeft + r.left + "px",
                  top: n.document.body.scrollTop + r.top + "px",
                  width: r.width + "px",
                  height: r.height + "px"
                });
              }
            }),
            (this._onStageMouseOut = function(e) {
              1 === e.target.nodeType &&
                ((a.mount.style.cursor = "default"),
                Object.assign(a._hoverOverlay.style, { display: "none" }));
            }),
            (this._importedStyles = {}),
            (this._em = new s.EventEmitter()),
            (this._errorOverlay = n.createElement("div")),
            Object.assign(this._errorOverlay.style, {
              zIndex: 1024,
              position: "fixed",
              top: 0,
              left: 0
            }),
            (this._hoverOverlay = n.createElement("div")),
            Object.assign(this._hoverOverlay.style, {
              position: "absolute",
              zIndex: 1024,
              display: "none",
              background: "rgba(124, 154, 236, 0.5)",
              width: "100px",
              height: "100px",
              cursor: "pointer",
              pointerEvents: "none",
              top: "0px",
              left: "0px"
            }),
            (this._stage = this._domFactory.createElement("div")),
            (this.mount = this._domFactory.createElement("div")),
            (this._mainStyleContainer = this._domFactory.createElement("div")),
            (this._importedStylesContainer = this._domFactory.createElement(
              "div"
            )),
            this.mount.appendChild(this._importedStylesContainer),
            this.mount.appendChild(this._mainStyleContainer),
            this.mount.appendChild(this._stage),
            this.mount.appendChild(this._hoverOverlay),
            this.mount.appendChild(this._errorOverlay),
            this._stage.addEventListener(
              "mousedown",
              this._onStageMouseDown,
              !0
            ),
            this._stage.addEventListener("mouseup", c.preventDefault, !0),
            this._stage.addEventListener("mouseover", this._onStageMouseOver),
            this._stage.addEventListener("mouseout", this._onStageMouseOut);
        }
        return (
          (e.prototype._addSheets = function(e) {
            for (var t = 0, n = e; t < n.length; t++) {
              var r = n[t],
                a = r.uri,
                o = r.sheet,
                s = i.createNativeStyleFromSheet(
                  o,
                  this._domFactory,
                  this.protocol
                );
              (this._importedStyles[a] = s),
                this._importedStylesContainer.appendChild(s);
            }
          }),
          (e.prototype._removeSheets = function(e) {
            for (var t = 0, n = e; t < n.length; t++) {
              var r = n[t];
              this._importedStyles[r].remove(), delete this._importedStyles[r];
            }
          }),
          (e.prototype._clearErrors = function() {
            d(this._errorOverlay);
          }),
          (e.prototype.handleError = function(e) {
            var t,
              n = e.uri;
            if ("undefined" != typeof window && n !== this.targetUri) {
              switch (e.errorKind) {
                case o.EngineErrorKind.Graph:
                  t = e.info.message;
                  break;
                default:
                  t = e.message;
              }
              var r = this._domFactory.createElement("div");
              try {
                (r.innerHTML =
                  '\n      <div style="position: fixed; cursor: pointer; bottom: 0; width: 100%; word-break: break-word; box-sizing: border-box; font-family: Helvetica; padding: 10px; background: rgb(255, 152, 152); color: rgb(138, 31, 31); line-height: 1.1em">\n        <div style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">\n          Error&nbsp;in&nbsp;' +
                  a.fileURLToPath(n) +
                  ':\n        </div>\n        <div style="font-size: 14px;">\n        ' +
                  t +
                  "\n        </div>\n      </div>\n      "),
                  (r.onclick = this._onErrorBannerClick.bind(this, e)),
                  this._errorOverlay.appendChild(r);
              } catch (i) {}
            }
          }),
          e
        );
      })();
      exports.Renderer = u;
      var d = function(e) {
        for (; e.childNodes.length; ) e.removeChild(e.childNodes[0]);
      };
    },
    192: function(e, t, n) {
      "use strict";
      n.r(t);
      n(149), n(147);
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.patchNativeNode = void 0);
      var r = n(174),
        i = n(169),
        a = n(144),
        o = n(155),
        s = new r.Html5Entities();
      exports.patchNativeNode = function(e, t, n, r) {
        for (var l = 0, u = t; l < u.length; l++) {
          var d = u[l],
            p = c(e, d),
            f = d.action;
          switch (f.kind) {
            case a.ActionKind.DeleteChild:
              var m = p.childNodes[f.index];
              p.removeChild(m);
              break;
            case a.ActionKind.InsertChild:
              var h = i.createNativeNode(f.child, n, r, p.namespaceURI);
              f.index >= p.childNodes.length
                ? p.appendChild(h)
                : p.insertBefore(h, p.childNodes[f.index]);
              break;
            case a.ActionKind.ReplaceNode:
              var g = p.parentNode;
              g.insertBefore(
                i.createNativeNode(f.replacement, n, r, g.namespaceURI),
                p
              ),
                p.remove();
              break;
            case a.ActionKind.RemoveAttribute:
              (v = p).removeAttribute(o.ATTR_ALIASES[f.name] || f.name);
              break;
            case a.ActionKind.SetAttribute:
              var v = p,
                _ = o.ATTR_ALIASES[f.name] || f.name,
                b = f.value || "";
              0 === b.indexOf("file:") && (b = b.replace("file:", r)),
                v.setAttribute(_, b);
              break;
            case a.ActionKind.SetText:
              p.nodeValue = s.decode(f.value);
          }
        }
      };
      var c = function(e, t) {
        return t.nodePath.reduce(function(e, t) {
          return e.childNodes[t];
        }, e);
      };
    },
    193: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "createComponentClass", function() {
          return j;
        });
      n(93), n(12), n(150);
      var r = n(195),
        i = r.memo(
          r.forwardRef(function(e, t) {
            return r.createElement(
              "li",
              {
                "data-pc-fab8095a": !0,
                ref: t,
                key: "0",
                className:
                  "_fab8095a_tab tab" +
                  (e.selected ? " _fab8095a_tab--selected tab--selected" : ""),
                onClick: e.onClick
              },
              e.children
            );
          })
        ),
        a = r.memo(
          r.forwardRef(function(e, t) {
            return r.createElement(
              "div",
              {
                "data-pc-fab8095a": !0,
                ref: t,
                key: "1",
                className: "_fab8095a_code code"
              },
              r.createElement(
                "ul",
                {
                  "data-pc-fab8095a": !0,
                  key: "2",
                  className: "_fab8095a_tabs tabs"
                },
                e.tabs
              ),
              r.createElement(
                "div",
                {
                  "data-pc-fab8095a": !0,
                  key: "3",
                  className: "_fab8095a_content content"
                },
                e.children
              )
            );
          })
        ),
        o = r.memo(
          r.forwardRef(function(e, t) {
            return r.createElement(
              "div",
              {
                "data-pc-fab8095a": !0,
                ref: t,
                key: "4",
                className: "_fab8095a_Preview Preview"
              },
              r.createElement(
                "div",
                {
                  "data-pc-fab8095a": !0,
                  key: "5",
                  className: "_fab8095a_header header"
                },
                r.createElement(
                  "span",
                  {
                    "data-pc-fab8095a": !0,
                    key: "6",
                    className: "_fab8095a_bolt bolt"
                  },
                  "\u26a1\ufe0f"
                ),
                " Preview\n  "
              ),
              r.createElement("iframe", {
                "data-pc-fab8095a": !0,
                key: "7",
                ref: e.iframeRef
              })
            );
          })
        ),
        s = r.memo(
          r.forwardRef(function(e, t) {
            return r.createElement(
              "div",
              {
                "data-pc-fab8095a": !0,
                ref: t,
                key: "8",
                className: "_fab8095a_Editor Editor"
              },
              e.children
            );
          })
        ),
        c = n(176);
      let l;
      const u = new Array(32).fill(void 0);
      function d(e) {
        return u[e];
      }
      u.push(void 0, null, !0, !1);
      let p = u.length;
      function f(e) {
        const t = d(e);
        return (
          (function(e) {
            e < 36 || ((u[e] = p), (p = e));
          })(e),
          t
        );
      }
      let m = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 });
      m.decode();
      let h = null;
      function g() {
        return (
          (null !== h && h.buffer === l.memory.buffer) ||
            (h = new Uint8Array(l.memory.buffer)),
          h
        );
      }
      function v(e, t) {
        return m.decode(g().subarray(e, e + t));
      }
      function _(e) {
        p === u.length && u.push(u.length + 1);
        const t = p;
        return (p = u[t]), (u[t] = e), t;
      }
      let b = 0,
        y = new TextEncoder("utf-8");
      const x =
        "function" == typeof y.encodeInto
          ? function(e, t) {
              return y.encodeInto(e, t);
            }
          : function(e, t) {
              const n = y.encode(e);
              return t.set(n), { read: e.length, written: n.length };
            };
      function E(e, t, n) {
        if (void 0 === n) {
          const n = y.encode(e),
            r = t(n.length);
          return (
            g()
              .subarray(r, r + n.length)
              .set(n),
            (b = n.length),
            r
          );
        }
        let r = e.length,
          i = t(r);
        const a = g();
        let o = 0;
        for (; o < r; o++) {
          const t = e.charCodeAt(o);
          if (t > 127) break;
          a[i + o] = t;
        }
        if (o !== r) {
          0 !== o && (e = e.slice(o)), (i = n(i, r, (r = o + 3 * e.length)));
          const t = g().subarray(i + o, i + r);
          o += x(e, t).written;
        }
        return (b = o), i;
      }
      let S = null;
      function N() {
        return (
          (null !== S && S.buffer === l.memory.buffer) ||
            (S = new Int32Array(l.memory.buffer)),
          S
        );
      }
      function w(e) {
        return function() {
          try {
            return e.apply(this, arguments);
          } catch (t) {
            l.__wbindgen_exn_store(_(t));
          }
        };
      }
      class A {
        static __wrap(e) {
          const t = Object.create(A.prototype);
          return (t.ptr = e), t;
        }
        free() {
          const e = this.ptr;
          (this.ptr = 0), l.__wbg_nativeengine_free(e);
        }
        static new(e, t, n) {
          var r = l.nativeengine_new(_(e), _(t), _(n));
          return A.__wrap(r);
        }
        load(e) {
          var t = E(e, l.__wbindgen_malloc, l.__wbindgen_realloc),
            n = b;
          return f(l.nativeengine_load(this.ptr, t, n));
        }
        run(e) {
          var t = E(e, l.__wbindgen_malloc, l.__wbindgen_realloc),
            n = b;
          return f(l.nativeengine_run(this.ptr, t, n));
        }
        add_listener(e) {
          l.nativeengine_add_listener(this.ptr, _(e));
        }
        get_loaded_ast(e) {
          var t = E(e, l.__wbindgen_malloc, l.__wbindgen_realloc),
            n = b;
          return f(l.nativeengine_get_loaded_ast(this.ptr, t, n));
        }
        parse_content(e) {
          var t = E(e, l.__wbindgen_malloc, l.__wbindgen_realloc),
            n = b;
          return f(l.nativeengine_parse_content(this.ptr, t, n));
        }
        parse_file(e) {
          var t = E(e, l.__wbindgen_malloc, l.__wbindgen_realloc),
            n = b;
          return f(l.nativeengine_parse_file(this.ptr, t, n));
        }
        update_virtual_file_content(e, t) {
          var n = E(e, l.__wbindgen_malloc, l.__wbindgen_realloc),
            r = b,
            i = E(t, l.__wbindgen_malloc, l.__wbindgen_realloc),
            a = b;
          l.nativeengine_update_virtual_file_content(this.ptr, n, r, i, a);
        }
      }
      const C = (async function e(t) {
          void 0 === t && (t = _NOOP_.replace(/\.js$/, "_bg.wasm"));
          const n = { wbg: {} };
          (n.wbg.__wbindgen_object_drop_ref = function(e) {
            f(e);
          }),
            (n.wbg.__wbindgen_string_new = function(e, t) {
              return _(v(e, t));
            }),
            (n.wbg.__wbindgen_json_parse = function(e, t) {
              return _(JSON.parse(v(e, t)));
            }),
            (n.wbg.__wbg_call_0d50cec2d58307ad = w(function(e, t, n) {
              return _(d(e).call(d(t), d(n)));
            })),
            (n.wbg.__wbg_call_56e03f05ec7df758 = w(function(e, t, n, r) {
              return _(d(e).call(d(t), d(n), d(r)));
            })),
            (n.wbg.__wbg_new_59cb74e423758ede = function() {
              return _(new Error());
            }),
            (n.wbg.__wbg_stack_558ba5917b466edd = function(e, t) {
              var n = E(d(t).stack, l.__wbindgen_malloc, l.__wbindgen_realloc),
                r = b;
              (N()[e / 4 + 1] = r), (N()[e / 4 + 0] = n);
            }),
            (n.wbg.__wbg_error_4bb6c2a97407129a = function(e, t) {
              try {
                console.error(v(e, t));
              } finally {
                l.__wbindgen_free(e, t);
              }
            }),
            (n.wbg.__wbindgen_string_get = function(e, t) {
              const n = d(t);
              var r = "string" == typeof n ? n : void 0,
                i =
                  null == r
                    ? 0
                    : E(r, l.__wbindgen_malloc, l.__wbindgen_realloc),
                a = b;
              (N()[e / 4 + 1] = a), (N()[e / 4 + 0] = i);
            }),
            (n.wbg.__wbindgen_boolean_get = function(e) {
              const t = d(e);
              return "boolean" == typeof t ? (t ? 1 : 0) : 2;
            }),
            (n.wbg.__wbindgen_debug_string = function(e, t) {
              var n = E(
                  (function e(t) {
                    const n = typeof t;
                    if ("number" == n || "boolean" == n || null == t)
                      return "" + t;
                    if ("string" == n) return `"${t}"`;
                    if ("symbol" == n) {
                      const e = t.description;
                      return null == e ? "Symbol" : `Symbol(${e})`;
                    }
                    if ("function" == n) {
                      const e = t.name;
                      return "string" == typeof e && e.length > 0
                        ? `Function(${e})`
                        : "Function";
                    }
                    if (Array.isArray(t)) {
                      const n = t.length;
                      let r = "[";
                      n > 0 && (r += e(t[0]));
                      for (let i = 1; i < n; i++) r += ", " + e(t[i]);
                      return (r += "]"), r;
                    }
                    const r = /\[object ([^\]]+)\]/.exec(toString.call(t));
                    let i;
                    if (!(r.length > 1)) return toString.call(t);
                    if (((i = r[1]), "Object" == i))
                      try {
                        return "Object(" + JSON.stringify(t) + ")";
                      } catch (a) {
                        return "Object";
                      }
                    return t instanceof Error
                      ? `${t.name}: ${t.message}\n${t.stack}`
                      : i;
                  })(d(t)),
                  l.__wbindgen_malloc,
                  l.__wbindgen_realloc
                ),
                r = b;
              (N()[e / 4 + 1] = r), (N()[e / 4 + 0] = n);
            }),
            (n.wbg.__wbindgen_throw = function(e, t) {
              throw new Error(v(e, t));
            }),
            ("string" == typeof t ||
              ("function" == typeof Request && t instanceof Request) ||
              ("function" == typeof URL && t instanceof URL)) &&
              (t = fetch(t));
          const { instance: r, module: i } = await (async function(e, t) {
            if ("function" == typeof Response && e instanceof Response) {
              if ("function" == typeof WebAssembly.instantiateStreaming)
                try {
                  return await WebAssembly.instantiateStreaming(e, t);
                } catch (n) {
                  if ("application/wasm" == e.headers.get("Content-Type"))
                    throw n;
                  console.warn(
                    "`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
                    n
                  );
                }
              const r = await e.arrayBuffer();
              return await WebAssembly.instantiate(r, t);
            }
            {
              const n = await WebAssembly.instantiate(e, t);
              return n instanceof WebAssembly.Instance
                ? { instance: n, module: e }
                : n;
            }
          })(await t, n);
          return (l = r.exports), (e.__wbindgen_wasm_module = i), l;
        })("/paperclip_bg.wasm"),
        R = Object(c.createEngine)(async (...e) => (await C, A.new(...e)));
      var P = n(206),
        k = n.n(P),
        O = n(207),
        K = n(189),
        T = n(208),
        F = n.n(T),
        I =
          (n(209),
          n(210),
          n(211),
          n(212),
          n(94),
          function(e, t, n, r) {
            return new (n || (n = Promise))(function(i, a) {
              function o(e) {
                try {
                  c(r.next(e));
                } catch (t) {
                  a(t);
                }
              }
              function s(e) {
                try {
                  c(r.throw(e));
                } catch (t) {
                  a(t);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function(e) {
                          e(t);
                        })).then(o, s);
              }
              c((r = r.apply(e, t || [])).next());
            });
          });
      const j = ({ React: e, useState: t, useEffect: n, useRef: r }) => {
        const c = F()(e => e, { serializer: e => JSON.stringify(e) }),
          l = ({ engine: i, currentUri: a }) => {
            const [s, c] = t();
            let l;
            const u = r();
            return (
              n(() => {
                if (!i || !s) return;
                let e;
                l = new K.Renderer("http://", a);
                const t = () =>
                  I(void 0, void 0, void 0, function*() {
                    try {
                      l.initialize(yield i.run(a)),
                        (e = i.onEvent(l.handleEngineEvent));
                    } catch (n) {
                      console.warn(n);
                      const e = i.onEvent(n => {
                        e(), t();
                      });
                    }
                  });
                return (
                  t(),
                  s.appendChild(l.mount),
                  () => {
                    e && e(), s.removeChild(l.mount);
                  }
                );
              }, [i, a, s]),
              n(() => {
                if (s) return;
                const e = setInterval(() => {
                  var e, t;
                  (null ===
                    (t =
                      null === (e = u.current) || void 0 === e
                        ? void 0
                        : e.contentDocument) || void 0 === t
                    ? void 0
                    : t.body) && c(u.current.contentDocument.body);
                }, 500);
                return () => {
                  clearInterval(e);
                };
              }, [s]),
              e.createElement(o, { iframeRef: u })
            );
          };
        return ({ graph: r, defaultUri: o }) => {
          const u = c(r),
            [d, p] = t(u),
            [f, m] = t(o),
            h = d[f],
            g = (e => {
              const [r, i] = t(null);
              return (
                n(() => {
                  R({
                    io: {
                      readFile: t => e[t],
                      resolveFile: (e, t) => t.replace("./", ""),
                      fileExists: t => Boolean(e[t])
                    }
                  }).then(e => {
                    i(e);
                  });
                }, [e]),
                r
              );
            })(u);
          return e.createElement(
            s,
            null,
            e.createElement(
              a,
              {
                tabs: e.createElement(
                  e.Fragment,
                  null,
                  Object.keys(d).map(t =>
                    e.createElement(
                      i,
                      { selected: t === f, onClick: () => m(t) },
                      t
                    )
                  )
                )
              },
              e.createElement(k.a, {
                value: h,
                style: { width: "100%", minHeight: "100%" },
                preClassName: "language-html",
                onValueChange: e => {
                  p(Object.assign(Object.assign({}, d), { [f]: e })),
                    g && g.updateVirtualFileContent(f, e);
                },
                highlight: e => Object(O.highlight)(e, O.languages.html)
              })
            ),
            e.createElement(l, { engine: g, currentUri: f })
          );
        };
      };
    },
    196: function(e, t, n) {
      "use strict";
      var r = n(0),
        i = n.n(r),
        a = n(160),
        o = n(143),
        s = n(194),
        c = n(156),
        l = n(214),
        u = n(170),
        d = n(95),
        p = n.n(d);
      const f = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      t.a = function(e) {
        const {
            children: t,
            frontMatter: n,
            metadata: r,
            truncated: d,
            isBlogPostPage: m = !1
          } = e,
          { date: h, permalink: g, tags: v, readingTime: _ } = r,
          { author: b, title: y, image: x } = n,
          E = n.author_url || n.authorURL,
          S = n.author_title || n.authorTitle,
          N = n.author_image_url || n.authorImageURL,
          w = Object(u.a)(x, { absolute: !0 });
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            s.a,
            null,
            x &&
              i.a.createElement("meta", { property: "og:image", content: w }),
            x &&
              i.a.createElement("meta", {
                property: "twitter:image",
                content: w
              }),
            x &&
              i.a.createElement("meta", {
                name: "twitter:image:alt",
                content: "Image for " + y
              })
          ),
          i.a.createElement(
            "article",
            { className: m ? void 0 : "margin-bottom--xl" },
            (() => {
              const e = m ? "h1" : "h2",
                t = h.substring(0, 10).split("-"),
                n = t[0],
                r = f[parseInt(t[1], 10) - 1],
                o = parseInt(t[2], 10);
              return i.a.createElement(
                "header",
                null,
                i.a.createElement(
                  e,
                  {
                    className: Object(a.a)(
                      "margin-bottom--sm",
                      p.a.blogPostTitle
                    )
                  },
                  m ? y : i.a.createElement(c.a, { to: g }, y)
                ),
                i.a.createElement(
                  "div",
                  { className: "margin-vert--md" },
                  i.a.createElement(
                    "time",
                    { dateTime: h, className: p.a.blogPostDate },
                    r,
                    " ",
                    o,
                    ", ",
                    n,
                    " ",
                    _ &&
                      i.a.createElement(
                        i.a.Fragment,
                        null,
                        " \xb7 ",
                        Math.ceil(_),
                        " min read"
                      )
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: "avatar margin-vert--md" },
                  N &&
                    i.a.createElement(
                      "a",
                      {
                        className: "avatar__photo-link avatar__photo",
                        href: E,
                        target: "_blank",
                        rel: "noreferrer noopener"
                      },
                      i.a.createElement("img", { src: N, alt: b })
                    ),
                  i.a.createElement(
                    "div",
                    { className: "avatar__intro" },
                    b &&
                      i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(
                          "h4",
                          { className: "avatar__name" },
                          i.a.createElement(
                            "a",
                            {
                              href: E,
                              target: "_blank",
                              rel: "noreferrer noopener"
                            },
                            b
                          )
                        ),
                        i.a.createElement(
                          "small",
                          { className: "avatar__subtitle" },
                          S
                        )
                      )
                  )
                )
              );
            })(),
            i.a.createElement(
              "section",
              { className: "markdown" },
              i.a.createElement(o.a, { components: l.a }, t)
            ),
            (v.length > 0 || d) &&
              i.a.createElement(
                "footer",
                { className: "row margin-vert--lg" },
                v.length > 0 &&
                  i.a.createElement(
                    "div",
                    { className: "col" },
                    i.a.createElement("strong", null, "Tags:"),
                    v.map(({ label: e, permalink: t }) =>
                      i.a.createElement(
                        c.a,
                        { key: t, className: "margin-horiz--sm", to: t },
                        e
                      )
                    )
                  ),
                d &&
                  i.a.createElement(
                    "div",
                    { className: "col text--right" },
                    i.a.createElement(
                      c.a,
                      { to: r.permalink, "aria-label": "Read more about " + y },
                      i.a.createElement("strong", null, "Read More")
                    )
                  )
              )
          )
        );
      };
    },
    198: function(e, t, n) {
      "use strict";
      n(149), n(171);
      var r = n(159),
        i = (n(150), n(0)),
        a = n.n(i),
        o = n(213),
        s = (0, n(193).createComponentClass)({
          React: a.a,
          useState: i.useState,
          useEffect: i.useEffect,
          useRef: i.useRef
        });
      t.a = function(e) {
        if (e.live) {
          for (
            var t,
              n,
              i = String(e.children)
                .split(/\/\/\s*file:\s*/g)
                .filter(Boolean),
              c = {},
              l = Object(r.a)(i);
            !(n = l()).done;

          ) {
            var u = n.value;
            u.match(/(.*?\.pc)/) || console.log("ERR", u);
            var d = (u.match(/(.*?\.pc)/) || [, "entry.pc"])[1];
            t || (t = d);
            var p = u.replace(d, "").trim();
            c[d] = p;
          }
          return (
            console.log(c),
            console.log(e.children),
            a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(s, { graph: c, defaultUri: t })
            )
          );
        }
        return a.a.createElement(o.a, e);
      };
    }
  }
]);