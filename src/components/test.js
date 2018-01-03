exports.ids = [0], exports.modules = {
    11: function (e, t, a) {
        var s = a(12);
        "string" == typeof s && (s = [[e.i, s, ""]]), s.locals && (e.exports = s.locals);
        var n = a(10);
        e.exports.__inject__ = function (e) {
            n("5a0d4e3a", s, !0, e)
        }
    }, 12: function (e, t, a) {
        t = e.exports = a(9)(void 0), t.push([e.i, ".page2[data-v-5e8e1eda]{background-color:red;font-size:18px}", ""])
    }, 13: function (e, t, a) {
        "use strict";

        function s(e) {
            var t;
            t = a(11), t.__inject__ && t.__inject__(e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var n = {
                    name: "page2", data: function () {
                        return {talk: "hello vue-ssr"}
                    }
                }, r = function () {
                    var e = this, t = e.$createElement;
                    return (e._self._c || t)("div", {staticClass: "page2"}, [e._ssrNode(e._ssrEscape("n    this page's name is page2n    say:" + e._s(e.talk) + "n"))])
                }, o = [], i = {render: r, staticRenderFns: o}, c = i, _ = a(0), d = s,
                u = _(n, c, !1, d, "data-v-5e8e1eda", "5e65e792");
        t.default = u.exports
    }
};