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
var Player2 = (function (_super) {
    __extends(Player2, _super);
    function Player2() {
        return _super.call(this) || this;
    }
    return Player2;
}(Player));
__reflect(Player2.prototype, "Player2");
//# sourceMappingURL=Player2.js.map