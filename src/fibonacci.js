"use strict";
var a = 1;
var b = 1;
console.info(a);
while (a < 50) {
    console.info(b);
    b = a + b;
    a = b - a;
}
//# sourceMappingURL=fibonacci.js.map