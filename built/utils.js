module.exports = {
    _C: function (fn) {
        result = fn.apply(null, Array.prototype.slice.call(arguments, 1));
        return result;
    }
};
