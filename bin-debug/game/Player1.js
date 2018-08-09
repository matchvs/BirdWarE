var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Player1 = (function (_super) {
    __extends(Player1, _super);
    function Player1() {
        return _super.call(this) || this;
    }
    return Player1;
}(Player));
__reflect(Player1.prototype, "Player1");
//# sourceMappingURL=Player1.js.map