(() => {
    var o = {
        324: o => {
            o.exports = function () {
                this.hello = function () {
                    console.log("hello!!!!!")
                }, this.goodbye = function () {
                    console.log("bye!!!!!!!")
                }
            }
        }
    },
        e = {};

    function n(t) {
        var r = e[t];
        if (void 0 !== r) return r.exports;
        var l = e[t] = {
            exports: {}
        };
        return o[t](l, l.exports, n), l.exports
    } (() => {
        const o = new (n(324));
        o.hello(), o.goodbye()
    })()
})();