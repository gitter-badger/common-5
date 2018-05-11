"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toCurrency(value, reduce = true) {
    return (reduce ? value / 100 : value).toLocaleString('en-UK', {
        minimumFractionDigits: 2,
    });
}
exports.toCurrency = toCurrency;
//# sourceMappingURL=to-currency.js.map