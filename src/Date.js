"use strict";
function fancyDate() {
    return this.getFullYear() + "/" + (this.getMonth() + 1) + "/" + this.getDate();
}
var days;
days = fancyDate.call(new Date);
console.info(days);
// OutPuts
// 2020/4/24
