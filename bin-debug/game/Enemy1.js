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
var Enemy1 = (function (_super) {
    __extends(Enemy1, _super);
    function Enemy1() {
        return _super.call(this) || this;
    }
    return Enemy1;
}(Player));
__reflect(Enemy1.prototype, "Enemy1");
//# sourceMappingURL=Enemy1.js.map