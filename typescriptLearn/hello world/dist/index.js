"use strict";
let number = [1, 2, 3, 4, 5];
let user = [1, "Rahul"];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var Size2;
(function (Size2) {
    Size2["Small"] = "s";
    Size2["Medium"] = "m";
    Size2["Large"] = "l";
})(Size2 || (Size2 = {}));
let mySize = Size.Medium;
console.log(mySize);
//# sourceMappingURL=index.js.map