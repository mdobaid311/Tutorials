var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Typescript generics
var makeArr = function (x, y) {
    return [x, y];
};
var v1 = makeArr(22, "obaid");
var v2 = makeArr("obaid", 22);
var makeFullName = function (obj) {
    return __assign(__assign({}, obj), { fullName: obj.firstName + " " + obj.lastName });
};
var v3 = makeFullName({ firstName: "mohammed", lastName: "obaid", age: 22 });
var numbertab = {
    id: "tab1",
    position: 3,
    data: 22
};
var stringTab = {
    id: "tab1",
    position: 3,
    data: "mohammed obaid"
};
