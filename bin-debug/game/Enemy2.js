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
var Enemy2 = (function (_super) {
    __extends(Enemy2, _super);
    function Enemy2() {
        return _super.call(this) || this;
    }
    return Enemy2;
}(Player));
__reflect(Enemy2.prototype, "Enemy2");
//# sourceMappingURL=Enemy2.js.map